import type { Metadata } from 'next';
import { EventExplorerPage } from '@/components/events/EventExplorerPage';
import { getActiveEvents } from '@/services/eventsService';

const PAGE_URL = 'https://jobmi.fr/evenements/salons';

export const metadata: Metadata = {
  title: "Salons d'orientation, salons étudiant et forums | Jobmi",
  description:
    "Compare les salons d'orientation, salons étudiant et forums utiles aux 18–25 ans pour choisir une voie, une formation ou une réorientation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Salons d'orientation, salons étudiant et forums | Jobmi",
    description:
      "Compare les salons d'orientation, salons étudiant et forums utiles aux 18–25 ans pour choisir une voie, une formation ou une réorientation.",
  },
};

export default function SalonsPage() {
  return (
    <EventExplorerPage
      eyebrow="Salons & forums"
      title="Salons d’orientation et forums utiles pour les 18–25 ans"
      description="Retrouve les salons de l’étudiant, salons orientation, forums alternance et forums emploi qui peuvent vraiment t’aider à comparer des pistes."
      intro={[
        "Les salons et forums sont utiles quand tu hésites entre plusieurs voies et que tu veux confronter plusieurs discours le même jour. C’est souvent le bon format pour comparer des écoles, des organismes, des CFA, des employeurs ou des structures d’accompagnement sans rester bloqué sur une seule piste.",
        "Sur Jobmi, l’idée n’est pas juste de lister des événements. On t’aide à comprendre lesquels valent le coup selon ton profil, ton niveau de clarté et l’étape où tu en es dans ton orientation ou ta réorientation.",
      ]}
      events={getActiveEvents()}
      initialFilters={{ eventType: 'salon-etudiant' }}
    />
  );
}
