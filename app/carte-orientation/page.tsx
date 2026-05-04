import type { Metadata } from 'next';
import Link from 'next/link';
import { EventMapExplorer } from '@/components/events/EventMapExplorer';
import { getActiveEvents } from '@/services/eventsService';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/carte-orientation`;

export const metadata: Metadata = {
  title: 'Carte orientation, salons et immersions pour les 18–25 ans',
  description:
    "Trouve sur la carte Jobmi les salons, journées portes ouvertes, ateliers métiers et immersions utiles à ton orientation.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Carte orientation, salons et immersions',
    description:
      "Repère où aller, quand et pourquoi pour avancer dans ton orientation, ta réorientation ou ta reconversion.",
  },
};

export default function CarteOrientationPage() {
  const events = getActiveEvents();

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: 'Carte orientation Jobmi',
    description:
      "Carte des salons, journées portes ouvertes et événements utiles à l'orientation des 18–25 ans.",
    isPartOf: { '@id': `${BASE_URL}/#website` },
    inLanguage: 'fr-FR',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <main className="mt-[90px] bg-[#FCFCFF]">
        <section className="border-b border-[#ECE7FF] bg-[linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] px-6 py-14 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">Jobmi Map</p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold text-[#04192F] sm:text-5xl">
              La carte des événements qui peuvent vraiment t'aider à choisir ta voie
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#465160]">
              Salons, JPO, immersions, forums emploi — filtre par type, ville ou public et ouvre
              la fiche pour comprendre à quoi chaque événement peut concrètement te servir.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/test"
                className="rounded-2xl bg-[#04192F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6500FF]"
              >
                Passer le test d'orientation
              </Link>
              <Link
                href="/tester-un-metier"
                className="rounded-2xl border border-[#04192F]/12 px-5 py-3 text-sm font-semibold text-[#04192F] transition hover:border-[#6500FF]/30 hover:text-[#6500FF]"
              >
                Tester un métier
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <EventMapExplorer events={events} />
          </div>
        </section>

        <section className="border-t border-[#ECE7FF] bg-white px-6 py-14 sm:px-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">Comment l'utiliser</p>
            <h2 className="mt-4 text-3xl font-bold text-[#04192F] sm:text-4xl">
              Une carte utile si tu avances par étapes
            </h2>
            <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-[#465160]">
              <p>
                Si tu es encore complètement perdu, commence par{' '}
                <Link href="/test" className="font-semibold text-[#6500FF] underline underline-offset-4">
                  passer le test Jobmi
                </Link>{' '}
                pour faire émerger 2 ou 3 familles de métiers. Ensuite seulement, la carte devient
                vraiment puissante : tu peux filtrer ce qui vaut le coup d'aller voir selon ton profil.
              </p>
              <p>
                Si tu as déjà une idée plus précise, cette carte t'aide surtout à choisir le bon
                format de vérification : un salon pour comparer, une JPO pour sentir l'ambiance,
                un forum emploi pour décrocher un premier contact.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
