"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const stats = [
  {
    value: "29%",
    label: "des étudiants abandonnent leur première année de licence",
    detail: "Un mauvais choix d'orientation peut coûter une année entière.",
    source: "Source : MESR – EESR",
    sourceHref:
      "https://publication.enseignementsup-recherche.gouv.fr/eesr/FR/EESR13_ES_20/les_parcours_et_la_reussite_en_licence_licence_professionnelle_et_master_a_l_universite/",
  },
  {
    value: "1 jeune sur 4",
    label: "a envisagé de changer de voie et engagé des démarches",
    detail: "La réorientation peut arriver très tôt dans un parcours professionnel.",
    source: "Céreq Bref n°467, enquête 2023 auprès de la Génération 2017",
    sourceHref: "https://www.cereq.fr/reorientation-reconversion-precoce-jeune",
  },
  {
    value: "1 jour",
    label: "peut suffire pour casser une idée reçue sur un métier",
    detail: "Une immersion courte montre le quotidien réel, pas seulement l'image du métier.",
    source: "Ateliers, stages d'observation et jobshadowing",
  },
];

const HomeSection3 = () => {
  return (
    <div className="mx-2 my-16">
      <style>{`
        .link-underline {
          position: relative;
        }

        .link-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 2px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 220ms ease;
        }

        .link-underline:hover::after {
          transform: scaleX(1);
        }
      `}</style>
      <div className="bg-[#14213d] text-white rounded-xl py-14 px-6 sm:px-12">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-3">
            Pourquoi tester avant de choisir, c'est{" "}
            <span className="underline-tilted decoration-[#a29bfe]">maintenant</span> ?
          </h2>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-12 text-lg">
            Chaque année, des jeunes perdent du temps et de l'argent parce qu'ils choisissent une voie sans avoir vu la réalité du métier.
          </p>
          <div className="grid sm:grid-cols-3 gap-10 mb-14">
            {stats.map((item, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <p className="text-5xl sm:text-6xl font-bold text-white mb-3">{item.value}</p>
                <p className="text-base text-gray-200 mb-2">{item.label}</p>
                <p className="text-sm text-[#a29bfe] mb-3">{item.detail}</p>
                {item.sourceHref ? (
                  <a
                    href={item.sourceHref}
                    target="_blank"
                    rel="noopener"
                    className="link-underline text-xs text-gray-400 italic hover:text-white transition-colors"
                  >
                    {item.source}
                  </a>
                ) : (
                  <p className="text-xs text-gray-500 italic">{item.source}</p>
                )}
              </div>
            ))}
          </div>

          <div className="border border-[#a29bfe]/30 rounded-2xl px-8 py-10 text-center max-w-3xl mx-auto transition-all duration-300 hover:border-[#a29bfe] hover:bg-[#a29bfe]/5 hover:shadow-[0_0_40px_rgba(162,155,254,0.1)]">
            <p className="text-xs uppercase tracking-widest text-[#a29bfe] font-semibold mb-3">Méthode Jobmi</p>
            <p className="text-4xl sm:text-5xl font-bold text-white mb-4">3 étapes</p>
            <p className="text-gray-400 text-base mb-10">pour passer du doute à une décision plus claire</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {[
                { n: "01", text: "Comprendre ton profil" },
                { n: "02", text: "Explorer des métiers" },
                { n: "03", text: "Tester sur le terrain" },
              ].map(({ n, text }, i) => (
                <React.Fragment key={n}>
                  <div className="flex flex-col items-center gap-2 group cursor-default">
                    <span className="w-10 h-10 rounded-full border border-[#a29bfe] text-[#a29bfe] flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:bg-[#a29bfe] group-hover:text-[#14213d] group-hover:scale-110">{n}</span>
                    <span className="text-sm text-gray-200 transition-colors duration-300 group-hover:text-white">{text}</span>
                  </div>
                  {i < 2 && (
                    <span className="text-[#a29bfe]/40 text-2xl hidden sm:block">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <Link
              href="/test"
              className="mt-10 inline-flex items-center gap-2 bg-[#a29bfe] text-[#14213d] font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white hover:scale-105"
            >
              Faire le test gratuit
              <Image src="/media/cta-blog-arrow.svg" alt="" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
