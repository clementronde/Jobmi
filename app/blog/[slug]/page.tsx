import { getArticleBySlug, getAllArticleSlugs } from '../../../services/blogService';
import Link from 'next/link';
import { Article1 } from '../../../components/articles/Article1';
import { Article2 } from '../../../components/articles/Article2';
import { Article3 } from '../../../components/articles/Article3';
import { RelatedArticles } from '../../../components/RelatedArticles';

const getData = async (slug: string) => {
  const res = await getArticleBySlug(slug);
  return res;
};

// Fonction pour générer les paramètres statiques
export async function generateStaticParams() {
  try {
    const slugs = await getAllArticleSlugs();
    return slugs.map((slug: string) => ({
      slug: slug
    }));
  } catch (error) {
    console.error('Erreur lors de la génération des paramètres statiques:', error);
    return [];
  }
}

const ArticlePage = async ({ params }: { params: any }) => {
  const { slug } = params;
  const data = await getData(slug);

  

  return (
    <div className='mt-[100px] mx-5'>
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

      {/* Ajout du composant Article1 si le slug correspond */}
      {slug === "comment-commencer-ta-reconversion-professionnelle" && (
        <Article1 />
      )}
      {slug === "comment-trouver-le-job-de-tes-reves-a-20-ans-guide-ultime-pour-jeunes-en-reconversion" && (
        <Article2 />
      )}
      {slug === "top-10-des-metiers-cool-pour-2024-que-tu-dois-connaitre" && (
        <Article3 />
      )}


      
    </div>
  );
};

export default ArticlePage;
