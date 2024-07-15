// components/ValuesComponent.js

import React from 'react';
import {Accordion} from "./Accordion"

export const ValuesComponent = () => {
  return (
    <div className="bg-white p-10 flex flex-col md:flex-row">
      <div className="flex-1 mb-8 md:mb-0">
        <h2 className="sm:text-3xl text-4xl font-bold mb-4">Nos valeurs</h2>
        <img src='/media/Vector1087.png' alt='vector' />
      </div>
      <Accordion />
    </div>
  );
};


