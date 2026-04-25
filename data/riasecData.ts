import type { RiasecDimension, RiasecQuestion, JobFamily, Job } from '@/types/riasec';

export const DIMENSION_LABELS: Record<
  RiasecDimension,
  { label: string; description: string; color: string }
> = {
  R: {
    label: 'Réaliste',
    description: 'Tu aimes le concret, le technique et travailler de tes mains.',
    color: '#2D9E6B',
  },
  I: {
    label: 'Investigateur',
    description: 'Tu aimes analyser, comprendre et résoudre des problèmes complexes.',
    color: '#3B82F6',
  },
  A: {
    label: 'Artistique',
    description: "Tu aimes créer, t'exprimer et imaginer des choses nouvelles.",
    color: '#EC4899',
  },
  S: {
    label: 'Social',
    description: 'Tu aimes aider, enseigner et travailler avec les autres.',
    color: '#F59E0B',
  },
  E: {
    label: 'Entreprenant',
    description: 'Tu aimes convaincre, diriger et prendre des initiatives.',
    color: '#EF4444',
  },
  C: {
    label: 'Conventionnel',
    description: 'Tu aimes organiser, structurer et travailler avec précision.',
    color: '#8B5CF6',
  },
};

// 30 questions concrètes — 5 par dimension RIASEC
export const RIASEC_QUESTIONS: RiasecQuestion[] = [
  // ── R · Réaliste ──────────────────────────────────────────────────────────
  { id: 'r1', dimension: 'R', text: "Réparer un objet ou un appareil du quotidien me plairait" },
  { id: 'r2', dimension: 'R', text: "Je me sentirais plus utile dans un métier concret que dans un travail très théorique" },
  { id: 'r3', dimension: 'R', text: "Travailler avec des outils, des machines ou du matériel technique pourrait me convenir" },
  { id: 'r4', dimension: 'R', text: "Je préfère souvent voir un résultat concret à la fin de ma journée" },
  { id: 'r5', dimension: 'R', text: "Les environnements de terrain, d’atelier ou d’intervention m’attirent" },

  // ── I · Investigateur ────────────────────────────────────────────────────
  { id: 'i1', dimension: 'I', text: "Analyser un problème complexe jusqu’à trouver une solution me stimule" },
  { id: 'i2', dimension: 'I', text: "J’aime comprendre comment et pourquoi les choses fonctionnent" },
  { id: 'i3', dimension: 'I', text: "Chercher, enquêter ou faire de la veille sur un sujet m’intéresserait" },
  { id: 'i4', dimension: 'I', text: "Je préfère souvent réfléchir avant d’agir" },
  { id: 'i5', dimension: 'I', text: "Les domaines scientifiques, tech, data ou recherche m’attirent" },

  // ── A · Artistique ────────────────────────────────────────────────────────
  { id: 'a1', dimension: 'A', text: "Créer des visuels, du contenu, des idées ou des ambiances me plairait" },
  { id: 'a2', dimension: 'A', text: "J’aime imaginer des concepts ou des solutions originales" },
  { id: 'a3', dimension: 'A', text: "L’esthétique, le style et la mise en forme comptent beaucoup pour moi" },
  { id: 'a4', dimension: 'A', text: "Je me sens bien dans les activités où je peux m’exprimer librement" },
  { id: 'a5', dimension: 'A', text: "Je serais attiré(e) par un métier où la créativité a une vraie place" },

  // ── S · Social ────────────────────────────────────────────────────────────
  { id: 's1', dimension: 'S', text: "Aider quelqu’un à avancer ou à résoudre un problème me motive" },
  { id: 's2', dimension: 'S', text: "J’aime expliquer, transmettre ou accompagner" },
  { id: 's3', dimension: 'S', text: "Je préfère souvent travailler avec des personnes plutôt que seul(e)" },
  { id: 's4', dimension: 'S', text: "Je pourrais me voir dans un métier utile pour le bien-être ou l’apprentissage des autres" },
  { id: 's5', dimension: 'S', text: "Créer un climat de confiance me semble naturel" },

  // ── E · Entreprenant ──────────────────────────────────────────────────────
  { id: 'e1', dimension: 'E', text: "Prendre des initiatives et lancer des projets me stimule" },
  { id: 'e2', dimension: 'E', text: "Convaincre, vendre ou défendre une idée me plairait" },
  { id: 'e3', dimension: 'E', text: "Je préfère souvent décider plutôt qu’attendre des consignes" },
  { id: 'e4', dimension: 'E', text: "Les environnements rapides et ambitieux m’attirent" },
  { id: 'e5', dimension: 'E', text: "Je pourrais me voir gérer un projet, une équipe ou une activité" },

  // ── C · Conventionnel ────────────────────────────────────────────────────
  { id: 'c1', dimension: 'C', text: "J’aime quand les choses sont bien organisées et structurées" },
  { id: 'c2', dimension: 'C', text: "Je suis à l’aise avec des procédures claires et un cadre précis" },
  { id: 'c3', dimension: 'C', text: "Travailler avec des données, des chiffres ou des tableaux pourrait me convenir" },
  { id: 'c4', dimension: 'C', text: "Je fais attention aux détails et aux erreurs" },
  { id: 'c5', dimension: 'C', text: "Je préfère souvent un environnement stable à l’improvisation permanente" },
];

