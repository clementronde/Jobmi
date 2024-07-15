"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { AuthLinks } from './AuthLinks'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-part flex items-center justify-between fixed top-0 left-0 right-0 transition-all duration-300 py-2 bg-slate-50 z-50 w-screen">
      <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12 font-sans flex items-center justify-between">
        <Link href="/" className="navbar-item flex items-center justify-center">
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
            aria-label="Toggle menu"
            className="menu-button"
          >
            <img
              src={isMenuOpen ? '/media/close-menu-mobile.svg' : '/media/menu-mobile.svg'}
              alt={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="w-8 h-8"
            />
          </button>
        </div>
        <div className={`menu-links flex-col lg:flex lg:flex-row items-center gap-5 ${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-16 lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-slate-50 lg:bg-transparent p-6 lg:p-0`}>
          <Link href="/stage-et-formation" className="menu-item">
            Stage et formation
          </Link>
          <Link href="/a-propos" className="menu-item">
            À propos
          </Link>
          <Link href="/contact" className="menu-item">
            Contact
          </Link>
          <Link href="/test" className="menu-item py-2 px-4 bg-[#04192F] text-white rounded-lg">
            Fais le test
          </Link>
          <AuthLinks />
        </div>
      </div>
    </div>
  )
}
