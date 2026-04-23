import React from 'react';

export const ARTICLE_AUTHOR = {
  name: 'Clément RONDEPIERRE',
  role: 'Fondateur de Jobmi et ancien reconverti',
  bio: "Il est passé d'Ingénieur Génie Civil à Expert en Stratégie Digitale et Data Customer Experience.",
};

export const ArticleAuthorBox = () => {
  return (
    <section className="mx-auto my-8 max-w-[860px] rounded-xl border border-[#6500FF]/15 bg-[#F7F6FF] px-5 py-5 font-sans shadow-[0_14px_35px_rgba(4,25,47,0.05)] sm:px-6">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#6500FF]">
        Écrit par
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#6500FF] text-lg font-bold text-white">
          CR
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#04192F]">
            {ARTICLE_AUTHOR.name}
          </h2>
          <p className="mt-1 text-sm font-semibold text-[#6500FF]">
            {ARTICLE_AUTHOR.role}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {ARTICLE_AUTHOR.bio}
          </p>
        </div>
      </div>
    </section>
  );
};
