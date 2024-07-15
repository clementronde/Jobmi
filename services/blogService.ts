import axios from 'axios';

const API_URL = "https://lp-jobmi-ab6b9d72e9ba.herokuapp.com/api";

export const getArticles = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    throw error;
  }
};


export const getAllArticleSlugs = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles/slugs`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des slugs:', error);
    throw error;
  }
};


export const getArticleBySlug = async (slug: string) => {
  try {
    const response = await axios.get(`${API_URL}/articles/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'article:', error);
    throw error;
  }
};

export const getLatestArticle = async () => {
  try {
    const response = await axios.get(`${API_URL}/articles/latest`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération du dernier article:', error);
    throw error;
  }
};

export const getRelatedArticles = async (currentArticleId: string, category: string) => {
  try {
    const response = await axios.get(`${API_URL}/articles/related`, {
      params: { currentArticleId, category }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles connexes:', error);
    throw error;
  }
};


