'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import OffreEmploiCard from './OffreEmploiCard';

/**
 * Composant pour afficher les offres France Travail sur la page stage-et-formation
 * Avec recherche par métier et filtres
 */
const OffresEmploiFranceTravail = ({ session }) => {
  const [offres, setOffres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchMetier, setSearchMetier] = useState('');
  const [selectedMetier, setSelectedMetier] = useState('Développeur');
  const [filterType, setFilterType] = useState('all'); // 'all', 'alternance', 'stage'

  // Liste des métiers populaires pour la recherche rapide
  const metiersPopulaires = [
    'Développeur',
    'Designer graphique',
    'Community manager',
    'Infirmier',
    'Commercial',
    'Chef de projet',
    'Data Scientist',
    'Technicien de maintenance',
    'Guide touristique',
    'Psychologue',
  ];

  useEffect(() => {
    fetchOffres(selectedMetier);
  }, [selectedMetier]);

  const fetchOffres = async (metier) => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        action: 'metier',
        metier: metier,
        maxResults: '12',
      });

      const response = await fetch(`/api/france-travail?${params.toString()}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la récupération des offres');
      }

      const data = await response.json();
      setOffres(data.offres || []);
    } catch (err) {
      console.error('Erreur fetch offres:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchMetier.trim()) {
      setSelectedMetier(searchMetier.trim());
    }
  };

  // Filtrer les offres
  const filteredOffres = offres.filter((offre) => {
    if (filterType === 'alternance') return offre.alternance;
    if (filterType === 'stage') return offre.contrat?.toLowerCase().includes('stage');
    return true;
  });

  return (
    <div className="px-5 sm:px-20">
      {/* Barre de recherche */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto">
          <input
            type="text"
            value={searchMetier}
            onChange={(e) => setSearchMetier(e.target.value)}
            placeholder="Rechercher un métier..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-violet text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors"
          >
            Rechercher
          </button>
        </form>
      </div>

      {/* Métiers populaires */}
      <div className="mb-6">
        <p className="text-center text-gray-600 mb-3">Métiers populaires :</p>
        <div className="flex flex-wrap justify-center gap-2">
          {metiersPopulaires.map((metier) => (
            <button
              key={metier}
              onClick={() => setSelectedMetier(metier)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedMetier === metier
                  ? 'bg-violet text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {metier}
            </button>
          ))}
        </div>
      </div>

      {/* Filtres */}
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setFilterType('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filterType === 'all'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Toutes les offres
        </button>
        <button
          onClick={() => setFilterType('alternance')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filterType === 'alternance'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Alternance
        </button>
        <button
          onClick={() => setFilterType('stage')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filterType === 'stage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Stages
        </button>
      </div>

      {/* Titre de la section */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Offres pour : <span className="text-violet">{selectedMetier}</span>
      </h2>

      {/* État de chargement */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet"></div>
          <p className="mt-4 text-gray-600">Recherche d'offres en cours...</p>
        </div>
      )}

      {/* Message d'erreur */}
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6 max-w-2xl mx-auto text-center">
          <p className="text-yellow-800 font-medium">
            Les offres France Travail ne sont pas disponibles pour le moment.
          </p>
          <p className="text-sm text-yellow-600 mt-2">
            Vérifiez que les credentials API sont bien configurés.
          </p>
        </div>
      )}

      {/* Liste des offres */}
      {!loading && !error && filteredOffres.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredOffres.map((offre, index) => (
            <OffreEmploiCard key={offre.id || index} offre={offre} session={session} />
          ))}
        </div>
      )}

      {/* Aucune offre */}
      {!loading && !error && filteredOffres.length === 0 && offres.length > 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg">
            Aucune offre {filterType === 'alternance' ? "d'alternance" : filterType === 'stage' ? 'de stage' : ''} trouvée pour "{selectedMetier}".
          </p>
          <button
            onClick={() => setFilterType('all')}
            className="mt-4 text-violet hover:underline font-medium"
          >
            Voir toutes les offres
          </button>
        </div>
      )}

      {!loading && !error && offres.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg">
            Aucune offre trouvée pour "{selectedMetier}".
          </p>
          <p className="text-gray-500 mt-2">
            Essaie avec un autre métier ou vérifie l'orthographe.
          </p>
        </div>
      )}

      {/* Lien vers France Travail */}
      {!loading && (
        <div className="mt-10 text-center">
          <a
            href={`https://candidat.francetravail.fr/offres/recherche?motsCles=${encodeURIComponent(selectedMetier)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Voir toutes les offres sur France Travail
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default OffresEmploiFranceTravail;
