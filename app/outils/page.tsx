import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Les outils Jobmi',
  description:
    "Retrouve les outils Jobmi pour clarifier ton orientation, remettre une réorientation en perspective et avancer plus concrètement.",
  alternates: { canonical: 'https://jobmi.fr/outils' },
};

const tools = [
  {
    title: "Test d'orientation Jobmi",
    description:
      "Le point de départ pour comprendre ton profil, faire émerger des pistes métiers et arrêter de tourner en rond.",
    href: '/test',
    cta: 'Ouvrir le test',
    tone: 'bg-[#F8F5FF] border-[#E4D8FF]',
  },
  {
    title: 'Outil temps devant toi',
    description:
      "Visualise le temps qu’il te reste pour te réorienter et remets quelques mois de formation en perspective.",
    href: '/outil/temps-devant-toi',
    cta: "Voir l'outil",
    tone: 'bg-[#F4FBFF] border-[#D5ECFF]',
  },
  {
    title: 'Mon profil et ma progression',
    description:
      "Centralise tes infos, ton dernier test et les expériences terrain déjà réalisées pour suivre ton avancée.",
    href: '/profil#ma-progression',
    cta: 'Voir mon profil',
    tone: 'bg-[#F7FBF8] border-[#DCEFE3]',
  },
];

export default function OutilsPage() {
  return (
    <main className="mt-[90px] bg-[#FCFCFF]">
      <section className="border-b border-[#ECE7FF] bg-[linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">Boîte à outils</p>
          <h1 className="mt-4 text-balance text-4xl font-bold text-[#04192F] sm:text-5xl">
            Les outils Jobmi pour y voir plus clair
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#465160]">
            Ici, tu retrouves les outils concrets qu’on a déjà construits pour t’aider à mieux te
            comprendre, prendre du recul et avancer avec plus de méthode.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.href}
              className={`rounded-[1.6rem] border p-6 shadow-[0_18px_45px_rgba(4,25,47,0.05)] ${tool.tone}`}
            >
              <h2 className="text-2xl font-bold text-[#04192F]">{tool.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#465160]">{tool.description}</p>
              <Link
                href={tool.href}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#04192F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6500FF]"
              >
                {tool.cta}
                <img src="/media/cta-blog-arrow.svg" alt="" className="w-5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
