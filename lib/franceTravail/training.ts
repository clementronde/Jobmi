import { franceTravailFetch, hasFranceTravailCredentials } from './client';
import { getFallbackTrainingReviews } from './localData';
import type { JobmiTrainingReview } from './types';

function getArrayPayload(payload: any) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.resultats)) return payload.resultats;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

function normalizeTrainingReview(raw: any): JobmiTrainingReview {
  return {
    id: String(raw?.id ?? raw?.formationId ?? raw?.siret ?? raw?.nomFormation ?? 'training-review'),
    trainingName: String(raw?.nomFormation ?? raw?.trainingName ?? raw?.intitule ?? 'Formation à vérifier'),
    organization: String(raw?.organisme ?? raw?.organization ?? raw?.nomOrganisme ?? 'Organisme à vérifier'),
    rating: typeof raw?.note === 'number' ? raw.note : typeof raw?.rating === 'number' ? raw.rating : null,
    reviewCount:
      typeof raw?.nombreAvis === 'number'
        ? raw.nombreAvis
        : typeof raw?.reviewCount === 'number'
          ? raw.reviewCount
          : null,
    outcomeLabel: String(raw?.debouche ?? raw?.outcomeLabel ?? 'Débouchés à vérifier'),
    source: 'live',
  };
}

export async function searchTrainingReviews(params: {
  romeCode?: string;
  rncp?: string;
  location?: string;
}): Promise<{ source: 'live' | 'fallback' | 'missing_credentials' | 'error'; reviews: JobmiTrainingReview[] }> {
  if (!hasFranceTravailCredentials()) {
    return { source: 'missing_credentials', reviews: getFallbackTrainingReviews() };
  }

  try {
    const searchParams = new URLSearchParams();
    if (params.romeCode) searchParams.set('rome', params.romeCode);
    if (params.rncp) searchParams.set('rncp', params.rncp);
    if (params.location) searchParams.set('commune', params.location);

    const payload = await franceTravailFetch<any>(
      process.env.FRANCE_TRAVAIL_ANOTEA_PATH || '/partenaire/anotea/v1/formations',
      { searchParams, next: { revalidate: 60 * 60 * 24 } },
    );
    const reviews = getArrayPayload(payload).slice(0, 8).map(normalizeTrainingReview);

    return {
      source: 'live',
      reviews: reviews.length ? reviews : getFallbackTrainingReviews(),
    };
  } catch {
    return { source: 'error', reviews: getFallbackTrainingReviews() };
  }
}
