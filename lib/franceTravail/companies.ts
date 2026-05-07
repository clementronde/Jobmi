import { franceTravailFetch, hasFranceTravailCredentials } from './client';
import { getFallbackCompanyLeads } from './localData';
import { normalizeCompanyLead } from './normalizers';
import type { JobmiCompanyLead } from './types';

function getArrayPayload(payload: any) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.resultats)) return payload.resultats;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.companies)) return payload.companies;
  return [];
}

export async function searchCompanyLeads(params: {
  romeCode?: string;
  location?: string;
}): Promise<{ source: 'live' | 'fallback' | 'missing_credentials' | 'error'; companies: JobmiCompanyLead[] }> {
  if (!hasFranceTravailCredentials()) {
    return { source: 'missing_credentials', companies: getFallbackCompanyLeads(params.romeCode) };
  }

  try {
    const searchParams = new URLSearchParams();
    if (params.romeCode) searchParams.set('rome', params.romeCode);
    if (params.location) searchParams.set('commune', params.location);

    const payload = await franceTravailFetch<any>(
      process.env.FRANCE_TRAVAIL_LA_BONNE_BOITE_PATH || '/partenaire/labonneboite/v2/companies',
      { searchParams, next: { revalidate: 60 * 60 * 24 } },
    );
    const companies = getArrayPayload(payload).slice(0, 8).map(normalizeCompanyLead);

    return {
      source: 'live',
      companies: companies.length ? companies : getFallbackCompanyLeads(params.romeCode),
    };
  } catch {
    return { source: 'error', companies: getFallbackCompanyLeads(params.romeCode) };
  }
}
