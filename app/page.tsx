import type { Metadata } from 'next';
import { HomeSection1 } from '../components/HomeSection1';
import { HomeSection2 } from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import { HomeSection4 } from '../components/HomeSection4';
import HomeSection5 from '../components/HomeSection5';
import HomeSection6 from '../components/HomeSection6';

const BASE_URL = 'https://jobmi.fr';

export const metadata: Metadata = {
  title: "Test d'orientation gratuit pour trouver ta voie | Jobmi",
  description:
    "Jobmi aide les 18–25 ans à trouver leur voie : test d'orientation gratuit, guides de reconversion, métiers d'avenir et formations adaptées à ton profil.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: "Test d'orientation gratuit pour trouver ta voie | Jobmi",
    description:
      "Test d'orientation gratuit, guides de reconversion et métiers d'avenir pour les 18–25 ans.",
  },
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Test d'orientation gratuit pour trouver ta voie | Jobmi",
  description:
    "Jobmi aide les 18–25 ans à trouver leur voie : test d'orientation gratuit, guides de reconversion et métiers d'avenir.",
  isPartOf: { '@id': `${BASE_URL}/#website` },
  inLanguage: 'fr-FR',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
    </>
  );
}
