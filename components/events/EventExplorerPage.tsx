import Link from 'next/link';
import { EventMapExplorer } from '@/components/events/EventMapExplorer';
import type {
  JobmiAudience,
  JobmiEvent,
  JobmiEventFormat,
  JobmiEventType,
  JobmiTheme,
} from '@/types/events';

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  intro: string[];
  events: JobmiEvent[];
  initialFilters?: {
    eventType?: JobmiEventType | 'all';
    format?: JobmiEventFormat | 'all';
    audience?: JobmiAudience | 'all';
    citySlug?: string | 'all';
    theme?: JobmiTheme | 'all';
  };
};

export function EventExplorerPage({
  eyebrow,
  title,
  description,
  intro,
  events,
  initialFilters,
}: Props) {
  return (
    <main className="mt-[90px] bg-[#FCFCFF] font-sans">
      <section className="border-b border-[#ECE7FF] bg-[linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465160]">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/test-orientation"
              className="rounded-2xl bg-[#04192F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6500FF]"
            >
              Passer le test d&apos;orientation
            </Link>
            <Link
              href="/tester-un-metier"
              className="rounded-2xl border border-[#04192F]/12 px-6 py-3 text-sm font-semibold text-[#04192F] transition hover:border-[#6500FF]/30 hover:text-[#6500FF]"
            >
              Tester un métier
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-5xl space-y-4 text-base leading-8 text-[#465160] sm:text-lg">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <EventMapExplorer events={events} initialFilters={initialFilters} />
        </div>
      </section>
    </main>
  );
}
