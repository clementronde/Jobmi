"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const HomeHero = () => {
  return (
    <div className="font-sans mt-[90px] w-full relative">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "calc(100vh - 90px)" }}>

        {/* ── Colonne gauche ─────────────────────────────────────────── */}
        <div className="flex flex-col px-8 sm:px-16 pt-20 lg:pt-28 pb-16 lg:w-[55%] bg-[#F3F3F3]">

          {/* Eyebrow */}
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6500FF] mb-8">
            Orientation · Reconversion · 18–25 ans
          </p>

          {/* H1 — nouvelle promesse principale */}
          <h1 className="font-oddlini uppercase text-[48px] sm:text-[64px] font-bold text-[#04192F] leading-none mb-1">
            Trouve ta voie,
          </h1>
          <p className="font-september text-[46px] sm:text-[60px] text-[#6500FF] leading-none mb-8 -rotate-[2deg] origin-left">
            teste-la avant de t&apos;y engager.
          </p>

          {/* Body */}
          <p className="text-gray-500 text-base sm:text-lg max-w-lg leading-relaxed mb-10">
            Stages d&apos;observation, ateliers découverte, immersions d&apos;un jour ou jobshadowing&nbsp;:
            des formats courts pour tester un métier en vrai, avant de t&apos;engager
            dans une formation ou une reconversion.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <Link
              href="/test"
              className="w-fit rounded-xl px-6 py-3.5 bg-[#04192F] text-white font-bold text-sm flex items-center gap-3 hover:-translate-y-0.5 hover:bg-[#6500FF] hover:shadow-lg transition-all duration-200"
            >
              Faire le test gratuit (15 min)
              <Image src="/media/cta-blog-arrow.svg" alt="" width={22} height={22} className="flex-shrink-0" />
            </Link>
            <Link
              href="/tester-un-metier"
              className="w-fit rounded-xl px-6 py-3.5 bg-white border border-[#04192F]/15 text-[#04192F] font-bold text-sm flex items-center gap-2 hover:border-[#6500FF]/40 hover:text-[#6500FF] hover:-translate-y-0.5 transition-all duration-200"
            >
              Découvrir les métiers
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Réassurance micro-texte */}
          <p className="text-[11px] text-gray-400 font-medium tracking-wider uppercase">
            Gratuit · Sans inscription · Méthode RIASEC
          </p>
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
          <div className="absolute bottom-8 left-6 bg-white rounded-2xl px-5 py-4 shadow-xl max-w-[210px]">
            <p className="text-3xl font-bold text-[#04192F] leading-none mb-1">15 min</p>
            <p className="text-[11px] text-gray-400 leading-snug">
              Pour découvrir les métiers faits pour toi — gratuitement.
            </p>
          </div>

          <Image className="absolute bottom-10 right-8" src="/media/explore.svg" alt="" width={48} height={48} />
        </div>

      </div>

      {/* Flèche déco */}
      <div className="absolute bottom-[-150px] left-[55px] z-10 hidden lg:block pointer-events-none">
        <Image src="/media/flechehome1.svg" alt="" width={240} height={240} />
      </div>
    </div>
  );
};

export default HomeHero;
