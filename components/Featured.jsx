"use client";


import Link from 'next/link';
import React from 'react'

export const Featured = ({ article }) => {
  return (
    
    <div className='font-sans'>
      
      {article ? (
        <div className='flex flex-col lg:flex-row my-10 sm:mx-20 p-5'>
          <div className='flex-shrink-0 sm:mb-5 lg:mb-0 lg:mr-10 overflow-hidden sm:w-[450px] sm:h-[450px]'>
            <img className='object-cover sm:w-fit sm:h-full lg:w-fit lg:h-full w-fit h-auto' src={`${article.imageCover}`} alt={`${article.imageAlt}`} />
          </div>
          <div className='relative bg-[#F3F3F3] p-8 rounded-lg w-fit h-[450px] lg:w-full flex flex-col justify-end items-start'>
            <img
              src="/media/blog-arrow.svg"
              alt="card-arrow"
              className="w-24 absolute top-3 left-0 sm:top-8 sm:flex; lg:flex hidden"
            />

              <h2 className='sm:text-3xl text-4xl sm:text-left text-center font-bold sm:w-[600px]'>
                {article.title}
              </h2>
              <p className='my-7 sm:w-[600px]'>
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
