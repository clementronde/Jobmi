"use client";
import Link from "next/link";

const metiers = [
  {
    slug: "/stage-et-formation",
    emoji: "💻",
    domaine: "Tech & numérique",
    titre: "Développeur web",
    format: "Stage d'observation · 1 à 3 jours",
    niveau: "Débutant accepté",
    ville: "Paris, Lyon, Remote",
  },
  {
    slug: "/stage-et-formation",
    emoji: "🏥",
    domaine: "Santé & social",
    titre: "Infirmier · Éducateur spécialisé",
    format: "Immersion · 1 jour à 1 semaine",
    niveau: "Projet à clarifier",
    ville: "Lyon, Bordeaux, Nantes",
  },
  {
    slug: "/stage-et-formation",
    emoji: "🎨",
    domaine: "Création & design",
    titre: "Designer UX / graphiste",
    format: "Atelier découverte · 1 jour",
    niveau: "Débutant accepté",
    ville: "Paris, Toulouse",
  },
  {
    slug: "/stage-et-formation",
    emoji: "⚖️",
    domaine: "Droit & conseil",
    titre: "Juriste · Assistant juridique",
    format: "Jobshadowing · ½ journée à 2 jours",
    niveau: "Lycée / Post-bac",
    ville: "Paris, Strasbourg",
  },
];

export const HomeCatalogPreview = () => {
  return (
    <section className="font-sans bg-[#F3F3F3] px-6 sm:px-12 py-20">
      <div className="mx-auto max-w-screen-xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6500FF] mb-4">
              Métiers &amp; immersions
            </p>
            <h2 className="font-oddlini uppercase text-3xl sm:text-4xl font-bold text-[#04192F] leading-tight">
              Explore des pistes
              <br />
              <span className="font-september font-normal normal-case text-[2.2rem] sm:text-[2.8rem] text-[#6500FF] -rotate-[1.5deg] inline-block">
                avant de t&apos;engager.
              </span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/tester-un-metier"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#04192F] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6500FF]"
            >
              Voir tous les métiers
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/stage-et-formation"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#04192F]/15 bg-white px-5 py-3 text-sm font-bold text-[#04192F] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6500FF]/40 hover:text-[#6500FF]"
            >
              Trouver une immersion
            </Link>
          </div>
        </div>

        {/* Grille de cartes */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {metiers.map((m) => (
            <Link
              key={m.titre}
              href={m.slug}
              className="group flex flex-col rounded-xl border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#6500FF]/30 hover:shadow-[0_20px_45px_rgba(101,0,255,0.10)]"
            >
              {/* Emoji + domaine */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{m.emoji}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6500FF]">
                  {m.domaine}
                </span>
              </div>

              {/* Titre métier */}
              <h3 className="text-lg font-bold text-[#04192F] leading-snug mb-3 group-hover:text-[#6500FF] transition-colors">
                {m.titre}
              </h3>

              {/* Tags */}
              <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-[#F3F3F3]">
                <p className="text-xs text-gray-500 flex items-center gap-1.5">
                  <span className="text-[#6500FF] font-bold">↗</span>
                  {m.format}
                </p>
                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <span>📍</span>
                  {m.ville}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeCatalogPreview;
