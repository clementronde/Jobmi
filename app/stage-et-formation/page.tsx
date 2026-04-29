import type { Metadata } from 'next';
import Link from 'next/link';
import { InternalLinksSection } from '../../components/InternalLinksSection';
import { getInternalLinksForContext } from '../../data/internalLinks';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/stage-et-formation`;
const WAITINGLIST_URL =
  'https://626063d8.sibforms.com/serve/MUIFACI_ugihEQiP7m7SmyLz7QszuC5wEK0W_nn2cHLbezW92oq3Gi_M7-5mIHV3oA9bk8VpaPa5q5OmsC4xxwhAAIDAz5LafA4Of6WYGOVAYgPggEk5SH6YYlarS5QAKTm_pucc1dXASOy6scm8cBdqdnUuW0Ms3FUJBfgzGv9XucQ_FwwJIFFVrEDqaJu_1batPvIPyrYuxn4K';

export const metadata: Metadata = {
  title: "Stages et immersions pour les 18–25 ans | Tester un métier",
  description:
    "Stages d'observation, PMSMP, immersions métier, alternance : compare les formats pour tester un métier et choisir une formation utile quand tu as 18–25 ans.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: "Stages et immersions pour les 18–25 ans | Jobmi",
    description:
      "Jobmi prépare ses premières immersions avec des entreprises partenaires. En attendant, explore les secteurs et les bonnes étapes pour tester un métier.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Stages et immersions métier | Jobmi",
    description:
      "Explore les formats d'immersion et les pistes de formation pour choisir avec plus de concret.",
  },
};

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: 'Immersions métier et pistes de formation | Jobmi',
  description:
    "Ressources pour découvrir les secteurs, préparer une immersion métier et choisir une formation avec plus de concret.",
  isPartOf: { '@id': `${BASE_URL}/#website` },
  inLanguage: 'fr-FR',
};

const jobPostingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Exemples de stages, immersions et formations à préparer',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'JobPosting',
        title: "Stage d'observation développeur web",
        description:
          "Découverte du quotidien d'une équipe produit : observation des rituels, compréhension des missions d'un développeur web junior et préparation des questions à poser avant une formation tech.",
        employmentType: 'INTERN',
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Paris',
            addressCountry: 'FR',
          },
        },
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Jobmi',
          sameAs: BASE_URL,
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'JobPosting',
        title: 'Immersion métier santé-social',
        description:
          "Observation encadrée d'un environnement santé ou social pour vérifier le rythme, la relation humaine et les contraintes avant de viser une formation longue.",
        employmentType: 'INTERN',
        jobLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lyon',
            addressCountry: 'FR',
          },
        },
        hiringOrganization: {
          '@type': 'Organization',
          name: 'Jobmi',
          sameAs: BASE_URL,
        },
      },
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Comment savoir si j’ai besoin d’une immersion avant de choisir une formation ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Si tu hésites encore sur le métier visé, une immersion est souvent plus utile qu’une inscription précipitée. Elle te permet de vérifier le quotidien réel du secteur, le rythme, les contraintes et l’ambiance de travail. Tu n’as pas besoin d’attendre d’être sûr à 100 % pour tester ; au contraire, c’est souvent le terrain qui clarifie les choses. Quand une voie reste floue, mieux vaut observer d’abord que signer trop vite.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle différence entre une immersion, un stage d’observation et une formation ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une immersion ou un stage d’observation sert surtout à découvrir un métier et à voir si tu peux t’y projeter. Une formation, elle, te fait monter en compétences pour accéder réellement au secteur. Les deux ne répondent donc pas au même besoin. En général, commencer par une expérience terrain réduit beaucoup le risque de choisir une mauvaise formation.",
      },
    },
    {
      '@type': 'Question',
      name: "Est-ce que je peux trouver une immersion même si je n’ai pas encore d’idée précise ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, mais il vaut mieux réduire un minimum le champ avant de chercher. Tu n’as pas besoin d’avoir un métier exact en tête, mais au moins une famille de métiers ou un environnement de travail qui t’attire. Sinon, tu risques de chercher dans tous les sens et de perdre du temps. Le bon point de départ est souvent de clarifier ton profil, puis de tester 1 ou 2 pistes réalistes.",
      },
    },
    {
      '@type': 'Question',
      name: "Comment financer une formation quand on est jeune et qu’on n’a pas beaucoup de moyens ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tout dépend de ta situation, mais plusieurs options existent : alternance, CPF si tu as déjà travaillé, aides régionales, Missions Locales, ou accompagnement France Travail dans certains cas. Le plus important est de comparer les formats avant de t’engager. Une formation finançable n’est pas forcément la plus adaptée. Vérifie toujours qu’elle correspond vraiment au métier que tu veux viser.",
      },
    },
    {
      '@type': 'Question',
      name: "Faut-il choisir une formation courte ou des études plus longues ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Il n’y a pas de bonne réponse universelle. Certains métiers demandent un parcours long et réglementé, d’autres sont accessibles via l’alternance, un BTS, un CAP, un titre pro ou une formation courte. Le bon critère n’est pas la durée seule, mais l’écart entre ton point de départ et le métier visé. Avant de repartir pour plusieurs années, vérifie s’il existe une voie plus concrète et plus progressive.",
      },
    },
    {
      '@type': 'Question',
      name: "Est-ce que je dois m’inscrire tout de suite dans une formation pour ne pas perdre de temps ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pas forcément. Quelques semaines ou quelques mois de clarification valent souvent mieux qu’une orientation subie pendant un ou deux ans. Si tu peux, prends d’abord le temps de comprendre ton profil, de comparer plusieurs pistes et de tester un métier sur le terrain. Tu avanceras ensuite avec un projet plus solide et beaucoup moins de regrets.",
      },
    },
  ],
};

