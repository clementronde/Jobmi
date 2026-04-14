import Link from 'next/link'

export const Article7 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Financer sa formation :</p>
          <p className='text-justify'>
            Le CPF est épuisé, l'employeur refuse, et la formation coûte trop cher ? Il existe en réalité de nombreuses solutions pour financer sa formation sans CPF — certaines totalement gratuites. Voici toutes les options concrètes pour 2025.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Le CPF n'est pas la seule solution</h2>
        <p className='mt-4'>
          Depuis l'introduction d'un reste à charge en 2024, de nombreuses formations CPF sont moins attractives. Bonne nouvelle : le financement de la formation professionnelle ne se résume pas au CPF. Il existe au moins <strong>8 dispositifs distincts</strong> pour financer ta formation en France.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          8 façons de financer sa formation sans (ou avec peu de) CPF
        </h2>
      </div>

      <div className='font-sans sm:mx-20 space-y-8'>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>1. L'alternance (contrat d'apprentissage)</h3>
          <p><strong>Coût pour toi : 0 €</strong></p>
          <p className='mt-2'>Tu es payé entre 27 % et 100 % du SMIC pendant ta formation. L'entreprise et l'État financent intégralement ta scolarité. C'est le meilleur deal possible : tu apprends, tu gagnes de l'argent, et tu sors avec une expérience.</p>
          <p className='mt-2 font-semibold'>Pour qui : 16-29 ans (ou sans limite si reconnu travailleur handicapé).</p>
        </div>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>2. France Travail (ex Pôle Emploi)</h3>
          <p><strong>Coût pour toi : souvent 0 €</strong></p>
          <p className='mt-2'>Si tu es demandeur d'emploi, France Travail peut financer ta formation à 100 % via l'Aide Individuelle à la Formation (AIF) ou des conventions régionales. Ton conseiller peut débloquer jusqu'à plusieurs milliers d'euros.</p>
          <p className='mt-2'>À savoir : <a className='underline' href="https://candidat.francetravail.fr/formations/recherche" target="_blank" rel="noopener noreferrer">France Travail liste les formations finançables</a> directement sur son site.</p>
        </div>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>3. Le Plan de Développement des Compétences (PDC)</h3>
          <p><strong>Coût pour toi : 0 €</strong></p>
          <p className='mt-2'>Si tu es salarié, ton employeur a l'obligation légale de maintenir ton employabilité. Tu peux demander une formation dans le cadre du PDC — elle se passe sur le temps de travail, payée normalement.</p>
          <p className='mt-2 font-semibold'>Astuce : formule la demande en lien avec les besoins de l'entreprise, pas juste tes intérêts personnels.</p>
        </div>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>4. Les OPCO (Opérateurs de Compétences)</h3>
          <p><strong>Coût pour toi : 0 à réduit</strong></p>
          <p className='mt-2'>Chaque branche professionnelle possède son OPCO (AFDAS pour le spectacle, ATLAS pour les services financiers, OPCO EP pour l'éducation privée, etc.). Ces organismes financent des formations spécifiques à leur secteur, parfois plus facilement que le CPF.</p>
        </div>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>5. Les aides régionales et locales</h3>
          <p><strong>Coût pour toi : variable, souvent très réduit</strong></p>
          <p className='mt-2'>Chaque région dispose d'un budget formation. Certaines financent des formations complètes dans les secteurs en tension (numérique, santé, BTP). La Région Île-de-France, par exemple, finance des formations certifiantes jusqu'à 100 % pour les demandeurs d'emploi.</p>
        </div>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>6. La Pro-A (Reconversion ou promotion par alternance)</h3>
          <p><strong>Coût pour toi : 0 €</strong></p>
          <p className='mt-2'>Tu es salarié et tu veux changer de métier tout en restant en poste ? La Pro-A te permet de te former en alternance en maintenant ton salaire. L'OPCO de ta branche finance la formation.</p>
          <p className='mt-2 font-semibold'>Condition : la formation doit mener à une qualification reconnue.</p>
        </div>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>7. Les bourses et aides des fondations</h3>
          <p><strong>Coût pour toi : 0 €</strong></p>
          <p className='mt-2'>Certaines fondations (Fondation Total, Fondation SNCF, Fondation Apprentis d'Auteuil) financent des formations pour les jeunes en difficulté. Peu connues, mais les dossiers sont moins compétitifs que les bourses d'État.</p>
        </div>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>8. Les formations gratuites en ligne (MOOC certifiants)</h3>
          <p><strong>Coût pour toi : 0 à 50 €</strong></p>
          <p className='mt-2'>Google, Microsoft, IBM, Meta proposent des certifications gratuites ou très peu coûteuses reconnues par le marché (Google Analytics, Google IT Support, Meta Marketing, IBM Data Science). Pour les postes tech et marketing, ces certifications valent parfois autant qu'un diplôme.</p>
        </div>

      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Quelle option choisir selon ta situation ?
        </h2>
        <span>
          <img className='sm:w-[400px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Tu es demandeur d'emploi ?</h3>
            <p>France Travail + aides régionales. Demande une AIF à ton conseiller en justifiant le projet professionnel.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Tu as moins de 26 ans et tu veux apprendre un métier ?</h3>
            <p>L'alternance est imbattable. Tu sors avec de l'expérience ET une qualification, sans dépenser un euro.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Tu es salarié et tu veux évoluer ?</h3>
            <p>PDC via ton employeur ou Pro-A si tu veux changer de métier tout en restant payé.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Tu veux te former vite et peu cher ?</h3>
            <p>MOOC certifiants Google/Microsoft + 1-2 projets personnels pour construire ton portfolio.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between sm:mx-10 sm:my-16 font-sans gap-10'>
        <div className='lg:w-2/3'>
          <p>
            Avant de choisir ton financement, il faut d'abord savoir quelle formation te correspond. <Link href="/test" className='underline font-semibold'>Passe le test d'orientation Jobmi</Link> pour identifier les métiers adaptés à ton profil, puis consulte les <Link href="/stage-et-formation" className='underline font-semibold'>formations disponibles</Link>.
          </p>
        </div>
        <div className='lg:w-1/3 flex items-center'>
          <Link href="/stage-et-formation" className='flex gap-2 font-semibold underline'>
            Voir les formations
            <img className='sm:ml-2 w-5' src="/media/blog-CTA-fleche.svg" alt="Flèche" />
          </Link>
        </div>
      </div>

    </div>
  )
}
