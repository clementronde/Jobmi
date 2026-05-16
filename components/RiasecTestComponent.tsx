'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { RIASEC_QUESTIONS, JOBS, DIMENSION_LABELS } from '@/data/riasecData';
import { getLocalRomeJobSheetByJobmiId } from '@/lib/franceTravail/localData';
import { getRomeCodeForJobmiJob, getMappingStatusForJobmiJob } from '@/lib/franceTravail/romeMapping';
import { computeTestResult } from '@/services/riasecService';
import { InfoCallout } from '@/components/ui/InfoCallout';
import { RiasecRadarChart } from '@/components/ui/RiasecRadarChart';
import {
  trackCtaClick,
  trackLeadSignup,
  trackQuizComplete,
  trackQuizStart,
  trackQuizStep,
  trackTestResultViewed,
} from '@/lib/analytics';
import type {
  RiasecAnswer,
  TestResult,
  JobFamily,
  Job,
  RiasecDimension,
  RiasecScores,
  ScoredJob,
} from '@/types/riasec';
import type {
  FranceTravailApiStatus,
  JobmiCompanyLead,
  JobmiOpportunity,
  JobmiTrainingReview,
} from '@/lib/franceTravail/types';
import type { JobmiEvent } from '@/types/events';

const QUESTIONS_PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(RIASEC_QUESTIONS.length / QUESTIONS_PER_PAGE);
const QUIZ_NAME = 'riasec_orientation';

type Step = 'intro' | 'questions' | 'capture' | 'results' | 'resume';

type ActionPlanData = {
  opportunities: JobmiOpportunity[];
  companies: JobmiCompanyLead[];
  events: JobmiEvent[];
  reviews: JobmiTrainingReview[];
  sources: {
    opportunities: FranceTravailApiStatus;
    companies: FranceTravailApiStatus;
    events: FranceTravailApiStatus;
    reviews: FranceTravailApiStatus;
  };
};

const LIKERT_LABELS = ['Pas du tout moi', 'Plutôt non', 'Neutre', 'Plutôt oui', 'Tout à fait moi'];

function getProfileSummary(profile: TestResult['profile']) {
  const [first, second, third] = profile.sortedDimensions;
  const firstLabel = DIMENSION_LABELS[first].label.toLowerCase();
  const secondLabel = DIMENSION_LABELS[second].label.toLowerCase();
  const thirdLabel = DIMENSION_LABELS[third].label.toLowerCase();

  const intros: Record<RiasecDimension, string> = {
    R: "Tu sembles avoir besoin d’un quotidien concret, où tu peux agir, manipuler et voir rapidement l’effet de ce que tu fais.",
    I: "Tu sembles être stimulé(e) par les environnements où il faut comprendre, analyser et résoudre des problèmes avec méthode.",
    A: "Tu sembles chercher un cadre où tu peux créer, imaginer, proposer des idées et laisser une vraie place à ton expression.",
    S: "Tu sembles avoir besoin d’un métier utile aux autres, avec du contact humain, de l’écoute et une dimension d’accompagnement.",
    E: "Tu sembles être à l’aise dans les contextes où il faut initier, convaincre, décider et faire avancer des projets.",
    C: "Tu sembles te sentir bien dans les environnements structurés, où l’organisation, la rigueur et la fiabilité comptent vraiment.",
  };

  const bridges: Record<RiasecDimension, string> = {
    R: "Tu risques de te lasser dans des rôles trop abstraits ou trop déconnectés du terrain.",
    I: "Tu as sans doute besoin de sens, de logique et d’un minimum de profondeur intellectuelle dans ce que tu fais.",
    A: "Tu risques de vite t’éteindre dans un cadre trop rigide ou purement exécutant.",
    S: "Le relationnel semble être un vrai moteur, pas juste un bonus dans ton travail.",
    E: "Tu as probablement besoin d’énergie, d’autonomie et d’un peu de mouvement pour rester engagé(e).",
    C: "Tu sembles apprécier les missions claires, les repères nets et les responsabilités bien tenues.",
  };

  return `${intros[first]} Ton profil mélange surtout des dimensions ${firstLabel}, ${secondLabel} et ${thirdLabel}. ${bridges[second]} C’est souvent un bon signal pour viser des métiers où cette combinaison peut vraiment s’exprimer, puis confirmer ça sur le terrain avant de choisir une formation.`;
}

// ── Intro ─────────────────────────────────────────────────────────────────────

