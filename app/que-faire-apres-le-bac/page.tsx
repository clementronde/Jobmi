import type { Metadata } from 'next';
import Link from 'next/link';
import { InternalLinksSection } from '@/components/InternalLinksSection';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/que-faire-apres-le-bac`;

export const metadata: Metadata = {
  title: "Que faire après le bac ? Guide d'orientation post-bac pour les 18–20 ans",
  description:
    "Tu ne sais pas quoi faire après le bac ? Fac, BTS, BUT, écoles, alternance, réorientation : guide complet pour clarifier ton projet et tester des métiers avant de choisir.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Que faire après le bac ? | Jobmi",
    description:
      "Guide d’orientation post-bac pour les 18–20 ans : clarifier ton projet, comprendre les options d’études et tester des métiers avant de te décider.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Que faire après le bac ? | Jobmi",
    description:
      "Guide d’orientation post-bac pour les 18–20 ans : clarifier ton projet, comprendre les options d’études et tester des métiers avant de te décider.",
  },
};

const faqItems = [
  {
    question: 'Est-ce grave de ne pas savoir quoi faire après le bac ?',
    answer:
      "Non. Beaucoup de jeunes n’ont pas de projet clair à 18 ans. L’important est de ne pas rester seul avec ce flou et de commencer à explorer : tests, échanges, événements, immersions, premiers retours terrain.",
  },
  {
    question: 'Dois-je absolument aller à la fac ou en BTS tout de suite ?',
    answer:
      "Pas forcément. Fac, BTS, BUT, écoles, alternance ou année de césure structurée peuvent tous être de bonnes options selon ton profil et ta situation. L’idée est d’éviter de choisir une voie par défaut juste pour remplir une case.",
  },
  {
    question: 'Et si je me trompe d’orientation après le bac ?',
    answer:
      "La réorientation est possible. Changement de licence, passerelles vers BTS ou BUT, écoles, formations courtes, alternance : il existe plusieurs chemins pour rebondir. Le plus important est de repérer assez tôt que la voie choisie ne te convient pas et de reconstruire une suite plus cohérente.",
  },
  {
    question: 'Comment utiliser Parcoursup si je suis encore perdu ?',
    answer:
      "Parcoursup sert à formuler des vœux, pas à définir ton projet à ta place. Le plus utile est d’abord de clarifier tes envies, de comparer plusieurs pistes réalistes et, si possible, de tester un métier ou de visiter une formation avant de remplir tes choix.",
  },
  {
    question: 'Qui peut m’aider à réfléchir à mon orientation post-bac ?',
    answer:
      "Les Psy-EN et CIO, tes profs, les services orientation, les Missions Locales si tu es sorti du système scolaire, France Travail selon ta situation, mais aussi les salons, journées portes ouvertes et événements orientation. Jobmi vient en complément pour te donner des repères, des outils et un cadre d’exploration.",
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

const actionSteps = [
  {
    number: '01',
    title: 'Faire le point sur toi (vraiment)',
    body: (
      <>
        <p>
          Avant de parler fac, BTS, BUT ou école, on commence par toi. Qu’est-ce que tu aimes
          faire ? Dans quels contextes tu te sens bien : plutôt pratique, plutôt réflexion, plutôt
          avec des gens, plutôt derrière un écran ? Quels cours tu supportais ou détestais au
          lycée ?
        </p>
        <p className="mt-3">
          Tu peux noter ça rapidement sur papier ou dans ton téléphone. L’idée n’est pas d’avoir
          un projet parfait, mais quelques repères pour ne pas choisir complètement au hasard.
        </p>
      </>
    ),
  },
  {
    number: '02',
    title: 'Passer un test d’orientation pour dégager des pistes',
    body: (
      <>
        <p>
          Ensuite, passe un test d’orientation sérieux orienté métiers plutôt qu’écoles. Le test
          Jobmi est basé sur le modèle RIASEC et sur les centres d’intérêt pro : en 10 à 15
          minutes, tu obtiens des profils de métiers qui collent à ta façon de fonctionner.
        </p>
        <p className="mt-3">
          Résultat : tu ne pars plus de “je n’ai aucune idée”, mais de 2 ou 3 familles de métiers
          à creuser.
        </p>
      </>
    ),
  },
  {
    number: '03',
    title: 'Explorer les grandes options d’études post-bac (sans bullshit)',
    body: (
      <>
        <p>
          Une fois que tu as quelques pistes de métiers, tu peux regarder les grandes voies
          possibles après le bac : fac ou licence, BTS ou BUT, écoles spécialisées, alternance,
          année de césure… Chacune a ses avantages, ses contraintes et ne s’adresse pas au même
          type de profil.
        </p>
        <p className="mt-3">
          L’idée n’est pas de tout connaître par cœur, mais de voir quel format colle le mieux à
          toi et aux métiers qui t’attirent.
        </p>
      </>
    ),
  },
  {
    number: '04',
    title: 'Tester des métiers en vrai avant de t’engager',
    body: (
      <>
        <p>
          Avant de signer pour 3 ou 5 ans d’études, la meilleure idée reste de tester le quotidien
          d’un métier : stages d’observation, PMSMP, journées portes ouvertes d’écoles, ateliers
          métiers, salons d’orientation.
        </p>
        <p className="mt-3">
          Sur Jobmi, tu peux découvrir les différentes façons de tester un métier, repérer des
          événements dans ta ville via la carte des événements d’orientation, et t’inspirer de
          guides et de cas concrets pour ne pas rester au stade du doute.
        </p>
      </>
    ),
  },
  {
    number: '05',
    title: 'Construire un plan A… et un vrai plan B',
    body: (
      <>
        <p>
          Enfin, tu peux construire ton plan : quelques vœux ambitieux, quelques vœux sécurisés,
          et un plan B réaliste comme une formation courte, une alternance ou une réorientation
          possible après un an.
        </p>
        <p className="mt-3">
          L’objectif n’est pas de figer ton avenir pour 40 ans, mais de choisir une prochaine
          étape cohérente avec qui tu es aujourd’hui, en sachant que tu pourras ajuster si besoin.
        </p>
      </>
    ),
  },
];

const studyOptions = [
  {
    title: 'Université / licence',
    text:
      "Tu explores un domaine large avec plus d’autonomie et davantage de théorie. C’est utile si tu aimes comprendre, lire, analyser et avancer dans un cadre plus libre.",
  },
  {
    title: 'BTS / BUT',
    text:
      "Formations plus encadrées, souvent plus concrètes, avec projets, stages et lien plus direct avec le terrain. Très adapté si tu as besoin de structure et de mise en pratique.",
  },
  {
    title: 'Écoles spécialisées',
    text:
      "Intéressant quand tu as déjà une idée plus claire du secteur : design, web, commerce, santé privée, tourisme… À comparer sérieusement, notamment sur le coût, le niveau et les débouchés.",
  },
  {
    title: 'Alternance',
    text:
      "Tu étudies et tu travailles en même temps. C’est une excellente voie si tu veux apprendre vite, être rémunéré et te confronter rapidement à la réalité du métier.",
  },
  {
    title: 'Année de césure ou projet perso',
    text:
      "Peut être très utile si elle est structurée : objectifs, budget, expériences prévues, découvertes métiers. Ce n’est pas “perdre du temps” si tu l’utilises pour clarifier un vrai projet.",
  },
];

const links = [
  {
    href: '/test',
    title: "Test d'orientation gratuit pour les 18–25 ans",
    description: 'Comprends ton profil, tes centres d’intérêt et les familles de métiers à explorer.',
    label: 'Page pilier',
  },
  {
    href: '/tester-un-metier',
    title: 'Tester un métier avant de te lancer',
    description: 'Stages d’observation, PMSMP, ateliers, immersions : les formats concrets pour vérifier une piste.',
    label: 'Terrain',
  },
  {
    href: '/evenements-orientation',
    title: "Agenda des événements d'orientation",
    description: 'Repère les salons, JPO, forums et ateliers utiles selon ta ville et ton niveau de clarté.',
    label: 'Agenda',
  },
];

const elevatedCardClass =
  'h-full rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6500FF]/35 hover:shadow-[0_20px_45px_rgba(101,0,255,0.10)]';

const lightCardClass =
  'h-full rounded-2xl border border-[#E9E1FF] bg-[#FBFAFF] p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6500FF]/35 hover:shadow-[0_20px_45px_rgba(101,0,255,0.10)]';

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(101,0,255,0.18)]';

const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-2xl border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(4,25,47,0.08)]';

export default function QueFaireApresLeBacPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="mt-[90px] bg-[#FCFCFF] font-sans">
        <section className="border-b border-[#ECE7FF] bg-[linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Orientation post-bac
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-6xl">
              Que faire après le bac ?
              <span className="mt-2 block text-3xl sm:text-4xl lg:text-5xl">
                Guide d’orientation post-bac pour les 18–20 ans
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465160]">
              Tu viens d’avoir ton bac ou de louper ta première année et tu ne sais pas quoi faire
              après ? On t’aide à clarifier ton projet, découvrir les options d’études et tester
              des métiers en vrai avant de te décider.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/test"
                className={`${primaryButtonClass} bg-[#04192F] text-white hover:bg-[#6500FF]`}
              >
                Passe le test d’orientation
              </Link>
              <Link
                href="/tester-un-metier"
                className={`${secondaryButtonClass} border-[#04192F]/12 text-[#04192F] hover:border-[#6500FF]/30 hover:text-[#6500FF]`}
              >
                Découvre les façons de tester un métier
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Normal de ne pas savoir quoi faire après le bac
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-[#465160] sm:text-lg">
              <p>
                Près d’un étudiant sur trois regrette son choix d’orientation après le bac ou
                finit par se réorienter dans les premières années. Si tu es perdu, que tu hésites
                entre fac, BTS, BUT, écoles, alternance, ou que Parcoursup t’angoisse, tu es loin
                d’être seul.
              </p>
              <p>
                L’objectif de cette page n’est pas de te vendre une voie parfaite, mais de t’aider
                à mieux te connaître, comprendre les grandes options après le bac, tester des
                métiers sur le terrain, et construire un plan qui te ressemble vraiment, même si tu
                n’as pas toutes les réponses aujourd’hui.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F6FF] px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
                Résumé actionnable
              </p>
              <h2 className="mt-4 text-3xl font-bold text-[#04192F] sm:text-4xl">
                Ton plan d’action après le bac en 5 étapes
              </h2>
            </div>

            <div className="mt-10 space-y-5">
              {actionSteps.map((step) => (
                <article
                  key={step.number}
                  className={`${elevatedCardClass} grid gap-5 sm:grid-cols-[90px_1fr]`}
                >
                  <div className="text-3xl font-bold text-[#6500FF]">{step.number}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#04192F]">{step.title}</h3>
                    <div className="mt-4 text-base leading-8 text-[#465160]">{step.body}</div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/test"
                className={`${primaryButtonClass} bg-[#6500FF] text-white hover:bg-[#5200CC]`}
              >
                Je commence par le test
              </Link>
              <Link
                href="/tester-un-metier"
                className={`${secondaryButtonClass} border-[#04192F]/12 text-[#04192F] hover:border-[#6500FF]/30 hover:text-[#6500FF]`}
              >
                Je regarde les façons de tester un métier
              </Link>
              <Link
                href="/evenements-orientation"
                className={`${secondaryButtonClass} border-[#E9E1FF] bg-white text-[#6500FF] hover:border-[#6500FF]/40`}
              >
                Je découvre les événements d’orientation près de chez moi
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Les grandes options après le bac, sans bullshit
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#465160] sm:text-lg">
              Tu vas beaucoup entendre parler de fac, BTS, BUT, écoles, prépas, alternance ou
              année de césure. Le vrai sujet n’est pas de tout connaître par cœur, mais de
              comprendre à quoi chaque voie ressemble dans la vraie vie et quel type de profil elle
              sert le mieux.
            </p>

            <div className="mt-10 grid gap-5 md:auto-rows-fr md:grid-cols-2">
              {studyOptions.map((option) => (
                <article
                  key={option.title}
                  className={`${elevatedCardClass} flex flex-col`}
                >
                  <h3 className="text-xl font-bold text-[#04192F]">{option.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465160]">{option.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#04192F] px-6 py-16 text-white sm:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">
                Si tu n’as aucune idée
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Tu n’as pas besoin de trouver le métier parfait tout de suite
              </h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-white/75 sm:text-lg">
                <p>
                  Si tu te reconnais dans “je n’ai aucune idée de métier, juste des matières que
                  j’aime ou que je déteste”, c’est plus courant que tu ne le penses. L’objectif
                  n’est pas de deviner ton avenir complet, mais d’éliminer ce qui ne te correspond
                  pas et de faire émerger 2 ou 3 familles de métiers à creuser.
                </p>
                <p>
                  Le plus utile, c’est souvent de tester des familles de métiers plutôt qu’un titre
                  hyper précis. Santé, social, design, digital, commerce, artisanat : quand tu
                  explores un univers en conditions réelles, tout devient beaucoup plus concret.
                </p>
                <p>
                  Si tu veux voir quoi faire, où aller, et dans quelle ville, tu peux aussi ouvrir{' '}
                  <Link
                    href="/evenements-orientation"
                    className="font-semibold text-white underline underline-offset-4"
                  >
                    l’agenda des événements d’orientation Jobmi
                  </Link>{' '}
                  pour repérer salons, journées portes ouvertes, forums et ateliers.
                </p>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFA1FF]">
                Tu peux commencer ici
              </p>
              <div className="mt-5 space-y-3">
                <Link
                  href="/test"
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#04192F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4F0FF] hover:shadow-[0_16px_34px_rgba(255,255,255,0.08)]"
                >
                  <span>Passer le test Jobmi</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/tester-un-metier"
                  className="flex items-center justify-between rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:border-white/30"
                >
                  <span>Tester un métier avant de choisir</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/reconversion"
                  className="flex items-center justify-between rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:border-white/30"
                >
                  <span>Voir la page réorientation / reconversion</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Et si tu veux te réorienter après un bac+1 ?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-[#465160] sm:text-lg">
              <p>
                Tu as commencé une L1, un BTS, un BUT ou une école, et tu te rends compte que les
                cours ne te plaisent pas, que l’ambiance ne te convient pas ou que tu ne te vois
                pas dans les métiers associés ? Tu es exactement dans la zone où une réorientation
                précoce peut t’éviter de perdre beaucoup plus de temps plus tard.
              </p>
              <p>
                Les options existent : changement de filière à la fac, BTS ou BUT après une L1,
                admissions parallèles, alternance, formations plus courtes. Si tu veux aller plus
                loin là-dessus, la page Jobmi sur la{' '}
                <Link
                  href="/reconversion"
                  className="font-semibold text-[#6500FF] underline underline-offset-4"
                >
                  reconversion jeune
                </Link>{' '}
                t’explique aussi les erreurs à éviter quand tu veux tout plaquer trop vite.
              </p>
            </div>
          </div>
        </section>

        <InternalLinksSection
          className="bg-[#F8F7FF]"
          containerClassName="max-w-5xl"
          eyebrow="Après le bac"
          title="Les meilleures pages Jobmi pour avancer après ton bac"
          description="Commence par clarifier ton profil, puis teste le terrain et compare les bons formats au lieu de choisir à l’aveugle."
          links={links}
        />

        <section className="bg-[#F3F3F3] px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Ton plan d’action post-bac en 30 jours
            </h2>
            <div className="mt-8 grid gap-5 md:auto-rows-fr md:grid-cols-2">
              {[
                {
                  title: 'Jours 1–3 : faire le point sur toi',
                  text: 'Note ce que tu aimes, ce que tu détestes, les matières qui te parlent et les environnements où tu te sens bien.',
                },
                {
                  title: 'Jours 4–7 : passer un test d’orientation',
                  text: 'Utilise le test Jobmi pour faire ressortir des profils RIASEC et 2 ou 3 familles de métiers à explorer.',
                },
                {
                  title: 'Jours 8–15 : explorer les pistes',
                  text: 'Lis quelques fiches métiers, compare les grandes options d’études et regarde les formats possibles après le bac.',
                },
                {
                  title: 'Jours 16–25 : tester le terrain',
                  text: 'Participe à un salon, une JPO, un atelier ou prépare une immersion courte pour arrêter de décider seulement sur image.',
                },
                {
                  title: 'Jours 26–30 : choisir un cap et un plan B',
                  text: 'Liste 2 ou 3 scénarios réalistes, vérifie les dates, les prérequis, les coûts et fais relire ça à une personne ressource.',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className={`${elevatedCardClass} flex flex-col`}
                >
                  <h3 className="text-xl font-bold text-[#04192F]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465160]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              FAQ – Questions fréquentes après le bac
            </h2>
            <div className="mt-8 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-[#E9E1FF] bg-white p-5 shadow-[0_12px_30px_rgba(4,25,47,0.04)] transition-all duration-300 hover:border-[#6500FF]/30 hover:shadow-[0_18px_36px_rgba(101,0,255,0.08)]"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-[#04192F]">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-base leading-8 text-[#465160]">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#04192F] px-6 py-16 text-white sm:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Dernier pas
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Tu n’as pas besoin d’avoir toute ta vie en tête pour faire un bon prochain choix
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Commence par clarifier ton profil, confronte quelques pistes au réel, puis choisis
              une prochaine étape cohérente. C’est déjà largement suffisant pour avancer beaucoup
              mieux qu’au hasard.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/test"
                className={`${primaryButtonClass} bg-white text-[#04192F] hover:bg-[#F4F0FF]`}
              >
                Je commence par le test d’orientation Jobmi
              </Link>
              <Link
                href="/tester-un-metier"
                className={`${secondaryButtonClass} border-white/20 text-white hover:border-white/45 hover:bg-white/5`}
              >
                Je découvre les façons de tester un métier
              </Link>
              <Link
                href="/evenements-orientation"
                className={`${secondaryButtonClass} border-white/20 text-white hover:border-white/45 hover:bg-white/5`}
              >
                Je regarde les événements d’orientation près de chez moi
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
