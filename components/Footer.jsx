"use client";

import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-[100%] footer-part grid grid-cols-9 gap-4 mt-[2px] px-6 sm:px-16 bg-black py-20 bottom-0 left-0 right-0">
      <div className="col-span-9 sm:col-span-3 flex flex-col">
        <Link href="/a-propos" className="text-white font-inter underline sm:mt-15">
          A PROPOS
        </Link>
        <Link href="/contact" className="text-white font-inter underline sm:mt-15">
          CONTACT
        </Link>
        <Link href="/blog" className="text-white font-inter underline sm:mt-15">
          BLOG
        </Link>
        <Link href="/politique-de-confidentialite" className="text-white font-inter underline sm:mt-15">
          POLITIQUE DE CONFIDENTIALITÉ
        </Link>
        <Link href="/cgu" className="text-white font-inter underline sm:mt-15">
          CGU
        </Link>
        <Link href="/mention-legales" className="text-white font-inter underline sm:mt-15">
          MENTION LÉGALES
        </Link>
        <Link href="https://drive.google.com/drive/folders/1re4tpEimaPreuEc4-qHPCnmllJSosFBo?usp=share_link" target="_blank" rel="noopener noreferrer" className="text-white font-inter underline sm:mt-15">
          PRESSE
        </Link>
        <p className="text-white font-inter sm:mt-15">
          @DCParis
        </p>
      </div>

      <div className="col-span-9 sm:col-span-3">
        <h5 className="text-white font-inter font-semibold">RÉSEAUX SOCIAUX</h5>
        <ul className="mb-0 p-0 my-4 sm:my-10 flex items-center gap-4 social-menus">
          <Link
            href="https://www.instagram.com/jobmifr?igsh=MXQyczl6cHlka2s2bw=="
            target="_blank"
            rel="noopener noreferrer"
            title='Instagram'
          >
            <li className="text-white">
              <FaInstagram className="text-2xl" />
            </li>
          </Link>
          <Link
            href="https://www.tiktok.com/@jobmifr?_t=8n1bHZwV2fY&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            title='TikTok'
          >
            <li className="text-white">
              <FaTiktok className="text-2xl" />
            </li>
          </Link>
          <Link
            href="https://www.linkedin.com/company/jobmipro/"
            target="_blank"
            rel="noopener noreferrer"
            title='LinkedIn'
          >
            <li className="text-white">
              <FaLinkedinIn className="text-2xl" />
            </li>
          </Link>
        </ul>
      </div>

      <div className="col-span-9 sm:col-span-3">
        <h5 className="text-white font-inter font-semibold">REJOINDRE</h5>
        <a target="_blank" rel="noreferrer" href="https://626063d8.sibforms.com/serve/MUIFACI_ugihEQiP7m7SmyLz7QszuC5wEK0W_nn2cHLbezW92oq3Gi_M7-5mIHV3oA9bk8VpaPa5q5OmsC4xxwhAAIDAz5LafA4Of6WYGOVAYgPggEk5SH6YYlarS5QAKTm_pucc1dXASOy6scm8cBdqdnUuW0Ms3FUJBfgzGv9XucQ_FwwJIFFVrEDqaJu_1batPvIPyrYuxn4K" className="bg-white text-black flex items-center gap-3 rounded-xl px-4 py-2 font-medium font-inter no-underline mt-3 w-fit">
          Inscris-toi à la waitinglist
          <img
            src="/media/arrow-icon.svg"
            alt="arrow-icon"
            className="w-5 h-5 sm:w-7 sm:h-7"
          />
        </a>
        <p className="font-inter text-white mt-4 text-xs">
          En soumettant votre e-mail, vous acceptez que Jobmi puisse vous
          envoyer des messages électroniques promotionnels contenant des offres,
          des mises à jour et d'autres messages marketing. Vous comprenez que
          Jobmi peut utiliser vos informations conformément à sa&nbsp;
          <span className="font-bold underline underline-white">
            <Link href="/politique-de-confidentialite">
              politique de confidentialité
            </Link>
          </span>
          .
        </p>
      </div>
    </div>
  )
}
