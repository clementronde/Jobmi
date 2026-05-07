import type {
  JobmiCompanyLead,
  JobmiLaborMarketSignal,
  JobmiOpportunity,
  JobmiRomeJob,
  JobmiRomeJobSheet,
  JobmiRomeSkill,
  JobmiRomeWorkContext,
  JobmiTrainingReview,
} from './types';

type LocalRomeProfile = {
  jobmiJobIds: string[];
  job: JobmiRomeJob;
  summary: string;
  activities: string[];
  skills: JobmiRomeSkill[];
  workContexts: JobmiRomeWorkContext[];
  relatedJobs: JobmiRomeJob[];
};

const mapped = 'mapped' as const;

export const LOCAL_ROME_PROFILES: LocalRomeProfile[] = [
  {
    jobmiJobIds: ['developpeur-web', 'devops'],
    job: {
      code: 'M1805',
      label: 'Études et développement informatique',
      slug: 'developpeur-web',
      description: "Conçoit, développe et fait évoluer des applications, sites ou outils numériques.",
      mappingStatus: mapped,
    },
    summary:
      "Un métier de résolution de problèmes : comprendre un besoin, écrire du code, tester, corriger et collaborer avec une équipe produit ou technique.",
    activities: [
      'Analyser un besoin utilisateur ou métier',
      'Développer une fonctionnalité et la tester',
      'Corriger des bugs et maintenir du code existant',
      'Collaborer avec produit, design ou infrastructure',
    ],
    skills: [
      { id: 'm1805-analyse', label: 'Analyser un besoin numérique', category: 'savoir-faire' },
      { id: 'm1805-code', label: 'Développer une application informatique', category: 'savoir-faire' },
      { id: 'm1805-test', label: 'Tester et corriger un programme', category: 'savoir-faire' },
      { id: 'm1805-rigueur', label: 'Faire preuve de rigueur et de précision', category: 'savoir-etre' },
      { id: 'm1805-logique', label: 'Raisonner avec logique', category: 'savoir-etre' },
    ],
    workContexts: [
      { id: 'screen', label: 'Travail prolongé sur écran', kind: 'environment' },
      { id: 'team', label: 'Collaboration avec une équipe projet', kind: 'relation' },
      { id: 'deadline', label: 'Délais et priorités changeantes', kind: 'rhythm' },
      { id: 'remote', label: 'Télétravail possible selon les structures', kind: 'environment' },
    ],
    relatedJobs: [
      {
        code: 'M1802',
        label: 'Conseil et maîtrise d’ouvrage en systèmes d’information',
        slug: 'chef-projet-digital',
        description: 'Fait le lien entre besoin métier et solution numérique.',
        mappingStatus: mapped,
      },
      {
        code: 'M1810',
        label: 'Production et exploitation de systèmes d’information',
        slug: 'technicien-informatique',
        description: 'Maintient des systèmes et infrastructures informatiques.',
        mappingStatus: mapped,
      },
    ],
  },
  {
    jobmiJobIds: ['data-analyste', 'data-scientist'],
    job: {
      code: 'M1403',
      label: 'Études et prospectives socio-économiques',
      slug: 'data-analyste',
      description: 'Analyse des données pour éclairer des décisions.',
      mappingStatus: mapped,
    },
    summary:
      "Un métier d’analyse : collecter, nettoyer, interpréter et restituer des données pour aider une organisation à décider.",
    activities: [
      'Préparer des jeux de données',
      'Construire des tableaux de bord',
      'Identifier des tendances ou anomalies',
      'Présenter des recommandations claires',
    ],
    skills: [
      { id: 'm1403-data', label: 'Analyser des données', category: 'savoir-faire' },
      { id: 'm1403-viz', label: 'Présenter des résultats de manière visuelle', category: 'savoir-faire' },
      { id: 'm1403-stat', label: 'Utiliser des méthodes statistiques', category: 'savoir' },
      { id: 'm1403-synthese', label: 'Faire preuve d’esprit de synthèse', category: 'savoir-etre' },
    ],
    workContexts: [
      { id: 'screen-data', label: 'Travail sur écran et outils data', kind: 'environment' },
      { id: 'precision', label: 'Forte exigence de précision', kind: 'constraint' },
      { id: 'presentation', label: 'Restitution à des équipes non techniques', kind: 'relation' },
    ],
    relatedJobs: [
      {
        code: 'M1805',
        label: 'Études et développement informatique',
        slug: 'developpeur-web',
        description: 'Développe des applications et outils numériques.',
        mappingStatus: mapped,
      },
    ],
  },
  {
    jobmiJobIds: ['graphiste', 'motion-designer'],
    job: {
      code: 'E1205',
      label: 'Réalisation de contenus multimédias',
      slug: 'graphiste',
      description: 'Crée des supports visuels, graphiques ou multimédias.',
      mappingStatus: mapped,
    },
    summary:
      "Un métier créatif mais cadré : transformer un brief, une marque ou un message en supports visuels compréhensibles.",
    activities: [
      'Comprendre un brief ou une demande client',
      'Créer des visuels et déclinaisons graphiques',
      'Préparer des fichiers pour le web ou l’impression',
      'Recevoir et intégrer des retours',
    ],
    skills: [
      { id: 'e1205-creation', label: 'Concevoir une identité ou un support visuel', category: 'savoir-faire' },
      { id: 'e1205-outils', label: 'Utiliser des outils de création graphique', category: 'savoir' },
      { id: 'e1205-brief', label: 'Analyser un brief créatif', category: 'savoir-faire' },
      { id: 'e1205-creativite', label: 'Faire preuve de créativité', category: 'savoir-etre' },
    ],
    workContexts: [
      { id: 'screen-design', label: 'Travail sur écran', kind: 'environment' },
      { id: 'client-feedback', label: 'Retours clients ou internes fréquents', kind: 'relation' },
      { id: 'deadline-design', label: 'Délais de production à respecter', kind: 'rhythm' },
    ],
    relatedJobs: [
      {
        code: 'E1104',
        label: 'Conception de contenus multimédias',
        slug: 'designer-ux-ui',
        description: 'Conçoit des expériences et contenus numériques.',
        mappingStatus: mapped,
      },
    ],
  },
  {
    jobmiJobIds: ['designer-ux-ui'],
    job: {
      code: 'E1104',
      label: 'Conception de contenus multimédias',
      slug: 'ux-designer',
      description: 'Conçoit des interfaces et parcours numériques utiles, clairs et utilisables.',
      mappingStatus: mapped,
    },
    summary:
      "Un métier entre design, écoute et méthode : comprendre les utilisateurs, structurer un parcours puis tester des solutions.",
    activities: [
      'Mener une recherche utilisateur',
      'Structurer un parcours ou une interface',
      'Prototyper une solution',
      'Tester et améliorer une expérience',
    ],
    skills: [
      { id: 'e1104-besoin', label: 'Analyser un besoin utilisateur', category: 'savoir-faire' },
      { id: 'e1104-prototype', label: 'Concevoir une maquette ou un prototype', category: 'savoir-faire' },
      { id: 'e1104-empathie', label: 'Faire preuve d’écoute', category: 'savoir-etre' },
      { id: 'e1104-argumenter', label: 'Argumenter des choix de conception', category: 'savoir-faire' },
    ],
    workContexts: [
      { id: 'team-product', label: 'Travail avec produit, tech et métier', kind: 'relation' },
      { id: 'feedback-ux', label: 'Tests et retours utilisateurs', kind: 'relation' },
      { id: 'screen-ux', label: 'Travail sur écran et outils collaboratifs', kind: 'environment' },
    ],
    relatedJobs: [
      {
        code: 'E1205',
        label: 'Réalisation de contenus multimédias',
        slug: 'graphiste',
        description: 'Crée des supports visuels et multimédias.',
        mappingStatus: mapped,
      },
    ],
  },
  {
    jobmiJobIds: ['charge-communication', 'community-manager', 'createur-contenu'],
    job: {
      code: 'E1103',
      label: 'Communication',
      slug: 'charge-communication',
      description: 'Développe et diffuse les messages d’une organisation auprès de ses publics.',
      mappingStatus: mapped,
    },
    summary:
      "Un métier de message et de coordination : comprendre une cible, produire des contenus et mesurer leur impact.",
    activities: [
      'Construire un plan de communication',
      'Créer ou coordonner des contenus',
      'Animer des canaux digitaux',
      'Suivre les résultats des actions',
    ],
    skills: [
      { id: 'e1103-redaction', label: 'Rédiger des contenus adaptés à une cible', category: 'savoir-faire' },
      { id: 'e1103-plan', label: 'Organiser une action de communication', category: 'savoir-faire' },
      { id: 'e1103-relation', label: 'Adapter sa communication à différents publics', category: 'savoir-etre' },
    ],
    workContexts: [
      { id: 'multi-projects', label: 'Gestion de plusieurs sujets en parallèle', kind: 'rhythm' },
      { id: 'public-contact', label: 'Contact avec publics internes ou externes', kind: 'relation' },
      { id: 'digital-channels', label: 'Utilisation d’outils et réseaux numériques', kind: 'environment' },
    ],
    relatedJobs: [
      {
        code: 'M1705',
        label: 'Marketing',
        slug: 'responsable-marketing',
        description: 'Développe la stratégie de marché, de marque ou d’offre.',
        mappingStatus: mapped,
      },
    ],
  },
  {
    jobmiJobIds: ['infirmier'],
    job: {
      code: 'J1506',
      label: 'Soins infirmiers généralistes',
      slug: 'infirmier',
      description: 'Assure des soins, surveille l’état des patients et coordonne leur accompagnement.',
      mappingStatus: mapped,
    },
    summary:
      "Un métier de soin concret et exigeant : accompagner, surveiller, pratiquer des gestes techniques et travailler en équipe.",
    activities: [
      'Réaliser des soins selon un protocole',
      'Surveiller l’état d’un patient',
      'Coordonner avec l’équipe médicale',
      'Informer les patients et familles',
    ],
    skills: [
      { id: 'j1506-soin', label: 'Réaliser des soins infirmiers', category: 'savoir-faire' },
      { id: 'j1506-protocole', label: 'Appliquer des protocoles de soin', category: 'savoir-faire' },
      { id: 'j1506-ecoute', label: 'Faire preuve d’écoute et d’empathie', category: 'savoir-etre' },
      { id: 'j1506-vigilance', label: 'Faire preuve de vigilance', category: 'savoir-etre' },
    ],
    workContexts: [
      { id: 'shift', label: 'Horaires variables possibles', kind: 'rhythm' },
      { id: 'team-care', label: 'Travail en équipe pluridisciplinaire', kind: 'relation' },
      { id: 'emotional-load', label: 'Charge émotionnelle possible', kind: 'constraint' },
      { id: 'standing', label: 'Travail debout et déplacements fréquents', kind: 'environment' },
    ],
    relatedJobs: [
      {
        code: 'J1501',
        label: 'Soins d’hygiène, de confort du patient',
        slug: 'aide-soignant',
        description: 'Accompagne les patients dans les actes de la vie quotidienne.',
        mappingStatus: mapped,
      },
      {
        code: 'K1207',
        label: 'Intervention socioéducative',
        slug: 'educateur-specialise',
        description: 'Accompagne des publics en difficulté vers plus d’autonomie.',
        mappingStatus: mapped,
      },
    ],
  },
  {
    jobmiJobIds: ['assistant-social', 'educateur-specialise', 'animateur-jeunesse'],
    job: {
      code: 'K1207',
      label: 'Intervention socioéducative',
      slug: 'educateur-specialise',
      description: 'Accompagne des personnes dans leur autonomie, leur insertion ou leur quotidien.',
      mappingStatus: mapped,
    },
    summary:
      "Un métier d’accompagnement : comprendre une situation, créer une relation de confiance et aider une personne à avancer.",
    activities: [
      'Évaluer une situation sociale ou éducative',
      'Accompagner une personne dans ses démarches',
      'Travailler avec des partenaires',
      'Construire un cadre d’accompagnement',
    ],
    skills: [
      { id: 'k1207-ecoute', label: 'Écouter et instaurer une relation de confiance', category: 'savoir-etre' },
      { id: 'k1207-analyse', label: 'Analyser une situation sociale', category: 'savoir-faire' },
      { id: 'k1207-coordination', label: 'Coordonner des actions avec des partenaires', category: 'savoir-faire' },
    ],
    workContexts: [
      { id: 'human-contact', label: 'Contact humain très présent', kind: 'relation' },
      { id: 'field-social', label: 'Déplacements ou terrain possibles', kind: 'mobility' },
      { id: 'complex-situations', label: 'Situations humaines parfois difficiles', kind: 'constraint' },
    ],
    relatedJobs: [
      {
        code: 'J1506',
        label: 'Soins infirmiers généralistes',
        slug: 'infirmier',
        description: 'Assure des soins et accompagne les patients.',
        mappingStatus: mapped,
      },
    ],
  },
  {
    jobmiJobIds: ['commercial', 'account-manager'],
    job: {
      code: 'D1402',
      label: 'Relation commerciale grands comptes et entreprises',
      slug: 'commercial',
      description: 'Développe et entretient une relation commerciale avec des clients.',
      mappingStatus: mapped,
    },
    summary:
      "Un métier de relation et d’objectif : comprendre un besoin, convaincre et suivre une relation client dans la durée.",
    activities: [
      'Prospecter de nouveaux clients',
      'Présenter une offre',
      'Négocier une proposition',
      'Suivre la satisfaction client',
    ],
    skills: [
      { id: 'd1402-convaincre', label: 'Argumenter et convaincre', category: 'savoir-faire' },
      { id: 'd1402-negocier', label: 'Négocier une offre commerciale', category: 'savoir-faire' },
      { id: 'd1402-relation', label: 'Entretenir une relation client', category: 'savoir-faire' },
    ],
    workContexts: [
      { id: 'objectives', label: 'Objectifs commerciaux à atteindre', kind: 'constraint' },
      { id: 'client-contact', label: 'Contact client fréquent', kind: 'relation' },
      { id: 'mobility-sales', label: 'Déplacements possibles', kind: 'mobility' },
    ],
    relatedJobs: [
      {
        code: 'M1705',
        label: 'Marketing',
        slug: 'responsable-marketing',
        description: 'Développe une stratégie de marché ou de marque.',
        mappingStatus: mapped,
      },
    ],
  },
  {
    jobmiJobIds: ['comptable', 'controleur-gestion'],
    job: {
      code: 'M1203',
      label: 'Comptabilité',
      slug: 'comptable',
      description: 'Suit, contrôle et analyse les opérations comptables et financières.',
      mappingStatus: mapped,
    },
    summary:
      "Un métier de rigueur : organiser l’information financière, contrôler les chiffres et produire des documents fiables.",
    activities: [
      'Enregistrer des opérations comptables',
      'Contrôler des données financières',
      'Préparer des déclarations ou bilans',
      'Suivre des indicateurs',
    ],
    skills: [
      { id: 'm1203-compta', label: 'Tenir une comptabilité', category: 'savoir-faire' },
      { id: 'm1203-controle', label: 'Contrôler la conformité de données', category: 'savoir-faire' },
      { id: 'm1203-precision', label: 'Faire preuve de précision', category: 'savoir-etre' },
    ],
    workContexts: [
      { id: 'office', label: 'Travail de bureau structuré', kind: 'environment' },
      { id: 'deadlines-accounting', label: 'Échéances régulières', kind: 'rhythm' },
      { id: 'confidential', label: 'Données sensibles à manipuler', kind: 'constraint' },
    ],
    relatedJobs: [
      {
        code: 'M1501',
        label: 'Assistanat en ressources humaines',
        slug: 'charge-rh',
        description: 'Gère des processus administratifs et humains.',
        mappingStatus: mapped,
      },
    ],
  },
];

