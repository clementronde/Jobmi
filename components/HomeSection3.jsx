"use client";
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
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#a29bfe] mb-5">
            Pourquoi agir maintenant
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-3">
            Le coût réel d&apos;un mauvais choix d&apos;orientation
          </h2>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-12 text-lg">
            Chaque année, des jeunes perdent du temps et de l&apos;argent parce qu&apos;ils choisissent
            une voie sans avoir vu la réalité du métier. Une journée peut tout changer.
          </p>
          <div className="grid sm:grid-cols-3 gap-10 mb-10">
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

          {/* Phrase d'ancrage émotionnelle */}
          <div className="text-center border-t border-white/10 pt-10">
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto italic">
              &ldquo;Tester un métier avant de t&apos;y engager, c&apos;est la seule façon de choisir
              en sachant vraiment ce que tu choisis.&rdquo;
            </p>
            <Link
              href="/test"
              className="mt-8 inline-flex items-center gap-2 bg-[#a29bfe] text-[#14213d] font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-white hover:scale-105"
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
