import type { JobmiEvent } from '@/types/events';
import { franceTravailFetch, hasFranceTravailCredentials } from './client';

function getArrayPayload(payload: any) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.resultats)) return payload.resultats;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.evenements)) return payload.evenements;
  return [];
}

function cleanText(value: unknown, fallback = '') {
  if (typeof value !== 'string') return fallback;
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() || fallback;
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function normalizeEventType(type: string): JobmiEvent['event_type'] {
  const normalized = type.toLowerCase();
  if (normalized.includes('job') || normalized.includes('forum')) return 'forum-emploi';
  if (normalized.includes('atelier')) return 'atelier-metier';
  if (normalized.includes('web') || normalized.includes('ligne')) return 'webinaire';
  if (normalized.includes('alternance')) return 'forum-alternance';
  return 'forum-emploi';
}

function normalizeFranceTravailEvent(raw: any): JobmiEvent {
  const title = cleanText(raw?.titre ?? raw?.title, 'Événement emploi');
  const city = cleanText(raw?.ville ?? raw?.city ?? raw?.localisation, 'En ligne');
  const online = Boolean(raw?.salonEnLigne || raw?.online || raw?.modalite === 'DISTANCE');
  const id = String(raw?.id ?? raw?.identifiant ?? slugify(`${title}-${raw?.dateDebut ?? ''}`));
  const url = cleanText(raw?.urlSalonEnLigne ?? raw?.url ?? raw?.lien, 'https://mesevenementsemploi.francetravail.fr/');

  return {
    id: `ft_${id}`,
    title,
    slug: `france-travail-${slugify(`${title}-${id}`)}`,
    event_type: normalizeEventType(cleanText(raw?.typeEvenement ?? raw?.type ?? 'forum emploi')),
    organizer_name: cleanText(raw?.organismeOrganisateur ?? raw?.organizer, 'France Travail'),
    organizer_type: 'france-travail',
    official_url: url,
    registration_url: url,
    description_short: cleanText(raw?.description, 'Événement emploi, formation ou reconversion proposé par France Travail.').slice(0, 180),
    description_long: cleanText(raw?.description, 'Événement emploi, formation ou reconversion proposé par France Travail.'),
    why_it_matters:
      'Un format concret pour rencontrer des recruteurs, découvrir un secteur ou avancer sur une piste métier.',
    venue_name: cleanText(raw?.lieu ?? raw?.venue, online ? 'En ligne' : city),
    address: cleanText(raw?.adresse ?? raw?.address),
    city,
    city_slug: slugify(city || 'en-ligne'),
    postal_code: cleanText(raw?.codePostal ?? raw?.postalCode),
    region: cleanText(raw?.region, 'France'),
    country: 'France',
    latitude: typeof raw?.latitude === 'number' ? raw.latitude : undefined,
    longitude: typeof raw?.longitude === 'number' ? raw.longitude : undefined,
    date_start: cleanText(raw?.dateDebut ?? raw?.date_start, new Date().toISOString().slice(0, 10)),
    date_end: cleanText(raw?.dateFin ?? raw?.date_end) || null,
    time_start: cleanText(raw?.heureDebut ?? raw?.time_start) || null,
    time_end: cleanText(raw?.heureFin ?? raw?.time_end) || null,
    timezone: 'Europe/Paris',
    display_duration: cleanText(raw?.duree, 'À vérifier'),
    format: online ? 'distanciel' : 'presentiel',
    audience: ['etudiant', 'jeune_actif', 'reconversion'],
    themes: ['emploi', 'orientation'],
    price_type: 'gratuit',
    price_value: 0,
    registration_required: true,
    source_name: 'France Travail',
    source_url: url,
    status: 'scheduled',
    featured_level: 'organic',
    sponsored_until: null,
    logo_url: null,
    image_url: null,
    contact_email: null,
    contact_phone: null,
    seo_indexable: false,
    show_on_map: true,
    online_only: online,
    online_url: online ? url : null,
    venue_notes: null,
    jobmi_ctas: ['passer-le-test', 'tester-un-metier'],
    structured_snippet: title,
    claimed_by_organizer: false,
    view_count: 0,
    click_count: 0,
  };
}

export async function searchFranceTravailEvents(params: {
  romeCode?: string;
  location?: string;
}) {
  if (!hasFranceTravailCredentials()) {
    return { source: 'missing_credentials' as const, events: [] as JobmiEvent[] };
  }

  try {
    const searchParams = new URLSearchParams();
    if (params.romeCode) searchParams.set('rome', params.romeCode);
    if (params.location) searchParams.set('localisation', params.location);

    const payload = await franceTravailFetch<any>(
      process.env.FRANCE_TRAVAIL_EVENTS_PATH || '/partenaire/evenements/v1/evenements',
      { searchParams, next: { revalidate: 60 * 60 } },
    );

    return {
      source: 'live' as const,
      events: getArrayPayload(payload).slice(0, 20).map(normalizeFranceTravailEvent),
    };
  } catch {
    return { source: 'error' as const, events: [] as JobmiEvent[] };
  }
}
