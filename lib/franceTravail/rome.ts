import { franceTravailFetch, hasFranceTravailCredentials } from './client';
import {
  getLocalRomeJobSheetByCode,
  getLocalRomeJobSheetByJobmiId,
  searchLocalRomeJobs,
} from './localData';
import { normalizeRomeJob, normalizeRomeJobSheet } from './normalizers';
import { getRomeCodeForJobmiJob } from './romeMapping';
import type { JobmiRomeJob, JobmiRomeJobSheet } from './types';

function pathFromEnv(key: string, fallback: string) {
  return process.env[key] || fallback;
}

function getArrayPayload(payload: any) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.resultats)) return payload.resultats;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.metiers)) return payload.metiers;
  return [];
}

export async function searchRomeJobs(query: string): Promise<{
  source: 'live' | 'fallback' | 'missing_credentials' | 'error';
  jobs: JobmiRomeJob[];
}> {
  if (!hasFranceTravailCredentials()) {
    return { source: 'missing_credentials', jobs: searchLocalRomeJobs(query) };
  }

  try {
    const searchParams = new URLSearchParams();
    if (query.trim()) searchParams.set('q', query.trim());
    const payload = await franceTravailFetch<any>(
      pathFromEnv('FRANCE_TRAVAIL_ROME_SEARCH_PATH', '/partenaire/rome-metiers/v1/metiers'),
      { searchParams, next: { revalidate: 60 * 60 * 24 } },
    );
    const jobs: JobmiRomeJob[] = getArrayPayload(payload)
      .map(normalizeRomeJob)
      .filter((job: JobmiRomeJob) => job.code || job.label);
    return { source: 'live', jobs: jobs.length ? jobs : searchLocalRomeJobs(query) };
  } catch {
    return { source: 'error', jobs: searchLocalRomeJobs(query) };
  }
}

export async function getRomeJobSheetByCode(code: string): Promise<JobmiRomeJobSheet | null> {
  const fallback = getLocalRomeJobSheetByCode(code);

  if (!hasFranceTravailCredentials()) {
    return fallback ? { ...fallback, source: 'missing_credentials' } : null;
  }

  try {
    const path = pathFromEnv('FRANCE_TRAVAIL_ROME_JOB_SHEET_PATH', '/partenaire/rome-fiches-metiers/v1/fiches');
    const payload = await franceTravailFetch<any>(`${path}/${encodeURIComponent(code)}`, {
      next: { revalidate: 60 * 60 * 24 },
    });
    const normalized = normalizeRomeJobSheet(payload, fallback?.job);

    return {
      ...normalized,
      activities: normalized.activities.length ? normalized.activities : fallback?.activities ?? [],
      skills: normalized.skills.length ? normalized.skills : fallback?.skills ?? [],
      workContexts: normalized.workContexts.length ? normalized.workContexts : fallback?.workContexts ?? [],
      relatedJobs: normalized.relatedJobs.length ? normalized.relatedJobs : fallback?.relatedJobs ?? [],
    };
  } catch {
    return fallback ? { ...fallback, source: 'error' } : null;
  }
}

export async function getRomeJobSheetForJobmiJob(jobId: string) {
  const romeCode = getRomeCodeForJobmiJob(jobId);
  if (!romeCode) return getLocalRomeJobSheetByJobmiId(jobId);
  return getRomeJobSheetByCode(romeCode);
}

export async function suggestRomeFromFreeText(text: string) {
  const fallback = searchLocalRomeJobs(text).slice(0, 5);

  if (!hasFranceTravailCredentials() || !text.trim()) {
    return { source: 'missing_credentials' as const, jobs: fallback };
  }

  try {
    const payload = await franceTravailFetch<any>(
      pathFromEnv('FRANCE_TRAVAIL_ROMEO_PATH', '/partenaire/romeo/v2/predictionMetiers'),
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texte: text }),
        next: { revalidate: 60 * 60 },
      },
    );
    const jobs: JobmiRomeJob[] = getArrayPayload(payload)
      .map(normalizeRomeJob)
      .filter((job: JobmiRomeJob) => job.code || job.label);
    return { source: 'live' as const, jobs: jobs.length ? jobs : fallback };
  } catch {
    return { source: 'error' as const, jobs: fallback };
  }
}
