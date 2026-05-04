export type GeoPage = {
  slug: string;
  city: string;
  kind: 'orientation' | 'tester' | 'salons';
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  reasons: string[];
  steps: Array<{ title: string; text: string }>;
  localAngles: Array<{ title: string; text: string }>;
  faq?: Array<{ question: string; answer: string }>;
  primaryHref: string;
  primaryCta: string;
  secondaryHref: string;
  secondaryCta: string;
  finalCtaSubtext?: string;
};

export const geoPages: GeoPage[] = [
  {
    slug: 'orientation-paris',
    city: 'Paris',
    kind: 'orientation',
    title: "Orientation à Paris pour les 18–25 ans | Salons, tests et immersions",
    description:
      "Guide local pour avancer dans ton orientation à Paris : test d'orientation, salons étudiants, JPO, ateliers métiers, stages et immersions.",
    eyebrow: 'Orientation locale · Paris',
    h1: 'Orientation à Paris : comment avancer quand tu as 18–25 ans',
    intro:
      "Paris concentre des facs, BTS, BUT, grandes écoles, centres de formation, salons, ateliers, Missions Locales et entreprises qui recrutent. C’est une chance énorme pour tester des voies différentes… mais aussi un piège si tu t’épuises à tout comparer sans méthode. Cette page te donne un plan simple pour utiliser Paris comme tremplin, pas comme source de stress.",
    reasons: [
      "Tu peux comparer, en vrai, fac, BTS, BUT, écoles spécialisées et alternance en quelques semaines, notamment autour des grands campus et des salons porte de Versailles ou à La Villette.",
      "Les salons, journées portes ouvertes et forums alternance te mettent en contact direct avec des étudiants, des pros et des admissions, sans passer par des brochures de 50 pages.",
      "Les immersions (PMSMP, stages d’observation, journées découverte) dans les entreprises et associations parisiennes te permettent de vérifier un métier avant d’engager du temps ou de l’argent dans une formation.",
      "Les structures locales (Missions Locales, France Travail, associations de quartier, Bureaux d’aide à l’insertion) peuvent t’aider à cadrer ton projet et ta demande d’immersion.",
    ],
    steps: [
      {
        title: 'Clarifier ton profil',
        text:
          "Avant de courir partout dans Paris, commence par clarifier qui tu es et ce que tu cherches. Passe un test d’orientation ou un bilan simple pour faire ressortir 2 ou 3 familles de métiers cohérentes avec ta personnalité, tes valeurs et ton niveau d’études. L’objectif : arriver dans les événements avec quelques pistes en tête (ex. “métiers du soin”, “métiers du digital”, “métiers manuels”), au lieu de repartir avec 50 brochures que tu ne liras jamais.",
      },
      {
        title: 'Choisir les bons événements à Paris',
        text:
          "À Paris, il y a des événements toutes les semaines : grands salons, forums alternance, journées portes ouvertes, ateliers orientation, rencontres métiers… Tu n’as pas besoin de tout faire. Concentre-toi sur ceux qui correspondent vraiment à tes pistes : salons ou JPO par domaine, forums alternance liés à ton niveau, ateliers d’orientation ou de coaching projet proposés par ta Mission Locale, ton établissement ou des associations.",
      },
      {
        title: 'Tester le terrain en conditions réelles',
        text:
          "Quand une piste revient souvent (“je reviens toujours vers les métiers du soin”, “je regarde tout le temps les métiers du digital”, etc.), le plus utile est de tester le terrain pour de vrai. À Paris, tu peux demander une PMSMP, un stage d’observation, une journée “vis ma vie” dans un service, un atelier ou un bureau, ou un atelier pratique de découverte métier.",
      },
    ],
    localAngles: [
      {
        title: 'Comparer les options post-bac et les réorientations',
        text:
          "Si tu sors du bac ou d’une première année qui ne te convient pas, Paris est un bon terrain de comparaison : facs, BTS, BUT, écoles spécialisées, prépas, écoles privées, alternance… Tu peux visiter plusieurs établissements sur quelques week-ends, assister à des cours ouverts ou à des conférences métiers, et poser des questions directement à des étudiants qui vivent la formation au quotidien.",
      },
      {
        title: 'Explorer des univers très différents : digital, santé, social, culture',
        text:
          "Paris te permet de passer d’un univers à l’autre en quelques stations de métro : start-ups, hôpitaux, associations, lieux culturels, ateliers d’artisans, commerces, écoles spécialisées. Si tu hésites entre plusieurs directions, tu peux organiser une immersion dans une structure sociale, une journée découverte dans une école digitale ou une rencontre avec une association culturelle.",
      },
      {
        title: 'Activer le réseau local parisien',
        text:
          "Tu n’es pas obligé d’avancer seul. À Paris, tu peux t’appuyer sur les Missions Locales parisiennes, France Travail, les services orientation / insertion de ton lycée, fac, école ou CFA, et des associations de quartier qui organisent des ateliers CV, orientation ou découverte de métiers.",
      },
    ],
    faq: [
      {
        question: "Comment trouver une aide à l’orientation à Paris quand j’ai 18–25 ans ?",
        answer:
          "Tu peux combiner plusieurs niveaux : un test d’orientation en ligne pour clarifier ton profil, des rendez-vous avec la Mission Locale ou le service orientation de ton établissement, et des ateliers / événements repérés sur les agendas locaux. L’important est d’arriver avec quelques questions précises pour que les pros puissent vraiment t’aider.",
      },
      {
        question: "Où faire un test d’orientation à Paris si je suis étudiant, en alternance ou en réorientation ?",
        answer:
          "Tu as deux options : des tests en ligne pensés pour les 18–25 ans, que tu peux faire depuis chez toi, et des bilans ou ateliers proposés par ta fac, ton école, ta Mission Locale ou des associations. Le plus efficace est souvent de commencer par un test en ligne pour repérer 2–3 profils, puis de venir avec tes résultats à un rendez-vous individuel ou collectif.",
      },
      {
        question: "Comment trouver une PMSMP, un stage d’observation ou une immersion à Paris ?",
        answer:
          "Tu peux en parler à ta Mission Locale, à ton conseiller France Travail, à ton établissement ou à l’organisme qui te suit. Prépare un message simple qui explique ton âge, ta situation, la ou les familles de métiers que tu veux tester, et le type de format souhaité. Paris offre beaucoup de possibilités, mais c’est plus facile d’obtenir un “oui” si ta demande est claire, réaliste et limitée dans le temps.",
      },
    ],
    primaryHref: '/test',
    primaryCta: "Passer le test d’orientation",
    secondaryHref: '/carte-orientation/paris',
    secondaryCta: 'Voir les événements à Paris',
    finalCtaSubtext:
      "Passe un test d’orientation pensé pour les 18–25 ans, puis découvre les événements et immersions qui correspondent à ton profil à Paris.",
  },
  {
    slug: 'tester-un-metier-lyon',
    city: 'Lyon',
    kind: 'tester',
    title: 'Tester un métier à Lyon quand tu as 18–25 ans | Jobmi',
    description:
      "Ateliers, PMSMP, stages d'observation, JPO : découvre comment tester un métier à Lyon avant de choisir une formation ou une reconversion.",
    eyebrow: 'Immersion locale · Lyon',
    h1: 'Tester un métier à Lyon avant de choisir ta voie',
    intro:
      "Lyon est un bon terrain pour explorer des métiers sans rester dans la théorie : entreprises, associations, écoles, santé, industrie, commerce, digital. L'objectif est de vérifier le quotidien réel d'une piste avant de t'engager.",
    reasons: [
      "Tu peux tester une piste avec un format court : atelier, JPO, stage d'observation ou PMSMP.",
      "Le bassin lyonnais mélange métiers de service, santé, social, tech, commerce, industrie et impact.",
      "Une immersion bien préparée évite souvent une inscription en formation choisie trop vite.",
    ],
    steps: [
      {
        title: 'Cibler un métier ou un secteur',
        text:
          "Choisis une piste principale : développement web, santé-social, commerce, artisanat, marketing, design ou industrie.",
      },
      {
        title: 'Repérer le bon format',
        text:
          "Atelier pour découvrir, PMSMP pour confirmer, JPO pour comparer une école, stage d'observation pour voir le quotidien.",
      },
      {
        title: 'Préparer tes questions',
        text:
          "Demande ce que la personne fait vraiment, ce qui est difficile, quelles compétences comptent et quel parcours elle recommanderait.",
      },
    ],
    localAngles: [
      {
        title: 'Santé et social',
        text:
          "Lyon offre beaucoup de contextes pour observer la relation humaine, le rythme d'équipe et les métiers réglementés.",
      },
      {
        title: 'Digital et produit',
        text:
          "Start-up, agences, écoles et équipes produit permettent de comprendre la différence entre image du métier et réalité des missions.",
      },
      {
        title: 'Alternance',
        text:
          "Les forums alternance et JPO locales sont utiles si tu as déjà une piste et que tu veux trouver un format rémunéré.",
      },
    ],
    primaryHref: '/tester-un-metier',
    primaryCta: 'Comprendre les formats',
    secondaryHref: '/carte-orientation/lyon',
    secondaryCta: 'Voir les événements à Lyon',
  },
  {
    slug: 'salons-orientation-nantes',
    city: 'Nantes',
    kind: 'salons',
    title: "Salons d'orientation à Nantes pour les 18–25 ans | Agenda Jobmi",
    description:
      "Trouve les salons, JPO, forums alternance et ateliers métiers utiles à Nantes pour ton orientation post-bac ou ta réorientation.",
    eyebrow: 'Agenda orientation · Nantes',
    h1: "Salons d'orientation à Nantes : comment choisir les bons événements",
    intro:
      "Un salon d'orientation peut vraiment t'aider, à condition de ne pas y aller les mains dans les poches. À Nantes, l'enjeu est de repérer les événements qui correspondent à ton niveau de réflexion : découvrir, comparer, confirmer ou passer à l'action.",
    reasons: [
      "Les salons permettent de comparer rapidement plusieurs formations et parcours.",
      "Les JPO donnent une meilleure idée de l'ambiance, du niveau attendu et des débouchés.",
      "Les ateliers métiers sont souvent plus concrets si tu veux vérifier une piste terrain.",
    ],
    steps: [
      {
        title: 'Avant le salon',
        text:
          "Note 3 questions : quel métier vise la formation, quels débouchés réels, quelle part de stage ou alternance.",
      },
      {
        title: 'Pendant le salon',
        text:
          "Parle à des étudiants ou anciens élèves dès que possible. Ils décrivent souvent mieux le quotidien que les brochures.",
      },
      {
        title: 'Après le salon',
        text:
          "Classe les options en trois colonnes : à creuser, à tester sur le terrain, à écarter. Puis prévois une action concrète.",
      },
    ],
    localAngles: [
      {
        title: 'Post-bac sans idée claire',
        text:
          "Commence par les espaces généralistes, puis termine par 2 ou 3 stands ciblés pour éviter la surcharge.",
      },
      {
        title: 'Réorientation',
        text:
          "Cherche surtout les passerelles, admissions parallèles, formations courtes et alternance.",
      },
      {
        title: 'Immersion',
        text:
          "Si une école ou un secteur t'intéresse, demande toujours s'il existe une JPO, un cours d'essai ou une journée découverte.",
      },
    ],
    primaryHref: '/evenements-orientation',
    primaryCta: "Ouvrir l'agenda orientation",
    secondaryHref: '/carte-orientation/nantes',
    secondaryCta: 'Voir Nantes sur la carte',
  },
];

export const getGeoPage = (slug: string) =>
  geoPages.find((page) => page.slug === slug);
