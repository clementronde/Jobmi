"use client";
import Link from "next/link";
import React from "react";

const steps = [
  {
    num: "01",
    titleOddlini: "Test d'orientation",
    titleSept: "& gratuit !",
    tag: "15 min · Gratuit",
    body: "Réponds à quelques questions sur tes valeurs et ton style de travail. Découvre les métiers qui te correspondent — méthode RIASEC.",
    href: "/test",
  },
  {
    num: "02",
    titleOddlini: "Explore les métiers",
    titleSept: "pour toi",
    tag: "Personnalisé",
    body: "Accède à des fiches métiers selon tes résultats. Compare les voies possibles et identifie celle qui t'attire vraiment.",
    href: "/tester-un-metier",
  },
  {
    num: "03",
    titleOddlini: "Immersion ",
    titleSept: "en vrai",
    tag: "1 jour à 2 semaines",
    body: "Une journée dans un vrai environnement de travail — atelier découverte, stage d'observation ou jobshadowing.",
    href: "/stage-et-formation",
  },
];

export const HomeSection2 = () => {
  return (
    <section className="font-sans w-full bg-white py-20 px-5 sm:px-12">
      <div className="max-w-screen-lg mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6500FF] flex-shrink-0">
            La méthode Jobmi
          </p>
          <div className="flex-1 h-px bg-gray-100" />
        </div>
        <h2 className="font-oddlini uppercase text-4xl sm:text-5xl font-bold text-[#04192F] mb-14">
          Comment ça marche ?
        </h2>

        {/* Rows */}
        <div>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <Link
                href={step.href}
                className="group flex items-center gap-5 sm:gap-10 py-7 sm:py-8 px-5 -mx-5 rounded-2xl hover:bg-[#6500FF] transition-all duration-300"
              >
                {/* Numéro */}
                <span className="font-oddlini text-[#6500FF] group-hover:text-white/40 text-lg sm:text-xl font-bold w-8 flex-shrink-0 transition-colors duration-300">
                  {step.num}
                </span>

                {/* Titre + corps */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-oddlini uppercase text-[#04192F] group-hover:text-white text-2xl sm:text-4xl font-bold leading-tight transition-colors duration-300 flex flex-wrap items-baseline gap-x-2">
                    <span>{step.titleOddlini}</span>
                    <span className="font-september normal-case text-xl sm:text-3xl text-[#6500FF] group-hover:text-white/80 -rotate-[3deg] inline-block transition-colors duration-300">
                      {step.titleSept}
                    </span>
                  </h3>
                  <p className="text-gray-400 group-hover:text-white/70 text-sm mt-2 max-w-lg transition-colors duration-300 hidden sm:block">
                    {step.body}
                  </p>
                </div>

                {/* Tag + flèche */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-white/60 transition-colors duration-300">
                    {step.tag}
                  </span>
                  <svg
                    width="22" height="22" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-[#6500FF] group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 flex-shrink-0"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Séparateur — hors du Link pour ne pas être affecté par le hover */}
              {i < steps.length - 1 && (
                <div className="h-px bg-gray-100 mx-5" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeSection2;
