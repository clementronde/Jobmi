import type { Metadata } from 'next';
import { EventExplorerPage } from '@/components/events/EventExplorerPage';
import { getActiveEvents } from '@/services/eventsService';

const PAGE_URL = 'https://jobmi.fr/evenements/ateliers-metiers';

export const metadata: Metadata = {
  title: 'Ateliers métiers et découvertes terrain | Jobmi',
  description:
    "Découvre les ateliers métiers et formats courts qui permettent de tester un geste, un secteur ou un univers professionnel avant de choisir.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Ateliers métiers et découvertes terrain | Jobmi',
    description:
      "Découvre les ateliers métiers et formats courts qui permettent de tester un geste, un secteur ou un univers professionnel avant de choisir.",
  },
};

export default function AteliersMetiersPage() {
  return (
    <EventExplorerPage
      eyebrow="Ateliers métiers"
      title="Ateliers métiers pour découvrir un secteur avant de t’engager"
      description="Les ateliers métiers sont utiles pour passer d’une idée abstraite à une première expérience concrète : voir, manipuler, poser des questions, sentir si l’univers te parle."
      intro={[
        "Quand tu veux explorer rapidement plusieurs pistes, les ateliers métiers sont souvent le meilleur premier pas. Ils demandent peu d’engagement et donnent vite une première lecture du terrain.",
        "C’est particulièrement intéressant si tu hésites entre plusieurs familles de métiers ou si tu veux tester un univers plus manuel, plus créatif, plus relationnel ou plus technique avant de choisir une formation.",
      ]}
      events={getActiveEvents()}
      initialFilters={{ eventType: 'atelier-metier' }}
    />
  );
}
