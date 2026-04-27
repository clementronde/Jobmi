import { orientationEvents } from '@/data/events';
import type {
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

export function getActiveEvents(referenceDate = new Date()) {
  return orientationEvents.filter((event) => {
    if (!event.seo_indexable) return false;
    const endDate = new Date(event.date_end || event.date_start);
    return endDate >= new Date(referenceDate.toISOString().slice(0, 10));
  });
}

export function getUpcomingEvents(limit?: number, referenceDate = new Date()) {
  const events = [...getActiveEvents(referenceDate)].sort(
    (a, b) => new Date(a.date_start).getTime() - new Date(b.date_start).getTime()
  );

  return typeof limit === 'number' ? events.slice(0, limit) : events;
}

export function getEventBySlug(slug: string) {
  return orientationEvents.find((event) => event.slug === slug) ?? null;
}

export function filterEvents(events: JobmiEvent[], filters: EventFilterInput) {
  return events.filter((event) => {
    if (filters.eventType && filters.eventType !== 'all' && event.event_type !== filters.eventType) return false;
    if (filters.format && filters.format !== 'all' && event.format !== filters.format) return false;
    if (filters.audience && filters.audience !== 'all' && !event.audience.includes(filters.audience)) return false;
    if (filters.citySlug && filters.citySlug !== 'all' && event.city_slug !== filters.citySlug) return false;
    if (filters.theme && filters.theme !== 'all' && !event.themes.includes(filters.theme)) return false;
    return true;
  });
}

export function formatEventDate(event: JobmiEvent) {
  const formatter = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
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
        .filter((e) => e.city_slug !== 'en-ligne')
        .map((e) => [e.city_slug, { city: e.city, city_slug: e.city_slug }])
    ).values()
  );
}

export function getThemeOptions(events: JobmiEvent[]) {
  return Array.from(new Set(events.flatMap((e) => e.themes)));
}

export function getEventPrimaryCtaHref(intent: JobmiEvent['jobmi_ctas'][number]) {
  if (intent === 'passer-le-test') return '/test-orientation';
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
