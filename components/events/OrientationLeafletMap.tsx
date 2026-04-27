'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { Map as LeafletMap, LayerGroup } from 'leaflet';
import type { JobmiEvent } from '@/types/events';
import { EVENT_TYPE_LABELS, formatEventDate } from '@/services/eventsService';

type Props = {
  events: JobmiEvent[];
  activeSlug?: string | null;
  onSelect: (slug: string) => void;
};

const franceBounds: [[number, number], [number, number]] = [
  [41.15, -5.6],
  [51.5, 9.7],
];

export function OrientationLeafletMap({ events, activeSlug, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersLayerRef = useRef<LayerGroup | null>(null);
  const [mapReady, setMapReady] = useState(false);

  const plotted = useMemo(
    () => events.filter((e) => e.show_on_map && e.latitude && e.longitude),
    [events]
  );

  // Initialize map once
  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!containerRef.current || mapRef.current) return;
      const L = await import('leaflet');
      if (cancelled || !containerRef.current) return;

      const el = containerRef.current as HTMLDivElement & { _leaflet_id?: number };
      if (el._leaflet_id) delete el._leaflet_id;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: true,
        zoomSnap: 0.5,
        minZoom: 5.5,
        maxZoom: 15,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      }).addTo(map);

      map.fitBounds(franceBounds, { padding: [18, 18] });

      markersLayerRef.current = L.layerGroup().addTo(map);
      mapRef.current = map;
      // Trigger markers effect to run now that map is ready
      setMapReady(true);
    }

    init();

    return () => {
      cancelled = true;
      markersLayerRef.current?.clearLayers();
      markersLayerRef.current = null;
      mapRef.current?.remove();
      mapRef.current = null;
      setMapReady(false);
    };
  }, []);

  // Render markers — runs after map is ready, and on data/selection changes
  useEffect(() => {
    if (!mapReady) return;
    let cancelled = false;

    async function renderMarkers() {
      const map = mapRef.current;
      const layer = markersLayerRef.current;
      if (!map || !layer) return;

      const L = await import('leaflet');
      if (cancelled) return;

      layer.clearLayers();

      plotted.forEach((event) => {
        const active = activeSlug === event.slug;
        const isSponsored = event.featured_level === 'sponsored';
        const tone = isSponsored
          ? { pinBg: '#04192F', pinRing: 'rgba(4,25,47,0.14)', dot: '#FFFFFF', border: '#04192F' }
          : active
            ? { pinBg: '#6500FF', pinRing: 'rgba(101,0,255,0.22)', dot: '#FFFFFF', border: '#6500FF' }
            : { pinBg: '#FFFFFF', pinRing: 'rgba(101,0,255,0.18)', dot: '#6500FF', border: '#6500FF' };

        const marker = L.marker([event.latitude!, event.longitude!], {
          icon: L.divIcon({
            className: 'jobmi-map-pin-wrapper',
            html: `<span
              class="jobmi-map-pin ${active ? 'is-active' : ''} ${isSponsored ? 'is-sponsored' : ''}"
              style="--jobmi-pin-bg:${tone.pinBg};--jobmi-pin-ring:${tone.pinRing};--jobmi-pin-dot:${tone.dot};--jobmi-pin-border:${tone.border};"
            ><span class="jobmi-map-pin__inner"></span></span>`,
            iconSize: active ? [28, 40] : [24, 34],
            iconAnchor: active ? [14, 38] : [12, 32],
            popupAnchor: [0, -34],
          }),
        });

        marker.bindPopup(`
          <div style="min-width:200px;padding-right:6px;">
            <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#6500FF;">
              ${EVENT_TYPE_LABELS[event.event_type]}
            </p>
            <p style="margin:0 0 6px;font-size:14px;line-height:1.45;font-weight:700;color:#04192F;">
              ${event.title}
            </p>
            <p style="margin:0;font-size:12px;color:#465160;">
              ${event.online_only ? 'En ligne' : event.city} · ${formatEventDate(event)}
            </p>
          </div>`);

        marker.on('click', () => onSelect(event.slug));
        marker.addTo(layer);
      });
    }

    renderMarkers();
    return () => { cancelled = true; };
  }, [plotted, activeSlug, onSelect, mapReady]);

  // Fly to active event
  useEffect(() => {
    const map = mapRef.current;
    const activeEvent = plotted.find((e) => e.slug === activeSlug);
    if (!map || !activeEvent?.latitude || !activeEvent.longitude) return;
    map.flyTo([activeEvent.latitude, activeEvent.longitude], Math.max(map.getZoom(), 8), {
      duration: 0.6,
    });
  }, [activeSlug, plotted]);

  return <div ref={containerRef} className="h-full w-full" />;
}
