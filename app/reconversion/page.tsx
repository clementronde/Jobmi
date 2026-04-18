import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/reconversion`;

export const metadata: Metadata = {
  title: "Reconversion professionnelle à 20 ans — Guide complet pour jeunes | Jobmi",
  description:
    "Changer de voie à 20 ans, c'est possible et souvent le meilleur moment. Guide complet : par où commencer, comment financer, erreurs à éviter.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Reconversion professionnelle à 20 ans | Jobmi",
    description:
      "Guide complet pour les 18–25 ans qui veulent changer de voie sans se tromper.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reconversion professionnelle à 20 ans | Jobmi",
    description:
      "Guide complet pour changer de voie à 20 ans sans se tromper.",
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Est-ce que je peux me reconvertir si je n'ai pas encore de diplôme ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Une reconversion à 20 ans ne passe pas forcément par un long diplôme. L'alternance, les CAP, certains BTS, les formations professionnalisantes et certains dispositifs publics permettent d'entrer dans une nouvelle voie sans avoir déjà un parcours “parfait”. L'important est surtout d'identifier une piste réaliste, de la tester sur le terrain et de choisir une formation adaptée à ton niveau de départ.",
      },
    },
    {
      '@type': 'Question',
      name: "J'ai un CDD en cours, est-ce que je peux me reconvertir maintenant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Tu peux préparer ta reconversion avant même la fin de ton contrat : passer un test d'orientation, explorer les métiers, faire des immersions, identifier des formations et vérifier tes aides possibles. Beaucoup de reconversions se construisent progressivement, en parallèle de la situation actuelle. Le plus important est de ne pas attendre le dernier moment pour réfléchir à la suite.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment expliquer ma reconversion à un recruteur ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le plus convaincant est de montrer une démarche claire : ce qui ne te convenait plus, ce que tu as compris sur toi, ce que tu as fait pour valider ta nouvelle direction et ce que tu apportes déjà. Une reconversion bien expliquée montre de la maturité, de la lucidité et de la motivation. Si tu as testé le métier sur le terrain, ton discours devient tout de suite beaucoup plus crédible.",
      },
    },
    {
      '@type': 'Question',
      name: "Est-ce qu'une reconversion à 20 ans peut me fermer des portes ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dans la majorité des cas, non. À 20 ans, changer de voie est souvent perçu comme une décision logique quand elle est réfléchie. Ce qui peut freiner, ce n'est pas le changement lui-même, mais l'absence de projet clair. Une reconversion préparée, testée et cohérente peut au contraire montrer que tu apprends vite et que tu sais prendre de meilleures décisions pour ton avenir.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment savoir si ma nouvelle idée de métier est vraiment meilleure ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En la confrontant à la réalité. Lis, échange, regarde des vidéos, mais surtout teste le métier : atelier, stage d'observation, PMSMP, journée découverte, immersion en école. Si tu arrives à te projeter dans le quotidien, que tu acceptes les contraintes réelles du métier et que tu ressors avec plus d'énergie que de doute, c'est souvent un très bon signe. Une vraie immersion vaut bien plus que des recherches théoriques seules.",
      },
    },
  ],
};

const heroStats = [
  {
    n: '1/4',
    label: 'des jeunes actifs veulent changer de métier',
    sub: 'dans les 5 ans après avoir commencé leur vie pro',
    sourceLabel: 'Source : Travail-Emploi.gouv.fr',
    sourceHref:
      "https://travail-emploi.gouv.fr/enquete-un-jeune-sur-quatre-souhaite-changer-de-metier#:~:text=Elle%20r%C3%A9v%C3%A8le%20qu'un%20quart,concerne%20aussi%20des%20profils%20vari%C3%A9s.",
    bg: 'bg-[#F3F3F3]',
  },
  {
    n: '20 ans',
    label: 'reste le moment le plus souple pour changer de voie',
    sub: 'moins de contraintes, plus de temps pour tester et ajuster',
    bg: 'bg-white',
  },
  {
    n: '0 €',
    label: 'pour commencer avec Jobmi',
    sub: "le test d'orientation est gratuit et sans engagement",
    bg: 'bg-[#F3F3F3]',
  },
];

const etapes = [
  {
    n: '01',
    titre: 'Fais le point sur toi',
    description:
      "Qu'est-ce qui t'intéresse vraiment ? Qu'est-ce qui te vide ? Qu'est-ce qui te motive encore ? Le test d'orientation Jobmi t'aide à clarifier tes envies, tes forces et ta façon de travailler.",
    href: '/test',
    cta: "Passer le test",
    dark: false,
  },
  {
    n: '02',
    titre: 'Explore les métiers',
    description:
      "Lis, regarde, compare, parle à des pros. L'exploration en ligne est utile pour ouvrir des pistes, mais elle ne suffit jamais à elle seule pour choisir une nouvelle direction.",
    href: '/blog',
    cta: 'Lire les guides',
    dark: true,
  },
  {
    n: '03',
    titre: "Teste avant de t'engager",
    description:
      "Ateliers, stages, PMSMP, journées école : c'est souvent là que tout devient clair. Avant de t'inscrire dans une nouvelle formation, confronte ton idée au terrain.",
    href: '/tester-un-metier',
    cta: 'Voir les expériences',
    dark: false,
  },
];

const financements = [
  {
    emoji: '💳',
    titre: 'Le CPF',
    description:
      "Si tu as déjà travaillé, tu as peut-être des droits sur ton Compte Personnel de Formation. Consulte moncompteformation.gouv.fr pour vérifier ce que tu peux financer.",
    note: 'Depuis 2024, un reste à charge peut s’appliquer selon les situations.',
  },
  {
    emoji: '🏛️',
    titre: 'Les Missions Locales',
    description:
      "Accompagnement gratuit pour les 16–25 ans. Elles peuvent t'aider à structurer ton projet, trouver des immersions, repérer des aides et avancer sans rester seul.",
    note: '',
  },
  {
    emoji: '🔄',
    titre: "L'alternance",
    description:
      "Tu te formes et tu es rémunéré. Pour beaucoup de jeunes, c'est le meilleur format pour apprendre un nouveau métier sans s'endetter.",
    note: '',
  },
  {
    emoji: '🎓',
    titre: 'Formations accessibles',
    description:
      "France Travail, AFPA, GRETA et d'autres organismes proposent des formations gratuites ou peu coûteuses selon ta situation et ton projet.",
    note: '',
  },
];

const erreurs = [
  "Choisir une nouvelle formation au hasard, juste parce qu'elle semble à la mode",
  "Se précipiter par peur de perdre du temps — quelques mois de réflexion valent mieux que plusieurs années dans la mauvaise direction",
  "Ne pas chercher les aides existantes : CPF, Mission Locale, alternance, aides locales ou régionales",
  "Négliger le réseau — les personnes rencontrées pendant les immersions peuvent devenir des contacts clés",
  "Vouloir tout décider seul, sans regard extérieur ni accompagnement",
];

const checklist = [
  "J'ai identifié pourquoi ma voie actuelle ne me convient pas",
  "J'ai passé un test d'orientation pour explorer plusieurs pistes",
  "J'ai testé au moins un métier qui m'attire vraiment",
  "J'ai vérifié mes aides possibles et mes droits à la formation",
  "J'ai contacté une Mission Locale, France Travail ou une structure d'accompagnement",
  "J'ai repéré au moins 2 formations ou parcours réalistes",
  "Je sais expliquer clairement pourquoi je veux changer de voie",
];

export default function ReconversionPage() {
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
              Guide 18–25 ans
            </span>

            <h1 className="fade-up fade-delay-1 font-sans font-bold text-[#04192F] text-[2.9rem] sm:text-[4rem] lg:text-[5rem] leading-[0.96] text-balance">
              Se reconvertir à 20 ans, pourquoi c’est souvent le meilleur moment
            </h1>

            <div className="fade-up fade-delay-2 mt-8 max-w-2xl space-y-5">
              <p className="font-sans text-gray-500 text-lg sm:text-xl leading-relaxed">
                Changer de voie, ça se prépare. Guide complet pour les 18–25 ans qui veulent avancer sans se tromper, ni perdre des années dans une direction qui ne leur correspond pas.
              </p>

              <p className="font-sans text-gray-500 text-lg sm:text-xl leading-relaxed">
                Par où commencer, comment financer, quoi tester, quelles erreurs éviter : voici une méthode simple pour remettre ton projet professionnel sur de bons rails.
              </p>
            </div>

            <div className="fade-up fade-delay-3 flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/test"
                className="btn-lift font-sans inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#6500FF] text-white rounded-2xl font-bold hover:bg-purple-700 transition w-fit"
              >
                Passer le test d'orientation
                <img src="/media/cta-blog-arrow.svg" alt="" className="w-5" />
              </Link>

              <Link
                href="/tester-un-metier"
                className="btn-lift font-sans inline-flex items-center justify-center px-7 py-4 border-2 border-[#04192F] text-[#04192F] rounded-2xl font-semibold hover:bg-[#04192F] hover:text-white transition w-fit"
              >
                Tester un métier d'abord
              </Link>
            </div>
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

                {'sourceHref' in s && s.sourceHref ? (
                  <a
                    href={s.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-sans text-xs text-gray-400 mt-4 hover:text-[#04192F] transition inline-block"
                  >
                    {s.sourceLabel}
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NON, CE N’EST PAS UNE ERREUR ── */}
      <section className="fade-up py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] leading-tight mb-6">
              Non, se reconvertir jeune n’est pas une erreur
            </h2>

            <div className="font-sans text-gray-600 space-y-4 text-lg leading-relaxed">
              <p>
                Le système scolaire demande souvent de choisir très tôt, parfois avant même d’avoir eu le temps de se connaître vraiment. Résultat : beaucoup de jeunes avancent dans une voie choisie trop vite, mal testée ou simplement pas faite pour eux.
              </p>

              <p>
                Se reconvertir à 20 ans, ce n’est pas “repartir de zéro” : c’est corriger une direction trop hâtive. Et c’est souvent beaucoup plus simple à 20 ans qu’à 35, parce que tu as encore de la souplesse pour tester, ajuster et rebondir.
              </p>

              <p>
                L’enjeu n’est pas d’avoir un parcours parfait. L’enjeu, c’est de prendre une meilleure décision maintenant plutôt que de rester bloqué plusieurs années dans une voie qui ne te correspond pas.
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

      {/* ── PAR OÙ COMMENCER ── */}
      <section className="bg-[#F3F3F3] py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-up font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-3">
            Par où commencer ?
          </h2>
          <p className="fade-up fade-delay-1 font-sans text-gray-500 text-lg mb-12 max-w-lg">
            Trois étapes dans l’ordre. Et surtout : ne saute pas le terrain.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {etapes.map((e) => (
              <div
                key={e.n}
                className={`card-lift rounded-2xl p-8 flex flex-col ${
                  e.dark ? 'bg-[#ECECEC]' : 'bg-white'
                }`}
              >
                <p className="font-sans text-6xl font-bold leading-none mb-5 text-[#6500FF]">
                  {e.n}
                </p>
                <h3 className="font-sans font-bold text-xl mb-3 text-[#04192F]">
                  {e.titre}
                </h3>
                <p className="font-sans text-sm leading-relaxed flex-1 text-gray-500">
                  {e.description}
                </p>
                <Link
                  href={e.href}
                  className="link-underline font-sans text-sm font-bold mt-6 text-[#6500FF] inline-block w-fit"
                >
                  {e.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT SAVOIR SI LA NOUVELLE VOIE EST LA BONNE ── */}
      <section className="fade-up py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-6">
                Comment savoir si ta nouvelle voie est la bonne ?
              </h2>

              <div className="font-sans text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  Une bonne piste ne se reconnaît pas seulement parce qu’elle “te plaît sur le papier”. Elle se reconnaît parce que tu arrives à te projeter dans le quotidien réel du métier, avec ses avantages mais aussi ses contraintes.
                </p>

                <p>
                  Après une immersion, pose-toi les bonnes questions : est-ce que tu te vois faire ça pendant plusieurs années ? Est-ce que tu acceptes les horaires, le rythme, le niveau d’étude ou le salaire de départ ? Est-ce que tu ressors curieux et motivé, ou juste soulagé que ce soit terminé ?
                </p>

                <p>
                  Une bonne reconversion ne repose pas sur un fantasme. Elle repose sur une idée testée, réaliste, et compatible avec ta façon de vivre et de travailler.
                </p>
              </div>
            </div>

            <div className="card-lift bg-[#F8F7FF] border border-[#E9E1FF] rounded-3xl p-8">
              <p className="font-sans text-sm uppercase tracking-[0.2em] font-bold text-[#6500FF] mb-4">
                Mini grille de décision
              </p>
              <ul className="space-y-4 font-sans text-gray-600 leading-relaxed">
                <li>• Est-ce que je me vois faire ça au moins 2 à 3 ans ?</li>
                <li>• Est-ce que je suis OK avec les contraintes réelles du métier ?</li>
                <li>• Est-ce que j’ai envie d’en parler en rentrant chez moi ?</li>
                <li>• Est-ce que j’aime vraiment le quotidien, pas juste l’idée ?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTER PRÈS DE CHEZ TOI ── */}
      <section className="fade-up py-16 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="card-lift bg-white border border-gray-100 rounded-3xl p-8 sm:p-10">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-5">
              Tester un métier près de chez toi
            </h2>

            <div className="max-w-3xl space-y-4">
              <p className="font-sans text-gray-600 text-lg leading-relaxed">
                Avant de t’inscrire dans une nouvelle formation, essaie de confronter ton idée à la réalité. Selon ta ville, tu peux trouver des ateliers, stages d’observation, PMSMP ou journées découvertes pour mieux comprendre un métier.
              </p>

              <p className="font-sans text-gray-600 text-lg leading-relaxed">
                Jobmi te permet d’explorer ces formats par ville et par besoin. C’est souvent la façon la plus rapide de passer du doute à une vraie décision.
              </p>

              <Link
                href="/tester-un-metier"
                className="link-underline font-sans text-sm font-bold text-[#6500FF] inline-block w-fit pt-2"
              >
                Découvrir la page “Tester un métier”
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINANCER TA RECONVERSION ── */}
      <section className="fade-up py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-3">
            Financer ta reconversion
          </h2>
          <p className="font-sans text-gray-500 text-lg mb-12">
            L’argent bloque souvent les projets. Voilà les vraies pistes à regarder.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {financements.map((f) => (
              <div
                key={f.titre}
                className="card-lift border-2 border-gray-100 rounded-2xl p-7 bg-white"
              >
                <span className="text-3xl">{f.emoji}</span>
                <h3 className="font-sans font-bold text-xl mt-4 mb-2 text-[#04192F]">
                  {f.titre}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">
                  {f.description}
                </p>
                {f.note && (
                  <p className="font-sans text-xs text-gray-400 mt-3 italic">
                    ⚠ {f.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SE FAIRE AIDER LOCALEMENT ── */}
      <section className="fade-up py-16 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="card-lift bg-[#F8F7FF] border border-[#E9E1FF] rounded-3xl p-8 sm:p-10">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-5">
              Se faire aider près de chez toi
            </h2>

            <div className="space-y-4 max-w-3xl">
              <p className="font-sans text-gray-600 text-lg leading-relaxed">
                Les Missions Locales accompagnent gratuitement les 16–25 ans dans leur projet professionnel. Elles peuvent t’aider à trouver des immersions, clarifier ton projet, repérer des formations et avancer plus vite.
              </p>

              <p className="font-sans text-gray-600 text-lg leading-relaxed">
                Tu peux aussi en parler à ton conseiller France Travail ou à un autre organisme d’insertion si tu es déjà accompagné.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ERREURS À ÉVITER ── */}
      <section className="bg-[#04192F] py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-up font-sans font-bold text-white text-3xl sm:text-4xl mb-12">
            Les erreurs à éviter
          </h2>

          <div className="space-y-4">
            {erreurs.map((e, i) => (
              <div
                key={i}
                className="card-lift flex gap-5 items-start bg-white/5 rounded-2xl px-7 py-5"
              >
                <span className="font-sans font-bold text-[#6500FF] text-2xl flex-shrink-0 leading-none mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-sans text-white/70 text-base leading-relaxed">
                  {e}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECKLIST ── */}
      <section className="fade-up py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-3">
            Ta checklist de reconversion
          </h2>
          <p className="font-sans text-gray-500 mb-10 text-lg">
            Coche ces points un par un avant de t’engager dans une nouvelle direction.
          </p>

          <div className="space-y-3">
            {checklist.map((item, i) => (
              <div
                key={i}
                className="card-lift flex items-center gap-5 bg-[#F3F3F3] rounded-xl px-7 py-4"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded border-2 border-[#6500FF]/40" />
                <p className="font-sans text-[#04192F] font-medium">{item}</p>
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
              FAQ reconversion à 20 ans
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#04192F] rounded-3xl px-10 py-16 text-center">
            <p className="font-sans text-[#6500FF] font-bold text-sm uppercase tracking-widest mb-4">
              Le meilleur moment, c’est maintenant
            </p>
            <h2 className="font-sans font-bold text-white text-4xl sm:text-5xl mb-4 leading-tight">
              15 minutes pour commencer à voir plus clair
            </h2>
            <p className="font-sans text-white/40 mb-10 text-lg">
              Une mauvaise orientation peut prendre des années. Une meilleure décision peut commencer aujourd’hui.
            </p>
            <Link
              href="/test"
              className="btn-lift cta-breathe font-sans inline-flex items-center gap-3 px-10 py-5 bg-[#6500FF] text-white rounded-xl font-bold text-xl hover:bg-purple-700 transition"
            >
              Passer le test gratuit
              <img src="/media/cta-blog-arrow.svg" alt="" className="w-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}