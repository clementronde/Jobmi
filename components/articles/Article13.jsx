import Link from 'next/link'

export const Article13 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Trouver un stage en reconversion :</p>
          <p className='text-justify'>
            Trouver un stage quand on se reconvertit, c'est plus difficile que pour un étudiant classique — mais c'est l'une des meilleures façons de valider son projet et d'entrer dans un secteur. Méthode, erreurs à éviter, et ressources concrètes.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Pourquoi le stage est indispensable en reconversion</h2>
        <p className='mt-4'>
          Un stage en reconversion, c'est le moyen le plus efficace de <strong>tester un métier avant de s'y engager</strong>, de construire un réseau dans le nouveau secteur, et de prouver aux futurs employeurs que tu as une vraie expérience terrain — pas seulement une formation sur le papier.
        </p>
        <p className='mt-4'>
          Contrairement aux idées reçues, les entreprises acceptent des stagiaires en reconversion à tout âge. Ce qui compte : ton projet professionnel clair et ta motivation.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Méthode pour trouver un stage en reconversion
        </h2>
      </div>

      <div className='font-sans sm:mx-20 my-10'>
        <div className='space-y-10 sm:mx-10 mx-5'>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>01</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Construire un projet professionnel clair</p>
              <p>Avant de contacter une entreprise, tu dois pouvoir répondre à "pourquoi tu te reconvertis dans ce secteur" en 30 secondes. Un projet flou = un refus immédiat. Si tu cherches encore ta direction, <Link href="/test" className='underline font-semibold'>commence par le test d'orientation Jobmi</Link>.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>02</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Cibler les bonnes entreprises</p>
              <p>PME et startups &gt; grands groupes pour les stages en reconversion. Les grandes entreprises ont des processus rigides qui défavorisent les profils atypiques. Dans une startup, ta motivation et tes compétences transférables auront plus de poids.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>03</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Personnaliser chaque candidature</p>
              <p>Une lettre de motivation générique = poubelle. Montre que tu connais l'entreprise, ses problèmes, et comment tes compétences actuelles (même d'un autre secteur) peuvent aider. Les compétences transférables sont un vrai atout.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>04</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Utiliser le réseau avant les plateformes</p>
              <p>80 % des stages se trouvent par le réseau, pas sur les annonces. LinkedIn, événements sectoriels, anciens collègues, formateurs de ta formation — tous peuvent te mettre en relation avec la bonne personne.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>05</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>La candidature spontanée ciblée</p>
              <p>Identifie 20 entreprises qui correspondent exactement à ton projet, contacte-les directement (email + LinkedIn). Un message personnalisé sur LinkedIn au responsable du département visé est souvent plus efficace qu'une candidature via un ATS.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Où chercher des stages en reconversion ?
        </h2>
        <span>
          <img className='sm:w-[400px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 space-y-4'>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Jobmi — Stages et formations sélectionnés</h3>
          <p>Tu peux explorer les <Link href="/stage-et-formation" className='underline'>opportunités sélectionnées par Jobmi</Link> pour des stages adaptés à ton profil de reconversion.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>LinkedIn (recherche avancée)</h3>
          <p>Filtre "stage" + secteur + localisation. Surtout utile pour les candidatures spontanées et la mise en relation directe avec des décideurs.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Welcome to the Jungle</h3>
          <p>Plateforme privilégiée par les startups et PME. Beaucoup d'offres de stages dans les secteurs tech, marketing, design.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Indeed et France Travail</h3>
          <p>Pour les secteurs plus traditionnels (santé, logistique, commerce, artisanat). France Travail propose aussi des PMSMP (Période de Mise en Situation en Milieu Professionnel) gratuites.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Les réseaux de ta formation</h3>
          <p>Si tu es en bootcamp ou en formation, l'organisme a souvent un réseau d'entreprises partenaires. C'est ta meilleure piste — utilise-la en priorité.</p>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          FAQ — Stage en reconversion
        </h2>
        <span>
          <img className='sm:w-[300px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 space-y-6'>
        <div>
          <h3 className='font-bold text-lg'>Peut-on faire un stage en reconversion sans être étudiant ?</h3>
          <p>Oui, via les PMSMP (Période de Mise en Situation en Milieu Professionnel) proposées par France Travail, ou en étant inscrit dans une formation certifiante. Tu peux aussi proposer une période d'essai ou un contrat à durée déterminée de découverte.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Un stage en reconversion est-il rémunéré ?</h3>
          <p>Les PMSMP ne sont pas rémunérées mais tu gardes tes allocations chômage. Les stages de plus de 2 mois dans le cadre d'une formation donnent droit à une gratification minimale légale (environ 600 €/mois en 2025).</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Faut-il un stage avant de se reconvertir ou après la formation ?</h3>
          <p>Idéalement avant pour valider ton choix, et pendant/après pour gagner de l'expérience. Beaucoup de formations incluent un stage obligatoire — utilise-le comme tremplin vers l'emploi.</p>
        </div>
      </div>

    </div>
  )
}
