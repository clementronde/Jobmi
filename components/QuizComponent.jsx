'use client';

import React, { useState, useEffect } from 'react';
import Sortable from 'sortablejs';
import { ResultatComponent } from '../components/ResultatComponent';
import { calculateResults, getTopResults, getResultImage } from '../services/quizService';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const QuizComponent = () => {
  const data = [
    { img: '/media/test/test-caroussel-1.svg', alt: 'Step 1' },
    { img: '/media/test/test-caroussel-2.svg', alt: 'Step 2' },
    { img: '/media/test/test-caroussel-3.svg', alt: 'Step 3' },
    { img: '/media/test/test-caroussel-4.svg', alt: 'Step 4' }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userName, setUserName] = useState('');
  const [userDepartement, setUserDepartement] = useState('');
  const [results, setResults] = useState(null);
  const [resultImage, setResultImage] = useState('');
  const [progress, setProgress] = useState(0);
  
  
  const questions = [
    {
      id: 1,
      title: 'Question 1',
      text: 'Quelles activités te plaisent le plus ?',
      options: [
        'Aider et conseiller les autres',
        'Créer et concevoir de nouvelles choses',
        'Analyser des données et résoudre des problèmes',
        'Travailler en équipe sur des projets',
        'Gérer et organiser des tâches ou événements'
      ]
    },
    {
      id: 2,
      title: 'Question 2',
      text: 'Quel type d’environnement de travail préfères-tu ?',
      options: [
        'Un bureau calme et structuré',
        'Un espace créatif et flexible',
        'Un environnement dynamique avec beaucoup de contacts humains',
        'Un cadre en extérieur ou avec des déplacements',
        'Un laboratoire ou un atelier technique'
      ]
    },
    {
      id: 3,
      title: 'Question 3',
      text: 'Quelle est ta plus grande force professionnelle ?',
      options: [
        'Ma créativité et mon imagination',
        'Mon empathie et ma capacité à écouter',
        'Mon esprit analytique et ma rigueur',
        'Ma capacité à collaborer et à motiver les autres',
        'Mon sens de l’organisation et de la gestion'
      ]
    },
    {
      id: 4,
      title: 'Question 4',
      text: 'Quel secteur d’activité t’intéresse le plus ?',
      options: [
        'Art et design',
        'Santé et bien-être',
        'Technologie et informatique',
        'Commerce et marketing',
        'Ingénierie et sciences'
      ]
    },
    {
      id: 5,
      title: 'Question 5',
      text: 'Quels sont tes centres d’intérêt en dehors du travail ou des études ?',
      options: [
        'Pratiquer un sport ou une activité physique',
        'Lire des livres, regarder des films ou écouter de la musique',
        'Participer à des activités artistiques (peinture, dessin, théâtre)',
        'Jouer à des jeux vidéo ou coder des applications',
        'Voyager et découvrir de nouveaux endroits et cultures'
      ]
    }
  ];

  const questionTitles = [
    "{varprénom}, un petit pas pour l’homme, un grand pas pour la reconversion ! 🧑‍🚀",
    "Vers un nouveau job, et au delà 🚀",
    "À mi-chemin de ta nouvelle carrière, fonce {varprénom} 🏁",
    "Pret à découvrir ton futur métier, {varprénom} ? 🎉",
    "{varprénom}, tu es..."
  ];

  useEffect(() => {
    const sortableElements = questions.map((_, index) => document.getElementById(`sortable-${index}`));
    sortableElements.forEach((sortableElement, index) => {
      if (sortableElement) {
        new Sortable(sortableElement, {
          animation: 150,
          onEnd: function () {
            updateRankings(sortableElement, index);
          }
        });
      }
    });
  }, [currentQuestionIndex]);


  const updateRankings = (sortableElement, questionIndex) => {
    const answers = sortableElement.querySelectorAll('.answer');
    answers.forEach((answer, index) => {
      const rankingInput = answer.querySelector('input[type="hidden"]');
      const orderNumber = answer.querySelector('.order-number');
      if (rankingInput) {
        rankingInput.value = index + 1;
        orderNumber.textContent = index + 1;
      }
    });
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserName(e.target['user-name'].value);
    // Extraire le code département (2 premiers chiffres ou le code complet)
    const deptInput = e.target['user-departement'].value;
    const deptCode = deptInput.replace(/\D/g, '').substring(0, 2) || deptInput;
    setUserDepartement(deptCode);
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('title-part').style.display = 'none';
    document.getElementById('time-call').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    setProgress(0); // Initial progress
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setProgress(((currentQuestionIndex - 1) / questions.length) * 100);
    }
  };

  const handleCalculateResults = () => {
    const answers = questions.map((_, index) => {
      const sortableElement = document.getElementById(`sortable-${index}`);
      if (!sortableElement) return [];
      return Array.from(sortableElement.querySelectorAll('.answer'))
        .map(answer => {
          const input = answer.querySelector('input[type="hidden"]');
          return input ? parseInt(input.value) : 0;
        });
    });
  
    const metierScores = calculateResults(answers);
    const topResults = getTopResults(metierScores);
  
    setResults(topResults);
  
    const resultImage = getResultImage(topResults[0][0]);
    setResultImage(resultImage);
  
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
  };
  
  

  return (
      <div className="quiz-container font-sans">
        <div className='sm:my-10 py-5 mx-auto max-w-[800px] text-center items-center sm:px-0 px-5' id='title-part' style={{ display: 'block' }}>
          <h1 className="sm:text-5xl text-4xl font-bold sm:py-0 py-2">
            Ton changement de vie commence maintenant !
          </h1>
          <div className='mx-10'>
            <h2 className="text-lg mt-2 font-bold">
              Réalise LE test qui peut t’aider à y voir plus clair !
            </h2>
            <p>
              Après ce petit test, tu auras la possibilité de répondre à des questions supplémentaires pour affiner ton résultat.
            </p>
          </div>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='mx-auto flex flex-row gap-2 mb-3 sm:items-left items-center' id='time-call' style={{ display: 'flex' }}>
            <img src="/media/test/icon-stopwatch.svg" alt="Icone d'un chronomètre" />
            <p className='font-bold'>
              T'en a pour 3 min
            </p>
          </div>
          
          <div className="quiz-content text-center bg-[#FAFAFA] rounded-lg sm:p-8 py-10">
            <div id="start-screen" className="start-screen flex sm:flex-row flex-col justify-between items-center">
              <div className="sm:start-left start sm:w-1/2 mb-5 sm:px-0 px-5">
                <p className="sm:text-left text-center text-lg mb-4 font-bold">
                  Pour une expérience encore plus immersive renseigne les informations demandées !
                </p>
                <p className='text-s sm:text-left text-center'>
                  Pour pouvoir postuler à nos offres, il faudra que tu créer un compte.
                </p>
                <form id="user-info-form" onSubmit={handleFormSubmit} className="space-y-4 sm:my-0 my-5">
                  <div className="form-group">
                    <label htmlFor="user-name" className="block font-semibold mb-1 text-left">Ton petit prénom</label>
                    <input type="text" id="user-name" name="user-name" placeholder="Écrit ton prénom ici..." required className="w-full px-4 sm:py-2 py-3 border rounded-lg bg-[#D9D9D9] placeholder:text-white" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user-departement" className="block font-semibold mb-1 text-left">Où-tu souhaites bosser ?</label>
                    <input type="text" id="user-departement" name="user-departement" placeholder="Écrit ton département ici..." required className="w-full px-4 sm:py-2 py-3 border rounded-lg bg-[#D9D9D9] placeholder:text-white" />
                  </div>
                  <button type="submit" className="px-4 py-2 bg-[#04192F] text-white rounded-xl hover:bg-blue-700 flex gap-2 font-semibold w-fit mt-2 sm:mx-0 mx-auto">Je commence le test <img src="/media/test/flèche.png" alt="" className="w-7" /></button>
                </form>
                <p className="mt-4">Tu as un compte ? <a href="/me-connecter" className="font-bold">Connecte toi</a></p>
              </div>
              <div className="start-right sm:w-1/2 w-full text-center">
                <Slider {...carouselSettings}>
                  {data.map((item, index) => (
                    <div key={index} className='pt-8 px-4 rounded-xl'>
                      <div className="essay-box-content relative">
                        <div className="essay-img-box">
                          <img src={item.img} alt={item.alt} />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>


            <div id="quiz-screen" className="quiz-screen mx-1" style={{ display: 'none' }}>
              <div className='sm:my-10 py-5 mx-auto max-w-[800px] text-center items-center sm:px-0 px-5'>
                <h1 className="sm:text-5xl text-4xl font-bold sm:py-0 py-2">
                  {questionTitles[currentQuestionIndex].replace("{varprénom}", userName)}
                </h1>
              </div>
              <div className="progress-container text-center mb-4 relative">
                <div className="progress-text absolute top-0 left-1/2 transform -translate-x-1/2 text-purple-600">{progress}%</div>
                <div className="progress-bar w-full h-1 bg-gray-300 rounded overflow-hidden relative">
                  <div className="progress-bar-fill h-full bg-purple-600" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
              <form id="career-test">
              {questions.map((question, index) => (
                <div key={question.id} className={`question ${index === currentQuestionIndex ? 'block' : 'hidden'}`}>
                  <div className='flex flex-col mt-8 mb-4 items-start'>
                    <div className='flex flex-row items-center gap-2 mb-3'>
                      <p className="bg-violet p-1 rounded-lg text-white">{question.title}</p>
                      <p className="font-bold">{question.text}</p>
                    </div>
                    <p className='text-s'>Classer par ordre de préférence de 1 à 5.</p>
                  </div>
                  <div id={`sortable-${index}`} className="answers sortable space-y-2">
                    {question.options.map((option, idx) => (
                      <div key={idx} className="answer flex justify-between items-center p-2 bg-gray-100 rounded cursor-move">
                        <span className="order-number font-bold text-purple-600">{idx + 1}</span>
                        <label className="flex-1 ml-2">{option}</label>
                        <input type="hidden" name={`question${index + 1}option${idx + 1}`} value={idx + 1} />
                      </div>
                    ))}
                  </div>
                  <div className="navigation mt-4 text-center">
                    {index > 0 && (
                      <button type="button" className="px-4 py-2 bg-[#D3D6D9] text-white rounded-lg mr-2" onClick={handlePreviousQuestion}>
                        <img src="/media/test/flèche gauche.png" alt="Flèche allant vers la gauche pour retourner" width={15} height={15} className="inline-block mr-2" />Retour
                      </button>
                    )}
                    {index < questions.length - 1 ? (
                      <button type="button" className="px-4 py-2 bg-[#04192F] text-white rounded-lg" onClick={handleNextQuestion}>
                        Suivant <img src="/media/test/flèche.png" alt="Flèche allant vers la droite pour passer au suivant" width={15} height={15} className="inline-block ml-2" />
                      </button>
                    ) : (
                      <button type="button" className="px-4 py-2 bg-violet text-white rounded-lg" onClick={handleCalculateResults}>
                        Voir les résultats <img src="/media/test/flèche.png" alt="" width={15} height={15} className="inline-block ml-2" />
                      </button>
                    )}
                  </div>
                </div>
              ))}

              </form>

            </div>
            <div id="result-screen" className="result-screen" style={{ display: 'none' }}>
              {results && <ResultatComponent results={results} image={resultImage} departement={userDepartement} />}
            </div>
          </div>
        </div>
        
      </div>
  );
}

export default QuizComponent;
