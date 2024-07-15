"use client";
import { useSession } from 'next-auth/react';
import { stagesFormations } from '../../services/quizService';
import StageCard from '../../components/StageCard';

export default function StageEtFormation() {
  const { data: session } = useSession();

  return (
    <div className="mt-[120px]">
      <div className="my-10 mx-auto max-w-[700px] text-center">
        <h1 className="font-sans text-5xl font-bold">
          Stages et Formations
        </h1>
        <img src="/media/home-temoignage-soulignage-titre.svg" alt="Trait soulignant le titre de l'article" className="mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 sm:mx-20 font-sans auto-cols-auto">
        {Object.entries(stagesFormations).map(([image, offers]) =>
          offers.map((offer, index) => (
            <StageCard
              key={index}
              image={image}
              title={offer.title}
              duration={offer.duration}
              link={offer.link}
              session={session}
            />
          ))
        )}
      </div>
    </div>
  );
}
