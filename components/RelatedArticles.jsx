import Link from 'next/link';

export const RelatedArticles = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mt-12 border-t border-gray-200 pt-8">
      <h2 className="font-sans text-2xl font-bold mb-6">Articles connexes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article._id}
            href={`/blog/${article.slug}`}
            className="group flex flex-col gap-2 rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-violet">
              {article.category}
            </span>
            <p className="font-sans font-bold leading-snug group-hover:underline">
              {article.title}
            </p>
            <p className="text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
            <span className="text-xs text-gray-400 mt-1">
              {article.readingTime} min de lecture
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
