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
      href: '/test',
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
      title: 'Plan d’action reconversion à 20 ans',
      description: '30 jours pour clarifier, explorer, tester et préparer la suite.',
      label: 'Méthode',
    },
    {
      href: '/que-faire-apres-le-bac',
      title: 'Que faire après le bac ?',
      description: 'Le guide post-bac pour choisir une prochaine étape sans rester bloqué.',
      label: 'Post-bac',
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
      href: blogPath('utiliser-cpf-compte-personnel-formation'),
      title: 'Utiliser ton CPF sans te tromper',
      description: 'Comprendre les droits, le reste à charge et les pièges avant de financer.',
      label: 'Financement',
    },
    {
      href: blogPath('metiers-sans-diplome-qui-paient-bien'),
      title: 'Métiers sans diplôme qui paient bien',
      description: 'Des pistes accessibles à explorer avant de choisir une formation.',
      label: 'Métiers',
    },
    {
      href: blogPath('reconversion-professionnelle-20-ans-guide-complet'),
      title: 'Plan d’action en 30 jours pour ta reconversion',
      description: 'Une méthode courte pour passer du doute à une piste testée.',
      label: 'Méthode',
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
      title: 'Stages et immersions pour les 18–25 ans',
      description: "Compare stage d'observation, PMSMP, alternance et formations courtes.",
      label: 'Page pilier',
    },
    {
      href: '/immersions/stage-observation-developpeur-web-paris',
      title: "Stage d'observation développeur web",
      description: "Une fiche structurée pour vérifier une piste tech avant une formation.",
      label: 'Fiche',
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
      href: '/tester-metier/developpeur-web',
      title: 'Tester le métier de développeur web',
      description: 'Questions, mini-projet et immersion pour vérifier la réalité du métier.',
      label: 'Métier',
    },
    {
      href: '/tester-metier/infirmier',
      title: "Tester le métier d'infirmier",
      description: "Relation patient, rythme et formation : ce qu'il faut vérifier.",
      label: 'Métier',
    },
    {
      href: blogPath('metiers-avenir-2026-qui-recrutent'),
      title: "Métiers d'avenir qui recrutent",
      description: 'Secteurs porteurs, salaires, formations et perspectives.',
      label: 'Métiers',
    },
    {
      href: blogPath('metiers-ia-ne-remplacera-pas-2030'),
      title: "Métiers que l’IA ne remplacera pas",
      description: "10 métiers humains à tester avant 2030 : soin, terrain, éducation, artisanat.",
      label: 'IA-proof',
    },
    {
      href: blogPath('nouveaux-metiers-crees-par-ia'),
      title: "Nouveaux métiers créés par l’IA",
      description: "Prompt engineer, IA trainer, data ethicist : les pistes accessibles aux 18–25 ans.",
      label: 'IA',
    },
    {
      href: blogPath('comment-ia-booste-ton-futur-metier'),
      title: "Comment l’IA booste les métiers",
      description: "15 exemples concrets par secteur pour comprendre l’IA comme assistant de travail.",
      label: 'IA',
    },
    {
      href: blogPath('pmsmp-18-25-tester-metier-immersion'),
      title: 'PMSMP 18–25 ans : tester un métier en immersion',
      description: 'Pour comprendre comment observer un métier en conditions réelles.',
      label: 'Terrain',
    },
  ],
  postbac: [
    {
      href: '/que-faire-apres-le-bac',
      title: 'Que faire après le bac ?',
      description: 'La page pilier pour clarifier ton orientation post-bac.',
      label: 'Page pilier',
    },
    {
      href: '/test',
      title: "Test d'orientation 18–25 ans",
      description: 'Identifie des familles de métiers avant de choisir une formation.',
      label: 'Test',
    },
    {
      href: '/evenements-orientation',
      title: "Événements d'orientation",
      description: 'Salons, JPO, forums et ateliers pour comparer les options près de chez toi.',
      label: 'Agenda',
    },
    {
      href: '/tester-un-metier',
      title: 'Tester un métier avant les études',
      description: "Découvre comment vérifier une piste avant de t'engager.",
      label: 'Terrain',
    },
  ],
  geo: [
    {
      href: '/orientation-paris',
      title: 'Orientation à Paris',
      description: 'Salons, test, immersions et relais locaux pour les 18–25 ans.',
      label: 'GEO',
    },
    {
      href: '/tester-un-metier-lyon',
      title: 'Tester un métier à Lyon',
      description: 'Ateliers, PMSMP, JPO et stages pour vérifier une piste localement.',
      label: 'GEO',
    },
    {
      href: '/salons-orientation-nantes',
      title: "Salons d'orientation à Nantes",
      description: 'Préparer et choisir les bons salons, JPO et forums alternance.',
      label: 'GEO',
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

  if (tagText.includes('bac') || tagText.includes('parcoursup') || tagText.includes('post-bac')) {
    groups.push('postbac');
  }

  if (tagText.includes('orientation') || tagText.includes('jeune') || tagText.includes('20 ans')) {
    groups.push('orientation');
  }

  if (tagText.includes('paris') || tagText.includes('lyon') || tagText.includes('nantes') || tagText.includes('salon')) {
    groups.push('geo');
  }

  if (groups.length === 0) groups.push('orientation', 'reconversion');

  return uniqueLinks(
    groups.flatMap((group) => internalLinkGroups[group]),
    blogPath(article.slug)
  ).slice(0, 3);
};
