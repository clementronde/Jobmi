import type { Metadata } from 'next';
import Link from 'next/link';
import { experiences, TYPE_FILTERS } from '@/data/ateliers';
import { AteliersGrid } from '@/components/AteliersGrid';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/ateliers-decouverte`;

export const metadata: Metadata = {
  title: 'Ateliers, semaines découverte et immersions métier — Jobmi',
  description:
    "Ateliers artisanat, semaines découverte métiers, journées en école, stages d'immersion : toutes les expériences pour tester un métier avant de choisir une formation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Ateliers découverte et immersions métier | Jobmi",
    description:
      "Artisanat, numérique, santé, commerce… Trouve une expérience concrète pour tester un métier avant de t'engager dans une formation.",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ateliers découverte et immersions métier | Jobmi',
  description:
    "Sélection d'expériences — ateliers, semaines découverte, journées en école, stages — pour tester un métier avant de se former.",
  url: PAGE_URL,
  isPartOf: { '@id': `${BASE_URL}/#website` },
  inLanguage: 'fr-FR',
};

const FORMATS = [
  {
    tag: '2–4 heures',
    titre: 'Atelier artisanat',
    texte:
      "Tu mets la main à la pâte avec un artisan en activité. Tournage, boulangerie, maroquinerie, bijouterie… Le format le plus accessible pour tester un métier manuel.",
    dark: false,
  },
  {
    tag: '3 à 5 jours',
    titre: 'Semaine découverte',
    texte:
      "Une semaine entière aux côtés de professionnels, en entreprise ou en école. Tu alternes observation, questions et temps de réflexion sur ton projet.",
    dark: true,
  },
  {
    tag: '1 journée',
    titre: 'Journée en école',
    texte:
      "Tu assistes à un vrai cours, tu parles aux étudiants et tu vois l'ambiance. Tu testes la formation ET le métier visé sans t'engager.",
    dark: false,
  },
  {
    tag: '2 jours → 2 semaines',
    titre: 'Stage & immersion',
    texte:
      "PMSMP, jobshadowing, stage d'observation : tu suis un professionnel dans son quotidien réel. Le format le plus honnête pour vraiment confirmer une piste.",
    dark: false,
  },
];

const STATS = [
  { n: `${experiences.length}`, label: 'expériences sélectionnées', sub: 'ateliers, semaines découverte, journées école, stages' },
  { n: '4', label: 'formats différents', sub: 'du plus court (2h) au plus immersif (2 semaines)' },
  { n: '0 €', label: 'pour commencer', sub: 'plusieurs expériences entièrement gratuites' },
];

