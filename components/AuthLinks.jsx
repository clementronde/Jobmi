"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export const AuthLinks = ({ onNavigate }) => {
  const { data: session } = useSession();
  const authLinkClass =
    "rounded-lg border border-[#04192F]/15 bg-transparent px-4 py-2 text-sm font-semibold text-[#04192F] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6500FF]/40 hover:text-[#6500FF] hover:shadow-md hover:shadow-[#6500FF]/15 active:translate-y-0";

  return (
    <>
      {session ? (
        <Link
          href="/profile"
          className={`menu-item ${authLinkClass}`}
          onClick={onNavigate}
        >
          Mon profil
        </Link>
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
