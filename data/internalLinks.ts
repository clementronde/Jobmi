import { articles } from './articles';
import type { Article } from '../models/Article';

export type InternalLinkItem = {
  href: string;
  title: string;
  description: string;
  label?: string;
};

const blogPath = (slug: string) => `/blog/${slug}`;

const isPublishedArticlePath = (href: string) => {
  if (!href.startsWith('/blog/')) return true;

  const slug = href.replace('/blog/', '');
  const article = articles.find((item) => item.slug === slug);

  return Boolean(article && new Date(article.datePublished) <= new Date());
};

const uniqueLinks = (links: InternalLinkItem[], currentHref?: string) => {
  const seen = new Set<string>();

  return links.filter((link) => {
    if (link.href === currentHref || seen.has(link.href)) return false;
    if (!isPublishedArticlePath(link.href)) return false;
    seen.add(link.href);
    return true;
  });
};

export const internalLinkGroups = {
  orientation: [
    {
      href: '/orientation/test-orientation-jeunes',
      title: "Test d'orientation gratuit pour les 18-25 ans",
      description: 'Clarifie ton profil avant de choisir une formation ou un métier.',
      label: 'Page pilier',
    },
    {
      href: '/test',
      title: 'Passer le test Jobmi',
      description: 'Obtiens des pistes concrètes à partir de tes envies et de ta façon de travailler.',
      label: 'Action',
    },
    {
      href: blogPath('comment-trouver-le-job-de-tes-reves-a-20-ans-guide-ultime-pour-jeunes-en-reconversion'),
      title: 'Trouver le job de tes rêves à 20 ans',
      description: 'Un guide pratique pour transformer le flou en premières pistes réalistes.',
      label: 'Guide',
    },
    {
      href: blogPath('reconversion-professionnelle-20-ans-guide-complet'),
      title: 'Reconversion professionnelle à 20 ans',
      description: 'Les étapes pour changer de voie sans repartir de zéro.',
      label: 'Guide',
    },
  ],
  reconversion: [
    {
      href: '/reconversion',
      title: 'Reconversion professionnelle à 20 ans',
      description: 'La page pilier pour comprendre les étapes, les erreurs à éviter et les aides possibles.',
      label: 'Page pilier',
    },
    {
      href: blogPath('pmsmp-18-25-tester-metier-immersion'),
      title: 'PMSMP 18–25 ans : tester un métier en immersion',
      description: 'Le guide concret pour comprendre, demander et utiliser une PMSMP.',
      label: 'Guide',
    },
    {
      href: blogPath('reconversion-professionnelle-20-ans-guide-complet'),
      title: 'Le guide complet de la reconversion à 20 ans',
      description: 'Bilan, financement, métiers accessibles et plan d’action.',
      label: 'Guide',
    },
    {
      href: '/tester-un-metier',
      title: 'Tester un métier avant de te lancer',
      description: 'Ateliers, PMSMP, stages : le meilleur moyen de valider une piste.',
      label: 'Page pilier',
    },
  ],
  formation: [
    {
      href: '/stage-et-formation',
      title: 'Immersions métier et pistes de formation',
      description: 'Compare les formats d’expérience terrain et les suites possibles.',
      label: 'Page pilier',
    },
    {
      href: blogPath('alternance-ou-formation-continue-que-choisir'),
      title: 'Alternance ou formation continue : que choisir ?',
      description: 'Choisis le bon format selon ton âge, ton budget et ton projet.',
      label: 'Guide',
    },
    {
      href: blogPath('financer-sa-formation-sans-cpf'),
      title: 'Financer sa formation sans CPF',
      description: 'Les solutions quand ton CPF est insuffisant ou indisponible.',
      label: 'Financement',
    },
    {
      href: blogPath('pmsmp-18-25-tester-metier-immersion'),
      title: 'PMSMP 18–25 ans : tester un métier en immersion',
      description: 'Un dispositif utile pour valider une piste avant de financer une formation.',
      label: 'Terrain',
    },
  ],
  metiers: [
    {
      href: '/tester-un-metier',
      title: 'Tester un métier en conditions réelles',
      description: 'Passe de l’idée au terrain avant de t’engager dans une formation.',
      label: 'Page pilier',
    },
    {
      href: blogPath('metiers-sans-diplome-qui-paient-bien'),
      title: 'Métiers sans diplôme qui paient bien',
      description: 'Des pistes accessibles sans long diplôme universitaire.',
      label: 'Métiers',
    },
    {
      href: blogPath('metiers-avenir-2026-qui-recrutent'),
      title: "Métiers d'avenir qui recrutent",
      description: 'Secteurs porteurs, salaires, formations et perspectives.',
      label: 'Métiers',
    },
    {
      href: blogPath('pmsmp-18-25-tester-metier-immersion'),
      title: 'PMSMP 18–25 ans : tester un métier en immersion',
      description: 'Pour comprendre comment observer un métier en conditions réelles.',
      label: 'Terrain',
    },
  ],
};

export const getInternalLinksForContext = (
  context: keyof typeof internalLinkGroups,
  currentHref?: string,
  limit = 4
) => uniqueLinks(internalLinkGroups[context], currentHref).slice(0, limit);

export const getInternalLinksForArticle = (article: Article): InternalLinkItem[] => {
  const tagText = [article.category, article.title, article.excerpt, ...(article.tags || [])]
    .join(' ')
    .toLowerCase();

  const groups: Array<keyof typeof internalLinkGroups> = [];

  if (tagText.includes('formation') || tagText.includes('cpf') || tagText.includes('alternance')) {
    groups.push('formation');
  }

  if (tagText.includes('métier') || tagText.includes('metier') || tagText.includes('salaire') || tagText.includes('emploi')) {
    groups.push('metiers');
  }

  if (tagText.includes('reconversion') || tagText.includes('bilan') || tagText.includes('stage')) {
    groups.push('reconversion');
  }

  if (tagText.includes('orientation') || tagText.includes('jeune') || tagText.includes('20 ans')) {
    groups.push('orientation');
  }

  if (groups.length === 0) groups.push('orientation', 'reconversion');

  return uniqueLinks(
    groups.flatMap((group) => internalLinkGroups[group]),
    blogPath(article.slug)
  ).slice(0, 3);
};
