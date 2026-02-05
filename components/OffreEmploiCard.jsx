import React from 'react';
import Link from 'next/link';

/**
 * Composant carte pour afficher une offre d'emploi France Travail
 */
const OffreEmploiCard = ({ offre, session }) => {
  const {
    titre,
    entreprise,
    lieu,
    contrat,
    salaire,
    datePublication,
    description,
    url,
    alternance,
    experience,
  } = offre;

  return (
    <div className="offer-card bg-gray-100 p-5 rounded-lg w-full text-left hover:shadow-md transition-shadow">
      {/* Badge alternance */}
      {alternance && (
        <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full mb-2">
          Alternance
        </span>
      )}

      {/* Titre et entreprise */}
      <h3 className="text-xl font-bold text-gray-800 mb-1">{titre}</h3>
      <p className="text-violet font-medium mb-2">{entreprise}</p>

      {/* Informations principales */}
      <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-600">
        {/* Lieu */}
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{lieu}</span>
        </div>

        {/* Type de contrat */}
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>{contrat}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{datePublication}</span>
        </div>
      </div>

      {/* Salaire si disponible */}
      {salaire && salaire !== 'Non communiqué' && (
        <p className="text-sm text-gray-700 mb-2">
          <span className="font-medium">Salaire:</span> {salaire}
        </p>
      )}

      {/* Expérience */}
      {experience && experience !== 'Non précisé' && (
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Expérience:</span> {experience}
        </p>
      )}

      {/* Bouton d'action */}
      {session ? (
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-2 bg-violet text-white rounded-lg hover:bg-purple-800 transition-colors flex items-center gap-2">
            Voir l'offre
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </Link>
      ) : (
        <Link href="/me-connecter">
          <button className="px-4 py-2 bg-violet text-white rounded-lg hover:bg-purple-800 transition-colors">
            Connecte-toi pour voir l'offre
          </button>
        </Link>
      )}
    </div>
  );
};

export default OffreEmploiCard;
