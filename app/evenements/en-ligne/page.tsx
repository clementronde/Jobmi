import type { Metadata } from 'next';
import { EventExplorerPage } from '@/components/events/EventExplorerPage';
import { getActiveEvents } from '@/services/eventsService';

const PAGE_URL = 'https://jobmi.fr/evenements/en-ligne';

export const metadata: Metadata = {
  title: "Événements d'orientation en ligne | Jobmi",
  description:
    "Retrouve les événements d'orientation en ligne utiles aux 18–25 ans : webinaires, forums digitaux, informations métiers et formats à distance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Événements d'orientation en ligne | Jobmi",
    description:
      "Retrouve les événements d'orientation en ligne utiles aux 18–25 ans : webinaires, forums digitaux, informations métiers et formats à distance.",
  },
};

export default function EvenementsEnLignePage() {
  return (
    <EventExplorerPage
      eyebrow="Formats en ligne"
      title="Événements d’orientation en ligne pour avancer sans te déplacer"
      description="Webinaires, lives, réunions d’information, événements à distance : pratique pour comparer des pistes rapidement ou commencer quand tu ne peux pas encore bouger."
      intro={[
        "Les événements en ligne ne remplacent pas toujours le terrain, mais ils sont très utiles pour ouvrir une piste, poser tes premières questions et faire un tri rapide entre plusieurs options.",
        "C’est aussi un bon format si tu habites loin d’une grande ville, si tu veux avancer depuis chez toi, ou si tu veux simplement commencer avec moins de friction avant de passer à une immersion ou une visite.",
      ]}
      events={getActiveEvents()}
      initialFilters={{ format: 'distanciel' }}
    />
  );
}
