export type ApprenticeshipSearchParams = {
  query?: string;
  location?: string;
  diploma?: string;
  radius?: string;
};

export type JobmiApprenticeshipJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  contract: string;
  duration: string;
  remote: string;
  diploma: string;
  partner: string;
  url: string;
  sourceType: 'offer' | 'recruiter';
  description: string;
};

export type JobmiApprenticeshipTraining = {
  id: string;
  title: string;
  school: string;
  location: string;
  duration: string;
  remote: string;
  level: string;
  contact: string;
  url: string;
  description: string;
};

export type JobmiApprenticeshipSearchResult = {
  jobs: JobmiApprenticeshipJob[];
  recruiters: JobmiApprenticeshipJob[];
  trainings: JobmiApprenticeshipTraining[];
  warnings: string[];
};

const API_BASE_URL =
  process.env.APPRENTISSAGE_API_BASE_URL ?? 'https://api.apprentissage.beta.gouv.fr/api';

const ROME_BY_KEYWORD: Record<string, string[]> = {
  developpeur: ['M1805'],
  développeur: ['M1805'],
  informatique: ['M1805', 'M1810'],
  data: ['M1403', 'M1805'],
  marketing: ['M1705', 'E1103'],
  communication: ['E1103'],
  design: ['E1205', 'E1104'],
  graphisme: ['E1205'],
  commerce: ['D1402', 'D1403'],
  vente: ['D1402'],
  cuisine: ['G1602'],
  restauration: ['G1603', 'G1803'],
  boulanger: ['D1102'],
  patissier: ['D1104'],
  pâtissier: ['D1104'],
  mecanique: ['I1604'],
  mécanique: ['I1604'],
  electricien: ['F1602'],
  électricien: ['F1602'],
  comptable: ['M1203'],
  rh: ['M1501'],
  ressources: ['M1501'],
  social: ['K1207'],
  santé: ['J1506'],
  sante: ['J1506'],
};

function apiHeaders(): HeadersInit {
  const apiKey = process.env.APPRENTISSAGE_API_KEY;

  if (!apiKey) {
    throw new Error('APPRENTISSAGE_API_KEY_MISSING');
  }

  return {
    Accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
    'X-API-Key': apiKey,
    'api-key': apiKey,
  };
}

function cleanText(value: unknown, fallback = 'Non renseigné') {
  if (typeof value !== 'string') return fallback;

  const cleaned = value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return cleaned || fallback;
}

function truncate(value: unknown, max = 190) {
  const text = cleanText(value, '');
  if (!text) return '';
  return text.length > max ? `${text.slice(0, max).trim()}...` : text;
}

