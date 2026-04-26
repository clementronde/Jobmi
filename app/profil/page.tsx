"use client";

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
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

type ProgressActivity = {
  id: string;
  label: string;
  detail: string;
  points: number;
};

const progressActivities: ProgressActivity[] = [
  {
    id: 'atelier',
    label: 'Atelier découverte métier',
    detail: 'Tu as participé à un atelier ou une animation pour découvrir un secteur.',
    points: 10,
  },
  {
    id: 'salon',
    label: "Salon de l'étudiant ou forum métiers",
    detail: 'Tu as pris le temps de discuter avec des écoles, organismes ou pros.',
    points: 8,
  },
  {
    id: 'journee',
    label: 'Journée portes ouvertes ou immersion école',
    detail: 'Tu as visité une école ou vécu une première immersion dans un campus.',
    points: 12,
  },
  {
    id: 'stage',
    label: "Stage d'observation",
    detail: 'Tu as observé le quotidien d’un métier sur le terrain.',
    points: 16,
  },
  {
    id: 'pmsmp',
    label: 'Immersion pro / PMSMP',
    detail: 'Tu as testé un métier en contexte réel avec un cadre officiel.',
    points: 20,
  },
  {
    id: 'rencontre',
    label: 'Échange avec un professionnel',
    detail: 'Tu as posé tes questions à quelqu’un du métier visé.',
    points: 6,
  },
];

const progressStorageKey = 'jobmi-profile-progression';

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

function getLevelFromPoints(points: number) {
  if (points >= 55) return { label: 'Défricheur confirmé', next: 'Cap atteint', color: 'text-[#0C7A43]' };
  if (points >= 30) return { label: 'Explorateur terrain', next: 'Encore 25 pts pour passer confirmé', color: 'text-[#6500FF]' };
  if (points >= 12) return { label: 'Chercheur de pistes', next: 'Encore 18 pts pour passer terrain', color: 'text-[#6500FF]' };
  return { label: 'Explorateur Jobmi', next: 'Encore 12 pts pour passer au niveau suivant', color: 'text-[#6500FF]' };
}

function getProfileBadges(params: {
  completion: number;
  hasRiasec: boolean;
  jobCount: number;
  completedActivities: number;
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
      label: 'Test débloqué',
      unlocked: params.hasRiasec,
      description: 'Tu as déjà passé le test d’orientation Jobmi.',
    },
    {
      id: 'jobs',
      label: 'Pistes activées',
      unlocked: params.jobCount >= 5,
      description: 'Tu as débloqué tes premières pistes métiers.',
    },
    {
      id: 'terrain',
      label: 'Terrain lancé',
      unlocked: params.completedActivities >= 2,
      description: 'Tu as déjà commencé à confronter ton projet à la réalité.',
    },
  ];
}

