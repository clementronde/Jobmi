import React from 'react'
import Link from 'next/link';

export const Article2 = () => {
  return (
    <div className='sm:mx-5 mx-1'>
  
      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Introduction</h2>
        <p>
        Trouver le job de tes rêves à 20 ans peut sembler un défi de taille, mais c'est tout à fait réalisable avec la bonne approche. <br></br>
        Que tu sois à la recherche d'une reconversion professionnelle ou simplement à la recherche d'un métier qui te passionne, ce guide est fait pour toi. Nous allons te fournir des conseils pratiques et des étapes claires pour t'aider à découvrir et atteindre le métier idéal pour toi.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py:2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche pointant vers le titre" />
        <h2 className='text-4xl font-bold text-center uppercase'>
          Comment trouver le job de tes rêves
        </h2>
      </div>

      <div className='font-sans flex flex-col lg:flex-row items-center my-10 sm:mx-20 p-5'>
        <div className='flex-shrink-0 mb-5 lg:mb-0 lg:mr-10'>
          <img className='h-auto w-full max-w-[400px] object-cover' src="/media/blo-art-2-etape1.svg" alt="Personnes travaillant sur un chantier" />
        </div>
        <div>
          <h2 className='sm:text-2xl text-4xl sm:text-left text-center font-bold '>
            Étape 1 : comprendre tes motivations
          </h2>
          <p className='my-7'>
            La première étape pour trouver le métier de tes rêves est de comprendre pourquoi tu souhaites changer de carrière ou choisir un nouveau métier. <br />
            Est-ce parce que tu ne te sens pas épanoui dans ton travail actuel ? <br />
            As-tu découvert une nouvelle passion ? <br />
            Ou cherches-tu simplement un meilleur équilibre entre ta vie professionnelle et personnelle ? Identifie clairement tes motivations pour te donner une direction précise.<br /><br />

            Si tu souhaites discuter avec nous pour échanger sur ta reconversion, tu peux accéder à notre agenda juste ici : 
          </p>
          <Link href="/contact">
            <p>
              👉 Prends ton rendez-vous
            </p>
          </Link>
          
        </div>
      </div>


      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Étape 2 : Faire un Bilan de Tes Compétences
        </h2>
        <span className=''>
          <img className='sm:w-[400px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait soulignant le titre de l'article" />
        </span>
      </div>


      <div className='font-sans sm:mx-20 my-10'>
        <div>
          <p className='mb-10'>
            Avant de te lancer dans une nouvelle carrière, il est essentiel de faire un point sur tes compétences actuelles. <br />
            Quelles sont tes forces et tes faiblesses ? <br />
            Quels sont les domaines dans lesquels tu excelles ? <br />
            Utilise des outils d'évaluation des compétences ou consulte un conseiller en orientation professionnelle pour t'aider à identifier tes atouts. <br />
            Il existe deux types de bilans de compétences : 
            <li>
              Les bilans de compétences digitaux
            </li>
            <li>
              Les bilans de compétences physiques
            </li>
            <br /><br />
            Il ne te reste plus qu’à t’inscrire ! 
          </p>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center uppercase'>
        Étape 3 : Explore les Métiers qui Te Correspondent
        </h2>
        <span className='bottom-0 inset-x-0'>
          <img className='sm:w-[300px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait soulignant le titre de l'article" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          Utilise des ressources en ligne comme <span className='font-bold'>Jobmi</span> pour découvrir les métiers qui correspondent à tes compétences et intérêts. Fais des tests d'orientation professionnelle pour obtenir des suggestions de carrières adaptées à ton profil. N'hésite pas à explorer des secteurs d'activité auxquels tu n'avais pas pensé auparavant.

          Pour avoir une idée sur les métiers qui peuvent te plaire, n’hésites pas à faire notre test en ligne.
        </p>
        <Link href="/test" className="rounded-xl px-4 py-2 flex items-center gap-2 bg-[#04192F] text-white font-semibold w-fit mx-auto mt-2">
          Trouver un job
          <img
            src="/media/cta-blog-arrow.svg"
            alt="arrow-icon"
            className="w-7"
          />
        </Link>
      </div>


      <div className='font-sans my-5 sm:py-10 py-2 mx-auto max-w-[700px]'>
        <h3 className='text-3xl text-center uppercase'>
          Suivre des formations
        </h3>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          La reconversion professionnelle passe souvent par l'acquisition de nouvelles compétences. Identifie les formations nécessaires pour accéder au métier de tes rêves et inscris-toi à des cours en ligne, des ateliers ou des programmes de formation professionnelle. Plusieurs plateformes mettent en avant des formations en fonction du métier voulu. La page formation de jobmi en fait partie. <br /><br />
          Pour suivre des formations en lien avec le métier de ton choix, tu peux te rendre dans la partie <span className='font-bold'>formation de jobmi</span>.<br /><br />

          Les plateformes comme <Link href="https://www.coursera.org/" className='undelined'>Coursera</Link>, <Link href="https://www.udemy.com/fr/" className='undelined'>Udemy</Link> ou <Link  href="https://www.linkedin.com/" className='undelined'>LinkedIn</Link> Learning proposent une multitude de cours adaptés à tous les niveaux.
        </p>
      </div>

      <div className='font-sans sm:mx-20'>
        <h4>
        Les avantages à suivre une formation
        </h4>
        <p>
        Suivre une formation présente plusieurs avantages. Cela te permet <span className='font-bold'>d'acquérir des compétences spécifiques</span> qui sont demandées sur le marché du travail, d'élargir ton réseau professionnel et d'améliorer ton CV. De plus, cela montre aux employeurs potentiels que <span className='font-bold'>tu es déterminé et prêt à investir du temps et des efforts</span> pour te reconvertir.
        </p>
      </div>

      <div className='font-sans my-5 sm:py-10 py-2 mx-auto max-w-[700px]'>
        <h3 className='text-3xl text-center uppercase'>
          Gagner de l’experience
        </h3>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          L'expérience professionnelle est un atout majeur pour <span className='font-bold'>se lancer dans une nouvelle carrière.</span> Cherche des stages, des missions en freelance ou des projets bénévoles dans le domaine qui t'intéresse. Non seulement cela te permettra de gagner en expérience, mais cela te donnera également l'occasion de te faire un réseau dans le secteurformation de jobmi.
        </p> <br />

        <div className='flex flex-col lg:flex-row items-start'>
          <p className=''>Tu vas surement me dire :</p>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center'>
              <span className='text-violet text-[100px]'>"</span>
              <p className='uppercase text-center bg-[#04192F] rounded-lg text-white mx-auto text-[20px] inline-block p-2'>Mais comment je peux trouver des opportunités</p>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-row items-center'>
                <p className='uppercase text-center bg-[#04192F] rounded-lg text-white mx-auto text-[20px] inline-block p-2'> d'expérience et surtout, quels outils utiliser ?</p>
                <span className='text-violet text-[100px] h-fit'>"</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p>
          Il existe plusieurs façons de trouver des opportunités d'expérience. <br />
          Tu peux utiliser des plateformes de recherche de stage comme <span className='font-bold'>Jobmi</span>, qui t’accompagne de A à Z dans ta recherche ou encore <Link href="https://www.stage4u.fr/" className='underline'>Stage4U</Link>, <Link href="https://fr.indeed.com/" className='underline'>Indeed</Link> ou <Link href="https://www.linkedin.com/" className='underline'>LinkedIn</Link>. N'hésite pas à contacter directement les entreprises qui t'intéressent pour leur proposer tes services en tant que stagiaire ou freelance.
          </p>
        </div>
      </div>


      <div className='font-sans my-5 sm:py-10 py-2 mx-auto max-w-[700px]'>
        <h3 className='text-3xl text-center uppercase'>
          Réseauter 🗣️
        </h3>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          On en a déjà parlé dans un autre article <Link href='https://jobmi.fr/blog/comment-commencer-ta-reconversion-professionnelle' className='underline'>(disponible juste là)</Link> mais le réseautage est une étape cruciale dans la recherche du job de tes rêves. Utilise LinkedIn pour te connecter avec des professionnels du secteur, participe à des événements de réseautage et rejoins des groupes professionnels en ligne. Le réseautage peut t'ouvrir des portes et te donner accès à des opportunités que tu n'aurais pas trouvées autrement.
        </p>

        <div className='flex flex-row items-center'>
          <span className='text-violet text-[100px]'>"</span>
          <p className='uppercase text-center bg-[#04192F] rounded-lg text-white mx-auto text-[20px] inline-block p-2'>pourquoi le réseautage est-il si important ? </p>
          <span className='text-violet text-[100px]'>"</span>
        </div>

        <p>
          Le réseautage permet de rencontrer des personnes qui peuvent t'aider à atteindre tes objectifs professionnels. Cela peut inclure des mentors, des employeurs potentiels ou d'autres professionnels de ton secteur. En établissant des relations solides, tu peux obtenir des conseils précieux, des recommandations et même des offres d'emploi.
        </p>
      </div>

      <div className='font-sans my-5 sm:py-10 py-2 mx-auto max-w-[700px]'>
        <h3 className='text-3xl text-center uppercase'>
          Rédiger un CV et une Lettre de Motivation Impactants
        </h3>
        <span className='bottom-0 inset-x-0'>
          <img className='sm:w-[300px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait soulignant le titre de l'article" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          L’étape la plus importante mais aussi la plus redouté par la plupart des personnes. On va t’aider à retirer les idées reçues sur ces deux documents si importants. <br />
          Ton CV et ta lettre de motivation sont les premiers contacts que tu auras avec les recruteurs. Assure-toi qu'ils soient clairs, précis et mettent en avant tes compétences et expériences pertinentes. Adapte ton CV et ta lettre de motivation à chaque offre d'emploi pour maximiser tes chances de retenir l'attention des recruteurs.
        </p>
      </div>

      <div className='font-sans my-5 sm:py-10 py-2 mx-auto max-w-[700px]'>
        <h3 className='text-3xl text-center uppercase'>
          Conseils pour un cv efficace
        </h3>
      </div>
      
      <div className='space-y-4 sm:mx-20'>
        <div className='flex flex-row gap-2 items-center'>
          <p className='text-3xl'>
            ✅
          </p>
          <p className='bg-[#04192F] p-2 text-white'>
            Identifier tes compétences acquises et tes expériences significatives.
          </p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <p className='text-3xl'>
            ✅
          </p>
          <p className='bg-[#04192F] p-2 text-white'>
            Inclue des mots clés pertinents pour le poste visé
          </p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <p className='text-3xl'>
            ✅
          </p>
          <p className='bg-[#04192F] p-2 text-white'>
            Mets en avant tes réalisations et tes compétences spécifiques
          </p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <p className='text-3xl'>
            ✅
          </p>
          <p className='bg-[#04192F] p-2 text-white'>
            Adapte chaque cv à l’offre d’emploi spécifique
          </p>
        </div>
      </div>


      <div className='font-sans my-5 sm:py-10 py-2 mx-auto max-w-[700px]'>
        <h3 className='text-3xl text-center uppercase'>
          Conseils pour une lettre de motivation persuasive
        </h3>
      </div>
      
      <div className='space-y-4 sm:mx-20'>
        <div className='flex flex-row gap-2 items-center'>
          <p className='text-3xl'>
            ✅
          </p>
          <p className='bg-[#04192F] p-2 text-white'>
            Commencer par une introduction accrocheuse
          </p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <p className='text-3xl'>
            ✅
          </p>
          <p className='bg-[#04192F] p-2 text-white'>
            Expliquer pourquoi tu es intéressé par le poste et l'entreprise
          </p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <p className='text-3xl'>
            ✅
          </p>
          <p className='bg-[#04192F] p-2 text-white'>
            Décrire comment tes compétences et expériences font de toi le candidat idéal
          </p>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <p className='text-3xl'>
            ✅
          </p>
          <p className='bg-[#04192F] p-2 text-white'>
            Terminer par une conclusion encourageant un entretien
          </p>
        </div>
      </div>

      <div className='font-sans my-5 sm:py-10 py-2 mx-auto max-w-[700px]'>
        <h3 className='text-3xl text-center uppercase'>
          Préparer les entretiens d’embauche
        </h3>
      </div>

      <div className='sm:mx-20'>
        <p>
          Une fois que tu as décroché un entretien, il est crucial de bien te préparer. <br />
          Renseigne-toi sur l'entreprise, prépare des réponses aux questions courantes et pense à des exemples concrets pour illustrer tes compétences. Sois authentique et montre ta motivation pour le poste.
        </p> <br />
        <p>
          Les Questions Courantes en Entretien
        </p> <br />
        <p>
        Prépare-toi à répondre à ces questions courantes en entretien :
          <li>Parlez-moi de vous.</li>
          <li>Pourquoi voulez-vous travailler pour notre entreprise ?</li>
          <li>Quelles sont vos forces et vos faiblesses ?</li>
          <li>Parlez-moi d'une réalisation dont vous êtes fier.</li>
        </p>
      </div>

      <div className='font-sans my-5 sm:py-10 py-2 mx-auto max-w-[700px]'>
        <h3 className='text-3xl text-center uppercase'>
          Persévérer et rester motivé
        </h3>
      </div>

      <div className='sm:mx-20'>
        <p>
          La recherche du job de tes rêves peut prendre du temps et nécessiter beaucoup d'efforts. Ne te décourage pas si tu ne trouves pas immédiatement le poste idéal. Continue à postuler, à te former et à réseauter. Chaque expérience te rapproche un peu plus de ton objectif.
        </p> <br />
        <p>
          Comment Maintenir la Motivation
        </p> <br />
        <p>
          Pour maintenir ta motivation, fixe-toi des objectifs clairs et atteignables. Célèbre chaque petite victoire et n'hésite pas à demander du soutien à tes amis et ta famille. Rappelle-toi que la persévérance est la clé du succès.
        </p> <br />
        <p>
          Trouver le job de tes rêves à 20 ans est un parcours qui demande de la réflexion, de la préparation et de la persévérance. En suivant ces étapes et en utilisant les ressources disponibles, tu maximiseras tes chances de réussir ta reconversion professionnelle. N'oublie pas que chaque chemin est unique et qu'il est important de rester flexible et ouvert aux nouvelles opportunités. Bonne chance dans ta recherche !
        </p>
      </div>


    </div>
  )
}
