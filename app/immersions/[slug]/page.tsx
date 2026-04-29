import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ImmersionOfferPageTemplate } from '@/components/seo/ImmersionOfferPageTemplate';
import { getImmersionOffer, immersionOffers } from '@/data/immersionOffers';

const BASE_URL = 'https://jobmi.fr';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return immersionOffers.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const offer = getImmersionOffer(slug);

  if (!offer) return { title: 'Immersion introuvable', robots: { index: false } };

  const url = `${BASE_URL}/immersions/${offer.slug}`;
  return {
    title: `${offer.title} | Immersion métier 18–25 ans`,
    description: `${offer.context} Métier visé : ${offer.targetJob}. Ville : ${offer.city}. Niveau : ${offer.level}.`,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `${offer.title} | Jobmi`,
      description: offer.context,
    },
  };
}

export default async function ImmersionOfferPage({ params }: Props) {
  const { slug } = await params;
  const offer = getImmersionOffer(slug);

  if (!offer) notFound();

  return <ImmersionOfferPageTemplate offer={offer} />;
}
