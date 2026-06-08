'use client';

import { useState } from 'react';
import type { Experience, ExperienceType } from '@/data/ateliers';

type Filter = { label: string; value: ExperienceType | '' };

export function AteliersGrid({
  experiences = [],
  filters = [],
}: {
  experiences?: Experience[];
  filters?: Filter[];
}) {
  const [active, setActive] = useState<ExperienceType | ''>('');

  const filtered = active === '' ? experiences : experiences.filter((e) => e.type === active);

  const TYPE_COLORS: Record<string, string> = {
    atelier: 'bg-[#F0EBFF] text-[#6500FF]',
    semaine: 'bg-[#E6F4FF] text-[#0057B8]',
    ecole: 'bg-[#E6FFF4] text-[#007A47]',
    immersion: 'bg-[#FFF4E6] text-[#B85C00]',
  };

  return (
    <div>
      {/* Filtres */}
      <div className="mb-7 flex flex-wrap gap-2">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-all ${
              active === value
                ? 'border-[#6500FF] bg-[#6500FF] text-white shadow-[0_4px_12px_rgba(101,0,255,0.22)]'
                : 'border-[#E9E1FF] bg-white text-[#04192F] hover:border-[#6500FF] hover:text-[#6500FF]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((exp) => (
          <article
            key={exp.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#E9E1FF] bg-white shadow-[0_8px_24px_rgba(4,25,47,0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(4,25,47,0.1)]"
          >
            {/* Header carte */}
            <div className="flex items-center justify-between bg-[#FBFAFF] px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{exp.emoji}</span>
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-bold ${
                    TYPE_COLORS[exp.type] ?? 'bg-[#E9E1FF] text-[#6500FF]'
                  }`}
                >
                  {exp.typeLabel}
                </span>
              </div>
              {exp.tag ? (
                <span className="rounded-full bg-[#6500FF] px-3 py-0.5 text-xs font-bold text-white">
                  {exp.tag}
                </span>
              ) : null}
            </div>

            {/* Corps */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-bold leading-snug text-[#04192F]">{exp.titre}</h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-[#465160]">{exp.description}</p>

              {/* Méta */}
              <ul className="mt-4 list-none grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-[#465160]">
                <li className="flex items-center gap-1.5">
                  <span>⏱️</span><span>{exp.duree}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span>💶</span><span>{exp.prix}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span>📍</span><span className="truncate">{exp.lieu}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span>🎓</span><span className="truncate">{exp.niveau}</span>
                </li>
              </ul>

              {/* Plateforme + CTA */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-xs text-gray-400">via {exp.plateforme}</span>
                <a
                  href={exp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#04192F] px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-[#6500FF]"
                >
                  Voir l'expérience
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-base text-[#465160]">
          Aucune expérience dans cette catégorie pour l'instant.
        </p>
      )}
    </div>
  );
}
