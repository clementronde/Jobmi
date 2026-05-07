import { franceTravailFetch, hasFranceTravailCredentials } from './client';
import { getFallbackOpportunity } from './localData';
import { normalizeOpportunity } from './normalizers';
import type { JobmiOpportunity } from './types';

function getArrayPayload(payload: any) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.resultats)) return payload.resultats;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

export async function searchOpportunities(params: {
  romeCode?: string;
  location?: string;
  keyword?: string;
}): Promise<{ source: 'live' | 'fallback' | 'missing_credentials' | 'error'; opportunities: JobmiOpportunity[] }> {
  if (!hasFranceTravailCredentials()) {
    return { source: 'missing_credentials', opportunities: getFallbackOpportunity(params.romeCode) };
  }

  try {
    const searchParams = new URLSearchParams();
    if (params.romeCode) searchParams.set('codeROME', params.romeCode);
    if (params.keyword) searchParams.set('motsCles', params.keyword);
    if (params.location) searchParams.set('commune', params.location);

    const payload = await franceTravailFetch<any>(
      process.env.FRANCE_TRAVAIL_OFFERS_PATH || '/partenaire/offresdemploi/v2/offres/search',
      { searchParams, next: { revalidate: 60 * 15 } },
    );
    const opportunities = getArrayPayload(payload).slice(0, 12).map(normalizeOpportunity);

    return {
      source: 'live',
      opportunities: opportunities.length ? opportunities : getFallbackOpportunity(params.romeCode),
    };
  } catch {
    return { source: 'error', opportunities: getFallbackOpportunity(params.romeCode) };
  }
}
