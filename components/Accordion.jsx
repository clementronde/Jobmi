import { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className={`flex justify-between items-center w-full p-4 focus:outline-none ${isOpen ? 'bg-violet text-white' : 'bg-white text-black'}`}
        onClick={onClick}
      >
        <span className="text-lg font-bold">{title}</span>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-violet text-white">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: 'Dynamique',
      content:
        "On préfère livrer une version imparfaite du test ou d'une fiche métier et l'améliorer avec de vrais retours, plutôt que d'attendre d'avoir « la » solution parfaite avant de la sortir.",
    },
    {
      title: 'Engagé',
      content:
        "On n'est pas neutres sur le sujet : on a tous connu le flou de l'orientation ou d'une reconversion. Jobmi existe pour que les 18-25 ans d'aujourd'hui perdent moins de temps qu'on en a perdu nous-mêmes.",
    },
    {
      title: 'Ouvert',
      content:
        "Le test RIASEC donne des pistes, pas des vérités. On le dit clairement plutôt que de vendre une promesse magique : c'est à toi de comparer, tester et décider.",
    },
  ];

  return (
    <div className="w-full md:w-1/2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
