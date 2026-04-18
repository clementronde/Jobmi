import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/orientation/test-orientation-jeunes`;

export const metadata: Metadata = {
  title: "Test d'orientation gratuit pour 18–25 ans, Trouve ta voie | Jobmi",
  description:
    "Tu ne sais pas quel métier te correspond ? Passe le test d'orientation Jobmi, conçu pour les 18–25 ans. Résultats personnalisés, pistes concrètes, 100 % gratuit.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Test d'orientation gratuit 18–25 ans | Jobmi",
    description:
      "Trouve ta voie en 15 min. Test gratuit, résultats personnalisés.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Test d'orientation gratuit 18–25 ans | Jobmi",
    description:
      "Trouve ta voie en 15 min. Test gratuit, résultats personnalisés.",
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Le test est-il vraiment gratuit ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, entièrement. Pas de carte bancaire, pas d'abonnement, pas de frais cachés. Tu passes le test, tu obtiens tes résultats, puis tu peux explorer les pistes proposées à ton rythme. L'idée est de t'aider à y voir plus clair, pas de te piéger dans un parcours payant dès le départ.",
      },
    },
    {
      '@type': 'Question',
      name: "Est-ce que le test est fiable ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le test s'appuie sur des approches reconnues en psychologie de l'orientation, notamment le modèle RIASEC de Holland et une lecture par compétences et préférences de travail. Il ne remplace pas un accompagnement humain complet, mais il constitue un très bon point de départ pour clarifier ses envies, comprendre son profil et explorer des pistes concrètes.",
      },
    },
    {
      '@type': 'Question',
      name: "J'ai déjà 23 ans, est-ce que le test est encore pour moi ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, totalement. Le test est pensé pour les 18–25 ans, que tu sois étudiant, en réorientation, jeune actif, en recherche d'emploi ou simplement perdu sur la suite. À 23 ans, tu es exactement dans la cible : suffisamment d'expérience pour sentir ce qui te convient ou non, mais encore assez libre pour tester et ajuster.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps ça prend ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En général, entre 10 et 15 minutes. Le test a été conçu pour être rapide, lisible et faisable depuis un téléphone comme depuis un ordinateur. Tu n'as pas besoin d'y consacrer une heure pour obtenir un premier niveau de clarté utile.",
      },
    },
    {
      '@type': 'Question',
      name: "Je n'ai aucune idée de ce que j'aime. Est-ce que le test peut m'aider ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, c'est même pour ça qu'il existe. Le test part de situations concrètes du quotidien : ce qui t'attire, ce qui te repousse, ta manière de travailler, les environnements dans lesquels tu te sens bien. Même si tu as l'impression de ne rien savoir sur toi, tes réponses permettent souvent de faire ressortir des tendances et des familles de métiers auxquelles tu n'aurais pas pensé seul.",
      },
    },
    {
      '@type': 'Question',
      name: "Est-ce que je peux refaire le test ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Tes envies évoluent, ton contexte change, et c'est normal. Refaire le test après une immersion, un stage, une première expérience ou une période de doute peut t'aider à affiner ton profil et à comparer ton évolution.",
      },
    },
  ],
};

const heroStats = [
  {
    n: '15 min',
    label: 'pour faire émerger des pistes concrètes',
    sub: "centres d'intérêt, façon de travailler, familles de métiers",
    bg: 'bg-[#F3F3F3]',
  },
  {
    n: '100 %',
    label: 'gratuit et sans engagement',
    sub: "pas de carte bancaire, pas d'abonnement, pas de piège",
    bg: 'bg-white',
  },
  {
    n: '3 à 5',
    label: 'familles de métiers recommandées',
    sub: 'avec exemples, formations et pistes pour aller plus loin',
    bg: 'bg-[#F3F3F3]',
  },
];

const etapes = [
  {
    n: '01',
    titre: "Tes centres d'intérêt",
    description:
      "On explore ce qui t'attire vraiment, même si tu n'as jamais pensé que ça pouvait mener à un métier : créer, aider, analyser, transmettre, bouger, organiser…",
    accent: false,
  },
  {
    n: '02',
    titre: 'Ta façon de travailler',
    description:
      "Tu préfères l'autonomie ou le collectif ? Le terrain ou le bureau ? Un cadre stable ou un rythme plus libre ? Le test prend aussi en compte ton fonctionnement réel.",
    accent: true,
  },
  {
    n: '03',
    titre: 'Tes résultats',
    description:
      "Tu obtiens un profil lisible, des familles de métiers pertinentes, des exemples concrets et des pistes d'action pour ne pas rester bloqué au stade du doute.",
    accent: false,
  },
];

const apres = [
  {
    step: '01',
    titre: 'Explorer les métiers',
    description:
      "Lis des guides concrets pour comprendre le quotidien, les compétences utiles, les accès et les débouchés. Pas juste des intitulés vagues.",
    href: '/blog',
    cta: 'Lire les guides',
  },
  {
    step: '02',
    titre: 'Tester en vrai',
    description:
      "Ateliers, stages, PMSMP, journées école, dans ta ville, pour confirmer avant de t'engager. C'est souvent là que tout devient clair.",
    href: '/tester-un-metier',
    cta: 'Voir les expériences',
  },
  {
    step: '03',
    titre: 'Trouver une formation',
    description:
      "Alternance, CAP, BTS, licences pro, formations courtes : choisis une suite cohérente avec ton profil, pas juste une voie “par défaut”.",
    href: '/stage-et-formation',
    cta: 'Voir les formations',
  },
];

const temoignages = [
  {
    texte:
      "J'avais prévu de faire une licence en éco parce que je ne savais pas quoi faire d'autre. Le test m'a orientée vers le design graphique. Un stage d'observation plus tard, je prépare un BTS communication.",
    auteur: 'Camille',
    meta: '19 ans · Paris',
  },
  {
    texte:
      "Je sortais d'une première année de droit que j'avais détestée. Le test a confirmé ce que je ressentais : j'ai besoin de contact humain. Aujourd'hui je suis en formation d'éduc spé et je me sens enfin à ma place.",
    auteur: 'Théo',
    meta: '21 ans · Lyon',
  },
  {
    texte:
      "Le test ne te dit pas “tu dois faire ça” comme une injonction. Il t'ouvre des portes et t'explique pourquoi. J'ai découvert la kiné via une immersion et je prépare maintenant le concours.",
    auteur: 'Inès',
    meta: '22 ans · Toulouse',
  },
];

export default function TestOrientationJeunesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .fade-up {
            opacity: 0;
            transform: translateY(18px);
            animation: fadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            will-change: opacity, transform;
          }

          .fade-delay-1 { animation-delay: 0.08s; }
          .fade-delay-2 { animation-delay: 0.16s; }
          .fade-delay-3 { animation-delay: 0.24s; }

          .card-lift {
            transition:
              transform 220ms ease,
              box-shadow 220ms ease,
              border-color 220ms ease,
              background-color 220ms ease;
            will-change: transform;
          }

          .card-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 14px 30px rgba(4, 25, 47, 0.08);
          }

          .btn-lift {
            transition:
              transform 180ms ease,
              box-shadow 180ms ease,
              background-color 180ms ease,
              color 180ms ease,
              border-color 180ms ease;
            will-change: transform;
          }

          .btn-lift:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 24px rgba(4, 25, 47, 0.12);
          }

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

          .cta-breathe {
            animation: ctaBreathe 3.2s ease-in-out infinite;
          }

          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes ctaBreathe {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-2px); }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-up,
          .fade-delay-1,
          .fade-delay-2,
          .fade-delay-3,
          .card-lift,
          .btn-lift,
          .cta-breathe,
          .link-underline::after {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="mt-[90px] w-full bg-[#F7F7F8] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
          <div className="max-w-5xl">
            <span className="fade-up font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF] mb-8 block">
              Gratuit · 15 minutes · Résultats immédiats
            </span>

            <h1 className="fade-up fade-delay-1 font-sans font-bold text-[#04192F] text-[2.9rem] sm:text-[4rem] lg:text-[5rem] leading-[0.96] text-balance">
              Quel métier est vraiment fait pour toi ?
            </h1>

            <div className="fade-up fade-delay-2 mt-8 max-w-2xl space-y-5">
              <p className="font-sans text-gray-500 text-lg sm:text-xl leading-relaxed">
                Test d’orientation conçu pour les 18–25 ans, pour enfin voir clair, avec des pistes concrètes, pas des généralités.
              </p>

              <p className="font-sans text-gray-500 text-lg sm:text-xl leading-relaxed">
                Tu n’as pas besoin d’avoir déjà “la réponse”. Tu as juste besoin d’un point de départ fiable pour mieux te comprendre et explorer des directions réalistes.
              </p>
            </div>

            <div className="fade-up fade-delay-3 flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/test"
                className="btn-lift font-sans inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#6500FF] text-white rounded-2xl font-bold hover:bg-purple-700 transition w-fit"
              >
                Passer le test, c’est gratuit
                <img src="/media/cta-blog-arrow.svg" alt="" className="w-5" />
              </Link>
            </div>

            <p className="fade-up fade-delay-3 font-sans text-gray-400 text-sm mt-4">
              Pas de carte bancaire · Pas d’abonnement
            </p>
          </div>

          <div className="fade-up fade-delay-3 grid md:grid-cols-3 gap-4 mt-14">
            {heroStats.map((s, index) => (
              <div
                key={`${s.n}-${index}`}
                className={`card-lift rounded-3xl border border-gray-100 px-7 py-7 ${s.bg}`}
              >
                <p className="font-sans font-bold text-[#6500FF] text-4xl sm:text-5xl leading-none">
                  {s.n}
                </p>

                <p className="font-sans font-semibold text-[#04192F] mt-4 text-lg leading-snug">
                  {s.label}
                </p>

                <p className="font-sans text-gray-400 text-sm mt-3 leading-relaxed">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLÈME ── */}
      <section className="fade-up py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] leading-tight mb-6">
              L’orientation à 18 ans, personne ne t’y prépare vraiment
            </h2>

            <div className="font-sans text-gray-600 space-y-4 text-lg leading-relaxed">
              <p>
                Le système scolaire est bon pour transmettre des connaissances. Il est beaucoup moins bon pour t’aider à répondre à une question pourtant essentielle : qu’est-ce que tu veux faire de ta vie, et dans quel cadre veux-tu travailler ?
              </p>

              <p>
                Les profs ont beaucoup d’élèves, les conseillers sont souvent débordés, et la famille te pousse parfois vers ce qu’elle connaît déjà. Quand tu dois choisir vite, sans vrai outil, le risque n’est pas de manquer d’intelligence : c’est surtout de manquer de clarté.
              </p>

              <p className="font-bold text-[#04192F]">
                Une partie importante des étudiants abandonne ou se réoriente après la première année. Pas parce qu’ils sont incapables, parce qu’ils ont souvent choisi sans assez se connaître.
              </p>
            </div>
          </div>

          <div className="card-lift flex-shrink-0 bg-[#F3F3F3] rounded-2xl p-8 md:w-64 text-center border border-gray-100">
            <p className="font-sans text-5xl font-bold text-[#6500FF]">29 %</p>
            <p className="font-sans text-sm text-gray-500 mt-3 leading-relaxed">
              abandonnent la licence après la 1re année parmi les néobacheliers
            </p>
            <a
              href="https://publication.enseignementsup-recherche.gouv.fr/eesr/FR/EESR13_ES_20/les_parcours_et_la_reussite_en_licence_licence_professionnelle_et_master_a_l_universite/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-sans text-xs text-gray-400 mt-4 hover:text-[#04192F] transition inline-block"
            >
              Source : MESR – EESR
            </a>
          </div>
        </div>
      </section>

      {/* ── POUR QUI ── */}
      <section className="fade-up bg-[#F8F7FF] py-20 px-6 sm:px-10 border-y border-[#ECE7FF]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Pour qui
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mt-4 mb-4">
              Pour qui est fait ce test ?
            </h2>
            <p className="font-sans text-gray-500 text-lg leading-relaxed max-w-2xl">
              Ce test s’adresse aux jeunes qui veulent mieux se comprendre avant de choisir une voie, une formation ou une réorientation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="card-lift bg-white rounded-3xl p-8 border border-[#E8E1FF] shadow-sm">
              <p className="font-sans font-bold text-[#04192F] text-lg mb-5">
                C’est fait pour toi si :
              </p>
              <ul className="space-y-4 font-sans text-gray-600 leading-relaxed">
                <li>• tu es lycéen·ne et tu ne sais pas quoi faire après le bac ;</li>
                <li>• tu es étudiant·e et tu doutes de ta filière actuelle ;</li>
                <li>• tu es jeune actif·ve et tu ne vois pas la suite ;</li>
                <li>• tu veux des pistes concrètes plutôt qu’un test générique.</li>
              </ul>
            </div>

            <div className="card-lift bg-[#04192F] rounded-3xl p-8 border border-[#04192F] shadow-sm">
              <p className="font-sans font-bold text-white text-lg mb-5">
                Ce n’est pas l’outil idéal si :
              </p>
              <ul className="space-y-4 font-sans text-white/75 leading-relaxed">
                <li>• tu veux juste comparer des écoles sans réfléchir à ton profil ;</li>
                <li>• tu cherches uniquement un job étudiant rapidement ;</li>
                <li>• tu attends qu’un test décide à ta place sans étape de validation terrain.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT FONCTIONNE LE TEST ── */}
      <section className="bg-[#F3F3F3] py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-up font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-3">
            Comment fonctionne le test ?
          </h2>
          <p className="fade-up fade-delay-1 font-sans text-gray-500 text-lg mb-12 max-w-lg">
            Pour trouver un métier qui te correspond, il faut d’abord mieux comprendre ton profil, pas seulement tes notes.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {etapes.map((e) => (
              <div
                key={e.n}
                className={`card-lift rounded-2xl p-8 ${
                  e.accent ? 'bg-[#6500FF] text-white' : 'bg-white'
                }`}
              >
                <p className={`font-sans text-6xl font-bold leading-none mb-5 ${e.accent ? 'text-white/20' : 'text-gray-100'}`}>
                  {e.n}
                </p>
                <h3 className="font-sans font-bold text-xl mb-3">{e.titre}</h3>
                <p className={`font-sans text-sm leading-relaxed ${e.accent ? 'text-white/75' : 'text-gray-500'}`}>
                  {e.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <p className="font-sans text-gray-500 text-base leading-relaxed">
              Le test s’inspire de travaux reconnus en psychologie de l’orientation, notamment le modèle RIASEC de Holland et une approche par compétences et préférences de travail, adaptés aux réalités des 18–25 ans.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/test"
              className="btn-lift font-sans inline-flex items-center gap-2 px-8 py-4 bg-[#04192F] text-white rounded-xl font-bold text-lg hover:bg-black transition"
            >
              Passer le test maintenant
              <img src="/media/cta-blog-arrow.svg" alt="" className="w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── POURQUOI CE TEST ── */}
      <section className="fade-up py-16 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="card-lift bg-white border border-gray-100 rounded-3xl p-8 sm:p-10">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-5">
              En quoi ce test est différent ?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4 font-sans text-gray-600 leading-relaxed">
                <li>• Il est pensé pour les 18–25 ans, pas pour “tout le monde” indistinctement.</li>
                <li>• Il ne te donne pas une injonction magique : il ouvre des pistes concrètes à explorer.</li>
              </ul>

              <ul className="space-y-4 font-sans text-gray-600 leading-relaxed">
                <li>• Il est relié à des actions utiles : guides, immersions, formations, tests terrain.</li>
                <li>• Il t’aide à comprendre ton profil, pas seulement à cocher une case métier.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUE FAIRE APRÈS ── */}
      <section className="fade-up py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-3">
            Que faire après le test ?
          </h2>
          <p className="font-sans text-gray-500 text-lg mb-12 max-w-2xl">
            Le test, c’est le point de départ. Pour que ça serve vraiment, voici ce que tu peux faire ensuite.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {apres.map((a, i) => (
              <div
                key={a.titre}
                className={`card-lift rounded-2xl p-8 flex flex-col border-2 ${
                  i === 1 ? 'border-[#6500FF]' : 'border-gray-100'
                }`}
              >
                <span className="font-sans text-xs font-bold text-[#6500FF] uppercase tracking-wider mb-4">
                  Étape {a.step}
                </span>
                <h3 className="font-sans font-bold text-[#04192F] text-xl mb-3">
                  {a.titre}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed flex-1">
                  {a.description}
                </p>
                <Link
                  href={a.href}
                  className="link-underline font-sans text-[#6500FF] text-sm font-bold mt-6 inline-block w-fit"
                >
                  {a.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="bg-[#6500FF] py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="fade-up font-sans text-white/60 text-sm uppercase tracking-[0.2em] font-bold mb-4">
            Ce que le test a changé pour eux
          </p>
          <h2 className="fade-up fade-delay-1 font-sans font-bold text-white text-3xl sm:text-4xl mb-12">
            Ils ont enfin trouvé un point de départ crédible
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {temoignages.map((t) => (
              <div
                key={t.auteur}
                className="card-lift bg-white rounded-2xl p-7 flex flex-col gap-4"
              >
                <p className="font-sans text-[#04192F] leading-relaxed text-sm italic">
                  "{t.texte}"
                </p>
                <div className="mt-auto">
                  <p className="font-sans font-bold text-[#6500FF] text-sm">{t.auteur}</p>
                  <p className="font-sans text-xs text-gray-400">{t.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F3F3F3] py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="fade-up font-sans font-bold text-3xl text-[#04192F] mb-10">
              Questions fréquentes
            </h2>

            <div className="space-y-3">
              {faqJsonLd.mainEntity.map((item) => (
                <details
                  key={item.name}
                  className="group card-lift bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <summary className="font-sans cursor-pointer px-7 py-5 font-semibold text-[#04192F] flex justify-between items-center list-none hover:bg-gray-50 transition">
                    {item.name}
                    <span className="text-[#6500FF] ml-4 flex-shrink-0 text-xl font-bold transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="font-sans px-7 py-5 text-gray-600 leading-relaxed border-t border-gray-100">
                    {item.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="fade-up py-24 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans font-bold text-[#6500FF] text-sm uppercase tracking-widest mb-4">
            Prêt·e à voir plus clair ?
          </p>
          <h2 className="font-sans font-bold text-[#04192F] text-4xl sm:text-5xl mb-4 leading-tight">
            Le test prend 15 minutes.
            <br />
            <span className="text-gray-300">Les mauvaises orientations,</span>
            <br />
            des années.
          </h2>

          <Link
            href="/test"
            className="btn-lift cta-breathe font-sans inline-flex items-center gap-3 mt-10 px-10 py-5 bg-[#04192F] text-white rounded-xl font-bold text-xl hover:bg-black transition"
          >
            Commencer le test, c’est gratuit
            <img src="/media/cta-blog-arrow.svg" alt="" className="w-6" />
          </Link>
        </div>
      </section>
    </>
  );
}