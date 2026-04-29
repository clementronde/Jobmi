export type ImmersionOffer = {
  slug: string;
  title: string;
  city: string;
  level: string;
  targetJob: string;
  duration: string;
  context: string;
  missions: string[];
  usefulFor: string[];
};

export const immersionOffers: ImmersionOffer[] = [
  {
    slug: 'stage-observation-developpeur-web-paris',
    title: "Stage d'observation développeur web à Paris",
    city: 'Paris',
    level: 'Débutant accepté',
    targetJob: 'Développeur web junior',
    duration: '1 à 3 jours',
    context:
      "Une fiche type pour comprendre ce qu'une immersion développeur web doit rendre clair avant une formation tech, un bootcamp ou une alternance.",
    missions: [
      "Observer le fonctionnement d'une équipe produit ou technique.",
      'Comprendre comment un ticket passe du besoin utilisateur au code.',
      'Voir une revue de code, un bug ou une phase de test.',
      'Poser des questions sur les parcours possibles : autodidaxie, bootcamp, alternance.',
    ],
    usefulFor: [
      'Tu hésites à financer une formation développeur web.',
      'Tu veux vérifier que tu aimes vraiment résoudre des problèmes techniques.',
      'Tu compares bootcamp, BTS, BUT, alternance ou apprentissage autonome.',
    ],
  },
  {
    slug: 'immersion-sante-social-lyon',
    title: 'Immersion santé-social à Lyon',
    city: 'Lyon',
    level: 'Projet à clarifier',
    targetJob: 'Infirmier, éducateur spécialisé, assistant social',
    duration: '1 jour à 1 semaine',
    context:
      "Une fiche type pour vérifier la réalité du contact humain, du rythme et de la charge émotionnelle avant une formation santé ou social.",
    missions: [
      "Observer les interactions avec le public, les patients ou les bénéficiaires.",
      "Comprendre le rôle de l'équipe et la répartition des responsabilités.",
      'Identifier les contraintes horaires, physiques ou émotionnelles.',
      'Préparer les questions à poser avant de viser une formation longue.',
    ],
    usefulFor: [
      'Tu veux aider les autres mais tu ne connais pas le quotidien du terrain.',
      'Tu hésites entre santé, social, psychologie, éducatif ou médico-social.',
      'Tu veux éviter de choisir une voie exigeante uniquement sur l’image du métier.',
    ],
  },
  {
    slug: 'atelier-ux-design-en-ligne',
    title: 'Atelier découverte UX design en ligne',
    city: 'En ligne',
    level: 'Curieux ou débutant',
    targetJob: 'UX designer, UI designer, product designer',
    duration: '2 à 4 heures',
    context:
      "Une fiche type pour découvrir la démarche UX avant de choisir une école design, une formation digitale ou un parcours produit.",
    missions: [
      'Analyser un problème utilisateur simple.',
      'Découvrir les bases de la recherche utilisateur et du wireframe.',
      'Comparer UX, UI et product design.',
      'Comprendre ce qui fait un premier portfolio crédible.',
    ],
    usefulFor: [
      'Tu aimes le design mais tu ne sais pas si tu aimes la méthode UX.',
      'Tu veux tester un métier créatif sans te limiter au côté visuel.',
      'Tu compares école, bootcamp, alternance ou autoformation.',
    ],
  },
];

export const getImmersionOffer = (slug: string) =>
  immersionOffers.find((offer) => offer.slug === slug);
