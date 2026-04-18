import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/tester-un-metier`;

export const metadata: Metadata = {
  title: "Tester un métier avant de se lancer — Ateliers, stages et immersions | Jobmi",
  description:
    "Comment tester un métier concrètement avant de choisir ta formation ? Ateliers, PMSMP, stages d'observation, jobshadowing : Jobmi t'aide à trouver l'expérience qu'il te faut.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Tester un métier avant de se lancer | Jobmi",
    description:
      "Ateliers, PMSMP, stages d'observation, jobshadowing : toutes les façons de tester un métier avant de t'engager dans une formation.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tester un métier avant de se lancer | Jobmi",
    description:
      "Toutes les façons de tester un métier avant de choisir ta formation.",
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Faut-il déjà savoir quel métier on veut tester ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. Si tu n'as aucune idée, commence par le test d'orientation Jobmi. Il t'aidera à identifier des familles de métiers qui te correspondent, puis à repérer des expériences concrètes pour passer rapidement de l'idée à la réalité.",
      },
    },
    {
      '@type': 'Question',
      name: "Est-ce que les expériences sont payantes ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Certaines expériences sont gratuites, comme certaines journées portes ouvertes, certaines immersions en école ou la PMSMP lorsqu'elle est accessible via un dispositif officiel. D'autres formats, comme certains ateliers privés ou accompagnements spécialisés, peuvent être payants. Sur Jobmi, le test d'orientation est gratuit et sans engagement, puis chaque fiche précise clairement si l'expérience est gratuite ou payante.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est l'âge minimum pour participer ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cela dépend du format et de l'organisateur. Beaucoup d'expériences sont accessibles dès 16 ans, tandis que d'autres sont réservées aux majeurs ou demandent un cadre particulier. Les conditions d'accès sont indiquées sur chaque fiche pour t'aider à savoir rapidement si l'expérience te correspond.",
      },
    },
    {
      '@type': 'Question',
      name: "C'est quoi une PMSMP ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La PMSMP, ou Période de Mise en Situation en Milieu Professionnel, est un dispositif officiel qui permet de découvrir un métier directement en entreprise. Elle s'adresse principalement à des personnes accompagnées dans un parcours d'insertion, d'orientation ou de retour à l'emploi. La mise en place se fait généralement via France Travail, une Mission Locale ou un autre organisme prescripteur, et les conditions peuvent varier selon la situation de chacun.",
      },
    },
    {
      '@type': 'Question',
      name: "Est-ce que Jobmi m'accompagne si j'ai des questions ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Jobmi t'aide à mieux comprendre les formats possibles, à identifier les pistes pertinentes grâce au test d'orientation et à trouver des expériences adaptées à ton profil. Si tu as une question, tu peux aussi contacter l'équipe via le formulaire de contact : une réponse est apportée sous 48 heures ouvrées.",
      },
    },
  ],
};

const formats = [
  {
    tag: '1 journée',
    titre: 'Atelier découverte',
    description:
      "Tu mets la main à la pâte sur de vraies tâches du métier, avec un professionnel en activité. Idéal pour explorer plusieurs pistes rapidement.",
    exemple:
      "Atelier pâtisserie à Paris, atelier code web à Lyon, atelier graphisme à Nantes...",
    dark: false,
    accent: false,
  },
  {
    tag: '3 jours → 2 semaines',
    titre: "Stage d'observation",
    description:
      "Tu suis un professionnel dans son quotidien réel, réunions, tâches, galères comprises. Tu repars avec une image fidèle, pas la version Instagram.",
    exemple: "Hôpital à Toulouse, startup à Bordeaux, cabinet d'archi à Paris...",
    dark: true,
    accent: false,
  },
  {
    tag: 'Quelques jours → 1 mois',
    titre: 'PMSMP*',
    description:
      "Réservé aux demandeurs d'emploi ou à certains parcours accompagnés. Dispositif officiel très utile pour tester un métier en entreprise sans te lancer à l'aveugle.",
    exemple: 'Boulangerie, hôpital, marketing, artisanat...',
    dark: false,
    accent: true,
  },
  {
    tag: '1 à 2 jours',
    titre: 'Jobshadowing',
    description:
      "Tu suis quelqu'un comme son ombre. Pas besoin de participer, juste observer, poser des questions, comprendre. Le format le plus honnête qui soit.",
    exemple: 'Avocat, chirurgien, architecte, directeur artistique...',
    dark: false,
    accent: false,
  },
  {
    tag: '1 journée',
    titre: 'Journée en école',
    description:
      "Tu t'assieds en cours, tu parles aux étudiants, tu vois l'ambiance. Tu testes à la fois le métier ET la formation qui y mène, en une journée.",
    exemple: "BTS, école de design, école d'infirmiers, école de commerce...",
    dark: true,
    accent: false,
  },
];

const temoignages = [
  {
    texte:
      "J'hésitais entre la kiné et l'ostéopathie. 3 jours de stage d'observation plus tard, j'avais ma réponse. Je prépare le concours de masso-kiné.",
    auteur: 'Romain, 20 ans · Bordeaux',
  },
  {
    texte:
      "L'atelier UX design m'a montré concrètement comment ça fonctionnait. J'ai postulé en BTS MMI juste après. Avant, c'était du flou total.",
    auteur: 'Léa, 18 ans · Nantes',
  },
  {
    texte:
      "La PMSMP dans un resto m'a permis de confirmer que je voulais bosser en cuisine. Maintenant je suis en CAP et je n'ai aucun regret.",
    auteur: 'Maxime, 23 ans · Paris',
  },
];

const villes = [
  { slug: 'paris', label: 'Paris' },
  { slug: 'lyon', label: 'Lyon' },
  { slug: 'marseille', label: 'Marseille' },
  { slug: 'nantes', label: 'Nantes' },
  { slug: 'toulouse', label: 'Toulouse' },
  { slug: 'bordeaux', label: 'Bordeaux' },
];

const heroStats = [
  {
    n: '29 %',
    label: 'abandonnent la licence après la 1re année',
    sub: 'chez les néobacheliers inscrits en licence à la rentrée suivante',
    sourceLabel: 'Source : MESR – EESR',
    sourceHref:
      'https://publication.enseignementsup-recherche.gouv.fr/eesr/FR/EESR13_ES_20/les_parcours_et_la_reussite_en_licence_licence_professionnelle_et_master_a_l_universite/',
    bg: 'bg-[#F3F3F3]',
  },
  {
    n: '1 jour',
    label: 'suffit pour un atelier découverte',
    sub: 'le format le plus accessible pour commencer',
    bg: 'bg-white',
  },
  {
    n: '0 €',
    label: 'pour commencer sur Jobmi',
    sub: "le test d'orientation est entièrement gratuit et sans engagement",
    bg: 'bg-[#F3F3F3]',
  },
];

export default function TesterUnMetierPage() {
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
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-2px);
            }
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
              Pour les 18–25 ans
            </span>

            <h1 className="fade-up fade-delay-1 font-sans font-bold text-[#04192F] text-[2.9rem] sm:text-[4rem] lg:text-[5rem] leading-[0.96] text-balance">
              Tester un métier avant de te lancer : ateliers, stages, immersions
              pour les 18–25 ans
            </h1>

            <div className="fade-up fade-delay-2 mt-8 max-w-2xl space-y-5">
              <p className="font-sans text-gray-500 text-lg sm:text-xl leading-relaxed">
                La décision la plus utile que tu prendras avant de choisir ta
                formation : tester un métier en vrai pour éviter de perdre du temps
                et de l’argent.
              </p>

              <p className="font-sans text-gray-500 text-lg sm:text-xl leading-relaxed">
                Ateliers, stages d’observation, PMSMP, jobshadowing, journées
                découvertes en école : toutes les façons de découvrir un métier sans
                t’engager.
              </p>
            </div>

            <div className="fade-up fade-delay-3 flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/stage-et-formation"
                className="btn-lift font-sans inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#6500FF] text-white rounded-2xl font-bold hover:bg-purple-700 transition w-fit"
              >
                Voir les expériences
                <img src="/media/cta-blog-arrow.svg" alt="" className="w-5" />
              </Link>

              <Link
                href="/test"
                className="btn-lift font-sans inline-flex items-center justify-center px-7 py-4 border-2 border-[#04192F] text-[#04192F] rounded-2xl font-semibold hover:bg-[#04192F] hover:text-white transition w-fit"
              >
                Passer le test d'orientation
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

      {/* ── POURQUOI TESTER ── */}
      <section className="fade-up py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] leading-tight mb-6">
              Pourquoi tester avant de choisir
            </h2>

            <div className="font-sans text-gray-600 space-y-4 text-lg leading-relaxed">
              <p>
                Imagine acheter une voiture sans jamais avoir conduit. Tu te bases
                sur des brochures, des avis en ligne, ce que tes parents te disent.
                Tu signes. Et un mois plus tard, tu réalises que c'est une erreur.
              </p>

              <p>
                C'est exactement ce que font des milliers de jeunes avec leurs
                études. Ils choisissent sur la base d'une image — pas d'une
                expérience réelle.
              </p>

              <p>
                Tester un métier permet de confronter une idée à la réalité : le
                rythme, l'ambiance, les missions, les contraintes, ce qui te plaît
                vraiment… ou pas. C'est souvent ce qui évite une mauvaise
                orientation, une réorientation subie ou une formation choisie par
                défaut.
              </p>

              <p className="font-bold text-[#04192F]">
                Une journée d'immersion vaut 100 heures de recherches en ligne.
              </p>
            </div>
          </div>

          <div className="card-lift flex-shrink-0 bg-[#F3F3F3] rounded-2xl p-8 md:w-64 text-center border border-gray-100">
            <p className="font-sans text-5xl font-bold text-[#6500FF]">1/4</p>

            <p className="font-sans text-sm text-gray-500 mt-3 leading-relaxed">
              des jeunes actifs veulent changer de métier dans les 5 ans après avoir
              commencé
            </p>

            <a
              href="https://travail-emploi.gouv.fr/enquete-un-jeune-sur-quatre-souhaite-changer-de-metier#:~:text=Elle%20r%C3%A9v%C3%A8le%20qu'un%20quart,concerne%20aussi%20des%20profils%20vari%C3%A9s."
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-sans text-xs text-gray-400 mt-4 hover:text-[#04192F] transition inline-block"
            >
              Source : Travail-Emploi.gouv.fr
            </a>
          </div>
        </div>
      </section>

      {/* ── POUR QUI C'EST FAIT ── */}
      <section className="fade-up bg-[#F8F7FF] py-20 px-6 sm:px-10 border-y border-[#ECE7FF]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Pour qui
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mt-4 mb-4">
              Pour qui c’est fait ?
            </h2>
            <p className="font-sans text-gray-500 text-lg leading-relaxed max-w-2xl">
              Jobmi s’adresse aux jeunes qui veulent arrêter de choisir “à
              l’aveugle” et tester un métier concrètement avant de s’engager.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="card-lift bg-white rounded-3xl p-8 border border-[#E8E1FF] shadow-sm">
              <p className="font-sans font-bold text-[#04192F] text-lg mb-5">
                C’est fait pour toi si :
              </p>
              <ul className="space-y-4 font-sans text-gray-600 leading-relaxed">
                <li>
                  • tu es lycéen·ne et tu hésites entre plusieurs filières ou
                  plusieurs métiers ;
                </li>
                <li>
                  • tu es étudiant·e et tu doutes de ta formation actuelle ;
                </li>
                <li>
                  • tu es jeune actif·ve et tu te demandes si tu es dans le bon
                  métier ;
                </li>
                <li>
                  • tu veux découvrir un secteur sur le terrain avant de prendre
                  une décision importante.
                </li>
              </ul>
            </div>

            <div className="card-lift bg-[#04192F] rounded-3xl p-8 border border-[#04192F] shadow-sm">
              <p className="font-sans font-bold text-white text-lg mb-5">
                Ce n’est pas l’outil idéal si :
              </p>
              <ul className="space-y-4 font-sans text-white/75 leading-relaxed">
                <li>• tu cherches uniquement un job étudiant rapidement ;</li>
                <li>
                  • tu veux juste comparer des écoles sans tester les réalités du
                  métier ;
                </li>
                <li>
                  • tu cherches une plateforme d’offres d’emploi classique.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES FORMATS ── */}
      <section className="bg-[#04192F] py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-up font-sans font-bold text-white text-3xl sm:text-4xl mb-3">
            5 façons de tester un métier
          </h2>

          <p className="fade-up fade-delay-1 font-sans text-white/50 text-lg mb-12">
            Sans t'engager dans une formation, sans dépenser une fortune.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {formats.map((f) => {
              const bg = f.accent
                ? 'bg-[#6500FF]'
                : f.dark
                  ? 'bg-white/5'
                  : 'bg-white/10';

              const subText = f.accent ? 'text-white/70' : 'text-white/50';

              return (
                <div key={f.titre} className={`card-lift rounded-2xl p-7 ${bg}`}>
                  <span className="font-sans text-xs font-bold px-3 py-1 rounded-full bg-white/15 text-white">
                    {f.tag}
                  </span>
                  <h3 className="font-sans font-bold text-xl mt-4 mb-3 text-white">
                    {f.titre}
                  </h3>
                  <p className={`font-sans text-sm leading-relaxed mb-3 ${subText}`}>
                    {f.description}
                  </p>
                  <p className={`font-sans text-xs italic ${subText}`}>
                    Ex : {f.exemple}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="fade-up mt-10 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7">
            <p className="font-sans text-white font-semibold mb-3">
              *À propos de la PMSMP
            </p>
            <p className="font-sans text-white/70 text-sm leading-relaxed max-w-3xl">
  La PMSMP se met en place via France Travail, une Mission Locale ou un autre organisme prescripteur. Les conditions d’accès peuvent varier selon ta situation. Parles-en à ton conseiller pour savoir si tu peux en bénéficier.
</p>
          </div>
        </div>
      </section>

      {/* ── COMBIEN ÇA COÛTE ── */}
      <section className="fade-up py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            <div>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-6">
                Combien ça coûte de tester un métier ?
              </h2>
              <div className="font-sans text-gray-600 space-y-4 text-lg leading-relaxed">
                <p>
                  Bonne nouvelle : tester un métier ne veut pas forcément dire
                  payer. Il existe des formats gratuits, comme certaines journées
                  découvertes en école, certaines immersions ou la PMSMP lorsqu’elle
                  est accessible dans ton parcours.
                </p>
                <p>
                  D’autres formats peuvent être payants, notamment certains
                  ateliers privés, accompagnements spécialisés ou expériences très
                  encadrées avec un professionnel.
                </p>
                <p>
                  Sur Jobmi, le test d’orientation est gratuit et sans engagement.
                  Ensuite, chaque expérience affiche clairement son format, ses
                  conditions et, quand c’est le cas, son prix.
                </p>
                <p className="font-semibold text-[#04192F]">
                  L’objectif : t’aider à tester intelligemment, sans mauvaise
                  surprise.
                </p>
              </div>
            </div>

            <div className="card-lift bg-[#F3F3F3] rounded-3xl p-8 border border-gray-100">
              <p className="font-sans text-sm uppercase tracking-[0.2em] font-bold text-[#6500FF] mb-4">
                En pratique
              </p>
              <ul className="space-y-4 font-sans text-gray-600 leading-relaxed">
                <li>
                  <span className="font-bold text-[#04192F]">Gratuit :</span> test
                  d’orientation Jobmi, certaines journées écoles, certains
                  dispositifs d’immersion.
                </li>
                <li>
                  <span className="font-bold text-[#04192F]">Payant :</span>{' '}
                  certains ateliers privés ou formats encadrés.
                </li>
                <li>
                  <span className="font-bold text-[#04192F]">Toujours clair :</span>{' '}
                  les conditions sont précisées sur chaque fiche.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
{/* ── SE FAIRE AIDER LOCALEMENT ── */}
<section className="fade-up py-16 px-6 sm:px-10">
  <div className="max-w-4xl mx-auto">
    <div className="card-lift bg-[#F8F7FF] border border-gray-100 rounded-3xl p-8 sm:p-10">  
      <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-5">
        Se faire aider près de chez toi
      </h2>

      <div className="space-y-4 max-w-3xl">
        <p className="font-sans text-gray-600 text-lg leading-relaxed">
          Les Missions Locales accompagnent gratuitement les 16–25 ans dans leur projet professionnel. Elles peuvent t’aider à trouver des immersions, monter un dossier PMSMP ou repérer des formations adaptées à ta situation.
        </p>

        <p className="font-sans text-gray-600 text-lg leading-relaxed">
          Tu peux aussi en parler à ton conseiller France Travail ou à un autre organisme d’insertion si tu es déjà accompagné.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* ── COMMENT ÇA MARCHE ── */}
      <section className="fade-up py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-3">
            Comment ça marche sur Jobmi ?
          </h2>

          <p className="font-sans text-gray-500 text-lg mb-12 max-w-lg">
            On centralise des expériences partout en France — vérifiées, filtrées
            par métier et par ville.
          </p>

          <div className="grid sm:grid-cols-4 gap-0 overflow-hidden rounded-2xl border border-gray-100">
            {[
              {
                n: '01',
                titre: 'Passe le test',
                detail:
                  '15 min pour identifier les métiers qui te correspondent.',
                alt: false,
              },
              {
                n: '02',
                titre: 'Explore',
                detail: 'Filtre par métier, ville et format.',
                alt: true,
              },
              {
                n: '03',
                titre: "Inscris-toi",
                detail: 'Directement depuis la fiche, sans friction.',
                alt: false,
              },
              {
                n: '04',
                titre: 'Teste et décide',
                detail: 'Avec une expérience terrain. Pas une brochure.',
                alt: true,
              },
            ].map((step) => (
              <div
                key={step.n}
                className={`card-lift p-7 flex flex-col ${step.alt ? 'bg-[#F3F3F3]' : 'bg-white'}`}
              >
               <p className="font-sans text-4xl font-bold leading-none mb-4 text-[#6500FF]">
  {step.n}
</p>
                <p className="font-sans font-bold text-lg text-[#04192F]">
                  {step.titre}
                </p>
                <p className="font-sans text-sm mt-2 leading-relaxed text-gray-500">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/test"
              className="btn-lift font-sans inline-flex items-center gap-2 px-8 py-4 bg-[#04192F] text-white rounded-xl font-bold text-lg hover:bg-black transition"
            >
              Commencer par le test
              <img src="/media/cta-blog-arrow.svg" alt="" className="w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUI EST DERRIÈRE JOBMI ? ── */}
      <section className="fade-up py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#04192F] rounded-3xl p-8 sm:p-10 text-white">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl mb-5">
              Qui est derrière Jobmi ?
            </h2>

            <div className="font-sans text-white/70 text-lg leading-relaxed space-y-4 max-w-3xl">
              <p>
                Jobmi est né d’un constat simple : beaucoup de jeunes choisissent
                une voie sans avoir jamais pu tester la réalité du terrain.
                Résultat : doute, réorientation, perte de temps, perte d'argent et
                parfois perte de confiance.
              </p>
              <p>
                Notre objectif est de rendre l’orientation plus concrète, plus
                honnête et plus utile, en aidant chacun à découvrir un métier avant
                de s’y engager.
              </p>
              <p>
                On ne te vend pas une promesse abstraite : on t’aide à confronter
                une idée à la vraie vie.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/a-propos"
                className="btn-lift font-sans inline-flex items-center gap-2 px-6 py-3 bg-white text-[#04192F] rounded-xl font-bold hover:bg-gray-100 transition"
              >
                En savoir plus sur Jobmi
                <img src="/media/cta-blog-arrow.svg" alt="" className="w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES ── */}
      <section className="bg-[#6500FF] py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-up font-sans font-bold text-white text-3xl sm:text-4xl mb-12">
            Ils ont testé avant de choisir
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {temoignages.map((t) => (
              <div
                key={t.auteur}
                className="card-lift bg-white rounded-2xl p-7 flex flex-col gap-5"
              >
                <p className="font-sans text-[#04192F] leading-relaxed italic text-sm">
                  "{t.texte}"
                </p>
                <p className="font-sans text-sm font-bold text-[#6500FF] mt-auto">
                  — {t.auteur}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VILLES ── */}
      <section className="fade-up py-16 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F8F7FF] border border-[#E9E1FF] rounded-3xl p-8 sm:p-10">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] mb-5">
              Expériences disponibles près de chez toi
            </h2>

            <p className="font-sans text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
              Tu veux tester un métier près de chez toi ? Découvre les ateliers,
              stages d’observation, PMSMP et journées découvertes dans ta ville.
            </p>

            <div className="flex flex-wrap gap-3">
              {villes.map((v) => (
                <Link
                  key={v.slug}
                  href={`/metiers/${v.slug}`}
                  className="btn-lift font-sans px-5 py-2.5 border-2 border-[#04192F] text-[#04192F] rounded-full font-semibold hover:bg-[#04192F] hover:text-white transition duration-200 text-sm"
                >
                  {v.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F3F3F3] py-20 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="fade-up font-sans font-bold text-3xl mb-10 text-[#04192F]">
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
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-[#04192F] mb-4">
            Prêt·e à tester ?
          </h2>

          <p className="font-sans text-gray-400 mb-10 text-lg">
            Commence par le test d'orientation — gratuit, 15 minutes, résultats
            personnalisés.
          </p>

          <Link
            href="/test"
            className="btn-lift cta-breathe font-sans inline-flex items-center gap-3 px-10 py-5 bg-[#04192F] text-white rounded-xl font-bold text-xl hover:bg-black transition"
          >
            Passer le test gratuit
            <img src="/media/cta-blog-arrow.svg" alt="" className="w-6" />
          </Link>
        </div>
      </section>
    </>
  );
}