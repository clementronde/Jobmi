import { MetadataRoute } from 'next';
import { articles } from '../data/articles';
import { orientationEvents } from '../data/events';
import { geoPages } from '../data/geoPages';
import { immersionOffers } from '../data/immersionOffers';
import { jobTestingPages } from '../data/jobTestingPages';

const isPublished = (datePublished: string) =>
  new Date(datePublished) <= new Date();

const today = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jobmi.fr';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/test`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/test-orientation`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/test-orientation-18-25-ans`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/reconversion`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tester-un-metier`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/carte-orientation`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/evenements-orientation`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/evenements/salons`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/evenements/journees-portes-ouvertes`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/evenements/ateliers-metiers`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/evenements/en-ligne`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/carte-orientation/paris`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/carte-orientation/lyon`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/carte-orientation/nantes`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/tester-metiers-paris`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outil/temps-devant-toi`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outils`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/stage-et-formation`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/que-faire-apres-le-bac`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cgu`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/mention-legales`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/politique-de-confidentialite`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = articles
    .filter((article) => isPublished(article.datePublished))
    .map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

  const eventPages: MetadataRoute.Sitemap = orientationEvents
    .filter((event) => event.seo_indexable)
    .map((event) => ({
      url: `${baseUrl}/evenements/${event.slug}`,
      lastModified: new Date(event.date_end || event.date_start),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  const geoSeoPages: MetadataRoute.Sitemap = geoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.72,
  }));

  const jobSeoPages: MetadataRoute.Sitemap = jobTestingPages.map((page) => ({
    url: `${baseUrl}/tester-metier/${page.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.72,
  }));

  const immersionPages: MetadataRoute.Sitemap = immersionOffers.map((offer) => ({
    url: `${baseUrl}/immersions/${offer.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.68,
  }));

  const pages = [
    ...staticPages,
    ...articlePages,
    ...eventPages,
    ...geoSeoPages,
    ...jobSeoPages,
    ...immersionPages,
  ];

  return Array.from(new Map(pages.map((page) => [page.url, page])).values());
}
