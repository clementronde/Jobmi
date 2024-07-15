"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser, subscribeToNewsletter } from '../../services/userService';
import { signIn } from "next-auth/react";

export default function Inscription() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    password: '',
    confirmPassword: '',
    phone: '',
    googleId: '' // ajout de googleId pour le cas où il est utilisé
  });

  const [subscribe, setSubscribe] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setPasswordMatch(formData.password === formData.confirmPassword);
  }, [formData.password, formData.confirmPassword]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscribe(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!passwordMatch) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const { confirmPassword, ...dataToSend } = formData; // Exclure confirmPassword des données envoyées

      const data = await registerUser(dataToSend);
      console.log('Utilisateur enregistré:', data);
      
      if (subscribe) {
        await subscribeToNewsletter(formData.email);
      }
      
      router.push("/me-connecter");
    } catch (error) {
      console.error('Erreur pour l\'enregistrement de l\'utilisateur', error);
    }
  };


  const loginWithGoogle = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className='mt-[90px] bg-cover bg-center font-sans py-10' style={{backgroundImage: 'url(/media/background-connexion-inscription.svg)'}}>

      <div className='my-20 mx-auto sm:max-w-[700px]'>
        <h1 className="font-sans text-5xl font-bold text-center">On discute ensemble</h1>
        <span className='items-end'>
          <img src="/media/trait-article-titre.svg" alt="Trait soulignant le titre de l'article" className="w-[80%] mx-auto" />
        </span>
      </div>

      <p className="bg-violet p-2 text-center w-fit mx-auto text-white rotate-[5deg] font-bold text-2xl ">Futur passioné</p>
      <div className="bg-[#D9D9D9]/[21%] mx-auto lg:max-w-[800px] sm:max-w-[600px] max-w-[95%] rounded-lg p-5 mb-10">
        <div>
          <div className="mx-auto flex flex-col items-center">
            <p className="text-center my-2">
              Tu as un compte ? <a href="/me-connecter" className='cursor-pointer'>Connecte toi</a>
            </p>
            <button type="button" onClick={loginWithGoogle} className="google cursor-pointer"> 
              <img src="/media/google-icon.svg" alt="Icone du logo Google" className="w-[20px]" />
              </button>
          </div>

          <div className="flex flex-row my-2 gap-4 mx-auto justify-center">
            <img src="/media/ligne-inscription.svg" alt="" className="w-2/5" />
            <p>OU</p>
            <img src="/media/ligne-inscription.svg" alt="" className="w-2/5" />
          </div>

          <form onSubmit={handleSubmit} >
            <div className='flex flex-col sm:flex-row justify-center'>
              <input type="text" placeholder="Nom" name="lastName" className="p-3 m-2 bg-[#DADADA] placeholder:text-black rounded-lg sm:mx-2" onChange={handleChange} required  />
              <input type="text" placeholder="Prénom" name="firstName" className="p-3 m-2 bg-[#DADADA] placeholder:text-black rounded-lg" onChange={handleChange} required />
            </div>
            <div className='flex flex-col sm:flex-row justify-center'>
              <input type="email" placeholder="Adresse mail" name="email" className="p-3 m-2 bg-[#DADADA] placeholder:text-black rounded-lg" onChange={handleChange} required />
              <input type="text" placeholder="Ville" name="city" className="p-3 m-2 bg-[#DADADA] placeholder:text-black rounded-lg" onChange={handleChange} required />
            </div>
            <div className='flex flex-col sm:flex-row justify-center'>
              <input type="password" placeholder="Mot de passe" name="password" className="p-3 m-2 bg-[#DADADA] placeholder:text-black rounded-lg" onChange={handleChange} required />
              <input type="password" placeholder="Confirmer le mot de passe" name="confirmPassword" className="p-3 m-2 bg-[#DADADA] placeholder:text-black rounded-lg" onChange={handleChange} required />
            </div>
            {!passwordMatch && (
              <p style={{ color: "red", textAlign: "center" }}>Les mots de passe sont différents!</p>
            )}
            <div className='flex flex-col sm:flex-row justify-center'>
              <input type="text" placeholder="N° de téléphone" name="phone" className="p-3 m-2 bg-[#DADADA] placeholder:text-black rounded-lg" onChange={handleChange} required />
            </div>
            <br />
            <div className='sm:mx-10'>
              <input type="checkbox" onChange={handleCheckboxChange} />
              Je m’inscris à la Newsletter pour ne rater aucune actualité
              <br />
              <input type="checkbox" required />*J’ai lu et j’accepte les conditions générales d’utilisations
            </div>
            
            <button type="submit" className="rounded-xl px-4 py-2 my-5 flex items-center gap-2 bg-black text-white font-semibold w-fit h-fit mx-auto cursor-pointer" disabled={!passwordMatch}>
              Je m'inscris
              <img
                src="/media/cta-blog-arrow.svg"
                alt="arrow-icon"
                className="w-7"
              />
            </button>
          </form>
            
          <p className="mx-5 text-xs text-center mb-5">
            En cliquant sur "Je m'inscris" ou en vous inscrivant via Google, vous acceptez les CGU et déclarez avoir pris connaissance de la politique de protection des données du site jobmi.fr. et vous êtes automatiquement
          </p>
          
          

        </div>
      </div>
    </div>
  );
}
