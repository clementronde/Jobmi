"use client";
import Link from "next/link";

export const HomeEntreprisesCompact = () => {
  return (
    <aside className="font-sans bg-[#04192F] px-6 sm:px-12 py-8">
      <div className="mx-auto max-w-screen-xl flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <span className="text-[#6500FF] text-xl flex-shrink-0 mt-0.5">🏢</span>
          <div>
            <p className="text-white font-bold text-base leading-snug">
              Vous êtes une entreprise ?
            </p>
            <p className="text-gray-400 text-sm mt-0.5">
              Proposez une immersion aux jeunes qui cherchent leur voie — accueillez-les
              pour leur montrer la réalité de votre métier.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:border-[#6500FF]/60 hover:bg-[#6500FF]/10 hover:text-[#a29bfe]"
        >
          Proposer une immersion
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </aside>
  );
};

export default HomeEntreprisesCompact;
