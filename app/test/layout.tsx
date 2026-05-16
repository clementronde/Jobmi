import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Test d'orientation gratuit — Trouve ton métier | Jobmi",
  description:
    "Découvre les métiers qui te correspondent avec notre test d'orientation RIASEC. Gratuit, sans inscription, résultats en 6 minutes.",
  alternates: {
    canonical: 'https://jobmi.fr/test',
  },
  openGraph: {
    type: 'website',
    url: 'https://jobmi.fr/test',
    title: "Test d'orientation gratuit — Jobmi",
    description:
      "Découvre les métiers qui te correspondent avec notre test d'orientation RIASEC. Gratuit, sans inscription, résultats en 6 minutes.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
