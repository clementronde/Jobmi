export interface MetierScores {
  [key: string]: number;
}
  
export const initialMetierScores: MetierScores = {
  "Infirmier": 0,
  "Psychologue": 0,
  "Assistant social": 0,
  "Coach en bien-être": 0,
  "Spécialiste en santé mentale au travail": 0,
  "Designer graphique": 0,
  "Architecte": 0,
  "Développeur de jeux": 0,
  "Spécialiste en IA": 0,
  "Développeur Blockchain": 0,
  "Data Scientist": 0,
  "Analyste financier": 0,
  "Ingénieur réseau": 0,
  "Spécialiste en cybersécurité": 0,
  "Analyste en Big Data": 0,
  "Responsable marketing": 0,
  "Chef de projet": 0,
  "Community manager": 0,
  "Consultant en développement durable": 0,
  "Consultant en transformation numérique": 0,
  "Responsable événementiel": 0,
  "Manager logistique": 0,
  "Consultant en télétravail": 0,
  "Responsable de la culture d'entreprise": 0,
  "Technicien de laboratoire": 0,
  "Ingénieur en biotechnologies": 0,
  "Expert en robotique": 0,
  "Géologue": 0,
  "Chimiste": 0,
  "Illustrateur": 0,
  "Artiste": 0,
  "UX/UI Designer": 0,
  "Développeur": 0,
  "Diététicien": 0,
  "Physiothérapeute": 0,
  "Programmeur": 0,
  "Growth Hacker": 0,
  "Expert en marketing digital": 0,
  "Acteur": 0,
  "Musicien": 0,
  "Critique littéraire": 0,
  "Éditeur": 0,
  "Spécialiste en réalité augmentée": 0,
  "Guide touristique": 0,
  "Photographe": 0,
  "Journaliste": 0,
  "Consultant en inclusion sociale": 0,
  "Expert en développement de produits bio": 0,
  "Ingénieur mécanique": 0,
  "Ingénieur civil": 0,
  "Ingénieur en énergies renouvelables": 0,
  "Technicien de maintenance": 0,
  "Conducteur de travaux": 0,
  "Responsable RSE": 0
};
  
const attribuerPoints = (classement: number, metiersList: string[], metiers: MetierScores) => {
  metiersList.forEach(metier => {
    if (classement === 1) {
      metiers[metier] += 5;
    } else if (classement === 2) {
      metiers[metier] += 4;
    } else if (classement === 3) {
      metiers[metier] += 3;
    } else if (classement === 4) {
      metiers[metier] += 2;
    } else if (classement === 5) {
      metiers[metier] += 1;
    }
  });
};
  
