"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Connexion() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (response?.ok) {
        router.push("/");
      } else if (response?.error) {
        setError("Invalid email or password. Please try again!");
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred. Please try again!");
    }
  };

  const loginWithGoogle = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className='mt-[90px] bg-cover bg-center font-sans py-10' style={{backgroundImage: 'url(/media/background-connexion-inscription.svg)'}}>

      <div className='my-20 mx-auto sm:max-w-[700px]'>
        <h1 className="font-sans text-5xl font-bold text-center">Content de vous revoir !</h1>
        <span className='items-end'>
          <img src="/media/trait-article-titre.svg" alt="Trait soulignant le titre de l'article" className="w-[80%] mx-auto" />
        </span>
      </div>

      <p className="bg-violet p-2 text-center w-fit mx-auto text-white rotate-[5deg] font-bold text-2xl ">Passioné de maintenant</p>
      <div className="bg-[#D9D9D9]/[21%] mx-auto lg:max-w-[800px] sm:max-w-[600px] max-w-[95%] rounded-lg p-5 mb-10">
        <div>
          <div className="mx-auto flex flex-col items-center">
            <p className="text-center my-2">
              Tu n'as pas de compte ? <a href="/inscription" className='cursor-pointer'>Inscris-toi</a>
            </p>
            <button type="button" className="google cursor-pointer" onClick={loginWithGoogle}> 
              <img src="/media/google-icon.svg" alt="Icone du logo Google" className="w-[20px]" />
              </button>
          </div>

          <div className="flex flex-row my-2 gap-4 mx-auto justify-center">
            <img src="/media/ligne-inscription.svg" alt="" className="w-2/5" />
            <p>OU</p>
            <img src="/media/ligne-inscription.svg" alt="" className="w-2/5" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col justify-center" >
            
          <input
              type="email"
              placeholder="Adresse mail"
              name="email"
              className="p-3 m-2 bg-[#DADADA] placeholder:text-black rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
              
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              className="p-3 m-2 bg-[#DADADA] placeholder:text-black rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-red-500 text-center">{error}</p>}
            
            <button type="submit" className="rounded-xl px-4 py-2 my-5 flex items-center gap-2 bg-black text-white font-semibold w-fit h-fit mx-auto cursor-pointer">
              Connexion
              <img
                src="/media/cta-blog-arrow.svg"
                alt="arrow-icon"
                className="w-7"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}