import type { FranceTravailApiStatus } from './types';

type TokenCache = {
  token: string;
  expiresAt: number;
};

type FranceTravailRequestOptions = RequestInit & {
  searchParams?: URLSearchParams;
  next?: NextFetchRequestConfig;
};

export class FranceTravailApiError extends Error {
  status: number;
  apiStatus: FranceTravailApiStatus;
  details?: string;

  constructor(message: string, status = 500, apiStatus: FranceTravailApiStatus = 'error', details?: string) {
    super(message);
    this.name = 'FranceTravailApiError';
    this.status = status;
    this.apiStatus = apiStatus;
    this.details = details;
  }
}

let tokenCache: TokenCache | null = null;

const DEFAULT_TOKEN_URL =
  'https://entreprise.francetravail.fr/connexion/oauth2/access_token?realm=/partenaire';
const DEFAULT_API_BASE_URL = 'https://api.francetravail.io';
const SCOPE_ALIASES: Record<string, string> = {
  OFFRES: 'api_offresdemploiv2 o2dsoffre',
  ANOTEA: 'api_anoteav1',
};

export function hasFranceTravailCredentials() {
  return Boolean(process.env.FRANCE_TRAVAIL_CLIENT_ID && process.env.FRANCE_TRAVAIL_CLIENT_SECRET);
}

function getConfiguredScope() {
  const scope = process.env.FRANCE_TRAVAIL_SCOPE?.trim();
  if (!scope) return '';

  return scope
    .split(/[,\s]+/)
    .filter(Boolean)
    .flatMap((item) => (SCOPE_ALIASES[item.toUpperCase()] ?? item).split(/\s+/))
    .filter(Boolean)
    .join(' ');
}

export function getFranceTravailConfigStatus() {
  return {
    hasClientId: Boolean(process.env.FRANCE_TRAVAIL_CLIENT_ID),
    hasClientSecret: Boolean(process.env.FRANCE_TRAVAIL_CLIENT_SECRET),
    hasScope: Boolean(getConfiguredScope()),
    scopeAlias: process.env.FRANCE_TRAVAIL_SCOPE?.trim() || null,
    tokenUrl: getTokenUrl(),
    apiBaseUrl: getApiBaseUrl(),
  };
}

function getTokenUrl() {
  return process.env.FRANCE_TRAVAIL_TOKEN_URL || DEFAULT_TOKEN_URL;
}

function getApiBaseUrl() {
  return process.env.FRANCE_TRAVAIL_API_BASE_URL || DEFAULT_API_BASE_URL;
}

async function getAccessToken() {
  if (!hasFranceTravailCredentials()) {
    throw new FranceTravailApiError('FRANCE_TRAVAIL_CREDENTIALS_MISSING', 503, 'missing_credentials');
  }

  if (tokenCache && tokenCache.expiresAt > Date.now() + 30_000) {
    return tokenCache.token;
  }

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: process.env.FRANCE_TRAVAIL_CLIENT_ID!,
    client_secret: process.env.FRANCE_TRAVAIL_CLIENT_SECRET!,
  });

  const scope = getConfiguredScope();
  if (scope) {
    body.set('scope', scope);
  }

  const response = await fetch(getTokenUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body,
    cache: 'no-store',
    signal: AbortSignal.timeout(4000),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => '');
    throw new FranceTravailApiError(`FRANCE_TRAVAIL_TOKEN_ERROR_${response.status}`, response.status, 'error', details);
  }

  const payload = (await response.json()) as {
    access_token?: string;
    expires_in?: number;
  };

  if (!payload.access_token) {
    throw new FranceTravailApiError('FRANCE_TRAVAIL_TOKEN_MISSING', 502);
  }

  tokenCache = {
    token: payload.access_token,
    expiresAt: Date.now() + (payload.expires_in ?? 1_500) * 1_000,
  };

  return tokenCache.token;
}

export async function checkFranceTravailConnection() {
  const config = getFranceTravailConfigStatus();

  if (!hasFranceTravailCredentials()) {
    return {
      ok: false,
      source: 'missing_credentials' as const,
      config,
      error: 'FRANCE_TRAVAIL_CREDENTIALS_MISSING',
    };
  }

  try {
    await getAccessToken();
    return {
      ok: true,
      source: 'live' as const,
      config,
    };
  } catch (error) {
    const apiError = error instanceof FranceTravailApiError ? error : null;

    return {
      ok: false,
      source: 'error' as const,
      config,
      error: error instanceof Error ? error.message : 'FRANCE_TRAVAIL_UNKNOWN_ERROR',
      hint:
        apiError?.status === 400 && !config.hasScope
          ? 'FRANCE_TRAVAIL_SCOPE semble requis. Copie le ou les scopes affichés dans ton application France Travail.'
          : undefined,
      details: apiError?.details ? apiError.details.slice(0, 500) : undefined,
    };
  }
}

export async function franceTravailFetch<T>(
  path: string,
  options: FranceTravailRequestOptions = {},
): Promise<T> {
  const { data } = await franceTravailFetchWithMeta<T>(path, options);
  return data;
}

export async function franceTravailFetchWithMeta<T>(
  path: string,
  options: FranceTravailRequestOptions = {},
): Promise<{ data: T; headers: Headers }> {
  const token = await getAccessToken();
  const url = new URL(path.startsWith('http') ? path : `${getApiBaseUrl()}${path}`);

  if (options.searchParams) {
    options.searchParams.forEach((value, key) => {
      url.searchParams.set(key, value);
    });
  }

  const response = await fetch(url, {
    ...options,
    signal: options.signal ?? AbortSignal.timeout(4000),
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new FranceTravailApiError(`FRANCE_TRAVAIL_API_ERROR_${response.status}`, response.status);
  }

  return {
    data: (await response.json()) as T,
    headers: response.headers,
  };
}

export function toRouteError(error: unknown) {
  if (error instanceof FranceTravailApiError) {
    return {
      status: error.status,
      body: {
        error: error.message,
        source: error.apiStatus,
        details: error.details ? error.details.slice(0, 500) : undefined,
      },
    };
  }

  return {
    status: 502,
    body: {
      error: 'FRANCE_TRAVAIL_UNKNOWN_ERROR',
      source: 'error',
    },
  };
}
