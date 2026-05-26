"use client";
import React from "react";
import Link from "next/link";

export const HomeReassurance = () => {
  return (
    <section className="font-sans bg-white px-6 sm:px-16 py-16 border-b border-[#E9E1FF]/60">
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">

        {/* Gauche — statement fort */}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6500FF] mb-5">
            Notre approche
          </p>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#04192F] leading-tight">
            Un test pour ouvrir des pistes,
          </h2>
          <p className="font-september text-[32px] sm:text-[42px] text-[#6500FF] leading-none -rotate-[1.5deg] origin-left mt-1">
            pas pour décider à ta place.
          </p>
        </div>

        {/* Droite — explication + CTA */}
        <div className="lg:max-w-[480px] flex flex-col gap-5">
          <p className="text-base sm:text-lg leading-8 text-[#465160]">
            Quand tu cherches ta voie, le piège est de vouloir une réponse parfaite
            tout de suite. Jobmi fait l&apos;inverse&nbsp;: on t&apos;aide à avancer par étapes,
            avec des pistes concrètes et des expériences terrain pour vérifier
            avant de t&apos;engager dans une formation.
          </p>
          <Link
            href="/tester-un-metier"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#6500FF] hover:underline underline-offset-4 transition-all w-fit"
          >
            Comprendre comment tester un métier
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeReassurance;