export default function AteliersDecouverte() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .fade-up {
            opacity: 0;
            transform: translateY(16px);
            animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }
          .fd-1 { animation-delay: 0.06s; }
          .fd-2 { animation-delay: 0.14s; }
          .fd-3 { animation-delay: 0.22s; }
          @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
          .card-lift {
            transition: transform 220ms ease, box-shadow 220ms ease;
          }
          .card-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 16px 36px rgba(4,25,47,0.09);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .fade-up, .card-lift { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <main className="mt-[90px] bg-[#FCFCFF] font-sans">

        {/* ── HERO ── */}
        <section className="border-b border-[#ECE7FF] bg-[linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="fade-up text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Pour les 18–25 ans
            </p>
            <h1 className="fade-up fd-1 mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-[3.5rem]">
              Découvrir un métier en vrai — ateliers, semaines découverte et immersions
            </h1>
            <p className="fade-up fd-2 mt-6 max-w-3xl text-lg leading-8 text-[#465160]">
              Avant de choisir une formation, la décision la plus utile que tu prendras
              c'est de <strong>tester un métier concrètement</strong>. Ateliers artisanat,
              semaines découverte, journées en école, stages d'immersion : voici toutes
              les façons de le faire sans t'engager.
            </p>

            <div className="fade-up fd-3 mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogue"
                className="rounded-2xl bg-[#04192F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6500FF]"
              >
                Voir les expériences
              </a>
              <Link
                href="/test"
                className="rounded-2xl border border-[#04192F]/12 px-6 py-3 text-sm font-semibold text-[#04192F] transition hover:border-[#6500FF]/30 hover:text-[#6500FF]"
              >
                Passer le test avant
              </Link>
            </div>

            <div className="fade-up fd-3 mt-12 grid gap-4 sm:grid-cols-3">
              {STATS.map((s) => (
                <div
                  key={s.n}
                  className="card-lift rounded-2xl border border-[#E9E1FF] bg-white p-5 shadow-[0_16px_35px_rgba(4,25,47,0.05)]"
                >
                  <p className="text-4xl font-bold text-[#6500FF]">{s.n}</p>
                  <p className="mt-3 font-semibold leading-snug text-[#04192F]">{s.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[#465160]">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LES FORMATS ── */}
        <section className="border-b border-[#ECE7FF] bg-white px-6 py-14 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Comment ça marche
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#04192F] sm:text-4xl">
              4 formats pour tester avant de te former
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#465160]">
              Du plus court (2h en atelier) au plus immersif (2 semaines en entreprise),
              chaque format répond à un niveau d'engagement différent.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FORMATS.map(({ tag, titre, texte, dark }) => (
                <div
                  key={titre}
                  className={`card-lift rounded-2xl p-6 ${
                    dark
                      ? 'bg-[#04192F] text-white'
                      : 'border border-[#E9E1FF] bg-[#FBFAFF] text-[#04192F]'
                  }`}
                >
                  <span
                    className={`inline-block rounded-full px-3 py-0.5 text-xs font-bold ${
                      dark ? 'bg-white/15 text-white' : 'bg-[#E9E1FF] text-[#6500FF]'
                    }`}
                  >
                    {tag}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{titre}</h3>
                  <p
                    className={`mt-3 text-sm leading-7 ${
                      dark ? 'text-white/75' : 'text-[#465160]'
                    }`}
                  >
                    {texte}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CATALOGUE ── */}
        <section id="catalogue" className="border-b border-[#ECE7FF] bg-[#FBFAFF] px-6 py-14 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
                  Catalogue
                </p>
                <h2 className="mt-3 text-3xl font-bold text-[#04192F] sm:text-4xl">
                  Toutes les expériences disponibles
                </h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-[#465160]">
                  Ateliers artisanat, semaines découverte, journées en école et stages — en partenariat avec plusieurs plateformes.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <AteliersGrid experiences={experiences} filters={TYPE_FILTERS} />
            </div>
          </div>
        </section>

        {/* ── COMMENT CHOISIR ── */}
        <section className="border-b border-[#ECE7FF] bg-white px-6 py-14 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
                  Comment choisir
                </p>
                <h2 className="mt-4 text-3xl font-bold text-[#04192F] sm:text-4xl">
                  Quel format choisir selon ta situation ?
                </h2>
                <p className="mt-4 text-base leading-8 text-[#465160]">
                  Tout dépend de ton niveau de clarté et du temps dont tu disposes.
                  L'idéal : commencer par le plus court, puis aller vers le plus immersif
                  une fois que tu as une piste réelle.
                </p>
                <Link
                  href="/test"
                  className="mt-6 inline-flex rounded-2xl bg-[#04192F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6500FF]"
                >
                  Clarifier d'abord avec le test
                </Link>
              </div>

              <ul className="list-none space-y-4">
                {[
                  {
                    situation: "Tu hésites encore entre plusieurs métiers",
                    conseil: "Commence par un atelier court (2–3h) dans chaque domaine qui t'attire. Faible investissement, bonne information.",
                  },
                  {
                    situation: "Tu as une piste mais tu n'es pas sûr·e",
                    conseil: "Vise une semaine découverte ou un jobshadowing. Tu confrontes l'image que tu avais avec la réalité du terrain.",
                  },
                  {
                    situation: "Tu es presque décidé·e mais tu veux confirmer",
                    conseil: "Un stage d'observation ou une PMSMP de 3 à 5 jours. C'est le format le plus représentatif avant de signer en formation.",
                  },
                  {
                    situation: "Tu veux comprendre une formation avant d'y postuler",
                    conseil: "Assiste à une journée portes ouvertes. Tu vois les étudiants, les profs et l'ambiance en une journée.",
                  },
                ].map(({ situation, conseil }) => (
                  <li
                    key={situation}
                    className="rounded-2xl border border-[#E9E1FF] bg-[#FBFAFF] p-5"
                  >
                    <p className="font-semibold text-[#04192F]">{situation}</p>
                    <p className="mt-1.5 text-sm leading-7 text-[#465160]">{conseil}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="bg-[#04192F] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#AFA1FF]">
                  Par où commencer
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                  Tu ne sais pas encore quel métier tester ?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/75">
                  Passe d'abord le test d'orientation Jobmi pour identifier 2–3 familles
                  de métiers qui te correspondent. Tu reviendras ensuite choisir l'expérience
                  la plus adaptée à ta piste.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:items-end">
                <Link
                  href="/test"
                  className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
                >
                  Faire le test d'orientation
                </Link>
                <Link
                  href="/tester-un-metier"
                  className="inline-flex rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Tous les formats d'immersion
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