export const JOB_FAMILIES: JobFamily[] = [
  {
    id: 'soin-aide',
    name: 'Soin & relation d\'aide',
    description:
      'Tu aimes aider, soigner et accompagner les autres dans leurs difficultés. Ces métiers te mettent au contact direct des personnes et font une vraie différence dans leur vie.',
    riasecCodes: ['S', 'I', 'C'],
    jobIds: ['infirmier', 'aide-soignant', 'psychologue', 'educateur-specialise', 'assistant-social', 'orthophoniste', 'kinesitherapeute'],
  },
  {
    id: 'creatif-comm',
    name: 'Créatif & communication',
    description:
      "Tu aimes créer, raconter et communiquer avec impact. Ces métiers valorisent ton sens esthétique et ta capacité à toucher les gens par tes créations.",
    riasecCodes: ['A', 'E', 'S'],
    jobIds: ['graphiste', 'designer-ux-ui', 'photographe', 'journaliste', 'charge-communication', 'motion-designer', 'createur-contenu'],
  },
  {
    id: 'numerique-tech',
    name: 'Numérique & tech',
    description:
      "Tu aimes résoudre des problèmes techniques, construire des systèmes et travailler avec des données. Ces métiers sont en pleine expansion.",
    riasecCodes: ['I', 'C', 'R'],
    jobIds: ['developpeur-web', 'data-analyste', 'ingenieur-reseau', 'specialiste-cybersecurite', 'devops', 'data-scientist'],
  },
  {
    id: 'artisanat-technique',
    name: 'Artisanat & métiers techniques',
    description:
      "Tu aimes travailler de tes mains et voir un résultat concret. Ces métiers permettent de maîtriser un savoir-faire précieux et souvent très demandé.",
    riasecCodes: ['R', 'C', 'I'],
    jobIds: ['cuisinier', 'patissier', 'menuisier', 'electricien', 'mecanicien', 'plombier', 'technicien-maintenance'],
  },
  {
    id: 'commerce-entrepreneuriat',
    name: 'Commerce & entrepreneuriat',
    description:
      "Tu aimes convaincre, négocier et mener des projets ambitieux. Ces métiers valorisent ton énergie, ta combativité et ton sens des relations.",
    riasecCodes: ['E', 'S', 'C'],
    jobIds: ['commercial', 'responsable-marketing', 'charge-projet', 'community-manager', 'chef-produit', 'account-manager'],
  },
  {
    id: 'science-recherche',
    name: 'Sciences & recherche',
    description:
      "Tu aimes comprendre le monde en profondeur, expérimenter et repousser les limites des connaissances. Ces métiers demandent rigueur et curiosité.",
    riasecCodes: ['I', 'R', 'A'],
    jobIds: ['chimiste', 'biologiste', 'ingenieur-rd', 'physicien', 'chercheur', 'ingenieur-materiaux'],
  },
  {
    id: 'enseignement-formation',
    name: 'Enseignement & transmission',
    description:
      "Tu aimes partager ce que tu sais et guider les autres dans leur apprentissage. Ces métiers ont un impact durable sur les personnes que tu formes.",
    riasecCodes: ['S', 'A', 'C'],
    jobIds: ['professeur', 'formateur', 'conseiller-orientation', 'coach-professionnel', 'animateur-jeunesse'],
  },
  {
    id: 'gestion-organisation',
    name: 'Gestion & organisation',
    description:
      "Tu aimes structurer, optimiser et faire fonctionner les choses efficacement. Ces métiers te permettent de piloter des ressources et de donner du sens à la complexité.",
    riasecCodes: ['C', 'E', 'I'],
    jobIds: ['comptable', 'charge-rh', 'gestionnaire-projet', 'juriste', 'controleur-gestion', 'office-manager'],
  },
  {
    id: 'environnement-terrain',
    name: 'Environnement & terrain',
    description:
      "Tu aimes être en contact avec la nature et contribuer à la préservation de la planète. Ces métiers ont du sens dans un monde en transition écologique.",
    riasecCodes: ['R', 'I', 'S'],
    jobIds: ['agriculteur', 'garde-forestier', 'ecologue', 'paysagiste', 'geologue', 'agent-territorial'],
  },
  {
    id: 'arts-spectacle',
    name: 'Arts & spectacle',
    description:
      "Tu aimes te produire, t'exprimer et toucher les gens avec ta présence ou ton art. Ces métiers demandent passion, persévérance et une grande dose de courage.",
    riasecCodes: ['A', 'S', 'E'],
    jobIds: ['acteur', 'musicien', 'danseur', 'animateur-tv', 'chef-projet-culturel', 'regisseur'],
  },
];

