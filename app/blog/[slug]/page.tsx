import type { Metadata } from 'next';
import { getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from '../../../services/blogService';
import Link from 'next/link';
import { Article1 } from '../../../components/articles/Article1';
import { Article2 } from '../../../components/articles/Article2';
import { Article3 } from '../../../components/articles/Article3';
import { Article4 } from '../../../components/articles/Article4';
import { Article5 } from '../../../components/articles/Article5';
import { Article6 } from '../../../components/articles/Article6';
import { Article7 } from '../../../components/articles/Article7';
import { Article8 } from '../../../components/articles/Article8';
import { Article9 } from '../../../components/articles/Article9';
import { Article10 } from '../../../components/articles/Article10';
import { Article11 } from '../../../components/articles/Article11';
import { Article12 } from '../../../components/articles/Article12';
import { Article13 } from '../../../components/articles/Article13';
import { Article14 } from '../../../components/articles/Article14';
import { ArticleAIProofJobs } from '../../../components/articles/ArticleAIProofJobs';
import { ArticleAIBoostsJobs } from '../../../components/articles/ArticleAIBoostsJobs';
import { ArticleNewAIJobs } from '../../../components/articles/ArticleNewAIJobs';
import { GenericSupportArticle } from '../../../components/articles/GenericSupportArticle';
import { RelatedArticles } from '../../../components/RelatedArticles';
import ArticleTOC from '../../../components/ArticleTOC';
import { ArticleAuthorBox, ARTICLE_AUTHOR } from '../../../components/ArticleAuthorBox';
import { InternalLinksSection } from '../../../components/InternalLinksSection';
import { getInternalLinksForArticle } from '../../../data/internalLinks';

const BASE_URL = 'https://jobmi.fr';
const articleSeoTitleOverrides: Record<string, string> = {
  'reconversion-professionnelle-20-ans-guide-complet':
    'Plan d’action reconversion à 20 ans : quoi faire en 30 jours',
  'metiers-ia-ne-remplacera-pas-2030':
    '10 métiers que l’IA ne remplacera pas en 2026–2030 (salaires + formations)',
  'nouveaux-metiers-crees-par-ia':
    "10 nouveaux métiers créés par l'IA 2026 (salaires + formations accessibles)",
  'comment-ia-booste-ton-futur-metier':
    "Comment l'IA booste 15 métiers concrets (exemples 2026)",
  'pmsmp-18-25-tester-metier-immersion':
    'PMSMP 18–25 ans : comment tester un métier en immersion avant de te reconvertir',
};

const articleFaqSchemaBySlug: Record<string, { '@context': string; '@type': string; mainEntity: Array<{ '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }> }> = {
  'pmsmp-18-25-tester-metier-immersion': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quelle est la durée d’une PMSMP quand on a 18–25 ans ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La durée dépend du projet, de la structure d’accueil et de l’organisme qui prescrit l’immersion. L’idée est de prévoir un format assez clair pour observer le métier dans de bonnes conditions, pas de rester longtemps sans objectif précis.",
        },
      },
      {
        '@type': 'Question',
        name: "Est-ce qu’on est payé pendant une PMSMP ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La PMSMP n’est pas un contrat de travail classique. En général, tu n’es donc pas rémunéré comme un salarié, mais selon ta situation tu peux conserver certaines aides ou allocations déjà en place. Il faut toujours vérifier ce point avec la Mission Locale, France Travail ou l’organisme qui t’accompagne.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment demander une PMSMP quand on est suivi par une Mission Locale ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus simple est d’arriver avec une idée de métier ou au moins une famille de métiers à tester. Ton conseiller peut ensuite t’aider à voir si la PMSMP est adaptée, à cadrer l’objectif de l’immersion et à préparer la convention avec la structure d’accueil.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelle différence entre une PMSMP et un stage d’observation ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les deux servent à découvrir un métier, mais ils ne relèvent pas du même cadre. La PMSMP est un dispositif officiel lié à l’insertion et à l’orientation professionnelle, alors que le stage d’observation dépend plus souvent d’un établissement scolaire ou de formation.",
        },
      },
    ],
  },
};

