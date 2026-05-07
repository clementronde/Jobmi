'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type {
  JobmiApprenticeshipJob,
  JobmiApprenticeshipSearchResult,
  JobmiApprenticeshipTraining,
} from '../lib/apprentissage';
import type { JobmiOpportunity } from '../lib/franceTravail/types';

const diplomaLevels = [
  { value: '', label: 'Tous niveaux' },
  { value: '3', label: 'CAP / BEP' },
  { value: '4', label: 'Bac' },
  { value: '5', label: 'Bac+2' },
  { value: '6', label: 'Bac+3 / Bac+4' },
  { value: '7', label: 'Bac+5' },
];

const contractTypeOptions = [
  { value: '', label: 'Tous contrats' },
  { value: 'APP', label: 'Apprentissage' },
  { value: 'PRO', label: 'Professionnalisation' },
  { value: 'CDI', label: 'CDI' },
  { value: 'CDD', label: 'CDD' },
  { value: 'MIS', label: 'Intérim' },
  { value: 'SAI', label: 'Saisonnier' },
];

// La bonne alternance only returns APP/PRO — skip it for other contract types
const ALTERNANCE_TYPES = new Set(['', 'APP', 'PRO']);

const usefulSources = [
  {
    title: '1 jeune 1 solution',
    tag: 'Stages, jobs, alternance',
    href: 'https://www.1jeune1solution.gouv.fr/stages',
    text: "La meilleure source publique à ajouter pour les stages d'études et les offres jeunes hors alternance.",
  },
  {
    title: 'Immersion Facilitée',
    tag: 'PMSMP / immersion',
    href: 'https://immersion-facile.beta.gouv.fr/',
    text: "Annuaire d'entreprises accueillantes pour tester un métier via une immersion professionnelle.",
  },
  {
    title: 'CIDJ',
    tag: 'Stages et jobs jeunes',
    href: 'https://www.cidj.com/travailler/offres-emploi',
    text: 'Offres éditorialisées pour jeunes : stages, jobs étudiants, alternance, CDD et premiers emplois.',
  },
  {
    title: 'France Travail',
    tag: 'Emploi et stages',
    href: 'https://candidat.francetravail.fr/offres/recherche',
    text: "Source large pour compléter Jobmi avec stages, CDD, CDI, contrats pro et jobs d'été.",
  },
];

function buildSearchUrl(filters: {
  query: string;
  location: string;
  diploma: string;
  radius: string;
  contractType: string;
}) {
  const params = new URLSearchParams();
  if (filters.query.trim()) params.set('query', filters.query.trim());
  if (filters.location.trim()) params.set('location', filters.location.trim());
  if (filters.diploma) params.set('diploma', filters.diploma);
  if (filters.radius) params.set('radius', filters.radius);
  return `/api/apprentissage/search?${params.toString()}`;
}

function buildFranceTravailSearchUrl(filters: {
  query: string;
  location: string;
  contractType: string;
  radius: string;
}) {
  const params = new URLSearchParams();
  if (filters.query.trim()) params.set('q', filters.query.trim());
  if (filters.location.trim()) params.set('location', filters.location.trim());
  if (filters.contractType) params.set('typeContrat', filters.contractType);
  if (filters.radius) params.set('radius', filters.radius);
  return `/api/france-travail/opportunities?${params.toString()}`;
}

function MetaPill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-[#6500FF]/8 px-3 py-1 text-xs font-bold text-[#6500FF]">
      {children}
    </span>
  );
}

