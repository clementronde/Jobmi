import Link from 'next/link';
import type { GeoPage } from '@/data/geoPages';

export function GeoPageTemplate({ page }: { page: GeoPage }) {
  const faqItems =
    page.faq || [
      {
        question: `Comment commencer son orientation à ${page.city} ?`,
        answer:
          "Le plus simple est de clarifier d'abord ton profil, puis de choisir 2 ou 3 événements, formations ou métiers à explorer. Évite de multiplier les salons sans objectif précis.",
      },
      {
        question: `Est-ce utile de tester un métier à ${page.city} avant une formation ?`,
        answer:
          "Oui, surtout si tu hésites encore. Une immersion, une PMSMP, un stage d'observation ou un atelier permet de vérifier le quotidien réel d'un métier avant de t'engager dans une formation.",
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

  const isParis = page.slug === 'orientation-paris';
  const stepCtas = isParis
    ? [
        { href: '/test-orientation', label: 'Passer un test d’orientation gratuit' },
        { href: '/carte-orientation/paris', label: 'Voir les prochains événements à Paris' },
        { href: '/tester-un-metier', label: 'Être accompagné pour trouver une immersion' },
      ]
    : [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mt-[90px] font-sans">
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            .geo-fade-up {
              opacity: 0;
              transform: translateY(12px);
              animation: geoFadeUp 620ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }

            .geo-delay-1 { animation-delay: 100ms; }
            .geo-delay-2 { animation-delay: 220ms; }
            .geo-delay-3 { animation-delay: 340ms; }

            .geo-card {
              transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background-color 180ms ease;
            }

            .geo-card:hover {
              transform: translateY(-4px);
              border-color: rgba(101, 0, 255, 0.35);
              box-shadow: 0 18px 45px rgba(101, 0, 255, 0.10);
            }

            .geo-number {
              transition: background-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
            }

            .geo-card:hover .geo-number {
              background: #6500FF;
              color: white;
              box-shadow: 0 0 0 8px rgba(101, 0, 255, 0.08);
            }

            .geo-link {
              background-image: linear-gradient(currentColor, currentColor);
              background-position: 0 100%;
              background-repeat: no-repeat;
              background-size: 0 2px;
              transition: background-size 180ms ease, color 180ms ease;
            }

            .geo-link:hover {
              background-size: 100% 2px;
            }

            @keyframes geoFadeUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          }
        `}</style>
        <section className="border-b border-[#ECE7FF] bg-[#FCFCFF] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="geo-fade-up text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              {page.eyebrow}
            </p>
            <h1 className="geo-fade-up geo-delay-1 mt-4 max-w-5xl text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-6xl">
              {page.h1}
            </h1>
            <p className="geo-fade-up geo-delay-2 mt-6 max-w-3xl text-lg leading-8 text-[#465160]">
              {page.intro}
            </p>
            <div className="geo-fade-up geo-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={page.primaryHref}
                className="inline-flex items-center justify-center rounded-xl bg-[#6500FF] px-6 py-3 font-bold text-white transition duration-200 hover:scale-[1.02] hover:bg-[#5200CC] hover:shadow-[0_14px_30px_rgba(101,0,255,0.18)]"
              >
                {page.primaryCta}
              </Link>
              <Link
                href={page.secondaryHref}
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#04192F] px-6 py-3 font-semibold text-[#04192F] transition duration-200 hover:scale-[1.02] hover:bg-[#04192F] hover:text-white hover:shadow-[0_12px_26px_rgba(4,25,47,0.12)]"
              >
                {page.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              {isParis
                ? 'Pourquoi Paris est une bonne ville pour avancer sur ton orientation'
                : "Pourquoi cette ville peut t'aider à avancer"}
            </h2>
            {isParis ? (
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#465160] sm:text-lg">
                Si tu as 18–25 ans, Paris te permet de comparer rapidement
                plusieurs chemins : études, alternance, formations courtes,
                reconversion, jobs “pour tester”. L’idée n’est pas de tout
                faire, mais de choisir quelques formats bien ciblés pour
                clarifier ton projet.
              </p>
            ) : null}
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {page.reasons.map((reason) => (
                <article
                  key={reason}
                  className="geo-card rounded-lg border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
                >
                  <p className="text-base leading-7 text-[#465160]">{reason}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F6FF] px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              {isParis
                ? 'La méthode locale en 3 étapes pour t’orienter à Paris'
                : 'La méthode locale en 3 étapes'}
            </h2>
            {isParis ? (
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#465160] sm:text-lg">
                Au lieu d’enchaîner tous les salons et toutes les portes ouvertes
                “au hasard”, tu peux suivre une méthode simple en trois temps.
              </p>
            ) : null}
            <div className="mt-8 space-y-5">
              {page.steps.map((step, index) => (
                <article
                  key={step.title}
                  className="geo-card geo-fade-up grid gap-4 rounded-lg border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)] sm:grid-cols-[72px_1fr]"
                >
                  <p className="geo-number flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F6FF] text-2xl font-bold text-[#6500FF]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-[#04192F]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-[#465160]">
                      {step.text}
                    </p>
                    {stepCtas[index] ? (
                      <Link
                        href={stepCtas[index].href}
                        className="geo-link mt-4 inline-flex text-sm font-bold text-[#6500FF]"
                      >
                        {stepCtas[index].label}
                      </Link>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              {isParis
                ? 'Les angles à explorer à Paris selon ta situation'
                : `Les angles à explorer à ${page.city}`}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {page.localAngles.map((angle) => (
                <article
                  key={angle.title}
                  className="geo-card rounded-lg border border-gray-200 bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
                >
                  <h3 className="text-xl font-bold text-[#04192F]">
                    {angle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#465160]">
                    {angle.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F3F3F3] px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              {isParis
                ? 'Questions fréquentes sur l’orientation à Paris quand tu as 18–25 ans'
                : `Questions fréquentes sur l’orientation à ${page.city}`}
            </h2>
            <div className="mt-8 space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group overflow-hidden rounded-2xl bg-white shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-[#04192F] transition hover:bg-[#F8F7FF]">
                    <span>{item.question}</span>
                    <span className="text-xl font-bold text-[#6500FF] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="border-t border-gray-100 px-6 py-5 leading-8 text-[#465160]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#04192F] px-6 py-14 text-white sm:px-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/55">
                Prochaine étape
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Passe du repérage à une action concrète
              </h2>
              {isParis ? (
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
                  Tu n’es pas obligé d’avoir tout compris tout de suite.
                  L’important, c’est de transformer les infos disponibles à
                  Paris en actions concrètes : un test, un événement ciblé, une
                  immersion bien choisie. Chaque petite action te donne un retour
                  réel sur ce qui te plaît, ou non.
                </p>
              ) : null}
              {page.finalCtaSubtext ? (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55">
                  {page.finalCtaSubtext}
                </p>
              ) : null}
            </div>
            <Link
              href="/test"
              className="inline-flex w-fit items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-[#04192F] transition duration-200 hover:scale-[1.02] hover:bg-[#AFA1FF] hover:shadow-[0_14px_30px_rgba(255,255,255,0.12)]"
            >
              Commencer gratuitement
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
