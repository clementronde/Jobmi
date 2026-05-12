"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { trackCtaClick } from "@/lib/analytics";

export default function Connexion() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [callbackUrl, setCallbackUrl] = useState("/");
  const [fromRiasec, setFromRiasec] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setCallbackUrl(params.get("callbackUrl") || "/");
      setFromRiasec(params.get("from") === "riasec");

      const authError = params.get("error");
      if (authError === "google_auth_failed") {
        setError("La connexion Google n'a pas pu être finalisée. Réessaie dans quelques instants.");
      } else if (authError) {
        setError("La connexion n'a pas abouti. Réessaie ou utilise ton email et mot de passe.");
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (fromRiasec) {
      trackCtaClick("Connexion email après test", "/me-connecter", {
        cta_destination: callbackUrl,
        cta_type: "login",
        auth_method: "email",
        signup_source: "riasec_result",
      });
    }

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      if (response?.ok) {
        router.push(callbackUrl);
      } else if (response?.error) {
        setError("Invalid email or password. Please try again!");
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred. Please try again!");
    }
  };

  const loginWithGoogle = () => {
    if (fromRiasec) {
      trackCtaClick("Connexion Google après test", "/me-connecter", {
        cta_destination: callbackUrl,
        cta_type: "login",
        auth_method: "google",
        signup_source: "riasec_result",
      });
    }
    signIn("google", { callbackUrl });
  };

  return (
    <div className='mt-[90px] bg-cover bg-center font-sans py-10' style={{backgroundImage: 'url(/media/background-connexion-inscription.svg)'}}>

      <div className='my-20 mx-auto sm:max-w-[700px]'>
        <h1 className="font-sans text-5xl font-bold text-center">Content de vous revoir !</h1>
        <span className='items-end'>
          <Image src="/media/trait-article-titre.svg" alt="" width={560} height={20} className="w-[80%] mx-auto h-auto" />
        </span>
      </div>

      {fromRiasec && (
        <div className="mx-auto mb-8 max-w-[760px] rounded-2xl border border-[#E9E1FF] bg-white/85 p-5 text-center shadow-[0_18px_45px_rgba(4,25,47,0.06)]">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF]">
            Après ton test
          </p>
          <p className="text-sm leading-6 text-[#465160]">
            Connecte-toi ou crée ton compte pour retrouver ton score RIASEC et les métiers qui te
            correspondent directement dans ton profil.
          </p>
        </div>
      )}

      <p className="bg-violet p-2 text-center w-fit mx-auto text-white rotate-[5deg] font-bold text-2xl ">Passioné de maintenant</p>
      <div className="bg-[#D9D9D9]/[21%] mx-auto lg:max-w-[800px] sm:max-w-[600px] max-w-[95%] rounded-lg p-5 mb-10">
        <div>
          <div className="mx-auto flex flex-col items-center">
            <p className="text-center my-2">
              Tu n'as pas de compte ? <Link href={`/inscription?callbackUrl=${encodeURIComponent(callbackUrl)}&from=${fromRiasec ? 'riasec' : 'default'}`} className='cursor-pointer'>Inscris-toi</Link>
            </p>
            <button type="button" className="google cursor-pointer" onClick={loginWithGoogle}> 
              <Image src="/media/google-icon.svg" alt="Icone du logo Google" width={20} height={20} />
              </button>
          </div>

          <div className="flex flex-row my-2 gap-4 mx-auto justify-center">
            <Image src="/media/ligne-inscription.svg" alt="" width={200} height={2} className="w-2/5 h-auto" />
            <p>OU</p>
            <Image src="/media/ligne-inscription.svg" alt="" width={200} height={2} className="w-2/5 h-auto" />
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
              <Image src="/media/cta-blog-arrow.svg" alt="" width={28} height={28} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
