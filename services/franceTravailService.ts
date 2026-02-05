/**
 * Service d'intégration avec l'API France Travail (anciennement Pôle Emploi)
 *
 * Documentation officielle: https://francetravail.io/data/api/offres-emploi
 *
 * Ce service permet de :
 * - Authentification OAuth2
 * - Recherche d'offres d'emploi par code ROME
 * - Recherche par mots-clés
 * - Filtrage par localisation, type de contrat, etc.
 */

import { getRomeCode, getSearchKeywords, RomeMapping } from './romeMapping';

// ============== Types et Interfaces ==============

export interface FranceTravailConfig {
  clientId: string;
  clientSecret: string;
}

export interface AccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  expiresAt?: number;
}

export interface OffreEmploi {
  id: string;
  intitule: string;
  description?: string;
  dateCreation: string;
  dateActualisation?: string;
  lieuTravail: {
    libelle?: string;
    latitude?: number;
    longitude?: number;
    codePostal?: string;
    commune?: string;
  };
  romeCode?: string;
  romeLibelle?: string;
  appellationlibelle?: string;
  entreprise?: {
    nom?: string;
    description?: string;
    logo?: string;
    url?: string;
  };
  typeContrat?: string;
  typeContratLibelle?: string;
  natureContrat?: string;
  experienceExige?: string;
  experienceLibelle?: string;
  competences?: Array<{
    code?: string;
    libelle?: string;
    exigence?: string;
  }>;
  salaire?: {
    libelle?: string;
    commentaire?: string;
    complement1?: string;
    complement2?: string;
  };
  dureeTravailLibelle?: string;
  dureeTravailLibelleConverti?: string;
  alternance?: boolean;
  contact?: {
    nom?: string;
    coordonnees1?: string;
    coordonnees2?: string;
    coordonnees3?: string;
  };
  nombrePostes?: number;
  accessibleTH?: boolean;
  qualificationCode?: string;
  qualificationLibelle?: string;
  secteurActivite?: string;
  secteurActiviteLibelle?: string;
  origineOffre?: {
    origine: string;
    urlOrigine?: string;
    partenaires?: Array<{
      nom: string;
      url?: string;
      logo?: string;
    }>;
  };
}

export interface SearchParams {
  codeROME?: string;
  motsCles?: string;
  commune?: string;
  departement?: string;
  region?: string;
  distance?: number;
  typeContrat?: string; // CDI, CDD, MIS (intérim), SAI (saisonnier)
  dureeContratMin?: number;
  dureeContratMax?: number;
  tempsPlein?: boolean;
  experience?: string; // 1 = moins d'1 an, 2 = 1 à 3 ans, 3 = plus de 3 ans
  qualification?: string;
  alternance?: boolean;
  range?: string; // pagination: "0-9", "10-19", etc.
  sort?: number; // 0 = pertinence, 1 = date, 2 = distance
}

export interface SearchResponse {
  resultats: OffreEmploi[];
  filtresPossibles?: Array<{
    filtre: string;
    agregation: Array<{
      valeurPossible: string;
      nbResultats: number;
    }>;
  }>;
  contentRange?: {
    minRange: number;
    maxRange: number;
    total: number;
  };
}

// ============== Constantes ==============

const FRANCE_TRAVAIL_AUTH_URL = 'https://entreprise.francetravail.fr/connexion/oauth2/access_token';
const FRANCE_TRAVAIL_API_URL = 'https://api.francetravail.io/partenaire/offresdemploi/v2';

// Cache du token pour éviter les appels répétés
let cachedToken: AccessToken | null = null;

// ============== Fonctions d'authentification ==============

/**
 * Obtient un token d'accès OAuth2 pour l'API France Travail
 */
export const getAccessToken = async (config: FranceTravailConfig): Promise<AccessToken> => {
  // Vérifier si le token en cache est encore valide
  if (cachedToken && cachedToken.expiresAt && Date.now() < cachedToken.expiresAt) {
    return cachedToken;
  }

  const params = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: config.clientId,
    client_secret: config.clientSecret,
    scope: 'api_offresdemploiv2 o2dsoffre'
  });

  const response = await fetch(`${FRANCE_TRAVAIL_AUTH_URL}?realm=/partenaire`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur d'authentification France Travail: ${response.status} - ${errorText}`);
  }

  const token: AccessToken = await response.json();

  // Calculer l'expiration avec une marge de sécurité de 60 secondes
  token.expiresAt = Date.now() + (token.expires_in - 60) * 1000;
  cachedToken = token;

  return token;
};

// ============== Fonctions de recherche ==============

/**
 * Recherche des offres d'emploi via l'API France Travail
 */
