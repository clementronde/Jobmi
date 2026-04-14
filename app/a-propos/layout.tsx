import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos de Jobmi',
  description:
    "Jobmi est le média de référence pour l'orientation et la réorientation professionnelle des 18-25 ans. Découvrez notre mission et notre équipe.",
  alternates: {
    canonical: 'https://jobmi.fr/a-propos',
  },
  openGraph: {
    type: 'website',
    url: 'https://jobmi.fr/a-propos',
    title: 'À propos de Jobmi',
    description:
      "Jobmi est le média de référence pour l'orientation et la réorientation professionnelle des 18-25 ans.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
