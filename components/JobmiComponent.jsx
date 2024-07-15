// components/JobmiComponent.js

import React from 'react';

export const JobmiComponent = () => {
  return (
    <div className="bg-white sm:p-10 flex sm:flex-row flex-col w-[100vw] justify-center sm:px-10">
      <div className="flex-1 sm:w-[50vw]">
        <h1 className="text-3xl font-bold mb-4">Une équipe de reconvertis</h1>
        <p className="text-lg">
          Alors, Jobmi, c'est quoi ? Bah, on est une bande de gens qui ont changé de taf. On vient tous de coins et de trucs différents, avec des parcours super variés. Mais on a tous un point en commun : on veut créer l'outil qui nous aurait grave aidé à trouver notre chemin plus facilement. C'est pour ça qu'on a lancé Jobmi !
        </p>
      </div>
      <div className="w-[50vw] flex justify-center items-center">
        <div className='sm:w-[30vw] w-full sm:h-64 h-auto bg-gray-200 ml-10'></div>
      </div>
    </div>
  );
}


