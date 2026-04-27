'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  AUDIENCE_LABELS,
  EVENT_TYPE_LABELS,
  FORMAT_LABELS,
  THEME_LABELS,
  filterEvents,
  formatEventDate,
  formatEventTime,
  getCityOptions,
  getEventPrimaryCtaHref,
  getEventPrimaryCtaLabel,
  getThemeOptions,
} from '@/services/eventsService';
import type {
  JobmiAudience,
  JobmiEvent,
  JobmiEventFormat,
  JobmiEventType,
  JobmiTheme,
} from '@/types/events';
import { OrientationMapCanvas } from './OrientationMapCanvas';

type Props = {
  events: JobmiEvent[];
  initialFilters?: {
    eventType?: JobmiEventType | 'all';
    format?: JobmiEventFormat | 'all';
    audience?: JobmiAudience | 'all';
    citySlug?: string | 'all';
    theme?: JobmiTheme | 'all';
  };
};

const selectClass =
  'w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-[#04192F] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6500FF]/30';

function featuredBadge(level: JobmiEvent['featured_level']) {
  if (level === 'sponsored') return { label: 'Sponsorisé', cls: 'bg-[#04192F] text-white' };
  if (level === 'boosted') return { label: 'Mis en avant', cls: 'bg-[#6500FF]/10 text-[#6500FF]' };
  return null;
}

