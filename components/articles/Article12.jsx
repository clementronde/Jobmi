import Link from 'next/link'

export const Article12 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>CPF — Comment l'utiliser :</p>
          <p className='text-justify'>
            Le Compte Personnel de Formation (CPF) est l'un des outils les plus puissants pour financer ta formation — mais aussi l'un des plus mal utilisés. Escroqueries, mauvais choix, reste à charge : voici comment utiliser ton CPF intelligemment en 2025.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>C'est quoi le CPF exactement ?</h2>
        <p className='mt-4'>
          Le Compte Personnel de Formation est un dispositif qui te permet d'accumuler des droits à la formation tout au long de ta vie professionnelle. Depuis ton premier jour de travail, tu accumules des crédits formation — <strong>500 €/an pour un salarié à temps plein</strong> (plafonné à 5 000 €, ou 800 €/an et 8 000 € max pour les non-qualifiés).
        </p>
        <p className='mt-4'>
          Ces droits sont utilisables à ta discrétion, sans demander l'autorisation de ton employeur (pour les formations hors temps de travail).
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Comment utiliser son CPF : le guide étape par étape
        </h2>
      </div>

      <div className='font-sans sm:mx-20 my-10'>
        <div className='space-y-10 sm:mx-10 mx-5'>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>01</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Créer ton compte sur moncompteformation.gouv.fr</p>
              <p>Va sur <a className='underline' href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer">moncompteformation.gouv.fr</a> et connecte-toi avec France Connect (impôts, Ameli, etc.). Tu verras immédiatement ton solde disponible.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>02</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Rechercher une formation éligible</p>
              <p>Utilise le moteur de recherche du site. Tu peux filtrer par métier, domaine, durée et format (présentiel, distanciel, mixte). Seules les formations de prestataires certifiés Qualiopi apparaissent.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>03</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Faire une demande de formation</p>
              <p>Une fois la formation choisie, soumets ta demande directement depuis l'application. L'organisme de formation a 11 jours ouvrés pour accepter ou refuser.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>04</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Gérer le reste à charge (depuis 2024)</p>
              <p>Depuis mai 2024, un reste à charge de 100 € est appliqué sur toutes les formations CPF (sauf exceptions). Si tu es demandeur d'emploi ou si ton employeur abonde, ce reste à charge est supprimé.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Les formations CPF les plus utiles en 2025
        </h2>
        <span>
          <img className='sm:w-[450px] w-[250px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 space-y-4'>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Développement web (titre RNCP)</h3>
          <p>2 000 à 8 000 € — souvent intégralement couverts. L'une des formations les plus demandées sur le CPF.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Bilan de compétences</h3>
          <p>1 500 à 3 000 €. Indispensable avant une reconversion importante. Financement CPF quasi-systématique.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Permis de conduire (B, C, D…)</h3>
          <p>Jusqu'à 1 200 € de prise en charge. Un investissement rentable pour les métiers nécessitant un véhicule.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Langues étrangères (anglais, espagnol, allemand)</h3>
          <p>Certifications Toeic, Bright Language. Très utile pour booster un CV ou accéder à des postes internationaux.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Formations management / RH</h3>
          <p>Coaching, management d'équipe, RH. Profils en reconversion vers l'encadrement très bien représentés.</p>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Les arnaques CPF : comment les éviter
        </h2>
        <span>
          <img className='sm:w-[400px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 space-y-4'>
        <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
          <h3 className='font-bold'>Les appels ou SMS non sollicités</h3>
          <p>Aucun organisme sérieux ne te contacte par SMS ou cold call pour te proposer d'utiliser ton CPF. Raccroche et bloque.</p>
        </div>
        <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
          <h3 className='font-bold'>Les formations "sans reste à charge" vendues par des tiers</h3>
          <p>Depuis 2024, toute formation CPF a un reste à charge de 100 €. Si quelqu'un te promet 0 €, c'est suspect.</p>
        </div>
        <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
          <h3 className='font-bold'>Les formations sans certification reconnue</h3>
          <p>Vérifie que la formation mène à un titre RNCP ou une certification RS (Répertoire Spécifique). Une formation sans reconnaissance officielle a peu de valeur sur le marché.</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between sm:mx-10 sm:my-16 font-sans gap-10'>
        <div className='lg:w-2/3'>
          <p>
            Avant d'utiliser ton CPF, assure-toi de savoir quelle formation te sera vraiment utile. <Link href="/test" className='underline font-semibold'>Passe le test d'orientation Jobmi</Link> pour identifier les métiers qui correspondent à ton profil, puis choisis la formation en conséquence.
          </p>
        </div>
        <div className='lg:w-1/3 flex items-center'>
          <Link href="/stage-et-formation" className='flex gap-2 font-semibold underline'>
            Explorer les formations
            <img className='sm:ml-2 w-5' src="/media/blog-CTA-fleche.svg" alt="Flèche" />
          </Link>
        </div>
      </div>

    </div>
  )
}
