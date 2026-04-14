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
import { RelatedArticles } from '../../../components/RelatedArticles';

const BASE_URL = 'https://jobmi.fr';

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
    return {
      title: article.title,
      description: article.metaDescription,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        url,
        title: article.title,
        description: article.metaDescription,
        publishedTime: article.datePublished,
        modifiedTime: article.updatedAt,
        authors: ['https://jobmi.fr'],
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
        title: article.title,
        description: article.metaDescription,
        images: [article.imageCover],
      },
    };
  } catch {
    return { title: 'Article | Jobmi' };
  }
}

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getArticleBySlug(slug);
  const related = await getRelatedArticles(data._id, data.category);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.metaDescription,
    image: `${BASE_URL}${data.imageCover}`,
    datePublished: data.datePublished,
    dateModified: data.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'Jobmi',
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

  return (
    <div className='mt-[100px] mx-5'>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='my-10 mx-auto max-w-[700px]'>
        <h1 className="font-sans text-5xl font-bold text-center">{data.title}</h1>
        <span className='items-center'>
          <img src="/media/trait-article-titre.svg" alt="Trait soulignant le titre de l'article" />
        </span>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-between sm:mx-[200px] my-10 font-sans space-y-4 sm:space-y-0'>
        <Link href="/blog" className='flex gap-2'>
          <img className='w-5' src="/media/CTA-blog-retour.svg" alt="Flèche vers la gauche qui mène à la page précédente" />
          Retour
        </Link>

        <p className='flex gap-2 items-center'>
          <img className='w-[30px]' src="/media/rond-blog-auteur.svg" alt="Image d'un rond violet" />
          {data.author}
        </p>

        <p><span className='font-bold'>{data.readingTime} min</span> de lecture</p>
      </div>

      {slug === "comment-commencer-ta-reconversion-professionnelle" && <Article1 />}
      {slug === "comment-trouver-le-job-de-tes-reves-a-20-ans-guide-ultime-pour-jeunes-en-reconversion" && <Article2 />}
      {slug === "top-10-des-metiers-cool-pour-2024-que-tu-dois-connaitre" && <Article3 />}
      {slug === "reconversion-professionnelle-20-ans-guide-complet" && <Article4 />}
      {slug === "metiers-sans-diplome-qui-paient-bien" && <Article5 />}
      {slug === "bilan-de-competences-gratuit-guide" && <Article6 />}
      {slug === "financer-sa-formation-sans-cpf" && <Article7 />}
      {slug === "se-reconvertir-apres-bac-plus-2" && <Article8 />}
      {slug === "alternance-ou-formation-continue-que-choisir" && <Article9 />}
      {slug === "metiers-avenir-2025-qui-recrutent" && <Article10 />}
      {slug === "devenir-developpeur-web-sans-diplome" && <Article11 />}
      {slug === "utiliser-cpf-compte-personnel-formation" && <Article12 />}
      {slug === "trouver-stage-reconversion-methode" && <Article13 />}

      <div className="sm:mx-[200px] mb-16">
        <RelatedArticles articles={related} />
      </div>
    </div>
  );
};

export default ArticlePage;
