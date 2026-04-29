export type JobTestingPage = {
  slug: string;
  jobTitle: string;
  title: string;
  description: string;
  intro: string;
  realityChecks: Array<{ title: string; text: string }>;
  immersionIdeas: Array<{ title: string; text: string }>;
  questions: string[];
};

export const jobTestingPages: JobTestingPage[] = [
  {
    slug: 'developpeur-web',
    jobTitle: 'développeur web',
    title: 'Comment tester le métier de développeur web avant une formation',
    description:
      "Découvre comment tester le métier de développeur web : observation, mini-projet, immersion, questions à poser et signaux à vérifier avant une formation.",
    intro:
      "Le développement web attire beaucoup de jeunes en reconversion, mais l'image du métier est souvent trop floue : coder toute la journée ne veut pas dire travailler seul, créer des apps parfaites ou apprendre une techno magique. Tester le métier permet de voir les tickets, les bugs, les réunions, les contraintes produit et la progression réelle.",
    realityChecks: [
      {
        title: 'Le quotidien est très structuré',
        text:
          "Un développeur web passe du temps à lire du code existant, corriger, discuter avec une équipe, découper des problèmes et tester. Ce n'est pas seulement créer une application de zéro.",
      },
      {
        title: 'La logique compte autant que la syntaxe',
        text:
          "Avant de payer une formation, vérifie que tu aimes chercher, bloquer, déboguer, recommencer et expliquer ton raisonnement.",
      },
      {
        title: "L'environnement change tout",
        text:
          "Agence, start-up, ESN, équipe produit ou freelance : le même métier peut avoir des rythmes et contraintes très différents.",
      },
    ],
    immersionIdeas: [
      {
        title: 'Observer une équipe produit',
        text:
          "Demande à assister à un rituel d'équipe, voir comment un ticket est compris, développé puis relu.",
      },
      {
        title: 'Faire un mini-projet guidé',
        text:
          "Construis une petite page ou fonctionnalité en suivant une consigne, puis demande un retour sur ta logique.",
      },
      {
        title: 'Comparer bootcamp, alternance et autodidaxie',
        text:
          "Le bon format dépend de ton autonomie, de ton budget, de ton besoin d'encadrement et de ton urgence à travailler.",
      },
    ],
    questions: [
      'À quoi ressemble une journée normale de développeur junior ?',
      'Quelles tâches sont répétitives ou frustrantes ?',
      'Quelles compétences faut-il avoir avant une alternance ou un bootcamp ?',
      "Comment savoir si je progresse assez vite pour m'insérer ?",
    ],
  },
  {
    slug: 'infirmier',
    jobTitle: 'infirmier',
    title: "Comment tester le métier d'infirmier avant de t'engager",
    description:
      "Relation patient, rythme, charge émotionnelle, études : voici comment tester le métier d'infirmier avant une formation ou une réorientation.",
    intro:
      "Le métier d'infirmier peut attirer pour son utilité humaine, mais il demande aussi un rapport particulier au rythme, au corps, à la responsabilité et à la charge émotionnelle. Le tester sert à comprendre la réalité du soin avant de viser un parcours long et exigeant.",
    realityChecks: [
      {
        title: 'Le soin est concret et exigeant',
        text:
          "Tu dois aimer aider, mais aussi accepter les protocoles, les horaires, la fatigue et les situations parfois difficiles.",
      },
      {
        title: "L'équipe compte énormément",
        text:
          "La coordination avec aides-soignants, médecins, patients et familles fait partie du métier au quotidien.",
      },
      {
        title: 'Les études demandent un vrai engagement',
        text:
          "Avant de te lancer, vérifie que tu comprends les stages, les responsabilités et le rythme de formation.",
      },
    ],
    immersionIdeas: [
      {
        title: 'Journée portes ouvertes en IFSI',
        text:
          "Pose des questions sur les stages, les cours difficiles, le rythme et les abandons.",
      },
      {
        title: 'Échange avec un professionnel',
        text:
          "Demande ce qu'il aurait aimé savoir avant de commencer et ce qui l'aide à tenir dans le métier.",
      },
      {
        title: 'Immersion santé-social encadrée',
        text:
          "Selon ta situation, une PMSMP ou une observation peut aider à voir l'environnement réel sans te projeter uniquement sur l'image du métier.",
      },
    ],
    questions: [
      'Quels moments sont les plus difficiles dans une journée ?',
      'Quelles qualités sont indispensables au-delà de vouloir aider ?',
      'Comment se passent les stages pendant la formation ?',
      "Comment savoir si je supporte le rythme et la charge émotionnelle ?",
    ],
  },
  {
    slug: 'ux-designer',
    jobTitle: 'UX designer',
    title: "Comment tester le métier d'UX designer avant une école",
    description:
      "Atelier, portfolio, recherche utilisateur, outils : découvre comment tester le métier d'UX designer avant une formation design ou digitale.",
    intro:
      "L'UX design est souvent présenté comme un métier créatif, mais il demande aussi beaucoup d'écoute, de méthode, de compromis et de rigueur. Tester le métier aide à distinguer l'envie de faire de jolies interfaces et la réalité d'une démarche centrée utilisateur.",
    realityChecks: [
      {
        title: "L'UX n'est pas seulement du visuel",
        text:
          "Une grande partie du travail consiste à comprendre un problème, interviewer, structurer, tester et argumenter.",
      },
      {
        title: 'Le portfolio compte vite',
        text:
          "Même débutant, tu dois apprendre à raconter ta démarche, pas seulement montrer un écran fini.",
      },
      {
        title: 'Le métier est très collaboratif',
        text:
          "Tu travailles avec produit, développeurs, marketing, clients ou utilisateurs. Savoir expliquer et accepter les contraintes est essentiel.",
      },
    ],
    immersionIdeas: [
      {
        title: 'Participer à un atelier design',
        text:
          "Un atelier de quelques heures peut montrer comment on passe d'un besoin flou à une solution testable.",
      },
      {
        title: 'Auditer une interface simple',
        text:
          "Choisis une app que tu utilises, identifie un problème utilisateur et propose une amélioration argumentée.",
      },
      {
        title: 'Voir une présentation de portfolio',
        text:
          "Demande à un étudiant ou junior comment il structure ses projets et ce qui a compté dans son recrutement.",
      },
    ],
    questions: [
      "Quelle différence entre UX designer, UI designer et product designer ?",
      'Quelle part du métier est vraiment créative ?',
      'Quels outils faut-il connaître avant une formation ?',
      'Comment construire un premier portfolio crédible ?',
    ],
  },
];

export const getJobTestingPage = (slug: string) =>
  jobTestingPages.find((page) => page.slug === slug);
