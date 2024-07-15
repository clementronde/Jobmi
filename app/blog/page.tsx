"use client";

import React, { useEffect, useState } from 'react';
import { Featured } from '../../components/Featured';
import { CategoryList } from '../../components/CategoryList';
import { CardList } from '../../components/CardList';
import { getArticles, getLatestArticle } from '../../services/blogService';
import { Article } from '../../models/Article';

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [lastArticle, setLastArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchLastArticle();
  }, []);

  useEffect(() => {
    if (lastArticle) {
      fetchArticles();
    }
  }, [lastArticle]);

  const fetchArticles = async () => {
    try {
      const articles: Article[] = await getArticles();
      console.log('Fetched Articles:', articles);

      if (lastArticle) {
        const filteredArticles = articles.filter(article => article._id !== lastArticle._id);
        console.log('Filtered Articles:', filteredArticles);
        setArticles(filteredArticles);
      } else {
        setArticles(articles);
      }

      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
      setLoading(false);
    }
  };

  const fetchLastArticle = async () => {
    try {
      const article: Article = await getLatestArticle();
      console.log('Last Article:', article);
      setLastArticle(article);
    } catch (error) {
      console.error('Erreur lors de la récupération du dernier article:', error);
    }
  };

  return (
    <div className='mt-[90px]'>
      <div className='col-span-12'>
        <div className="title-part relative mb-12">
          <h1 className="font-sans text-5xl font-bold text-center">
            Les blogs pour dénicher des {" "}
            <span className="relative inline-block">
              <span className="relative z-20 font-september font-normal text-9xl text-violet">pépites</span>
            </span>
          </h1>
        </div>
      </div>
      <Featured article={lastArticle} />
      <div>
        {loading ? (
          <p>Chargement des articles...</p>
        ) : (
          <CardList articles={articles} />
        )}
      </div>
    </div>
  );
}
