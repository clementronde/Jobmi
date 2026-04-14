import Link from 'next/link'

export const Article6 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Bilan de compétences :</p>
          <p className='text-justify'>
            Tu entends parler du bilan de compétences partout, mais tu ne sais pas vraiment ce que c'est, si tu y as droit et comment ça se passe concrètement ? Ce guide complet répond à toutes tes questions — y compris comment en obtenir un gratuitement.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>C'est quoi exactement un bilan de compétences ?</h2>
        <p className='mt-4'>
          Un bilan de compétences est un dispositif officiel (encadré par le Code du travail) qui t'aide à analyser tes compétences professionnelles et personnelles, tes aptitudes et motivations. L'objectif : définir un projet professionnel réaliste ou valider une orientation.
        </p>
        <p className='mt-4'>
          Il se déroule sur <strong>24 heures maximum</strong> (souvent étalées sur 2-3 mois) avec un consultant certifié. À la fin, tu reçois un document de synthèse que tu es seul à posséder.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Qui peut faire un bilan de compétences ?
        </h2>
      </div>

      <div className='font-sans sm:mx-20'>
        <p className='mb-6'>
          Contrairement à ce qu'on croit souvent, le bilan de compétences n'est pas réservé aux seniors en fin de carrière. Il est accessible à :
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Tout salarié en CDI ou CDD</h3>
            <p>Après au moins 1 an d'ancienneté dans l'entreprise (ou 5 ans cumulés sur ta carrière).</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Les demandeurs d'emploi</h3>
            <p>Via France Travail (ex Pôle Emploi), avec une prise en charge possible à 100 %.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Les travailleurs indépendants</h3>
            <p>Via le CPF ou de leur poche (financement partiel possible via le Fonds d'Assurance Formation).</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Les jeunes de moins de 26 ans</h3>
            <p>Via certains dispositifs régionaux ou les missions locales, souvent gratuits.</p>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Comment obtenir un bilan de compétences gratuit ?
        </h2>
        <span>
          <img className='sm:w-[500px] w-[250px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 my-10'>
        <p className='mb-8'>
          Voici les 4 chemins pour financer ou obtenir gratuitement un bilan de compétences :
        </p>
        <div className='space-y-10 sm:mx-20 mx-5'>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>01</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Via le CPF (Compte Personnel de Formation)</p>
              <p>Si tu as travaillé, tu as des droits. Un bilan de compétences coûte en moyenne 1 500 à 3 000 €, souvent intégralement couverts par le CPF. Vérifie ton solde sur <a className='underline' href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer">moncompteformation.gouv.fr</a>.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>02</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Via ton employeur (plan de formation)</p>
              <p>Tu peux demander à ton employeur de financer le bilan sur le temps de travail (congé de bilan de compétences). Il ne peut pas le refuser si tu remplis les conditions d'ancienneté.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>03</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Via France Travail (si tu es demandeur d'emploi)</p>
              <p>France Travail peut financer intégralement le bilan. Demande à ton conseiller de l'intégrer dans ton PPAE (Projet Personnalisé d'Accès à l'Emploi).</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>04</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Via les missions locales (moins de 26 ans)</p>
              <p>Si tu as moins de 26 ans et que tu n'es pas en emploi, contacte la mission locale de ta ville. Des bilans simplifiés sont proposés gratuitement ou à tarif très réduit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Comment se déroule un bilan de compétences ?
        </h2>
        <span>
          <img className='sm:w-[450px] w-[250px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <p className='mb-6'>Un bilan se déroule en 3 phases réglementaires :</p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Phase 1 — Préliminaire (1-2 séances)</h3>
            <p>Définir tes attentes, confirmer ton engagement, expliquer le déroulement. Tu peux encore choisir de ne pas continuer.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Phase 2 — Investigation (12-18 heures)</h3>
            <p>Tests psychométriques, entretiens approfondis, exploration de métiers, enquêtes terrain. C'est le cœur du bilan.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Phase 3 — Conclusion (1-2 séances)</h3>
            <p>Remise du document de synthèse, validation de ton projet professionnel, plan d'action concret.</p>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Bilan de compétences ou test d'orientation : quelle différence ?
        </h2>
        <span>
          <img className='sm:w-[500px] w-[250px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between sm:mx-10 sm:my-10 font-sans gap-10'>
        <div className='lg:w-2/3'>
          <p className='mb-4'>
            Le bilan de compétences est un processus long (2-3 mois) et accompagné. Le test d'orientation est un outil rapide pour avoir une première direction.
          </p>
          <p className='mb-4'>
            Si tu ne sais pas encore si tu as besoin d'un bilan complet, commence par <Link href="/test" className='underline font-semibold'>le test d'orientation Jobmi</Link> — il te donnera des pistes en 5 minutes. Tu pourras ensuite décider si un bilan approfondi est nécessaire.
          </p>
        </div>
        <div className='lg:w-1/3 flex items-center'>
          <Link href="/test" className='flex gap-2 text-1xl font-semibold underline'>
            Faire le test gratuitement
            <img className='sm:ml-2 w-5' src="/media/blog-CTA-fleche.svg" alt="Flèche" />
          </Link>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>FAQ</h2>
      </div>

      <div className='font-sans sm:mx-20 space-y-6'>
        <div>
          <h3 className='font-bold text-lg'>Le bilan de compétences est-il confidentiel ?</h3>
          <p>Oui, totalement. Le document de synthèse t'appartient. L'organisme ne peut pas communiquer les résultats à ton employeur sans ton accord.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Peut-on faire un bilan de compétences en ligne ?</h3>
          <p>Oui. De nombreux organismes certifiés Qualiopi proposent des bilans 100 % en distanciel. Le financement CPF est identique.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Combien de temps dure un bilan de compétences ?</h3>
          <p>La loi fixe un maximum de 24 heures réparties sur 3 mois maximum. En pratique, beaucoup de bilans se font en 6 à 10 semaines.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Comment choisir un bon organisme de bilan de compétences ?</h3>
          <p>Vérifie la certification Qualiopi (obligatoire depuis 2022). Lis les avis, demande à parler au consultant avant de t'engager, et compare 2-3 organismes.</p>
        </div>
      </div>

    </div>
  )
}
