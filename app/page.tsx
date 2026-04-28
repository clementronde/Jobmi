import type { Metadata } from 'next';
import { HomeSection1 } from '../components/HomeSection1';
import { HomeSection2 } from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import { HomeSection4 } from '../components/HomeSection4';
import HomeSection5 from '../components/HomeSection5';
import HomeSection6 from '../components/HomeSection6';

const BASE_URL = 'https://jobmi.fr';

export const metadata: Metadata = {
  title: "Orientation et reconversion pour les 18-25 ans | Teste un métier en vrai",
  description:
    "Jobmi aide les 18-25 ans à trouver leur voie : test d'orientation gratuit (RIASEC), immersions métier, stages et formations adaptées à ton profil. Choisis sans te tromper.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: "Orientation & reconversion pour les 18-25 ans | Teste un métier en vrai | Jobmi",
    description:
      "Test d'orientation gratuit, immersions métier et stages pour les 18-25 ans. Trouve ta voie, teste-la en vrai.",
  },
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Orientation & reconversion pour les 18-25 ans | Teste un métier en vrai | Jobmi",
  description:
    "Jobmi aide les 18-25 ans à trouver leur voie : test d'orientation gratuit (RIASEC), immersions métier, stages et formations adaptées à leur profil.",
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
