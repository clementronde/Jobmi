import React from 'react';

export const HomeSection4 = () => {

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

  return (
    <div className="py-10 font-sans w-full">
      <div className="my-10 mx-auto max-w-[700px] text-center">
        <h1 className="font-sans text-5xl font-bold">
          Ils ont testé avant de choisir
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
