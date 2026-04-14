import type { Metadata } from 'next';
import { Featured } from '../../components/Featured';
import { CardList } from '../../components/CardList';
import { getArticles, getLatestArticle } from '../../services/blogService';

export const metadata: Metadata = {
  title: 'Blog — Conseils Orientation & Reconversion',
  description:
    'Guides pratiques, conseils et ressources pour ton orientation et ta reconversion professionnelle. Articles écrits pour les 18-25 ans.',
  alternates: {
    canonical: 'https://jobmi.fr/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://jobmi.fr/blog',
    title: 'Blog Jobmi — Conseils Orientation & Reconversion',
    description:
      'Guides pratiques, conseils et ressources pour ton orientation et ta reconversion professionnelle.',
  },
};

export default async function Blog() {
  const [allArticles, lastArticle] = await Promise.all([
    getArticles(),
    getLatestArticle(),
  ]);

  const otherArticles = allArticles.filter(
    (article) => article._id !== lastArticle._id
  );

  return (
    <div className='mt-[90px]'>
      <div className='col-span-12'>
        <div className="title-part relative mb-12">
          <h1 className="font-sans text-5xl font-bold text-center">
            Les blogs pour dénicher des{' '}
            <span className="relative inline-block">
              <span className="relative z-20 font-september font-normal text-9xl text-violet">pépites</span>
            </span>
          </h1>
        </div>
      </div>
      <Featured article={lastArticle} />
      <CardList articles={otherArticles} />
    </div>
  );
}
