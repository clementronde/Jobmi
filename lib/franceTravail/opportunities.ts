import { franceTravailFetchWithMeta, hasFranceTravailCredentials } from './client';
import { normalizeOpportunity } from './normalizers';
import type { JobmiOpportunity } from './types';

export const FT_PAGE_SIZE = 50;

function getArrayPayload(payload: any) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.resultats)) return payload.resultats;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

function dedupeOpportunities(opportunities: JobmiOpportunity[]) {
  const seen = new Set<string>();

  return opportunities.filter((opportunity) => {
    const key = `${opportunity.id}-${opportunity.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getTotalFromContentRange(headers: Headers) {
  const contentRange = headers.get('content-range') ?? headers.get('Content-Range');
  const total = contentRange?.match(/\/(\d+)$/)?.[1];
  return total ? Number(total) : null;
}

export async function searchOpportunities(params: {
  romeCode?: string;
  location?: string;
  keyword?: string;
  contractType?: string;
  radius?: string;
  offset?: number;
}): Promise<{
  source: 'live' | 'missing_credentials' | 'error';
  opportunities: JobmiOpportunity[];
  hasMore: boolean;
  total: number | null;
  nextOffset: number;
}> {
  if (!hasFranceTravailCredentials()) {
    return { source: 'missing_credentials', opportunities: [], hasMore: false, total: null, nextOffset: 0 };
  }

  const offset = params.offset ?? 0;

  try {
    const searchParams = new URLSearchParams();
    if (params.romeCode) searchParams.set('codeROME', params.romeCode);
    if (params.keyword) searchParams.set('motsCles', params.keyword);
    if (params.location) {
      // département code: 1-3 chars like "75", "69", "2A", "971"
      // commune code: 5+ chars like "75056", "69123"
      const isDepartement = /^(\d{1,3}|2[AB])$/i.test(params.location.trim());
      searchParams.set(isDepartement ? 'departement' : 'commune', params.location.trim());
      // distance (km) only works with commune, not departement
      if (!isDepartement && params.radius && /^\d+$/.test(params.radius)) {
        searchParams.set('distance', params.radius);
      }
    }
    if (params.contractType) searchParams.set('typeContrat', params.contractType);

    const { data: payload, headers } = await franceTravailFetchWithMeta<any>(
      process.env.FRANCE_TRAVAIL_OFFERS_PATH || '/partenaire/offresdemploi/v2/offres/search',
      {
        searchParams,
        headers: { Range: `offres=${offset}-${offset + FT_PAGE_SIZE - 1}` },
        // only cache first page — paginated requests must be fresh
        ...(offset === 0 ? { next: { revalidate: 60 * 15 } } : { cache: 'no-store' as const }),
      },
    );
    const opportunities = dedupeOpportunities(getArrayPayload(payload).map(normalizeOpportunity));
    const total = getTotalFromContentRange(headers);
    const nextOffset = offset + FT_PAGE_SIZE;

    return {
      source: 'live',
      opportunities,
      hasMore: total !== null ? nextOffset < total : opportunities.length >= FT_PAGE_SIZE,
      total,
      nextOffset,
    };
  } catch {
    return { source: 'error', opportunities: [], hasMore: false, total: null, nextOffset: offset };
  }
}