export function getLocalRomeProfileByJobmiId(jobId: string) {
  return LOCAL_ROME_PROFILES.find((profile) => profile.jobmiJobIds.includes(jobId)) ?? null;
}

export function getLocalRomeProfileByCode(code: string) {
  return LOCAL_ROME_PROFILES.find((profile) => profile.job.code === code) ?? null;
}

export function getLocalRomeProfileBySlug(slug: string) {
  return LOCAL_ROME_PROFILES.find(
    (profile) => profile.job.slug === slug || profile.jobmiJobIds.includes(slug),
  ) ?? null;
}

export function getLocalRomeJobSheetByJobmiId(jobId: string): JobmiRomeJobSheet | null {
  const profile = getLocalRomeProfileByJobmiId(jobId);
  if (!profile) return null;
  return { ...profile, source: 'fallback' };
}

export function getLocalRomeJobSheetByCode(code: string): JobmiRomeJobSheet | null {
  const profile = getLocalRomeProfileByCode(code);
  if (!profile) return null;
  return { ...profile, source: 'fallback' };
}

export function getLocalRomeJobSheetBySlug(slug: string): JobmiRomeJobSheet | null {
  const profile = getLocalRomeProfileBySlug(slug);
  if (!profile) return null;
  return { ...profile, source: 'fallback' };
}

