'use client';

import dynamic from 'next/dynamic';
import type { JobmiEvent } from '@/types/events';

type Props = {
  events: JobmiEvent[];
  activeSlug?: string | null;
  onSelect: (slug: string) => void;
};

const LeafletMap = dynamic(
  () => import('./OrientationLeafletMap').then((mod) => mod.OrientationLeafletMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-[#FCFCFF]">
        <p className="text-sm font-medium text-[#465160]">Chargement de la carte…</p>
      </div>
    ),
  }
);

export function OrientationMapCanvas({ events, activeSlug, onSelect }: Props) {
  return (
    <div className="h-full w-full">
      <LeafletMap events={events} activeSlug={activeSlug} onSelect={onSelect} />
    </div>
  );
}
