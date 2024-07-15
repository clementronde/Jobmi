import Link from "next/link";
import React, { useState } from "react";

export const HomeSection5 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="section5-part py-10 px-4 sm:px-8 bg-[#F5F5F5]">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 sm:col-span-6">
          <img
            src="/media/group_people.png"
            alt="Group of people"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 ml-11">
          <img src="/media/Vector115.png" className="w-[1100px]" alt="vector" />
          <div className="relative sm:w-[450px] w-full text-center sm:text-left">
            <img
              src="/media/Rectangle3.png"
              alt="rectangle"
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-[200px] h-[60px] w-[150px]"
            />
            <h2 className="sm:text-4xl text-3xl font-bold font-oddlini  relative z-10">
              Enterprise, recrutez !
            </h2>
          </div>
          <p className="text-md sm:text-md text-black mb-4 mt-4 sm:w-[450px]">
            Vous cherchez à accueillir des stagiaires motivés ? Contactez-nous
            pour proposer vos stages et découvrir de véritables talents
            passionnés.
          </p>
          <Link
            href="/contact"
            className="rounded-xl px-4 py-2 mt-[40px] flex items-center gap-2 bg-black text-white font-semibold w-fit h-fit"
          >
            En savoir plus
            <img
              src="/media/cta-blog-arrow.svg"
              alt="arrow-icon"
              className="w-7"
            />
          </Link>
        </div>
        <div className="col-span-12 sm:col-span-6 ml-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-black mb-4">
            Jetez un oeil
          </h2>
          <div className="relative sm:w-[450px] w-full text-center sm:text-left">
            <img
              src="/media/Vector1045.png"
              alt="rectangle"
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-[-10px] h-[60px] w-[150px]"
            />
            <h2 className="sm:text-4xl text-3xl font-bold font-oddlini  relative z-10">
            à l’actualité
            </h2>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 h-[500px]">
          <div className="relative">
            <img
              src={isHovered ? "media/group_people.png" : "media/womanonphone.png"}
              alt="Person on phone"
              className="w-[1100px] h-[500px] rounded-lg absolute z-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            
          </div>
          <div className="relative z-10">
            <h2 className="text-xl sm:text-4xl font-bold text-white mt-[150px] mb-2 w-[300px] ml-9">
              Comment commencer ta reconversion professionnel ?
            </h2>
            <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.jobmi.fr/blog/comment-commencer-ta-reconversion-professionnelle"
            className="rounded-xl px-4 py-2 mt-[40px] ml-9 flex items-center gap-2 bg-black text-white font-semibold w-fit h-fit"
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
  );
};

export default HomeSection5;