export function searchLocalRomeJobs(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return LOCAL_ROME_PROFILES.map((profile) => profile.job);
  }

  return LOCAL_ROME_PROFILES
    .filter((profile) => {
      const haystack = [
        profile.job.code,
        profile.job.label,
        profile.job.slug,
        profile.job.description,
        ...profile.jobmiJobIds,
        ...profile.skills.map((skill) => skill.label),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalized);
    })
    .map((profile) => profile.job);
}

export function getFallbackOpportunity(romeCode?: string): JobmiOpportunity[] {
  const profile = romeCode ? getLocalRomeProfileByCode(romeCode) : null;
  const label = profile?.job.label ?? 'un métier recommandé';

  return [
    {
      id: `fallback-offer-${romeCode ?? 'generic'}`,
      title: `Chercher des offres liées à ${label}`,
      company: 'France Travail',
      location: 'France',
      contractType: 'Offres à vérifier',
      experience: 'Débutant, alternance ou premier emploi selon les filtres',
      url: 'https://candidat.francetravail.fr/offres/recherche',
      source: 'fallback',
    },
  ];
}

export function getFallbackCompanyLeads(romeCode?: string): JobmiCompanyLead[] {
  const profile = romeCode ? getLocalRomeProfileByCode(romeCode) : null;
  const label = profile?.job.label ?? 'ce métier';

  return [
    {
      id: `fallback-company-${romeCode ?? 'generic'}`,
      name: `Entreprises à potentiel pour ${label}`,
      location: 'À préciser selon ta ville',
      hiringPotential: 'a_verifier',
      action: 'Utilise La Bonne Boîte pour cibler des candidatures spontanées ou demandes d’immersion.',
      url: 'https://labonneboite.francetravail.fr/',
      source: 'fallback',
    },
  ];
}

export function getFallbackLaborMarketSignal(romeCode = 'unknown', location = 'France'): JobmiLaborMarketSignal {
  const profile = getLocalRomeProfileByCode(romeCode);
  const label = profile?.job.label ?? 'ce métier';

  return {
    romeCode,
    location,
    level: 'inconnu',
    label: 'Donnée marché à vérifier',
    advice: `Pour ${label}, compare les offres locales, les entreprises à contacter et les métiers proches avant de choisir une formation.`,
    source: 'fallback',
  };
}

export function getFallbackTrainingReviews(): JobmiTrainingReview[] {
  return [
    {
      id: 'fallback-anotea',
      trainingName: 'Formations à comparer',
      organization: 'Anotéa / organismes de formation',
      rating: null,
      reviewCount: null,
      outcomeLabel: 'Avis et débouchés à vérifier dès que les APIs formation sont branchées.',
      source: 'fallback',
    },
  ];
}
