import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { EventExplorerPage } from '@/components/events/EventExplorerPage';
import { getActiveEvents } from '@/services/eventsService';

const BASE_URL = 'https://jobmi.fr';

const cityContent: Record<
  string,
  { city: string; title: string; description: string; intro: string[] }
> = {
  paris: {
    city: 'Paris',
    title: 'Carte des événements d’orientation à Paris pour les 18–25 ans',
    description:
      "Salons, journées portes ouvertes, immersions, ateliers métiers et événements utiles pour s’orienter à Paris.",
    intro: [
      "Paris concentre beaucoup d’événements orientation, salons étudiant, forums, écoles, universités, CFA, ateliers et formats d’immersion. Cette page te permet de filtrer plus vite ce qui vaut le coup selon ton besoin réel.",
      "L’objectif n’est pas seulement de trouver quelque chose à faire, mais de repérer le bon type d’événement au bon moment : comparer des écoles, tester une piste, préparer une immersion ou clarifier une réorientation.",
    ],
  },
  lyon: {
    city: 'Lyon',
    title: 'Carte des événements d’orientation à Lyon pour les 18–25 ans',
    description:
      "Repère les salons, forums alternance, JPO et événements utiles pour avancer dans ton orientation à Lyon.",
    intro: [
      "Lyon propose souvent un bon mix entre salons d’orientation, forums alternance, JPO d’écoles et formats plus terrain. C’est particulièrement utile si tu veux comparer des voies concrètes sans te disperser.",
      "Cette page t’aide à repérer les événements utiles à Lyon selon ton stade de réflexion : découverte large, comparaison de formations, ou validation d’une piste déjà plus sérieuse.",
    ],
  },
  nantes: {
    city: 'Nantes',
    title: 'Carte des événements d’orientation à Nantes pour les 18–25 ans',
    description:
      "Retrouve les événements d’orientation utiles à Nantes : salons, ateliers, JPO et formats de découverte pour les 18–25 ans.",
    intro: [
      "Nantes est une bonne porte d’entrée pour découvrir des formats orientation plus accessibles : écoles, ateliers, salons, structures d’accompagnement et premiers contacts terrain.",
      "Si tu veux avancer sans te perdre dans trop d’options, cette vue locale t’aide à cibler ce qui peut vraiment t’aider à clarifier une voie ou une réorientation.",
    ],
  },
};

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return Object.keys(cityContent).map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const config = cityContent[city];

  if (!config) {
    return {
      title: 'Ville introuvable',
      robots: { index: false, follow: false },
    };
  }

  const pageUrl = `${BASE_URL}/carte-orientation/${city}`;
  return {
    title: config.title,
    description: config.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: 'website',
      url: pageUrl,
      title: `${config.title} | Jobmi`,
      description: config.description,
    },
  };
}

export default async function CarteOrientationCityPage({ params }: Props) {
  const { city } = await params;
  const config = cityContent[city];

  if (!config) {
    notFound();
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Carte Orientation', item: `${BASE_URL}/carte-orientation` },
      { '@type': 'ListItem', position: 3, name: config.city, item: `${BASE_URL}/carte-orientation/${city}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EventExplorerPage
        eyebrow={`Événements orientation · ${config.city}`}
        title={config.title}
        description={config.description}
        intro={config.intro}
        events={getActiveEvents()}
        initialFilters={{ citySlug: city }}
      />
    </>
  );
}
