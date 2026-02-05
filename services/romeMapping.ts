/**
 * Mapping des métiers Jobmi vers les codes ROME de France Travail
 *
 * Les codes ROME (Répertoire Opérationnel des Métiers et des Emplois) sont utilisés
 * par France Travail pour catégoriser les offres d'emploi.
 *
 * Documentation: https://www.francetravail.fr/employeur/vos-recrutements/le-rome-et-les-fiches-metiers.html
 */

export interface RomeMapping {
  metier: string;
  codeRome: string;
  libelleRome: string;
  keywords: string[]; // Mots-clés additionnels pour affiner la recherche
}

export const romeMapping: RomeMapping[] = [
  // Santé et Bien-être
  { metier: "Infirmier", codeRome: "J1506", libelleRome: "Soins infirmiers généralistes", keywords: ["infirmier", "IDE", "soins"] },
  { metier: "Psychologue", codeRome: "K1104", libelleRome: "Psychologie", keywords: ["psychologue", "psychologie", "thérapie"] },
  { metier: "Assistant social", codeRome: "K1201", libelleRome: "Action sociale", keywords: ["assistant social", "travailleur social"] },
  { metier: "Coach en bien-être", codeRome: "K1103", libelleRome: "Développement personnel et bien-être de la personne", keywords: ["coach", "bien-être", "développement personnel"] },
  { metier: "Spécialiste en santé mentale au travail", codeRome: "K1104", libelleRome: "Psychologie", keywords: ["santé mentale", "QVT", "risques psychosociaux"] },
  { metier: "Diététicien", codeRome: "J1402", libelleRome: "Diététique", keywords: ["diététicien", "nutrition", "alimentation"] },
  { metier: "Physiothérapeute", codeRome: "J1404", libelleRome: "Kinésithérapie", keywords: ["kinésithérapeute", "physiothérapeute", "rééducation"] },

  // Design et Créatif
  { metier: "Designer graphique", codeRome: "E1205", libelleRome: "Réalisation de contenus multimédias", keywords: ["designer", "graphiste", "design graphique"] },
  { metier: "Architecte", codeRome: "F1101", libelleRome: "Architecture du BTP et du paysage", keywords: ["architecte", "architecture", "BTP"] },
  { metier: "Illustrateur", codeRome: "B1101", libelleRome: "Création en arts plastiques", keywords: ["illustrateur", "illustration", "dessin"] },
  { metier: "Artiste", codeRome: "B1101", libelleRome: "Création en arts plastiques", keywords: ["artiste", "art", "création"] },
  { metier: "UX/UI Designer", codeRome: "E1205", libelleRome: "Réalisation de contenus multimédias", keywords: ["UX", "UI", "designer", "interface", "expérience utilisateur"] },
  { metier: "Photographe", codeRome: "E1201", libelleRome: "Photographie", keywords: ["photographe", "photo", "photographie"] },

  // Technologie et IT
  { metier: "Développeur", codeRome: "M1805", libelleRome: "Études et développement informatique", keywords: ["développeur", "programmeur", "informatique"] },
  { metier: "Développeur de jeux", codeRome: "M1805", libelleRome: "Études et développement informatique", keywords: ["jeux vidéo", "game developer", "unity", "unreal"] },
  { metier: "Spécialiste en IA", codeRome: "M1805", libelleRome: "Études et développement informatique", keywords: ["intelligence artificielle", "IA", "machine learning", "deep learning"] },
  { metier: "Développeur Blockchain", codeRome: "M1805", libelleRome: "Études et développement informatique", keywords: ["blockchain", "web3", "crypto", "smart contract"] },
  { metier: "Data Scientist", codeRome: "M1403", libelleRome: "Études et prospectives socio-économiques", keywords: ["data scientist", "data", "science des données", "analytics"] },
  { metier: "Ingénieur réseau", codeRome: "M1801", libelleRome: "Administration de systèmes d'information", keywords: ["réseau", "système", "infrastructure", "devops"] },
  { metier: "Spécialiste en cybersécurité", codeRome: "M1802", libelleRome: "Expertise et support en systèmes d'information", keywords: ["cybersécurité", "sécurité informatique", "pentester"] },
  { metier: "Analyste en Big Data", codeRome: "M1403", libelleRome: "Études et prospectives socio-économiques", keywords: ["big data", "data analyst", "analyse données"] },
  { metier: "Programmeur", codeRome: "M1805", libelleRome: "Études et développement informatique", keywords: ["programmeur", "développeur", "code"] },
  { metier: "Growth Hacker", codeRome: "M1705", libelleRome: "Marketing", keywords: ["growth", "acquisition", "marketing digital"] },
  { metier: "Spécialiste en réalité augmentée", codeRome: "M1805", libelleRome: "Études et développement informatique", keywords: ["réalité augmentée", "AR", "VR", "XR"] },

  // Business et Management
  { metier: "Responsable marketing", codeRome: "M1705", libelleRome: "Marketing", keywords: ["marketing", "responsable marketing", "chef marketing"] },
  { metier: "Chef de projet", codeRome: "M1402", libelleRome: "Conseil en organisation et management d'entreprise", keywords: ["chef de projet", "project manager", "gestion de projet"] },
  { metier: "Community manager", codeRome: "E1101", libelleRome: "Animation de site multimédia", keywords: ["community manager", "réseaux sociaux", "social media"] },
  { metier: "Consultant en développement durable", codeRome: "H1302", libelleRome: "Management et ingénierie Hygiène Sécurité Environnement -HSE- industriels", keywords: ["RSE", "développement durable", "environnement"] },
  { metier: "Consultant en transformation numérique", codeRome: "M1802", libelleRome: "Expertise et support en systèmes d'information", keywords: ["transformation digitale", "consultant IT", "digitalisation"] },
  { metier: "Responsable événementiel", codeRome: "E1107", libelleRome: "Organisation d'événementiel", keywords: ["événementiel", "event manager", "organisation événements"] },
  { metier: "Manager logistique", codeRome: "N1301", libelleRome: "Conception et organisation de la chaîne logistique", keywords: ["logistique", "supply chain", "manager logistique"] },
  { metier: "Consultant en télétravail", codeRome: "M1402", libelleRome: "Conseil en organisation et management d'entreprise", keywords: ["télétravail", "remote", "organisation travail"] },
  { metier: "Responsable de la culture d'entreprise", codeRome: "M1503", libelleRome: "Management des ressources humaines", keywords: ["culture entreprise", "RH", "marque employeur"] },
  { metier: "Responsable RSE", codeRome: "H1302", libelleRome: "Management et ingénierie Hygiène Sécurité Environnement -HSE- industriels", keywords: ["RSE", "responsabilité sociétale", "ESG"] },
  { metier: "Expert en marketing digital", codeRome: "M1705", libelleRome: "Marketing", keywords: ["marketing digital", "SEO", "SEA", "acquisition"] },
  { metier: "Analyste financier", codeRome: "M1201", libelleRome: "Analyse et ingénierie financière", keywords: ["analyste financier", "finance", "investissement"] },

  // Science et Ingénierie
  { metier: "Technicien de laboratoire", codeRome: "H1503", libelleRome: "Intervention technique en laboratoire d'analyse industrielle", keywords: ["laboratoire", "technicien labo", "analyse"] },
  { metier: "Ingénieur en biotechnologies", codeRome: "H1206", libelleRome: "Management et ingénierie études, recherche et développement industriel", keywords: ["biotechnologie", "biotech", "recherche"] },
  { metier: "Expert en robotique", codeRome: "H1206", libelleRome: "Management et ingénierie études, recherche et développement industriel", keywords: ["robotique", "automatisation", "robot"] },
  { metier: "Géologue", codeRome: "F1105", libelleRome: "Études géologiques", keywords: ["géologue", "géologie", "terrain"] },
  { metier: "Chimiste", codeRome: "H1210", libelleRome: "Intervention technique en études, recherche et développement", keywords: ["chimiste", "chimie", "laboratoire"] },
  { metier: "Ingénieur mécanique", codeRome: "H1206", libelleRome: "Management et ingénierie études, recherche et développement industriel", keywords: ["ingénieur mécanique", "mécanique", "conception"] },
  { metier: "Ingénieur civil", codeRome: "F1106", libelleRome: "Ingénierie et études du BTP", keywords: ["génie civil", "BTP", "construction"] },
  { metier: "Ingénieur en énergies renouvelables", codeRome: "H1206", libelleRome: "Management et ingénierie études, recherche et développement industriel", keywords: ["énergies renouvelables", "solaire", "éolien", "transition énergétique"] },
  { metier: "Technicien de maintenance", codeRome: "I1304", libelleRome: "Installation et maintenance d'équipements industriels et d'exploitation", keywords: ["maintenance", "technicien", "dépannage"] },
  { metier: "Conducteur de travaux", codeRome: "F1201", libelleRome: "Conduite de travaux du BTP et de travaux paysagers", keywords: ["conducteur travaux", "chantier", "BTP"] },
  { metier: "Expert en développement de produits bio", codeRome: "H1206", libelleRome: "Management et ingénierie études, recherche et développement industriel", keywords: ["bio", "produits biologiques", "R&D"] },

  // Arts et Spectacle
  { metier: "Acteur", codeRome: "L1203", libelleRome: "Art dramatique", keywords: ["acteur", "comédien", "théâtre", "cinéma"] },
  { metier: "Musicien", codeRome: "L1202", libelleRome: "Musique et chant", keywords: ["musicien", "musique", "artiste"] },
  { metier: "Critique littéraire", codeRome: "E1106", libelleRome: "Journalisme et information média", keywords: ["critique", "littérature", "journalisme"] },
  { metier: "Éditeur", codeRome: "E1105", libelleRome: "Coordination d'édition", keywords: ["éditeur", "édition", "livre"] },

  // Tourisme et Services
  { metier: "Guide touristique", codeRome: "G1201", libelleRome: "Accompagnement de voyages, d'activités culturelles ou sportives", keywords: ["guide", "tourisme", "voyage"] },
  { metier: "Journaliste", codeRome: "E1106", libelleRome: "Journalisme et information média", keywords: ["journaliste", "rédacteur", "presse"] },
  { metier: "Consultant en inclusion sociale", codeRome: "K1201", libelleRome: "Action sociale", keywords: ["inclusion", "diversité", "social"] },
];

/**
 * Récupère le code ROME correspondant à un métier Jobmi
 */
export const getRomeCode = (metier: string): RomeMapping | undefined => {
  return romeMapping.find(m => m.metier.toLowerCase() === metier.toLowerCase());
};

/**
 * Récupère plusieurs codes ROME pour une liste de métiers
 */
export const getRomeCodes = (metiers: string[]): RomeMapping[] => {
  return metiers
    .map(m => getRomeCode(m))
    .filter((m): m is RomeMapping => m !== undefined);
};

/**
 * Récupère les codes ROME uniques pour une liste de métiers
 */
export const getUniqueRomeCodes = (metiers: string[]): string[] => {
  const codes = getRomeCodes(metiers).map(m => m.codeRome);
  return Array.from(new Set(codes));
};

/**
 * Récupère les mots-clés de recherche pour un métier
 */
export const getSearchKeywords = (metier: string): string[] => {
  const mapping = getRomeCode(metier);
  return mapping ? mapping.keywords : [metier.toLowerCase()];
};
