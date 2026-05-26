"use client";
import { useState } from "react";

const faqItems = [
  {
    question: "Est-ce que le test d'orientation Jobmi est gratuit ?",
    answer:
      "Oui. Le test d'orientation Jobmi est gratuit et pensé pour donner un premier point de départ aux 18-25 ans qui veulent mieux comprendre leur profil, leurs intérêts et les familles de métiers à explorer.",
  },
  {
    question: "À qui s'adresse Jobmi ?",
    answer:
      "Jobmi s'adresse surtout aux lycéens, étudiants, jeunes actifs et jeunes en reconversion entre 18 et 25 ans : après le bac, pendant une réorientation, avant une formation ou quand une première voie ne correspond plus.",
  },
  {
    question: "Quelle différence entre un test d'orientation et un bilan de compétences ?",
    answer:
      "Un test d'orientation donne des pistes de réflexion à partir de tes intérêts et de ta façon de fonctionner. Un bilan de compétences est un accompagnement plus long, souvent encadré par un professionnel. Les deux peuvent être complémentaires.",
  },
  {
    question: "Comment savoir quel métier est fait pour moi ?",
    answer:
      "Il faut croiser plusieurs éléments : ton profil, tes contraintes, les métiers qui t'attirent, les formations possibles et surtout la réalité du terrain. Jobmi aide à passer du test à l'exploration, puis à la vérification concrète.",
  },
  {
    question: "Comment tester un métier avant de choisir une formation ?",
    answer:
      "Tu peux passer par un stage d'observation, une PMSMP, un atelier métier, une journée portes ouvertes, un échange avec un professionnel ou une immersion courte. L'objectif est de voir le quotidien réel avant de t'engager.",
  },
  {
    question: "Que faire si je n'ai aucune idée après le bac ?",
    answer:
      "Commence par réduire le flou : fais un test d'orientation, repère 2 ou 3 familles de métiers, compare les formats d'études, puis teste une piste sur le terrain avant de choisir par défaut.",
  },
];

export function HomeFaqBlock() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#FCFCFF] px-6 py-16 font-sans sm:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
          Questions fréquentes
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#04192F] sm:text-4xl">
          Avant de choisir ta voie
        </h2>

        <div className="mt-10 space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <article key={item.question}>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 rounded-lg border border-[#E9E1FF] bg-white px-6 py-5 text-left shadow-[0_14px_35px_rgba(4,25,47,0.05)] transition-all duration-200 hover:border-[#6500FF]/30 hover:shadow-[0_18px_40px_rgba(101,0,255,0.08)]"
                >
                  <h3 className="text-base font-bold text-[#04192F] leading-snug pr-2">
                    {item.question}
                  </h3>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full border border-[#E9E1FF] flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: isOpen ? "#6500FF" : "transparent",
                      borderColor: isOpen ? "#6500FF" : undefined,
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? "white" : "#6500FF"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 300ms ease",
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 300ms ease",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pt-3 pb-5 text-sm leading-7 text-[#465160] bg-white border-x border-b border-[#E9E1FF] rounded-b-lg -mt-1">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeFaqBlock;
