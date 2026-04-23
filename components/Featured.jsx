"use client";


import Link from 'next/link';
import React from 'react'
import { ArticlePreviewVisual } from './ArticlePreviewVisual';

export const Featured = ({ article }) => {
  return (
    
    <div className='font-sans'>
      
      {article ? (
        <div className='mx-auto my-10 flex max-w-screen-xl flex-col gap-6 px-5 sm:px-10 lg:flex-row lg:items-stretch'>
          <div className='lg:w-[42%]'>
            <ArticlePreviewVisual article={article} className="h-[260px] sm:h-[340px] lg:h-full" />
          </div>
          <div className='relative flex min-h-[360px] flex-col items-start justify-end rounded-lg bg-[#F3F3F3] p-8 lg:flex-1'>
            <img
              src="/media/blog-arrow.svg"
              alt="card-arrow"
              className="w-24 absolute top-3 left-0 sm:top-8 sm:flex; lg:flex hidden"
            />

              <p className="mb-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#6500FF]">
                Dernier article
              </p>
              <h2 className='text-center text-3xl font-bold text-[#04192F] sm:text-left lg:max-w-[680px]'>
                {article.title}
              </h2>
              <p className='my-7 max-w-[680px] text-gray-700'>
                {article.excerpt}
              </p>
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
        
          
      ) : (
        <p>Chargement...</p>

      )}

      
    </div>
  )
}
