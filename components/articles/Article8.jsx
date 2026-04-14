import Link from 'next/link'

export const Article8 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Reconversion après bac+2 :</p>
          <p className='text-justify'>
            Tu as un BTS, un DUT ou une licence pro, et tu réalises que ce n'est pas fait pour toi. Bonne nouvelle : à bac+2, tu as déjà des compétences transférables solides — et plusieurs chemins s'ouvrent à toi sans repartir de zéro.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Pourquoi le bac+2 est un pivot idéal</h2>
        <p className='mt-4'>
          Le bac+2 est souvent sous-estimé. Pourtant, un BTS ou DUT te donne des compétences concrètes, une première expérience via les stages, et une crédibilité professionnelle. Dans de nombreux secteurs, c'est suffisant pour te reconvertir — ou même te positionner en reconversion avancée vers des postes plus qualifiés.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Les 5 chemins possibles après un bac+2
        </h2>
      </div>

      <div className='font-sans sm:mx-20 space-y-10'>

        <div>
          <h3 className='text-2xl font-bold mb-3'>Chemin 1 — La licence professionnelle (1 an)</h3>
          <p className='mb-3'>
            La licence pro est conçue pour les bac+2 qui veulent se spécialiser ou bifurquer légèrement. Elle se passe souvent en alternance — donc sans coût et avec un salaire. <strong>C'est le chemin le plus logique si ton nouveau secteur est proche de ton bac+2.</strong>
          </p>
          <p>Exemple : BTS Commerce → Licence Pro Marketing Digital. Tu capitalises sur tes bases sans tout recommencer.</p>
        </div>

        <div>
          <h3 className='text-2xl font-bold mb-3'>Chemin 2 — La formation certifiante courte (3-12 mois)</h3>
          <p className='mb-3'>
            Si tu veux changer radicalement de secteur, une formation intensive est souvent plus efficace qu'un retour à l'université. Les bootcamps tech, les titres RNCP niveau 5 ou 6, ou les formations courtes type OpenClassrooms te permettent de te reconvertir rapidement.
          </p>
          <p>Financement possible : CPF, France Travail, alternance, ou Pro-A si tu es salarié.</p>
        </div>

        <div>
          <h3 className='text-2xl font-bold mb-3'>Chemin 3 — La validation des acquis (VAE)</h3>
          <p className='mb-3'>
            Si tu as de l'expérience professionnelle (stages + jobs), tu peux valider un diplôme supérieur sans te reformer. La VAE est sous-utilisée mais redoutablement efficace : tu présentes un dossier et tu passes devant un jury.
          </p>
          <p>À partir de 3 ans d'expérience dans un domaine, tu peux viser un diplôme de niveau 6 (bac+3) ou même 7 (bac+5) par cette voie.</p>
        </div>

        <div>
          <h3 className='text-2xl font-bold mb-3'>Chemin 4 — L'entrepreneuriat direct</h3>
          <p className='mb-3'>
            Ton bac+2 te donne une légitimité suffisante pour créer une micro-entreprise dans de nombreux secteurs. Freelance en communication, consultant junior, artisan spécialisé — à 22-24 ans avec un bac+2, tu peux te lancer directement si tu as les compétences pratiques.
          </p>
          <p>Les plateformes comme Malt ou Upwork permettent de tester le marché sans quitter ton emploi actuel.</p>
        </div>

        <div>
          <h3 className='text-2xl font-bold mb-3'>Chemin 5 — L'immersion terrain + auto-formation</h3>
          <p className='mb-3'>
            Dans les secteurs tech, créatifs et commerciaux, un portfolio solide > un diplôme. Commence par travailler sur des projets personnels, contribuer à des projets open source, ou te former via YouTube et des certifications gratuites. Puis envoie ton travail, pas ton CV.
          </p>
          <p>Ce chemin est le plus long mais le moins coûteux. Il fonctionne très bien pour le développement web, le design, le marketing digital et le contenu.</p>
        </div>

      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Les secteurs les plus accessibles depuis un bac+2
        </h2>
        <span>
          <img className='sm:w-[500px] w-[250px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Numérique & Tech</h3>
            <p>Développement web, data, cybersécurité, UX design. Formation courte possible, emploi quasi-garanti, télétravail fréquent.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Ressources Humaines</h3>
            <p>Recrutement, formation, paie. Beaucoup de passerelles depuis les bac+2 de gestion ou commerce.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Marketing Digital</h3>
            <p>SEO, social media, emailing, ads. Formation courte + certifications gratuites (Google, Meta) suffisent.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Santé & Social</h3>
            <p>Aide-soignant, éducateur spécialisé, psychomotricien. Formations accessibles, reconversions très fréquentes.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Commerce & Immobilier</h3>
            <p>Commercial, agent immobilier, conseiller clientèle. Mérite et résultats > diplômes dans ces secteurs.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Artisanat & BTP</h3>
            <p>Électricien, plombier, menuisier. Recrutement massif, excellent salaire, possibilité de créer son entreprise rapidement.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between sm:mx-10 sm:my-16 font-sans gap-10'>
        <div className='lg:w-2/3'>
          <p className='mb-4'>
            Quel chemin correspond à ton profil bac+2 ? <Link href="/test" className='underline font-semibold'>Le test d'orientation Jobmi</Link> t'aide à identifier le secteur et le chemin les plus adaptés à ta situation.
          </p>
          <p>
            Tu peux aussi explorer directement les <Link href="/stage-et-formation" className='underline font-semibold'>stages et formations disponibles</Link> pour te faire une idée concrète des options qui s'offrent à toi.
          </p>
        </div>
        <div className='lg:w-1/3 flex items-center'>
          <Link href="/test" className='flex gap-2 font-semibold underline'>
            Découvrir mon profil
            <img className='sm:ml-2 w-5' src="/media/blog-CTA-fleche.svg" alt="Flèche" />
          </Link>
        </div>
      </div>

    </div>
  )
}
