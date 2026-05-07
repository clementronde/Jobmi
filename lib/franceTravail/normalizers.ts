import type {
  JobmiCompanyLead,
  JobmiOpportunity,
  JobmiRomeJob,
  JobmiRomeJobSheet,
  JobmiRomeSkill,
  JobmiRomeWorkContext,
} from './types';

function stringValue(value: unknown, fallback = '') {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function firstString(...values: unknown[]) {
  for (const value of values) {
    const candidate = stringValue(value);
    if (candidate) return candidate;
  }
  return '';
}

function asArray(value: unknown): any[] {
  return Array.isArray(value) ? value : [];
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function normalizeRomeJob(raw: any): JobmiRomeJob {
  const code = firstString(raw?.code, raw?.codeRome, raw?.romeCode, raw?.id);
  const label = firstString(raw?.libelle, raw?.label, raw?.intitule, raw?.title, raw?.appellation?.libelle);

  return {
    code,
    label: label || code || 'Métier ROME',
    slug: slugify(label || code || 'metier-rome'),
    description: firstString(raw?.definition, raw?.description, raw?.resume),
    mappingStatus: code ? 'mapped' : 'mapping_missing',
  };
}

export function normalizeRomeSkill(raw: any): JobmiRomeSkill {
  const label = firstString(raw?.libelle, raw?.label, raw?.intitule, raw?.nom);
  const rawCategory = firstString(raw?.categorie, raw?.category, raw?.type).toLowerCase();

  return {
    id: firstString(raw?.code, raw?.id, raw?.identifiant) || slugify(label),
    label: label || 'Compétence à préciser',
    category: rawCategory.includes('savoir-faire')
      ? 'savoir-faire'
      : rawCategory.includes('savoir-être') || rawCategory.includes('savoir etre')
        ? 'savoir-etre'
        : rawCategory.includes('savoir')
          ? 'savoir'
          : 'other',
  };
}

export function normalizeWorkContext(raw: any): JobmiRomeWorkContext {
  const label = firstString(raw?.libelle, raw?.label, raw?.intitule, raw?.nom);
  const rawKind = firstString(raw?.categorie, raw?.category, raw?.type).toLowerCase();

  return {
    id: firstString(raw?.code, raw?.id, raw?.identifiant) || slugify(label),
    label: label || 'Contexte à préciser',
    kind: rawKind.includes('horaire') || rawKind.includes('rythme')
      ? 'rhythm'
      : rawKind.includes('lieu') || rawKind.includes('environnement')
        ? 'environment'
        : rawKind.includes('déplacement') || rawKind.includes('deplacement')
          ? 'mobility'
          : rawKind.includes('public') || rawKind.includes('relation')
            ? 'relation'
            : rawKind.includes('risque') || rawKind.includes('condition')
              ? 'constraint'
              : 'other',
  };
}

export function normalizeRomeJobSheet(raw: any, fallbackJob?: JobmiRomeJob): JobmiRomeJobSheet {
  const job = fallbackJob ?? normalizeRomeJob(raw?.metier ?? raw?.job ?? raw);
  const rawSkills = [
    ...asArray(raw?.competences),
    ...asArray(raw?.skills),
    ...asArray(raw?.groupesCompetences).flatMap((group) => asArray(group?.competences)),
  ];
  const rawContexts = [
    ...asArray(raw?.contextesTravail),
    ...asArray(raw?.workContexts),
    ...asArray(raw?.contextes),
  ];
  const relatedJobs = [
    ...asArray(raw?.metiersProches),
    ...asArray(raw?.relatedJobs),
    ...asArray(raw?.mobilites),
  ].map(normalizeRomeJob);

  return {
    job,
    summary: firstString(raw?.definition, raw?.description, raw?.resume, job.description),
    activities: [
      ...asArray(raw?.activites).map((activity) => firstString(activity?.libelle, activity?.label, activity)),
      ...asArray(raw?.activities).map((activity) => firstString(activity?.libelle, activity?.label, activity)),
    ].filter(Boolean),
    skills: rawSkills.map(normalizeRomeSkill).filter((skill) => skill.label),
    workContexts: rawContexts.map(normalizeWorkContext).filter((context) => context.label),
    relatedJobs: relatedJobs.filter((relatedJob) => relatedJob.code || relatedJob.label),
    source: 'live',
  };
}

export function normalizeOpportunity(raw: any): JobmiOpportunity {
  const id = firstString(raw?.id, raw?.identifiant, raw?.reference);
  const company = firstString(raw?.entreprise?.nom, raw?.company?.name, raw?.nomEntreprise);
  const location = firstString(
    raw?.lieuTravail?.libelle,
    raw?.lieuTravail?.commune,
    raw?.location?.label,
    raw?.commune,
  );

  return {
    id: id || slugify(firstString(raw?.intitule, raw?.title, company, location)),
    title: firstString(raw?.intitule, raw?.title, raw?.label, 'Offre à vérifier'),
    company: company || 'Entreprise à vérifier',
    location: location || 'France',
    contractType: firstString(raw?.typeContrat, raw?.contractType, raw?.contrat?.type, 'Contrat à vérifier'),
    experience: firstString(raw?.experienceExige, raw?.experience, raw?.niveauExperience, 'Expérience à vérifier'),
    url: firstString(raw?.origineOffre?.urlOrigine, raw?.url, raw?.urlPostulation, 'https://candidat.francetravail.fr/offres/recherche'),
    source: 'live',
  };
}

export function normalizeCompanyLead(raw: any): JobmiCompanyLead {
  const name = firstString(raw?.nom, raw?.name, raw?.raisonSociale, raw?.entreprise?.nom);
  const potential = firstString(raw?.potentiel, raw?.hiringPotential, raw?.scoreLabel).toLowerCase();

  return {
    id: firstString(raw?.siret, raw?.id, raw?.identifiant) || slugify(name),
    name: name || 'Entreprise à vérifier',
    location: firstString(raw?.adresse, raw?.commune, raw?.location, 'Localisation à vérifier'),
    hiringPotential: potential.includes('fort') ? 'fort' : potential.includes('moyen') ? 'moyen' : 'a_verifier',
    action: 'Préparer une candidature spontanée, une demande de stage ou une demande d’immersion.',
    url: firstString(raw?.url, raw?.website, 'https://labonneboite.francetravail.fr/'),
    source: 'live',
  };
}
