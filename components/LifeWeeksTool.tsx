'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

const MONTHS_PER_YEAR = 12;
const LIFE_EXPECTANCY = 85;
const RETIREMENT_AGE = 64;

const trainingOptions = [
  { value: 0.5, label: '6 mois' },
  { value: 1, label: '1 an' },
  { value: 2, label: '2 ans' },
  { value: 3, label: '3 ans' },
  { value: 5, label: '5 ans' },
];

type CellTone = 'lived' | 'previous' | 'future' | 'career' | 'post-career';

const toneClasses: Record<CellTone, string> = {
  lived: 'bg-[#A8B6CC] border-[#8493AB]',
  previous: 'bg-[#FFB84D] border-[#F59E0B]',
  future: 'bg-[#FF6B6B] border-[#EF4444]',
  career: 'bg-[#4ADE80] border-[#22C55E]',
  'post-career': 'bg-[#7DD3FC] border-[#38BDF8]',
};

const legendMeta: Record<
  CellTone,
  { label: string; textClass: string; chipClass: string }
> = {
  lived: {
    label: 'Temps de vie déjà passé',
    textClass: 'text-[#5B6B84]',
    chipClass: 'bg-[#A8B6CC] border-[#8493AB]',
  },
  previous: {
    label: 'Temps déjà investi dans tes études / essais',
    textClass: 'text-[#B86A00]',
    chipClass: 'bg-[#FFB84D] border-[#F59E0B]',
  },
  future: {
    label: 'Temps demandé par la nouvelle voie',
    textClass: 'text-[#C93E3E]',
    chipClass: 'bg-[#FF6B6B] border-[#EF4444]',
  },
  career: {
    label: 'Années pro plus alignées après cette étape',
    textClass: 'text-[#15803D]',
    chipClass: 'bg-[#4ADE80] border-[#22C55E]',
  },
  'post-career': {
    label: 'Reste de vie gagné pour toi, pas pour un mauvais choix',
    textClass: 'text-[#0369A1]',
    chipClass: 'bg-[#7DD3FC] border-[#38BDF8]',
  },
};

