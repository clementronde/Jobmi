import Link from 'next/link'
import React from 'react'

export const Article1 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='mx-auto my-8 max-w-3xl rounded-2xl bg-[#F8F7FF] p-6 font-sans text-base leading-8 text-[#465160]'>
        <p>
          Reconversion professionnelle : deux mots qui excitent autant qu&apos;ils intimident. Le risque n&apos;est pas de te tromper de métier, c&apos;est de te tromper de raison. Avant de t&apos;inscrire à un bilan de compétences ou de poser ta démission, réponds honnêtement à ces 5 questions.
        </p>
      </div>

      <div className='font-sans mx-auto sm:mx-20 space-y-14'>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>1. Est-ce le métier, ou l&apos;entreprise ?</h2>
          <p className='mt-4 leading-8 text-[#465160]'>
            Beaucoup de reconversions ratées ne réglaient pas le bon problème. Si tu détestes ton manager, tes horaires ou l&apos;ambiance de ton équipe, changer d&apos;entreprise peut suffire — pas besoin de repartir de zéro.
          </p>
          <p className='mt-3 leading-8 text-[#465160]'>
            Fais le test simple : imagine les mêmes missions, dans une autre structure, avec une équipe que tu apprécies. Si l&apos;idée te plaît encore, ton problème est le contexte, pas le métier.
          </p>
        </section>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>2. As-tu déjà testé cette nouvelle voie ?</h2>
          <img className='mt-5 h-auto w-full max-w-[500px] object-cover' src="/media/img-femme-carriere.svg" alt="Personne réfléchissant à sa carrière" />
          <p className='mt-5 leading-8 text-[#465160]'>
            Un métier vu de l&apos;extérieur (réseaux sociaux, témoignages enjolivés, fiches métier génériques) ne ressemble presque jamais au quotidien réel. Avant de financer une formation de plusieurs mois, vérifie sur le terrain : un stage d&apos;observation, une PMSMP, un mini-projet ou un échange avec deux professionnels du métier visé.
          </p>
          <p className='mt-3 leading-8 text-[#465160]'>
            Si tu n&apos;as encore rien testé, ce n&apos;est pas grave — c&apos;est justement l&apos;étape suivante, avant toute décision définitive.
          </p>
        </section>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>3. Peux-tu financer la transition ?</h2>
          <p className='mt-4 leading-8 text-[#465160]'>
            Une reconversion qui échoue à cause d&apos;un problème d&apos;argent, ce n&apos;est pas un problème d&apos;orientation. Avant de te lancer, regarde concrètement combien de temps tu peux tenir sans revenu stable, et ce qui peut être financé : CPF, aide individuelle à la formation de France Travail, ou alternance si le secteur visé le permet.
          </p>
          <p className='mt-3 leading-8 text-[#465160]'>
            Pour un premier bilan de compétences en ligne, la liste des organismes reconnus est disponible sur{' '}
            <a
              className='font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]'
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/modalite/resultats?q=%7B%22ou%22:%7B%22modality%22:%22A_DISTANCE%22%7D,%22debutPagination%22:1,%22nombreOccurences%22:6,%22quoi%22:%22bilan%20de%20comp%C3%A9tence%22,%22quoiReferentiel%22:null,%22certifications%22:null,%22contexteFormation%22:%22ACTIVITE_PROFESSIONNELLE%22%7D"
            >
              Mon Compte Formation
            </a>.
          </p>
        </section>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>4. As-tu un plan B si ça ne marche pas tout de suite ?</h2>
          <p className='mt-4 leading-8 text-[#465160]'>
            Peu de reconversions se passent exactement comme prévu : formation plus longue que prévu, premier poste différent de l&apos;objectif, secteur moins accessible que ce qu&apos;annonçaient les chiffres. Ce n&apos;est pas un échec, c&apos;est la norme.
          </p>
          <p className='mt-3 leading-8 text-[#465160]'>
            Prépare une option de repli réaliste : un secteur voisin, un poste intermédiaire, ou une alternance chez{' '}
            <a target="_blank" rel="noreferrer" className='font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]' href="https://candidat.francetravail.fr/formations/recherche?range=0-9&tri=0">France Travail</a>{' '}
            pour financer ta transition sans épuiser tes économies.
          </p>
        </section>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>5. Es-tu prêt à repartir en bas de l&apos;échelle ?</h2>
          <p className='mt-4 leading-8 text-[#465160]'>
            Changer de métier signifie souvent redémarrer avec un salaire d&apos;entrée et un statut junior, même après plusieurs années d&apos;expérience ailleurs. Ce n&apos;est pas toujours vrai (certaines compétences transférables — gestion de projet, relation client, analyse — se valorisent directement), mais il vaut mieux l&apos;anticiper que le découvrir en cours de route.
          </p>
          <p className='mt-3 leading-8 text-[#465160]'>
            Le réseautage aide à limiter cet effet : partager ton projet sur{' '}
            <a className='font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]' href="https://www.linkedin.com/company/jobmipro/" target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
            ou à ton entourage peut t&apos;ouvrir des portes que les candidatures classiques ne trouvent pas.
          </p>
        </section>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>Si tu as répondu honnêtement</h2>
          <p className='mt-4 leading-8 text-[#465160]'>
            Ces 5 questions ne te donnent pas une réponse définitive, mais elles t&apos;évitent de démarrer une reconversion pour de mauvaises raisons — ou sans avoir vérifié qu&apos;elle est finançable et réaliste. La prochaine étape logique est de transformer ce diagnostic en pistes concrètes : un test d&apos;orientation, une expérience terrain, puis une formation ciblée.
          </p>
        </section>

      </div>

      <div className='font-sans sm:mx-20 my-12 bg-[#F8F7FF] border border-[#E9E1FF] rounded-2xl p-8'>
        <h2 className='font-bold text-xl text-[#04192F] mb-5'>Pour aller plus loin</h2>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href="/test" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Test d&apos;orientation gratuit</p>
            <p className='text-xs text-gray-500 mt-1'>Identifie les métiers qui correspondent à ton profil en 6 à 8 min.</p>
          </Link>
          <Link href="/tester-un-metier" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Tester un métier avant de se lancer</p>
            <p className='text-xs text-gray-500 mt-1'>Ateliers, stages, PMSMP : toutes les façons de découvrir un métier sans t&apos;engager.</p>
          </Link>
          <Link href="/reconversion" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Guide reconversion à 20 ans</p>
            <p className='text-xs text-gray-500 mt-1'>Par où commencer, comment financer, erreurs à éviter : le guide complet.</p>
          </Link>
        </div>
      </div>

    </div>
  )
}
