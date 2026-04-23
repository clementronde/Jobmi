'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { RIASEC_QUESTIONS, JOB_FAMILIES, JOBS, DIMENSION_LABELS } from '@/data/riasecData';
import { computeTestResult } from '@/services/riasecService';
import type { RiasecAnswer, TestResult, JobFamily, Job, RiasecDimension, RiasecScores } from '@/types/riasec';

const QUESTIONS_PER_PAGE = 8;
const TOTAL_PAGES = Math.ceil(RIASEC_QUESTIONS.length / QUESTIONS_PER_PAGE);

type Step = 'intro' | 'questions' | 'email' | 'results' | 'resume';

const LIKERT_LABELS = ['Pas du tout moi', 'Plutôt non', 'Neutre', 'Plutôt oui', 'Tout à fait moi'];

// ── Intro ─────────────────────────────────────────────────────────────────────

function TestIntro({ onStart }: { onStart: (name: string) => void }) {
  const [name, setName] = useState('');

  return (
    <div className="font-sans">
      <div className="bg-[#F3F3F3] px-6 sm:px-16 lg:px-20 pt-14 pb-16">
        <p className="text-[#6500FF] font-semibold text-xs uppercase tracking-widest mb-5">
          Test d'orientation · Modèle RIASEC
        </p>
        <h1 className="font-oddlini uppercase text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#04192F] mb-5 max-w-3xl">
          Trouve les métiers qui te ressemblent vraiment
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mb-2">
          48 questions · 10 à 15 minutes · Aucune bonne ou mauvaise réponse.
          Réponds selon ce que tu ressens, pas ce que tu crois qu'il faut répondre.
        </p>
        <p className="text-gray-400 text-sm mb-10 max-w-xl">
          Ce test est une aide à la réflexion. Il ne remplace pas un entretien avec un conseiller d'orientation.
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

      <div className="px-6 sm:px-16 lg:px-20 py-4 flex flex-wrap gap-x-8 gap-y-1 text-sm text-gray-400 border-b border-gray-100">
        <span>10–15 minutes</span>
        <span>48 questions</span>
        <span>Résultats instantanés</span>
        <span>Sans inscription</span>
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
  const { profile, topFamilies } = result;

  return (
    <div className="max-w-2xl mx-auto px-5 py-8">
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
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
        <p className="font-semibold mb-1">À garder en tête</p>
        <p>
          Ces résultats sont des <strong>suggestions à explorer</strong>, pas des ordres. L'étape
          la plus précieuse est de <strong>tester ces métiers en vrai</strong> — via un atelier,
          une immersion ou un stage — avant d'investir du temps et de l'argent dans une formation.
        </p>
      </div>

      {/* RIASEC Profile */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-[#04192F] mb-5">Ton profil RIASEC</h2>
        {profile.sortedDimensions.map((dim, i) => (
          <DimensionBar key={dim} dim={dim} score={profile.normalizedScores[dim]} rank={i + 1} />
        ))}
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
            className="px-6 py-3 bg-[#6500FF] text-white font-bold rounded-xl hover:bg-purple-800 transition-colors"
          >
            Tester un métier →
          </Link>
          <Link
            href="/stage-et-formation"
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

// ── Email gate ────────────────────────────────────────────────────────────────

function EmailGate({
  dominantCode,
  scores,
  answers,
  userName,
  onSubmit,
  onOAuthSignIn,
}: {
  dominantCode: string;
  scores: RiasecScores;
  answers: RiasecAnswer[];
  userName: string;
  onSubmit: (email: string) => void;
  onOAuthSignIn: (provider: string) => void;
}) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || !email.includes('.')) {
      setError('Entre une adresse email valide');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await fetch('/api/test-riasec/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: userName, dominantCode, scores, answers }),
      });
    } catch {
      // Non-bloquant
    }
    setLoading(false);
    onSubmit(email);
  };

  const handleOAuth = (provider: string) => {
    setOauthLoading(provider);
    onOAuthSignIn(provider);
  };

  return (
    <div className="font-sans">
      <div className="bg-[#F3F3F3] px-6 sm:px-16 lg:px-20 pt-14 pb-16">
        <p className="text-[#6500FF] font-semibold text-xs uppercase tracking-widest mb-5">
          Presque là !
        </p>
        <h1 className="font-oddlini uppercase text-4xl sm:text-5xl font-bold leading-tight text-[#04192F] mb-3 max-w-2xl">
          {userName ? `${userName}, ton` : 'Ton'} code dominant est
        </h1>
        <p className="font-oddlini text-7xl sm:text-8xl font-bold text-[#6500FF] mb-6 tracking-widest">
          {dominantCode}
        </p>
        <p className="text-gray-500 text-base sm:text-lg max-w-lg mb-8">
          Connecte-toi ou entre ton email pour accéder au détail de ton profil et aux métiers qui
          te correspondent.
        </p>

        {/* OAuth */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-sm mb-5">
          <button
            type="button"
            onClick={() => handleOAuth('google')}
            disabled={oauthLoading !== null || loading}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <FcGoogle className="text-xl shrink-0" />
            {oauthLoading === 'google' ? 'Chargement…' : 'Google'}
          </button>
          <button
            type="button"
            onClick={() => handleOAuth('apple')}
            disabled={oauthLoading !== null || loading}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#04192F] rounded-xl font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <FaApple className="text-xl shrink-0" />
            {oauthLoading === 'apple' ? 'Chargement…' : 'Apple'}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-sm mb-5">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-400">ou</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Email */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm">
          <input
            type="email"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(''); }}
            placeholder="ton@email.com"
            required
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#6500FF] focus:border-transparent"
          />
          <button
            type="submit"
            disabled={loading || oauthLoading !== null}
            className="rounded-xl px-5 py-3 flex items-center justify-center gap-2 bg-[#04192F] text-white font-semibold whitespace-nowrap hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Chargement…' : (
              <>Voir mes résultats <img src="/media/cta-blog-arrow.svg" alt="" className="w-5" /></>
            )}
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <p className="text-xs text-gray-400 mt-4">Pas de spam · Désinscription à tout moment</p>
      </div>
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
  const { data: session, status } = useSession();
  const [step, setStep] = useState<Step>('intro');
  const [userName, setUserName] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<TestResult | null>(null);

  // Detect return from OAuth redirect — restore quiz answers from localStorage
  // localStorage is used only for temporary quiz state across the OAuth redirect,
  // NOT for session management (that's handled by next-auth).
  useEffect(() => {
    if (status !== 'authenticated' || step !== 'intro') return;

    const raw = localStorage.getItem('jobmi_riasec_answers');

    if (raw) {
      // Pending answers found → compute result, clean up immediately, show results
      try {
        const saved: Record<string, number> = JSON.parse(raw);
        localStorage.removeItem('jobmi_riasec_answers'); // always clean up first
        const answerArray: RiasecAnswer[] = Object.entries(saved).map(
          ([questionId, score]) => ({ questionId, score })
        );
        if (answerArray.length > 0) {
          setAnswers(saved);
          setResult(computeTestResult(answerArray, RIASEC_QUESTIONS));
          setUserName(prev => prev || session?.user?.name?.split(' ')[0] || '');
          setStep('results');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch {
        localStorage.removeItem('jobmi_riasec_answers'); // corrupted data — discard
      }
    } else {
      // User is authenticated but no pending quiz — show resume prompt
      setStep('resume');
    }
  }, [status]);

  const handleStart = useCallback((name: string) => {
    setUserName(name.trim());
    setStep('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAnswer = useCallback((questionId: string, score: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: score }));
  }, []);

  const handleNext = useCallback(() => {
    if (currentPage < TOTAL_PAGES - 1) {
      setCurrentPage(p => p + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const answerArray: RiasecAnswer[] = Object.entries(answers).map(([questionId, score]) => ({
        questionId,
        score,
      }));
      const computed = computeTestResult(answerArray, RIASEC_QUESTIONS);
      setResult(computed);
      if (status === 'authenticated' && session?.user?.email) {
        fetch('/api/test-riasec/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: session.user.email,
            name: session.user.name ?? userName,
            dominantCode: computed.profile.dominantCode,
            scores: computed.profile.normalizedScores,
            answers: answerArray,
          }),
        }).catch(() => {});
        setStep('results');
      } else {
        setStep('email');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, answers, status, session, userName]);

  const handleEmailSubmit = useCallback(() => {
    setStep('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Save answers to localStorage then redirect to OAuth provider
  const handleOAuthSignIn = useCallback((provider: string) => {
    localStorage.setItem('jobmi_riasec_answers', JSON.stringify(answers));
    signIn(provider, { callbackUrl: '/test' });
  }, [answers]);

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
      {step === 'email' && result && (
        <EmailGate
          dominantCode={result.profile.dominantCode}
          scores={result.profile.normalizedScores}
          answers={Object.entries(answers).map(([questionId, score]) => ({ questionId, score }))}
          userName={userName}
          onSubmit={handleEmailSubmit}
          onOAuthSignIn={handleOAuthSignIn}
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
