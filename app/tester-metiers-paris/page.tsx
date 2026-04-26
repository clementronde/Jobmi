import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = 'https://jobmi.fr';
const PAGE_URL = `${BASE_URL}/tester-metiers-paris`;

export const metadata: Metadata = {
  title: 'Tester des métiers à Paris quand tu as 18–25 ans',
  description:
    "Découvre comment tester des métiers à Paris quand tu as 18–25 ans : ateliers, PMSMP, stages d’observation, journées d’immersion en école, et accompagnement par Jobmi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Tester des métiers à Paris quand tu as 18–25 ans | Jobmi',
    description:
      "Découvre comment tester des métiers à Paris quand tu as 18–25 ans : ateliers, PMSMP, stages d’observation, journées d’immersion en école, et accompagnement par Jobmi.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tester des métiers à Paris quand tu as 18–25 ans | Jobmi',
    description:
      "Découvre comment tester des métiers à Paris quand tu as 18–25 ans : ateliers, PMSMP, stages d’observation, journées d’immersion en école, et accompagnement par Jobmi.",
  },
};

const faqItems = [
  {
    question: 'Est-ce que je peux tester un métier à Paris si j’habite en banlieue ?',
    answer:
      "Oui, bien sûr. Beaucoup de jeunes se déplacent entre Paris et la petite ou grande couronne pour un stage d’observation, une PMSMP, une journée d’immersion ou un atelier. Le plus important n’est pas ton code postal exact, mais de viser une zone accessible pour toi en transport et compatible avec ton rythme. Si tu hésites entre plusieurs secteurs, commence par choisir 1 ou 2 pistes réalistes avant de multiplier les demandes.",
  },
  {
    question: 'Je n’ai aucun contact à Paris, est-ce grave pour trouver une immersion ?',
    answer:
      "Non. Le réseau aide, mais il n’est pas obligatoire pour commencer. Tu peux passer par les Missions Locales, France Travail selon ta situation, ton établissement, ou contacter directement des structures ciblées avec une demande simple et sérieuse. À Paris, il existe beaucoup d’entreprises, d’associations, d’écoles et de lieux professionnels : le vrai enjeu est surtout de savoir quoi demander et à qui.",
  },
  {
    question: 'Est-ce que toutes les PMSMP sont payées à Paris ?',
    answer:
      "Non. Une PMSMP n’est pas un contrat de travail classique. Selon ta situation, tu peux conserver certaines aides ou allocations, mais tu n’es pas rémunéré comme un salarié juste parce que l’immersion a lieu à Paris. Il faut toujours vérifier ce point avec l’organisme qui t’accompagne avant de t’engager.",
  },
  {
    question: 'Combien de temps dure une immersion, une PMSMP ou un stage d’observation ?',
    answer:
      "Cela dépend du format. Un atelier peut durer quelques heures, une journée d’immersion en école une demi-journée ou une journée, un stage d’observation quelques jours, et une PMSMP peut aller d’un jour à un mois selon France Travail. La bonne durée dépend surtout de ton objectif : découvrir vite, confirmer une piste ou observer un vrai quotidien de travail.",
  },
  {
    question: 'Que faire si une entreprise parisienne refuse ma demande ?',
    answer:
      "Ça fait partie du jeu, et ce n’est pas forcément un signal contre ton projet. Reformule ta demande, raccourcis ton message, cible mieux les structures, ou passe par un relais comme la Mission Locale, France Travail ou ton établissement. À Paris, il y a beaucoup d’options, donc mieux vaut ajuster ta stratégie que te bloquer sur un seul refus.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const formats = [
  {
    title: 'Ateliers découverte métiers',
    text:
      "À Paris, tu peux croiser des formats très courts organisés par des écoles, des ateliers, des structures culturelles ou des professionnels indépendants. Le but n’est pas de “maîtriser” un métier en une journée, mais de manipuler, poser des questions et voir si l’univers te parle vraiment.",
  },
  {
    title: 'PMSMP : immersion professionnelle encadrée',
    text:
      "La PMSMP est une période de mise en situation en milieu professionnel. C’est un dispositif officiel encadré notamment par France Travail et les Missions Locales, utile pour observer un métier en conditions réelles. Ce format existe aussi à Paris et en Île-de-France, avec un vrai intérêt quand tu veux confirmer une piste avant une formation ou une reconversion.",
  },
  {
    title: 'Stages d’observation et mini-stages',
    text:
      "Pour les collégiens, lycéens ou jeunes en poursuite d’études, les stages d’observation restent une porte d’entrée très concrète. Dans l’académie de Paris comme ailleurs, ces périodes sont encadrées par une convention et un cadre scolaire ou de formation. Elles sont très utiles pour découvrir le quotidien d’un secteur sans t’engager trop vite.",
  },
  {
    title: 'Journées d’immersion en école et portes ouvertes',
    text:
      "Beaucoup d’écoles parisiennes organisent des portes ouvertes, cours d’essai, demi-journées d’immersion ou échanges avec des étudiants. C’est un bon format si tu veux tester à la fois un métier et l’environnement de formation qui y mène, notamment en santé, social, design, digital ou communication.",
  },
];

const sectors = [
  {
    title: 'Métiers du digital & de la tech',
    text:
      "Paris concentre beaucoup d’agences, de start-up, de scale-up et d’équipes produit. Si tu veux découvrir le développement web, l’UX/UI, la data, le marketing digital ou des métiers plus hybrides, tu trouveras plus facilement des environnements variés pour comparer les réalités de terrain.",
  },
  {
    title: 'Métiers de la santé & du social',
    text:
      "Hôpitaux, cliniques, associations, structures médico-sociales, établissements d’accueil : le territoire parisien permet de voir des contextes très différents. C’est précieux si tu veux tester le rapport au public, le rythme, la charge émotionnelle ou l’esprit d’équipe avant de t’engager dans une voie exigeante.",
  },
  {
    title: 'Métiers de l’artisanat, de la restauration & de la culture',
    text:
      "Entre ateliers, restaurants, lieux culturels, compagnies, musées ou structures événementielles, Paris offre aussi beaucoup d’occasions de confronter une envie très “créative” ou très concrète à la réalité. C’est souvent là qu’on réalise si on aime vraiment le geste, les horaires ou l’intensité du secteur.",
  },
];

export default function TesterMetiersParisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-[90px] font-sans">
        <section className="border-b border-gray-100 bg-[#F7F7F8]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-5xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#6500FF]">
                Ateliers, immersions, PMSMP et stages d’observation à Paris
              </p>
              <h1 className="text-[2.8rem] font-bold leading-[0.96] text-[#04192F] sm:text-[4rem] lg:text-[5rem]">
                Tester des métiers à Paris quand tu as 18–25 ans
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                Paris est l’un des meilleurs endroits pour explorer des métiers
                quand tu hésites encore sur ta voie. Digital, santé, social,
                commerce, culture, artisanat, restauration : tu peux y croiser
                beaucoup d’environnements professionnels différents. L’objectif
                n’est pas de collectionner des idées sur le papier, mais de voir
                la réalité d’un métier avant de choisir une formation, une
                alternance ou une reconversion.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/test"
                  className="inline-flex w-fit items-center justify-center rounded-2xl bg-[#6500FF] px-7 py-4 font-bold text-white transition hover:bg-[#5200cc]"
                >
                  Commencer par le test Jobmi
                </Link>
                <Link
                  href="/tester-un-metier"
                  className="inline-flex w-fit items-center justify-center rounded-2xl border-2 border-[#04192F] px-7 py-4 font-semibold text-[#04192F] transition hover:bg-[#04192F] hover:text-white"
                >
                  Voir les autres formats
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Pourquoi tester un métier à Paris avant de te lancer ?
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                Paris donne accès à beaucoup d’opportunités, mais c’est justement
                ce qui peut devenir piégeux. Quand tu vois beaucoup d’écoles,
                d’intitulés de postes, d’influenceurs métier ou de formations,
                tu peux vite te construire une image très séduisante d’un
                secteur… sans connaître son quotidien réel.
              </p>
              <p>
                Tester un métier avant de t’engager permet de vérifier trois
                choses essentielles : le rythme, l’ambiance et la réalité des
                tâches. Tu peux aimer l’idée de travailler dans la santé, le
                digital ou la culture, mais découvrir sur le terrain que le
                niveau de pression, le contact humain ou l’organisation du
                travail ne te correspondent pas autant que prévu.
              </p>
              <p>
                C’est particulièrement utile si tu es post-bac, en réorientation
                ou en début de{' '}
                <Link
                  href="/reconversion"
                  className="font-semibold text-[#6500FF] underline underline-offset-4"
                >
                  reconversion à 20 ans
                </Link>
                . Mieux vaut quelques jours d’observation ou une immersion bien
                choisie que plusieurs mois dans une formation mal ciblée.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F7F6FF] px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-screen-xl">
            <div className="mb-8 max-w-3xl">
              <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
                Les formats pour tester un métier à Paris
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Tous les formats ne demandent pas le même niveau de préparation.
                Certains servent à découvrir vite, d’autres à confirmer un vrai
                projet avant une formation ou une alternance.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {formats.map((format) => (
                <article
                  key={format.title}
                  className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
                >
                  <h3 className="text-xl font-bold text-[#04192F]">
                    {format.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    {format.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Comment t’y prendre concrètement à Paris ?
            </h2>

            <div className="mt-10 space-y-8">
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_12px_30px_rgba(4,25,47,0.04)]">
                <h3 className="text-2xl font-bold text-[#04192F]">
                  1. Clarifier ce que tu veux tester
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Avant de chercher une immersion à Paris, essaie d’identifier
                  1 ou 2 familles de métiers maximum. Si tu pars dans tous les
                  sens, tu risques de contacter des structures qui n’ont rien à
                  voir entre elles et d’obtenir très peu de réponses utiles.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Le plus simple est souvent de commencer par le{' '}
                  <Link
                    href="/test"
                    className="font-semibold text-[#6500FF] underline underline-offset-4"
                  >
                    test d’orientation Jobmi
                  </Link>{' '}
                  pour faire ressortir un environnement qui te correspond :
                  hôpital, start-up, association, atelier, commerce, école,
                  structure culturelle…
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_12px_30px_rgba(4,25,47,0.04)]">
                <h3 className="text-2xl font-bold text-[#04192F]">
                  2. Activer les bons relais locaux
                </h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-gray-600">
                  <p>
                    Pour les 16–25 ans, les{' '}
                    <a
                      href="https://www.missionslocales.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#6500FF] underline underline-offset-4"
                    >
                      Missions Locales
                    </a>{' '}
                    sont souvent le relais le plus utile pour avancer
                    concrètement. Elles peuvent t’aider à cadrer ton projet, te
                    parler des formats existants et t’orienter vers une
                    immersion, notamment si tu es encore en recherche de
                    direction.
                  </p>
                  <p>
                    Si tu es demandeur d’emploi, regarde aussi la page de{' '}
                    <a
                      href="https://www.francetravail.fr/candidat/votre-projet-professionnel/definir-votre-projet-professionn/realiser-une-immersion-professionnelle-en-entreprise.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#6500FF] underline underline-offset-4"
                    >
                      France Travail sur l’immersion professionnelle / PMSMP
                    </a>
                    . C’est le bon point de départ pour comprendre le cadre
                    officiel et les étapes.
                  </p>
                  <p>
                    Pour les stages d’observation liés au collège, au lycée ou à
                    certaines formations, ton établissement reste un interlocuteur
                    important. Le ministère rappelle le cadre général de la{' '}
                    <a
                      href="https://www.education.gouv.fr/la-decouverte-des-metiers-au-college-de-la-classe-de-cinquieme-la-classe-de-troisieme-378233"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#6500FF] underline underline-offset-4"
                    >
                      découverte des métiers et des périodes d’observation
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_12px_30px_rgba(4,25,47,0.04)]">
                <h3 className="text-2xl font-bold text-[#04192F]">
                  3. Chercher des pistes par toi-même à Paris
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Liste des structures cohérentes avec ton idée : PME,
                  associations, cabinets, ateliers, restaurants, cliniques,
                  hôpitaux, agences, écoles, lieux culturels. Ensuite, regarde
                  leur site, leurs réseaux sociaux et essaie de comprendre ce
                  qu’elles font vraiment au quotidien avant d’écrire.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Ton message doit rester simple : qui tu es, le métier que tu
                  veux découvrir, la durée envisagée et ton objectif. Si tu
                  veux voir un exemple d’acteur public qui encourage cette
                  logique d’expérimentation terrain, tu peux aussi jeter un œil
                  à cette ressource de la{' '}
                  <a
                    href="https://www.paysdelaloire.fr/jeunesse-et-orientation/mon-orientation/jexperimente/je-trouve-un-stage-je-decouvre-le-monde-de-lentreprise-et-ses-metiers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#6500FF] underline underline-offset-4"
                  >
                    Région Pays de la Loire sur les stages et la découverte des
                    métiers
                  </a>
                  .
                </p>
                <div className="mt-5 rounded-2xl bg-[#F7F6FF] p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#6500FF]">
                    Modèle de message
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    Bonjour, je suis en réflexion sur mon orientation et je
                    cherche à découvrir concrètement le métier de [métier]. Je
                    voudrais savoir si votre structure pourrait envisager une
                    courte immersion ou un temps d’observation pour m’aider à
                    confirmer mon projet avant de choisir une formation. Merci
                    pour votre retour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#04192F] px-6 py-20 text-white sm:px-10">
          <div className="mx-auto max-w-screen-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Exemples de secteurs à tester à Paris
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {sectors.map((sector) => (
                <article
                  key={sector.title}
                  className="rounded-2xl bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold text-white">{sector.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/70">
                    {sector.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              Comment Jobmi t’aide à tester des métiers à Paris
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                Jobmi t’aide d’abord à clarifier ton profil. Avant de contacter
                une entreprise, une Mission Locale ou une école, il est beaucoup
                plus simple d’avancer avec 1 ou 2 familles de métiers bien
                identifiées qu’avec une envie encore trop floue.
              </p>
              <p>
                Ensuite, on t’aide à comprendre{' '}
                <Link
                  href="/tester-un-metier"
                  className="font-semibold text-[#6500FF] underline underline-offset-4"
                >
                  les autres façons de tester un métier
                </Link>{' '}
                et à comparer{' '}
                <Link
                  href="/stage-et-formation"
                  className="font-semibold text-[#6500FF] underline underline-offset-4"
                >
                  les formats d’immersions et de formations
                </Link>
                . L’idée, ce n’est pas d’accumuler des options, mais de choisir
                le bon format au bon moment selon ta situation.
              </p>
              <p>
                En pratique, le but est que tu arrives en Mission Locale, chez
                France Travail ou dans une structure parisienne avec un projet
                déjà un peu cadré. Le meilleur point de départ reste souvent le{' '}
                <Link
                  href="/test"
                  className="font-semibold text-[#6500FF] underline underline-offset-4"
                >
                  test d’orientation Jobmi
                </Link>
                .
              </p>
              <p>
                Et si tu sens que ton vrai blocage, ce n&apos;est pas Paris mais le
                sentiment d&apos;être déjà “en retard”, prends deux minutes pour ouvrir{' '}
                <Link
                  href="/outil/temps-devant-toi"
                  className="font-semibold text-[#6500FF] underline underline-offset-4"
                >
                  l&apos;outil qui visualise le temps qu&apos;il te reste vraiment
                </Link>
                . Ça aide souvent à redescendre la pression avant de faire le premier pas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F3F3F3] px-6 py-20 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
                Questions fréquentes sur le fait de tester des métiers à Paris
              </h2>
              <div className="mt-10 space-y-3">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group overflow-hidden rounded-2xl bg-white shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-7 py-5 font-semibold text-[#04192F] transition hover:bg-gray-50">
                      <span>{item.question}</span>
                      <span className="text-xl font-bold text-[#6500FF] transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="border-t border-gray-100 px-7 py-5 leading-relaxed text-gray-600">
                      {item.answer}
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