const sectorCards = [
  {
    title: 'Tech & data',
    description:
      "Observer le quotidien d'un dev, d'un data analyst ou d'un profil cybersécurité pour comprendre les missions réelles derrière les intitulés.",
    jobs: ['Développeur web', 'Data analyst', 'Cybersécurité'],
  },
  {
    title: 'Santé & social',
    description:
      "Découvrir la relation avec les patients, le rythme d'équipe et la dimension humaine avant de s'engager dans une voie exigeante.",
    jobs: ['Infirmier', 'Psychologue', 'Assistant social'],
  },
  {
    title: 'Création & communication',
    description:
      "Voir comment une idée devient une campagne, une interface ou un contenu concret dans une équipe créative.",
    jobs: ['UX/UI designer', 'Graphiste', 'Community manager'],
  },
  {
    title: 'Commerce & marketing',
    description:
      "Comprendre la vente, la relation client, l'analyse de marché et la gestion de projet au contact d'une équipe business.",
    jobs: ['Commercial', 'Chef de projet', 'Responsable marketing'],
  },
  {
    title: 'Artisanat & terrain',
    description:
      "Tester des métiers concrets où le geste, l'environnement et la réalité physique du travail comptent autant que la formation.",
    jobs: ['Menuisier', 'Électricien', 'Technicien'],
  },
  {
    title: 'Environnement & impact',
    description:
      "Explorer les métiers qui mêlent terrain, analyse et transition écologique pour vérifier si le quotidien correspond à tes valeurs.",
    jobs: ['Écologue', 'Paysagiste', 'RSE'],
  },
];

const steps = [
  {
    title: "1. Clarifie ton profil",
    text: "Commence par identifier tes intérêts, tes forces et les environnements dans lesquels tu te projettes le mieux.",
  },
  {
    title: "2. Explore les métiers",
    text: "Compare plusieurs pistes avant de te fixer sur une formation : missions, rythme, contraintes, débouchés.",
  },
  {
    title: "3. Passe au concret",
    text: "Quand les premières immersions Jobmi seront disponibles, tu pourras tester une voie sur le terrain avant de t'engager.",
  },
];

