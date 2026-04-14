import Link from 'next/link'

export const Article4 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Reconversion à 20 ans :</p>
          <p className='text-justify'>
            Changer de voie à 20 ans, c'est possible — et c'est même l'un des meilleurs moments pour le faire. Tu as peu de contraintes, beaucoup d'énergie, et le marché du travail est en pleine transformation. Ce guide te donne toutes les étapes pour réussir ta reconversion professionnelle à 20 ans, sans te perdre.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Pourquoi se reconvertir à 20 ans est une vraie opportunité</h2>
        <p className='mt-4'>
          Contrairement à ce qu'on entend souvent, il n'est pas "trop tôt" pour se reconvertir. À 20 ans, tu es encore en train de construire ton identité professionnelle. Si tu réalises que la voie choisie après le bac ne te correspond pas, mieux vaut agir maintenant que dans 10 ans avec un crédit immobilier et des enfants.
        </p>
        <p className='mt-4'>
          Les données le confirment : <strong>67 % des actifs de moins de 30 ans</strong> souhaitent changer de métier selon une étude APEC 2024. Tu n'es pas seul.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Étape 1 — Comprendre pourquoi tu veux changer
        </h2>
      </div>

      <div className='font-sans sm:mx-20'>
        <p>
          Avant de foncer, prends 48h pour répondre honnêtement à ces trois questions :
        </p>
        <div className='space-y-4 mt-6'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Est-ce le secteur ou le métier qui ne te convient pas ?</h3>
            <p>Un développeur web qui déteste les open-spaces n'a pas le même problème qu'un développeur web qui n'aime pas coder. La réponse change tout.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Qu'est-ce qui te donne de l'énergie naturellement ?</h3>
            <p>Pas ce que tu es "bon à faire" — ce qui te fait perdre la notion du temps. C'est souvent là que se cache ta voie.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>As-tu besoin de salaire immédiatement ou peux-tu te former d'abord ?</h3>
            <p>Cette contrainte économique est réelle et va déterminer le rythme de ta reconversion.</p>
          </div>
        </div>
        <p className='mt-6'>
          Pour t'aider à répondre à ces questions, tu peux <Link href="/test" className='underline font-semibold'>passer le test d'orientation Jobmi</Link> — il prend 5 minutes et te donne des pistes concrètes basées sur ton profil.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Étape 2 — Identifier les métiers accessibles
        </h2>
        <span>
          <img className='sm:w-[400px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 my-10'>
        <p className='mb-10'>
          Tous les métiers ne sont pas accessibles au même rythme. Voici comment les classer selon ton profil :
        </p>
        <div className='space-y-10 sm:mx-20 mx-5'>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>01</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Métiers accessibles en moins de 6 mois :</p>
              <p>Commercial, community manager, assistant RH, monteur vidéo, graphiste junior. Ces métiers valorisent les soft skills et les portfolios plus que les diplômes.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>02</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Métiers accessibles en 1-2 ans :</p>
              <p>Développeur web, UX designer, infirmier, électricien, plombier. Une formation courte sufffit, souvent financée par le CPF ou France Travail.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>03</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Métiers nécessitant 3 ans ou plus :</p>
              <p>Médecin, avocat, architecte. Si tu vises ces secteurs à 20 ans, tu as largement le temps — mais sois réaliste sur l'investissement.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Étape 3 — Financer ta reconversion
        </h2>
        <span>
          <img className='sm:w-[300px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <p className='mb-6'>
          L'argent est souvent le frein numéro 1. Voici les dispositifs faits pour toi :
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
            <p>Chaque région finance des formations spécifiques. Renseigne-toi auprès de ta région — certaines offrent des formations gratuites dans les secteurs en tension (numérique, santé, BTP).</p>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Étape 4 — Passer à l'action sans attendre
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
            Trouve un stage, un projet bénévole, une mission freelance dans le domaine qui t'intéresse. 3 semaines d'expérience réelle valent 6 mois de recherches sur Internet.
          </p>
          <p>
            Tu peux aussi explorer les <Link href="/stage-et-formation" className='underline font-semibold'>stages et formations sélectionnés par Jobmi</Link> pour découvrir des opportunités concrètes adaptées à ton profil.
          </p>
        </div>
        <div className='lg:w-1/3 flex items-center'>
          <Link href="/test" className='flex gap-2 text-1xl font-semibold underline'>
            Passe le test d'orientation
            <img className='sm:ml-2 w-5' src="/media/blog-CTA-fleche.svg" alt="Flèche" />
          </Link>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>FAQ — Reconversion à 20 ans</h2>
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

    </div>
  )
}
