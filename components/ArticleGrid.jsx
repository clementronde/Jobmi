import React from 'react';
import Link from 'next/link';

export const ArticleGrid = ({ articles }) => {
  console.log('ArticleGrid articles:', articles);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 sm:mx-20 font-sans">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="bg-[#F3F3F3] overflow-hidden">
            <img className="w-full h-[350px] object-cover mx-auto" src={article.imageCover} alt={article.imageAlt} />
            <div className="p-4 mx-auto">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700 my-4">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="rounded-xl px-4 py-2 flex items-center gap-2 bg-[#04192F] text-white font-semibold w-fit">
                Voir l'article
                <img
                  src="/media/cta-blog-arrow.svg"
                  alt="arrow-icon"
                  className="w-7"
                />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun article trouvé</p>
      )}
    </div>
  );
};
