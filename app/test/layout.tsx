import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Test d'orientation gratuit 18-25 ans : profil RIASEC, métiers et reconversion",
  description:
    "Fais le test d'orientation gratuit Jobmi : profil RIASEC, familles de métiers, pistes concrètes et prochaines étapes pour trouver ta voie à 18-25 ans.",
  alternates: {
    canonical: 'https://jobmi.fr/test',
  },
  openGraph: {
    type: 'website',
    url: 'https://jobmi.fr/test',
    title: "Test d'orientation gratuit 18-25 ans : profil RIASEC, métiers et reconversion | Jobmi",
    description:
      "Profil RIASEC, familles de métiers et pistes concrètes pour mieux choisir ta voie.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
