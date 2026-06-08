export type ExperienceType = 'atelier' | 'semaine' | 'ecole' | 'immersion';

export type Experience = {
  id: string;
  titre: string;
  type: ExperienceType;
  typeLabel: string;
  categorie: string;
  emoji: string;
  description: string;
  duree: string;
  prix: string;
  lieu: string;
  niveau: string;
  href: string;
  plateforme: string;
  tag?: string;
};

export const TYPE_FILTERS: { label: string; value: ExperienceType | '' }[] = [
  { label: 'Tous', value: '' },
  { label: 'Ateliers artisanat', value: 'atelier' },
  { label: 'Semaines découverte', value: 'semaine' },
  { label: 'Journées en école', value: 'ecole' },
  { label: 'Stages & immersions', value: 'immersion' },
];

export const CATEGORIE_LABELS: Record<string, string> = {
  ceramique: 'Céramique & Poterie',
  boulangerie: 'Boulangerie & Cuisine',
  bois: 'Bois & Menuiserie',
  cuir: 'Cuir & Maroquinerie',
  textile: 'Textile & Mode',
  bijou: 'Bijouterie & Métal',
  verre: 'Verre & Mosaïque',
  numerique: 'Numérique & Design',
  sante: 'Santé & Social',
  commerce: 'Commerce & Gestion',
  audio: 'Audiovisuel & Médias',
  batiment: 'Bâtiment & Travaux',
};

