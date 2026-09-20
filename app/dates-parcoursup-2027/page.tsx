import type { Metadata } from 'next';
import Link from 'next/link';
import { InternalLinksSection } from '@/components/InternalLinksSection';
import { InlineTestCTA } from '@/components/articles/InlineTestCTA';
import { parcoursupCalendarSteps, parcoursupCalendarNote } from '@/data/parcoursupCalendar';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/dates-parcoursup-2027`;
const GUIDE_URL = '/blog/calendrier-parcoursup-2027';

export const metadata: Metadata = {
  title: 'Dates Parcoursup 2027 : toutes les échéances à retenir',
  description:
    "Quelles sont les dates de Parcoursup 2027 ? Inscriptions, vœux, résultats, phase complémentaire : toutes les échéances en un coup d'œil, avec le guide complet et le test d'orientation gratuit.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Dates Parcoursup 2027 : toutes les échéances à retenir | Jobmi',
    description:
      "Quelles sont les dates de Parcoursup 2027 ? Inscriptions, vœux, résultats, phase complémentaire : toutes les échéances en un coup d'œil.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dates Parcoursup 2027 : toutes les échéances à retenir | Jobmi',
    description:
      "Quelles sont les dates de Parcoursup 2027 ? Inscriptions, vœux, résultats, phase complémentaire : toutes les échéances en un coup d'œil.",
  },
};

const faqItems = [
  {
    question: 'Quelles sont les dates de Parcoursup 2027 ?',
    answer:
      "Le site d'information sur les formations ouvre vers mi-novembre 2026, les inscriptions vers mi-janvier 2027, la date limite des vœux vers mi-mars 2027, et les premières réponses arrivent début juin 2027 (dates prévisionnelles, à confirmer avec le calendrier officiel).",
  },
  {
    question: 'Quand commence Parcoursup 2027 ?',
    answer:
      "L'information sur les formations démarre vers mi-novembre 2026. Les inscriptions et la formulation des vœux ouvrent ensuite vers mi-janvier 2027.",
  },
  {
    question: 'Quelle est la date limite pour formuler ses vœux ?',
    answer:
      "Mi-mars 2027, dans l'état actuel des prévisions calées sur la session 2026. Après cette date, impossible d'ajouter un vœu.",
  },
  {
    question: 'À quelle date tombent les résultats Parcoursup 2027 ?',
    answer:
      "Les premières réponses arrivent vers début juin 2027, puis en continu tout l'été au fil des désistements. La phase principale se termine mi-juillet, la phase complémentaire mi-septembre.",
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

const phaseCards = [
  {
    title: 'Phase 1 — Information',
    period: 'Nov. – déc. 2026',
    text: "Le site publie les formations, les attendus et les taux d'accès. C'est le moment de construire ta liste de vœux, sans te précipiter.",
  },
  {
    title: 'Phase 2 — Vœux et admission',
    period: 'Janv. – juillet 2027',
    text: "Tu t'inscris, formules jusqu'à 10 vœux, confirmes ton dossier, puis reçois les réponses (Oui, Oui-si, En attente, Non) à partir de début juin.",
  },
  {
    title: 'Phase complémentaire',
    period: 'Juin – sept. 2027',
    text: 'En parallèle puis après la phase principale, tu peux formuler 10 nouveaux vœux sur les places encore vacantes.',
  },
];

const links = [
  {
    href: GUIDE_URL,
    title: 'Calendrier Parcoursup 2027 : le guide complet',
    description: 'Toutes les étapes expliquées en détail, la FAQ complète et quoi faire si tu n’as aucune proposition.',
    label: 'Guide complet',
  },
  {
    href: '/test',
    title: "Test d'orientation gratuit pour les 18–25 ans",
    description: 'Identifie 2 à 3 familles de métiers cohérentes avec ton profil en 6 à 8 minutes.',
    label: 'Page pilier',
  },
  {
    href: '/tester-un-metier',
    title: 'Tester un métier avant de te lancer',
    description: "Vérifie une piste sur le terrain avant de figer tes vœux.",
    label: 'Terrain',
  },
  {
    href: '/blog/orientation-post-bac-sans-parcoursup',
    title: 'Orientation post-bac sans Parcoursup',
    description: 'Les options si tu ne veux pas ou plus dépendre de la plateforme.',
    label: 'Guide',
  },
  {
    href: '/blog/parcoursup-gerer-stress-resultats',
    title: 'Gérer le stress des résultats Parcoursup',
    description: "L'attente, la pression des parents, les refus : comment reprendre la main.",
    label: 'Résultats',
  },
];

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(101,0,255,0.18)]';

const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-2xl border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(4,25,47,0.08)]';

const elevatedCardClass =
  'h-full rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6500FF]/35 hover:shadow-[0_20px_45px_rgba(101,0,255,0.10)]';

export default function DatesParcoursup2027Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="mt-[90px] bg-[#FCFCFF] font-sans">
        <section className="border-b border-[#ECE7FF] bg-[linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Parcoursup 2027
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-6xl">
              Dates Parcoursup 2027 : toutes les échéances à retenir
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465160]">
              Quelles sont les dates de Parcoursup 2027 ? Inscriptions, vœux, résultats, phase
              complémentaire : toutes les échéances prévisionnelles, en un coup d&apos;œil. Pour le
              détail de chaque étape, consulte le guide complet juste en dessous.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/test"
                className={`${primaryButtonClass} bg-[#04192F] text-white hover:bg-[#6500FF]`}
              >
                Passe le test d&apos;orientation
              </Link>
              <Link
                href={GUIDE_URL}
                className={`${secondaryButtonClass} border-[#04192F]/12 text-[#04192F] hover:border-[#6500FF]/30 hover:text-[#6500FF]`}
              >
                Lire le guide complet
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Toutes les dates en un coup d&apos;œil
            </h2>

            <div className="mt-8 overflow-x-auto rounded-2xl border border-[#E9E1FF] bg-white shadow-[0_14px_35px_rgba(4,25,47,0.05)]">
              <table className="w-full border-collapse text-left text-sm leading-7 text-[#465160]">
                <thead>
                  <tr className="border-b-2 border-[#6500FF] text-[#04192F]">
                    <th className="px-5 py-4 font-bold">Date</th>
                    <th className="px-5 py-4 font-bold">Étape</th>
                    <th className="px-5 py-4 font-bold">Ce que tu dois faire</th>
                  </tr>
                </thead>
                <tbody>
                  {parcoursupCalendarSteps.map((step, index) => (
                    <tr
                      key={step.label}
                      className={index < parcoursupCalendarSteps.length - 1 ? 'border-b border-[#E9E1FF]' : ''}
                    >
                      <td className="px-5 py-4 font-semibold text-[#04192F]">{step.period}</td>
                      <td className="px-5 py-4">{step.label}</td>
                      <td className="px-5 py-4">{step.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm italic text-[#6b7280]">{parcoursupCalendarNote}</p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <InlineTestCTA />
        </div>

        <section className="bg-[#F7F6FF] px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Les 3 phases en bref
            </h2>
            <div className="mt-10 grid gap-5 md:auto-rows-fr md:grid-cols-3">
              {phaseCards.map((phase) => (
                <article key={phase.title} className={`${elevatedCardClass} flex flex-col`}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6500FF]">
                    {phase.period}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-[#04192F]">{phase.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#465160]">{phase.text}</p>
                  <Link
                    href={GUIDE_URL}
                    className="mt-4 text-sm font-bold text-[#6500FF] hover:text-[#04192F]"
                  >
                    Voir le détail →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <InternalLinksSection
          containerClassName="max-w-5xl"
          eyebrow="Pour aller plus loin"
          title="Le guide complet et les ressources utiles"
          description="Cette page te donne les dates. Le guide complet détaille chaque étape, les pièges à éviter et les options si tu n'as aucune proposition."
          links={links}
        />

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              FAQ — Dates Parcoursup 2027
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
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Avant de figer tes vœux
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Assure-toi de viser les bonnes formations
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Passe le test d&apos;orientation gratuit pour identifier les familles de métiers qui te
              correspondent, puis teste un métier sur le terrain avant de choisir tes vœux définitifs.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="/test"
                className={`${primaryButtonClass} bg-white !text-[#04192F] hover:bg-[#F4F0FF]`}
              >
                Faire le test d&apos;orientation
              </Link>
              <Link
                href={GUIDE_URL}
                className={`${secondaryButtonClass} border-white/20 !text-white hover:border-white/45 hover:bg-white/5`}
              >
                Lire le guide complet
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
