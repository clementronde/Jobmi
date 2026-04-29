import type { Metadata } from 'next';
import { GeoPageTemplate } from '@/components/seo/GeoPageTemplate';
import { getGeoPage } from '@/data/geoPages';

const page = getGeoPage('salons-orientation-nantes')!;
const PAGE_URL = `https://jobmi.fr/${page.slug}`;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: `${page.title} | Jobmi`,
    description: page.description,
  },
};

export default function SalonsOrientationNantesPage() {
  return <GeoPageTemplate page={page} />;
}
