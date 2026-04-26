import type { Metadata } from 'next';
import Link from 'next/link';
import { LifeWeeksTool } from '../../../components/LifeWeeksTool';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/outil/temps-devant-toi`;

export const metadata: Metadata = {
  title: 'Combien de temps te reste-t-il vraiment pour changer de voie ?',
  description:
    "Visualise ton temps de vie mois par mois pour comprendre qu'une réorientation à 18, 20 ou 25 ans n'arrive pas trop tard.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Outil temps de vie et réorientation | Jobmi',
    description:
      "Un outil visuel pour remettre les choses à l'échelle et voir qu'un détour de quelques mois ou années reste petit face au reste de ta vie.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outil temps de vie et réorientation | Jobmi',
    description:
      "Visualise ton temps de vie mois par mois pour relativiser une réorientation ou une reconversion.",
  },
};

export default function TempsDevantToiPage() {
  return (
    <main className="mt-[110px] bg-[linear-gradient(180deg,#ffffff_0%,#f6f5ff_42%,#eef6ff_100%)]">
      <section className="px-6 pb-8 pt-4 sm:px-10 lg:pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#6500FF]">
              Outil de projection
            </p>
            <h1 className="text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-6xl">
              Combien de temps as-tu encore devant toi ?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#04192F]/72">
              Cet outil te montre mois par mois qu&apos;un détour de 6 mois, 1 an ou 2 ans
              pèse souvent bien moins lourd qu&apos;on l&apos;imagine. C&apos;est une bonne façon
              de remettre en perspective une réorientation, une reconversion ou une reprise
              d&apos;études.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/reconversion"
                className="inline-flex items-center justify-center rounded-xl bg-[#04192F] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#6500FF]"
              >
                Lire le guide reconversion
              </Link>
              <Link
                href="/test"
                className="inline-flex items-center justify-center rounded-xl border border-[#04192F]/12 bg-white px-5 py-3 text-sm font-semibold text-[#04192F] transition hover:-translate-y-0.5 hover:border-[#6500FF]/25 hover:bg-[#F8F7FF]"
              >
                Faire le test d&apos;orientation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 sm:px-10 lg:pb-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#04192F]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,247,255,0.96))] p-4 shadow-[0_30px_90px_rgba(4,25,47,0.08)] sm:p-6 lg:p-8">
          <LifeWeeksTool />
        </div>
      </section>
    </main>
  );
}