const formats = [
  {
    title: "Stage d'observation",
    text:
      "Utile si tu veux regarder le quotidien d'un métier sans encore t'engager. Tu observes les missions, le rythme, l'ambiance et les contraintes concrètes.",
    bestFor: 'Première exploration',
  },
  {
    title: 'PMSMP',
    text:
      "Un cadre officiel pour tester une piste professionnelle avec une structure d'accueil, souvent via Mission Locale ou France Travail.",
    bestFor: 'Reconversion ou insertion',
  },
  {
    title: 'Alternance',
    text:
      "Tu te formes en travaillant. C'est pertinent quand ton projet est déjà assez clair et que tu veux apprendre un métier avec une vraie expérience.",
    bestFor: 'Projet déjà ciblé',
  },
  {
    title: 'Formation courte',
    text:
      "Bootcamp, titre pro, CAP, certificat : à comparer seulement après avoir vérifié que le métier visé correspond vraiment à ton profil.",
    bestFor: 'Montée en compétences',
  },
];

const sampleOpportunities = [
  {
    title: "Stage d'observation développeur web",
    href: '/immersions/stage-observation-developpeur-web-paris',
    city: 'Paris',
    level: 'Débutant accepté',
    targetJob: 'Développeur web junior',
    missions: 'Observer les rituels produit, comprendre les tickets, poser tes questions à une équipe tech.',
  },
  {
    title: 'Immersion santé-social',
    href: '/immersions/immersion-sante-social-lyon',
    city: 'Lyon',
    level: 'Projet à clarifier',
    targetJob: 'Infirmier, éducateur spécialisé, assistant social',
    missions: "Découvrir la relation d'aide, le rythme d'équipe et les contraintes humaines du terrain.",
  },
  {
    title: 'Atelier métiers créatifs',
    href: '/immersions/atelier-ux-design-en-ligne',
    city: 'En ligne / hybride',
    level: 'Curieux ou débutant',
    targetJob: 'UX designer, graphiste, content manager',
    missions: 'Comprendre un brief, voir un portfolio, comparer formation longue et parcours projet.',
  },
];

