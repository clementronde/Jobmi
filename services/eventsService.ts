import {
  eventCategoryLandings,
  eventCityLandings,
  orientationEvents,
} from '@/data/events';
import type {
  EventCategoryLanding,
  EventCityLanding,
  JobmiAudience,
  JobmiEvent,
  JobmiEventFormat,
  JobmiEventType,
  JobmiTheme,
} from '@/types/events';

export const EVENT_TYPE_LABELS: Record<JobmiEventType, string> = {
  'salon-etudiant': "Salon de l'étudiant",
  'salon-orientation': 'Salon orientation',
  'forum-alternance': 'Forum alternance',
  'forum-emploi': 'Forum emploi',
  'journee-portes-ouvertes': 'Journée portes ouvertes',
  'journee-immersion': 'Journée immersion',
  'atelier-metier': 'Atelier métier',
  webinaire: 'Événement en ligne',
  pmsmp: 'PMSMP / immersion pro',
  'stage-observation': "Stage d'observation",
  accompagnement: 'Structure accompagnement',
};

export const FORMAT_LABELS: Record<JobmiEventFormat, string> = {
  presentiel: 'Présentiel',
  distanciel: 'En ligne',
  hybride: 'Hybride',
};

export const AUDIENCE_LABELS: Record<JobmiAudience, string> = {
  lyceen: 'Lycéen',
  etudiant: 'Étudiant',
  jeune_actif: 'Jeune actif',
  reconversion: 'Réorientation / reconversion',
};

export const THEME_LABELS: Record<JobmiTheme, string> = {
  digital: 'Digital',
  sante: 'Santé',
  social: 'Social',
  artisanat: 'Artisanat',
  industrie: 'Industrie',
  commerce: 'Commerce',
  orientation: 'Orientation',
  alternance: 'Alternance',
  emploi: 'Emploi',
  design: 'Design',
  culture: 'Culture',
  'service-public': 'Service public',
  restauration: 'Restauration',
  'transport-logistique': 'Transport & logistique',
};

type EventFilterInput = {
  eventType?: JobmiEventType | 'all';
  format?: JobmiEventFormat | 'all';
  audience?: JobmiAudience | 'all';
  citySlug?: string | 'all';
  theme?: JobmiTheme | 'all';
};

const salonTypes: JobmiEventType[] = [
  'salon-etudiant',
  'salon-orientation',
  'forum-alternance',
  'forum-emploi',
];

const jpoTypes: JobmiEventType[] = ['journee-portes-ouvertes', 'journee-immersion'];

const terrainTypes: JobmiEventType[] = [
  'atelier-metier',
  'journee-immersion',
  'stage-observation',
  'pmsmp',
];

export function getIndexableEvents() {
  return orientationEvents.filter((event) => event.seo_indexable);
}

export function getActiveEvents(referenceDate = new Date()) {
  return getIndexableEvents().filter((event) => {
    const endDate = new Date(event.date_end || event.date_start);
    return endDate >= new Date(referenceDate.toISOString().slice(0, 10));
  });
}

export function getEventBySlug(slug: string) {
  return getIndexableEvents().find((event) => event.slug === slug);
}

export function getAllEventSlugs() {
  return getIndexableEvents().map((event) => event.slug);
}

export function getCityLandingBySlug(citySlug: string): EventCityLanding | undefined {
  return eventCityLandings.find((city) => city.city_slug === citySlug);
}

export function getAllCityLandingSlugs() {
  return eventCityLandings.map((city) => city.city_slug);
}

export function getCategoryLanding(slug: EventCategoryLanding['slug']) {
  return eventCategoryLandings.find((category) => category.slug === slug);
}

export function getEventsForCategory(slug: EventCategoryLanding['slug']) {
  const events = getActiveEvents();
  if (slug === 'salons') {
    return events.filter((event) => salonTypes.includes(event.event_type));
  }
  if (slug === 'journees-portes-ouvertes') {
    return events.filter((event) => jpoTypes.includes(event.event_type));
  }
  if (slug === 'ateliers-metiers') {
    return events.filter((event) => terrainTypes.includes(event.event_type));
  }
  return events.filter((event) => event.format === 'distanciel' || event.online_only);
}

export function getEventsForCity(citySlug: string) {
  return getActiveEvents().filter((event) => event.city_slug === citySlug);
}

export function filterEvents(events: JobmiEvent[], filters: EventFilterInput) {
  return events.filter((event) => {
    if (filters.eventType && filters.eventType !== 'all' && event.event_type !== filters.eventType) {
      return false;
    }
    if (filters.format && filters.format !== 'all' && event.format !== filters.format) {
      return false;
    }
    if (filters.audience && filters.audience !== 'all' && !event.audience.includes(filters.audience)) {
      return false;
    }
    if (filters.citySlug && filters.citySlug !== 'all' && event.city_slug !== filters.citySlug) {
      return false;
    }
    if (filters.theme && filters.theme !== 'all' && !event.themes.includes(filters.theme)) {
      return false;
    }
    return true;
  });
}

export function formatEventDate(event: JobmiEvent) {
  const formatter = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const start = formatter.format(new Date(event.date_start));
  if (!event.date_end || event.date_end === event.date_start) return start;
  return `${start} - ${formatter.format(new Date(event.date_end))}`;
}

export function formatEventTime(event: JobmiEvent) {
  if (!event.time_start) return event.display_duration;
  if (!event.time_end) return event.time_start;
  return `${event.time_start} - ${event.time_end}`;
}

export function getCityOptions(events: JobmiEvent[]) {
  return Array.from(
    new Map(
      events
        .filter((event) => event.city_slug !== 'en-ligne')
        .map((event) => [event.city_slug, { city: event.city, city_slug: event.city_slug }])
    ).values()
  );
}

export function getThemeOptions(events: JobmiEvent[]) {
  return Array.from(new Set(events.flatMap((event) => event.themes)));
}

export function getRelatedEvents(event: JobmiEvent, limit = 3) {
  return getActiveEvents()
    .filter((candidate) => candidate.slug !== event.slug)
    .map((candidate) => {
      let score = 0;
      if (candidate.city_slug === event.city_slug) score += 3;
      if (candidate.event_type === event.event_type) score += 2;
      score += candidate.themes.filter((theme) => event.themes.includes(theme)).length;
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.candidate);
}

export function getEventPrimaryCtaHref(intent: JobmiEvent['jobmi_ctas'][number]) {
  if (intent === 'passer-le-test') return '/test';
  if (intent === 'tester-un-metier') return '/tester-un-metier';
  if (intent === 'explorer-formations') return '/stage-et-formation';
  return '/reconversion';
}

export function getEventPrimaryCtaLabel(intent: JobmiEvent['jobmi_ctas'][number]) {
  if (intent === 'passer-le-test') return 'Passer le test';
  if (intent === 'tester-un-metier') return 'Tester un métier';
  if (intent === 'explorer-formations') return 'Explorer les formations';
  return 'Voir la page reconversion';
}
