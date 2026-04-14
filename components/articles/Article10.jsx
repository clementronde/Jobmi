import Link from 'next/link'

export const Article10 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Métiers d'avenir 2025 :</p>
          <p className='text-justify'>
            Tous les métiers ne se valent pas face à l'IA et à la transformation numérique. Certains secteurs explosent en recrutement, d'autres stagnent ou disparaissent. Voici les 15 métiers d'avenir en 2025 qui recrutent vraiment — pas des promesses, des chiffres.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Pourquoi choisir un "métier d'avenir" plutôt qu'un métier actuel ?</h2>
        <p className='mt-4'>
          L'objectif n'est pas de choisir le métier le plus futuriste, mais celui qui combine <strong>forte demande actuelle</strong>, <strong>pénurie de candidats</strong> et <strong>résistance à l'automatisation</strong>. Un métier d'avenir en 2025, c'est un métier où tu trouveras facilement un emploi et où tu seras encore demandé dans 10 ans.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Les 15 métiers d'avenir qui recrutent en 2025
        </h2>
      </div>

      <div className='font-sans sm:mx-20 space-y-6'>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>1. Prompt engineer / IA specialist</h3>
          <p><strong>Secteur :</strong> Tech / IA | <strong>Formation :</strong> 3-6 mois | <strong>Salaire junior :</strong> 35 000-55 000 €</p>
          <p className='mt-2'>Les entreprises cherchent des profils capables d'optimiser les interactions avec les IA (ChatGPT, Claude, Gemini). Métier nouveau, peu de concurrence, forte demande.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>2. Technicien en énergies renouvelables</h3>
          <p><strong>Secteur :</strong> Green tech | <strong>Formation :</strong> BTS / 1 an | <strong>Salaire :</strong> 28 000-42 000 €</p>
          <p className='mt-2'>Solaire, éolien, pompes à chaleur : la France investit massivement dans la transition énergétique. Les techniciens manquent cruellement partout en France.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>3. Développeur web (spécialité IA/no-code)</h3>
          <p><strong>Secteur :</strong> Tech | <strong>Formation :</strong> 6-12 mois | <strong>Salaire junior :</strong> 32 000-50 000 €</p>
          <p className='mt-2'>Les devs qui maîtrisent les APIs d'IA (OpenAI, Anthropic) et les outils no-code/low-code (Bubble, Webflow, Make) sont extrêmement recherchés en 2025.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>4. Infirmier(e) / aide-soignant(e)</h3>
          <p><strong>Secteur :</strong> Santé | <strong>Formation :</strong> 3 ans / 1 an AS | <strong>Salaire :</strong> 26 000-45 000 €</p>
          <p className='mt-2'>Le vieillissement de la population crée une demande structurelle et durable. Emploi garanti partout en France, reconversions très fréquentes et accompagnées.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>5. Expert en cybersécurité</h3>
          <p><strong>Secteur :</strong> Tech | <strong>Formation :</strong> 6-18 mois | <strong>Salaire junior :</strong> 38 000-55 000 €</p>
          <p className='mt-2'>250 000 postes non pourvus en Europe. La menace cyber augmente chaque année. Les certifications CompTIA, CEH ou OSCP permettent d'entrer dans le secteur sans diplôme universitaire.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>6. Data analyst / Business Intelligence</h3>
          <p><strong>Secteur :</strong> Data | <strong>Formation :</strong> 6-12 mois | <strong>Salaire junior :</strong> 32 000-48 000 €</p>
          <p className='mt-2'>Toutes les entreprises veulent comprendre leurs données. Excel avancé + SQL + Power BI suffisent pour les postes junior. Formation courte, impact immédiat.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>7. Conseiller en insertion professionnelle</h3>
          <p><strong>Secteur :</strong> Social | <strong>Formation :</strong> Titre RNCP / 1 an | <strong>Salaire :</strong> 26 000-35 000 €</p>
          <p className='mt-2'>France Travail, missions locales, associations : les conseillers qui accompagnent les personnes en reconversion manquent partout. Métier profondément humain et résistant à l'IA.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>8. Électricien spécialisé (bornes EV, solaire)</h3>
          <p><strong>Secteur :</strong> BTP / Green | <strong>Formation :</strong> CAP + spécialisation | <strong>Salaire :</strong> 32 000-55 000 €</p>
          <p className='mt-2'>L'essor des voitures électriques et du solaire résidentiel crée une demande d'électriciens spécialisés bien supérieure à l'offre actuelle. Carnet de commandes plein pour des années.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>9. UX/UI designer</h3>
          <p><strong>Secteur :</strong> Design / Tech | <strong>Formation :</strong> 3-9 mois | <strong>Salaire junior :</strong> 30 000-45 000 €</p>
          <p className='mt-2'>Chaque application, site web et service digital a besoin d'UX. Figma s'apprend en quelques mois. Le portfolio > le diplôme dans ce secteur.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>10. Responsable RSE (Responsabilité Sociétale)</h3>
          <p><strong>Secteur :</strong> Management | <strong>Formation :</strong> Master ou reconversion | <strong>Salaire :</strong> 35 000-60 000 €</p>
          <p className='mt-2'>La réglementation européenne (CSRD) oblige les entreprises à nommer des responsables RSE. Métier en explosion, peu de candidats formés, forte transversalité.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>11. Monteur / réalisateur de contenu vidéo</h3>
          <p><strong>Secteur :</strong> Créatif | <strong>Formation :</strong> 3-6 mois | <strong>Salaire :</strong> 28 000-50 000 €</p>
          <p className='mt-2'>YouTube, Reels, TikTok for Business : toutes les marques veulent de la vidéo. Les bons monteurs sont rares, les outils s'apprennent vite (Premiere Pro, DaVinci Resolve).</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>12. Technicien de maintenance informatique</h3>
          <p><strong>Secteur :</strong> Tech | <strong>Formation :</strong> BTS / Titre Pro | <strong>Salaire :</strong> 26 000-38 000 €</p>
          <p className='mt-2'>Chaque entreprise a du matériel informatique à maintenir. Secteur stable, emploi local garanti, formation courte accessible.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>13. Coach professionnel certifié</h3>
          <p><strong>Secteur :</strong> RH / Accompagnement | <strong>Formation :</strong> 6-18 mois | <strong>Salaire :</strong> 25 000-80 000 € (indépendant)</p>
          <p className='mt-2'>La demande de coaching explose en entreprise et en individuel. La certification (ICF, RNCP) est indispensable. Métier très accessible en reconversion depuis des profils variés.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>14. Logisticien / supply chain manager</h3>
          <p><strong>Secteur :</strong> Industrie / E-commerce | <strong>Formation :</strong> BTS / Licence | <strong>Salaire :</strong> 28 000-55 000 €</p>
          <p className='mt-2'>L'essor du e-commerce a rendu la logistique stratégique. Les profils supply chain bien formés sont recherchés dans l'industrie, la distribution et les marketplaces.</p>
        </div>

        <div className='border-l-4 border-violet pl-4'>
          <h3 className='font-bold text-xl'>15. Médiateur numérique</h3>
          <p><strong>Secteur :</strong> Social / Tech | <strong>Formation :</strong> Titre RNCP / 1 an | <strong>Salaire :</strong> 24 000-34 000 €</p>
          <p className='mt-2'>Accompagner les personnes éloignées du numérique (seniors, publics précaires). Missions locales, collectivités, associations : recrutent en permanence. Métier profondément humain.</p>
        </div>

      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between sm:mx-10 sm:my-16 font-sans gap-10'>
        <div className='lg:w-2/3'>
          <p className='mb-4'>
            Parmi ces 15 métiers, lequel correspond à ton profil ? <Link href="/test" className='underline font-semibold'>Le test d'orientation Jobmi</Link> t'aide à identifier le secteur où tu as le plus de chances de réussir ta reconversion.
          </p>
        </div>
        <div className='lg:w-1/3 flex items-center'>
          <Link href="/test" className='flex gap-2 font-semibold underline'>
            Trouver mon métier d'avenir
            <img className='sm:ml-2 w-5' src="/media/blog-CTA-fleche.svg" alt="Flèche" />
          </Link>
        </div>
      </div>

    </div>
  )
}
