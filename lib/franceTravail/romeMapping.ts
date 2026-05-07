export const JOBMI_JOB_TO_ROME: Record<string, string> = {
  'developpeur-web': 'M1805',
  devops: 'M1805',
  'data-analyste': 'M1403',
  'data-scientist': 'M1403',
  graphiste: 'E1205',
  'motion-designer': 'E1205',
  'designer-ux-ui': 'E1104',
  infirmier: 'J1506',
  'aide-soignant': 'J1501',
  'assistant-social': 'K1207',
  'educateur-specialise': 'K1207',
  'animateur-jeunesse': 'K1207',
  commercial: 'D1402',
  'account-manager': 'D1402',
  'responsable-marketing': 'M1705',
  'charge-communication': 'E1103',
  'community-manager': 'E1103',
  'createur-contenu': 'E1103',
  comptable: 'M1203',
  'controleur-gestion': 'M1203',
  'charge-rh': 'M1501',
  cuisinier: 'G1602',
  patissier: 'D1104',
  menuisier: 'H2206',
  electricien: 'F1602',
  mecanicien: 'I1604',
  plombier: 'F1603',
  'technicien-maintenance': 'I1304',
};

export function getRomeCodeForJobmiJob(jobId: string) {
  return JOBMI_JOB_TO_ROME[jobId] ?? null;
}

export function getMappingStatusForJobmiJob(jobId: string) {
  return getRomeCodeForJobmiJob(jobId) ? 'mapped' : 'mapping_missing';
}