export const calculateResults = (answers: number[][]): MetierScores => {
  const metiers: MetierScores = { ...initialMetierScores };
  
  // Initialiser les points
  for (let metier in metiers) {
    metiers[metier] = 0;
  }
  
  const activites = answers[0];
  const environnement = answers[1];
  const force = answers[2];
  const secteur = answers[3];
  const interets = answers[4];
  
  // Attribuer des points en fonction des réponses
  // Activités préférées
  attribuerPoints(activites[0], ["Infirmier", "Psychologue", "Assistant social", "Coach en bien-être", "Spécialiste en santé mentale au travail"], metiers);
  attribuerPoints(activites[1], ["Designer graphique", "Architecte", "Développeur de jeux", "Spécialiste en IA", "Développeur Blockchain"], metiers);
  attribuerPoints(activites[2], ["Data Scientist", "Analyste financier", "Ingénieur réseau", "Spécialiste en cybersécurité", "Analyste en Big Data"], metiers);
  attribuerPoints(activites[3], ["Responsable marketing", "Chef de projet", "Community manager", "Consultant en développement durable", "Consultant en transformation numérique"], metiers);
  attribuerPoints(activites[4], ["Chef de projet", "Responsable événementiel", "Manager logistique", "Consultant en télétravail", "Responsable de la culture d'entreprise"], metiers);

  // Environnement de travail préféré
  attribuerPoints(environnement[0], ["Analyste financier", "Ingénieur réseau", "Data Scientist", "Développeur", "Ingénieur en énergies renouvelables"], metiers);
  attribuerPoints(environnement[1], ["Designer graphique", "Architecte", "Développeur de jeux", "UX/UI Designer", "Growth Hacker"], metiers);
  attribuerPoints(environnement[2], ["Responsable RH", "Commercial", "Community manager", "Coach en développement personnel", "Expert en marketing digital"], metiers);
  attribuerPoints(environnement[3], ["Géologue", "Ingénieur civil", "Photographe", "Guide touristique", "Journaliste"], metiers);
  attribuerPoints(environnement[4], ["Chimiste", "Ingénieur réseau", "Technicien de laboratoire", "Spécialiste en nanotechnologies", "Développeur d'assistants virtuels"], metiers);

    // Force professionnelle
  attribuerPoints(force[0], ["Designer graphique", "Illustrateur", "Développeur de jeux", "Artiste", "Développeur de réalité virtuelle"], metiers);
  attribuerPoints(force[1], ["Psychologue", "Infirmier", "Assistant social", "Coach en bien-être", "Spécialiste en santé mentale au travail"], metiers);
  attribuerPoints(force[2], ["Data Scientist", "Analyste financier", "Ingénieur réseau", "Analyste en Big Data", "Spécialiste en cybersécurité"], metiers);
  attribuerPoints(force[3], ["Responsable marketing", "Chef de projet", "Community manager", "Consultant en transformation numérique", "Consultant en développement durable"], metiers);
  attribuerPoints(force[4], ["Chef de projet", "Responsable événementiel", "Manager logistique", "Responsable RSE", "Consultant en télétravail"], metiers);

    // Secteur d’activité préféré
  attribuerPoints(secteur[0], ["Designer graphique", "Architecte", "Illustrateur", "Artiste", "UX/UI Designer"], metiers);
  attribuerPoints(secteur[1], ["Infirmier", "Psychologue", "Diététicien", "Coach en bien-être", "Spécialiste en santé mentale au travail"], metiers);
  attribuerPoints(secteur[2], ["Développeur", "Data Scientist", "Ingénieur réseau", "Spécialiste en IA", "Développeur Blockchain"], metiers);
  attribuerPoints(secteur[3], ["Responsable marketing", "Commercial", "Community manager", "Growth Hacker", "Expert en marketing digital"], metiers);
  attribuerPoints(secteur[4], ["Ingénieur mécanique", "Chimiste", "Géologue", "Ingénieur en énergies renouvelables", "Expert en robotique"], metiers);

    // Centres d'intérêt
  attribuerPoints(interets[0], ["Coach sportif", "Physiothérapeute", "Kinésithérapeute", "Guide touristique", "Spécialiste en santé mentale au travail"], metiers);
  attribuerPoints(interets[1], ["Critique littéraire", "Éditeur", "Musicologue", "Journaliste", "Spécialiste en réalité augmentée"], metiers);
  attribuerPoints(interets[2], ["Artiste", "Acteur", "Designer graphique", "Illustrateur", "Spécialiste en réalité augmentée"], metiers);
  attribuerPoints(interets[3], ["Développeur de jeux", "Programmeur", "Game designer", "Développeur de réalité virtuelle", "Développeur Blockchain"], metiers);
  attribuerPoints(interets[4], ["Guide touristique", "Photographe", "Journaliste", "Consultant en inclusion sociale", "Expert en développement de produits bio"], metiers);

  return metiers;
};
  
