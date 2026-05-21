import type { Metadata } from 'next';
import Link from 'next/link';
import RiasecTestComponent from '@/components/RiasecTestComponent';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/test`;

export const metadata: Metadata = {
  title: "Passer le test d'orientation gratuit (RIASEC) – Jobmi",
  description:
    "Passe le test d'orientation RIASEC gratuit Jobmi. En 15 min, découvre ton profil, tes familles de métiers et tes prochaines étapes concrètes. Pour les 18–25 ans.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Test d'orientation gratuit (RIASEC) | Jobmi",
    description:
      "Découvre ton profil et tes familles de métiers en 15 min. 100 % gratuit, conçu pour les 18–25 ans.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Test d'orientation gratuit (RIASEC) | Jobmi",
    description:
      "Découvre ton profil et tes familles de métiers en 15 min. 100 % gratuit, conçu pour les 18–25 ans.",
  },
};

const allFaqItems = [
  {
    question: "Quel métier est fait pour moi ?",
    answer:
      "Il n'y a pas une seule réponse valable pour toute ta vie. Le test Jobmi t'aide à repérer des familles de métiers cohérentes avec tes intérêts, ta façon de travailler et les environnements dans lesquels tu peux te projeter. Ensuite, le plus utile est de comparer plusieurs pistes et d'en tester une sur le terrain.",
  },
  {
    question: "Est-ce fiable de faire un test d'orientation en ligne ?",
    answer:
      "Un test d'orientation en ligne peut être fiable comme point de départ s'il repose sur un modèle clair et des questions concrètes. Il ne doit pas être utilisé comme une vérité absolue. Jobmi s'appuie sur le modèle RIASEC pour ouvrir des pistes, puis t'encourage à les vérifier avec des échanges, des immersions ou des formations adaptées.",
  },
  {
    question: "Test d'orientation ou bilan de compétences : que choisir ?",
    answer:
      "Si tu veux commencer rapidement et gratuitement, un test d'orientation est une bonne première étape. Si tu as besoin d'un accompagnement approfondi, d'un plan de reconversion complet ou d'un travail sur ton parcours, un bilan de compétences avec un professionnel peut être plus adapté.",
  },
  {
    question: 'Que faire après les résultats du test ?',
    answer:
      "Lis ton profil, repère 2 ou 3 familles de métiers, puis choisis une action concrète : lire une fiche métier, parler à un professionnel, aller à un événement d'orientation, chercher une immersion ou comparer les formations possibles. Le résultat sert surtout à passer à l'exploration.",
  },
  {
    question: 'Combien de questions y a-t-il dans le test ?',
    answer: 'Le test comporte 30 questions réparties en 5 pages de 6 questions. Chaque question te demande de réagir à une situation ou une activité concrète sur une échelle de 1 à 5.',
  },
  {
    question: 'Comment répondre aux questions ?',
    answer: "Réponds selon ce que tu ressens vraiment, pas ce que tu crois qu'il faudrait répondre. Il n'y a aucune bonne ou mauvaise réponse. Plus tu es honnête, plus les résultats seront utiles.",
  },
  {
    question: 'Que contiennent les résultats ?',
    answer: 'Tu obtiens ton profil RIASEC sous forme de score sur chaque dimension, une description de ta combinaison dominante, puis une liste de familles de métiers et d\'exemples de métiers concrets correspondant à ton profil.',
  },
  {
    question: 'Le test remplace-t-il un bilan de compétences ?',
    answer: "Non. Le test est un outil de réflexion et d'exploration, pas un diagnostic professionnel complet. Il te donne un point de départ fiable pour mieux te comprendre et explorer des pistes, mais un bilan de compétences avec un professionnel est complémentaire si tu veux aller plus loin.",
  },
  {
    question: 'Est-ce que je peux sauvegarder mes résultats ?',
    answer: "Oui. À la fin du test, tu pourras te connecter avec Google ou ton email pour sauvegarder ton profil et le retrouver plus tard. Si tu ne veux pas te connecter, tu peux quand même voir tes résultats dans le moment.",
  },
  {
    question: "Qu'est-ce que le modèle RIASEC ?",
    answer: "Le modèle RIASEC (ou théorie de Holland) identifie 6 grands types de personnalités professionnelles : Réaliste, Investigateur, Artistique, Social, Entreprenant et Conventionnel. Chaque personne combine plusieurs de ces dimensions dans des proportions différentes, ce qui permet d'orienter vers des familles de métiers cohérentes.",
  },
  {
    question: 'Le type Réaliste (R), c\'est quoi ?',
    answer: "Tu aimes construire, manipuler, travailler de tes mains ou avec des machines. Tu préfères les résultats concrets aux discussions abstraites.",
  },
  {
    question: 'Le type Investigateur (I), c\'est quoi ?',
    answer: "Tu analyses, observes, résous des problèmes. Tu es attiré par la science, la recherche et la compréhension en profondeur.",
  },
  {
    question: 'Le type Artistique (A), c\'est quoi ?',
    answer: "Tu crées, exprimes, imagines. Les métiers où tu peux apporter ta touche originale et sortir des sentiers battus t'attirent.",
  },
  {
    question: 'Le type Social (S), c\'est quoi ?',
    answer: "Tu aides, enseignes, accompagnes. Le contact humain est un moteur pour toi, pas juste un aspect de ton travail.",
  },
  {
    question: 'Le type Entreprenant (E), c\'est quoi ?',
    answer: "Tu convaincs, diriges, prends des initiatives. Tu es à l'aise pour lancer des projets et entraîner les autres.",
  },
  {
    question: 'Le type Conventionnel (C), c\'est quoi ?',
    answer: "Tu organises, structures, appliques des méthodes. Tu apprécies les rôles clairs et les environnements ordonnés.",
  },
];

const resultItems = [
  {
    title: 'Ton profil RIASEC',
    text:
      "Tu découvres tes dimensions dominantes : réaliste, investigateur, artistique, social, entreprenant ou conventionnel.",
  },
  {
    title: 'Des familles de métiers',
    text:
      "Le résultat te donne des pistes concrètes à explorer, pas une réponse figée qui déciderait à ta place.",
  },
  {
    title: 'Des exemples de métiers',
    text:
      "Tu peux visualiser des métiers qui correspondent à ton profil et commencer à comparer ce qui t'attire vraiment.",
  },
  {
    title: 'Des prochaines étapes',
    text:
      "Après le test, Jobmi t'oriente vers des guides, immersions, événements et formations pour vérifier tes pistes.",
  },
];

const audienceItems = [
  {
    title: 'Tu es lycéen ou juste après le bac',
    text:
      "Tu hésites entre fac, BTS, BUT, école, alternance ou année de césure et tu veux éviter un choix par défaut.",
    href: '/que-faire-apres-le-bac',
    cta: 'Lire le guide post-bac',
  },
  {
    title: 'Tu es étudiant et tu doutes',
    text:
      "Ta L1, ton BTS, ton BUT ou ton école ne te ressemble plus et tu veux reconstruire une suite plus cohérente.",
    href: '/reconversion',
    cta: 'Préparer ta réorientation',
  },
  {
    title: 'Tu veux changer de voie',
    text:
      "Tu as une première expérience, un début de formation ou un projet flou et tu veux repartir sur une piste plus concrète.",
    href: '/reconversion',
    cta: 'Voir la reconversion jeune',
  },
  {
    title: 'Tu as une idée de métier',
    text:
      "Tu veux vérifier si le quotidien réel du métier te correspond avant de choisir une formation ou une alternance.",
    href: '/tester-un-metier',
    cta: 'Tester un métier',
  },
];

const nextStepLinks = [
  {
    href: '/tester-un-metier',
    title: 'Tester un métier avant de t’engager',
    text: 'Stages, PMSMP, ateliers métiers, jobshadowing : découvre les formats pour vérifier une piste.',
  },
  {
    href: '/stage-et-formation',
    title: 'Comparer stages, immersions et formations',
    text: 'Comprends quand choisir une immersion, une formation courte, une alternance ou un autre format.',
  },
  {
    href: '/reconversion',
    title: 'Construire une reconversion jeune',
    text: 'Méthode, erreurs à éviter, financement et plan d’action pour avancer sans te disperser.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

function TestSeoSections() {
  return (
    <>
      <section className="border-t border-[#ECE7FF] bg-white px-6 py-16 font-sans sm:px-10">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Résultats du test
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#04192F] sm:text-4xl">
              Ce que tu vas obtenir après le test d’orientation
            </h2>
            <p className="mt-5 text-base leading-8 text-[#465160] sm:text-lg">
              Le test Jobmi ne sert pas à te coller une étiquette. Il t'aide à mieux comprendre ce
              qui t'attire, les environnements dans lesquels tu peux te sentir à ta place et les
              métiers qui méritent d'être explorés.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {resultItems.map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#E9E1FF] bg-[#FBFAFF] p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
              >
                <h3 className="text-xl font-bold text-[#04192F]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#465160]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FCFCFF] px-6 py-16 font-sans sm:px-10">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Pour qui ?
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#04192F] sm:text-4xl">
              Un test d’orientation pensé pour les 18–25 ans
            </h2>
            <p className="mt-5 text-base leading-8 text-[#465160] sm:text-lg">
              La plupart des tests restent très généraux. Jobmi se concentre sur les moments où le
              choix devient concret : après le bac, pendant une réorientation, avant une formation
              ou au début d'une reconversion.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audienceItems.map((item) => (
              <Link
                key={`${item.title}-${item.href}`}
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

      <section className="bg-white px-6 py-16 font-sans sm:px-10">
        <div className="mx-auto grid max-w-screen-xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Confiance
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#04192F] sm:text-4xl">
              Ce test ne te donne pas une réponse magique
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#465160]">
            <p>
              Un test d'orientation gratuit peut t'aider à sortir du flou, mais il ne remplace pas
              ton jugement, un échange avec un professionnel ou une expérience terrain. Il sert à
              transformer “je ne sais pas quoi faire” en quelques pistes que tu peux vraiment
              comparer.
            </p>
            <p>
              C'est aussi pour ça que Jobmi ne s'arrête pas au résultat. Une fois ton profil
              identifié, l'étape suivante consiste à confronter tes idées à la réalité : lire des
              guides, poser des questions, aller à une journée portes ouvertes, demander une PMSMP,
              faire un stage d'observation ou tester un métier sur une courte durée.
            </p>
            <p>
              Si tu veux commencer par comprendre la méthode, tu peux lire notre page dédiée au{' '}
              <Link href="/test-orientation" className="font-semibold text-[#6500FF] underline underline-offset-4">
                test d'orientation
              </Link>
              . Si tu veux passer directement au concret, explore les façons de{' '}
              <Link href="/tester-un-metier" className="font-semibold text-[#6500FF] underline underline-offset-4">
                tester un métier avant de choisir une formation
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F6FF] px-6 py-16 font-sans sm:px-10">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Après le résultat
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#04192F] sm:text-4xl">
              Les prochaines étapes pour vérifier ta piste
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {nextStepLinks.map((item) => (
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
                  Continuer <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function TestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-[90px]">
        <RiasecTestComponent />
      </div>

      <TestSeoSections />

      <section className="px-6 sm:px-10 bg-[#F7F7F8] border-t border-gray-100 pb-20">
        <div className="max-w-3xl mx-auto pt-14">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] leading-tight mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {allFaqItems.map((item) => (
              <div key={item.question} className="border-b border-gray-200 pb-6">
                <h3 className="font-sans font-semibold text-[#04192F] text-lg mb-2">
                  {item.question}
                </h3>
                <p className="font-sans text-gray-500 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="font-sans text-gray-400 text-sm mb-4">
              Tu as ton résultat ? Utilise-le maintenant pour passer au concret.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/tester-un-metier"
                className="font-sans inline-flex items-center gap-2 px-6 py-3 bg-[#04192F] text-white rounded-2xl font-semibold text-sm hover:bg-[#0a2a47] transition"
              >
                Tester un métier
              </Link>
              <Link
                href="/test-orientation"
                className="font-sans inline-flex items-center gap-2 px-6 py-3 border border-[#04192F]/15 text-[#04192F] rounded-2xl font-semibold text-sm hover:border-[#6500FF]/35 hover:text-[#6500FF] transition"
              >
                Comprendre le test d&apos;orientation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
