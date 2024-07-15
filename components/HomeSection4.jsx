import React from 'react';

export const HomeSection4 = () => {

  const testimonials = [
    {
      name: "Hugo",
      age: 24,
      text: "Je ne m’épanouissais plus dans mon travail de manip radio, j’ai décidé d’écouter mon coeur et changer ! Meilleurs décision.",
      image: "/media/hugo-image.svg",
    },
    {
      name: "Ben",
      age: 25,
      text: "Sans diplome je suis passée d’employé polyvalent à designer d’intérieur. Ma reconversion à été le meilleur choix !",
      image: "/media/ben-image.svg",
    },
    {
      name: "Ian",
      age: 22,
      text: "J’étais perdu dans mon changement. Un outil comme Jobmi est pour moi d’une grande utilité.",
      image: "/media/ian-image.svg",
    },
    {
      name: "Lia",
      age: 25,
      text: "Ayant eu un enfant à 20 ans, je suis devenue secrétaire médicale. Mais à 25 ans j’ai pris la décision de changer de boulot et de suivre une formation.",
      image: "/media/lia-image.svg",
    },
  ];

  return (
    <div className="py-10 font-sans w-full">
      <div className="my-10 mx-auto max-w-[700px] text-center">
        <h1 className="font-sans text-5xl font-bold">
          Témoignages
        </h1>
        <img src="/media/home-temoignage-soulignage-titre.svg" alt="Trait soulignant le titre de l'article" className="mx-auto mt-2" />
      </div>

      <div className="font-sans flex flex-col lg:flex-row items-center justify-around my-10 sm:mx-20 p-5">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-[#FCFCFC] px-6 m-3 rounded-lg max-w-xs sm:w-[40%] lg:w-[25%] ${index % 2 === 0 ? 'mt-[-50px]' : 'mt-[50px]'}`}
          >
            <p className="absolute text-purple-600 text-[90px] mt-0">“</p>
            <div className="justify-end">
              <img src={testimonial.image} alt={testimonial.name} className="mx-auto w-24 object-cover" />
            </div>
            
            <p className="text-[#B07DFF] text-base mb-4 ">{testimonial.text}</p>
            
            <div className="text-right mt-4">
              <p className="text-[#B07DFF] font-september text-6xl">{testimonial.name}, {testimonial.age} ans</p>
              <p className="text-purple-600 text-[90px] text-right leading-none">”</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection4;
