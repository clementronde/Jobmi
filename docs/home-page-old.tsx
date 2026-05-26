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
  title: "Test d'orientation gratuit, métiers et reconversion 18-25 ans",
  description:
    "Tu as 18-25 ans et tu ne sais pas quelle voie choisir ? Fais le test d'orientation Jobmi, explore des métiers et découvre comment les tester avant une formation.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: "Jobmi | Test d'orientation gratuit, métiers et reconversion 18-25 ans",
    description:
      "Test d'orientation gratuit, immersions métier et guides pour les 18-25 ans qui veulent trouver leur voie avec plus de concret.",
  },
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: "Jobmi | Test d'orientation gratuit, métiers et reconversion 18-25 ans",
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

function HomeMethodSeoBlock() {
  return (
    <section className="bg-white px-6 py-16 font-sans sm:px-10">
      <div className="mx-auto grid max-w-screen-xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
            Méthode Jobmi
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#04192F] sm:text-4xl">
            Un test pour ouvrir des pistes, pas pour décider à ta place
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160] sm:text-lg">
            Quand tu cherches ta voie, le piège est de vouloir une réponse parfaite tout de suite.
            Jobmi fait l'inverse : on t'aide à avancer par étapes, avec un test d'orientation
            gratuit, des guides de reconversion, des idées de métiers et des formats pour tester le
            terrain avant de choisir une formation.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/test"
              className="inline-flex items-center justify-center rounded-xl bg-[#04192F] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6500FF]"
            >
              Faire le test gratuit
            </Link>
            <Link
              href="/tester-un-metier"
              className="inline-flex items-center justify-center rounded-xl border border-[#04192F]/15 px-6 py-3 text-sm font-bold text-[#04192F] transition-all duration-300 hover:-translate-y-1 hover:border-[#6500FF]/35 hover:text-[#6500FF]"
            >
              Voir comment tester un métier
            </Link>
          </div>
        </div>

        <div className="space-y-5 text-base leading-8 text-[#465160]">
          <p>
            Jobmi s'adresse aux 18-25 ans qui ont besoin de concret : tu peux sortir du bac sans
            idée claire, te sentir coincé en L1, hésiter entre BTS, BUT, alternance ou école, ou
            vouloir changer de voie après une première expérience. Dans tous ces cas, le sujet n'est
            pas seulement de trouver une formation, mais de comprendre le métier qui se cache derrière.
          </p>
          <p>
            Le test d'orientation sert à faire émerger des familles de métiers cohérentes avec tes
            intérêts et ta façon de travailler. Ensuite, les pages Jobmi t'aident à comparer les
            options : reconversion jeune, orientation post-bac, stages d'observation, PMSMP,
            immersions, ateliers métiers, salons et journées portes ouvertes.
          </p>
          <p>
            Notre conviction est simple : une bonne orientation se construit en croisant trois
            choses. D'abord ton profil, puis les opportunités réalistes autour de toi, et enfin une
            confrontation au terrain. C'est pour ça que Jobmi ne promet pas un métier magique après
            quelques questions : on t'aide à passer d'une piste à une action concrète.
          </p>
          <p>
            Pour commencer, tu peux passer le{' '}
            <Link href="/test" className="font-semibold text-[#6500FF] underline underline-offset-4">
              test d'orientation gratuit
            </Link>
            , lire le guide{' '}
            <Link href="/que-faire-apres-le-bac" className="font-semibold text-[#6500FF] underline underline-offset-4">
              que faire après le bac
            </Link>
            , préparer une{' '}
            <Link href="/reconversion" className="font-semibold text-[#6500FF] underline underline-offset-4">
              reconversion à 20 ans
            </Link>{' '}
            ou découvrir comment{' '}
            <Link href="/tester-un-metier" className="font-semibold text-[#6500FF] underline underline-offset-4">
              tester un métier avant de t'engager
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function HomeFaqBlock() {
  return (
    <section className="bg-[#FCFCFF] px-6 py-16 font-sans sm:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
          Questions fréquentes
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#04192F] sm:text-4xl">
          Avant de choisir ta voie
        </h2>
        <div className="mt-10 space-y-5">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-lg border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]">
              <h3 className="text-lg font-bold text-[#04192F]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[#465160]">{item.answer}</p>
            </article>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeSection1 />
      <HomeSeoBlocks />
      <HomeMethodSeoBlock />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeFaqBlock />
      <HomeSection6 />
    </>
  );
}
