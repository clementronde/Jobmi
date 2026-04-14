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
  const article = articles.find((a) => a.slug === slug);
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
  return articles.filter(
    (a) => a._id !== currentArticleId && a.category === category
  );
};
