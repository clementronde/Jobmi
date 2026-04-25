import { useEffect, useMemo, useState } from 'react';

import { DIMENSION_LABELS } from '@/data/riasecData';
import type { RiasecScores, RiasecDimension } from '@/types/riasec';

const DIMENSIONS: RiasecDimension[] = ['R', 'I', 'A', 'S', 'E', 'C'];

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

export function RiasecRadarChart({ scores }: { scores: RiasecScores }) {
  const [animatedScores, setAnimatedScores] = useState<RiasecScores>({
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  });
  const [hoveredDimension, setHoveredDimension] = useState<RiasecDimension | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setAnimatedScores(scores);
    }, 80);

    return () => window.clearTimeout(timer);
  }, [scores]);

  const size = 320;
  const center = size / 2;
  const maxRadius = 104;

  const gridPolygons = useMemo(
    () =>
      [0.25, 0.5, 0.75, 1].map(level =>
        DIMENSIONS.map((_, index) => {
          const angle = (360 / DIMENSIONS.length) * index;
          const point = polarToCartesian(center, center, maxRadius * level, angle);
          return `${point.x},${point.y}`;
        }).join(' ')
      ),
    [center]
  );

  const radarPoints = useMemo(
    () =>
      DIMENSIONS.map((dimension, index) => {
        const angle = (360 / DIMENSIONS.length) * index;
        const ratio = animatedScores[dimension] / 100;
        const point = polarToCartesian(center, center, maxRadius * ratio, angle);

        return {
          dimension,
          ...point,
          labelPoint: polarToCartesian(center, center, maxRadius + 28, angle),
        };
      }),
    [animatedScores, center]
  );

  const polygonPoints = radarPoints.map(point => `${point.x},${point.y}`).join(' ');
  const hoveredPoint = hoveredDimension
    ? radarPoints.find(point => point.dimension === hoveredDimension)
    : null;

  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-[#E9E1FF] bg-[radial-gradient(circle_at_top,rgba(101,0,255,0.12),transparent_42%),linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] p-5 shadow-[0_22px_55px_rgba(4,25,47,0.08)] lg:p-7">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
            Lecture visuelle
          </p>
          <h3 className="mt-2 text-2xl font-bold text-[#04192F]">Ton radar RIASEC</h3>
        </div>
        <div className="rounded-full bg-[#04192F] px-3 py-1 text-xs font-semibold text-white">
          {DIMENSIONS.map(dimension => dimension).join(' · ')}
        </div>
      </div>

      <div className="mx-auto max-w-[320px] lg:max-w-[420px]">
        <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full">
          {gridPolygons.map((points, index) => (
            <polygon
              key={index}
              points={points}
              fill={index % 2 === 0 ? 'rgba(101,0,255,0.03)' : 'rgba(4,25,47,0.02)'}
              stroke="rgba(4,25,47,0.12)"
              strokeWidth="1"
            />
          ))}

          {DIMENSIONS.map((_, index) => {
            const dimension = DIMENSIONS[index];
            const angle = (360 / DIMENSIONS.length) * index;
            const outerPoint = polarToCartesian(center, center, maxRadius, angle);
            const isHovered = hoveredDimension === dimension;
            const isMuted = hoveredDimension !== null && !isHovered;

            return (
              <line
                key={dimension}
                x1={center}
                y1={center}
                x2={outerPoint.x}
                y2={outerPoint.y}
                stroke={isHovered ? DIMENSION_LABELS[dimension].color : 'rgba(4,25,47,0.12)'}
                strokeWidth={isHovered ? '2.5' : '1'}
                style={{
                  opacity: isMuted ? 0.25 : 1,
                  transition: 'all 220ms ease',
                }}
              />
            );
          })}

          <polygon
            points={polygonPoints}
            fill="rgba(101,0,255,0.22)"
            stroke="#6500FF"
            strokeWidth="3"
            style={{
              transition: 'all 700ms ease',
              opacity: hoveredDimension ? 0.88 : 1,
              filter: hoveredDimension ? 'drop-shadow(0 0 12px rgba(101,0,255,0.18))' : 'none',
            }}
          />

          {radarPoints.map(point => (
            <g
              key={point.dimension}
              onMouseEnter={() => setHoveredDimension(point.dimension)}
              onMouseLeave={() => setHoveredDimension(null)}
              style={{
                cursor: 'pointer',
                opacity:
                  hoveredDimension !== null && hoveredDimension !== point.dimension ? 0.35 : 1,
                transition: 'opacity 220ms ease',
              }}
            >
              <circle
                cx={point.x}
                cy={point.y}
                r={hoveredDimension === point.dimension ? '8' : '5.5'}
                fill={DIMENSION_LABELS[point.dimension].color}
                style={{ transition: 'all 220ms ease' }}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r={hoveredDimension === point.dimension ? '16' : '10'}
                fill="rgba(101,0,255,0.12)"
                style={{ transition: 'all 220ms ease' }}
              />
              <text
                x={point.labelPoint.x}
                y={point.labelPoint.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-[#04192F] text-[12px] font-bold"
                style={{
                  opacity:
                    hoveredDimension !== null && hoveredDimension !== point.dimension ? 0.45 : 1,
                  transition: 'opacity 220ms ease',
                }}
              >
                {point.dimension}
              </text>
            </g>
          ))}

          {hoveredPoint ? (
            <g pointerEvents="none">
              <rect
                x={center - 62}
                y={16}
                width={124}
                height={40}
                rx={14}
                fill="#04192F"
                opacity="0.95"
              />
              <text
                x={center}
                y={31}
                textAnchor="middle"
                className="fill-white text-[11px] font-semibold"
              >
                {DIMENSION_LABELS[hoveredPoint.dimension].label}
              </text>
              <text
                x={center}
                y={46}
                textAnchor="middle"
                className="fill-[#C4B5FD] text-[12px] font-bold"
              >
                {scores[hoveredPoint.dimension]}%
              </text>
            </g>
          ) : null}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {DIMENSIONS.map(dimension => (
          <div
            key={dimension}
            onMouseEnter={() => setHoveredDimension(dimension)}
            onMouseLeave={() => setHoveredDimension(null)}
            className="rounded-xl border border-white/80 bg-white/80 px-3 py-2 backdrop-blur transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor:
                hoveredDimension === dimension ? `${DIMENSION_LABELS[dimension].color}55` : undefined,
              boxShadow:
                hoveredDimension === dimension
                  ? `0 12px 26px ${DIMENSION_LABELS[dimension].color}22`
                  : undefined,
              background:
                hoveredDimension === dimension
                  ? 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,247,255,1))'
                  : undefined,
            }}
          >
            <p className="text-xs font-semibold text-gray-500">
              {DIMENSION_LABELS[dimension].label}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: DIMENSION_LABELS[dimension].color }}
              />
              <span className="text-sm font-bold text-[#04192F]">{scores[dimension]}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
