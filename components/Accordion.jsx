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
        "Chez Jobmi, on n'arrête jamais ! Toujours en train de bouger, d'innover, de s'adapter. On est comme des piles Duracell, toujours prêts à réagir et à proposer les meilleures solutions, même quand ça change tout le temps.",
    },
    {
      title: 'Engager',
      content:
        "Chez Jobmi, on n'arrête jamais ! Toujours en train de bouger, d'innover, de s'adapter. On est comme des piles Duracell, toujours prêts à réagir et à proposer les meilleures solutions, même quand ça change tout le temps.",
    },
    {
      title: 'Ouvert',
      content:
        "Chez Jobmi, on n'arrête jamais ! Toujours en train de bouger, d'innover, de s'adapter. On est comme des piles Duracell, toujours prêts à réagir et à proposer les meilleures solutions, même quand ça change tout le temps.",
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
