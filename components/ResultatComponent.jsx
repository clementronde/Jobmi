import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { stagesFormations } from '../services/quizService';
import OffresEmploiList from './OffresEmploiList';


export const ResultatComponent = ({ results, image, departement }) => {
    const { data: session } = useSession();

    const selectedOffers = stagesFormations[image] || [];

    // Extraire les noms des métiers depuis les résultats du quiz
    // results est un array de tuples [metierName, score]
    const topMetiers = results ? results.map(r => r[0]) : [];

    return (
        <div className="results-container max-w-5xl mx-auto p-8 rounded-lg text-center">
            {/* Section principale avec résultats */}
            <div className="flex sm:flex-row flex-col gap-10 mb-10">
                <div>
                    <header className="results-header mb-4">
                        <h1 className="text-3xl font-bold text-gray-800">BRAVO pour ton GRAND pas !</h1>
                        <p className="text-lg text-gray-600 mt-2">Pour accéder à tes résultats...<br />...crées ton compte</p>
                    </header>
                    <div id="result-card" className="result-card mb-8">
                        <Image src={image} alt="Resultat Image" width={300} height={400} className="mx-auto" />
                    </div>

                    {/* Affichage des top 3 métiers */}
                    {topMetiers.length > 0 && (
                        <div className="top-metiers bg-gray-50 rounded-lg p-4 mb-4">
                            <h3 className="font-bold text-lg mb-2">Tes métiers correspondants :</h3>
                            <div className="flex flex-col gap-2">
                                {topMetiers.slice(0, 3).map((metier, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="bg-violet text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                                            {index + 1}
                                        </span>
                                        <span className="font-medium">{metier}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <section className="offers-section mt-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Découvre nos offres faites pour toi !
                        </h2>
                        <p className="text-lg mb-2">
                            Voici une sélection de stages qui correspond aux résultats de ton test.
                        </p>
                        {session ? (
                        <Link
                        href="/stage-et-formation"
                        className="rounded-xl px-4 py-2 flex items-center gap-2 bg-black text-white font-semibold w-fit h-fit mx-auto mb-8"
                        >
                        Plus de stage ?
                        <img
                            src="/media/cta-blog-arrow.svg"
                            alt="arrow-icon"
                            className="w-7"
                        />
                        </Link>
                    ) : (
                        <Link href="/me-connecter">
                        <button className="rounded-xl px-4 py-2 flex items-center gap-2 bg-black text-white font-semibold w-fit h-fit mx-auto mb-8">
                                Inscris-toi !
                            <img
                            src="/media/cta-blog-arrow.svg"
                            alt="arrow-icon"
                            className="w-7"
                            />
                        </button>
                        </Link>
                    )}
                    <div className="offers flex flex-col gap-2 justify-around sm:mx-0 mx-2">
                        {selectedOffers.map((offer, index) => (
                        <div key={index} className="offer-card bg-gray-100 p-5 rounded-lg w-full sm:text-left">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {offer.title}
                            </h3>
                            <div className='flex flex-row gap-1 my-1'>
                            <img src="/media/test/icon-stopwatch.svg" alt="Icone d'un chronomètre" />
                            <p className="text-lg">{offer.duration}</p>
                            </div>
                            {session ? (
                            <Link href={offer.link} target="_blank" rel="noopener noreferrer">
                                <button className="px-4 py-2 bg-violet text-white rounded-lg hover:bg-purple-800">Découvrir</button>
                            </Link>
                            ) : (
                            <Link href="/me-connecter">
                                <button className="px-4 py-2 bg-violet text-white rounded-lg hover:bg-purple-800">Découvrir</button>
                            </Link>
                            )}
                        </div>
                        ))}
                    </div>
                    </section>
                </div>
            </div>

            {/* Section Offres France Travail */}
            {topMetiers.length > 0 && (
                <div className="france-travail-section border-t pt-8">
                    <OffresEmploiList
                        metiers={topMetiers}
                        departement={departement}
                        showAlternance={true}
                        maxOffres={9}
                        title="Offres d'emploi France Travail pour toi"
                    />
                </div>
            )}
        </div>
    );
}
