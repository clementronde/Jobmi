import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeSection6 = () => {
  return (
    <div className="relative bg-[#0A1F44] py-20 rounded-t-2xl text-center text-white mt-[230px]"> 
      <div className="absolute inset-x-0 top-0 transform translate-y-1/2"> 
        <div className='flex justify-center items-center'>
        <Image 
          src="/media/Section6.png" 
          alt="Decorative Box Image" 
          width={800} 
          height={200} 
          objectFit="contain" 
          className='sm:-mt-[320px] -mt-[150px]'
        />
        </div>
      </div>
      <div className="mt-32 flex flex-col justify-center">
        <h2 className="text-4xl font-bold ">
          Prêts à <span className='underline-tilted decoration-[#a29bfe]'>transformer</span> ta carrière ?
        </h2>
        <div className='flex justify-center items-center'>
          <Link
              target="_blank"
              rel="noopener noreferrer"
              href="/test"
              className="rounded-xl px-4 py-2 mt-[40px] flex items-center gap-2 bg-white text-black font-semibold"
            >
              Trouver un job
              <img
                src="/media/cta-blog-arrow.svg"
                alt="arrow-icon"
                className="w-7"
              />
            </Link>
          </div>
      </div>
    </div>
  );
};

export default HomeSection6;