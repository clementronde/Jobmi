"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import React from 'react';

export const AuthLinks = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <>
      {session ? (
        <>
          <Link href="/profile" className="menu-item bg-[#D9D9D9] rounded-lg py-2 px-4">Mon Profile</Link>
          <button className="menu-item cursor-pointer text-red-600" onClick={handleSignOut}>
            Déconnexion
          </button>
        </>
      ) : (
        <Link className="bg-[#D9D9D9] rounded-lg py-2 px-4" href="/me-connecter">
          Me connecter
        </Link>
      )}
    </>
  );
};
