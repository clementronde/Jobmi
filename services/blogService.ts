import { articles } from '../data/articles';
import { Article } from '../models/Article';

const isPublished = (article: Article): boolean =>
  new Date(article.datePublished) <= new Date();

export const getArticles = async (): Promise<Article[]> => {
  return articles.filter(isPublished);
};

export const getAllArticleSlugs = async (): Promise<string[]> => {
  return articles.filter(isPublished).map((a) => a.slug);
};

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const article = articles.find((a) => a.slug === slug && isPublished(a));
  if (!article) throw new Error(`Article introuvable : ${slug}`);
  return article;
};

export const getLatestArticle = async (): Promise<Article> => {
  const published = articles.filter(isPublished);
  return published[published.length - 1];
};

export const getRelatedArticles = async (
  currentArticleId: string,
  category: string
): Promise<Article[]> => {
  const currentArticle = articles.find((a) => a._id === currentArticleId);
  if (!currentArticle) return [];

  const currentTags = new Set(
    [currentArticle.category, ...(currentArticle.tags || [])].map((tag) =>
      tag.toLowerCase()
    )
  );

  return articles
    .filter((a) => a._id !== currentArticleId && isPublished(a))
    .map((article) => {
      const tags = [article.category, ...(article.tags || [])].map((tag) =>
        tag.toLowerCase()
      );
      const sharedTags = tags.filter((tag) => currentTags.has(tag)).length;
      const categoryScore = article.category === category ? 4 : 0;
      const tagScore = sharedTags * 2;

      return {
        article,
        score: categoryScore + tagScore,
      };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ article }) => article);
};
