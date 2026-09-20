export type ParcoursupCalendarStep = {
  period: string;
  label: string;
  action: string;
};

export const parcoursupCalendarSteps: ParcoursupCalendarStep[] = [
  {
    period: 'Nov. – déc. 2026',
    label: 'Ouverture des infos formations',
    action: 'Explorer les fiches, aller aux journées portes ouvertes',
  },
  {
    period: 'Mi-janvier 2027',
    label: 'Ouverture des inscriptions',
    action: 'Créer ton dossier et ton profil',
  },
  {
    period: 'Mi-mars 2027',
    label: 'Date limite des vœux',
    action: 'Formuler tes 10 vœux maximum',
  },
  {
    period: 'Début avril 2027',
    label: 'Date limite de confirmation',
    action: 'Compléter chaque dossier et confirmer tes vœux',
  },
  {
    period: 'Début juin 2027',
    label: 'Début des réponses',
    action: 'Consulter tes réponses, répondre dans les délais',
  },
  {
    period: 'Mi-juillet 2027',
    label: "Point d'étape obligatoire",
    action: 'Confirmer les vœux en attente que tu veux garder',
  },
  {
    period: 'Juin – sept. 2027',
    label: 'Phase complémentaire',
    action: 'Formuler de nouveaux vœux sur les places vacantes',
  },
];

export const parcoursupCalendarNote =
  "Dates prévisionnelles tant que le calendrier officiel 2027 n'est pas publié par le ministère (généralement fin octobre / novembre 2026).";
