import Link from 'next/link'

export const Article4 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Plan en 30 jours :</p>
          <p className='text-justify'>
            Changer de voie à 20 ans, c'est possible, mais le vrai danger est de rester trop longtemps dans le flou. Cet article complète la page pilier sur la reconversion jeune avec un plan d'action simple : 30 jours pour comprendre ce qui bloque, explorer des pistes, tester le terrain et préparer une suite réaliste.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Pourquoi cadrer ta reconversion sur 30 jours</h2>
        <p className='mt-4'>
          Une reconversion ne se décide pas en une soirée, mais elle n'a pas non plus besoin de rester un sujet vague pendant six mois. À 20 ans, tu peux avancer par petites expériences : faire le point, parler à des pros, comparer des formations, puis tester une piste avant de t'engager.
        </p>
        <p className='mt-4'>
          Si tu veux d'abord comprendre les grands principes, les erreurs à éviter et les aides possibles, commence par la page pilier <Link href="/reconversion" className='underline font-semibold'>reconversion professionnelle à 20 ans</Link>. Ici, on se concentre sur l'exécution.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Étape 1 - Comprendre pourquoi tu veux changer
        </h2>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          Les trois premiers jours servent à nommer le problème. Avant de foncer, prends 48h pour répondre honnêtement à ces trois questions :
        </p>
        <div className='space-y-4 mt-6'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Est-ce le secteur ou le métier qui ne te convient pas ?</h3>
            <p>Un développeur web qui déteste les open-spaces n'a pas le même problème qu'un développeur web qui n'aime pas coder. La réponse change tout.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Qu'est-ce qui te donne de l'énergie naturellement ?</h3>
            <p>Pas ce que tu es "bon à faire", ce qui te fait perdre la notion du temps. C'est souvent là que se cache ta voie.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>As-tu besoin de salaire immédiatement ou peux-tu te former d'abord ?</h3>
            <p>Cette contrainte économique est réelle et va déterminer le rythme de ta reconversion.</p>
          </div>
        </div>
        <p className='mt-6'>
          Pour t'aider à répondre à ces questions, tu peux <Link href="/test" className='underline font-semibold'>passer le test d'orientation Jobmi</Link>, puis revenir ici avec 2 ou 3 familles de métiers à creuser.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Étape 2 - Explorer 3 pistes réalistes
        </h2>
        <span>
          <img className='sm:w-[400px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 my-10'>
        <p className='mb-8'>
          Entre les jours 4 et 12, ne cherche pas encore le métier parfait. Choisis trois pistes et classe-les selon l'effort réel nécessaire.
        </p>
        <div className='space-y-4'>
          <div className='grid gap-4 rounded-2xl border border-[#E9E1FF] bg-[#F8F7FF] p-5 sm:grid-cols-[72px_minmax(0,1fr)] sm:p-6'>
            <div>
              <p className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#6500FF] shadow-sm'>01</p>
            </div>
            <div>
              <p className='font-bold mb-2'>Métiers accessibles en moins de 6 mois :</p>
              <p>Commercial, community manager, assistant RH, monteur vidéo, graphiste junior. Ces métiers valorisent les soft skills et les portfolios plus que les diplômes.</p>
            </div>
          </div>
          <div className='grid gap-4 rounded-2xl border border-[#E9E1FF] bg-[#F8F7FF] p-5 sm:grid-cols-[72px_minmax(0,1fr)] sm:p-6'>
            <div>
              <p className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#6500FF] shadow-sm'>02</p>
            </div>
            <div>
              <p className='font-bold mb-2'>Métiers accessibles en 1-2 ans :</p>
              <p>Développeur web, UX designer, infirmier, électricien, plombier. Une formation courte sufffit, souvent financée par le CPF ou France Travail.</p>
            </div>
          </div>
          <div className='grid gap-4 rounded-2xl border border-[#E9E1FF] bg-[#F8F7FF] p-5 sm:grid-cols-[72px_minmax(0,1fr)] sm:p-6'>
            <div>
              <p className='flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#6500FF] shadow-sm'>03</p>
            </div>
            <div>
              <p className='font-bold mb-2'>Métiers nécessitant 3 ans ou plus :</p>
              <p>Médecin, avocat, architecte. Si tu vises ces secteurs à 20 ans, tu as largement le temps mais sois réaliste sur l'investissement.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Étape 3 - Vérifier le financement et les formats
        </h2>
        <span>
          <img className='sm:w-[300px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <p className='mb-6'>
          Entre les jours 13 et 20, regarde les formats avant de choisir une école ou une formation. L'argent est souvent le frein numéro 1, mais il existe plusieurs portes d'entrée.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>CPF (Compte Personnel de Formation)</h3>
            <p>Tu as accumulé des droits à la formation dès le premier jour de travail. Même après un job étudiant de 3 mois, tu peux avoir 150-500€ disponibles. Vérifie sur <a className='underline' href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer">moncompteformation.gouv.fr</a>.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Alternance (contrat d'apprentissage)</h3>
            <p>Tu te formes ET tu es payé. Le salaire varie de 27 % à 100 % du SMIC selon ton âge et niveau. C'est souvent la meilleure option à 20 ans.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Aides régionales</h3>
            <p>Chaque région finance des formations spécifiques. Renseigne-toi auprès de ta région, certaines offrent des formations gratuites dans les secteurs en tension (numérique, santé, BTP).</p>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Étape 4 - Tester le terrain avant le jour 30
        </h2>
        <span>
          <img className='sm:w-[370px] w-[250px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between sm:mx-10 sm:my-10 font-sans gap-20'>
        <div className='lg:w-2/3'>
          <p className='mb-4'>
            Le piège de la reconversion, c'est de rester en mode "réflexion" indéfiniment. La meilleure façon d'avancer : <strong>teste avant de t'engager</strong>.
          </p>
          <p className='mb-4'>
            Trouve un stage d'observation, une PMSMP, un projet bénévole, une mission freelance ou un atelier métier dans le domaine qui t'intéresse. Quelques jours d'expérience réelle valent souvent des mois de recherches sur Internet.
          </p>
          <p>
            Tu peux aussi explorer les <Link href="/stage-et-formation" className='underline font-semibold'>stages, immersions et pistes de formation</Link>, ou lire le guide <Link href="/blog/pmsmp-18-25-tester-metier-immersion" className='underline font-semibold'>PMSMP 18–25 ans</Link> si tu veux tester un métier avec un cadre officiel.
          </p>
        </div>
        <div className='lg:w-1/3 flex items-center'>
          <Link href="/test" className='article-cta-link'>
            Passe le test d'orientation
          </Link>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>FAQ - Reconversion à 20 ans</h2>
        <span>
          <img className='sm:w-[300px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 space-y-6'>
        <div>
          <h3 className='font-bold text-lg'>Est-il trop tôt pour se reconvertir à 20 ans ?</h3>
          <p>Non. À 20 ans, tu as peu de contraintes financières et familiales. C'est le meilleur moment pour expérimenter sans risquer gros.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Peut-on se reconvertir sans diplôme ?</h3>
          <p>Oui, dans de nombreux secteurs. Le numérique, l'artisanat, le commerce et les métiers manuels valorisent les compétences pratiques plus que les titres académiques.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Combien de temps dure une reconversion à 20 ans ?</h3>
          <p>Entre 3 mois (pour des métiers accessibles rapidement) et 2 ans (pour des formations certifiantes). La majorité des reconversions réussies durent entre 6 et 12 mois.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Faut-il un bilan de compétences avant de se reconvertir ?</h3>
          <p>Ce n'est pas obligatoire, mais fortement recommandé. Le bilan t'aide à éviter de te "reconvertir dans le mauvais sens" par erreur d'analyse.</p>
        </div>
      </div>

      <div className='font-sans sm:mx-20 my-12 bg-[#F8F7FF] border border-[#E9E1FF] rounded-2xl p-8'>
        <h2 className='font-bold text-xl text-[#04192F] mb-5'>Pour aller plus loin</h2>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href="/reconversion" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Guide complet reconversion à 20 ans</p>
            <p className='text-xs text-gray-500 mt-1'>Méthode, financement, erreurs à éviter : tout ce qu'il faut savoir.</p>
          </Link>
          <Link href="/tester-un-metier" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Tester un métier avant de te lancer</p>
            <p className='text-xs text-gray-500 mt-1'>Ateliers, stages, PMSMP : confronte ton idée à la réalité du terrain.</p>
          </Link>
          <Link href="/test-orientation" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Test d'orientation gratuit</p>
            <p className='text-xs text-gray-500 mt-1'>15 minutes pour identifier les métiers qui correspondent vraiment à ton profil.</p>
          </Link>
        </div>
      </div>

    </div>
  )
}
