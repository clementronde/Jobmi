import Link from 'next/link';
import type { ImmersionOffer } from '@/data/immersionOffers';

const BASE_URL = 'https://jobmi.fr';

export function ImmersionOfferPageTemplate({ offer }: { offer: ImmersionOffer }) {
  const jobPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: offer.title,
    description: offer.context,
    employmentType: 'INTERN',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Jobmi',
      sameAs: BASE_URL,
    },
    jobLocation:
      offer.city === 'En ligne'
        ? {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'FR',
            },
          }
        : {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: offer.city,
              addressCountry: 'FR',
            },
          },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <main className="mt-[90px] font-sans">
        <section className="bg-[#FCFCFF] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Fiche immersion
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-6xl">
              {offer.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465160]">
              {offer.context}
            </p>
            <div className="mt-8 grid gap-4 rounded-lg border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)] md:grid-cols-4">
              {[
                ['Ville', offer.city],
                ['Métier visé', offer.targetJob],
                ['Niveau', offer.level],
                ['Durée', offer.duration],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6500FF]">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#04192F]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <h2 className="text-3xl font-bold text-[#04192F]">
                Ce que cette immersion doit te permettre de voir
              </h2>
              <ul className="mt-6 space-y-4">
                {offer.missions.map((mission) => (
                  <li
                    key={mission}
                    className="rounded-lg border border-gray-200 bg-white p-5 text-base leading-7 text-[#465160]"
                  >
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="rounded-lg bg-[#F7F6FF] p-6">
              <h2 className="text-2xl font-bold text-[#04192F]">
                Utile si...
              </h2>
              <ul className="mt-5 space-y-3">
                {offer.usefulFor.map((item) => (
                  <li key={item} className="text-sm leading-7 text-[#465160]">
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/stage-et-formation"
                className="mt-7 inline-flex rounded-xl bg-[#6500FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#5200CC]"
              >
                Voir les autres formats
              </Link>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
