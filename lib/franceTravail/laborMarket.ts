import { franceTravailFetch, hasFranceTravailCredentials } from './client';
import { getFallbackLaborMarketSignal } from './localData';
import type { JobmiLaborMarketSignal } from './types';

function normalizeLevel(value: unknown): JobmiLaborMarketSignal['level'] {
  const normalized = String(value ?? '').toLowerCase();
  if (normalized.includes('favorable') || normalized.includes('fort') || normalized.includes('bon')) return 'favorable';
  if (normalized.includes('limite') || normalized.includes('faible') || normalized.includes('difficile')) return 'limite';
  if (normalized.includes('moyen') || normalized.includes('modere') || normalized.includes('modéré')) return 'moyen';
  return 'inconnu';
}

function normalizeLaborMarketSignal(raw: any, romeCode: string, location: string): JobmiLaborMarketSignal {
  const level = normalizeLevel(raw?.niveau ?? raw?.level ?? raw?.tension ?? raw?.accessibilite);
  const label =
    String(raw?.libelle ?? raw?.label ?? raw?.diagnostic ?? '').trim() ||
    (level === 'inconnu' ? 'Donnée marché à vérifier' : `Marché ${level}`);

  return {
    romeCode,
    location,
    level,
    label,
    advice:
      String(raw?.conseil ?? raw?.advice ?? '').trim() ||
      'Compare cette piste avec les offres, les entreprises à contacter et les formations disponibles.',
    source: 'live',
  };
}

export async function getLaborMarketSignal(params: {
  romeCode?: string;
  location?: string;
}): Promise<{ source: 'live' | 'fallback' | 'missing_credentials' | 'error'; signal: JobmiLaborMarketSignal }> {
  const romeCode = params.romeCode ?? 'unknown';
  const location = params.location ?? 'France';

  if (!hasFranceTravailCredentials()) {
    return { source: 'missing_credentials', signal: getFallbackLaborMarketSignal(romeCode, location) };
  }

  try {
    const searchParams = new URLSearchParams();
    if (params.romeCode) searchParams.set('rome', params.romeCode);
    if (params.location) searchParams.set('territoire', params.location);

    const payload = await franceTravailFetch<any>(
      process.env.FRANCE_TRAVAIL_LABOR_MARKET_PATH || '/partenaire/marche-du-travail/v1/indicateurs',
      { searchParams, next: { revalidate: 60 * 60 * 24 } },
    );

    return {
      source: 'live',
      signal: normalizeLaborMarketSignal(payload, romeCode, location),
    };
  } catch {
    return { source: 'error', signal: getFallbackLaborMarketSignal(romeCode, location) };
  }
}
