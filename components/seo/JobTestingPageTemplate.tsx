import Link from 'next/link';
import type { JobTestingPage } from '@/data/jobTestingPages';
import { getLocalRomeJobSheetBySlug } from '@/lib/franceTravail/localData';

export function JobTestingPageTemplate({ page }: { page: JobTestingPage }) {
  const romeSheet = getLocalRomeJobSheetBySlug(page.slug);
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.questions.slice(0, 3).map((question) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "La meilleure réponse vient d'une combinaison : lire sur le métier, parler à un professionnel, puis faire une immersion courte, un atelier ou un mini-projet pour vérifier la réalité du quotidien.",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="mt-[90px] font-sans">
        <section className="bg-[#FCFCFF] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Tester un métier
            </p>
            <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465160]">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/test"
                className="inline-flex items-center justify-center rounded-xl bg-[#6500FF] px-6 py-3 font-bold text-white transition hover:bg-[#5200CC]"
              >
                Clarifier mon profil
              </Link>
              <Link
                href="/stage-et-formation"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#04192F] px-6 py-3 font-semibold text-[#04192F] transition hover:bg-[#04192F] hover:text-white"
              >
                Voir les immersions
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Ce qu'il faut vérifier avant de te lancer
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {page.realityChecks.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
                >
                  <h3 className="text-xl font-bold text-[#04192F]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#465160]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {romeSheet ? (
          <section className="px-6 py-16 sm:px-10">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
                  Référentiel ROME {romeSheet.job.code}
                </p>
                <h2 className="mt-3 text-3xl font-bold text-[#04192F] sm:text-4xl">
                  Compétences et quotidien à vérifier
                </h2>
                <p className="mt-4 text-base leading-7 text-[#465160]">
                  {romeSheet.summary}
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <article className="rounded-lg border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]">
                  <h3 className="text-xl font-bold text-[#04192F]">Compétences repères</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {romeSheet.skills.slice(0, 8).map((skill) => (
                      <span key={skill.id} className="rounded-full bg-[#F8F7FF] px-3 py-1 text-xs font-semibold text-[#465160]">
                        {skill.label}
                      </span>
                    ))}
                  </div>
                </article>
                <article className="rounded-lg border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]">
                  <h3 className="text-xl font-bold text-[#04192F]">Contexte de travail</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {romeSheet.workContexts.slice(0, 8).map((context) => (
                      <span key={context.id} className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-[#465160]">
                        {context.label}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
              <div className="mt-6 rounded-lg bg-[#F8F7FF] p-5">
                <p className="text-sm font-bold text-[#04192F]">Prochaine action utile</p>
                <p className="mt-2 text-sm leading-6 text-[#465160]">
                  Utilise ces tags comme checklist pendant une immersion : si le quotidien décrit ici
                  te semble acceptable, la piste mérite d’être creusée avec une formation ou une alternance.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-[#F7F6FF] px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              3 façons de tester le métier de {page.jobTitle}
            </h2>
            <div className="mt-8 space-y-5">
              {page.immersionIdeas.map((idea, index) => (
                <article
                  key={idea.title}
                  className="grid gap-4 rounded-lg border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)] sm:grid-cols-[72px_1fr]"
                >
                  <p className="text-3xl font-bold text-[#6500FF]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <div>
                    <h3 className="text-xl font-bold text-[#04192F]">
                      {idea.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-[#465160]">
                      {idea.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Questions à poser pendant une immersion
            </h2>
            <div className="mt-8 grid gap-4">
              {page.questions.map((question) => (
                <div
                  key={question}
                  className="rounded-lg border border-gray-200 bg-white p-5 text-base font-semibold text-[#04192F]"
                >
                  {question}
                </div>
              ))}
            </div>
            <p className="mt-8 text-base leading-8 text-[#465160]">
              Si tu veux comparer ce métier avec d'autres pistes, reviens au hub{' '}
              <Link
                href="/tester-un-metier"
                className="font-semibold text-[#6500FF] underline underline-offset-4"
              >
                tester un métier
              </Link>{' '}
              ou explore les{' '}
              <Link
                href="/stage-et-formation"
                className="font-semibold text-[#6500FF] underline underline-offset-4"
              >
                stages et immersions pour les 18–25 ans
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