const genericSupportArticleSlugs = new Set([
  'reconversion-apres-une-l1',
  'erreurs-reconversion-jeune',
  'financer-reconversion-jeune',
  'comment-preparer-une-immersion-metier',
  'jobshadowing-decouvrir-metier',
  'que-faire-apres-le-bac-sans-idee',
  'orientation-post-bac-sans-parcoursup',
  'utiliser-profil-riasec-orientation',
  'mission-locale-orientation-jeune',
]);

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const slugs = await getAllArticleSlugs();
    return slugs.map((slug: string) => ({ slug }));
  } catch (error) {
    console.error('Erreur lors de la génération des paramètres statiques:', error);
    return [];
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticleBySlug(slug);
    const url = `${BASE_URL}/blog/${slug}`;
    const seoTitle = articleSeoTitleOverrides[slug] || article.title;
    return {
      title: seoTitle,
      description: article.metaDescription,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        url,
        title: seoTitle,
        description: article.metaDescription,
        publishedTime: article.datePublished,
        modifiedTime: article.updatedAt,
        authors: [ARTICLE_AUTHOR.name],
        tags: article.tags,
        images: [
          {
            url: article.imageCover,
            alt: article.imageAlt,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: seoTitle,
        description: article.metaDescription,
        images: [article.imageCover],
      },
    };
  } catch {
    return { title: 'Article' };
  }
}

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getArticleBySlug(slug);
  const related = await getRelatedArticles(data._id, data.category);
  const internalLinks = getInternalLinksForArticle(data);
  const faqJsonLd = articleFaqSchemaBySlug[slug];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.metaDescription,
    image: `${BASE_URL}${data.imageCover}`,
    datePublished: data.datePublished,
    dateModified: data.updatedAt,
    author: {
      '@type': 'Person',
      name: ARTICLE_AUTHOR.name,
      jobTitle: ARTICLE_AUTHOR.role,
      description: ARTICLE_AUTHOR.bio,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jobmi',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicons/favicon-32x32.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
    keywords: data.tags.join(', '),
    articleSection: data.category,
    timeRequired: `PT${data.readingTime}M`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: data.title, item: `${BASE_URL}/blog/${slug}` },
    ],
  };

  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(data.datePublished));

  return (
    <div className="article-page mt-[90px] bg-[linear-gradient(180deg,#F7F6FF_0%,#FFFFFF_420px)] px-5 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <header className="mx-auto max-w-[980px] pb-8 pt-12 text-center font-sans">
        <Link
          href="/blog"
          className="motion-underline mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6500FF]"
        >
          <img className="w-5" src="/media/CTA-blog-retour.svg" alt="" />
          Retour au blog
        </Link>
        <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-[#6500FF] shadow-[0_10px_24px_rgba(101,0,255,0.08)]">
            {data.category}
          </span>
          <span className="text-sm font-semibold text-gray-500">
            {formattedDate}
          </span>
          <span className="text-sm font-semibold text-gray-500">
            {data.readingTime} min de lecture
          </span>
        </div>
        <h1 className="mx-auto max-w-[880px] text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-6xl">
          {data.title}
        </h1>
        <img
          src="/media/trait-article-titre.svg"
          alt=""
          className="mx-auto mt-4 max-w-[360px]"
        />
        <p className="mx-auto mt-7 max-w-[760px] text-lg leading-relaxed text-gray-600">
          {data.excerpt}
        </p>
      </header>

      <div className="mx-auto flex max-w-screen-xl gap-8">
        <div className="hidden w-[220px] shrink-0 xl:block" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <ArticleAuthorBox />
        </div>
      </div>

      <div className="mx-auto flex max-w-screen-xl gap-8 items-start">
        <ArticleTOC />
        <article
          id="article-content"
          className="article-content flex-1 min-w-0 rounded-2xl bg-white px-4 py-8 shadow-[0_18px_55px_rgba(4,25,47,0.06)] sm:px-8 lg:px-10"
        >
          {slug === "comment-commencer-ta-reconversion-professionnelle" && <Article1 />}
          {slug === "comment-trouver-le-job-de-tes-reves-a-20-ans-guide-ultime-pour-jeunes-en-reconversion" && <Article2 />}
          {slug === "top-10-des-metiers-cool-pour-2026-que-tu-dois-connaitre" && <Article3 />}
          {slug === "reconversion-professionnelle-20-ans-guide-complet" && <Article4 />}
          {slug === "metiers-sans-diplome-qui-paient-bien" && <Article5 />}
          {slug === "bilan-de-competences-gratuit-guide" && <Article6 />}
          {slug === "financer-sa-formation-sans-cpf" && <Article7 />}
          {slug === "se-reconvertir-apres-bac-plus-2" && <Article8 />}
          {slug === "alternance-ou-formation-continue-que-choisir" && <Article9 />}
          {slug === "metiers-avenir-2026-qui-recrutent" && <Article10 />}
          {slug === "devenir-developpeur-web-sans-diplome" && <Article11 />}
          {slug === "utiliser-cpf-compte-personnel-formation" && <Article12 />}
          {slug === "trouver-stage-reconversion-methode" && <Article13 />}
          {slug === "pmsmp-18-25-tester-metier-immersion" && <Article14 />}
          {slug === "metiers-ia-ne-remplacera-pas-2030" && <ArticleAIProofJobs />}
          {slug === "comment-ia-booste-ton-futur-metier" && <ArticleAIBoostsJobs />}
          {slug === "nouveaux-metiers-crees-par-ia" && <ArticleNewAIJobs />}
          {genericSupportArticleSlugs.has(slug) && (
            <GenericSupportArticle slug={slug} />
          )}
        </article>
      </div>

      <div className="mx-auto max-w-[980px]">
        <InternalLinksSection
          className="px-0"
          eyebrow="Pour avancer"
          title="Les ressources utiles après cet article"
          description="Une sélection de guides et pages piliers pour continuer dans le bon ordre, selon ton projet."
          links={internalLinks}
        />
        <RelatedArticles articles={related} />
      </div>
    </div>
  );
};

export default ArticlePage;
