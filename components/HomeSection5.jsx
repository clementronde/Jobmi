"use client";
import Link from "next/link";
import React, { useState } from "react";

export const HomeSection5 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="section5-part bg-[#F5F5F5] px-4 py-12 sm:px-8 lg:py-16">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <img
            src="/media/group_people.png"
            alt="Group of people"
            className="aspect-[4/3] h-auto w-full rounded-lg object-cover shadow-[0_18px_45px_rgba(4,25,47,0.08)] sm:aspect-[16/11]"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <img src="/media/Vector115.png" className="mb-3 w-full max-w-[520px]" alt="vector" />
          <div className="relative w-full max-w-[520px]">
            <img
              src="/media/Rectangle3.png"
              alt="rectangle"
              className="absolute -top-4 left-1/2 h-[54px] w-[140px] -translate-x-1/2 object-contain lg:left-[230px] lg:h-[60px] lg:w-[150px] lg:translate-x-0"
            />
            <h2 className="relative z-10 font-oddlini text-3xl font-bold leading-tight text-black sm:text-4xl">
              Entreprises, proposez une immersion
            </h2>
          </div>
          <p className="mt-5 max-w-[520px] text-base leading-relaxed text-black sm:text-lg">
            Accueillez des jeunes motivés pour leur faire découvrir votre métier,
            vos équipes et la réalité du terrain avant qu'ils choisissent une
            formation.
          </p>
          <Link
            href="/contact"
            className="mt-8 flex h-fit w-fit items-center gap-2 rounded-xl bg-black px-5 py-3 font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#6500FF] hover:shadow-[0_14px_30px_rgba(101,0,255,0.25)] active:translate-y-0"
          >
            En savoir plus
            <img
              src="/media/cta-blog-arrow.svg"
              alt="arrow-icon"
              className="w-7"
            />
          </Link>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="mb-4 text-2xl font-bold text-black sm:text-4xl">
            À lire pour
          </h2>
          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
            <img
              src="/media/Vector1045.png"
              alt="rectangle"
              className="absolute -top-4 left-1/2 h-[54px] w-[140px] -translate-x-1/2 object-contain lg:left-[-10px] lg:h-[60px] lg:w-[150px] lg:translate-x-0"
            />
            <h2 className="relative z-10 font-oddlini text-3xl font-bold leading-tight text-black sm:text-4xl">
            mieux choisir
            </h2>
          </div>
        </div>
        <div className="min-h-[360px] sm:min-h-[460px]">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg shadow-[0_18px_45px_rgba(4,25,47,0.12)] sm:min-h-[460px]">
            <img
              src={isHovered ? "media/group_people.png" : "media/womanonphone.png"}
              alt="Person on phone"
              className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-20 flex min-h-[360px] flex-col justify-end p-6 sm:min-h-[460px] sm:p-9">
              <h2 className="mb-2 max-w-[430px] text-2xl font-bold text-white sm:text-4xl">
                Comment commencer ta reconversion professionnelle ?
              </h2>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.jobmi.fr/blog/comment-commencer-ta-reconversion-professionnelle"
                className="mt-6 flex h-fit w-fit items-center gap-2 rounded-xl bg-black px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6500FF] active:translate-y-0"
              >
                Voir l’article
                <img
                  src="/media/cta-blog-arrow.svg"
                  alt="arrow-icon"
                  className="w-7"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection5;