export default function ProfilPage() {
  const { status } = useSession();
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
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);

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

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(progressStorageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setCompletedActivities(parsed);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(progressStorageKey, JSON.stringify(completedActivities));
  }, [completedActivities]);

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

  const toggleActivity = (id: string) => {
    setCompletedActivities(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  if (status === 'loading') {
    return <div className="mt-[90px] flex justify-center py-20">Chargement...</div>;
  }

  if (status === 'unauthenticated') {
    return (
      <div className="mt-[90px] flex flex-col items-center gap-4 py-20">
        <p>Tu dois être connecté pour accéder à ton profil.</p>
        <Link href="/me-connecter" className="rounded-xl bg-black px-4 py-2 font-semibold text-white">
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
  const activityPoints = progressActivities
    .filter(activity => completedActivities.includes(activity.id))
    .reduce((sum, activity) => sum + activity.points, 0);
  const level = getLevelFromPoints(activityPoints);
  const badges = getProfileBadges({
    completion,
    hasRiasec: Boolean(riasecResult),
    jobCount: riasecResult?.jobs.length ?? 0,
    completedActivities: completedActivities.length,
  });
  const globalProgress = Math.min(
    100,
    Math.round(completion * 0.35 + (riasecResult ? 20 : 0) + Math.min(activityPoints, 45))
  );
  const missions = [
    {
      label: 'Compléter tes informations',
      done: completion >= 80,
      action: editing ? 'En cours' : completion >= 80 ? 'Terminé' : 'À finaliser',
    },
    {
      label: "Passer ou refaire le test d'orientation",
      done: Boolean(riasecResult),
      action: riasecResult ? 'Déjà disponible' : 'À faire',
    },
    {
      label: 'Vivre au moins 2 expériences terrain',
      done: completedActivities.length >= 2,
      action: `${completedActivities.length}/2 validées`,
    },
  ];

  return (
    <div className="mx-auto mt-[90px] max-w-screen-xl p-6">
      <div className="mb-8 rounded-[1.8rem] border border-[#E9E1FF] bg-[radial-gradient(circle_at_top_left,rgba(101,0,255,0.14),transparent_34%),linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] p-6 shadow-[0_22px_55px_rgba(4,25,47,0.07)]">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Espace perso
            </p>
            <h1 className="text-3xl font-bold text-[#04192F] sm:text-4xl">
              {formData.firstName ? `${formData.firstName}, ton espace Jobmi` : 'Profil'}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#465160]">
              Tout ce qu’on a déjà compris sur toi, ce que tu as testé, et les prochaines étapes
              utiles pour avancer sans repartir de zéro.
            </p>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_14px_32px_rgba(101,0,255,0.08)]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6500FF]">Niveau actuel</p>
            <p className={`mt-1 text-2xl font-bold ${level.color}`}>{level.label}</p>
            <p className="mt-1 text-xs text-[#465160]">{level.next}</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="rounded-2xl border border-white/80 bg-white/85 p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[#04192F]">Progression globale</p>
              <span className="rounded-full bg-[#6500FF]/10 px-3 py-1 text-sm font-bold text-[#6500FF]">
                {globalProgress}%
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[#EFEAFE]">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#6500FF,#A78BFA)] transition-all duration-500"
                style={{ width: `${globalProgress}%` }}
              />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  className={`rounded-2xl border px-4 py-4 ${
                    badge.unlocked ? 'border-[#E9E1FF] bg-[#F8F7FF]' : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[#04192F]">{badge.label}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        badge.unlocked ? 'bg-[#6500FF] text-white' : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {badge.unlocked ? 'OK' : 'À faire'}
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
                <div key={mission.label} className="flex items-start gap-3 rounded-2xl bg-white/6 px-4 py-3">
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

      <section id="mes-informations" className="scroll-mt-28">
        <div className="mb-8 flex items-center justify-between">
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
                className="cursor-pointer rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold"
              >
                Annuler
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="cursor-pointer rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                {saving ? 'Sauvegarde...' : 'Enregistrer'}
              </button>
            </div>
          )}
        </div>

        {saved && <p className="mb-4 text-sm text-green-600">Profil mis à jour.</p>}
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

        <div className="mb-6 grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div className="flex flex-col gap-4 rounded-[1.4rem] border border-gray-200 bg-white p-6 shadow-[0_14px_30px_rgba(4,25,47,0.04)]">
            {fields.map(({ label, name }) => (
              <div key={name} className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-500">{label}</label>
                {editing && name !== 'email' ? (
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="rounded-lg border border-gray-300 p-2 text-sm"
                  />
                ) : (
                  <p className="p-2 text-sm text-gray-800">
                    {formData[name] || <span className="italic text-gray-400">Non renseigné</span>}
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
                <h3 className="text-lg font-bold text-[#04192F]">Test d'orientation RIASEC</h3>
                <p className="text-sm text-gray-600">
                  Retrouve ton dernier score et les métiers qui collent le mieux à ton profil.
                </p>
              </div>
              <Link
                href="/test"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#04192F] px-4 py-2 text-sm font-semibold text-white"
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
                </div>

                <div className="grid gap-6 lg:grid-cols-[minmax(300px,360px)_minmax(0,1fr)]">
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
                      On a bien enregistré ton score. Refaire le test nous permettra aussi
                      d’afficher les métiers associés ici.
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[#D6CCFF] bg-white/70 p-5">
                <p className="text-sm leading-6 text-gray-600">
                  Tu n’as pas encore de résultat enregistré. Passe le test pour débloquer ton
                  profil RIASEC, tes scores et tes premières pistes métiers.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="ma-progression" className="scroll-mt-28">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#04192F]">Ma progression</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#465160]">
              Coche ce que tu as déjà fait dans la vraie vie. Plus tu testes, plus ton projet
              devient solide.
            </p>
          </div>
          <div className="rounded-2xl border border-[#D9F4E7] bg-[#F2FCF7] px-4 py-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0C7A43]">Points terrain</p>
            <p className="mt-1 text-2xl font-bold text-[#0C7A43]">{activityPoints} pts</p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="rounded-[1.6rem] border border-[#E9E1FF] bg-white p-6 shadow-[0_18px_45px_rgba(4,25,47,0.05)]">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold text-[#04192F]">Expériences déjà faites</p>
              <span className="rounded-full bg-[#6500FF]/8 px-3 py-1 text-xs font-semibold text-[#6500FF]">
                {completedActivities.length}/{progressActivities.length}
              </span>
            </div>
            <div className="grid gap-3">
              {progressActivities.map((activity) => {
                const done = completedActivities.includes(activity.id);
                return (
                  <button
                    key={activity.id}
                    type="button"
                    onClick={() => toggleActivity(activity.id)}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      done
                        ? 'border-[#B79CFF] bg-[#F8F5FF] shadow-[0_12px_28px_rgba(101,0,255,0.08)]'
                        : 'border-gray-200 bg-white hover:border-[#D7CAFF]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                          done
                            ? 'border-[#6500FF] bg-[#6500FF] text-white'
                            : 'border-gray-300 text-gray-400'
                        }`}
                      >
                        {done ? '✓' : '+'}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-semibold text-[#04192F]">{activity.label}</p>
                          <span className="rounded-full bg-[#0C7A43]/8 px-2 py-0.5 text-xs font-semibold text-[#0C7A43]">
                            +{activity.points} pts
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-6 text-gray-500">{activity.detail}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.6rem] border border-[#04192F]/8 bg-[#04192F] p-6 text-white shadow-[0_18px_45px_rgba(4,25,47,0.14)]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C4B5FD]">
                Lecture rapide
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Chaque expérience terrain t’aide plus qu’une nouvelle supposition.
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Le but n’est pas de cocher des cases pour faire joli. Le but, c’est de diminuer le
                flou avant une décision importante : formation, réorientation, alternance ou
                reconversion.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-[#E9E1FF] bg-[linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] p-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#6500FF]">
                Suite logique
              </p>
              <div className="space-y-3">
                <Link
                  href="/tester-un-metier"
                  className="block rounded-2xl border border-[#E9E1FF] bg-white px-4 py-4 transition hover:border-[#6500FF]"
                >
                  <p className="font-semibold text-[#04192F]">Trouver une immersion ou un stage</p>
                  <p className="mt-1 text-sm text-gray-500">Voir les formats concrets pour passer du doute au terrain.</p>
                </Link>
                <Link
                  href="/stage-et-formation"
                  className="block rounded-2xl border border-[#E9E1FF] bg-white px-4 py-4 transition hover:border-[#6500FF]"
                >
                  <p className="font-semibold text-[#04192F]">Comparer les bonnes suites</p>
                  <p className="mt-1 text-sm text-gray-500">Repérer les formations ou immersions cohérentes avec ton profil.</p>
                </Link>
                <Link
                  href="/outils"
                  className="block rounded-2xl border border-[#E9E1FF] bg-white px-4 py-4 transition hover:border-[#6500FF]"
                >
                  <p className="font-semibold text-[#04192F]">Ouvrir la boîte à outils Jobmi</p>
                  <p className="mt-1 text-sm text-gray-500">Retrouver tous les outils utiles au même endroit.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
