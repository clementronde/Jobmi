export type JobmiEventType =
  | 'salon-etudiant'
  | 'salon-orientation'
  | 'forum-alternance'
  | 'forum-emploi'
  | 'journee-portes-ouvertes'
  | 'journee-immersion'
  | 'atelier-metier'
  | 'webinaire'
  | 'pmsmp'
  | 'stage-observation'
  | 'accompagnement';

export type JobmiOrganizerType =
  | 'ecole'
  | 'cfa'
  | 'universite'
  | 'entreprise'
  | 'association'
  | 'collectivite'
  | 'organisme-formation'
  | 'mission-locale'
  | 'france-travail'
  | 'cio';

export type JobmiEventFormat = 'presentiel' | 'distanciel' | 'hybride';

export type JobmiAudience =
  | 'lyceen'
  | 'etudiant'
  | 'jeune_actif'
  | 'reconversion';

export type JobmiPriceType = 'gratuit' | 'payant' | 'mixte' | 'sur-demande';

export type JobmiEventStatus =
  | 'scheduled'
  | 'sold_out'
  | 'cancelled'
  | 'postponed'
  | 'expired';

export type JobmiFeaturedLevel = 'organic' | 'boosted' | 'sponsored';

export type JobmiCtaIntent =
  | 'passer-le-test'
  | 'tester-un-metier'
  | 'explorer-formations'
  | 'reorientation';

export type JobmiTheme =
  | 'digital'
  | 'sante'
  | 'social'
  | 'artisanat'
  | 'industrie'
  | 'commerce'
  | 'orientation'
  | 'alternance'
  | 'emploi'
  | 'design'
  | 'culture'
  | 'service-public'
  | 'restauration'
  | 'transport-logistique';

export type JobmiEvent = {
  id: string;
  title: string;
  slug: string;
  event_type: JobmiEventType;
  organizer_name: string;
  organizer_type: JobmiOrganizerType;
  official_url: string;
  registration_url?: string;
  description_short: string;
  description_long: string;
  why_it_matters: string;
  venue_name?: string;
  address?: string;
  city: string;
  city_slug: string;
  postal_code?: string;
  region: string;
  country: string;
  latitude?: number;
  longitude?: number;
  date_start: string;
  date_end?: string | null;
  time_start?: string | null;
  time_end?: string | null;
  timezone: string;
  display_duration: string;
  format: JobmiEventFormat;
  audience: JobmiAudience[];
  themes: JobmiTheme[];
  price_type: JobmiPriceType;
  price_value?: number | null;
  registration_required: boolean;
  source_name: string;
  source_url: string;
  status: JobmiEventStatus;
  featured_level: JobmiFeaturedLevel;
  sponsored_until?: string | null;
  logo_url?: string | null;
  image_url?: string | null;
  contact_email?: string | null;
  contact_phone?: string | null;
  seo_indexable: boolean;
  show_on_map: boolean;
  online_only: boolean;
  online_url?: string | null;
  venue_notes?: string | null;
  jobmi_ctas: JobmiCtaIntent[];
  structured_snippet?: string | null;
  claimed_by_organizer?: boolean;
  view_count?: number;
  click_count?: number;
};

export type EventCategoryLanding = {
  slug: 'salons' | 'journees-portes-ouvertes' | 'ateliers-metiers' | 'en-ligne';
  title: string;
  description: string;
  intro: string;
  eyebrow: string;
  seoTitle: string;
  seoDescription: string;
};

export type EventCityLanding = {
  city: string;
  city_slug: string;
  title: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
};
