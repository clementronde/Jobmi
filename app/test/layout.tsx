import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Test d\'orientation professionnelle — Trouve ta voie en 5 minutes',
  description:
    'Passe le test d\'orientation Jobmi et découvre les métiers et formations qui correspondent à ta personnalité, tes valeurs et tes ambitions. Gratuit, sans inscription.',
  alternates: {
    canonical: 'https://jobmi.fr/test',
  },
  openGraph: {
    type: 'website',
    url: 'https://jobmi.fr/test',
    title: 'Test d\'orientation professionnelle — Jobmi',
    description:
      'Découvre les métiers et formations qui te correspondent en 5 minutes. Test gratuit et sans inscription.',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
