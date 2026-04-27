import type { Metadata } from 'next';
import Link from 'next/link';
import { getActiveEvents } from '@/services/eventsService';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/evenements-orientation`;

const faqItems = [
  {
    question: "À quoi sert la carte Jobmi des événements d'orientation ?",
    answer:
      "Elle sert à repérer rapidement quels salons, journées portes ouvertes, ateliers métiers, immersions ou événements en ligne peuvent vraiment t'aider à avancer. L'idée n'est pas de te montrer un agenda brut, mais de t'aider à choisir où aller selon ton niveau de clarté, ton âge et ton projet.",
  },
  {
    question: 'Est-ce utile même si je ne sais pas encore quel métier viser ?',
    answer:
      "Oui. Si tu es encore flou, la carte te permet de voir quels formats sont les plus utiles pour commencer : salon généraliste, atelier découverte, événement en ligne, journée portes ouvertes. Et si tu veux réduire le champ avant, tu peux d'abord passer le test d'orientation Jobmi pour mieux cibler ce qu'il vaut la peine d'aller voir.",
  },
  {
    question: 'La carte montre-t-elle seulement des événements physiques ?',
    answer:
      "Non. On y retrouve aussi des événements en ligne, ce qui est pratique si tu veux commencer sans te déplacer ou comparer plusieurs pistes rapidement. Le but est de te laisser choisir le bon niveau d'engagement selon ton besoin du moment.",
  },
];

export const metadata: Metadata = {
  title: "Événements d'orientation, salons et immersions pour les 18–25 ans",
  description:
    "Découvre la page Jobmi dédiée aux salons, journées portes ouvertes, immersions, ateliers métiers et événements utiles pour avancer dans ton orientation.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Événements d'orientation, salons et immersions | Jobmi",
    description:
      "Repère les événements utiles à ton orientation puis ouvre la carte Jobmi pour filtrer par ville, format et type d'événement.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Événements d'orientation, salons et immersions | Jobmi",
    description:
      "Repère les événements utiles à ton orientation puis ouvre la carte Jobmi pour filtrer par ville, format et type d'événement.",
  },
};

export default function EvenementsOrientationPage() {
  const events = getActiveEvents();
  const onlineCount = events.filter((event) => event.online_only).length;
  const cityCount = new Set(
    events.filter((event) => event.city_slug !== 'en-ligne').map((event) => event.city_slug)
  ).size;
  const typeCount = new Set(events.map((event) => event.event_type)).size;

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
              Jobmi Map
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-6xl">
              La page pour trouver les bons événements d&apos;orientation avant d&apos;ouvrir la carte
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465160]">
              Salons de l&apos;étudiant, journées portes ouvertes, ateliers métiers, forums alternance,
              immersions, événements en ligne : cette page t&apos;aide à comprendre ce qu&apos;il faut
              chercher, pourquoi, et à quel moment. Ensuite, tu peux ouvrir la carte Jobmi pour
              filtrer ce qui vaut vraiment le déplacement.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/carte-orientation"
                className="rounded-2xl bg-[#04192F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6500FF]"
              >
                Ouvrir la carte orientation
              </Link>
              <Link
                href="/test-orientation"
                className="rounded-2xl border border-[#04192F]/12 px-6 py-3 text-sm font-semibold text-[#04192F] transition hover:border-[#6500FF]/30 hover:text-[#6500FF]"
              >
                Passer le test avant
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E9E1FF] bg-white p-5 shadow-[0_16px_35px_rgba(4,25,47,0.05)]">
                <p className="text-3xl font-bold text-[#04192F]">{events.length}</p>
                <p className="mt-2 text-sm leading-6 text-[#465160]">
                  événements et structures déjà visibles sur la carte.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E9E1FF] bg-white p-5 shadow-[0_16px_35px_rgba(4,25,47,0.05)]">
                <p className="text-3xl font-bold text-[#04192F]">{cityCount}</p>
                <p className="mt-2 text-sm leading-6 text-[#465160]">
                  villes françaises couvertes pour démarrer sans chercher partout.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E9E1FF] bg-white p-5 shadow-[0_16px_35px_rgba(4,25,47,0.05)]">
                <p className="text-3xl font-bold text-[#04192F]">{onlineCount}</p>
                <p className="mt-2 text-sm leading-6 text-[#465160]">
                  événements en ligne si tu veux avancer sans te déplacer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Pourquoi passer par une page dédiée avant la carte ?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-[#465160] sm:text-lg">
              <p>
                Parce que beaucoup de jeunes ouvrent une carte ou un agenda d&apos;événements sans
                savoir ce qu&apos;ils cherchent vraiment. Résultat : ils regardent tout, comparent
                mal, et finissent par ne rien faire. Cette page sert à remettre un peu d&apos;ordre
                avant le clic.
              </p>
              <p>
                Sur Jobmi, la logique est simple : un événement n&apos;est utile que s&apos;il te fait
                avancer d&apos;une étape. Un salon peut t&apos;aider à comparer plusieurs voies. Une JPO
                peut t&apos;aider à sentir une école et un environnement. Une immersion ou une PMSMP
                peut t&apos;aider à voir un métier en vrai. Un atelier peut t&apos;aider à transformer une
                curiosité en première validation.
              </p>
              <p>
                C&apos;est pour ça qu&apos;ensuite la{' '}
                <Link
                  href="/carte-orientation"
                  className="font-semibold text-[#6500FF] underline underline-offset-4"
                >
                  carte orientation Jobmi
                </Link>{' '}
                est intéressante : elle te permet de filtrer les événements avec une intention plus
                claire, pas juste de scroller au hasard.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F6FF] px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
                Ce que tu peux chercher sur la carte
              </h2>
              <p className="mt-4 text-base leading-8 text-[#465160] sm:text-lg">
                La carte est pensée pour répondre à des besoins différents selon que tu sois encore
                flou, déjà engagé dans une piste, ou en train de préparer une vraie réorientation.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: 'Salons et forums',
                  text: "Comparer plusieurs options d'un coup quand tu hésites entre plusieurs voies ou formats d'études.",
                  href: '/evenements/salons',
                  cta: 'Voir les salons',
                },
                {
                  title: 'Journées portes ouvertes',
                  text: "Sentir l'ambiance d'une école, poser de vraies questions et vérifier si le cadre te correspond.",
                  href: '/evenements/journees-portes-ouvertes',
                  cta: 'Voir les JPO',
                },
                {
                  title: 'Ateliers métiers',
                  text: 'Découvrir un geste, un univers ou un secteur avant de te projeter trop vite dans une formation.',
                  href: '/evenements/ateliers-metiers',
                  cta: 'Voir les ateliers',
                },
                {
                  title: 'Événements en ligne',
                  text: 'Commencer sans te déplacer, tester une piste rapidement et élargir ta vision avec peu de friction.',
                  href: '/evenements/en-ligne',
                  cta: 'Voir les formats en ligne',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
                >
                  <h3 className="text-xl font-bold text-[#04192F]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#465160]">{item.text}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex text-sm font-semibold text-[#6500FF] underline underline-offset-4"
                  >
                    {item.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
                  Quand ouvrir la carte, et quand faire autre chose avant ?
                </h2>
                <div className="mt-6 space-y-4 text-base leading-8 text-[#465160] sm:text-lg">
                  <p>
                    Si tu n&apos;as aucune idée de ce qui pourrait te convenir, le meilleur ordre
                    reste souvent :{' '}
                    <Link
                      href="/test-orientation"
                      className="font-semibold text-[#6500FF] underline underline-offset-4"
                    >
                      test d&apos;orientation
                    </Link>
                    , puis exploration des événements, puis confrontation au terrain.
                  </p>
                  <p>
                    Si tu as déjà 1 ou 2 pistes, la carte devient un outil de tri très concret.
                    Tu peux regarder où aller, quand, et surtout pour quoi faire : comparer des
                    écoles, tester un métier, chercher une immersion, repérer une formation, ou
                    trouver un premier contact utile.
                  </p>
                  <p>
                    Si tu es déjà dans une logique de réorientation ou de{' '}
                    <Link
                      href="/reconversion"
                      className="font-semibold text-[#6500FF] underline underline-offset-4"
                    >
                      reconversion
                    </Link>
                    , les événements les plus utiles ne sont pas forcément les plus “gros”. Ce
                    sont souvent ceux qui te permettent d&apos;observer un métier en vrai ou de parler
                    à des gens du terrain sans filtre.
                  </p>
                </div>
              </div>

              <aside className="rounded-[2rem] border border-[#E9E1FF] bg-[linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] p-7 shadow-[0_18px_40px_rgba(4,25,47,0.06)]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
                  Ouvre la carte au bon moment
                </p>
                <p className="mt-4 text-2xl font-bold leading-tight text-[#04192F]">
                  {typeCount} types d&apos;événements différents pour avancer sans rester dans le flou
                </p>
                <p className="mt-4 text-sm leading-7 text-[#465160]">
                  Salons, JPO, forums alternance, ateliers métiers, événements en ligne,
                  accompagnement, PMSMP : la carte est là pour transformer une intention vague en
                  prochaines étapes concrètes.
                </p>
                <div className="mt-6 space-y-3">
                  <Link
                    href="/carte-orientation"
                    className="flex w-full items-center justify-center rounded-2xl bg-[#6500FF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5200CC]"
                  >
                    Aller sur la carte
                  </Link>
                  <Link
                    href="/tester-un-metier"
                    className="flex w-full items-center justify-center rounded-2xl border border-[#04192F]/10 px-5 py-3 text-sm font-semibold text-[#04192F] transition hover:border-[#6500FF]/30 hover:text-[#6500FF]"
                  >
                    Tester un métier d&apos;abord
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-y border-[#ECE7FF] bg-white px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
                  Quelques entrées utiles pour commencer
                </h2>
                <p className="mt-4 text-base leading-8 text-[#465160] sm:text-lg">
                  Si tu préfères arriver directement sur un angle précis, tu peux aussi commencer
                  par une ville ou une catégorie avant de revenir à la carte complète.
                </p>
              </div>
              <Link
                href="/carte-orientation"
                className="text-sm font-semibold text-[#6500FF] underline underline-offset-4"
              >
                Voir toute la carte
              </Link>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#E9E1FF] bg-[#FBFAFF] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
                  Villes
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { href: '/carte-orientation/paris', label: 'Paris' },
                    { href: '/carte-orientation/lyon', label: 'Lyon' },
                    { href: '/carte-orientation/nantes', label: 'Nantes' },
                  ].map((city) => (
                    <Link
                      key={city.href}
                      href={city.href}
                      className="rounded-full border border-[#04192F]/10 bg-white px-4 py-2 text-sm font-semibold text-[#04192F] transition hover:border-[#6500FF]/30 hover:text-[#6500FF]"
                    >
                      {city.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#E9E1FF] bg-[#FBFAFF] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
                  Catégories
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {[
                    { href: '/evenements/salons', label: 'Salons' },
                    { href: '/evenements/journees-portes-ouvertes', label: 'JPO' },
                    { href: '/evenements/ateliers-metiers', label: 'Ateliers métiers' },
                    { href: '/evenements/en-ligne', label: 'Événements en ligne' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-[#04192F]/10 bg-white px-4 py-2 text-sm font-semibold text-[#04192F] transition hover:border-[#6500FF]/30 hover:text-[#6500FF]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Questions fréquentes sur la carte orientation Jobmi
            </h2>
            <div className="mt-8 space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-[#E9E1FF] bg-white p-5 shadow-[0_12px_30px_rgba(4,25,47,0.04)]"
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
              Prochaine étape
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Ouvre la carte et filtre ce qui peut vraiment t&apos;aider maintenant
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Si tu veux gagner du temps, ne regarde pas tout. Choisis ton objectif du moment,
              puis utilise la carte pour trouver le bon format au bon endroit.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/carte-orientation"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-[#04192F] transition hover:bg-[#F4F0FF]"
              >
                Accéder à la carte Jobmi
              </Link>
              <Link
                href="/stage-et-formation"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/5"
              >
                Explorer les formations
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