export function LifeWeeksTool() {
  const [age, setAge] = useState(20);
  const [previousStudyYears, setPreviousStudyYears] = useState(2);
  const [futureTrainingYears, setFutureTrainingYears] = useState(2);
  const [animatedCells, setAnimatedCells] = useState<Record<number, number>>({});
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);
  const previousTonesRef = useRef<CellTone[]>([]);
  const previousMetricsRef = useRef({
    previousStart: 0,
    ageEnd: 0,
    futureEnd: 0,
    retirementStart: RETIREMENT_AGE * MONTHS_PER_YEAR,
  });

  const totalMonths = LIFE_EXPECTANCY * MONTHS_PER_YEAR;
  const monthsPerRow =
    viewportWidth === null ? 12 : viewportWidth >= 1280 ? 24 : viewportWidth >= 640 ? 18 : 12;
  const cellSize = viewportWidth !== null && viewportWidth >= 640 ? 10 : 11;
  const ageMonths = Math.min(totalMonths, Math.max(0, Math.round(age * MONTHS_PER_YEAR)));
  const previousStudyMonths = Math.min(
    ageMonths,
    Math.max(0, Math.round(previousStudyYears * MONTHS_PER_YEAR))
  );
  const futureTrainingMonths = Math.max(0, Math.round(futureTrainingYears * MONTHS_PER_YEAR));
  const retirementMonths = RETIREMENT_AGE * MONTHS_PER_YEAR;

  const cells = useMemo(
    () =>
      Array.from({ length: totalMonths }, (_, index) => {
        let tone: CellTone = 'post-career';

        if (index < ageMonths) {
          tone = index >= ageMonths - previousStudyMonths ? 'previous' : 'lived';
        } else if (index < ageMonths + futureTrainingMonths) {
          tone = 'future';
        } else if (index < retirementMonths) {
          tone = 'career';
        }

        return { index, tone };
      }),
    [ageMonths, previousStudyMonths, futureTrainingMonths, retirementMonths, totalMonths]
  );

  const yearsLeftAfterTraining = Math.max(0, LIFE_EXPECTANCY - age - futureTrainingYears);
  const careerYearsLeftAfterTraining = Math.max(0, RETIREMENT_AGE - age - futureTrainingYears);
  const totalRows = Math.ceil(totalMonths / monthsPerRow);
  const message =
    yearsLeftAfterTraining > futureTrainingYears * 8
      ? `Prendre ${futureTrainingYears} an${futureTrainingYears > 1 ? 's' : ''} maintenant peut t’éviter des années dans des études ou un métier que tu n’es même pas sûr d’aimer. Derrière, il te reste encore environ ${yearsLeftAfterTraining.toFixed(0)} ans pour construire quelque chose de plus juste et plus heureux.`
      : `Le vrai sujet n’est pas de “perdre” ${futureTrainingYears} an${futureTrainingYears > 1 ? 's' : ''}, mais d’éviter de t’enfermer trop longtemps dans une voie que tu n’aimes pas vraiment. Quelques mois de détour peuvent te rendre la suite beaucoup plus légère.`;

  const legendItems = useMemo(() => {
    const segments: Array<{ tone: CellTone; start: number; end: number }> = [
      { tone: 'lived', start: 0, end: Math.max(0, ageMonths - previousStudyMonths) },
      { tone: 'previous', start: Math.max(0, ageMonths - previousStudyMonths), end: ageMonths },
      { tone: 'future', start: ageMonths, end: ageMonths + futureTrainingMonths },
      { tone: 'career', start: ageMonths + futureTrainingMonths, end: retirementMonths },
      { tone: 'post-career', start: retirementMonths, end: totalMonths },
    ];

    const rawItems = segments
      .filter((segment) => segment.end > segment.start)
      .map((segment) => {
        const midpoint = (segment.start + segment.end) / 2;
        const rowCenter = midpoint / monthsPerRow;
        const top = Math.min(96, Math.max(4, ((rowCenter + 0.5) / totalRows) * 100));

        return {
          ...segment,
          top,
          ...legendMeta[segment.tone],
        };
      });

    const minGap = 14;
    const sortedItems = [...rawItems].sort((a, b) => a.top - b.top);

    for (let index = 1; index < sortedItems.length; index += 1) {
      sortedItems[index].top = Math.max(
        sortedItems[index].top,
        sortedItems[index - 1].top + minGap
      );
    }

    const overflow = sortedItems.length
      ? Math.max(0, sortedItems[sortedItems.length - 1].top - 96)
      : 0;

    if (overflow > 0) {
      sortedItems.forEach((item) => {
        item.top -= overflow;
      });
    }

    for (let index = sortedItems.length - 2; index >= 0; index -= 1) {
      sortedItems[index].top = Math.min(
        sortedItems[index].top,
        sortedItems[index + 1].top - minGap
      );
    }

    const underflow = sortedItems.length ? Math.max(0, 4 - sortedItems[0].top) : 0;
    if (underflow > 0) {
      sortedItems.forEach((item) => {
        item.top += underflow;
      });
    }

    return sortedItems;
  }, [
    ageMonths,
    previousStudyMonths,
    futureTrainingMonths,
    retirementMonths,
    totalMonths,
    totalRows,
    monthsPerRow,
  ]);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);

    updateViewportWidth();
    window.addEventListener('resize', updateViewportWidth);

    return () => {
      window.removeEventListener('resize', updateViewportWidth);
    };
  }, []);

  useEffect(() => {
    const currentTones = cells.map((cell) => cell.tone);
    const previousTones = previousTonesRef.current;
    const currentMetrics = {
      previousStart: Math.max(0, ageMonths - previousStudyMonths),
      ageEnd: ageMonths,
      futureEnd: ageMonths + futureTrainingMonths,
      retirementStart: retirementMonths,
    };
    const previousMetrics = previousMetricsRef.current;

    if (!previousTones.length) {
      previousTonesRef.current = currentTones;
      previousMetricsRef.current = currentMetrics;
      return;
    }

    const changedIndexes = currentTones.reduce<number[]>((acc, tone, index) => {
      if (previousTones[index] !== tone) {
        acc.push(index);
      }
      return acc;
    }, []);

    if (!changedIndexes.length) {
      previousTonesRef.current = currentTones;
      previousMetricsRef.current = currentMetrics;
      return;
    }

    const deltas = [
      currentMetrics.previousStart - previousMetrics.previousStart,
      currentMetrics.ageEnd - previousMetrics.ageEnd,
      currentMetrics.futureEnd - previousMetrics.futureEnd,
      currentMetrics.retirementStart - previousMetrics.retirementStart,
    ];

    const dominantDelta =
      deltas.reduce((largest, delta) => {
        if (Math.abs(delta) > Math.abs(largest)) {
          return delta;
        }
        return largest;
      }, 0) || currentMetrics.futureEnd - previousMetrics.futureEnd;

    const sortedIndexes = [...changedIndexes].sort((a, b) =>
      dominantDelta < 0 ? b - a : a - b
    );

    const totalCascade = Math.min(1400, Math.max(320, sortedIndexes.length * 14));
    const animationMap = Object.fromEntries(
      sortedIndexes.map((index, order) => {
        const delay =
          sortedIndexes.length === 1
            ? 0
            : Math.round((order / (sortedIndexes.length - 1)) * totalCascade);
        return [index, delay];
      })
    );

    setAnimatedCells(animationMap);
    previousTonesRef.current = currentTones;
    previousMetricsRef.current = currentMetrics;

    const timeout = window.setTimeout(() => {
      setAnimatedCells({});
    }, totalCascade + 900);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [cells, ageMonths, previousStudyMonths, futureTrainingMonths, retirementMonths]);

  return (
    <section className="px-0 py-0 text-[#04192F]">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .life-grid-cell-wave {
            animation: lifeGridWave 880ms cubic-bezier(0.22, 1, 0.36, 1) both;
            will-change: transform, box-shadow;
          }
        }

        @keyframes lifeGridWave {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(101, 0, 255, 0);
          }
          38% {
            transform: scale(1.85);
            box-shadow: 0 0 0 4px rgba(101, 0, 255, 0.12);
          }
          64% {
            transform: scale(0.88);
            box-shadow: 0 0 0 1px rgba(101, 0, 255, 0.08);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(101, 0, 255, 0);
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
            Outil visuel
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Quelques années de détour, ce n’est pas une vie ratée
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#04192F]/70">
            Chaque petite case représente un mois de vie. Renseigne ton âge, le temps déjà
            passé dans tes études ou essais, puis la durée de la nouvelle voie que tu envisages.
            Tu vas voir très vite qu’à 18, 20 ou 24 ans, quelques mois ou années de formation
            pèsent peu face au nombre d’années qui restent ensuite pour travailler dans quelque
            chose que tu apprécies vraiment.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start xl:grid-cols-[360px_minmax(0,1fr)]">
          <div className="rounded-[1.8rem] border border-[#04192F]/8 bg-white p-5 shadow-[0_20px_60px_rgba(4,25,47,0.08)] sm:p-6 lg:sticky lg:top-24">
            <p className="jobmi-script-accent text-[#6500FF]">Paramètres</p>

            <div className="mt-5 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#04192F]/78">Ton âge</span>
                <input
                  type="number"
                  min={16}
                  max={40}
                  value={age}
                  onChange={(event) => setAge(Number(event.target.value))}
                  className="w-full rounded-xl border border-[#04192F]/10 bg-[#F8F7FF] px-4 py-3 text-[#04192F] outline-none transition focus:border-[#A78BFA]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#04192F]/78">
                  Temps déjà investi dans tes études / essais
                </span>
                <input
                  type="number"
                  min={0}
                  max={12}
                  step={0.5}
                  value={previousStudyYears}
                  onChange={(event) => setPreviousStudyYears(Number(event.target.value))}
                  className="w-full rounded-xl border border-[#04192F]/10 bg-[#F8F7FF] px-4 py-3 text-[#04192F] outline-none transition focus:border-[#A78BFA]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#04192F]/78">
                  Durée de la nouvelle voie visée
                </span>
                <select
                  value={futureTrainingYears}
                  onChange={(event) => setFutureTrainingYears(Number(event.target.value))}
                  className="w-full rounded-xl border border-[#04192F]/10 bg-[#F8F7FF] px-4 py-3 text-[#04192F] outline-none transition focus:border-[#A78BFA]"
                >
                  {trainingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-6 rounded-2xl border border-[#6500FF]/10 bg-[#F8F7FF] p-5">
              <p className="text-sm font-semibold text-[#04192F]">{message}</p>
              <p className="mt-3 text-sm leading-6 text-[#04192F]/68">
                Si tu lances une formation maintenant, il te resterait encore environ{' '}
                <strong className="text-[#04192F]">{careerYearsLeftAfterTraining.toFixed(0)} ans</strong>{' '}
                pour vivre une vie pro plus alignée avant 64 ans, et{' '}
                <strong className="text-[#04192F]">{yearsLeftAfterTraining.toFixed(0)} ans</strong> de
                vie au total derrière cette décision. Le vrai risque, ce n’est pas la formation :
                c’est de rester coincé trop longtemps dans une voie que tu n’aimes pas.
              </p>
            </div>

            <Link
              href="/test"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#04192F] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#6500FF]"
            >
              Clarifier ma voie maintenant
              <img src="/media/cta-blog-arrow.svg" alt="" className="w-5 invert" />
            </Link>
          </div>

          <div className="rounded-[1.8rem] border border-[#04192F]/8 bg-white p-4 shadow-[0_20px_60px_rgba(4,25,47,0.08)] sm:p-6 lg:p-7 xl:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[#04192F]/72">Une case = un mois</p>
                <p className="mt-1 text-sm text-[#04192F]/50">
                  {monthsPerRow} colonnes par ligne, soit{' '}
                  {(monthsPerRow / MONTHS_PER_YEAR).toFixed(monthsPerRow % MONTHS_PER_YEAR === 0 ? 0 : 1)}{' '}
                  année{monthsPerRow / MONTHS_PER_YEAR > 1 ? 's' : ''} visible
                  {monthsPerRow / MONTHS_PER_YEAR > 1 ? 's' : ''} d’un seul coup.
                </p>
              </div>
              <div className="rounded-full border border-[#04192F]/10 bg-[#F8F7FF] px-4 py-2 text-sm font-semibold text-[#04192F]/78">
                {age} ans aujourd’hui
              </div>
            </div>

            <div className="rounded-2xl border border-[#04192F]/6 bg-[#F8FAFC] p-3 sm:p-4">
              <div className="xl:grid xl:grid-cols-[auto_260px] xl:gap-8 xl:items-stretch">
                <div className="overflow-hidden">
                  <div
                    className="grid w-fit max-w-full gap-[3px] rounded-xl bg-white p-3 shadow-[inset_0_0_0_1px_rgba(4,25,47,0.04)]"
                    style={{ gridTemplateColumns: `repeat(${monthsPerRow}, ${cellSize}px)` }}
                  >
                    {cells.map((cell) => (
                      <div
                        key={cell.index}
                        className={`rounded-[2px] border transition-all duration-200 hover:scale-[1.9] hover:z-10 ${
                          animatedCells[cell.index] !== undefined ? 'life-grid-cell-wave' : ''
                        } ${toneClasses[cell.tone]}`}
                        style={
                          animatedCells[cell.index] !== undefined
                            ? {
                                height: `${cellSize}px`,
                                width: `${cellSize}px`,
                                animationDelay: `${animatedCells[cell.index]}ms`,
                              }
                            : { height: `${cellSize}px`, width: `${cellSize}px` }
                        }
                        title={`Mois ${cell.index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative hidden xl:block">
                  {legendItems.map((item) => (
                    <div
                      key={item.tone}
                      className="absolute left-0 right-0"
                      style={{ top: `${item.top}%`, transform: 'translateY(-50%)' }}
                    >
                      <div className="rounded-xl border border-[#04192F]/6 bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(4,25,47,0.06)]">
                        <div className="flex items-start gap-3">
                          <span
                            className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-[4px] border ${item.chipClass}`}
                          />
                          <p className={`text-sm font-semibold leading-5 ${item.textClass}`}>
                            {item.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-2 text-sm text-[#04192F]/70 xl:hidden">
              {legendItems.map((item) => (
                <div key={item.tone} className="flex items-center gap-3">
                  <span className={`h-3.5 w-3.5 rounded-[4px] border ${item.chipClass}`} />
                  {item.label}
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-[#04192F]/8 bg-[#F8F7FF] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6500FF]">
                  Déjà vécu
                </p>
                <p className="mt-2 text-3xl font-bold text-[#04192F]">{age}</p>
                <p className="text-sm text-[#04192F]/60">ans de vie déjà passés</p>
              </div>
              <div className="rounded-2xl border border-[#04192F]/8 bg-[#FFF7ED] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D97706]">
                  Étape d’ajustement
                </p>
                <p className="mt-2 text-3xl font-bold text-[#04192F]">{futureTrainingYears}</p>
                <p className="text-sm text-[#04192F]/60">an(s) pour réorienter la suite</p>
              </div>
              <div className="rounded-2xl border border-[#04192F]/8 bg-[#ECFDF5] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
                  Après ce choix
                </p>
                <p className="mt-2 text-3xl font-bold text-[#04192F]">
                  {yearsLeftAfterTraining.toFixed(0)}
                </p>
                <p className="text-sm text-[#04192F]/60">
                  ans pour construire quelque chose que tu aimes davantage
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
