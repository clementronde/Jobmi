import type {
  RiasecDimension,
  RiasecQuestion,
  RiasecAnswer,
  RiasecProfile,
  RiasecScores,
  JobFamily,
  Job,
  TestResult,
} from '@/types/riasec';
import { JOB_FAMILIES, JOBS } from '@/data/riasecData';

const DIMENSIONS: RiasecDimension[] = ['R', 'I', 'A', 'S', 'E', 'C'];
const QUESTIONS_PER_DIM = 8;
const MAX_SCORE_PER_DIM = QUESTIONS_PER_DIM * 5; // 40

// Pure function: aggregate answers into a RIASEC profile
export function scoreAnswers(
  answers: RiasecAnswer[],
  questions: RiasecQuestion[]
): RiasecProfile {
  const rawScores: RiasecScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  for (const answer of answers) {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) continue;
    const score = question.reversed ? 6 - answer.score : answer.score;
    rawScores[question.dimension] += score;
  }

  const normalizedScores = {} as RiasecScores;
  for (const dim of DIMENSIONS) {
    normalizedScores[dim] = Math.round((rawScores[dim] / MAX_SCORE_PER_DIM) * 100);
  }

  const sortedDimensions = (DIMENSIONS.slice() as RiasecDimension[]).sort(
    (a, b) => normalizedScores[b] - normalizedScores[a]
  );

  return {
    rawScores,
    normalizedScores,
    sortedDimensions,
    dominantCode: sortedDimensions.slice(0, 3).join(''),
  };
}

// Pure function: score families against a profile and return the top N
export function getFamilies(
  profile: RiasecProfile,
  families: JobFamily[] = JOB_FAMILIES,
  topN = 3
): JobFamily[] {
  const weights = [3, 2, 1];

  return families
    .map(family => ({
      family,
      score: family.riasecCodes.reduce(
        (sum, code, i) => sum + profile.normalizedScores[code] * (weights[i] ?? 1),
        0
      ),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
    .map(({ family }) => family);
}

// Pure function: collect jobs belonging to the given families
export function getJobs(topFamilies: JobFamily[], allJobs: Job[] = JOBS): Job[] {
  const familyIds = new Set(topFamilies.map(f => f.id));
  return allJobs.filter(job => familyIds.has(job.familyId));
}

// Convenience: run the full pipeline from raw answers to a TestResult
export function computeTestResult(
  answers: RiasecAnswer[],
  questions: RiasecQuestion[]
): TestResult {
  const profile = scoreAnswers(answers, questions);
  const topFamilies = getFamilies(profile);
  const suggestedJobs = getJobs(topFamilies);
  return { profile, topFamilies, suggestedJobs };
}