export default function StageEtFormation() {
  const internalLinks = getInternalLinksForContext('formation', '/stage-et-formation');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />

      <div className="mt-[120px] font-sans">
        <section className="mx-auto max-w-screen-xl px-6 pb-12 pt-4 sm:px-10">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#6500FF]">
              Immersions bientôt disponibles
            </p>
            <h1 className="text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-6xl">
              Stages et immersions pour tester un métier avant ta formation
            </h1>
          <img
            src="/media/home-temoignage-soulignage-titre.svg"
            alt="Trait soulignant le titre"
              className="mx-auto mt-3"
          />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Jobmi construit son réseau d'entreprises partenaires pour les
              18–25 ans. En attendant les premières immersions, compare les
              formats utiles : stage d'observation, PMSMP, alternance, formation
              courte et ateliers métier. Si tu pars encore de trop loin, le plus
              simple est souvent de{' '}
              <Link
                href="/test"
                className="font-semibold text-[#6500FF] underline underline-offset-4"
              >
                commencer par le test d’orientation
              </Link>{' '}
              pour clarifier la direction avant de chercher une immersion.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WAITINGLIST_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#6500FF] px-6 py-3 font-bold text-white shadow-[0_14px_30px_rgba(101,0,255,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5200cc] sm:w-fit"
              >
                Être prévenu des premières immersions
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-[#04192F] px-6 py-3 font-semibold text-[#04192F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#04192F] hover:text-white sm:w-fit"
              >
                Je suis une entreprise
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 py-14 sm:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#6500FF]">
              Les formats possibles
            </p>
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Stage, PMSMP, alternance : à quoi sert chaque option ?
            </h2>
            <p className="mt-4 text-gray-600">
              Tous les formats ne répondent pas au même besoin. L'enjeu est de
              choisir le bon niveau d'engagement selon ton degré de clarté.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {formats.map((format) => (
              <article
                key={format.title}
                className="rounded-lg border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
              >
                <p className="mb-3 inline-flex rounded-full bg-[#6500FF]/8 px-3 py-1 text-xs font-bold text-[#6500FF]">
                  {format.bestFor}
                </p>
                <h3 className="text-xl font-bold text-[#04192F]">{format.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{format.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#F7F6FF] px-6 py-14 sm:px-10">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-8 max-w-2xl">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#6500FF]">
                Secteurs à explorer
              </p>
              <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
                Des pistes concrètes, sans fausses promesses
              </h2>
              <p className="mt-4 text-gray-600">
                Pas de catalogue d'offres périmées : ces cartes servent à
                comprendre ce que tu pourrais observer pendant une immersion.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {sectorCards.map((sector) => (
                <article
                  key={sector.title}
                  className="rounded-lg border border-[#04192F]/8 bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(101,0,255,0.12)]"
                >
                  <h3 className="text-xl font-bold text-[#04192F]">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {sector.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {sector.jobs.map((job) => (
                      <span
                        key={job}
                        className="rounded-full bg-[#6500FF]/8 px-3 py-1 text-xs font-semibold text-[#6500FF]"
                      >
                        {job}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 py-16 sm:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#6500FF]">
              Exemples de fiches à préparer
            </p>
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Des opportunités lisibles par métier, niveau et ville
            </h2>
            <p className="mt-4 text-gray-600">
              Les premières fiches détaillées pourront être indexées quand les
              offres seront confirmées. Pour l'instant, voici le niveau
              d'information que Jobmi veut rendre clair avant toute candidature.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {sampleOpportunities.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
              >
                <h3 className="text-xl font-bold text-[#04192F]">{item.title}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="font-bold text-[#04192F]">Ville</dt>
                    <dd>{item.city}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#04192F]">Niveau</dt>
                    <dd>{item.level}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#04192F]">Métier visé</dt>
                    <dd>{item.targetJob}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#04192F]">Ce que tu peux vérifier</dt>
                    <dd>{item.missions}</dd>
                  </div>
                </dl>
                <p className="mt-5 text-sm font-bold text-[#6500FF]">
                  Voir la fiche <span aria-hidden="true">→</span>
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-screen-xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#6500FF]">
              Que faire maintenant ?
            </p>
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Avance par étapes, pas par pression
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Même sans offre disponible aujourd'hui, tu peux déjà réduire le
              flou : comprendre ton profil, explorer plusieurs métiers et
              préparer une immersion utile. Et si tu veux d’abord voir comment
              on confronte une idée à la réalité, tu peux aussi{' '}
              <Link
                href="/tester-un-metier"
                className="font-semibold text-[#6500FF] underline underline-offset-4"
              >
                tester un métier sur le terrain
              </Link>{' '}
              avant de choisir une formation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Tu peux aussi{' '}
              <Link
                href="/evenements-orientation"
                className="font-semibold text-[#6500FF] underline underline-offset-4"
              >
                consulter la carte des événements d’orientation Jobmi
              </Link>{' '}
              pour repérer des salons, journées portes ouvertes et forums utiles avant de
              sélectionner une formation.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/test"
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#04192F] px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6500FF] sm:w-fit"
              >
                Passer le test gratuit
              </Link>
              <Link
                href="/tester-un-metier"
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-[#04192F] px-6 py-3 font-semibold text-[#04192F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#04192F] hover:text-white sm:w-fit"
              >
                Voir les formats d'immersion
              </Link>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-500">
              Et si ton vrai frein, c&apos;est la peur d&apos;avoir déjà pris du retard, prends
              2 minutes pour ouvrir{' '}
              <Link
                href="/outil/temps-devant-toi"
                className="font-semibold text-[#6500FF] underline underline-offset-4"
              >
                l&apos;outil qui remet ton timing à l&apos;échelle
              </Link>
              .
            </p>
          </div>
          <div className="grid gap-4">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
              >
                <h3 className="text-lg font-bold text-[#04192F]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-screen-xl px-6 pb-8 sm:px-10">
          <div className="grid overflow-hidden rounded-2xl bg-[#04192F] text-white lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#a29bfe]">
                Entreprises partenaires
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Vous pouvez faire découvrir un métier ?
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/75">
                Jobmi recherche des entreprises, associations et professionnels
                prêts à accueillir des jeunes pour une découverte métier claire,
                courte et encadrée.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-[#04192F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a29bfe]"
              >
                Proposer une immersion
              </Link>
            </div>
            <div className="min-h-[260px] bg-[url('/media/group_people.png')] bg-cover bg-center" />
          </div>
        </section>

        <InternalLinksSection
          className="bg-[#F8F7FF]"
          eyebrow="Formation & financement"
          title="Guides utiles avant de choisir une formation"
          description="Un bon parcours commence par une piste claire, puis un format réaliste : alternance, CPF, formation courte ou immersion."
          links={internalLinks}
        />

        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="font-bold text-2xl text-[#04192F] mb-4">
            Pourquoi tester un métier avant de choisir une formation ?
          </h2>
          <div className="text-gray-600 space-y-4 text-base leading-relaxed max-w-3xl">
            <p>
              Choisir une formation sans avoir jamais vu le métier, c'est
              prendre un risque inutile. Une immersion courte te permet de
              découvrir le quotidien réel d'un secteur : les missions, le
              rythme, les contraintes et ce qui te plaît vraiment ou pas. Si tu
              hésites encore entre plusieurs pistes, commence par{' '}
              <Link
                href="/test"
                className="font-semibold text-[#6500FF] underline underline-offset-4"
              >
                le test d’orientation Jobmi
              </Link>{' '}
              avant de regarder les formats de formation.
            </p>
            <p>
              Que tu hésites entre la tech, la santé, le design ou le
              marketing, une expérience terrain est souvent ce qui fait la
              différence entre une bonne orientation et une réorientation
              subie deux ans plus tard. Pour comparer les options concrètes,
              tu peux aussi lire notre guide{' '}
              <Link
                href="/blog/alternance-ou-formation-continue-que-choisir"
                className="font-semibold text-[#6500FF] underline underline-offset-4"
              >
                alternance ou formation continue
              </Link>{' '}
              si tu veux choisir un format adapté à ta situation.
            </p>
            <p>
              Si tu ne sais pas encore vers quel secteur t'orienter, commence
              par le test d'orientation Jobmi — il t'aide à identifier les
              familles de métiers qui correspondent à ton profil avant de passer
              au terrain. Et si la question du budget te freine déjà, tu peux
              consulter aussi notre article sur{' '}
              <Link
                href="/blog/financer-sa-formation-sans-cpf"
                className="font-semibold text-[#6500FF] underline underline-offset-4"
              >
                le financement d’une formation sans CPF
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="bg-[#F3F3F3] px-6 py-16 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-3xl">
              <h2 className="font-bold text-2xl text-[#04192F] mb-8 sm:text-3xl">
                Questions fréquentes sur les immersions et les formations
              </h2>

              <div className="space-y-3">
                {faqJsonLd.mainEntity.map((item) => (
                  <details
                    key={item.name}
                    className="group rounded-2xl bg-white overflow-hidden shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
                  >
                    <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-[#04192F] transition hover:bg-gray-50 sm:px-7">
                      <div className="flex items-center justify-between gap-4">
                        <span>{item.name}</span>
                        <span className="text-xl font-bold text-[#6500FF] transition-transform duration-300 group-open:rotate-45">
                          +
                        </span>
                      </div>
                    </summary>
                    <p className="border-t border-gray-100 px-6 py-5 leading-relaxed text-gray-600 sm:px-7">
                      {item.acceptedAnswer.text}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
