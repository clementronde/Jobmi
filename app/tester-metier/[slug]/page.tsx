import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JobTestingPageTemplate } from '@/components/seo/JobTestingPageTemplate';
import { getJobTestingPage, jobTestingPages } from '@/data/jobTestingPages';

const BASE_URL = 'https://jobmi.fr';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return jobTestingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getJobTestingPage(slug);

  if (!page) return { title: 'Métier introuvable', robots: { index: false } };

  const url = `${BASE_URL}/tester-metier/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${page.title} | Jobmi`,
      description: page.description,
    },
  };
}

export default async function TesterMetierPage({ params }: Props) {
  const { slug } = await params;
  const page = getJobTestingPage(slug);

  if (!page) notFound();

  return <JobTestingPageTemplate page={page} />;
}
