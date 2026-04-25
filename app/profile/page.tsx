"use client";

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DIMENSION_LABELS } from '@/data/riasecData';
import { RiasecRadarChart } from '@/components/ui/RiasecRadarChart';
import type { RiasecScores, ScoredJob } from '@/types/riasec';

type ProfileResponse = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
  image?: string;
  riasec: null | {
    dominantCode: string;
    scores: RiasecScores;
    jobs: ScoredJob[];
    allJobs: ScoredJob[];
    testedAt: string | null;
  };
};

function computeProfileCompletion(formData: {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
}) {
  const fields = [formData.firstName, formData.lastName, formData.email, formData.city, formData.phone];
  return Math.round((fields.filter(Boolean).length / fields.length) * 100);
}

function getProfileBadges(params: {
  completion: number;
  hasRiasec: boolean;
  jobCount: number;
}) {
  return [
    {
      id: 'profile',
      label: 'Profil prêt',
      unlocked: params.completion >= 80,
      description: 'Tes infos principales sont bien complétées.',
    },
    {
      id: 'riasec',
      label: 'Explorateur Jobmi',
      unlocked: params.hasRiasec,
      description: 'Tu as déjà passé le test RIASEC.',
    },
    {
      id: 'jobs',
      label: 'Radar métiers',
      unlocked: params.jobCount >= 5,
      description: 'Tu as débloqué tes premières pistes métiers.',
    },
  ];
}

