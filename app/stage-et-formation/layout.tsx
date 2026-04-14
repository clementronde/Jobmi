import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stages et Formations — Trouve ta voie',
  description:
    'Découvre les stages et formations adaptés à ton profil pour lancer ou accélérer ta reconversion professionnelle. Sélection de programmes pour les 18-25 ans.',
  alternates: {
    canonical: 'https://jobmi.fr/stage-et-formation',
  },
  openGraph: {
    type: 'website',
    url: 'https://jobmi.fr/stage-et-formation',
    title: 'Stages et Formations — Jobmi',
    description:
      'Découvre les stages et formations adaptés à ton profil pour lancer ta reconversion professionnelle.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