export const searchOffres = async (
  config: FranceTravailConfig,
  params: SearchParams
): Promise<SearchResponse> => {
  const token = await getAccessToken(config);

  // Construire les paramètres de requête
  const queryParams = new URLSearchParams();

  if (params.codeROME) queryParams.append('codeROME', params.codeROME);
  if (params.motsCles) queryParams.append('motsCles', params.motsCles);
  if (params.commune) queryParams.append('commune', params.commune);
  if (params.departement) queryParams.append('departement', params.departement);
  if (params.region) queryParams.append('region', params.region);
  if (params.distance) queryParams.append('distance', params.distance.toString());
  if (params.typeContrat) queryParams.append('typeContrat', params.typeContrat);
  if (params.alternance !== undefined) queryParams.append('alternance', params.alternance.toString());
  if (params.experience) queryParams.append('experience', params.experience);
  if (params.range) queryParams.append('range', params.range);
  if (params.sort !== undefined) queryParams.append('sort', params.sort.toString());

  const response = await fetch(`${FRANCE_TRAVAIL_API_URL}/offres/search?${queryParams.toString()}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token.access_token}`,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur recherche France Travail: ${response.status} - ${errorText}`);
  }

  const data = await response.json();

  // Parser le Content-Range header si présent
  const contentRange = response.headers.get('Content-Range');
  let parsedRange;
  if (contentRange) {
    const match = contentRange.match(/offres (\d+)-(\d+)\/(\d+)/);
    if (match) {
      parsedRange = {
        minRange: parseInt(match[1]),
        maxRange: parseInt(match[2]),
        total: parseInt(match[3]),
      };
    }
  }

  return {
    resultats: data.resultats || [],
    filtresPossibles: data.filtresPossibles,
    contentRange: parsedRange,
  };
};

/**
 * Récupère le détail d'une offre spécifique
 */
export const getOffreById = async (
  config: FranceTravailConfig,
  offreId: string
): Promise<OffreEmploi> => {
  const token = await getAccessToken(config);

  const response = await fetch(`${FRANCE_TRAVAIL_API_URL}/offres/${offreId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token.access_token}`,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur récupération offre France Travail: ${response.status} - ${errorText}`);
  }

  return response.json();
};

// ============== Fonctions utilitaires pour Jobmi ==============

/**
 * Recherche des offres pour un métier Jobmi spécifique
 */
export const searchOffresByMetier = async (
  config: FranceTravailConfig,
  metier: string,
  options?: {
    departement?: string;
    alternance?: boolean;
    maxResults?: number;
  }
): Promise<OffreEmploi[]> => {
  const romeMapping = getRomeCode(metier);
  const keywords = getSearchKeywords(metier);

  const params: SearchParams = {
    range: `0-${(options?.maxResults || 10) - 1}`,
    sort: 1, // Tri par date
  };

  // Utiliser le code ROME si disponible, sinon les mots-clés
  if (romeMapping) {
    params.codeROME = romeMapping.codeRome;
  } else {
    params.motsCles = keywords.join(' ');
  }

  if (options?.departement) {
    params.departement = options.departement;
  }

  if (options?.alternance !== undefined) {
    params.alternance = options.alternance;
  }

  const response = await searchOffres(config, params);
  return response.resultats;
};

/**
 * Recherche des offres pour les résultats du quiz (top 3 métiers)
 */
export const searchOffresForQuizResults = async (
  config: FranceTravailConfig,
  topMetiers: string[],
  options?: {
    departement?: string;
    alternance?: boolean;
    maxResultsPerMetier?: number;
  }
): Promise<{ [metier: string]: OffreEmploi[] }> => {
  const results: { [metier: string]: OffreEmploi[] } = {};

  // Rechercher en parallèle pour chaque métier
  const promises = topMetiers.map(async (metier) => {
    try {
      const offres = await searchOffresByMetier(config, metier, {
        departement: options?.departement,
        alternance: options?.alternance,
        maxResults: options?.maxResultsPerMetier || 5,
      });
      results[metier] = offres;
    } catch (error) {
      console.error(`Erreur recherche pour ${metier}:`, error);
      results[metier] = [];
    }
  });

  await Promise.all(promises);
  return results;
};

/**
 * Recherche des offres d'alternance (adapté aux 18-24 ans)
 */
export const searchAlternance = async (
  config: FranceTravailConfig,
  metier: string,
  departement?: string
): Promise<OffreEmploi[]> => {
  return searchOffresByMetier(config, metier, {
    departement,
    alternance: true,
    maxResults: 10,
  });
};

/**
 * Recherche des stages (utilise les mots-clés "stage")
 */
export const searchStages = async (
  config: FranceTravailConfig,
  metier: string,
  departement?: string
): Promise<OffreEmploi[]> => {
  const romeMapping = getRomeCode(metier);
  const keywords = getSearchKeywords(metier);

  const params: SearchParams = {
    motsCles: `stage ${keywords[0]}`,
    range: '0-9',
    sort: 1,
  };

  if (romeMapping) {
    params.codeROME = romeMapping.codeRome;
  }

  if (departement) {
    params.departement = departement;
  }

  const response = await searchOffres(config, params);
  return response.resultats;
};

// ============== Fonctions de formatage ==============

/**
 * Formate une offre pour l'affichage dans Jobmi
 */
export const formatOffreForDisplay = (offre: OffreEmploi) => {
  return {
    id: offre.id,
    titre: offre.intitule,
    entreprise: offre.entreprise?.nom || 'Entreprise confidentielle',
    lieu: offre.lieuTravail?.libelle || 'Non précisé',
    contrat: offre.typeContratLibelle || offre.typeContrat || 'Non précisé',
    salaire: offre.salaire?.libelle || 'Non communiqué',
    datePublication: new Date(offre.dateCreation).toLocaleDateString('fr-FR'),
    description: offre.description?.substring(0, 200) + '...' || '',
    url: `https://candidat.francetravail.fr/offres/recherche/detail/${offre.id}`,
    alternance: offre.alternance || false,
    experience: offre.experienceLibelle || 'Non précisé',
  };
};

/**
 * Type pour les offres formatées
 */
export type FormattedOffre = ReturnType<typeof formatOffreForDisplay>;
