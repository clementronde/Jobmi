import type { Metadata } from 'next';
import Link from 'next/link';
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

const homeAudiences = [
  {
    title: 'Tu sors du bac et tu ne sais pas quoi choisir',
    text:
      "Fac, BTS, BUT, alternance, école, année de césure : tu as trop d'options et pas assez de concret pour décider sereinement.",
    href: '/que-faire-apres-le-bac',
    cta: 'Voir le guide post-bac',
  },
  {
    title: 'Tu es étudiant et ta voie ne te ressemble plus',
    text:
      "L1, BTS, BUT ou école : si tu sens que tu t'es trompé, Jobmi t'aide à reconstruire une suite sans repartir dans tous les sens.",
    href: '/reconversion',
    cta: 'Préparer ta réorientation',
  },
  {
    title: 'Tu as une idée de métier, mais tu veux la vérifier',
    text:
      "Avant de t'inscrire dans une formation ou une alternance, tu veux comprendre le quotidien réel du métier, pas seulement son image.",
    href: '/tester-un-metier',
    cta: 'Découvrir le terrain',
  },
];

function HomeSeoBlocks() {
  return (
    <section className="bg-[#FCFCFF] px-6 py-16 font-sans sm:px-10">
      <div className="mx-auto max-w-screen-xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
            Ta situation
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#04192F] sm:text-4xl">
            Tu n'as pas besoin d'avoir déjà un projet clair
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160] sm:text-lg">
            Jobmi s'adresse aux 18–25 ans qui hésitent, se réorientent ou veulent
            vérifier une piste avant de s'engager. Le bon point de départ dépend
            surtout de l'endroit où tu en es aujourd'hui.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {homeAudiences.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-lg border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6500FF]/35 hover:shadow-[0_20px_45px_rgba(101,0,255,0.10)]"
            >
              <h3 className="text-xl font-bold text-[#04192F] transition-colors group-hover:text-[#6500FF]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#465160]">{item.text}</p>
              <p className="mt-5 text-sm font-bold text-[#6500FF]">
                {item.cta} <span aria-hidden="true">→</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <HomeSection1 />
      <HomeSeoBlocks />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
    </>
  );
}
