export type FranceTravailApiStatus = 'live' | 'fallback' | 'missing_credentials' | 'error';

export type JobmiMappingStatus = 'mapped' | 'mapping_missing';

export type JobmiRomeJob = {
  code: string;
  label: string;
  slug: string;
  description: string;
  mappingStatus: JobmiMappingStatus;
};

export type JobmiRomeSkill = {
  id: string;
  label: string;
  category: 'savoir' | 'savoir-faire' | 'savoir-etre' | 'other';
};

export type JobmiRomeWorkContext = {
  id: string;
  label: string;
  kind: 'environment' | 'constraint' | 'rhythm' | 'relation' | 'mobility' | 'other';
};

export type JobmiRomeJobSheet = {
  job: JobmiRomeJob;
  summary: string;
  activities: string[];
  skills: JobmiRomeSkill[];
  workContexts: JobmiRomeWorkContext[];
  relatedJobs: JobmiRomeJob[];
  source: FranceTravailApiStatus;
};

export type JobmiOpportunity = {
  id: string;
  title: string;
  company: string;
  location: string;
  contractType: string;
  experience: string;
  url: string;
  source: FranceTravailApiStatus;
};

export type JobmiCompanyLead = {
  id: string;
  name: string;
  location: string;
  hiringPotential: 'fort' | 'moyen' | 'a_verifier';
  action: string;
  url: string;
  source: FranceTravailApiStatus;
};

export type JobmiLaborMarketSignal = {
  romeCode: string;
  location: string;
  level: 'favorable' | 'moyen' | 'limite' | 'inconnu';
  label: string;
  advice: string;
  source: FranceTravailApiStatus;
};

export type JobmiTrainingReview = {
  id: string;
  trainingName: string;
  organization: string;
  rating: number | null;
  reviewCount: number | null;
  outcomeLabel: string;
  source: FranceTravailApiStatus;
};
