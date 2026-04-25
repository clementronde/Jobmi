"use client";

import React, { useRef, useState } from 'react';

export const HomeSection4 = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Camille",
      age: 19,
      text: "J'hésitais entre une licence éco et une école de com. Le test m'a donné des pistes, puis une journée d'immersion m'a aidée à choisir sans partir au hasard.",
      image: "/media/hugo-image.svg",
    },
    {
      name: "Nora",
      age: 18,
      text: "Je pensais vouloir travailler dans le soin. En observant le quotidien d'une pro, j'ai compris ce qui me plaisait vraiment et ce que je ne voulais pas.",
      image: "/media/ben-image.svg",
    },
    {
      name: "Yanis",
      age: 21,
      text: "Après une première année qui ne me correspondait pas, Jobmi m'a aidé à remettre de l'ordre dans mes envies et à tester une piste concrète avant de me réinscrire.",
      image: "/media/ian-image.svg",
    },
    {
      name: "Léa",
      age: 20,
      text: "L'atelier découverte m'a montré le vrai rythme du métier. Ce n'était plus une idée floue : je savais enfin si je pouvais me projeter dans cette voie.",
      image: "/media/lia-image.svg",
    },
  ];

  const handleScroll = () => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const firstCard = carousel.querySelector("[data-testimonial-card]");
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = parseFloat(window.getComputedStyle(carousel).columnGap || "0");
    const nextIndex = Math.round(carousel.scrollLeft / (cardWidth + gap));

    setActiveIndex(Math.max(0, Math.min(testimonials.length - 1, nextIndex)));
  };

  const scrollToTestimonial = (index) => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelectorAll("[data-testimonial-card]")[index];
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <div className="w-full py-10 font-sans">
      <div className="mx-auto my-10 max-w-[700px] px-5 text-center">
        <h1 className="font-sans text-4xl font-bold sm:text-5xl">
          Ils ont testé avant de choisir
        </h1>
        <img src="/media/home-temoignage-soulignage-titre.svg" alt="Trait soulignant le titre de l'article" className="mx-auto mt-2" />
      </div>

      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="mb-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 font-sans [scrollbar-width:none] sm:gap-6 sm:px-8 lg:mx-20 lg:mb-10 lg:grid lg:grid-cols-4 lg:items-start lg:overflow-visible lg:p-5 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            data-testimonial-card
            className={`relative flex min-h-[390px] w-[82vw] shrink-0 snap-center flex-col rounded-lg bg-[#FCFCFC] px-6 py-6 shadow-[0_14px_35px_rgba(4,25,47,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(101,0,255,0.12)] sm:w-[44vw] lg:w-auto lg:min-h-[430px] lg:max-w-xs ${index % 2 === 0 ? 'lg:-mt-[50px]' : 'lg:mt-[50px]'}`}
          >
            <p className="absolute left-5 top-2 text-[88px] leading-none text-purple-600/80">“</p>
            <div className="relative z-10 flex justify-end">
              <img src={testimonial.image} alt={testimonial.name} className="mx-auto h-24 w-24 object-contain" />
            </div>
            
            <p className="relative z-10 mb-4 mt-3 text-base leading-relaxed text-[#B07DFF]">{testimonial.text}</p>
            
            <div className="relative z-10 mt-auto text-right">
              <p className="font-september text-[4rem] text-[#B07DFF] sm:text-[4.5rem]">{testimonial.name}, {testimonial.age} ans</p>
              <p className="text-right text-[82px] leading-none text-purple-600/80">”</p>
            </div>
            
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 lg:hidden">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            aria-label={`Voir le témoignage de ${testimonial.name}`}
            onClick={() => scrollToTestimonial(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-8 bg-[#6500FF]"
                : "w-2.5 bg-[#6500FF]/25 hover:bg-[#6500FF]/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSection4;