export default function Profil() {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
  });
  const [riasecResult, setRiasecResult] = useState<ProfileResponse['riasec']>(null);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status !== 'authenticated') return;
    fetch('/api/user')
      .then(r => r.json())
      .then((data: ProfileResponse) => {
        setFormData({
          firstName: data.firstName ?? '',
          lastName: data.lastName ?? '',
          email: data.email ?? '',
          city: data.city ?? '',
          phone: data.phone ?? '',
        });
        setRiasecResult(data.riasec ?? null);
      })
      .catch(() => {});
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSaved(true);
      setEditing(false);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setError('Erreur lors de la sauvegarde');
    } finally {
      setSaving(false);
    }
  };

  if (status === 'loading') {
    return <div className="mt-[90px] flex justify-center py-20">Chargement...</div>;
  }

  if (status === 'unauthenticated') {
    return (
      <div className="mt-[90px] flex flex-col items-center py-20 gap-4">
        <p>Tu dois être connecté pour accéder à ton profil.</p>
        <Link href="/me-connecter" className="rounded-xl px-4 py-2 bg-black text-white font-semibold">
          Se connecter
        </Link>
      </div>
    );
  }

  const fields = [
    { label: 'Prénom', name: 'firstName' },
    { label: 'Nom', name: 'lastName' },
    { label: 'Email', name: 'email' },
    { label: 'Ville', name: 'city' },
    { label: 'Téléphone', name: 'phone' },
  ] as const;

  const completion = computeProfileCompletion(formData);
  const badges = getProfileBadges({
    completion,
    hasRiasec: Boolean(riasecResult),
    jobCount: riasecResult?.jobs.length ?? 0,
  });
  const missions = [
    {
      label: 'Compléter ton profil',
      done: completion >= 80,
      action: editing ? 'En cours' : 'Modifier mon profil',
    },
    {
      label: 'Passer le test RIASEC',
      done: Boolean(riasecResult),
      action: riasecResult ? 'Terminé' : 'Faire le test',
    },
    {
      label: 'Explorer 5 métiers compatibles',
      done: (riasecResult?.jobs.length ?? 0) >= 5,
      action: riasecResult ? 'Voir mes pistes' : 'Débloquer mes pistes',
    },
  ];

  return (
    <div className="mx-auto mt-[90px] max-w-screen-lg p-6">
      <div className="mb-8 rounded-[1.8rem] border border-[#E9E1FF] bg-[radial-gradient(circle_at_top_left,rgba(101,0,255,0.14),transparent_34%),linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] p-6 shadow-[0_22px_55px_rgba(4,25,47,0.07)]">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Espace perso
            </p>
            <h1 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              {formData.firstName ? `${formData.firstName}, ton QG Jobmi` : 'Mon profil'}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#465160]">
              Ici, tu suis ta progression, ton dernier test et les pistes à explorer pour avancer
              sans repartir de zéro.
            </p>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_14px_32px_rgba(101,0,255,0.08)]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6500FF]">Niveau</p>
            <p className="mt-1 text-2xl font-bold text-[#04192F]">Explorateur</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
          <div className="rounded-2xl border border-white/80 bg-white/85 p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[#04192F]">Progression de ton profil</p>
              <span className="rounded-full bg-[#6500FF]/10 px-3 py-1 text-sm font-bold text-[#6500FF]">
                {completion}%
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[#EFEAFE]">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#6500FF,#A78BFA)] transition-all duration-500"
                style={{ width: `${completion}%` }}
              />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`rounded-2xl border px-4 py-4 ${
                    badge.unlocked
                      ? 'border-[#E9E1FF] bg-[#F8F7FF]'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[#04192F]">{badge.label}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        badge.unlocked
                          ? 'bg-[#6500FF] text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {badge.unlocked ? 'Débloqué' : 'À faire'}
                    </span>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/80 bg-[#04192F] p-5 text-white shadow-[0_16px_38px_rgba(4,25,47,0.18)]">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C4B5FD]">
              Missions du moment
            </p>
            <div className="space-y-3">
              {missions.map((mission, index) => (
                <div
                  key={mission.label}
                  className="flex items-start gap-3 rounded-2xl bg-white/6 px-4 py-3"
                >
                  <div
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      mission.done ? 'bg-[#A78BFA] text-[#04192F]' : 'border border-white/20 text-white'
                    }`}
                  >
                    {mission.done ? '✓' : index + 1}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">{mission.label}</p>
                    <p className="mt-1 text-xs text-white/70">{mission.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#04192F]">Mes informations</h2>
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="cursor-pointer rounded-xl border border-black px-4 py-2 text-sm font-semibold"
          >
            Modifier
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => setEditing(false)}
              className="rounded-xl px-4 py-2 border border-gray-300 font-semibold text-sm cursor-pointer"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="rounded-xl px-4 py-2 bg-black text-white font-semibold text-sm cursor-pointer disabled:opacity-50"
            >
              {saving ? 'Sauvegarde...' : 'Enregistrer'}
            </button>
          </div>
        )}
      </div>

      {saved && (
        <p className="text-green-600 text-sm mb-4">Profil mis à jour.</p>
      )}
      {error && (
        <p className="text-red-500 text-sm mb-4">{error}</p>
      )}

      <div className="mb-6 flex flex-col gap-4 rounded-[1.4rem] border border-gray-200 bg-white p-6 shadow-[0_14px_30px_rgba(4,25,47,0.04)]">
        {fields.map(({ label, name }) => (
          <div key={name} className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-500">{label}</label>
            {editing && name !== 'email' ? (
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-lg text-sm"
              />
            ) : (
              <p className="p-2 text-sm text-gray-800">
                {formData[name] || <span className="text-gray-400 italic">Non renseigné</span>}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-[1.6rem] border border-[#E9E1FF] bg-[linear-gradient(180deg,#F8F7FF_0%,#FFFFFF_100%)] p-6 shadow-[0_18px_45px_rgba(4,25,47,0.06)]">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Dernier résultat sauvegardé
            </p>
            <h2 className="text-lg font-bold text-[#04192F]">Test d'orientation RIASEC</h2>
            <p className="text-sm text-gray-600">
              Retrouve ton dernier score et les métiers qui collent le mieux à ton profil.
            </p>
          </div>
          <Link
            href="/test"
            className="rounded-xl px-4 py-2 bg-[#04192F] text-white font-semibold text-sm inline-flex items-center gap-2 w-fit"
          >
            Refaire le test
            <img src="/media/cta-blog-arrow.svg" alt="" className="w-5" />
          </Link>
        </div>

        {riasecResult ? (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#E9E1FF] bg-white/80 p-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#6500FF]/10 px-4 py-2 text-2xl font-bold tracking-widest text-[#6500FF]">
                  {riasecResult.dominantCode}
                </span>
                <span className="text-sm text-gray-500">
                  {riasecResult.testedAt
                    ? `Dernier test enregistré le ${new Date(riasecResult.testedAt).toLocaleDateString('fr-FR')}`
                    : 'Dernier test enregistré'}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#465160]">
                Ce bloc te permet de retrouver rapidement ton dernier profil sans refaire tout le
                test. Si tu sens que tes envies ont évolué, tu peux le relancer quand tu veux.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(320px,380px)_minmax(0,1fr)]">
              <RiasecRadarChart scores={riasecResult.scores} />
              <div className="rounded-2xl border border-white/70 bg-white p-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
                  Tes scores
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {Object.entries(riasecResult.scores).map(([dimension, score]) => (
                    <div
                      key={dimension}
                      className="rounded-xl border border-gray-100 bg-[#FCFCFF] px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-[#04192F]">
                        {DIMENSION_LABELS[dimension as keyof RiasecScores].label}
                      </p>
                      <p className="mt-1 text-lg font-bold text-[#6500FF]">{score}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
                Métiers qui te correspondent
              </p>
              {riasecResult.jobs.length > 0 ? (
                <>
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-500">
                      Tes 5 meilleures pistes sont affichées par défaut, et tu peux ouvrir la
                      liste complète si tu veux explorer plus large.
                    </p>
                    {riasecResult.allJobs.length > 5 ? (
                      <button
                        type="button"
                        onClick={() => setShowAllJobs(value => !value)}
                        className="rounded-xl border border-[#6500FF]/20 bg-[#6500FF]/5 px-4 py-2 text-sm font-semibold text-[#6500FF] transition-colors hover:bg-[#6500FF]/10"
                      >
                        {showAllJobs
                          ? 'Afficher seulement le top 5'
                          : `Voir la liste complète (${riasecResult.allJobs.length})`}
                      </button>
                    ) : null}
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {(showAllJobs ? riasecResult.allJobs : riasecResult.jobs).map(job => (
                      <div
                        key={job.id}
                        className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_14px_30px_rgba(4,25,47,0.04)]"
                      >
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <p className="font-semibold text-[#04192F]">{job.name}</p>
                          <span className="rounded-full bg-[#6500FF]/8 px-2.5 py-1 text-xs font-semibold text-[#6500FF]">
                            {job.matchScore}%
                          </span>
                        </div>
                        <p className="text-sm leading-6 text-gray-600">{job.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-500">
                  On a bien enregistré ton score. Refaire le test nous permettra aussi d’afficher
                  les métiers associés ici.
                </p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-500">
            Tu n’as pas encore de résultat enregistré. Passe le test avec ton email ou Google pour
            retrouver ensuite ton score ici.
          </p>
        )}
      </div>
    </div>
  );
}
