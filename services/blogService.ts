import { articles } from '../data/articles';
import { Article } from '../models/Article';

export const getArticles = async (): Promise<Article[]> => {
  return articles;
};

export const getAllArticleSlugs = async (): Promise<string[]> => {
  return articles.map((a) => a.slug);
};

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const article = articles.find((a) => a.slug === slug);
  if (!article) throw new Error(`Article introuvable : ${slug}`);
  return article;
};

export const getLatestArticle = async (): Promise<Article> => {
  return articles[articles.length - 1];
};

export const getRelatedArticles = async (
  currentArticleId: string,
  category: string
): Promise<Article[]> => {
  return articles.filter(
    (a) => a._id !== currentArticleId && a.category === category
  );
};
