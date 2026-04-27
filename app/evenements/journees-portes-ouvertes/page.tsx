import type { Metadata } from 'next';
import { EventExplorerPage } from '@/components/events/EventExplorerPage';
import { getActiveEvents } from '@/services/eventsService';

const PAGE_URL = 'https://jobmi.fr/evenements/journees-portes-ouvertes';

export const metadata: Metadata = {
  title: 'Journées portes ouvertes écoles et formations | Jobmi',
  description:
    "Repère les journées portes ouvertes utiles pour comparer une école, une université, un CFA ou une formation avant de t'engager.",
  alternates: { canonical: PAGE_URL },
};

export default function JourneesPortesOuvertesPage() {
  return (
    <EventExplorerPage
      eyebrow="Journées portes ouvertes"
      title="Journées portes ouvertes pour comparer une école ou une formation"
      description="Explore les JPO qui permettent de sentir l’ambiance d’une école, comprendre un cursus et vérifier si l’environnement te correspond vraiment."
      intro={[
        "Une journée portes ouvertes est souvent plus utile qu’une brochure bien faite. Tu peux voir les lieux, parler à des étudiants, poser de vraies questions et comprendre ce qu’il y a derrière un intitulé de formation.",
        "Ce format est particulièrement précieux si tu hésites entre plusieurs écoles, si tu veux vérifier le cadre d’un BTS, d’un CFA ou d’une licence, ou si tu veux éviter de choisir une formation uniquement sur son image.",
      ]}
      events={getActiveEvents()}
      initialFilters={{ eventType: 'journee-portes-ouvertes' }}
    />
  );
}
