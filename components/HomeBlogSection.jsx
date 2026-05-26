"use client";
import Link from "next/link";
import Image from "next/image";

const blogArticles = [
  {
    href: "/blog/comment-commencer-ta-reconversion-professionnelle",
    imageSrc: "/media/cover-comment-commencer-ta-reconversion-professionnelle.jpeg",
    imageAlt: "Jeune réfléchissant à sa reconversion professionnelle",
    category: "Reconversion",
    title: "Reconversion professionnelle : 5 questions à te poser avant de te lancer",
    excerpt:
      "Avant de tout plaquer, il y a 5 questions à te poser honnêtement. Elles t'éviteront de changer de voie pour de mauvaises raisons.",
    readingTime: 4,
  },
  {
    href: "/blog/comment-trouver-le-job-de-tes-reves-a-20-ans-guide-ultime-pour-jeunes-en-reconversion",
    imageSrc: "/media/girlswithlap.png",
    imageAlt: "Jeune professionnel trouvant son job de rêve",
    category: "Orientation",
    title: "Comment trouver le job de tes rêves à 20 ans",
    excerpt:
      "À 20 ans, trouver sa voie peut sembler complexe. Méthode concrète, pistes métiers et étapes pour te réorienter sans choisir par défaut.",
    readingTime: 6,
  },
  {
    href: "/blog/top-10-des-metiers-cool-pour-2026-que-tu-dois-connaitre",
    imageSrc: "/media/intro-article-3.svg",
    imageAlt: "Top 10 métiers cool 2026",
    category: "Métiers",
    title: "Top 10 des métiers qui recrutent en 2026",
    excerpt:
      "Développeur, expert IA, data analyst... Découvre les 10 métiers d'avenir les plus accessibles et comment commencer à les tester.",
    readingTime: 7,
  },
];

const categoryColors = {
  Reconversion: "bg-[#E9E1FF] text-[#6500FF]",
  Orientation: "bg-[#E0F0FF] text-[#0066CC]",
  Métiers: "bg-[#E6F9F0] text-[#007A4D]",
};

export const HomeBlogSection = () => {
  return (
    <section className="font-sans bg-white px-6 sm:px-12 py-20">
      <div className="mx-auto max-w-screen-xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6500FF] mb-4">
              Guides &amp; articles
            </p>
            <h2 className="font-oddlini uppercase text-3xl sm:text-4xl font-bold text-[#04192F]">
              Lire pour{" "}
              <span className="font-september font-normal normal-case text-[2.1rem] sm:text-[2.6rem] text-[#6500FF] -rotate-[1.5deg] inline-block">
                mieux choisir.
              </span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#04192F] hover:text-[#6500FF] transition-colors flex-shrink-0"
          >
            Voir tous les articles
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grille d'articles */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group flex flex-col rounded-xl border border-[#E9E1FF] bg-[#FCFCFF] overflow-hidden shadow-[0_14px_35px_rgba(4,25,47,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(101,0,255,0.10)]"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full ${categoryColors[article.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {article.category}
                  </span>
                  <span className="text-[11px] text-gray-400">{article.readingTime} min de lecture</span>
                </div>

                <h3 className="text-base font-bold text-[#04192F] leading-snug mb-2 group-hover:text-[#6500FF] transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm leading-6 text-[#465160] line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                <p className="mt-auto text-xs font-bold text-[#6500FF] flex items-center gap-1.5">
                  Lire l&apos;article
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeBlogSection;
