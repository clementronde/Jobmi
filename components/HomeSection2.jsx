import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="accordion-item flex flex-col">
    <div 
      className={`accordion-header flex justify-between items-center sm:px-4 py-4 cursor-pointer ${isOpen ? 'bg-purple-600 text-white' : 'bg-white text-black'}`} 
      onClick={onClick}
    >
      <span>{title}</span>
      <span>{isOpen ? '-' : '+'}</span>
    </div>
    {isOpen && (
      <div className="accordion-body bg-purple-600 text-white px-4 py-4 font-light">
        {children}
      </div>
    )}
  </div>
);

export const HomeSection2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className='py-10 font-sans w-screen flex justify-center'>

      <div className='flex sm:flex-row flex-col w-full sm:max-w-screen-lg'>

        <div className='w-full sm:w-1/2 flex justify-center items-center'>
          <img
              src="/media/img-accueil-section-2.svg"
              alt="Dummy 1"
              className="h-auto w-full max-w-[450px] object-cover rounded-lg"
          />
        </div>

  



      <div className='w-full sm:w-1/2 flex justify-center items-center'>

        <div className="accordion bg-[#F8F8F8] rounded-xl w-full max-w-[450px] px-4 py-4 text-black font-semibold flex flex-col gap-4">
            <AccordionItem 
              title="1 Test de découverte de métier" 
              isOpen={openIndex === 0} 
              onClick={() => handleToggle(0)}
            >
              Réponds à <b>5 questions simples</b> pour découvrir les métiers qui te correspondent.
            </AccordionItem>
            <AccordionItem 
              title="2 Trouves un métier" 
              isOpen={openIndex === 1} 
              onClick={() => handleToggle(1)}
            >
              Réponds à <b>5 questions simples</b> pour découvrir les métiers qui te correspondent.
            </AccordionItem>  
            <AccordionItem 
              title="3 Stage de découverte" 
              isOpen={openIndex === 2} 
              onClick={() => handleToggle(2)}
            >
              Réponds à <b>5 questions simples</b> pour découvrir les métiers qui te correspondent.
            </AccordionItem>  
          </div>
        </div>


      </div>
      
      
    </div>

  );
};

export default HomeSection2;
