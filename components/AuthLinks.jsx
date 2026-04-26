"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const AuthLinks = ({ onNavigate }) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const authLinkClass =
    "rounded-lg border border-[#04192F]/15 bg-transparent px-4 py-2 text-sm font-semibold text-[#04192F] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6500FF]/40 hover:text-[#6500FF] hover:shadow-md hover:shadow-[#6500FF]/15 active:translate-y-0";
  const dropdownLinkClass =
    "block rounded-xl px-3 py-2 text-sm font-medium text-[#04192F] transition-colors duration-200 hover:bg-[#6500FF]/8 hover:text-[#6500FF]";

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const profileMenuItems = [
    {
      href: "/profil#mes-informations",
      label: "Mes informations",
      description: "Profil, coordonnées et résultat sauvegardé",
    },
    {
      href: "/profil#ma-progression",
      label: "Ma progression",
      description: "Terrain, expériences vécues et niveau Jobmi",
    },
    {
      href: "/outils",
      label: "Mes outils",
      description: "Retrouver tous les outils utiles de Jobmi",
    },
  ];

  const handleSignOut = () => {
    setIsOpen(false);
    onNavigate?.();
    signOut({ callbackUrl: "/" });
  };

  return (
    <>
      {session ? (
        <>
          <div ref={containerRef} className="relative hidden lg:block">
            <button
              type="button"
              className={`menu-item inline-flex items-center gap-2 ${authLinkClass}`}
              aria-expanded={isOpen}
              aria-haspopup="menu"
              onClick={() => setIsOpen((open) => !open)}
            >
              Profil
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M5.25 7.5 10 12.25 14.75 7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </button>

            <div
              className={`absolute right-0 top-[calc(100%+0.75rem)] w-[320px] rounded-3xl border border-[#04192F]/10 bg-white p-3 shadow-[0_24px_64px_rgba(4,25,47,0.14)] transition-all duration-200 ${
                isOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
            >
              <div className="mb-2 rounded-2xl bg-[#F7F5FF] px-4 py-3">
                <p className="text-sm font-semibold text-[#04192F]">
                  {session.user?.name || "Ton espace Jobmi"}
                </p>
                {session.user?.email ? (
                  <p className="mt-1 text-xs text-[#04192F]/55">{session.user.email}</p>
                ) : null}
              </div>

              <div className="space-y-1">
                {profileMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={dropdownLinkClass}
                    onClick={() => {
                      setIsOpen(false);
                      onNavigate?.();
                    }}
                  >
                    <span className="block">{item.label}</span>
                    <span className="mt-1 block text-xs font-normal text-[#04192F]/55">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-3 border-t border-[#04192F]/8 pt-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-[#B42318] transition-colors duration-200 hover:bg-[#FEF3F2]"
                  onClick={handleSignOut}
                >
                  Déconnexion
                  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
                    <path
                      d="M7.5 4.75H5.75a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1H7.5M10.75 6.5 14.25 10m0 0-3.5 3.5M14.25 10H7.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-[#04192F]/10 bg-[#FCFCFF] p-4 lg:hidden">
            <div className="mb-3">
              <p className="text-sm font-semibold text-[#04192F]">Profil</p>
              {session.user?.email ? (
                <p className="mt-1 text-xs text-[#04192F]/55">{session.user.email}</p>
              ) : null}
            </div>

            <div className="space-y-1">
              {profileMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={dropdownLinkClass}
                  onClick={onNavigate}
                >
                  <span className="block">{item.label}</span>
                  <span className="mt-1 block text-xs font-normal text-[#04192F]/55">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="mt-3 flex w-full items-center justify-between rounded-xl border border-[#FECACA] px-3 py-2 text-sm font-semibold text-[#B42318] transition-colors duration-200 hover:bg-[#FEF3F2]"
              onClick={handleSignOut}
            >
              Déconnexion
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
                <path
                  d="M7.5 4.75H5.75a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1H7.5M10.75 6.5 14.25 10m0 0-3.5 3.5M14.25 10H7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <Link
          className={authLinkClass}
          href="/me-connecter"
          onClick={onNavigate}
        >
          Me connecter
        </Link>
      )}
    </>
  );
};
