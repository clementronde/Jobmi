import type {
  RiasecDimension,
  RiasecQuestion,
  RiasecAnswer,
  RiasecProfile,
  RiasecScores,
  JobFamily,
  Job,
  ScoredJob,
  TestResult,
} from '@/types/riasec';
import { JOB_FAMILIES, JOBS } from '@/data/riasecData';

const DIMENSIONS: RiasecDimension[] = ['R', 'I', 'A', 'S', 'E', 'C'];

// Pure function: aggregate answers into a RIASEC profile
export function scoreAnswers(
  answers: RiasecAnswer[],
  questions: RiasecQuestion[]
): RiasecProfile {
  const rawScores: RiasecScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const questionsPerDimension = DIMENSIONS.reduce(
    (acc, dim) => ({
      ...acc,
      [dim]: questions.filter(question => question.dimension === dim).length,
    }),
    {} as Record<RiasecDimension, number>
  );

  for (const answer of answers) {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) continue;
    const score = question.reversed ? 6 - answer.score : answer.score;
    rawScores[question.dimension] += score;
  }

  const normalizedScores = {} as RiasecScores;
  for (const dim of DIMENSIONS) {
    const maxScoreForDimension = questionsPerDimension[dim] * 5;
    normalizedScores[dim] = maxScoreForDimension
      ? Math.round((rawScores[dim] / maxScoreForDimension) * 100)
      : 0;
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

// Rank all jobs by proximity to the full profile, with a bonus for the family fit.
export function getRankedJobs(
  profile: RiasecProfile,
  allJobs: Job[] = JOBS,
  families: JobFamily[] = JOB_FAMILIES
): ScoredJob[] {
  const familyMap = new Map(families.map((family) => [family.id, family]));
  const familyWeights = [1, 0.8, 0.6];

  return allJobs
    .map((job) => {
      const family = familyMap.get(job.familyId);
      const jobTagScore =
        job.riasecTags.reduce((sum, tag) => sum + profile.normalizedScores[tag], 0) /
        job.riasecTags.length;

      const familyScore = family
        ? family.riasecCodes.reduce(
            (sum, code, index) =>
              sum + profile.normalizedScores[code] * (familyWeights[index] ?? 0.4),
            0
          ) /
          familyWeights.slice(0, family.riasecCodes.length).reduce((sum, value) => sum + value, 0)
        : jobTagScore;

      const dominantBonus = profile.sortedDimensions
        .slice(0, 3)
        .reduce(
          (sum, code, index) =>
            sum + (job.riasecTags.includes(code) ? (index === 0 ? 8 : index === 1 ? 5 : 3) : 0),
          0
        );

      return {
        ...job,
        matchScore: Math.round(jobTagScore * 0.72 + familyScore * 0.28 + dominantBonus),
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}

// Convenience: run the full pipeline from raw answers to a TestResult
export function computeTestResult(
  answers: RiasecAnswer[],
  questions: RiasecQuestion[]
): TestResult {
  const profile = scoreAnswers(answers, questions);
  const topFamilies = getFamilies(profile);
  const allJobs = getRankedJobs(profile);
  const suggestedJobs = allJobs.slice(0, 5);
  return { profile, topFamilies, suggestedJobs, allJobs };
}