export const experiences: Experience[] = [
  // ── ATELIERS ARTISANAT
  {
    id: 'ceramique-tournage',
    titre: 'Initiation au tournage céramique',
    type: 'atelier',
    typeLabel: 'Atelier artisanat',
    categorie: 'ceramique',
    emoji: '🏺',
    description:
      'Apprends les bases du tournage avec un céramiste professionnel : centrage, ouverture, montage. Tu repars avec ta création cuite.',
    duree: '3h',
    prix: 'À partir de 65€',
    lieu: 'Paris, Lyon, Bordeaux',
    niveau: 'Débutant',
    href: 'https://www.wecandoo.fr/activite/ceramique?ref=jobmi',
    plateforme: 'Wecandoo',
    tag: 'Populaire',
  },
  {
    id: 'pain-levain',
    titre: 'Atelier pain au levain avec un boulanger',
    type: 'atelier',
    typeLabel: 'Atelier artisanat',
    categorie: 'boulangerie',
    emoji: '🍞',
    description:
      "Pétrissage, façonnage, cuisson : passe une matinée dans la boulangerie d'un artisan et comprends chaque étape du métier.",
    duree: '4h',
    prix: 'À partir de 55€',
    lieu: 'Partout en France',
    niveau: 'Débutant',
    href: 'https://www.wecandoo.fr/activite/boulangerie?ref=jobmi',
    plateforme: 'Wecandoo',
  },
  {
    id: 'maroquinerie-pochette',
    titre: 'Coudre une pochette en cuir',
    type: 'atelier',
    typeLabel: 'Atelier artisanat',
    categorie: 'cuir',
    emoji: '👜',
    description:
      "Un maroquinier t'apprend traçage, découpe et piquage sellier. Tu repars avec ta pièce terminée et une vraie idée du métier.",
    duree: '3h',
    prix: 'À partir de 70€',
    lieu: 'Paris, Lyon, Bordeaux',
    niveau: 'Débutant',
    href: 'https://www.wecandoo.fr/activite/maroquinerie?ref=jobmi',
    plateforme: 'Wecandoo',
    tag: 'Coup de cœur',
  },
  {
    id: 'bague-argent',
    titre: 'Créer une bague en argent',
    type: 'atelier',
    typeLabel: 'Atelier artisanat',
    categorie: 'bijou',
    emoji: '💍',
    description:
      "Dans l'atelier d'un bijoutier, tu découpes, soudes et polis ton propre bijou en argent sterling. Aucune expérience requise.",
    duree: '3h30',
    prix: 'À partir de 80€',
    lieu: 'Paris, Lyon, Nantes',
    niveau: 'Débutant',
    href: 'https://www.wecandoo.fr/activite/bijouterie?ref=jobmi',
    plateforme: 'Wecandoo',
  },
  {
    id: 'menuiserie-objet',
    titre: 'Fabriquer un objet en bois',
    type: 'atelier',
    typeLabel: 'Atelier artisanat',
    categorie: 'bois',
    emoji: '🪵',
    description:
      "Découvre les outils d'un atelier de menuiserie. Tu conçois et fabriques un objet simple avec l'aide d'un ébéniste.",
    duree: '3h',
    prix: 'À partir de 60€',
    lieu: 'Partout en France',
    niveau: 'Débutant',
    href: 'https://www.wecandoo.fr/activite/menuiserie?ref=jobmi',
    plateforme: 'Wecandoo',
  },
  {
    id: 'teinture-naturelle',
    titre: 'Teinture naturelle sur tissu',
    type: 'atelier',
    typeLabel: 'Atelier artisanat',
    categorie: 'textile',
    emoji: '🧵',
    description:
      'Teins un tissu avec des pigments naturels (plantes, fleurs, minéraux). Un artisan textile te guide sur les techniques de mordançage.',
    duree: '3h',
    prix: 'À partir de 50€',
    lieu: 'Paris, Bretagne, Lyon',
    niveau: 'Débutant',
    href: 'https://www.wecandoo.fr/activite/teinture?ref=jobmi',
    plateforme: 'Wecandoo',
  },
  {
    id: 'mosaique-verre',
    titre: 'Créer une mosaïque en verre',
    type: 'atelier',
    typeLabel: 'Atelier artisanat',
    categorie: 'verre',
    emoji: '🔷',
    description:
      "Un artiste mosaïste t'initie à la coupe du verre, à l'assemblage et à la finition. Tu repars avec ton panneau décoratif.",
    duree: '3h',
    prix: 'À partir de 55€',
    lieu: 'Lyon, Marseille, Toulouse',
    niveau: 'Débutant',
    href: 'https://www.wecandoo.fr/activite/mosaique?ref=jobmi',
    plateforme: 'Wecandoo',
  },

  // ── SEMAINES DÉCOUVERTE
  {
    id: 'semaine-numerique',
    titre: 'Semaine découverte métiers du numérique',
    type: 'semaine',
    typeLabel: 'Semaine découverte',
    categorie: 'numerique',
    emoji: '💻',
    description:
      "5 jours pour explorer les métiers du numérique : développeur web, UX designer, data analyst. Chaque journée = un profil, des missions réelles, des échanges.",
    duree: '5 jours',
    prix: 'Gratuit (selon dispositif)',
    lieu: 'Paris, Lyon, Toulouse',
    niveau: 'Tous niveaux',
    href: 'https://www.1jeune1solution.gouv.fr?ref=jobmi',
    plateforme: '1 jeune 1 solution',
    tag: 'Gratuit',
  },
  {
    id: 'semaine-sante',
    titre: 'Semaine immersion santé-social',
    type: 'semaine',
    typeLabel: 'Semaine découverte',
    categorie: 'sante',
    emoji: '🩺',
    description:
      "Une semaine aux côtés de professionnels de santé et du social. Infirmier, aide-soignant, assistant social : tu observes le quotidien avant de choisir une formation exigeante.",
    duree: '5 jours',
    prix: 'Sur dossier',
    lieu: 'Partout en France',
    niveau: 'Tous niveaux',
    href: 'https://immersion-facile.beta.gouv.fr/?ref=jobmi',
    plateforme: 'Immersion Facilitée',
  },
  {
    id: 'semaine-batiment',
    titre: 'Semaine découverte bâtiment & travaux',
    type: 'semaine',
    typeLabel: 'Semaine découverte',
    categorie: 'batiment',
    emoji: '🏗️',
    description:
      "Électricien, plombier, maçon, charpentier : une semaine pour tester les métiers du bâtiment avec des compagnons et découvrir les CFA qui forment.",
    duree: '5 jours',
    prix: 'Gratuit',
    lieu: 'Partout en France',
    niveau: 'Tous niveaux',
    href: 'https://www.compagnons-du-devoir.com?ref=jobmi',
    plateforme: 'Compagnons du Devoir',
    tag: 'Gratuit',
  },
  {
    id: 'semaine-commerce',
    titre: 'Mini-stage découverte commerce & vente',
    type: 'semaine',
    typeLabel: 'Semaine découverte',
    categorie: 'commerce',
    emoji: '🛍️',
    description:
      "3 jours pour explorer la vente, le marketing et la relation client. Tu alternes entre entreprises partenaires et temps de réflexion sur ton projet.",
    duree: '3 jours',
    prix: 'Gratuit (selon structure)',
    lieu: 'Grandes villes de France',
    niveau: 'Débutant',
    href: 'https://www.1jeune1solution.gouv.fr?ref=jobmi',
    plateforme: '1 jeune 1 solution',
  },

  // ── JOURNÉES EN ÉCOLE
  {
    id: 'jpo-design-numerique',
    titre: 'Journée en école de design numérique',
    type: 'ecole',
    typeLabel: 'Journée en école',
    categorie: 'numerique',
    emoji: '🎨',
    description:
      "Tu t'assieds en cours, tu parles aux étudiants et tu vois l'ambiance. Tu testes la formation ET le métier visé en une seule journée.",
    duree: '1 jour',
    prix: 'Gratuit',
    lieu: 'Paris, Lyon, Bordeaux, Nantes',
    niveau: 'Lycéen / jeune bacheliers',
    href: 'https://www.studi.com/?ref=jobmi',
    plateforme: 'JPO Écoles',
    tag: 'Gratuit',
  },
  {
    id: 'jpo-bts-commerce',
    titre: 'JPO BTS Management Commercial',
    type: 'ecole',
    typeLabel: 'Journée en école',
    categorie: 'commerce',
    emoji: '🏫',
    description:
      "Rejoins une journée portes ouvertes de BTS MCO ou NRC. Tu assistes à un cours, discutes avec des alternants et comprends le quotidien de la formation.",
    duree: '1 jour',
    prix: 'Gratuit',
    lieu: 'Partout en France',
    niveau: 'Lycéen / étudiant',
    href: 'https://www.onisep.fr/formations?ref=jobmi',
    plateforme: 'ONISEP',
    tag: 'Gratuit',
  },
  {
    id: 'jpo-audiovisuel',
    titre: "Journée découverte école d'audiovisuel",
    type: 'ecole',
    typeLabel: 'Journée en école',
    categorie: 'audio',
    emoji: '🎬',
    description:
      "Réalisation, montage, photographie, radio : une journée dans une école spécialisée pour confirmer si les métiers de l'image et du son te correspondent.",
    duree: '1 jour',
    prix: 'Gratuit',
    lieu: 'Paris, Lyon, Toulouse',
    niveau: 'Tous niveaux',
    href: 'https://www.ina-sup.com/?ref=jobmi',
    plateforme: 'Écoles médias',
  },

  // ── STAGES & IMMERSIONS
  {
    id: 'pmsmp-artisanat',
    titre: 'PMSMP — Tester un métier artisanal',
    type: 'immersion',
    typeLabel: 'Stage & immersion',
    categorie: 'batiment',
    emoji: '🔧',
    description:
      "Dispositif officiel pour observer un métier en entreprise (boulanger, électricien, menuisier…). Gratuit, encadré par France Travail ou une Mission Locale.",
    duree: '2 à 5 jours',
    prix: 'Gratuit (dispositif officiel)',
    lieu: 'Partout en France',
    niveau: "Demandeurs d'emploi / jeunes accompagnés",
    href: 'https://immersion-facile.beta.gouv.fr/?ref=jobmi',
    plateforme: 'Immersion Facilitée',
    tag: 'Gratuit',
  },
  {
    id: 'stage-observation-sante',
    titre: "Stage d'observation en hôpital",
    type: 'immersion',
    typeLabel: 'Stage & immersion',
    categorie: 'sante',
    emoji: '🏥',
    description:
      "Tu suis un infirmier, un aide-soignant ou un kiné pendant 2 à 5 jours. Le format le plus honnête pour vérifier si le rythme et la relation humaine te conviennent.",
    duree: '2 à 5 jours',
    prix: 'Gratuit (convention structure)',
    lieu: 'Partout en France',
    niveau: 'Tous profils',
    href: 'https://immersion-facile.beta.gouv.fr/?ref=jobmi',
    plateforme: 'Immersion Facilitée',
  },
  {
    id: 'jobshadowing-numerique',
    titre: 'Jobshadowing dans une startup tech',
    type: 'immersion',
    typeLabel: 'Stage & immersion',
    categorie: 'numerique',
    emoji: '👥',
    description:
      "Tu suis un développeur, un product manager ou un designer comme son ombre pendant 1 à 2 jours. Zéro pression, juste l'observation et les questions.",
    duree: '1 à 2 jours',
    prix: 'Gratuit',
    lieu: 'Paris, Lyon, Toulouse, Remote',
    niveau: 'Tous niveaux',
    href: 'https://www.myjobglasses.com/?ref=jobmi',
    plateforme: 'My Job Glasses',
    tag: 'En ligne possible',
  },
];