function TestIntro({ onStart }: { onStart: (name: string) => void }) {
  const [name, setName] = useState('');

  return (
    <div className="font-sans">
      <div className="flex min-h-[calc(100vh-90px)] flex-col bg-[#F3F3F3] px-6 sm:px-16 lg:px-20">
        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(390px,520px)] lg:py-16">
          <div>
            <p className="text-[#6500FF] font-semibold text-xs uppercase tracking-widest mb-5">
              Test d'orientation · Modèle RIASEC
            </p>
            <h1 className="font-oddlini uppercase text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#04192F] mb-5 max-w-3xl">
              Trouve les métiers qui te ressemblent vraiment
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mb-2">
              30 questions concrètes · 6 à 8 minutes · Aucune bonne ou mauvaise réponse.
              Réponds selon ce que tu ressens, pas ce que tu crois qu'il faut répondre.
            </p>
            <p className="text-gray-400 text-sm mb-10 max-w-xl">
              Ce test est une aide à la réflexion. À la fin, on te proposera de sauvegarder ton résultat
              avec Google ou ton email pour que tu puisses le retrouver.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && onStart(name)}
                placeholder="Ton prénom (optionnel)"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#6500FF] focus:border-transparent text-gray-800"
              />
              <button
                onClick={() => onStart(name)}
                className="rounded-xl px-5 py-3 flex items-center justify-center gap-2 bg-[#04192F] text-white font-semibold whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                Commencer
                <img src="/media/cta-blog-arrow.svg" alt="" className="w-6" />
              </button>
            </div>
          </div>

          <div className="riasec-hero-demo relative mx-auto w-full max-w-[500px] rounded-[2rem] border border-white bg-white p-4 shadow-[0_28px_80px_rgba(4,25,47,0.12)]">
            <div className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-[#FAFAFA]">
              <div className="flex items-center justify-between border-b border-gray-100 bg-white px-5 py-3.5">
                <div className="relative h-10 flex-1">
                  <div className="riasec-demo-meta riasec-demo-meta-1">
                    <p className="text-xs font-bold uppercase text-[#6500FF]">Test RIASEC</p>
                    <p className="text-sm font-semibold text-[#04192F]">Question 12 sur 30</p>
                  </div>
                  <div className="riasec-demo-meta riasec-demo-meta-2">
                    <p className="text-xs font-bold uppercase text-[#6500FF]">Test RIASEC</p>
                    <p className="text-sm font-semibold text-[#04192F]">Question 24 sur 30</p>
                  </div>
                  <div className="riasec-demo-meta riasec-demo-meta-3">
                    <p className="text-xs font-bold uppercase text-[#6500FF]">Résultat RIASEC</p>
                    <p className="text-sm font-semibold text-[#04192F]">Profil calculé</p>
                  </div>
                </div>
                <div className="relative h-7 w-14">
                  <span className="riasec-demo-percent riasec-demo-percent-1 rounded-full bg-[#F8F7FF] px-3 py-1 text-xs font-semibold text-[#6500FF]">
                    40%
                  </span>
                  <span className="riasec-demo-percent riasec-demo-percent-2 rounded-full bg-[#F8F7FF] px-3 py-1 text-xs font-semibold text-[#6500FF]">
                    80%
                  </span>
                  <span className="riasec-demo-percent riasec-demo-percent-3 rounded-full bg-[#F8F7FF] px-3 py-1 text-xs font-semibold text-[#6500FF]">
                    100%
                  </span>
                </div>
              </div>

              <div className="h-1.5 bg-gray-100">
                <div className="riasec-demo-progress h-full rounded-r-full bg-[#6500FF]" />
              </div>

              <div className="relative min-h-[390px] px-5 py-5">
                <div className="riasec-demo-scene riasec-demo-scene-1">
                  <p className="mb-4 text-lg font-bold leading-snug text-[#04192F]">
                    J'aime analyser un problème jusqu'à comprendre ce qui bloque.
                  </p>
                  <div className="grid gap-2">
                    {['Pas du tout moi', 'Plutôt non', 'Neutre', 'Plutôt oui', 'Tout à fait moi'].map((label, index) => (
                      <div
                        key={label}
                        className={`rounded-xl border px-4 py-2.5 text-sm font-semibold ${
                          index === 3
                            ? 'riasec-demo-answer border-gray-100 bg-white text-gray-400'
                            : 'border-gray-100 bg-white text-gray-400'
                        }`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  <span className="riasec-demo-cursor riasec-demo-cursor-1" />
                </div>

                <div className="riasec-demo-scene riasec-demo-scene-2">
                  <p className="mb-4 text-lg font-bold leading-snug text-[#04192F]">
                    Je préfère un métier où je peux aider, expliquer ou accompagner.
                  </p>
                  <div className="grid gap-2">
                    {['Pas du tout moi', 'Plutôt non', 'Neutre', 'Plutôt oui', 'Tout à fait moi'].map((label, index) => (
                      <div
                        key={label}
                        className={`rounded-xl border px-4 py-2.5 text-sm font-semibold ${
                          index === 4
                            ? 'riasec-demo-answer border-gray-100 bg-white text-gray-400'
                            : 'border-gray-100 bg-white text-gray-400'
                        }`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  <span className="riasec-demo-cursor riasec-demo-cursor-2" />
                </div>

                <div className="riasec-demo-scene riasec-demo-scene-3">
                  <p className="mb-2 text-xs font-bold uppercase text-[#6500FF]">Résultat instantané</p>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold text-[#04192F]">Ton profil RIASEC</h3>
                    <span className="rounded-2xl bg-[#6500FF] px-4 py-3 text-3xl font-bold tracking-[0.08em] text-white">
                      ISA
                    </span>
                  </div>
                  <div className="space-y-3.5">
                    {[
                      ['Investigateur', '88%'],
                      ['Social', '76%'],
                      ['Artistique', '69%'],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div className="mb-1 flex justify-between text-sm font-semibold text-gray-500">
                          <span>{label}</span>
                          <span>{value}</span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-white">
                          <div className="riasec-demo-bar h-full rounded-full bg-[#6500FF]" style={{ width: value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-[#E9E1FF] bg-white px-4 py-3">
                    <p className="text-xs font-bold uppercase text-gray-400">Pistes métiers</p>
                    <p className="mt-1 text-sm font-semibold text-[#04192F]">
                      Data analyst · Psychologue · UX researcher
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 flex flex-wrap gap-x-8 gap-y-1 text-sm text-gray-400 border-t border-gray-100">
          <span>6–8 minutes</span>
          <span>30 questions</span>
          <span>Résultats instantanés</span>
          <span>Sauvegarde par email ou Google</span>
        </div>
      </div>
    </div>
  );
}

function CaptureGate({
  userName,
  dominantCode,
  scores,
  answers,
  onEmailSaved,
  onAuthRedirect,
}: {
  userName: string;
  dominantCode: string;
  scores: RiasecScores;
  answers: RiasecAnswer[];
  onEmailSaved: (email: string) => void;
  onAuthRedirect: () => void;
}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!email.includes('@') || !email.includes('.')) {
      setError('Entre une adresse email valide.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/test-riasec/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name: userName,
          dominantCode,
          scores,
          answers,
        }),
      });

      if (!response.ok) {
        throw new Error('save_failed');
      }

      onEmailSaved(email);
    } catch {
      setError("Impossible d'enregistrer ton résultat pour l'instant.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans">
      <div className="bg-[#F3F3F3] px-6 sm:px-16 lg:px-20 pt-14 pb-16">
        <p className="text-[#6500FF] font-semibold text-xs uppercase tracking-widest mb-5">
          Sauvegarde ton résultat
        </p>
        <h1 className="font-oddlini uppercase text-4xl sm:text-5xl font-bold leading-tight text-[#04192F] mb-3 max-w-3xl">
          On garde ton profil en mémoire avant de t'afficher le détail
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mb-8">
          Choisis soit la connexion Google pour retrouver ton test dans ton profil, soit une
          adresse email pour qu'on enregistre ton résultat dans notre base.
        </p>
        <div className="mb-8 flex max-w-2xl flex-wrap gap-3 text-sm text-gray-500">
          <span className="rounded-full border border-[#E9E1FF] bg-white px-4 py-2">
            Google : résultat visible dans ton profil
          </span>
          <span className="rounded-full border border-[#E9E1FF] bg-white px-4 py-2">
            Email : résultat enregistré en base
          </span>
          <span className="rounded-full border border-[#E9E1FF] bg-white px-4 py-2">
            Pas de résultat perdu
          </span>
        </div>

        <div className="max-w-xl rounded-[1.6rem] border border-[#E9E1FF] bg-white p-6 shadow-[0_18px_45px_rgba(4,25,47,0.06)]">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-[#6500FF]/10 px-4 py-2 text-2xl font-bold tracking-widest text-[#6500FF]">
              {dominantCode}
            </span>
            <p className="text-sm text-gray-500">
              {userName ? `${userName}, ` : ''}ton code dominant est prêt.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={onAuthRedirect}
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 font-semibold text-[#04192F] transition-colors hover:border-[#6500FF] hover:text-[#6500FF]"
            >
              Se connecter ou créer un compte
            </button>
            <div className="rounded-xl border border-[#E9E1FF] bg-[#F8F7FF] px-4 py-3 text-sm text-[#465160]">
              Tu pourras ensuite continuer avec Google ou avec ton email depuis la page de connexion.
            </div>
          </div>

          <div className="my-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              ou
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="Ton adresse mail"
              className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#6500FF] focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[#04192F] px-5 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {loading ? 'Enregistrement…' : 'Voir mes résultats'}
            </button>
          </form>

          {error ? <p className="mt-3 text-sm text-red-500">{error}</p> : null}
        </div>
      </div>
    </div>
  );
}

// ── Likert button ─────────────────────────────────────────────────────────────

function LikertButton({
  value,
  selected,
  onClick,
}: {
  value: number;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all border-2 ${
        selected
          ? 'bg-[#6500FF] text-white border-[#6500FF] scale-105'
          : 'bg-white text-gray-600 border-gray-200 hover:border-[#6500FF] hover:text-[#6500FF]'
      }`}
    >
      <span className="hidden sm:block">{LIKERT_LABELS[value - 1]}</span>
      <span className="sm:hidden font-bold">{value}</span>
    </button>
  );
}

// ── Question page ─────────────────────────────────────────────────────────────

function QuestionPage({
  pageIndex,
  answers,
  onAnswer,
  onNext,
  onBack,
}: {
  pageIndex: number;
  answers: Record<string, number>;
  onAnswer: (questionId: string, score: number) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const start = pageIndex * QUESTIONS_PER_PAGE;
  const pageQuestions = RIASEC_QUESTIONS.slice(start, start + QUESTIONS_PER_PAGE);
  const answeredOnPage = pageQuestions.filter(q => answers[q.id] !== undefined).length;
  const allAnswered = answeredOnPage === pageQuestions.length;
  const totalAnswered = Object.keys(answers).length;
  const progress = Math.round((totalAnswered / RIASEC_QUESTIONS.length) * 100);

  const isLastPage = pageIndex === TOTAL_PAGES - 1;

  return (
    <div className="max-w-2xl mx-auto px-5 py-6">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>
            Partie {pageIndex + 1} / {TOTAL_PAGES}
          </span>
          <span className="font-semibold text-[#6500FF]">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#6500FF] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Questions {start + 1}–{Math.min(start + QUESTIONS_PER_PAGE, RIASEC_QUESTIONS.length)} sur{' '}
          {RIASEC_QUESTIONS.length}
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {pageQuestions.map((question, idx) => (
          <div
            key={question.id}
            className={`rounded-2xl p-4 sm:p-5 border transition-colors ${
              answers[question.id] !== undefined
                ? 'bg-white border-[#6500FF]/30'
                : 'bg-[#FAFAFA] border-gray-100'
            }`}
          >
            <p className="font-semibold text-gray-800 mb-4 leading-snug">
              <span className="text-[#6500FF] mr-2 text-sm">
                {start + idx + 1}.
              </span>
              {question.text}
            </p>
            <div className="flex gap-1 sm:gap-2">
              {([1, 2, 3, 4, 5] as const).map(value => (
                <LikertButton
                  key={value}
                  value={value}
                  selected={answers[question.id] === value}
                  onClick={() => onAnswer(question.id, value)}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1.5 px-0.5">
              <span>Pas du tout moi</span>
              <span>Tout à fait moi</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-8">
        {pageIndex > 0 && (
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
          >
            ← Retour
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          disabled={!allAnswered}
          className={`flex-1 py-3 font-bold rounded-xl text-white transition-colors ${
            allAnswered
              ? 'bg-[#6500FF] hover:bg-purple-800'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          {isLastPage ? 'Voir mes résultats →' : 'Continuer →'}
        </button>
      </div>

      {!allAnswered && (
        <p className="text-center text-sm text-gray-400 mt-3">
          Réponds à toutes les questions de cette page pour continuer
          {' '}({answeredOnPage}/{pageQuestions.length})
        </p>
      )}
    </div>
  );
}

// ── Dimension bar ─────────────────────────────────────────────────────────────

function DimensionBar({
  dim,
  score,
  rank,
}: {
  dim: RiasecDimension;
  score: number;
  rank: number;
}) {
  const { label, description, color } = DIMENSION_LABELS[dim];
  const isTop3 = rank <= 3;

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          {isTop3 && (
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full text-white min-w-[28px] text-center"
              style={{ backgroundColor: color }}
            >
              #{rank}
            </span>
          )}
          <span className={`font-semibold ${isTop3 ? 'text-gray-800' : 'text-gray-500'}`}>
            {label}
          </span>
          <span className="text-xs text-gray-400 font-mono">({dim})</span>
        </div>
        <span className="text-sm font-bold text-gray-600">{score}%</span>
      </div>
      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${score}%`, backgroundColor: color, opacity: isTop3 ? 1 : 0.4 }}
        />
      </div>
      {isTop3 && <p className="text-xs text-gray-500 mt-1">{description}</p>}
    </div>
  );
}

// ── Family card ───────────────────────────────────────────────────────────────

function FamilyCard({ family, rank }: { family: JobFamily; rank: number }) {
  const [expanded, setExpanded] = useState(rank === 1);
  const familyJobs = JOBS.filter(j => j.familyId === family.id);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold bg-[#6500FF] text-white px-2 py-0.5 rounded-full">
            #{rank}
          </span>
          {family.riasecCodes.map(code => (
            <span
              key={code}
              className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: DIMENSION_LABELS[code].color }}
            >
              {code}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-gray-800">{family.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{family.description}</p>
      </div>

      <button
        type="button"
        onClick={() => setExpanded(v => !v)}
        className="text-[#6500FF] font-semibold text-sm"
      >
        {expanded ? '▲ Masquer les métiers' : `▼ Voir ${familyJobs.length} métiers associés`}
      </button>

      {expanded && (
        <div className="mt-4 space-y-3">
          {familyJobs.map(job => (
            <JobRow key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Job row ───────────────────────────────────────────────────────────────────

function JobRow({ job }: { job: Job }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-semibold text-gray-800">{job.name}</span>
            <span className="text-xs text-gray-400 shrink-0">{job.formationLevel}</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">{job.description}</p>
          <div className="flex gap-1">
            {job.riasecTags.map(tag => (
              <span
                key={tag}
                className="text-xs font-bold px-1.5 py-0.5 rounded text-white"
                style={{ backgroundColor: DIMENSION_LABELS[tag].color, opacity: 0.8 }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex sm:flex-col gap-2 shrink-0">
          <Link
            href={job.links.experience}
            className="px-3 py-1.5 bg-[#6500FF] text-white text-xs font-semibold rounded-lg hover:bg-purple-800 transition-colors text-center whitespace-nowrap"
          >
            Tester ce métier
          </Link>
          <Link
            href={job.links.formation}
            className="px-3 py-1.5 bg-[#04192F] text-white text-xs font-semibold rounded-lg hover:opacity-80 transition-opacity text-center whitespace-nowrap"
          >
            Se former
          </Link>
        </div>
      </div>
    </div>
  );
}

function RankedJobRow({ job, rank }: { job: ScoredJob; rank: number }) {
  const romeCode = getRomeCodeForJobmiJob(job.id);
  const mappingStatus = getMappingStatusForJobmiJob(job.id);
  const romeSheet = getLocalRomeJobSheetByJobmiId(job.id);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex min-w-0 flex-1 gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6500FF]/10 text-sm font-bold text-[#6500FF]">
            {String(rank).padStart(2, '0')}
          </div>
          <div className="min-w-0">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-gray-800">{job.name}</h3>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                Match {job.matchScore}%
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  mappingStatus === 'mapped'
                    ? 'bg-[#6500FF]/10 text-[#6500FF]'
                    : 'bg-amber-50 text-amber-700'
                }`}
              >
                {romeCode ? `ROME ${romeCode}` : 'ROME à mapper'}
              </span>
              <span className="text-xs text-gray-400">{job.formationLevel}</span>
            </div>
            <p className="mb-2 text-sm text-gray-600">{job.description}</p>
            {romeSheet?.skills.length ? (
              <p className="mb-2 text-xs leading-5 text-gray-500">
                Compétences repères : {romeSheet.skills.slice(0, 3).map((skill) => skill.label).join(' · ')}
              </p>
            ) : null}
            <div className="flex flex-wrap gap-1.5">
              {job.riasecTags.map(tag => (
                <span
                  key={tag}
                  className="rounded px-2 py-0.5 text-xs font-bold text-white"
                  style={{ backgroundColor: DIMENSION_LABELS[tag].color, opacity: 0.85 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 sm:flex-col">
          <Link
            href={job.links.experience}
            className="rounded-lg bg-[#6500FF] px-3 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-purple-800"
          >
            Tester ce métier
          </Link>
          <Link
            href={job.links.formation}
            className="rounded-lg bg-[#04192F] px-3 py-2 text-center text-xs font-semibold text-white transition-opacity hover:opacity-85"
          >
            Voir les parcours
          </Link>
        </div>
      </div>
    </div>
  );
}

function ActionPlanCard({ job }: { job: ScoredJob }) {
  const romeSheet = getLocalRomeJobSheetByJobmiId(job.id);
  const romeCode = getRomeCodeForJobmiJob(job.id);
  const [actionData, setActionData] = useState<ActionPlanData | null>(null);
  const [isLoadingActions, setIsLoadingActions] = useState(false);

  useEffect(() => {
    if (!romeCode) return;

    let cancelled = false;
    const params = new URLSearchParams({ rome: romeCode });

    async function loadActions() {
      setIsLoadingActions(true);
      try {
        const [opportunitiesResponse, companiesResponse, eventsResponse, reviewsResponse] = await Promise.all([
          fetch(`/api/france-travail/opportunities?${params.toString()}`),
          fetch(`/api/france-travail/companies?${params.toString()}`),
          fetch(`/api/france-travail/events?${params.toString()}`),
          fetch(`/api/france-travail/training-reviews?${params.toString()}`),
        ]);

        const [opportunitiesPayload, companiesPayload, eventsPayload, reviewsPayload] = await Promise.all([
          opportunitiesResponse.json(),
          companiesResponse.json(),
          eventsResponse.json(),
          reviewsResponse.json(),
        ]);

        if (cancelled) return;

        setActionData({
          opportunities: opportunitiesPayload.opportunities ?? [],
          companies: companiesPayload.companies ?? [],
          events: eventsPayload.events ?? [],
          reviews: reviewsPayload.reviews ?? [],
          sources: {
            opportunities: opportunitiesPayload.source ?? 'error',
            companies: companiesPayload.source ?? 'error',
            events: eventsPayload.source ?? 'error',
            reviews: reviewsPayload.source ?? 'error',
          },
        });
      } catch {
        if (!cancelled) {
          setActionData({
            opportunities: [],
            companies: [],
            events: [],
            reviews: [],
            sources: {
              opportunities: 'error',
              companies: 'error',
              events: 'error',
              reviews: 'error',
            },
          });
        }
      } finally {
        if (!cancelled) setIsLoadingActions(false);
      }
    }

    loadActions();

    return () => {
      cancelled = true;
    };
  }, [romeCode]);

  if (!romeSheet) {
    return (
      <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
          Référentiel à compléter
        </p>
        <h3 className="mt-2 text-lg font-bold text-[#04192F]">{job.name}</h3>
        <p className="mt-2 text-sm leading-6 text-amber-900">
          Ce métier correspond à ton profil, mais son mapping ROME doit encore être validé.
          Tu peux déjà le tester via les formats Jobmi existants.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-[#E9E1FF] bg-white p-5 shadow-[0_18px_45px_rgba(4,25,47,0.06)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#6500FF]/10 px-3 py-1 text-xs font-bold text-[#6500FF]">
          ROME {romeSheet.job.code}
        </span>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
          Plan d'action
        </span>
      </div>
      <h3 className="mt-4 text-xl font-bold text-[#04192F]">{job.name}</h3>
      <p className="mt-2 text-sm leading-6 text-[#465160]">{romeSheet.summary}</p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold text-[#04192F]">Compétences à vérifier</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {romeSheet.skills.slice(0, 5).map((skill) => (
              <span key={skill.id} className="rounded-full bg-[#F8F7FF] px-3 py-1 text-xs font-semibold text-[#465160]">
                {skill.label}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-[#04192F]">Quotidien probable</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {romeSheet.workContexts.slice(0, 5).map((context) => (
              <span key={context.id} className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-[#465160]">
                {context.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Link
          href={job.links.experience}
          className="rounded-xl bg-[#6500FF] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-purple-800"
        >
          Tester ce métier
        </Link>
        <Link
          href={`/stage-et-formation?metier=${encodeURIComponent(job.name)}${romeCode ? `&rome=${romeCode}` : ''}`}
          rel="nofollow"
          className="rounded-xl bg-[#04192F] px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-[#6500FF]"
        >
          Voir offres & formations
        </Link>
        <a
          href={romeCode ? `/api/france-travail/opportunities?rome=${romeCode}` : '/api/france-travail/rome/search'}
          className="rounded-xl border border-[#E9E1FF] px-4 py-3 text-center text-sm font-bold text-[#04192F] transition hover:border-[#6500FF] hover:text-[#6500FF]"
        >
          Données API
        </a>
      </div>

      <div className="mt-5 rounded-2xl border border-gray-100 bg-[#FAFAFA] p-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-[#04192F]">Aperçu des actions disponibles</p>
          {isLoadingActions ? (
            <span className="text-xs font-semibold text-gray-400">Chargement...</span>
          ) : null}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-4">
          <ActionPreviewColumn
            title="Offres"
            emptyText="Aucune offre live trouvée pour l’instant. Élargis la zone ou regarde les métiers proches."
            source={actionData?.sources.opportunities}
            items={(actionData?.opportunities ?? []).slice(0, 2).map((opportunity) => ({
              id: opportunity.id,
              label: opportunity.title,
              meta: `${opportunity.company} · ${opportunity.location}`,
              href: opportunity.url,
            }))}
          />
          <ActionPreviewColumn
            title="Événements"
            emptyText="Aucun événement détecté pour ce métier. Les ateliers et salons généralistes restent utiles."
            source={actionData?.sources.events}
            items={(actionData?.events ?? []).slice(0, 2).map((event) => ({
              id: event.id,
              label: event.title,
              meta: `${event.city} · ${event.date_start}`,
              href: event.official_url,
            }))}
          />
          <ActionPreviewColumn
            title="Formations"
            emptyText="Aucun avis Anotéa exploitable pour l’instant. Compare quand même les formations avec leurs débouchés et contacts officiels."
            source={actionData?.sources.reviews}
            items={(actionData?.reviews ?? []).slice(0, 2).map((review) => ({
              id: review.id,
              label: review.trainingName,
              meta: `${review.organization} · ${review.rating ? `${review.rating}/5` : 'avis à vérifier'}`,
              href: `/stage-et-formation`,
            }))}
          />
          <ActionPreviewColumn
            title="Entreprises"
            emptyText="Pas encore d’entreprise live. Tu peux commencer par chercher des structures locales du secteur."
            source={actionData?.sources.companies}
            items={(actionData?.companies ?? []).slice(0, 2).map((company) => ({
              id: company.id,
              label: company.name,
              meta: `${company.location} · potentiel ${company.hiringPotential}`,
              href: company.url,
            }))}
          />
        </div>
      </div>
    </div>
  );
}

function sourceLabel(source?: FranceTravailApiStatus) {
  if (source === 'live') return 'Live';
  if (source === 'missing_credentials') return 'Config requise';
  if (source === 'fallback') return 'Exemple';
  if (source === 'error') return 'À vérifier';
  return 'En attente';
}

function ActionPreviewColumn({
  title,
  items,
  emptyText,
  source,
}: {
  title: string;
  items: Array<{ id: string; label: string; meta: string; href: string }>;
  emptyText: string;
  source?: FranceTravailApiStatus;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#04192F]">{title}</p>
        <span className="rounded-full bg-gray-50 px-2 py-0.5 text-[0.68rem] font-bold text-gray-500">
          {sourceLabel(source)}
        </span>
      </div>
      {items.length ? (
        <div className="space-y-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg border border-transparent px-2 py-2 transition hover:border-[#E9E1FF] hover:bg-[#F8F7FF]"
            >
              <span className="line-clamp-2 text-sm font-semibold text-[#04192F]">{item.label}</span>
              <span className="mt-1 block text-xs leading-5 text-gray-500">{item.meta}</span>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-xs leading-5 text-gray-500">{emptyText}</p>
      )}
    </div>
  );
}

// ── Results ───────────────────────────────────────────────────────────────────

function TestResults({
  result,
  userName,
  onRestart,
}: {
  result: TestResult;
  userName: string;
  onRestart: () => void;
}) {
  const { profile, topFamilies, suggestedJobs, allJobs } = result;
  const [showAllJobs, setShowAllJobs] = useState(false);
  const jobsToDisplay = showAllJobs ? allJobs : suggestedJobs;
  const profileSummary = getProfileSummary(profile);

  useEffect(() => {
    trackTestResultViewed(QUIZ_NAME, profile.dominantCode, suggestedJobs.length);
  }, [profile.dominantCode, suggestedJobs.length]);

  return (
    <div className="mx-auto max-w-2xl px-5 py-8 lg:max-w-[1120px] lg:px-8">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-[#6500FF] font-semibold text-sm uppercase tracking-wide mb-2">
          Résultats du test RIASEC
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#04192F] mb-4">
          {userName ? `${userName}, voici ton profil` : 'Voici ton profil'}
        </h1>
        <div className="inline-flex items-center gap-3 bg-[#6500FF]/10 px-6 py-3 rounded-full">
          <span className="text-3xl font-bold text-[#6500FF] tracking-widest">
            {profile.dominantCode}
          </span>
          <span className="text-gray-600 text-sm">ton code dominant</span>
        </div>
      </div>

      {/* Disclaimer */}
      <InfoCallout title="À garder en tête" className="mb-8">
        <p>
          Ces résultats sont des <strong>suggestions à explorer</strong>, pas des ordres. L'étape
          la plus précieuse est de <strong>tester ces métiers en vrai</strong> — via un atelier,
          une immersion ou un stage — avant d'investir du temps et de l'argent dans une formation.
        </p>
      </InfoCallout>

      {/* RIASEC Profile */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#04192F] mb-5">Ton profil RIASEC</h2>
        <div className="grid gap-6 lg:grid-cols-[minmax(420px,480px)_minmax(0,1fr)] lg:gap-8 lg:items-start">
          <RiasecRadarChart scores={profile.normalizedScores} />
          <div className="rounded-[1.5rem] border border-[#E9E1FF] bg-white p-5 shadow-[0_18px_45px_rgba(4,25,47,0.06)] lg:p-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              Lecture détaillée
            </p>
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-5">
              {profile.sortedDimensions.map((dim, i) => (
                <DimensionBar
                  key={dim}
                  dim={dim}
                  score={profile.normalizedScores[dim]}
                  rank={i + 1}
                />
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-[#E9E1FF] bg-[linear-gradient(180deg,rgba(248,247,255,0.96),rgba(255,255,255,0.98))] p-4 lg:mt-6 lg:p-5">
              <p className="jobmi-script-accent text-[#6500FF]">
                En clair
              </p>
              <p className="mt-2 text-sm leading-7 text-[#465160] lg:text-[0.98rem]">
                {profileSummary}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#04192F]">Métiers à explorer en priorité</h2>
            <p className="mt-1 text-sm text-gray-500">
              On te montre d'abord tes 5 pistes les plus probables, puis tu peux ouvrir la liste
              complète si tu veux élargir.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAllJobs(value => !value)}
            className="rounded-xl border border-[#6500FF]/20 bg-[#6500FF]/5 px-4 py-2 text-sm font-semibold text-[#6500FF] transition-colors hover:bg-[#6500FF]/10"
          >
            {showAllJobs
              ? 'Afficher seulement les meilleures pistes'
              : `Voir la liste complète (${allJobs.length} métiers)`}
          </button>
        </div>
        <div className="space-y-3 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">
          {jobsToDisplay.map((job, index) => (
            <RankedJobRow key={job.id} job={job} rank={index + 1} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#04192F] mb-2">
          Ton plan d'action pour passer au concret
        </h2>
        <p className="text-gray-500 text-sm mb-5">
          On part de ta meilleure piste et on la relie à des compétences, un quotidien et des actions concrètes.
        </p>
        {suggestedJobs[0] ? <ActionPlanCard job={suggestedJobs[0]} /> : null}
      </section>

      {/* Top families */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#04192F] mb-2">
          Familles de métiers qui te correspondent
        </h2>
        <p className="text-gray-500 text-sm mb-5">
          Clique sur une famille pour voir les métiers associés et les liens pour les explorer.
        </p>
        <div className="space-y-4">
          {topFamilies.map((family, i) => (
            <FamilyCard key={family.id} family={family} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* CTA block */}
      <div className="bg-[#04192F] rounded-2xl p-6 text-white text-center mb-6">
        <h3 className="text-xl font-bold mb-2">La prochaine étape ? Tester pour de vrai.</h3>
        <p className="text-gray-300 text-sm mb-5">
          Un test d'orientation, c'est un point de départ. Rien ne vaut une immersion concrète
          pour confirmer ou infirmer ces pistes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/tester-un-metier"
            onClick={() =>
              trackCtaClick('Tester un métier depuis les résultats', '/test/results', {
                cta_destination: '/tester-un-metier',
                cta_type: 'tester_un_metier',
                quiz_result: profile.dominantCode,
              })
            }
            className="px-6 py-3 bg-[#6500FF] text-white font-bold rounded-xl hover:bg-purple-800 transition-colors"
          >
            Tester un métier →
          </Link>
          <Link
            href="/stage-et-formation"
            onClick={() =>
              trackCtaClick('Voir les formations depuis les résultats', '/test/results', {
                cta_destination: '/stage-et-formation',
                cta_type: 'stage_et_formation',
                quiz_result: profile.dominantCode,
              })
            }
            className="px-6 py-3 bg-white text-[#04192F] font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Voir les formations
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="w-full text-center text-gray-400 text-sm underline"
      >
        Recommencer le test
      </button>
    </div>
  );
}

// ── Resume (fallback : connecté mais pas de réponses en attente) ──────────────

function ResumeScreen({
  userName,
  onRestart,
}: {
  userName: string;
  onRestart: () => void;
}) {
  return (
    <div className="font-sans">
      <div className="bg-[#F3F3F3] px-6 sm:px-16 lg:px-20 pt-14 pb-16">
        <p className="text-[#6500FF] font-semibold text-xs uppercase tracking-widest mb-5">
          Bon retour !
        </p>
        <h1 className="font-oddlini uppercase text-4xl sm:text-5xl font-bold leading-tight text-[#04192F] mb-5 max-w-2xl">
          {userName ? `Content de te revoir, ${userName}` : 'Content de te revoir'}
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-lg mb-10">
          Tes réponses précédentes ne sont plus disponibles. Lance un nouveau test pour obtenir ton profil RIASEC à jour.
        </p>
        <button
          onClick={onRestart}
          className="rounded-xl px-5 py-3 flex items-center gap-2 bg-[#04192F] text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Refaire le test
          <img src="/media/cta-blog-arrow.svg" alt="" className="w-6" />
        </button>
      </div>
    </div>
  );
}

// ── Orchestrator ──────────────────────────────────────────────────────────────

export default function RiasecTestComponent() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [step, setStep] = useState<Step>('intro');
  const [userName, setUserName] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<TestResult | null>(null);

  const submitLead = useCallback(
    async (
      email: string,
      computedResult: TestResult,
      answerArray: RiasecAnswer[],
      name: string,
      method = 'email'
    ) => {
      await fetch('/api/test-riasec/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          dominantCode: computedResult.profile.dominantCode,
          scores: computedResult.profile.normalizedScores,
          answers: answerArray,
        }),
      });
      trackLeadSignup('riasec_result', method);
    },
    []
  );

  useEffect(() => {
    if (status !== 'authenticated' || step !== 'intro') return;

    const raw = localStorage.getItem('jobmi_riasec_answers');
    const rawName = localStorage.getItem('jobmi_riasec_name');

    if (raw) {
      try {
        const saved: Record<string, number> = JSON.parse(raw);
        localStorage.removeItem('jobmi_riasec_answers');
        localStorage.removeItem('jobmi_riasec_name');
        const answerArray: RiasecAnswer[] = Object.entries(saved).map(
          ([questionId, score]) => ({ questionId, score })
        );
        if (answerArray.length > 0) {
          const computed = computeTestResult(answerArray, RIASEC_QUESTIONS);
          setAnswers(saved);
          setResult(computed);
          setUserName(prev => prev || rawName || session?.user?.name?.split(' ')[0] || '');
          if (session?.user?.email) {
            submitLead(
              session.user.email,
              computed,
              answerArray,
              rawName || session.user.name?.split(' ')[0] || '',
              'google_or_account'
            ).catch(() => {});
          }
          setStep('results');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch {
        localStorage.removeItem('jobmi_riasec_answers');
        localStorage.removeItem('jobmi_riasec_name');
      }
    }
  }, [status, step, session?.user?.name, session?.user?.email, submitLead]);

  const handleStart = useCallback((name: string) => {
    setUserName(name.trim());
    trackQuizStart(QUIZ_NAME);
    setStep('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAnswer = useCallback((questionId: string, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
  }, []);

  const handleNext = useCallback(() => {
    if (currentPage < TOTAL_PAGES - 1) {
      trackQuizStep(
        QUIZ_NAME,
        currentPage + 1,
        Math.round(((currentPage + 1) / TOTAL_PAGES) * 100)
      );
      setCurrentPage(p => p + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const answerArray: RiasecAnswer[] = Object.entries(answers).map(([questionId, score]) => ({
        questionId,
        score,
      }));
      const computed = computeTestResult(answerArray, RIASEC_QUESTIONS);
      setResult(computed);
      trackQuizComplete(QUIZ_NAME, computed.profile.dominantCode);
      if (status === 'authenticated' && session?.user?.email) {
        submitLead(
          session.user.email,
          computed,
          answerArray,
          session.user.name ?? userName,
          'account'
        ).catch(() => {});
        setStep('results');
      } else {
        setStep('capture');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, answers, status, session, userName, submitLead]);

  const handleEmailSaved = useCallback(() => {
    trackLeadSignup('riasec_result', 'email');
    setStep('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAuthRedirect = useCallback(() => {
    trackCtaClick('Sauvegarder avec compte', '/test/capture', {
      cta_destination: '/me-connecter',
      cta_type: 'login',
      signup_source: 'riasec_result',
    });
    localStorage.setItem('jobmi_riasec_answers', JSON.stringify(answers));
    localStorage.setItem('jobmi_riasec_name', userName);
    router.push('/me-connecter?callbackUrl=/test&from=riasec');
  }, [answers, userName, router]);

  const handleBack = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(p => p - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const handleRestart = useCallback(() => {
    setStep('intro');
    setCurrentPage(0);
    setAnswers({});
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {step === 'intro' && <TestIntro onStart={handleStart} />}
      {step === 'questions' && (
        <QuestionPage
          pageIndex={currentPage}
          answers={answers}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 'capture' && result && (
        <CaptureGate
          userName={userName}
          dominantCode={result.profile.dominantCode}
          scores={result.profile.normalizedScores}
          answers={Object.entries(answers).map(([questionId, score]) => ({ questionId, score }))}
          onEmailSaved={handleEmailSaved}
          onAuthRedirect={handleAuthRedirect}
        />
      )}
      {step === 'resume' && (
        <ResumeScreen userName={userName} onRestart={handleRestart} />
      )}
      {step === 'results' && result && (
        <TestResults result={result} userName={userName} onRestart={handleRestart} />
      )}
    </div>
  );
}
