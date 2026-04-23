"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

const cocoons = [
  {
    id: "all",
    label: "Tous les articles",
    description: "Toute la bibliothèque Jobmi.",
    match: () => true,
  },
  {
    id: "orientation",
    label: "Orientation jeunes",
    description: "Choisir une voie, explorer ses envies et éviter le choix par défaut.",
    match: (article) =>
      hasAny(article, ["orientation", "jeunes", "métier", "métiers", "avenir"]),
  },
  {
    id: "reconversion",
    label: "Reconversion",
    description: "Changer de voie, clarifier son projet et passer au concret.",
    match: (article) =>
      hasAny(article, ["reconversion", "bilan de compétences", "stage", "réseau", "bac+2"]),
  },
  {
    id: "formation",
    label: "Formation & financement",
    description: "CPF, alternance, financement et formats de formation.",
    match: (article) =>
      hasAny(article, ["formation", "cpf", "financement", "alternance", "licence pro"]),
  },
  {
    id: "metiers",
    label: "Métiers & débouchés",
    description: "Idées métiers, salaires, secteurs qui recrutent et voies d'accès.",
    match: (article) =>
      hasAny(article, [
        "métiers",
        "métier",
        "salaire",
        "sans diplôme",
        "développeur web",
        "reconversion tech",
        "emploi",
      ]),
  },
];

function hasAny(article, keywords) {
  const haystack = [
    article.category,
    article.title,
    article.excerpt,
    ...(article.tags || []),
  ]
    .join(" ")
    .toLowerCase();

  return keywords.some((keyword) => haystack.includes(keyword.toLowerCase()));
}

export const BlogArticleExplorer = ({ articles }) => {
  const [activeCocon, setActiveCocon] = useState("all");
  const selectedTheme = cocoons.find((cocon) => cocon.id === activeCocon) || cocoons[0];

  const filteredArticles = useMemo(
    () => articles.filter((article) => selectedTheme.match(article)),
    [articles, selectedTheme]
  );

  return (
    <section className="font-sans">
      <div className="mx-auto max-w-screen-xl px-5 sm:px-10">
        <div className="mb-6 flex flex-col gap-3 text-center sm:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6500FF]">
            Thématiques du blog
          </p>
          <h2 className="text-3xl font-bold text-[#04192F]">
            Choisis le sujet qui t'intéresse
          </h2>
          <p className="max-w-2xl text-gray-600">
            Navigue plus vite entre orientation, reconversion, formation et
            idées métiers selon ce que tu veux éclaircir aujourd'hui.
          </p>
        </div>

        <div className="mb-8 flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden">
          {cocoons.map((cocon) => {
            const count = articles.filter((article) => cocon.match(article)).length;
            const isActive = activeCocon === cocon.id;

            return (
              <button
                key={cocon.id}
                type="button"
                onClick={() => setActiveCocon(cocon.id)}
                className={`shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#6500FF] bg-[#6500FF] text-white shadow-[0_10px_24px_rgba(101,0,255,0.2)]"
                    : "border-gray-200 bg-white text-[#04192F] hover:-translate-y-0.5 hover:border-[#6500FF]/40 hover:text-[#6500FF]"
                }`}
              >
                {cocon.label}
                <span className={isActive ? "ml-2 text-white/70" : "ml-2 text-gray-400"}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mb-6 rounded-lg border border-[#6500FF]/15 bg-[#F7F6FF] px-5 py-4 text-sm text-[#04192F]">
          <span className="font-bold">{selectedTheme.label}</span>
          <span className="mx-2 text-[#6500FF]/40">•</span>
          <span className="text-gray-600">{selectedTheme.description}</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 px-5 pb-12 sm:px-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <article
              key={article._id}
              className="overflow-hidden rounded-lg bg-[#F3F3F3] shadow-[0_14px_35px_rgba(4,25,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(101,0,255,0.12)]"
            >
              <img
                className="h-[260px] w-full object-cover"
                src={article.imageCover}
                alt={article.imageAlt}
              />
              <div className="p-5">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#6500FF]">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {article.readingTime} min
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight text-[#04192F]">
                  {article.title}
                </h3>
                <p className="my-4 text-sm leading-relaxed text-gray-700">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex w-fit items-center gap-2 rounded-xl bg-[#04192F] px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6500FF]"
                >
                  Voir l'article
                  <img
                    src="/media/cta-blog-arrow.svg"
                    alt=""
                    className="w-7 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))
        ) : (
          <p className="col-span-full rounded-lg bg-[#F7F6FF] p-6 text-center text-gray-600">
            Aucun article trouvé pour cette thématique.
          </p>
        )}
      </div>
    </section>
  );
};