export function EventMapExplorer({ events, initialFilters }: Props) {
  const [eventType, setEventType] = useState<JobmiEventType | 'all'>(
    initialFilters?.eventType || 'all'
  );
  const [format, setFormat] = useState<JobmiEventFormat | 'all'>(
    initialFilters?.format || 'all'
  );
  const [audience, setAudience] = useState<JobmiAudience | 'all'>(
    initialFilters?.audience || 'all'
  );
  const [citySlug, setCitySlug] = useState<string | 'all'>(
    initialFilters?.citySlug || 'all'
  );
  const [theme, setTheme] = useState<JobmiTheme | 'all'>(initialFilters?.theme || 'all');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [mobileTab, setMobileTab] = useState<'map' | 'list'>('map');

  const filteredEvents = useMemo(
    () => filterEvents(events, { eventType, format, audience, citySlug, theme }),
    [events, eventType, format, audience, citySlug, theme]
  );

  const activeEvent = filteredEvents.find((e) => e.slug === activeSlug) ?? null;
  const cityOptions = getCityOptions(events);
  const themeOptions = getThemeOptions(events);

  function handleSelect(slug: string) {
    setActiveSlug((prev) => (prev === slug ? null : slug));
    setMobileTab('map');
  }

  function resetFilters() {
    setEventType('all');
    setFormat('all');
    setAudience('all');
    setCitySlug(initialFilters?.citySlug || 'all');
    setTheme('all');
    setActiveSlug(null);
  }

  return (
    <div className="relative flex" style={{ height: 'calc(100vh - 90px)' }}>

      {/* ── SIDEBAR GAUCHE ─────────────────────────────── */}
      <aside
        className={`relative z-10 flex w-[320px] shrink-0 flex-col border-r border-gray-100 bg-white shadow-[2px_0_16px_rgba(4,25,47,0.06)] ${
          mobileTab === 'list' ? 'flex' : 'hidden'
        } sm:flex`}
      >
        {/* Filtres */}
        <div className="border-b border-gray-100 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-bold text-[#04192F]">
              {filteredEvents.length}{' '}
              <span className="font-normal text-[#465160]">
                événement{filteredEvents.length !== 1 ? 's' : ''}
              </span>
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-semibold text-[#6500FF] hover:underline"
            >
              Réinitialiser
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value as JobmiEventType | 'all')}
              className={selectClass}
            >
              <option value="all">Type</option>
              {Object.entries(EVENT_TYPE_LABELS).map(([v, l]) => (
                <option key={v} value={v}>
                  {l}
                </option>
              ))}
            </select>

            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as JobmiEventFormat | 'all')}
              className={selectClass}
            >
              <option value="all">Format</option>
              {Object.entries(FORMAT_LABELS).map(([v, l]) => (
                <option key={v} value={v}>
                  {l}
                </option>
              ))}
            </select>

            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value as JobmiAudience | 'all')}
              className={selectClass}
            >
              <option value="all">Public</option>
              {Object.entries(AUDIENCE_LABELS).map(([v, l]) => (
                <option key={v} value={v}>
                  {l}
                </option>
              ))}
            </select>

            <select
              value={citySlug}
              onChange={(e) => setCitySlug(e.target.value)}
              className={selectClass}
            >
              <option value="all">Ville</option>
              {cityOptions.map((o) => (
                <option key={o.city_slug} value={o.city_slug}>
                  {o.city}
                </option>
              ))}
            </select>

            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as JobmiTheme | 'all')}
              className={`${selectClass} col-span-2`}
            >
              <option value="all">Thématique</option>
              {themeOptions.map((t) => (
                <option key={t} value={t}>
                  {THEME_LABELS[t]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Liste événements (scrollable) */}
        <div className="flex-1 overflow-y-auto">
          {filteredEvents.length === 0 ? (
            <div className="p-5 text-sm leading-7 text-[#465160]">
              Aucun événement pour ces filtres. Essaie d&apos;élargir la sélection ou{' '}
              <button
                type="button"
                onClick={resetFilters}
                className="font-semibold text-[#6500FF] underline underline-offset-2"
              >
                réinitialise les filtres
              </button>
              .
            </div>
          ) : (
            filteredEvents.map((event) => {
              const active = event.slug === activeSlug;
              const badge = featuredBadge(event.featured_level);
              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => handleSelect(event.slug)}
                  className={`w-full border-b border-gray-100 p-4 text-left transition-colors ${
                    active ? 'bg-[#FBF9FF]' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="mb-1.5 flex flex-wrap gap-1.5">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                        active
                          ? 'bg-[#6500FF] text-white'
                          : 'bg-[#F3F1FF] text-[#6500FF]'
                      }`}
                    >
                      {EVENT_TYPE_LABELS[event.event_type]}
                    </span>
                    {badge && (
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${badge.cls}`}
                      >
                        {badge.label}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm font-semibold leading-5 ${
                      active ? 'text-[#6500FF]' : 'text-[#04192F]'
                    }`}
                  >
                    {event.title}
                  </p>
                  <p className="mt-1 text-xs text-[#465160]">
                    {event.online_only ? 'En ligne' : event.city} ·{' '}
                    {formatEventDate(event)}
                  </p>
                </button>
              );
            })
          )}
        </div>
      </aside>

      {/* ── CARTE ──────────────────────────────────────── */}
      <div
        className={`relative flex-1 ${
          mobileTab === 'map' ? 'block' : 'hidden'
        } sm:block`}
      >
        <OrientationMapCanvas
          events={filteredEvents}
          activeSlug={activeSlug}
          onSelect={handleSelect}
        />

        {/* Panel détail flottant */}
        {activeEvent && (
          <div className="absolute bottom-4 right-4 z-[1000] w-[340px] max-h-[calc(100%-2rem)] overflow-y-auto rounded-[1.6rem] border border-[#E8E1FF] bg-white shadow-[0_24px_60px_rgba(4,25,47,0.16)]">
            {/* En-tête sticky */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#F0EAFF] bg-white px-5 py-3.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6500FF]">
                {EVENT_TYPE_LABELS[activeEvent.event_type]}
              </p>
              <button
                type="button"
                onClick={() => setActiveSlug(null)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-[#465160] transition hover:bg-gray-100 hover:text-[#04192F]"
                aria-label="Fermer"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="p-5">
              <h3 className="text-base font-bold leading-6 text-[#04192F]">
                {activeEvent.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#465160]">
                {activeEvent.why_it_matters}
              </p>

              <div className="mt-4 space-y-2 rounded-xl bg-[#F8F7FF] p-3.5 text-sm">
                <p>
                  <span className="font-semibold text-[#04192F]">Date :</span>{' '}
                  {formatEventDate(activeEvent)}
                </p>
                <p>
                  <span className="font-semibold text-[#04192F]">Horaire :</span>{' '}
                  {formatEventTime(activeEvent)}
                </p>
                <p>
                  <span className="font-semibold text-[#04192F]">Lieu :</span>{' '}
                  {activeEvent.online_only
                    ? 'En ligne'
                    : `${activeEvent.venue_name || activeEvent.city}, ${activeEvent.city}`}
                </p>
                <p>
                  <span className="font-semibold text-[#04192F]">Entrée :</span>{' '}
                  {activeEvent.price_type === 'gratuit'
                    ? 'Gratuite'
                    : activeEvent.price_value
                      ? `${activeEvent.price_value} €`
                      : activeEvent.price_type}
                </p>
              </div>

              {activeEvent.themes.length > 0 && (
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {activeEvent.themes.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#F4F6FA] px-2.5 py-1 text-xs font-semibold text-[#465160]"
                    >
                      {THEME_LABELS[t]}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 space-y-2">
                {activeEvent.jobmi_ctas.map((intent) => (
                  <Link
                    key={intent}
                    href={getEventPrimaryCtaHref(intent)}
                    className="flex items-center justify-between rounded-xl border border-[#E8E1FF] bg-[#FBFAFF] px-4 py-2.5 transition hover:border-[#6500FF]"
                  >
                    <span className="text-sm font-semibold text-[#04192F]">
                      {getEventPrimaryCtaLabel(intent)}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#6500FF]">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href={activeEvent.registration_url || activeEvent.official_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl bg-[#04192F] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#6500FF]"
                >
                  Voir le site officiel
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── BARRE MOBILE (Carte / Liste) ─────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-[1100] flex border-t border-gray-200 bg-white sm:hidden">
        <button
          type="button"
          onClick={() => setMobileTab('map')}
          className={`flex-1 py-3 text-sm font-semibold transition ${
            mobileTab === 'map' ? 'text-[#6500FF]' : 'text-[#465160]'
          }`}
        >
          Carte
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('list')}
          className={`flex-1 py-3 text-sm font-semibold transition ${
            mobileTab === 'list' ? 'text-[#6500FF]' : 'text-[#465160]'
          }`}
        >
          Liste ({filteredEvents.length})
        </button>
      </div>
    </div>
  );
}
