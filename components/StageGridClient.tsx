"use client";
import { useSession } from 'next-auth/react';
import { stagesFormations } from '../services/quizService';
import StageCard from './StageCard';

export default function StageGridClient() {
  const { data: session } = useSession();

  return (
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
  );
}
