import type { Metadata } from 'next';
import Link from 'next/link';
import { HomeHero } from '../components/HomeHero';
import { HomeReassurance } from '../components/HomeReassurance';
import { HomeSection2 } from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import { HomeSection4 } from '../components/HomeSection4';
import HomeSection6 from '../components/HomeSection6';
import { HomeCatalogPreview } from '../components/HomeCatalogPreview';
import { HomeBlogSection } from '../components/HomeBlogSection';
import { HomeEntreprisesCompact } from '../components/HomeEntreprisesCompact';
import { HomeFaqBlock } from '../components/HomeFaqBlock';

const BASE_URL = 'https://jobmi.fr';

export const metadata: Metadata = {
  title: "Jobmi — Trouve ta voie | Test d'orientation gratuit et immersions métiers",
  description:
    "Tu hésites entre plusieurs voies ? Fais le test d'orientation gratuit en 15 min, explore des métiers qui te correspondent et teste-les en vrai. Gratuit, sans inscription.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: "Jobmi | Trouve ta voie et teste un métier avant de t'y engager",
    description:
      "Test d'orientation gratuit, immersions métier et guides pour les 18-25 ans qui veulent trouver leur voie avec plus de concret.",
  },
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Jobmi | Trouve ta voie et teste un métier avant de t'y engager",
  description:
    "Jobmi aide les 18-25 ans à trouver leur voie : test d'orientation gratuit (RIASEC), immersions métier, stages et formations adaptées à leur profil.",
  isPartOf: { '@id': `${BASE_URL}/#website` },
  inLanguage: 'fr-FR',
};

const homeAudiences = [
  {
    title: "Je veux faire un test d'orientation",
    text:
      "Commence par comprendre ton profil, tes centres d'intérêt et les familles de métiers qui peuvent te correspondre.",
    href: '/test',
    cta: 'Passer le test gratuit',
  },
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

const faqItems = [
  {
    question: "Est-ce que le test d'orientation Jobmi est gratuit ?",
    answer:
      "Oui. Le test d'orientation Jobmi est gratuit et pensé pour donner un premier point de départ aux 18-25 ans qui veulent mieux comprendre leur profil, leurs intérêts et les familles de métiers à explorer.",
  },
  {
    question: "À qui s'adresse Jobmi ?",
    answer:
      "Jobmi s'adresse surtout aux lycéens, étudiants, jeunes actifs et jeunes en reconversion entre 18 et 25 ans : après le bac, pendant une réorientation, avant une formation ou quand une première voie ne correspond plus.",
  },
  {
    question: "Quelle différence entre un test d'orientation et un bilan de compétences ?",
    answer:
      "Un test d'orientation donne des pistes de réflexion à partir de tes intérêts et de ta façon de fonctionner. Un bilan de compétences est un accompagnement plus long, souvent encadré par un professionnel. Les deux peuvent être complémentaires.",
  },
  {
    question: "Comment savoir quel métier est fait pour moi ?",
    answer:
      "Il faut croiser plusieurs éléments : ton profil, tes contraintes, les métiers qui t'attirent, les formations possibles et surtout la réalité du terrain. Jobmi aide à passer du test à l'exploration, puis à la vérification concrète.",
  },
  {
    question: "Comment tester un métier avant de choisir une formation ?",
    answer:
      "Tu peux passer par un stage d'observation, une PMSMP, un atelier métier, une journée portes ouvertes, un échange avec un professionnel ou une immersion courte. L'objectif est de voir le quotidien réel avant de t'engager.",
  },
  {
    question: "Que faire si je n'ai aucune idée après le bac ?",
    answer:
      "Commence par réduire le flou : fais un test d'orientation, repère 2 ou 3 familles de métiers, compare les formats d'études, puis teste une piste sur le terrain avant de choisir par défaut.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Comment tester un métier avec Jobmi avant de s'engager",
  description:
    "Méthode en 3 étapes pour passer du doute à une décision d'orientation plus claire.",
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: "Test d'orientation gratuit",
      text: 'Réponds à quelques questions sur tes valeurs et ton style de travail pour découvrir les métiers compatibles avec ton profil (méthode RIASEC). 15 minutes, gratuit.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Explore les métiers faits pour toi',
      text: "Accède à des fiches métiers personnalisées selon tes résultats. Compare les voies possibles et identifie celle qui t'attire vraiment.",
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Immersion terrain en vrai',
      text: "Teste le métier dans un vrai environnement de travail : atelier découverte, stage d'observation ou jobshadowing. De 1 jour à 2 semaines.",
    },
  ],
};

/* ─── Bloc "Ton point de départ" ─────────────────────────────────────── */
function HomeSituationBlock() {
  return (
    <section className="bg-[#FCFCFF] px-6 py-16 font-sans sm:px-10">
      <div className="mx-auto max-w-screen-xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
            Ton point de départ
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#04192F] sm:text-4xl">
            Tu n&apos;as pas besoin d&apos;avoir déjà un projet clair
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160] sm:text-lg">
            Jobmi s&apos;adresse aux 18–25 ans qui hésitent, se réorientent ou veulent
            vérifier une piste avant de s&apos;engager. Le bon point de départ dépend
            surtout de l&apos;endroit où tu en es aujourd&apos;hui.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* 1. Hero — nouvelle promesse */}
      <HomeHero />

      {/* 2. Ligne de réassurance — "Un test pour ouvrir des pistes" */}
      <HomeReassurance />

      {/* 3. Ton point de départ — 4 pathways personnalisés */}
      <HomeSituationBlock />

      {/* 4. Stats — "Le coût réel d'un mauvais choix" */}
      <HomeSection3 />

      {/* 5. Comment ça fonctionne — 3 étapes interactives */}
      <HomeSection2 />

      {/* 6. Preuve sociale — témoignages */}
      <HomeSection4 />

      {/* 8. Catalogue — aperçu métiers & immersions */}
      <HomeCatalogPreview />

      {/* 9. Ressources — 3 articles */}
      <HomeBlogSection />

      {/* 10. FAQ SEO */}
      <HomeFaqBlock />

      {/* 11. CTA final avec gravity */}
      <HomeSection6 />

      {/* 12. Bloc entreprises discret */}
      <HomeEntreprisesCompact />
    </>
  );
}
