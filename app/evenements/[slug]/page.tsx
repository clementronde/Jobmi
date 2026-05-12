import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  AUDIENCE_LABELS,
  EVENT_TYPE_LABELS,
  FORMAT_LABELS,
  THEME_LABELS,
  formatEventDate,
  formatEventTime,
  getActiveEvents,
  getEventBySlug,
  getEventPrimaryCtaHref,
  getEventPrimaryCtaLabel,
} from '@/services/eventsService';

const BASE_URL = 'https://jobmi.fr';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getActiveEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event || !event.seo_indexable) {
    return {
      title: 'Événement introuvable',
      robots: { index: false, follow: false },
    };
  }

  const pageUrl = `${BASE_URL}/evenements/${event.slug}`;
  const title = `${event.title} | Jobmi`;
  const description = `${event.description_short} ${event.online_only ? 'Événement en ligne.' : `${event.city}, ${event.region}.`} Dates : ${formatEventDate(event)}.`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: 'article',
      url: pageUrl,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event || !event.seo_indexable) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/evenements/${event.slug}`;
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description_long,
    startDate: event.time_start
      ? `${event.date_start}T${event.time_start}:00`
      : event.date_start,
    endDate: event.date_end
      ? event.time_end
        ? `${event.date_end}T${event.time_end}:00`
        : event.date_end
      : event.time_end
        ? `${event.date_start}T${event.time_end}:00`
        : event.date_start,
    eventAttendanceMode: event.online_only
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : event.format === 'hybride'
        ? 'https://schema.org/MixedEventAttendanceMode'
        : 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: `https://schema.org/${event.status === 'scheduled' ? 'EventScheduled' : event.status === 'cancelled' ? 'EventCancelled' : event.status === 'postponed' ? 'EventPostponed' : 'EventScheduled'}`,
    image: event.image_url ? [event.image_url] : undefined,
    url: pageUrl,
    organizer: {
      '@type': 'Organization',
      name: event.organizer_name,
      url: event.official_url,
    },
    location: event.online_only
      ? {
          '@type': 'VirtualLocation',
          url: event.online_url || event.official_url,
        }
      : {
          '@type': 'Place',
          name: event.venue_name || event.city,
          address: {
            '@type': 'PostalAddress',
            streetAddress: event.address || '',
            postalCode: event.postal_code || '',
            addressLocality: event.city,
            addressRegion: event.region,
            addressCountry: event.country,
          },
        },
    offers: {
      '@type': 'Offer',
      url: event.registration_url || event.official_url,
      availability: 'https://schema.org/InStock',
      price: event.price_value ?? 0,
      priceCurrency: 'EUR',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Événements', item: `${BASE_URL}/evenements-orientation` },
      { '@type': 'ListItem', position: 3, name: event.title, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="mt-[90px] bg-[#FCFCFF] font-sans">
        <section className="border-b border-[#ECE7FF] bg-[linear-gradient(180deg,#FBFAFF_0%,#FFFFFF_100%)] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
              {EVENT_TYPE_LABELS[event.event_type]}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl">
              {event.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#465160]">
              {event.description_short}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={event.registration_url || event.official_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#04192F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6500FF]"
              >
                Voir le site officiel
              </a>
              <Link
                href="/carte-orientation"
                className="rounded-2xl border border-[#04192F]/12 px-6 py-3 text-sm font-semibold text-[#04192F] transition hover:border-[#6500FF]/30 hover:text-[#6500FF]"
              >
                Revenir à la carte
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#04192F] sm:text-3xl">
                  Pourquoi cet événement peut t&apos;aider
                </h2>
                <p className="mt-4 text-base leading-8 text-[#465160] sm:text-lg">
                  {event.why_it_matters}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#04192F] sm:text-3xl">
                  Ce que tu peux en attendre
                </h2>
                <p className="mt-4 text-base leading-8 text-[#465160] sm:text-lg">
                  {event.description_long}
                </p>
              </div>

              {event.venue_notes ? (
                <div className="rounded-2xl border border-[#E9E1FF] bg-[#FBFAFF] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6500FF]">
                    Conseil Jobmi
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#465160]">{event.venue_notes}</p>
                </div>
              ) : null}
            </article>

            <aside className="space-y-5">
              <div className="rounded-[2rem] border border-[#E9E1FF] bg-white p-6 shadow-[0_18px_40px_rgba(4,25,47,0.06)]">
                <h2 className="text-xl font-bold text-[#04192F]">Infos pratiques</h2>
                <div className="mt-5 space-y-3 text-sm leading-7 text-[#465160]">
                  <p>
                    <span className="font-semibold text-[#04192F]">Date :</span> {formatEventDate(event)}
                  </p>
                  <p>
                    <span className="font-semibold text-[#04192F]">Horaire :</span> {formatEventTime(event)}
                  </p>
                  <p>
                    <span className="font-semibold text-[#04192F]">Format :</span> {FORMAT_LABELS[event.format]}
                  </p>
                  <p>
                    <span className="font-semibold text-[#04192F]">Public :</span>{' '}
                    {event.audience.map((item) => AUDIENCE_LABELS[item]).join(', ')}
                  </p>
                  <p>
                    <span className="font-semibold text-[#04192F]">Lieu :</span>{' '}
                    {event.online_only
                      ? 'En ligne'
                      : `${event.venue_name || event.city}, ${event.city}`}
                  </p>
                  {!event.online_only && event.address ? (
                    <p>
                      <span className="font-semibold text-[#04192F]">Adresse :</span> {event.address}
                    </p>
                  ) : null}
                  <p>
                    <span className="font-semibold text-[#04192F]">Organisateur :</span> {event.organizer_name}
                  </p>
                  <p>
                    <span className="font-semibold text-[#04192F]">Prix :</span>{' '}
                    {event.price_type === 'gratuit'
                      ? 'Gratuit'
                      : event.price_value
                        ? `${event.price_value} €`
                        : event.price_type}
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#E9E1FF] bg-white p-6 shadow-[0_18px_40px_rgba(4,25,47,0.06)]">
                <h2 className="text-xl font-bold text-[#04192F]">Thématiques</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.themes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full bg-[#F4F6FA] px-3 py-1.5 text-xs font-semibold text-[#465160]"
                    >
                      {THEME_LABELS[theme]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#E9E1FF] bg-white p-6 shadow-[0_18px_40px_rgba(4,25,47,0.06)]">
                <h2 className="text-xl font-bold text-[#04192F]">Avant d&apos;y aller</h2>
                <div className="mt-4 space-y-3">
                  {event.jobmi_ctas.map((intent) => (
                    <Link
                      key={intent}
                      href={getEventPrimaryCtaHref(intent)}
                      className="flex items-center justify-between rounded-2xl border border-[#E8E1FF] bg-[#FBFAFF] px-4 py-3 text-sm font-semibold text-[#04192F] transition hover:border-[#6500FF]/35 hover:text-[#6500FF]"
                    >
                      <span>{getEventPrimaryCtaLabel(intent)}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
