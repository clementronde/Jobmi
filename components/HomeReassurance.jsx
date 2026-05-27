"use client";
import Link from "next/link";

export const HomeReassurance = () => {
  return (
    <section className="font-sans bg-[#FCFCFF] px-6 sm:px-12 py-20 border-b border-[#E9E1FF]/60">
      <div className="mx-auto max-w-3xl text-center">

        {/* Eyebrow */}
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6500FF] mb-8">
          Notre approche
        </p>

        {/* Statement principal — pleine largeur, centré, dominant */}
        <h2 className="font-oddlini uppercase text-[38px] sm:text-[52px] font-bold text-[#04192F] leading-tight">
          Un test pour ouvrir des pistes,
        </h2>
        <p className="font-september text-[40px] sm:text-[56px] text-[#6500FF] leading-none -rotate-[2deg] origin-center mt-1 mb-10">
          pas pour décider à ta place.
        </p>

        

        {/* Explication — centrée, max-w réduit pour une bonne lisibilité */}
        <p className="text-base sm:text-lg leading-8 text-[#465160] max-w-xl mx-auto mb-8">
          Quand tu cherches ta voie, le piège est de vouloir une réponse parfaite
          tout de suite. Jobmi fait l&apos;inverse&nbsp;: on t&apos;aide à avancer par étapes,
          avec des pistes concrètes et des expériences terrain pour vérifier
          avant de t&apos;engager dans une formation.
        </p>

        {/* CTA centré */}
        <Link
          href="/tester-un-metier"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#6500FF] hover:underline underline-offset-4 transition-all"
        >
          Comprendre comment tester un métier
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

      </div>
    </section>
  );
};

export default HomeReassurance;