function getString(value: unknown, fallback = '') {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function makeSearchParams(params: ApprenticeshipSearchParams) {
  const search = new URLSearchParams();
  const query = params.query?.trim().toLowerCase();
  const diploma = params.diploma?.trim();
  const radius = params.radius?.trim();

  if (diploma && /^[1-8]$/.test(diploma)) {
    search.set('target_diploma_level', diploma);
  }

  if (radius && /^\d+$/.test(radius)) {
    search.set('radius', String(Math.min(Number(radius), 200)));
  }

  if (query) {
    const directRomeCodes = query
      .split(/[,\s]+/)
      .map((item) => item.trim().toUpperCase())
      .filter((item) => /^[A-Z]\d{4}$/.test(item));
    const inferredRomeCodes = Object.entries(ROME_BY_KEYWORD)
      .filter(([keyword]) => query.includes(keyword))
      .flatMap(([, codes]) => codes);
    const romeCodes = Array.from(new Set([...directRomeCodes, ...inferredRomeCodes]));

    if (romeCodes.length > 0) {
      search.set('romes', romeCodes.slice(0, 4).join(','));
    }

    const rncp = query.match(/RNCP\d{3,5}/i)?.[0].toUpperCase();
    if (rncp) {
      search.set('rncp', rncp);
    }
  }

  return search;
}

async function addLocation(search: URLSearchParams, params: ApprenticeshipSearchParams) {
  const location = params.location?.trim();
  if (!location) return;

  if (/^\d{2,3}$/.test(location)) {
    search.append('departements', location);
    return;
  }

  if (!/^\d{5}$/.test(location)) return;

  const response = await fetch(`${API_BASE_URL}/geographie/v1/commune/search?code=${location}`, {
    headers: apiHeaders(),
    next: { revalidate: 60 * 60 * 24 },
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) return;

  const communes = (await response.json()) as Array<{
    departement?: { codeInsee?: string };
    localisation?: { centre?: { coordinates?: [number, number] } };
  }>;
  const firstCommune = communes[0];
  const coordinates = firstCommune?.localisation?.centre?.coordinates;

  if (firstCommune?.departement?.codeInsee) {
    search.append('departements', firstCommune.departement.codeInsee);
  }

  if (coordinates?.length === 2) {
    search.set('longitude', String(coordinates[0]));
    search.set('latitude', String(coordinates[1]));
  }
}

function normalizeJob(rawJob: any, sourceType: 'offer' | 'recruiter'): JobmiApprenticeshipJob {
  const workplace = rawJob?.workplace ?? {};
  const offer = rawJob?.offer ?? {};
  const contract = rawJob?.contract ?? {};
  const identifier = rawJob?.identifier ?? {};
  const apply = rawJob?.apply ?? {};
  const location = workplace?.location ?? {};
  const partner = getString(identifier.partner_label, sourceType === 'recruiter' ? 'Recruteur LBA' : 'La bonne alternance');
  const company = getString(workplace.name) || getString(workplace.brand) || getString(workplace.legal_name, 'Entreprise');
  const title =
    sourceType === 'offer'
      ? getString(offer.title, "Offre d'alternance")
      : `Candidature spontanée chez ${company}`;

  return {
    id: getString(identifier.id) || getString(identifier.partner_job_id) || `${company}-${title}`,
    title,
    company,
    location: getString(location.address, 'France'),
    contract: Array.isArray(contract.type) ? contract.type.join(', ') : 'Alternance',
    duration: typeof contract.duration === 'number' ? `${contract.duration} mois` : 'Durée à préciser',
    remote:
      contract.remote === 'remote'
        ? 'À distance'
        : contract.remote === 'hybrid'
          ? 'Hybride'
          : contract.remote === 'onsite'
            ? 'Sur site'
            : 'Modalité à préciser',
    diploma: getString(offer?.target_diploma?.label, 'Niveau ouvert ou non précisé'),
    partner,
    url: getString(apply.url, 'https://labonnealternance.apprentissage.beta.gouv.fr/'),
    sourceType,
    description:
      sourceType === 'offer'
        ? truncate(offer.description)
        : truncate(workplace.description) ||
          "Entreprise identifiée comme susceptible de recruter en alternance.",
  };
}

function normalizeTraining(rawTraining: any): JobmiApprenticeshipTraining {
  const id = getString(rawTraining?.identifiant?.cle_ministere_educatif);
  const certification = rawTraining?.certification?.valeur ?? {};
  const title =
    getString(rawTraining?.onisep?.intitule) ||
    getString(certification?.intitule?.rncp) ||
    getString(certification?.intitule?.cfd?.long, 'Formation en apprentissage');
  const school =
    getString(rawTraining?.formateur?.organisme?.unite_legale?.raison_sociale) ||
    getString(rawTraining?.responsable?.organisme?.unite_legale?.raison_sociale, 'Organisme de formation');
  const address = rawTraining?.lieu?.adresse ?? {};
  const city = getString(address?.commune?.nom);
  const zip = getString(address?.code_postal);
  const level =
    getString(certification?.intitule?.niveau?.rncp?.label) ||
    getString(certification?.niveau?.rncp?.label) ||
    'Niveau à vérifier';
  const onisepUrl = getString(rawTraining?.onisep?.url) || getString(rawTraining?.onisep?.lien_site_onisepfr);

  return {
    id,
    title,
    school,
    location: [zip, city].filter(Boolean).join(' ') || getString(address?.label, 'France'),
    duration:
      typeof rawTraining?.modalite?.duree_indicative === 'number'
        ? `${rawTraining.modalite.duree_indicative} h indicatives`
        : 'Durée à vérifier',
    remote: rawTraining?.modalite?.entierement_a_distance ? 'À distance' : 'Présentiel ou mixte',
    level,
    contact: getString(rawTraining?.contact?.email) || getString(rawTraining?.contact?.telephone, 'Contact à vérifier'),
    url: onisepUrl || 'https://labonnealternance.apprentissage.beta.gouv.fr/',
    description: truncate(rawTraining?.contenu_educatif?.objectif || rawTraining?.contenu_educatif?.contenu),
  };
}

function dedupeByStableFields<T>(items: T[], getKey: (item: T) => string) {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = getKey(item);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

async function fetchJson<T>(path: string, search: URLSearchParams): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}?${search.toString()}`, {
    headers: apiHeaders(),
    cache: 'no-store',
    signal: AbortSignal.timeout(5000),
  });

  if (!response.ok) {
    throw new Error(`APPRENTISSAGE_API_ERROR_${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function searchApprentissage(
  params: ApprenticeshipSearchParams,
): Promise<JobmiApprenticeshipSearchResult> {
  const jobSearch = makeSearchParams(params);
  await addLocation(jobSearch, params);

  const formationSearch = new URLSearchParams(jobSearch);
  formationSearch.delete('departements');
  formationSearch.set('page_size', '30');
  formationSearch.set('page_index', '0');

  const [jobResponse, formationResponse] = await Promise.all([
    fetchJson<{
      jobs?: any[];
      recruiters?: any[];
      warnings?: Array<{ message?: string }>;
    }>('/job/v1/search', jobSearch),
    fetchJson<{
      data?: any[];
    }>('/formation/v1/search', formationSearch),
  ]);

  const jobs = dedupeByStableFields(
    (jobResponse.jobs ?? []).map((job) => normalizeJob(job, 'offer')),
    (job) => [job.sourceType, job.id, job.url, job.title, job.company].join('|'),
  );
  const recruiters = dedupeByStableFields(
    (jobResponse.recruiters ?? []).map((recruiter) => normalizeJob(recruiter, 'recruiter')),
    (recruiter) => [recruiter.sourceType, recruiter.id, recruiter.url, recruiter.company].join('|'),
  );
  const trainings = dedupeByStableFields(
    (formationResponse.data ?? []).map(normalizeTraining),
    (training) => [training.id, training.title, training.school, training.location].join('|'),
  );

  return {
    jobs: jobs.slice(0, 40),
    recruiters: recruiters.slice(0, 30),
    trainings: trainings.slice(0, 20),
    warnings: (jobResponse.warnings ?? []).map((warning) => warning.message).filter(Boolean) as string[],
  };
}
