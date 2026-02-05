'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import OffreEmploiCard from './OffreEmploiCard';

/**
 * Composant pour afficher une liste d'offres d'emploi France Travail
 * avec chargement dynamique basé sur les métiers du quiz
 */
const OffresEmploiList = ({
  metiers = [],
  departement = null,
  showAlternance = true,
  maxOffres = 6,
  title = "Offres d'emploi pour toi",
}) => {
  const { data: session } = useSession();
  const [offres, setOffres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'alternance', 'stages'

  useEffect(() => {
    if (metiers.length > 0) {
      fetchOffres();
    } else {
      setLoading(false);
    }
  }, [metiers, departement]);

  const fetchOffres = async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        action: 'quiz',
        metiers: metiers.join(','),
        maxResults: maxOffres.toString(),
      });

      if (departement) {
        params.append('departement', departement);
      }

      const response = await fetch(`/api/france-travail?${params.toString()}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la récupération des offres');
      }

      const data = await response.json();

      // Aplatir les offres de tous les métiers
      const allOffres = [];
      for (const [metier, result] of Object.entries(data)) {
        if (result.offres && Array.isArray(result.offres)) {
          result.offres.forEach((offre) => {
            allOffres.push({ ...offre, metierSource: metier });
          });
        }
      }

      setOffres(allOffres);
    } catch (err) {
      console.error('Erreur fetch offres:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filtrer les offres selon l'onglet actif
  const filteredOffres = offres.filter((offre) => {
    if (activeTab === 'alternance') return offre.alternance;
    if (activeTab === 'stages') return offre.contrat?.toLowerCase().includes('stage');
    return true;
  });

  // Compteurs pour les onglets
  const countAlternance = offres.filter((o) => o.alternance).length;
  const countStages = offres.filter((o) => o.contrat?.toLowerCase().includes('stage')).length;

  if (metiers.length === 0) {
    return null;
  }

  return (
    <div className="offres-emploi-section mt-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <img
          src="/media/france-travail-logo.png"
          alt="France Travail"
          className="h-8 w-auto"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {title}
      </h2>

      {/* Onglets de filtrage */}
      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === 'all'
              ? 'bg-violet text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Toutes ({offres.length})
        </button>
        {showAlternance && (
          <button
            onClick={() => setActiveTab('alternance')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'alternance'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Alternance ({countAlternance})
          </button>
        )}
        <button
          onClick={() => setActiveTab('stages')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === 'stages'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Stages ({countStages})
        </button>
      </div>

      {/* État de chargement */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet"></div>
          <p className="mt-4 text-gray-600">Recherche d'offres en cours...</p>
        </div>
      )}

      {/* Message d'erreur */}
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
          <p className="text-yellow-800">
            <span className="font-medium">Note:</span> Les offres France Travail ne sont pas disponibles pour le moment.
          </p>
          <p className="text-sm text-yellow-600 mt-1">
            Découvre nos offres partenaires ci-dessous.
          </p>
        </div>
      )}

      {/* Liste des offres */}
      {!loading && !error && filteredOffres.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredOffres.map((offre, index) => (
            <OffreEmploiCard key={offre.id || index} offre={offre} session={session} />
          ))}
        </div>
      )}

      {/* Aucune offre trouvée */}
      {!loading && !error && filteredOffres.length === 0 && offres.length > 0 && (
        <div className="text-center py-6 bg-gray-50 rounded-lg">
          <p className="text-gray-600">
            Aucune offre {activeTab === 'alternance' ? "d'alternance" : activeTab === 'stages' ? 'de stage' : ''} trouvée pour ce filtre.
          </p>
          <button
            onClick={() => setActiveTab('all')}
            className="mt-2 text-violet hover:underline"
          >
            Voir toutes les offres
          </button>
        </div>
      )}

      {!loading && !error && offres.length === 0 && (
        <div className="text-center py-6 bg-gray-50 rounded-lg">
          <p className="text-gray-600">
            Aucune offre trouvée pour tes métiers. Essaie d'élargir ta recherche !
          </p>
        </div>
      )}

      {/* Lien vers plus d'offres */}
      {!loading && offres.length > 0 && (
        <div className="mt-6 text-center">
          <a
            href={`https://candidat.francetravail.fr/offres/recherche?motsCles=${encodeURIComponent(metiers[0])}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Voir plus d'offres sur France Travail
            <svg
              className="w-5 h-5"
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
          </a>
        </div>
      )}
    </div>
  );
};

export default OffresEmploiList;
