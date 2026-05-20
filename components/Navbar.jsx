"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AuthLinks } from "./AuthLinks";

const navLinkClass =
  "relative rounded-lg px-2 py-2 text-sm font-semibold text-[#04192F] transition-colors duration-300 after:absolute after:bottom-1 after:left-2 after:h-[2px] after:w-[calc(100%-1rem)] after:origin-left after:scale-x-0 after:rounded-full after:bg-[#6500FF] after:transition-transform after:duration-300 hover:text-[#6500FF] hover:after:scale-x-100";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-part fixed left-0 right-0 top-0 z-50 flex w-screen items-center justify-between border-b border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(245,243,255,0.84)_52%,rgba(255,255,255,0.9))] py-2 shadow-[0_12px_36px_rgba(4,25,47,0.08)] backdrop-blur-xl transition-all duration-300 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(101,0,255,0.35),transparent)]">
      <div className="relative z-10 mx-auto flex w-full max-w-screen-xl items-center justify-between px-6 font-sans lg:px-12">
        <Link
          href="/"
          className="navbar-item flex items-center justify-center transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src="/media/logo-jobmi.svg"
            alt="Logo"
            className="w-40 md:w-36 h-auto"
          />
        </Link>
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="menu-button rounded-lg p-2 transition-all duration-300 hover:bg-[#6500FF]/10 active:scale-95"
          >
            <img
              src={isMenuOpen ? '/media/close-menu-mobile.svg' : '/media/menu-mobile.svg'}
              alt={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="h-8 w-8 transition-transform duration-300"
            />
          </button>
        </div>
        <div className={`menu-links absolute left-0 top-16 flex w-full flex-col items-center gap-5 overflow-hidden border-b border-[#04192F]/10 bg-white shadow-[0_18px_40px_rgba(4,25,47,0.12)] transition-all duration-300 lg:relative lg:left-auto lg:top-auto lg:flex lg:max-h-none lg:w-auto lg:flex-row lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${isMenuOpen ? 'max-h-96 translate-y-0 p-6 opacity-100' : 'pointer-events-none max-h-0 -translate-y-2 p-0 opacity-0'} lg:pointer-events-auto lg:translate-y-0 lg:opacity-100`}>
          <Link href="/tester-un-metier" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
            Tester un métier
          </Link>
          <Link href="/reconversion" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
            Reconversion
          </Link>
          <Link href="/stage-et-formation" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
            Stages & immersions
          </Link>
          <Link href="/a-propos" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
            À propos
          </Link>
          <Link href="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <Link
            href="/test"
            className="menu-item rounded-lg bg-[#04192F] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#04192F]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6500FF] hover:shadow-lg hover:shadow-[#6500FF]/25 active:translate-y-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Test gratuit
          </Link>
          <AuthLinks onNavigate={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </div>
  )
}
