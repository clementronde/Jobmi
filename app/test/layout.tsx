import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test d\'orientation professionnelle — Trouve ta voie en 6 minutes',
  description:
    'Passe le test d\'orientation Jobmi et découvre des métiers qui correspondent à ta personnalité. Gratuit, sans inscription, résultats en quelques minutes.',
  alternates: {
    canonical: 'https://jobmi.fr/test',
  },
  openGraph: {
    type: 'website',
    url: 'https://jobmi.fr/test',
    title: 'Test d\'orientation professionnelle — Jobmi',
    description:
      'Découvre les métiers et formations qui te correspondent en quelques minutes. Test gratuit et sans inscription.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
