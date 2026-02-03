import { NextRequest, NextResponse } from 'next/server';
import {
  searchOffres,
  searchOffresByMetier,
  searchOffresForQuizResults,
  searchAlternance,
  searchStages,
  getOffreById,
  formatOffreForDisplay,
  FranceTravailConfig,
  SearchParams,
} from '@/services/franceTravailService';

/**
 * Configuration France Travail depuis les variables d'environnement
 */
const getFranceTravailConfig = (): FranceTravailConfig => {
  const clientId = process.env.FRANCE_TRAVAIL_CLIENT_ID;
  const clientSecret = process.env.FRANCE_TRAVAIL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Les credentials France Travail ne sont pas configurés');
  }

  return { clientId, clientSecret };
};

/**
 * GET /api/france-travail
 *
 * Paramètres supportés:
 * - action: "search" | "metier" | "quiz" | "alternance" | "stages" | "detail"
 * - metier: nom du métier Jobmi
 * - metiers: liste de métiers séparés par des virgules (pour action=quiz)
 * - departement: code département (ex: "75", "69")
 * - id: identifiant de l'offre (pour action=detail)
 * - codeROME: code ROME direct
 * - motsCles: mots-clés de recherche
 * - maxResults: nombre max de résultats (défaut: 10)
 */
export async function GET(request: NextRequest) {
  try {
    const config = getFranceTravailConfig();
    const searchParams = request.nextUrl.searchParams;

    const action = searchParams.get('action') || 'search';
    const metier = searchParams.get('metier');
    const metiers = searchParams.get('metiers')?.split(',');
    const departement = searchParams.get('departement') || undefined;
    const id = searchParams.get('id');
    const codeROME = searchParams.get('codeROME') || undefined;
    const motsCles = searchParams.get('motsCles') || undefined;
    const maxResults = parseInt(searchParams.get('maxResults') || '10');

    let result;

    switch (action) {
      case 'detail':
        // Récupérer le détail d'une offre
        if (!id) {
          return NextResponse.json(
            { error: 'Le paramètre "id" est requis pour action=detail' },
            { status: 400 }
          );
        }
        const offre = await getOffreById(config, id);
        result = formatOffreForDisplay(offre);
        break;

      case 'metier':
        // Rechercher par métier Jobmi
        if (!metier) {
          return NextResponse.json(
            { error: 'Le paramètre "metier" est requis pour action=metier' },
            { status: 400 }
          );
        }
        const offresMetier = await searchOffresByMetier(config, metier, {
          departement,
          maxResults,
        });
        result = {
          metier,
          total: offresMetier.length,
          offres: offresMetier.map(formatOffreForDisplay),
        };
        break;

      case 'quiz':
        // Rechercher pour les résultats du quiz (plusieurs métiers)
        if (!metiers || metiers.length === 0) {
          return NextResponse.json(
            { error: 'Le paramètre "metiers" est requis pour action=quiz' },
            { status: 400 }
          );
        }
        const offresQuiz = await searchOffresForQuizResults(config, metiers, {
          departement,
          maxResultsPerMetier: Math.ceil(maxResults / metiers.length),
        });

        // Formater les résultats
        const formattedQuizResults: { [key: string]: any } = {};
        for (const [m, offres] of Object.entries(offresQuiz)) {
          formattedQuizResults[m] = {
            total: offres.length,
            offres: offres.map(formatOffreForDisplay),
          };
        }
        result = formattedQuizResults;
        break;

      case 'alternance':
        // Rechercher des alternances
        if (!metier) {
          return NextResponse.json(
            { error: 'Le paramètre "metier" est requis pour action=alternance' },
            { status: 400 }
          );
        }
        const offresAlternance = await searchAlternance(config, metier, departement);
        result = {
          metier,
          type: 'alternance',
          total: offresAlternance.length,
          offres: offresAlternance.map(formatOffreForDisplay),
        };
        break;

      case 'stages':
        // Rechercher des stages
        if (!metier) {
          return NextResponse.json(
            { error: 'Le paramètre "metier" est requis pour action=stages' },
            { status: 400 }
          );
        }
        const offresStages = await searchStages(config, metier, departement);
        result = {
          metier,
          type: 'stages',
          total: offresStages.length,
          offres: offresStages.map(formatOffreForDisplay),
        };
        break;

      case 'search':
      default:
        // Recherche générique
        const params: SearchParams = {
          range: `0-${maxResults - 1}`,
          sort: 1,
        };

        if (codeROME) params.codeROME = codeROME;
        if (motsCles) params.motsCles = motsCles;
        if (departement) params.departement = departement;

        const searchResponse = await searchOffres(config, params);
        result = {
          total: searchResponse.contentRange?.total || searchResponse.resultats.length,
          offres: searchResponse.resultats.map(formatOffreForDisplay),
          filtres: searchResponse.filtresPossibles,
        };
        break;
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Erreur API France Travail:', error);

    // Gestion des erreurs spécifiques
    if (error instanceof Error) {
      if (error.message.includes('credentials')) {
        return NextResponse.json(
          {
            error: 'Configuration France Travail manquante',
            message: 'Les credentials API ne sont pas configurés. Veuillez configurer FRANCE_TRAVAIL_CLIENT_ID et FRANCE_TRAVAIL_CLIENT_SECRET.',
          },
          { status: 503 }
        );
      }

      if (error.message.includes('authentification')) {
        return NextResponse.json(
          {
            error: 'Erreur d\'authentification',
            message: 'Impossible de s\'authentifier auprès de France Travail. Vérifiez vos credentials.',
          },
          { status: 401 }
        );
      }
    }

    return NextResponse.json(
      {
        error: 'Erreur serveur',
        message: error instanceof Error ? error.message : 'Une erreur inattendue s\'est produite',
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/france-travail
 *
 * Permet des recherches plus complexes avec un corps JSON
 */
export async function POST(request: NextRequest) {
  try {
    const config = getFranceTravailConfig();
    const body = await request.json();

    const {
      action = 'search',
      metier,
      metiers,
      departement,
      alternance,
      codeROME,
      motsCles,
      typeContrat,
      experience,
      maxResults = 10,
    } = body;

    let result;

    switch (action) {
      case 'quiz':
        if (!metiers || !Array.isArray(metiers)) {
          return NextResponse.json(
            { error: 'Le champ "metiers" (array) est requis pour action=quiz' },
            { status: 400 }
          );
        }
        const offresQuiz = await searchOffresForQuizResults(config, metiers, {
          departement,
          alternance,
          maxResultsPerMetier: Math.ceil(maxResults / metiers.length),
        });

        const formattedResults: { [key: string]: any } = {};
        for (const [m, offres] of Object.entries(offresQuiz)) {
          formattedResults[m] = {
            total: offres.length,
            offres: offres.map(formatOffreForDisplay),
          };
        }
        result = formattedResults;
        break;

      case 'search':
      default:
        const params: SearchParams = {
          range: `0-${maxResults - 1}`,
          sort: 1,
        };

        if (codeROME) params.codeROME = codeROME;
        if (motsCles) params.motsCles = motsCles;
        if (departement) params.departement = departement;
        if (typeContrat) params.typeContrat = typeContrat;
        if (experience) params.experience = experience;
        if (alternance !== undefined) params.alternance = alternance;

        const searchResponse = await searchOffres(config, params);
        result = {
          total: searchResponse.contentRange?.total || searchResponse.resultats.length,
          offres: searchResponse.resultats.map(formatOffreForDisplay),
        };
        break;
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Erreur API France Travail (POST):', error);

    return NextResponse.json(
      {
        error: 'Erreur serveur',
        message: error instanceof Error ? error.message : 'Une erreur inattendue s\'est produite',
      },
      { status: 500 }
    );
  }
}
