import type { Metadata } from 'next';
import Link from 'next/link';
import StageGridClient from '../../components/StageGridClient';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/stage-et-formation`;

export const metadata: Metadata = {
  title: "Stages et formations pour tester un métier — Toutes les offres | Jobmi",
  description:
    "Découvre des stages de découverte et des formations courtes dans tous les secteurs : tech, santé, design, marketing, ingénierie. Trouve l'expérience qui correspond à ton projet.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Stages et formations pour tester un métier | Jobmi",
    description:
      "Stages de 2 à 6 mois dans tous les secteurs pour explorer un métier avant de t'engager dans une formation.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stages et formations | Jobmi",
    description:
      "Stages et formations courtes dans tous les secteurs pour tester un métier avant de choisir.",
  },
};

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: 'Stages et formations pour tester un métier | Jobmi',
  description:
    'Sélection de stages et formations courtes dans tous les secteurs professionnels.',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  inLanguage: 'fr-FR',
};

const secteurs = [
  'Sciences & Biotechnologies',
  'Design & Graphisme',
  'Tech & Développement',
  'Santé',
  'Data & Finance',
  'Communication',
  'Marketing',
  'Art & Culture',
  'Tourisme & Photo',
  'Ingénierie',
];

export default function StageEtFormation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <div className="mt-[120px]">
        {/* ── EN-TÊTE SEO ── */}
        <div className="my-10 mx-auto max-w-[700px] text-center px-4">
          <h1 className="font-sans text-5xl font-bold">
            Stages et Formations
          </h1>
          <img
            src="/media/home-temoignage-soulignage-titre.svg"
            alt="Trait soulignant le titre"
            className="mx-auto mt-2"
          />
          <p className="font-sans text-gray-500 text-lg mt-6 leading-relaxed max-w-xl mx-auto">
            Explore des stages de 2 à 6 mois et des formations courtes dans tous
            les secteurs. Une façon concrète de tester un métier avant de
            t'engager dans une formation longue.
          </p>
        </div>

        {/* ── SECTEURS ── */}
        <div className="max-w-4xl mx-auto px-6 mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {secteurs.map((s) => (
              <span
                key={s}
                className="font-sans text-sm px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── GRILLE (client) ── */}
        <StageGridClient />

        {/* ── BLOC SEO BAS DE PAGE ── */}
        <section className="max-w-4xl mx-auto px-6 py-16 font-sans">
          <h2 className="font-bold text-2xl text-[#04192F] mb-4">
            Pourquoi faire un stage avant de choisir une formation ?
          </h2>
          <div className="text-gray-600 space-y-4 text-base leading-relaxed max-w-3xl">
            <p>
              Choisir une formation sans avoir jamais testé le métier, c'est
              prendre un risque inutile. Un stage de 2 à 6 mois te permet de
              découvrir le quotidien réel d'un secteur : les missions, le
              rythme, les contraintes et ce qui te plaît vraiment ou pas.
            </p>
            <p>
              Que tu hésites entre la tech, la santé, le design ou le
              marketing, une expérience terrain est souvent ce qui fait la
              différence entre une bonne orientation et une réorientation
              subie deux ans plus tard.
            </p>
            <p>
              Si tu ne sais pas encore vers quel secteur t'orienter, commence
              par le test d'orientation Jobmi — il t'aide à identifier les
              familles de métiers qui correspondent à ton profil avant de
              choisir un stage.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/test"
              className="font-sans inline-flex items-center gap-2 px-6 py-3 bg-[#6500FF] text-white rounded-xl font-bold hover:bg-purple-700 transition w-fit"
            >
              Passer le test d'orientation
            </Link>
            <Link
              href="/tester-un-metier"
              className="font-sans inline-flex items-center px-6 py-3 border-2 border-[#04192F] text-[#04192F] rounded-xl font-semibold hover:bg-[#04192F] hover:text-white transition w-fit"
            >
              Découvrir les formats d'immersion
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
