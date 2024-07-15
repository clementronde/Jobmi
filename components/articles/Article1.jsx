import Link from 'next/link'
import React from 'react'

export const Article1 = () => {
  return (
    <div className='sm:mx-5 mx-1'>
        
        <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Reconversion professionnelle :</p>
          <p className='text-justify'>
            Deux mots qui peuvent à la fois exciter et intimider. Tu rêves de changer de carrière, mais tu ne sais pas par où commencer ? Cet article te guidera à travers les étapes essentielles pour démarrer ta reconversion professionnelle avec succès et qui sait, tu trouveras peut-être une surprise au milieu de cet article.
          </p>
        </div>
      </div>


      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Introduction</h2>
        <p>
          Reconversion professionnelle : deux mots qui peuvent à la fois exciter et intimider. Tu rêves de changer de carrière, mais tu ne sais pas par où commencer ? Cet article te guidera à travers les étapes essentielles pour démarrer ta reconversion professionnelle avec succès et qui sait, tu trouveras peut-être une surprise au milieu de cet article.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py:2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche pointant vers le titre" />
        <h2 className='text-4xl font-bold text-center'>
          Pourquoi envisager une reconversion professionnelle ?
        </h2>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          Avant de te lancer dans une reconversion professionnelle, il est crucial de bien réfléchir à tes motivations et de t’assurer que ce changement est vraiment nécessaire et bénéfique pour toi. Voici quelques raisons courantes qui poussent les gens à changer de carrière :
        </p>
        <li>
          Insatisfaction professionnelle : Tu t’ennuies ou tu te sens frustré dans ton travail actuel.
        </li>
        <li>
          Manque de perspectives d'évolution : Tu ne voyez pas d'opportunités de progression ou d'avancement dans ton poste actuel.
        </li>
        <li>
          Passion non réalisée : Tu as découvert une nouvelle passion que tu souhaites transformer en carrière.
        </li>
        <li>
          Recherche de sens : Tu veux un travail qui ait plus de sens et d'impact sur la société.
        </li>
        <li>
          Équilibre vie professionnelle/vie personnelle : Tu cherches un métier qui te permette de mieux concilier ta vie professionnelle et personnelle.
        </li>
      </div>

      <div className='font-sans flex flex-col lg:flex-row items-center my-10 sm:mx-20 p-5'>
        <div className='flex-shrink-0 mb-5 lg:mb-0 lg:mr-10'>
          <img className='h-auto w-full max-w-[400px] object-cover' src="/media/img-femme-carriere.svg" alt="Personne réfléchissant à sa carrière" />
        </div>
        <div>
          <h2 className='sm:text-2xl text-4xl sm:text-left text-center font-bold '>
            Étape 1 : Faire un bilan de compétences
          </h2>
          <p className='my-7'>
            Un bilan de compétences est une étape clé pour toute reconversion professionnelle. Il t’aide à identifier tes compétences actuelles, tes intérêts et tes valeurs. Un bilan de compétences complet comprend généralement :
          </p>
          <div className='space-y-4'>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Une analyse de votre parcours professionnel :
              </h3>
              <p>
                Identifier tes compétences acquises et tes expériences significatives.
              </p>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Une évaluation de tes compétences transférables :
              </h3>
              <p>
                Compétences qui peuvent être appliquées dans d'autres domaines ou métiers.
              </p>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Une exploration de tes intérêts et motivations :
              </h3>
              <p>
                Comprendre ce qui te passionne et te motive.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className='font-sans max-w-[700px] mx-auto text-center'>
        <p>
          Si tu souhaites réaliser un bilan de compétences en ligne, tu trouveras sur le site <a className='underline' target="_blank" rel="noreferrer" href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/modalite/resultats?q=%7B%22ou%22:%7B%22modality%22:%22A_DISTANCE%22%7D,%22debutPagination%22:1,%22nombreOccurences%22:6,%22quoi%22:%22bilan%20de%20comp%C3%A9tence%22,%22quoiReferentiel%22:null,%22certifications%22:null,%22contexteFormation%22:%22ACTIVITE_PROFESSIONNELLE%22%7D">Mon Compte Formation</a> la liste des bilans de compétences en ligne disponible. Les filtres sont disponibles afin d’obtenir un résultat plus personnalisé en fonction de tes besoins.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Étape 2 : Identifier les métiers qui te correspond
        </h2>
        <span className=''>
          <img className='sm:w-[400px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait soulignant le titre de l'article" />
        </span>
      </div>


      <div className='font-sans sm:mx-20 my-10'>
        <div>
          <p className='mb-10'>
            Après avoir identifié tes compétences et tes intérêts, il est temps de chercher des métiers qui correspondent à ton profil. Pour cela, plusieurs méthodes peuvent être utilisées :
        </p>
        </div>
        <div className='space-y-10 sm:mx-20 mx-5'>
          {/* Method 1 */}
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>01</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-4'>
                Tests de carrière en ligne : <span className='font-normal'>Utilisez des plateformes comme Jobmi pour passer des tests qui vous orientent vers des métiers adaptés à vos compétences et intérêts.</span>
              </p>
            </div>
          </div>
          <div className='mb-5 '>
            <img className='w-full mx-auto lg:max-w-[600px]' src="/media/img-article-interface-test.svg" alt="Interface de test de carrière sur jobmi + lien follow" />
          </div>
          {/* <!-- Method 2 --> */}
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>02</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold'>
                Recherche en ligne : <span className='font-normal'>Utilise des sites de recherche d'emploi, des forums et des blogs pour découvrir des métiers intéressants.</span>
              </p>
            </div>
          </div>
          {/* <!-- Method 3 --> */}
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>03</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold'>
                Formations professionnelles : <span className='font-normal'>Cherchez des formations financées par France Travail ou des organismes de formation continue.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
        Étape 3 : Se Former
        </h2>
        <span className='bottom-0 inset-x-0'>
          <img className='sm:w-[300px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait soulignant le titre de l'article" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          <span className='font-bold'>La reconversion professionnelle</span> nécessite souvent de nouvelles compétences. Que ce soit par le biais de formations courtes, de diplômes ou de certifications, l'apprentissage est une étape cruciale.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-between sm:mx-[250px] md:mx-[150px] my-10 font-sans gap-5'>
        <p className='sm:max-w-[400px]'>
          <span className='font-bold'>Formations en ligne :</span> Plateformes comme Coursera, Udemy et LinkedIn Learning offrent une variété de cours en ligne.
        </p>
        <p className='sm:max-w-[400px]'>
          <span className='font-bold'>Formations professionnelles :</span> Cherchez des formations financées par <a target="_blank" rel="noreferrer" className='underline' href="https://candidat.francetravail.fr/formations/recherche?range=0-9&tri=0">France Travail</a> ou des organismes de formation continue.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Téléchargez notre E-book Gratuit
        </h2>
        <span className=''>
          <img className='sm:w-[400px] w-[250px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait soulignant le titre de l'article" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          Pour ne louper aucune étape pour ta reconversion professionnelle, télécharges notre eBook gratuit "Guide Complet de la Reconversion Professionnelle". Ce guide vous fournira des conseils détaillés et des ressources pour réussir votre transition professionnelle.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Étape 4 : Gagner de l'Expérience
        </h2>
        <span className=''>
          <img className='sm:w-[370px] w-[250px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait soulignant le titre de l'article" />
        </span>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between sm:mx-10 sm:my-10 font-sans gap-20'>
        <div className='lg:w-2/3'>
          <p className='mb-4'>
            Obtenir de l'expérience dans ton nouveau domaine par le biais de stages, de bénévolat, ou de projets personnels est inestimable.
          </p>
          <p>
            Cette expérience pratique t'aidera à renforcer tes compétences et à améliorer ton CV.
          </p>
        </div>
        <div className='lg:w-1/3 flex items-center'>
          <Link href="/stage-et-formation" className='flex gap-2 text-1xl'>
            
            Découvrir les stages de Jobmi
            <img className='sm:ml-2 w-5' src="/media/blog-CTA-fleche.svg" alt="Flèche" />
            
          </Link>
          
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Étape 5 : Réseauter
        </h2>
        <span className=''>
          <img className='w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait soulignant le titre de l'article" />
        </span>
      </div>
    
      <div className='font-sans sm:mx-20'>
        <p>
          Le réseautage est essentiel dans toute carrière, et encore plus lorsque tu changes de voie. Participes à des événements professionnels, rejoins des groupes sur <a className='underline' href="https://www.linkedin.com/company/jobmipro/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, et parles de tes ambitions à ton entourage.
        </p>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          Commencer une reconversion professionnelle peut sembler intimidant, mais avec un plan clair et des ressources adéquates, tu peux réussir. Suis ces étapes et prends le temps de bien te préparer pour une transition réussie vers une carrière qui te passionne.
        </p>
      </div>


    </div>
  )
}
