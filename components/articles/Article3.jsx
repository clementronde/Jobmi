import React from 'react'
import Link from 'next/link';

export const Article3 = () => {
  return (
    <div className='sm:mx-5 mx-1'>
      <div className='sm:mx-20'>
        <img src="/media/intro-article-3.svg" alt="Bannière pour l'article 3" />
      </div>

      <div className='font-sans mx-auto sm:mx-20 mt-10'>
        <h2 className='font-bold text-2xl'>Introduction</h2>
        <p>
        En 2024, de nombreux métiers cool émergent et se développent, offrant aux jeunes professionnels des opportunités passionnantes et enrichissantes <br />
        Que tu sois en pleine reconversion professionnelle ou que tu cherches simplement à entrer dans le monde du travail, connaître les métiers d'avenir est essentiel. Cet article te présente les 10 métiers cool pour 2024 que tu dois absolument connaître. Prêt à découvrir ces nouvelles carrières passionnantes ? <br />
        C'est parti !
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py:2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche pointant vers le titre" />
        <h2 className='text-4xl font-bold text-center uppercase'>
          La liste des 10 métiers cool 
        que tu dois connaitre en 2024
        </h2>
      </div>

      <div className='font-sans flex flex-col lg:flex-row my-10 sm:mx-20 p-5 gap-5'>
        
        <div>
          <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
            1. Développeur en réalité virtuelle 
          </h2>
          <p className='my-7'>
            Le développeur en réalité virtuelle conçoit des environnements immersifs interactifs pour des applications de jeux, de formation ou de visualisation. Il utilise des moteurs de jeu comme Unity ou Unreal Engine pour créer des expériences en 3D. Ce professionnel doit maîtriser la programmation, les graphiques 3D et l'optimisation des performances. Il collabore souvent avec des designers et des artistes pour donner vie aux concepts virtuels. Son travail demande une grande créativité et une forte capacité à résoudre des problèmes techniques complexes. 
          </p>
          <div className='space-y-4'>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Compétences requises : 
              </h3>
              <p>
                Programmation, créativité, compréhension des moteurs de jeu comme Unity ou Unreal Engine.
              </p>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Pourquoi c’est cool ?
              </h3>
              <p>
                Travailler à la pointe de la technologie, créer des mondes virtuels immersifs et collaborer avec des équipes créatives.
              </p>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Tu veux en savoir plus ? 
              </h3>
              <p>
                Découvrez les formations pour devenir développeur VR sur jobmi 
              </p>
            </div>
          </div>
          
        </div>
        <div className='flex-shrink-0'>
          <img className='h-auto w-full max-w-[400px] object-cover' src="/media/developpeur-realite-virtuel.svg" alt="Image d'un développeur en réalité virtuelle" />
        </div>
      </div>


      <div className='font-sans sm:pt-10 py-2 mx-auto sm:mx-20'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          2. Spécialiste en cybersécurité 
        </h2>
      </div>

      <div className='font-sans sm:mx-20 my-10'>
        <div>
          <p className='mb-10'>
            Le spécialiste en cybersécurité protège les systèmes informatiques et les réseaux contre les cyberattaques et les menaces numériques. Il effectue des audits de sécurité, analyse les vulnérabilités et met en place des mesures de protection robustes. En cas de cyberincident, il intervient pour limiter les dégâts et restaurer les systèmes. Ce professionnel doit rester constamment informé des nouvelles menaces et technologies de sécurité. Son rôle est crucial pour garantir la confidentialité, l'intégrité et la disponibilité des données. 
          </p>
        </div>
        <div>
          <img src="/media/specialiste-en-cybersecurite.svg" alt="Image d'un spécialiste en cybersécurité" className='h-auto w-full max-w-[70%] object-cover' />
        </div>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              Compétences requises : 
            </h3>
            <p>
              Connaissance des réseaux, analyse des risques, compétences en cryptographie.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              Pourquoi c’est intéréssant ?
            </h3>
            <p>
              Travaille essentiel pour la sécurité des données, défi intellectuel constant, possibilité de travailler pour des entreprises high-tech.

            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
                Tu veux en savoir plus ? 
            </h3>
            <p>
                Découvres toutes les informations sur la cybersécurité 
            </p>
          </div>
        </div>
      </div>


      <div className='font-sans sm:pt-10 py-2 mx-auto sm:mx-20'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          3. Ingénieur en énergie renouvelable
        </h2>
      </div>

      <div className='font-sans sm:mx-20 my-10 flex flex-col gap-5'>
        <div>
          <p className='mb-10'>
            L'ingénieur en énergie renouvelable développe et optimise des solutions pour produire de l'énergie à partir de sources renouvelables comme le solaire, l'éolien ou la biomasse. Il travaille sur la conception, l'installation et la maintenance de systèmes énergétiques durables. Ce professionnel évalue l'impact environnemental et économique des projets énergétiques. Il collabore souvent avec des équipes multidisciplinaires pour intégrer des technologies innovantes. Son objectif est de contribuer à la transition énergétique vers des sources plus propres et durables.
          </p>
        </div>
        <div>
          <img src="/media/ingenieur-en-energie-renouvable.svg" alt="Image d'un ingénieur en énergie renouvelable" className='h-auto w-full max-w-[70%] object-cover' />
        </div>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              Compétences requises : 
            </h3>
            <p>
              Ingénierie, connaissance des énergies renouvelables, compétences en gestion de projet.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              En quoi c’est utile ?
            </h3>
            <p>
              Contribuer à la protection de l'environnement, travailler sur des projets innovants, forte demande de compétences.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
                Tu veux en savoir plus ? 
            </h3>
            <p>
                Découvrez les formations pour devenir ingénieur en énergie renouvelable 
            </p>
          </div>
        </div>
      </div>



      <div className='font-sans flex flex-col lg:flex-row my-10 sm:mx-20 p-5 gap-5'>
        
        <div>
          <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
            4. UX/UI Designer
          </h2>
          <p className='my-7'>
            Le UI/UX designer est responsable de la conception de l'interface utilisateur (UI) et de l'expérience utilisateur (UX) pour des applications et des sites web. Il crée des maquettes, prototypes et wireframes pour optimiser la navigation et l'interaction des utilisateurs. Ce professionnel réalise des tests utilisateurs pour améliorer continuellement les interfaces. Il doit allier créativité et compréhension des besoins utilisateurs pour offrir des expériences intuitives et agréables. Son travail est essentiel pour la satisfaction et la fidélisation des utilisateurs.
          </p>
          <div className='space-y-4'>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Compétences requises : 
              </h3>
              <p>
                Design graphique, psychologie de l'utilisateur, compétences en prototypage.
              </p>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Pourquoi c’est top ?
              </h3>
              <p>
                Mélange de créativité et de technologie, impact direct sur l'expérience utilisateur, forte demande dans le secteur tech.
              </p>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Tu veux en savoir plus ? 
              </h3>
              <p>
                Découvrez les formations en UX/UI design sur jobmi  
              </p>
            </div>
          </div>
          
        </div>
        <div className='flex-shrink-0'>
          <img className='h-auto w-full max-w-[400px] object-cover' src="/media/ux-ui-designer.svg" alt="Image d'un UI/UX designer" />
        </div>
      </div>



      <div className='font-sans flex flex-col lg:flex-row my-10 sm:mx-20 p-5 gap-5'>
        
        <div>
          <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
            5. Data Scientist
          </h2>
          <p className='my-7'>
            Le data scientist analyse des volumes massifs de données pour en extraire des insights et aider à la prise de décision. Il utilise des techniques de machine learning, des algorithmes et des outils de visualisation de données. Ce professionnel doit posséder des compétences en programmation, en statistiques et en mathématiques. Il travaille souvent en collaboration avec les équipes métier pour comprendre les problématiques et proposer des solutions basées sur les données. Son rôle est de transformer les données brutes en informations exploitables pour l'entreprise.
          </p>
          <div className='space-y-4'>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Compétences requises : 
              </h3>
              <p>
                Statistiques, programmation (Python, R), compétences en visualisation de données.
              </p>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Pourquoi c’est cool ?
              </h3>
              <p>
                Travail analytique stimulant, forte demande dans tous les secteurs, possibilité de travailler sur des projets diversifiés.
              </p>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Tu veux en savoir plus ? 
              </h3>
              <p>
                Découvrez comment devenir data scientist
              </p>
            </div>
          </div>
          
        </div>
        <div className='flex-shrink-0'>
          <img className='h-auto w-full max-w-[400px] object-cover' src="/media/data-scientist.svg" alt="Image d'un data scientist" />
        </div>
      </div>



      <div className='font-sans sm:pt-10 py-2 mx-auto sm:mx-20'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          6. Spécialiste en Intelligence Artificielle (IA)
        </h2>
      </div>

      <div className='font-sans sm:mx-20 my-10 flex flex-col gap-5'>
        <div>
          <p className='mb-10'>
            Le spécialiste en intelligence artificielle développe des algorithmes et des modèles pour automatiser des tâches complexes et imiter l'intelligence humaine. Il travaille sur des projets de machine learning, de traitement du langage naturel, et de vision par ordinateur. Ce professionnel doit maîtriser la programmation, les mathématiques avancées et les outils de big data. Il est souvent impliqué dans la recherche et l'innovation pour améliorer les performances des systèmes intelligents. Son travail vise à créer des applications qui révolutionnent divers secteurs comme la santé, la finance, et les transports.
          </p>
        </div>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              Compétences requises : 
            </h3>
            <p>
              Programmation, machine learning, analyse de données.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              En quoi c’est intéréssant ?
            </h3>
            <p>
              Travail à la pointe de l'innovation technologique, possibilité de changer le monde, forte demande de compétences.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
                Tu veux en savoir plus ? 
            </h3>
            <p>
                Découvres toutes les informations sur les formations en intelligences artificielles 
            </p>
          </div>
        </div>
      </div>


      <div className='font-sans flex flex-col lg:flex-row my-10 sm:mx-20 p-5 gap-5'>
        
        <div>
          <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
            7. Chef de Projet en Développement Durable
          </h2>
          <p className='my-7'>
            Le chef de projet en développement durable coordonne et met en œuvre des initiatives visant à améliorer la durabilité environnementale, sociale et économique. Il planifie, gère et évalue des projets qui réduisent l'empreinte carbone et encouragent les pratiques éthiques. Ce professionnel travaille avec des équipes multidisciplinaires pour intégrer des solutions durables dans les processus d'entreprise. Il doit posséder de solides compétences en gestion de projet et une connaissance approfondie des enjeux environnementaux. Son objectif est de promouvoir un développement harmonieux et respectueux de l'environnement.
          </p>
          <div className='space-y-4'>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Compétences requises : 
              </h3>
              <p>
                Gestion de projet, connaissance des pratiques durables, compétences en communication.
              </p>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Pourquoi c’est utile ?
              </h3>
              <p>
                Contribuer à la protection de l'environnement, impact positif sur la société, travail diversifié.
              </p>
            </div>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='font-bold'>
                Tu veux en savoir plus ? 
              </h3>
              <p>
                En savoir plus sur les métiers du développement durable.
              </p>
            </div>
          </div>
          
        </div>
        <div className='flex-shrink-0'>
          <img className='h-auto w-full max-w-[400px] object-cover' src="/media/chef-de-projet-developpement-durable.svg" alt="Image d'un chef de projet de développemenr durable" />
        </div>
      </div>


      <div className='font-sans sm:pt-10 py-2 mx-auto sm:mx-20'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          8. Ingénieur en Robotique
        </h2>
      </div>

      <div className='font-sans sm:mx-20 my-10 flex flex-col gap-5'>
        <div>
          <p className='mb-10'>
            L'ingénieur en robotique conçoit, développe et teste des robots pour diverses applications industrielles, médicales ou domestiques. Il travaille sur l'intégration des composants mécaniques, électroniques et logiciels pour créer des systèmes robotiques fonctionnels. Ce professionnel doit maîtriser la programmation, la mécatronique et l'intelligence artificielle. Il collabore souvent avec des chercheurs et des techniciens pour améliorer les capacités des robots. Son travail vise à automatiser des tâches complexes et à améliorer l'efficacité dans divers secteurs.
          </p>
        </div>
        <div>
          <img src="/media/ingenieur-en-robotique.svg" alt="Image d'un ingénieur en robotique" className='h-auto w-full max-w-[70%] object-cover' />
        </div>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              Compétences requises : 
            </h3>
            <p>
              Ingénierie mécanique, programmation, conception de systèmes.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              Pourquoi c’est top ?
            </h3>
            <p>
              Travailler sur des projets futuristes, forte demande dans de nombreux secteurs, opportunités d'innovation.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
                Tu veux en savoir plus ? 
            </h3>
            <p>
                Découvres les formations en ingénieur robotique.
            </p>
          </div>
        </div>
      </div>


      <div className='font-sans sm:pt-10 py-2 mx-auto sm:mx-20'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          9. Consultant en Transformation Numérique
        </h2>
      </div>

      <div className='font-sans sm:mx-20 my-10 flex flex-col gap-5'>
        <div>
          <p className='mb-10'>
            Le consultant en transformation numérique accompagne les entreprises dans leur transition vers des technologies digitales. Il évalue les besoins de l'entreprise, propose des solutions technologiques et supervise leur mise en œuvre. Ce professionnel doit posséder une connaissance approfondie des tendances technologiques et des compétences en gestion de projet. Il travaille en étroite collaboration avec les équipes de direction et les départements informatiques. Son rôle est crucial pour moderniser les processus et améliorer la compétitivité de l'entreprise.
          </p>
        </div>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              Compétences requises : 
            </h3>
            <p>
              Connaissance des technologies numériques, gestion de projet, compétences en communication.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              En quoi c’est utile ?
            </h3>
            <p>
              Travail diversifié, possibilité d'influencer le changement organisationnel, forte demande dans tous les secteurs.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
                Tu veux en savoir plus ? 
            </h3>
            <p>
                Découvrez comment devenir consultant en transformation numérique.
            </p>
          </div>
        </div>
      </div>


      <div className='font-sans sm:pt-10 py-2 mx-auto sm:mx-20'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          10. Coach en Développement Personnel
        </h2>
      </div>

      <div className='font-sans sm:mx-20 my-10 flex flex-col gap-5'>
        <div>
          <p className='mb-10'>
            L'ingénieur en robotique conçoit, développe et teste des robots pour diverses applications industrielles, médicales ou domestiques. Il travaille sur l'intégration des composants mécaniques, électroniques et logiciels pour créer des systèmes robotiques fonctionnels. Ce professionnel doit maîtriser la programmation, la mécatronique et l'intelligence artificielle. Il collabore souvent avec des chercheurs et des techniciens pour améliorer les capacités des robots. Son travail vise à automatiser des tâches complexes et à améliorer l'efficacité dans divers secteurs.
          </p>
        </div>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              Compétences requises : 
            </h3>
            <p>
              Psychologie, compétences en communication, empathie
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              Pourquoi c’est top ?
            </h3>
            <p>
              Aider les gens à atteindre leur potentiel, flexibilité du travail, forte demande de services de coaching.
            </p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>
              Tu veux en savoir plus ? 
            </h3>
            <p>
              En savoir plus sur le coaching en développement personnel
            </p>
          </div>
        </div>
      </div>



    </div>
  )
}
