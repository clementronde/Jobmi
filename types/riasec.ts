export type RiasecDimension = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface RiasecQuestion {
  id: string;
  text: string;
  dimension: RiasecDimension;
  reversed?: boolean;
}

export interface RiasecAnswer {
  questionId: string;
  score: number; // 1–5
}

export interface RiasecScores {
  R: number;
  I: number;
  A: number;
  S: number;
  E: number;
  C: number;
}

export interface RiasecProfile {
  rawScores: RiasecScores;
  normalizedScores: RiasecScores; // 0–100
  sortedDimensions: RiasecDimension[];
  dominantCode: string; // e.g. "SAE"
}

export interface JobFamily {
  id: string;
  name: string;
  description: string;
  riasecCodes: RiasecDimension[];
  jobIds: string[];
}

export interface Job {
  id: string;
  slug: string;
  name: string;
  description: string;
  riasecTags: RiasecDimension[];
  formationLevel: string;
  familyId: string;
  links: {
    experience: string;
    formation: string;
  };
}

export interface TestResult {
  profile: RiasecProfile;
  topFamilies: JobFamily[];
  suggestedJobs: Job[];
}