function JobCard({ job }: { job: JobmiApprenticeshipJob }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-[0_12px_30px_rgba(4,25,47,0.05)]">
      <div className="flex flex-wrap gap-2">
        <MetaPill>{job.sourceType === 'offer' ? 'Offre' : 'Recruteur potentiel'}</MetaPill>
        <MetaPill>{job.contract}</MetaPill>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug text-[#04192F]">{job.title}</h3>
      <p className="mt-2 font-semibold text-gray-700">{job.company}</p>
      <p className="mt-1 text-sm text-gray-500">{job.location}</p>
      <p className="mt-4 text-sm leading-6 text-gray-600">{job.description}</p>
      <dl className="mt-4 grid gap-2 text-sm text-gray-600">
        <div className="flex justify-between gap-3 border-t border-gray-100 pt-2">
          <dt className="font-bold text-[#04192F]">Durée</dt>
          <dd className="text-right">{job.duration}</dd>
        </div>
        <div className="flex justify-between gap-3 border-t border-gray-100 pt-2">
          <dt className="font-bold text-[#04192F]">Modalité</dt>
          <dd className="text-right">{job.remote}</dd>
        </div>
        <div className="flex justify-between gap-3 border-t border-gray-100 pt-2">
          <dt className="font-bold text-[#04192F]">Source</dt>
          <dd className="text-right">{job.partner}</dd>
        </div>
      </dl>
      <a
        href={job.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#6500FF] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#5200cc]"
      >
        Voir l'opportunité
      </a>
    </article>
  );
}

function FranceTravailJobCard({ opportunity }: { opportunity: JobmiOpportunity }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-[0_12px_30px_rgba(4,25,47,0.05)]">
      <div className="flex flex-wrap gap-2">
        <MetaPill>Offre France Travail</MetaPill>
        <MetaPill>{opportunity.contractType}</MetaPill>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug text-[#04192F]">{opportunity.title}</h3>
      <p className="mt-2 font-semibold text-gray-700">{opportunity.company}</p>
      <p className="mt-1 text-sm text-gray-500">{opportunity.location}</p>
      <dl className="mt-4 grid gap-2 text-sm text-gray-600">
        <div className="flex justify-between gap-3 border-t border-gray-100 pt-2">
          <dt className="font-bold text-[#04192F]">Contrat</dt>
          <dd className="text-right">{opportunity.contractType}</dd>
        </div>
        <div className="flex justify-between gap-3 border-t border-gray-100 pt-2">
          <dt className="font-bold text-[#04192F]">Expérience</dt>
          <dd className="text-right">{opportunity.experience}</dd>
        </div>
        <div className="flex justify-between gap-3 border-t border-gray-100 pt-2">
          <dt className="font-bold text-[#04192F]">Source</dt>
          <dd className="text-right">France Travail</dd>
        </div>
      </dl>
      <a
        href={opportunity.url}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex w-full items-center justify-center rounded-lg bg-[#6500FF] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#5200cc]"
      >
        Voir l'offre
      </a>
    </article>
  );
}

function TrainingCard({ training }: { training: JobmiApprenticeshipTraining }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-[0_12px_30px_rgba(4,25,47,0.05)]">
      <div className="flex flex-wrap gap-2">
        <MetaPill>Formation</MetaPill>
        <MetaPill>{training.remote}</MetaPill>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug text-[#04192F]">{training.title}</h3>
      <p className="mt-2 font-semibold text-gray-700">{training.school}</p>
      <p className="mt-1 text-sm text-gray-500">{training.location}</p>
      <p className="mt-4 text-sm leading-6 text-gray-600">
        {training.description || "Détail de formation à vérifier auprès de l'organisme."}
      </p>
      <dl className="mt-4 grid gap-2 text-sm text-gray-600">
        <div className="flex justify-between gap-3 border-t border-gray-100 pt-2">
          <dt className="font-bold text-[#04192F]">Durée</dt>
          <dd className="text-right">{training.duration}</dd>
        </div>
        <div className="flex justify-between gap-3 border-t border-gray-100 pt-2">
          <dt className="font-bold text-[#04192F]">Niveau</dt>
          <dd className="text-right">{training.level}</dd>
        </div>
        <div className="flex justify-between gap-3 border-t border-gray-100 pt-2">
          <dt className="font-bold text-[#04192F]">Contact</dt>
          <dd className="text-right">{training.contact}</dd>
        </div>
      </dl>
      <a
        href={training.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#04192F] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#6500FF]"
      >
        Voir la formation
      </a>
    </article>
  );
}

export default function ApprentissageExplorer() {
  const [filters, setFilters] = useState({
    query: '',
    location: '75',
    diploma: '',
    radius: '30',
    contractType: '',
  });
  const [result, setResult] = useState<JobmiApprenticeshipSearchResult | null>(null);
  const [franceTravailOpportunities, setFranceTravailOpportunities] = useState<JobmiOpportunity[]>([]);
  const [activeTab, setActiveTab] = useState<'jobs' | 'trainings' | 'sources'>('jobs');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [error, setError] = useState('');

  const allJobs = useMemo(
    () => [...(result?.jobs ?? []), ...(result?.recruiters ?? [])],
    [result],
  );

  async function loadOffers(nextFilters = filters) {
    setStatus('loading');
    setError('');

    const includeApprentissage = ALTERNANCE_TYPES.has(nextFilters.contractType);

    try {
      const [apprentissageResult, franceTravailResult] = await Promise.allSettled([
        includeApprentissage
          ? fetch(buildSearchUrl(nextFilters)).then(async (r) => {
              const p = await r.json();
              if (!r.ok) throw new Error(p?.error || 'Recherche apprentissage impossible pour le moment.');
              return p as JobmiApprenticeshipSearchResult;
            })
          : Promise.resolve({ jobs: [], recruiters: [], trainings: [], warnings: [] } as JobmiApprenticeshipSearchResult),
        fetch(buildFranceTravailSearchUrl(nextFilters)).then(async (r) => {
          const p = await r.json();
          if (!r.ok) throw new Error(p?.error || 'Recherche France Travail impossible pour le moment.');
          return p as { opportunities?: JobmiOpportunity[] };
        }),
      ]);

      if (apprentissageResult.status === 'fulfilled') {
        setResult(apprentissageResult.value);
      }

      if (franceTravailResult.status === 'fulfilled') {
        setFranceTravailOpportunities(franceTravailResult.value.opportunities ?? []);
      } else {
        setFranceTravailOpportunities([]);
      }

      if (apprentissageResult.status === 'rejected' && franceTravailResult.status === 'rejected') {
        throw apprentissageResult.reason;
      }

      setStatus('idle');
    } catch (fetchError) {
      setStatus('error');
      setError(fetchError instanceof Error ? fetchError.message : 'Recherche impossible pour le moment.');
    }
  }

  useEffect(() => {
    loadOffers();
  }, []);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    loadOffers();
  }

  return (
    <section className="mx-auto max-w-screen-xl px-6 py-14 sm:px-10">
      <div className="mb-8 max-w-3xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#6500FF]">
          Offres en direct
        </p>
        <h2 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
          Offres d'emploi, alternances et formations disponibles
        </h2>
        <p className="mt-4 text-gray-600">
          Offres France Travail et La bonne alternance chargées en direct. Filtre par métier (ou code ROME/RNCP),
          département et niveau pour affiner les résultats.
        </p>
      </div>

      <form
        onSubmit={submitSearch}
        className="grid gap-3 rounded-lg border border-[#E9E1FF] bg-[#F8F7FF] p-4 sm:grid-cols-2 lg:grid-cols-[1fr_0.6fr_0.65fr_0.55fr_0.55fr_auto]"
      >
        <label className="grid gap-2 text-sm font-bold text-[#04192F]">
          Métier ou code
          <input
            value={filters.query}
            onChange={(event) => setFilters((current) => ({ ...current, query: event.target.value }))}
            placeholder="développeur, commerce, M1805, RNCP..."
            className="h-12 rounded-lg border border-gray-200 bg-white px-4 font-medium outline-none transition focus:border-[#6500FF]"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#04192F]">
          Ville / département
          <input
            value={filters.location}
            onChange={(event) => setFilters((current) => ({ ...current, location: event.target.value }))}
            placeholder="75, 69 ou 75056 pour le rayon"
            className="h-12 rounded-lg border border-gray-200 bg-white px-4 font-medium outline-none transition focus:border-[#6500FF]"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#04192F]">
          Type de contrat
          <select
            value={filters.contractType}
            onChange={(event) => setFilters((current) => ({ ...current, contractType: event.target.value }))}
            className="h-12 rounded-lg border border-gray-200 bg-white px-4 font-medium outline-none transition focus:border-[#6500FF]"
          >
            {contractTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#04192F]">
          Niveau cible
          <select
            value={filters.diploma}
            onChange={(event) => setFilters((current) => ({ ...current, diploma: event.target.value }))}
            className="h-12 rounded-lg border border-gray-200 bg-white px-4 font-medium outline-none transition focus:border-[#6500FF]"
          >
            {diplomaLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#04192F]">
          <span>
            Rayon{' '}
            {/^(\d{1,3}|2[AB])$/i.test(filters.location.trim()) ? (
              <span className="font-normal text-amber-600 text-xs">(code commune requis)</span>
            ) : null}
          </span>
          <select
            value={filters.radius}
            onChange={(event) => setFilters((current) => ({ ...current, radius: event.target.value }))}
            className="h-12 rounded-lg border border-gray-200 bg-white px-4 font-medium outline-none transition focus:border-[#6500FF]"
          >
            <option value="10">10 km</option>
            <option value="30">30 km</option>
            <option value="60">60 km</option>
            <option value="100">100 km</option>
            <option value="200">200 km</option>
          </select>
        </label>
        <button
          type="submit"
          className="h-12 self-end rounded-lg bg-[#6500FF] px-5 text-sm font-bold text-white transition hover:bg-[#5200cc] lg:col-auto sm:col-span-2 lg:col-span-1"
        >
          {status === 'loading' ? 'Recherche...' : 'Rechercher'}
        </button>
      </form>

      {error ? (
        <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          {error} Vérifie les jetons serveur Apprentissage et France Travail, puis relance Next.js si tu viens
          de modifier <code className="font-bold">.env.local</code>.
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2">
        {[
          { id: 'jobs', label: `Offres et recruteurs (${allJobs.length + franceTravailOpportunities.length})` },
          { id: 'trainings', label: `Formations (${result?.trainings.length ?? 0})` },
          { id: 'sources', label: 'Autres sources utiles' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              activeTab === tab.id
                ? 'bg-[#04192F] text-white'
                : 'border border-gray-200 bg-white text-[#04192F] hover:border-[#6500FF]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {status === 'loading' && activeTab === 'jobs' ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 animate-pulse rounded-lg border border-gray-100 bg-gray-100" />
          ))}
        </div>
      ) : null}

      {status !== 'loading' && activeTab === 'jobs' ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {franceTravailOpportunities.map((opportunity) => (
            <FranceTravailJobCard key={`france-travail-${opportunity.id}`} opportunity={opportunity} />
          ))}
          {allJobs.map((job) => (
            <JobCard key={`${job.sourceType}-${job.id}-${job.url}`} job={job} />
          ))}
        </div>
      ) : null}

      {status === 'loading' && activeTab === 'trainings' ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 animate-pulse rounded-lg border border-gray-100 bg-gray-100" />
          ))}
        </div>
      ) : null}

      {status !== 'loading' && activeTab === 'trainings' ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {(result?.trainings ?? []).map((training) => (
            <TrainingCard key={`${training.id}-${training.school}-${training.location}`} training={training} />
          ))}
        </div>
      ) : null}

      {activeTab === 'sources' ? (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {usefulSources.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-[0_12px_30px_rgba(4,25,47,0.05)] transition hover:-translate-y-1 hover:border-[#6500FF]"
            >
              <MetaPill>{source.tag}</MetaPill>
              <h3 className="mt-4 text-xl font-bold text-[#04192F]">{source.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{source.text}</p>
              <p className="mt-5 text-sm font-bold text-[#6500FF]">Ouvrir la source</p>
            </a>
          ))}
        </div>
      ) : null}

      {status === 'idle' && activeTab === 'jobs' && allJobs.length === 0 && franceTravailOpportunities.length === 0 && !error ? (
        <p className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
          Aucun résultat sur ces critères. Essaie un département plus large, un autre terme ou un code ROME.
        </p>
      ) : null}

      {status === 'idle' && activeTab === 'trainings' && (result?.trainings ?? []).length === 0 && !error ? (
        <p className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
          Aucune formation trouvée sur ces critères. Essaie un département plus large ou un autre métier.
        </p>
      ) : null}
    </section>
  );
}
