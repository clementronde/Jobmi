"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const HomeSection1 = () => {
  return (
    <div className="font-sans mt-[90px] w-full relative">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "calc(100vh - 90px)" }}>

        {/* ── Colonne gauche ─────────────────────────────────────────── */}
        {/*
          padding-top fixe (pas justify-center) → les SVGs absolus à top-[80px]
          et top-[200px] atterrissent près de l'eyebrow et du H1, comme dans l'original.
        */}
        <div className="flex flex-col px-8 sm:px-16 pt-20 lg:pt-28 pb-16 lg:w-[55%] bg-[#F3F3F3]">

          {/* Eyebrow */}
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6500FF] mb-8">
            Orientation · Reconversion · 18–25 ans
          </p>

          {/* Headline — typo dramatique : Oddlini + September */}
          <h1 className="font-oddlini uppercase text-[50px] sm:text-[68px] font-bold text-[#04192F] leading-none mb-1">
            Trouve ta voie.
          </h1>
          <p className="font-september text-[56px] sm:text-[72px] text-[#6500FF] leading-none mb-8 -rotate-[2deg] origin-left">
            Teste-la en vrai avant de t'engager.
          </p>

          {/* Body */}
          <p className="text-gray-500 text-base sm:text-lg max-w-sm leading-relaxed mb-10">
            Test d'orientation, immersions métier et stages. Tout ce qu'il te faut pour choisir ton futur métier
            sans te tromper.
          </p>

          {/* Primary CTA */}
          <Link
            href="/test"
            className="w-fit rounded-xl px-6 py-3.5 bg-[#04192F] text-white font-bold text-sm flex items-center gap-3 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 mb-7"
          >
            Passer le test d'orientation gratuit
            <Image src="/media/cta-blog-arrow.svg" alt="" width={24} height={24} className="flex-shrink-0" />
          </Link>

          {/* Secondary CTAs — liens texte */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#04192F]">
            <Link
              href="/tester-un-metier"
              className="flex items-center gap-1.5 hover:text-[#6500FF] transition-colors group"
            >
              Tester un métier
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-gray-300 select-none">|</span>
            <Link
              href="/stage-et-formation"
              className="flex items-center gap-1.5 hover:text-[#6500FF] transition-colors group"
            >
              Stages &amp; formations
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Colonne droite — image pleine hauteur ──────────────────── */}
        <div className="relative lg:w-[45%] min-h-[380px] lg:min-h-0 overflow-hidden">
          <Image
            src="/media/accueil-femmes-1.svg"
            alt="Jeunes de 18 à 25 ans trouvant leur orientation et reconversion professionnelle avec Jobmi"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          {/* Badge flottant */}
          <div className="absolute bottom-8 left-6 bg-white rounded-2xl px-5 py-4 shadow-xl max-w-[200px]">
            <p className="text-3xl font-bold text-[#04192F] leading-none mb-1">15 min</p>
            <p className="text-[11px] text-gray-400 leading-snug">
              Pour découvrir les métiers faits pour toi — gratuitement.
            </p>
          </div>

          <Image className="absolute bottom-10 right-8" src="/media/explore.svg" alt="" width={48} height={48} />
        </div>

      </div>

      {/* Flèche déco — sur le wrapper relatif, z-10 pour chevaucher la section suivante */}
      <div className="absolute bottom-[-150px] left-[55px] z-10 hidden lg:block pointer-events-none">
        <Image src="/media/flechehome1.svg" alt="" width={240} height={240} />
      </div>
    </div>
  );
};