export const getTopResults = (metiers: MetierScores, topN: number = 3) => {
  return Object.entries(metiers).sort((a, b) => b[1] - a[1]).slice(0, topN);
};
    
  
export const getResultImage = (firstResult: string): string => {
  const metierImages = {
    "https://zupimages.net/up/24/26/gj3p.png": ["Data Scientist", "Analyste en Big Data", "Analyste financier", "Géologue", "Chimiste", "Technicien de laboratoire", "Ingénieur en biotechnologies", "Expert en robotique"],
    "https://zupimages.net/up/24/26/rga6.png": ["Designer graphique", "Architecte", "Illustrateur", "Artiste", "UX/UI Designer"],
    "https://zupimages.net/up/24/26/mahp.png": ["Développeur de jeux", "Spécialiste en IA", "Développeur Blockchain", "Ingénieur réseau", "Spécialiste en cybersécurité", "Développeur", "Programmeur", "Spécialiste en réalité augmentée"],
    "https://zupimages.net/up/24/26/rqtw.png": ["Infirmier", "Psychologue", "Assistant social", "Coach en bien-être", "Spécialiste en santé mentale au travail", "Diététicien", "Physiothérapeute", "Consultant en inclusion sociale"],
    "https://zupimages.net/up/24/26/7wma.png": ["Data Scientist", "Analyste financier", "Analyste en Big Data"],
    "https://zupimages.net/up/24/26/k4fp.png": ["Responsable marketing", "Community manager", "Growth Hacker", "Expert en marketing digital"],
    "https://zupimages.net/up/24/26/vyuz.png": ["Chef de projet", "Consultant en développement durable", "Consultant en transformation numérique", "Responsable événementiel", "Manager logistique", "Consultant en télétravail", "Responsable de la culture d'entreprise", "Responsable RSE"],
    "https://zupimages.net/up/24/26/12j9.png": ["Acteur", "Musicien", "Critique littéraire", "Éditeur"],
    "https://zupimages.net/up/24/26/g9o0.png": ["Guide touristique", "Photographe", "Journaliste"],
    "https://zupimages.net/up/24/26/khqj.png": ["Ingénieur mécanique", "Ingénieur civil", "Ingénieur en énergies renouvelables", "Conducteur de travaux", "Technicien de maintenance", "Expert en développement de produits bio"]
  };
  
  for (const [image, metiers] of Object.entries(metierImages)) {
    if (metiers.includes(firstResult)) {
      return image;
    }
  }
  
  return ""; // Default image or empty if no match found
};