export const JOBS: Job[] = [
  // ── Soin & aide ───────────────────────────────────────────────────────────
  { id: 'infirmier', slug: 'infirmier', name: 'Infirmier(e)', description: 'Soigne et accompagne les patients au quotidien en hôpital, clinique ou à domicile.', riasecTags: ['S', 'I', 'C'], formationLevel: 'Bac +3 · DE Infirmier', familyId: 'soin-aide', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'aide-soignant', slug: 'aide-soignant', name: 'Aide-soignant(e)', description: "Accompagne les patients dans les actes de la vie quotidienne en lien avec l'infirmier.", riasecTags: ['S', 'C', 'R'], formationLevel: 'DEAS · 1 an', familyId: 'soin-aide', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'psychologue', slug: 'psychologue', name: 'Psychologue', description: 'Écoute, analyse et accompagne les personnes qui traversent des difficultés psychologiques.', riasecTags: ['S', 'I', 'A'], formationLevel: 'Bac +5 · Master Psycho', familyId: 'soin-aide', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'educateur-specialise', slug: 'educateur-specialise', name: 'Éducateur/trice spécialisé(e)', description: "Accompagne des personnes en difficulté sociale ou en situation de handicap vers plus d'autonomie.", riasecTags: ['S', 'A', 'C'], formationLevel: 'DEES · Bac +3', familyId: 'soin-aide', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'assistant-social', slug: 'assistant-social', name: 'Assistant(e) social(e)', description: "Aide les personnes en difficulté à accéder à leurs droits et à améliorer leur situation de vie.", riasecTags: ['S', 'C', 'I'], formationLevel: 'DEASS · Bac +3', familyId: 'soin-aide', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'orthophoniste', slug: 'orthophoniste', name: 'Orthophoniste', description: 'Prend en charge les troubles du langage, de la parole et de la communication.', riasecTags: ['S', 'I', 'C'], formationLevel: 'Bac +5 · CFUO', familyId: 'soin-aide', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'kinesitherapeute', slug: 'kinesitherapeute', name: 'Kinésithérapeute', description: 'Rééduque les patients par le mouvement pour restaurer leurs capacités physiques.', riasecTags: ['S', 'R', 'I'], formationLevel: 'Bac +5 · DE Kiné', familyId: 'soin-aide', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },

  // ── Créatif & comm ────────────────────────────────────────────────────────
  { id: 'graphiste', slug: 'graphiste', name: 'Graphiste', description: 'Conçoit des visuels, logos, identités de marque et supports de communication.', riasecTags: ['A', 'E', 'C'], formationLevel: 'BTS / Bachelor · Bac +2 à +3', familyId: 'creatif-comm', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'designer-ux-ui', slug: 'designer-ux-ui', name: 'Designer UX/UI', description: 'Conçoit des interfaces numériques intuitives et esthétiques pour apps et sites web.', riasecTags: ['A', 'I', 'C'], formationLevel: 'Bachelor / Master · Bac +3 à +5', familyId: 'creatif-comm', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'photographe', slug: 'photographe', name: 'Photographe', description: "Capture des moments et des univers à travers son objectif, pour des clients ou de façon artistique.", riasecTags: ['A', 'R', 'E'], formationLevel: 'BTS / Autodidacte possible', familyId: 'creatif-comm', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'journaliste', slug: 'journaliste', name: 'Journaliste', description: 'Enquête, rédige et diffuse des informations pour informer et éclairer le public.', riasecTags: ['A', 'S', 'I'], formationLevel: 'Bac +3 à +5 · école de journalisme', familyId: 'creatif-comm', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'charge-communication', slug: 'charge-communication', name: 'Chargé(e) de communication', description: "Développe la visibilité d'une organisation auprès de ses publics à travers des supports variés.", riasecTags: ['A', 'E', 'S'], formationLevel: 'Bac +3 à +5', familyId: 'creatif-comm', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'motion-designer', slug: 'motion-designer', name: 'Motion designer', description: 'Crée des animations et vidéos visuellement impactantes pour la communication digitale.', riasecTags: ['A', 'I', 'C'], formationLevel: 'BTS / Bachelor · Bac +2 à +3', familyId: 'creatif-comm', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'createur-contenu', slug: 'createur-contenu', name: 'Créateur/trice de contenu', description: 'Produit du contenu engageant sur les réseaux sociaux ou plateformes numériques.', riasecTags: ['A', 'E', 'S'], formationLevel: 'Autodidacte possible / BTS', familyId: 'creatif-comm', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },

  // ── Numérique & tech ──────────────────────────────────────────────────────
  { id: 'developpeur-web', slug: 'developpeur-web', name: 'Développeur/se web', description: 'Conçoit et développe des applications et sites web, du front-end au back-end.', riasecTags: ['I', 'C', 'R'], formationLevel: 'BTS / Licence / Bootcamp · Bac +2 à +5', familyId: 'numerique-tech', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'data-analyste', slug: 'data-analyste', name: 'Data analyste', description: "Analyse des données pour aider les entreprises à prendre de meilleures décisions.", riasecTags: ['I', 'C', 'E'], formationLevel: 'Bac +3 à +5', familyId: 'numerique-tech', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'ingenieur-reseau', slug: 'ingenieur-reseau', name: 'Ingénieur(e) réseau', description: "Conçoit et maintient les infrastructures informatiques et réseaux des entreprises.", riasecTags: ['I', 'R', 'C'], formationLevel: 'Bac +5 · école ingénieur / Master', familyId: 'numerique-tech', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'specialiste-cybersecurite', slug: 'specialiste-cybersecurite', name: 'Spécialiste cybersécurité', description: 'Protège les systèmes informatiques contre les attaques et les intrusions.', riasecTags: ['I', 'C', 'R'], formationLevel: 'Bac +5 · Master / école ingénieur', familyId: 'numerique-tech', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'devops', slug: 'devops', name: 'Ingénieur(e) DevOps', description: "Automatise et optimise les processus de déploiement et d'infrastructure logicielle.", riasecTags: ['I', 'C', 'E'], formationLevel: 'Bac +3 à +5', familyId: 'numerique-tech', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'data-scientist', slug: 'data-scientist', name: 'Data scientist', description: "Développe des modèles prédictifs et d'intelligence artificielle à partir de grandes masses de données.", riasecTags: ['I', 'C', 'A'], formationLevel: 'Bac +5 · Master / école ingénieur', familyId: 'numerique-tech', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },

  // ── Artisanat & technique ─────────────────────────────────────────────────
  { id: 'cuisinier', slug: 'cuisinier', name: 'Cuisinier(e) / Chef(fe)', description: 'Prépare des plats savoureux et crée des expériences gustatives pour les clients.', riasecTags: ['R', 'A', 'C'], formationLevel: 'CAP / BEP / BP', familyId: 'artisanat-technique', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'patissier', slug: 'patissier', name: 'Pâtissier(e)', description: 'Crée des pâtisseries, desserts et viennoiseries alliant technique et esthétique.', riasecTags: ['R', 'A', 'C'], formationLevel: 'CAP / BEP / BP', familyId: 'artisanat-technique', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'menuisier', slug: 'menuisier', name: 'Menuisier(e)', description: 'Fabrique, installe et répare des ouvrages en bois ou matériaux dérivés.', riasecTags: ['R', 'C', 'I'], formationLevel: 'CAP / BEP / BP', familyId: 'artisanat-technique', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'electricien', slug: 'electricien', name: 'Électricien(ne)', description: 'Installe et entretient les installations électriques dans les bâtiments et industries.', riasecTags: ['R', 'C', 'I'], formationLevel: 'CAP / BEP / Bac Pro', familyId: 'artisanat-technique', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'mecanicien', slug: 'mecanicien', name: 'Mécanicien(ne) auto', description: 'Diagnostique et répare les pannes de véhicules automobiles.', riasecTags: ['R', 'I', 'C'], formationLevel: 'CAP / BEP / Bac Pro', familyId: 'artisanat-technique', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'plombier', slug: 'plombier', name: 'Plombier(e)', description: 'Installe et entretient les réseaux de plomberie et de chauffage.', riasecTags: ['R', 'C', 'I'], formationLevel: 'CAP / BEP / Bac Pro', familyId: 'artisanat-technique', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'technicien-maintenance', slug: 'technicien-maintenance', name: 'Technicien(ne) de maintenance', description: 'Assure le bon fonctionnement des équipements industriels ou de bâtiment.', riasecTags: ['R', 'I', 'C'], formationLevel: 'BTS / DUT · Bac +2', familyId: 'artisanat-technique', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },

  // ── Commerce & entrepreneuriat ────────────────────────────────────────────
  { id: 'commercial', slug: 'commercial', name: 'Commercial(e)', description: 'Développe un portefeuille clients, négocie et conclut des ventes pour une entreprise.', riasecTags: ['E', 'S', 'C'], formationLevel: 'BTS / Licence / Bachelor', familyId: 'commerce-entrepreneuriat', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'responsable-marketing', slug: 'responsable-marketing', name: 'Responsable marketing', description: "Définit et pilote la stratégie marketing d'une marque ou d'un produit.", riasecTags: ['E', 'A', 'C'], formationLevel: 'Bac +4 à +5', familyId: 'commerce-entrepreneuriat', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'charge-projet', slug: 'charge-projet', name: 'Chargé(e) de projet', description: 'Coordonne et pilote des projets pour les mener à bien dans les délais et le budget.', riasecTags: ['E', 'C', 'S'], formationLevel: 'Bac +3 à +5', familyId: 'commerce-entrepreneuriat', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'community-manager', slug: 'community-manager', name: 'Community manager', description: "Anime et développe les communautés en ligne d'une marque ou d'une organisation.", riasecTags: ['E', 'A', 'S'], formationLevel: 'BTS / Bachelor · Bac +2 à +3', familyId: 'commerce-entrepreneuriat', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'chef-produit', slug: 'chef-produit', name: 'Chef(fe) de produit', description: "Définit la vision et la feuille de route d'un produit en lien avec les équipes tech et business.", riasecTags: ['E', 'I', 'C'], formationLevel: 'Bac +4 à +5', familyId: 'commerce-entrepreneuriat', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'account-manager', slug: 'account-manager', name: 'Account manager', description: 'Gère la relation avec les clients existants et développe les comptes stratégiques.', riasecTags: ['E', 'S', 'C'], formationLevel: 'Bac +3 à +5', familyId: 'commerce-entrepreneuriat', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },

  // ── Science & recherche ───────────────────────────────────────────────────
  { id: 'chimiste', slug: 'chimiste', name: 'Chimiste', description: 'Analyse et synthétise des substances chimiques dans des contextes industriels ou de recherche.', riasecTags: ['I', 'R', 'C'], formationLevel: 'Bac +5 · Master / école ingénieur', familyId: 'science-recherche', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'biologiste', slug: 'biologiste', name: 'Biologiste', description: "Étudie les êtres vivants, leurs mécanismes et leurs interactions avec l'environnement.", riasecTags: ['I', 'R', 'S'], formationLevel: 'Bac +5 à +8 · Master / Doctorat', familyId: 'science-recherche', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'ingenieur-rd', slug: 'ingenieur-rd', name: 'Ingénieur(e) R&D', description: 'Développe de nouveaux produits ou procédés en combinant recherche et ingénierie.', riasecTags: ['I', 'R', 'A'], formationLevel: 'Bac +5 · école ingénieur / Master', familyId: 'science-recherche', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'physicien', slug: 'physicien', name: 'Physicien(ne)', description: "Étudie les lois fondamentales qui régissent l'univers, de l'infiniment petit au grand.", riasecTags: ['I', 'R', 'C'], formationLevel: 'Bac +5 à +8 · Master / Doctorat', familyId: 'science-recherche', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'chercheur', slug: 'chercheur', name: 'Chercheur(se)', description: 'Mène des travaux de recherche fondamentale ou appliquée pour faire avancer les connaissances.', riasecTags: ['I', 'A', 'C'], formationLevel: 'Doctorat · Bac +8', familyId: 'science-recherche', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'ingenieur-materiaux', slug: 'ingenieur-materiaux', name: 'Ingénieur(e) en matériaux', description: 'Développe et optimise des matériaux (métaux, plastiques, composites) pour diverses applications.', riasecTags: ['I', 'R', 'C'], formationLevel: 'Bac +5 · école ingénieur', familyId: 'science-recherche', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },

  // ── Enseignement & formation ──────────────────────────────────────────────
  { id: 'professeur', slug: 'professeur', name: 'Professeur(e)', description: 'Enseigne une discipline à des élèves ou étudiants dans un établissement scolaire ou universitaire.', riasecTags: ['S', 'I', 'C'], formationLevel: 'Master MEEF · Bac +5', familyId: 'enseignement-formation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'formateur', slug: 'formateur', name: 'Formateur/trice', description: 'Conçoit et anime des formations professionnelles pour adultes dans des organismes ou entreprises.', riasecTags: ['S', 'A', 'I'], formationLevel: 'Variable · Bac +2 à +5', familyId: 'enseignement-formation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'conseiller-orientation', slug: 'conseiller-orientation', name: "Conseiller(e) d'orientation", description: "Accompagne les jeunes et les adultes dans leur réflexion sur leur orientation scolaire et professionnelle.", riasecTags: ['S', 'I', 'E'], formationLevel: 'Master Psychologie · Bac +5', familyId: 'enseignement-formation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'coach-professionnel', slug: 'coach-professionnel', name: 'Coach professionnel', description: "Accompagne des individus ou des équipes pour atteindre leurs objectifs professionnels et personnels.", riasecTags: ['S', 'E', 'A'], formationLevel: 'Formation certifiante + expérience', familyId: 'enseignement-formation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'animateur-jeunesse', slug: 'animateur-jeunesse', name: 'Animateur/trice jeunesse', description: 'Encadre et anime des activités éducatives, sportives ou culturelles pour les jeunes.', riasecTags: ['S', 'A', 'R'], formationLevel: 'BAFA / BPJEPS', familyId: 'enseignement-formation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },

  // ── Gestion & organisation ────────────────────────────────────────────────
  { id: 'comptable', slug: 'comptable', name: 'Comptable', description: "Gère la comptabilité d'une entreprise : enregistrements, bilans, déclarations fiscales.", riasecTags: ['C', 'I', 'E'], formationLevel: 'BTS / DCG / DSCG', familyId: 'gestion-organisation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'charge-rh', slug: 'charge-rh', name: 'Chargé(e) RH', description: "Gère les ressources humaines d'une organisation : recrutement, formation, gestion des talents.", riasecTags: ['C', 'S', 'E'], formationLevel: 'Bac +3 à +5', familyId: 'gestion-organisation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'gestionnaire-projet', slug: 'gestionnaire-projet', name: 'Gestionnaire de projet', description: 'Planifie, organise et suit des projets complexes pour les livrer dans les délais et le budget.', riasecTags: ['C', 'E', 'I'], formationLevel: 'Bac +4 à +5', familyId: 'gestion-organisation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'juriste', slug: 'juriste', name: 'Juriste', description: "Analyse les questions juridiques et conseille les entreprises ou particuliers sur leurs droits.", riasecTags: ['C', 'I', 'S'], formationLevel: 'Master Droit · Bac +5', familyId: 'gestion-organisation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'controleur-gestion', slug: 'controleur-gestion', name: 'Contrôleur(se) de gestion', description: "Analyse la performance financière de l'entreprise et aide à la prise de décision stratégique.", riasecTags: ['C', 'I', 'E'], formationLevel: 'Bac +4 à +5', familyId: 'gestion-organisation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'office-manager', slug: 'office-manager', name: 'Office manager', description: "Assure le bon fonctionnement opérationnel d'une entreprise au quotidien.", riasecTags: ['C', 'S', 'E'], formationLevel: 'BTS / Bachelor', familyId: 'gestion-organisation', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },

  // ── Environnement & terrain ───────────────────────────────────────────────
  { id: 'agriculteur', slug: 'agriculteur', name: 'Agriculteur/trice', description: 'Produit des denrées alimentaires en gérant des terres, des cultures ou un élevage.', riasecTags: ['R', 'I', 'C'], formationLevel: 'BPREA / Bac Pro / BTS', familyId: 'environnement-terrain', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'garde-forestier', slug: 'garde-forestier', name: 'Garde forestier(e)', description: 'Surveille et protège les forêts et espaces naturels en lien avec les enjeux écologiques.', riasecTags: ['R', 'I', 'S'], formationLevel: 'BTS / Licence Pro', familyId: 'environnement-terrain', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'ecologue', slug: 'ecologue', name: 'Écologue', description: 'Étudie les écosystèmes et conseille sur la préservation de la biodiversité.', riasecTags: ['I', 'R', 'S'], formationLevel: 'Master Écologie · Bac +5', familyId: 'environnement-terrain', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'paysagiste', slug: 'paysagiste', name: 'Paysagiste', description: 'Conçoit et aménage des espaces verts, jardins et parcs urbains ou naturels.', riasecTags: ['R', 'A', 'I'], formationLevel: 'BTS / Licence Pro / École paysage', familyId: 'environnement-terrain', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'geologue', slug: 'geologue', name: 'Géologue', description: "Étudie la structure, la composition et l'histoire de la Terre pour diverses applications.", riasecTags: ['I', 'R', 'C'], formationLevel: 'Master Géologie · Bac +5', familyId: 'environnement-terrain', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'agent-territorial', slug: 'agent-territorial', name: 'Agent(e) territorial(e)', description: 'Travaille pour une collectivité locale pour assurer les services publics de proximité.', riasecTags: ['S', 'C', 'R'], formationLevel: 'Variable · CAP à Bac +5', familyId: 'environnement-terrain', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },

  // ── Arts & spectacle ──────────────────────────────────────────────────────
  { id: 'acteur', slug: 'acteur', name: 'Acteur/Actrice', description: 'Interprète des rôles au théâtre, au cinéma ou à la télévision pour toucher le public.', riasecTags: ['A', 'S', 'E'], formationLevel: 'Conservatoire / École de théâtre / Autodidacte', familyId: 'arts-spectacle', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'musicien', slug: 'musicien', name: 'Musicien(ne)', description: 'Joue, compose ou interprète de la musique dans des contextes variés (concerts, studios, cours).', riasecTags: ['A', 'R', 'E'], formationLevel: 'Conservatoire / Autodidacte', familyId: 'arts-spectacle', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'danseur', slug: 'danseur', name: 'Danseur/Danseuse', description: "S'exprime par le mouvement et la chorégraphie sur scène ou dans d'autres contextes artistiques.", riasecTags: ['A', 'R', 'S'], formationLevel: 'École de danse / Conservatoire', familyId: 'arts-spectacle', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'animateur-tv', slug: 'animateur-tv', name: 'Animateur/trice TV ou radio', description: 'Présente et anime des émissions pour divertir, informer ou éduquer un large public.', riasecTags: ['A', 'E', 'S'], formationLevel: 'BTS / École de journalisme / Autodidacte', familyId: 'arts-spectacle', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'chef-projet-culturel', slug: 'chef-projet-culturel', name: 'Chef(fe) de projet culturel', description: 'Organise et pilote des événements ou projets culturels (festivals, expos, résidences).', riasecTags: ['A', 'E', 'C'], formationLevel: 'Licence / Master · Bac +3 à +5', familyId: 'arts-spectacle', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
  { id: 'regisseur', slug: 'regisseur', name: 'Régisseur/se de spectacle', description: 'Coordonne les aspects techniques et logistiques des spectacles vivants.', riasecTags: ['A', 'R', 'C'], formationLevel: 'BTS / DUT / DNSP', familyId: 'arts-spectacle', links: { experience: '/tester-un-metier', formation: '/stage-et-formation' } },
];
