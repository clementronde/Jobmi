"use client";
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { stagesFormations } from '../../services/quizService';
import StageCard from '../../components/StageCard';
import OffresEmploiFranceTravail from '../../components/OffresEmploiFranceTravail';

export default function StageEtFormation() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<'partenaires' | 'francetravail'>('partenaires');

  return (
    <div className="mt-[120px]">
      <div className="my-10 mx-auto max-w-[700px] text-center">
        <h1 className="font-sans text-5xl font-bold">
          Stages et Formations
        </h1>
        <img src="/media/home-temoignage-soulignage-titre.svg" alt="Trait soulignant le titre de l'article" className="mx-auto mt-2" />
      </div>

      {/* Onglets de navigation */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab('partenaires')}
          className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
            activeTab === 'partenaires'
              ? 'bg-violet text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Nos partenaires
        </button>
        <button
          onClick={() => setActiveTab('francetravail')}
          className={`px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2 ${
            activeTab === 'francetravail'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          France Travail
        </button>
      </div>

      {/* Contenu des onglets */}
      {activeTab === 'partenaires' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 sm:mx-20 font-sans auto-cols-auto">
          {Object.entries(stagesFormations).map(([image, offers]) =>
            offers.map((offer, index) => (
              <StageCard
                key={`${image}-${index}`}
                image={image}
                title={offer.title}
                duration={offer.duration}
                link={offer.link}
                session={session}
              />
            ))
          )}
        </div>
      ) : (
        <OffresEmploiFranceTravail session={session} />
      )}
    </div>
  );
}