export const stagesFormations = {
  "https://zupimages.net/up/24/26/gj3p.png": [
    { title: "Stage Gestion des Zones à Atmosphère Contrôlée", duration: "6 mois", link: "https://www.cidj.com/stage/stage-6-mois-gestion-des-zones-a-atmosphere-controlee-h-f-vitry-sur-seine-0" },
    { title: "Stage Assistant Laboratoire", duration: "2 mois", link: "https://www.welcometothejungle.com/fr/companies/900-care/jobs/stage-assistant-e-laboratoire_paris?q=b07ed64fab85f9c6c0bac2fc0c7ae002&o=29899f8d-7084-4db9-9abc-4e76d0c24c9c" },
    { title: "Stage Biotechnologies", duration: "2 mois", link: "https://www.welcometothejungle.com/fr/companies/onima/jobs/stage-biotechnologies-2-mois_evry-courcouronnes?q=b07ed64fab85f9c6c0bac2fc0c7ae002&o=a107653f-0772-414d-8e93-6e9655af5d0d" }
  ],
  "https://zupimages.net/up/24/26/rga6.png": [
    { title: "Assistant Création de Contenus", duration: "2 mois", link: "https://www.welcometothejungle.com/fr/companies/rouje/jobs/assistant-creation-de-contenus_paris_ROUJE_Yy4rQWe?q=82f34870f20164a2d175ac37e7c2a841&o=97a296f9-e72a-4b43-bdfe-d29d6a83bfcf" },
    { title: "Stage Graphisme et Création de Contenus", duration: "2 mois", link: "https://www.welcometothejungle.com/fr/companies/yay/jobs/stage-graphisme-et-creation-de-contenus_paris?q=82f34870f20164a2d175ac37e7c2a841&o=c14c80bd-5d34-4173-b186-4757a2083402" },
    { title: "Product Designer Stage", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/captain-contrat/jobs/product-designer-stage_paris?q=a4bb99483b0b5162f08bfcd84f22e778&o=9ec9faef-1932-4673-a016-fb3037b9324d" }
  ],
  "https://zupimages.net/up/24/26/mahp.png": [
    { title: "Stage Développeur Full Stack", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/equancy/jobs/stage-developpeur-full-stack-h-f_paris?q=c451db72a61eb75434e0adda8e00b0a3&o=1d86e834-317b-4909-a4c6-99c227fbfaf2" },
    { title: "Développeur Full Stack", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/amiral-gestion/jobs/developpeur-full-stack-stage_paris?q=c451db72a61eb75434e0adda8e00b0a3&o=a8e1230e-45eb-489f-9506-183929c00356" },
    { title: "Développeur(se) Frontend Stage", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/bene-bono/jobs/developpeur-se-frontend-stage-paris_paris?q=c451db72a61eb75434e0adda8e00b0a3&o=fd6987e9-4751-4c52-84e4-49f1777c99b8" }
  ],
  "https://zupimages.net/up/24/26/rqtw.png": [
    { title: "Stage Soignant", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+soignant&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=8408eb1445e46e4f" },
    { title: "Stage Diététicienne", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+diététicienne&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=8db741143adfd8df" },
    { title: "Stage Soignant", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+soignant&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=516122a87d3898ea" }
  ],
  "https://zupimages.net/up/24/26/7wma.png": [
    { title: "Accountant Intern", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/toucan-toco/jobs/accountant-intern_paris?q=d48f4ba756cf1fe7364fc50bdcff1314&o=3a277e6a-f6ef-4617-90cd-31b347679dbb" },
    { title: "Data Analyst IA", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/dataleon/jobs/data-analyst-ia-stage-h-f_paris_DATAL_lxeaAwx?q=5d0fde6135e94b30002d0cc0773f7f59&o=0c97fcd3-4f01-44a6-bf92-280417ba71ee" },
    { title: "Stage", duration: "6 mois", link: "https://fr.indeed.com/jobs?q=stage&l=Paris+%2875%29&from=searchOnHP&vjk=4bbaca0714fe127c&advn=6981731124978951" }
  ],
  "https://zupimages.net/up/24/26/k4fp.png": [
    { title: "Stage Chargé de Veille Programmes", duration: "6 mois", link: "https://www.cidj.com/stage/stage-charge-de-veille-programmes-f-h-paris" },
    { title: "Stage Assistant Community Manager", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/publicis-france-1/jobs/stage-assistant-community-manager-f-h_paris?q=d48f4ba756cf1fe7364fc50bdcff1314&o=3d7ab86a-e634-4f3e-8b48-7185f8e51b5a" },
    { title: "Chargé de Communication Junior", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/la-ruche-qui-dit-oui/jobs/charge-de-communication-junior_paris?q=ea69ce596be5413ac15e763f26f1cbe3&o=8298016c-86c2-42c0-ae1c-6abc1137a49e&p=true" }
  ],
  "https://zupimages.net/up/24/26/vyuz.png": [
    { title: "Stage Assistant Chef de Marque Suzi Wan", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/mars-france/jobs/stage-assistant-chef-de-marque-suzi-wan-h-f-x-juillet-2024_paris?q=f0fac9896afa8ef1ead9c3851903aeda&o=4ade01e7-5145-4599-bb08-5c26bf6ed79d" },
    { title: "Stage Assistant(e) Chef de Projet", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/hopscotch/jobs/stage-assistant-e-chef-de-projet-hopscotch-event-h-f_paris_HG_wbboXdk?q=ea69ce596be5413ac15e763f26f1cbe3&o=2ccb6730-4169-4040-8156-3502e64b60e6&p=true" },
    { title: "Stage Assistant Chef de Projet Digital Media", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/l-oreal/jobs/stage-de-6-mois-assistant-chef-de-projet-digital-media-website-juillet-2024_levallois-perret?q=d4e624643ef34409c97825031540743b&o=c6575025-fc82-4f14-91de-59f8e41fdedf" }
  ],
  "https://zupimages.net/up/24/26/12j9.png": [
    { title: "Stage Art", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+art&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=d7810dfe24868984&advn=4629412499192798" },
    { title: "Stage Art", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+art&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=274253e541b34911" },
    { title: "Stage Art", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+art&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=6273c72a137acd94" }
  ],
  "https://zupimages.net/up/24/26/g9o0.png": [
    { title: "Stage Tourisme", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+tourisme&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=0cf7903b51120c44" },
    { title: "Stage Tourisme", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+tourisme&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=abae3c029b12bbd9" },
    { title: "Stage Photo", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+photo&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=5867f0fb8201d5ae" }
  ],
  "https://zupimages.net/up/24/26/khqj.png": [
    { title: "Stage Ingénieur", duration: "6 mois", link: "https://fr.indeed.com/jobs?q=stage+ing%C3%A9nieur&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=ce65c2e12a801de0&advn=8565895322733034" },
    { title: "Stage Ingénieur", duration: "6 mois", link: "https://fr.indeed.com/jobs?q=stage+ing%C3%A9nieur&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=e3426f2b531ea1c5" },
    { title: "Stage Ingénieur", duration: "6 mois", link: "https://fr.indeed.com/jobs?q=stage+ing%C3%A9nieur&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=f25cbb08b6edcdb4" }
  ]
};