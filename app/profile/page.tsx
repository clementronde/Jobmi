"use client";

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { getUserData } from '@/services/userService';

const Profile = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (session && session.user && session.user.email) {
        try {
          const data = await getUserData(session.user.email);
          setFormData(data);
        } catch (error) {
          console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
        }
      }
    };

    fetchUserData();
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return <div>Vous devez être connecté pour accéder à cette page.</div>;
  }

  const displayInfo = (info: string, placeholder: string) => {
    return info ? info : placeholder;
  };

  return (
    <div className="mt-[90px] max-w-screen-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Profil</h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="font-semibold">Prénom</label>
          <p className="p-2 border rounded-lg">
            {displayInfo(formData.firstName, "Vous n'avez pas encore renseigné votre prénom")}
          </p>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Nom</label>
          <p className="p-2 border rounded-lg">
            {displayInfo(formData.lastName, "Vous n'avez pas encore renseigné votre nom")}
          </p>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Email</label>
          <p className="p-2 border rounded-lg">
            {displayInfo(formData.email, "Vous n'avez pas encore renseigné votre email")}
          </p>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Ville</label>
          <p className="p-2 border rounded-lg">
            {displayInfo(formData.city, "Vous n'avez pas encore renseigné votre ville")}
          </p>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Téléphone</label>
          <p className="p-2 border rounded-lg">
            {displayInfo(formData.phone, "Vous n'avez pas encore renseigné votre numéro de téléphone")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
