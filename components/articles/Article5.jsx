import Link from 'next/link'

export const Article5 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Métiers sans diplôme :</p>
          <p className='text-justify'>
            Qui a dit qu'un bon salaire nécessitait forcément un bac+5 ? En 2025, de nombreux secteurs recrutent massivement des profils sans diplôme universitaire — et les rémunèrent très bien. Voici les métiers concrets à cibler.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Le mythe du diplôme comme seule voie vers un bon salaire</h2>
        <p className='mt-4'>
          En France, <strong>45 % des offres d'emploi ne mentionnent pas de niveau d'études requis</strong> (source : Pôle Emploi 2024). Le marché a changé : les compétences prouvées valent souvent plus qu'un parchemin. Surtout dans les secteurs en tension — numérique, artisanat, santé, logistique.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Les 15 métiers sans diplôme qui paient bien en 2025
        </h2>
      </div>

      <div className='font-sans sm:mx-20 space-y-8'>

        <div>
          <h3 className='font-bold text-xl mb-2'>1. Développeur web (autodidacte)</h3>
          <p><strong>Salaire moyen :</strong> 32 000 à 50 000 €/an junior</p>
          <p className='mt-2'>Les bootcamps de 3-6 mois (Le Wagon, OpenClassrooms, Wild Code School) permettent d'entrer dans le métier sans diplôme. Les recruteurs regardent le portfolio, pas le CV académique.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>2. Électricien / plombier</h3>
          <p><strong>Salaire moyen :</strong> 28 000 à 45 000 €/an</p>
          <p className='mt-2'>Pénurie massive. Un CAP suffit — et tu peux le passer en alternance en étant payé pendant ta formation. En indépendant, les plombiers gagnent souvent plus de 60 000 €/an.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>3. Commercial terrain (B2B)</h3>
          <p><strong>Salaire moyen :</strong> 30 000 à 60 000 €/an (fixe + variable)</p>
          <p className='mt-2'>Le secteur de la vente est l'un des plus méritocratiques. Beaucoup d'entreprises recrutent sur la motivation et les résultats, pas sur le diplôme. Le variable peut doubler le salaire fixe.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>4. Community manager / social media</h3>
          <p><strong>Salaire moyen :</strong> 25 000 à 38 000 €/an</p>
          <p className='mt-2'>Si tu maîtrises Instagram, TikTok et tu comprends les algorithmes, tu es déjà à mi-chemin. Une certification Google ou Meta (gratuites) suffit à te démarquer.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>5. Monteur vidéo / motion designer</h3>
          <p><strong>Salaire moyen :</strong> 28 000 à 42 000 €/an</p>
          <p className='mt-2'>Avec la montée des contenus vidéo (YouTube, Reels, TikTok), la demande est en explosion. Maîtriser Premiere Pro ou DaVinci Resolve s'apprend en autodidacte en 3-4 mois.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>6. Conducteur de travaux</h3>
          <p><strong>Salaire moyen :</strong> 35 000 à 55 000 €/an</p>
          <p className='mt-2'>Le BTP recrute en permanence. Le poste de conducteur de travaux est accessible avec une expérience terrain + des formations courtes. Gros potentiel d'évolution.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>7. Technicien de maintenance industrielle</h3>
          <p><strong>Salaire moyen :</strong> 30 000 à 48 000 €/an</p>
          <p className='mt-2'>L'industrie manque cruellement de techniciens. Un BTS ou un titre professionnel suffit. Les entreprises forment aussi en interne.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>8. Ambulancier / aide-soignant</h3>
          <p><strong>Salaire moyen :</strong> 24 000 à 35 000 €/an</p>
          <p className='mt-2'>Formations accessibles via Pôle Emploi ou le CPF. Secteur en tension permanente — l'emploi est garanti. Évolution possible vers infirmier.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>9. Gestionnaire de paie</h3>
          <p><strong>Salaire moyen :</strong> 28 000 à 40 000 €/an</p>
          <p className='mt-2'>Formation de 6-12 mois via un titre RNCP. Très demandé, peu de candidats. Travail à distance possible dans beaucoup de cas.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>10. Data analyst junior</h3>
          <p><strong>Salaire moyen :</strong> 32 000 à 48 000 €/an</p>
          <p className='mt-2'>Excel avancé + SQL + une certification Google Data Analytics (gratuite) peuvent suffire pour les postes junior. La demande explose avec la transformation numérique des entreprises.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>11. Agent immobilier</h3>
          <p><strong>Salaire moyen :</strong> 25 000 à 80 000 €/an (selon performances)</p>
          <p className='mt-2'>La carte T (obligatoire) s'obtient après une formation BTS ou avec une expérience. En agence, les meilleurs agents gagnent bien plus que beaucoup de cadres.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>12. Chef cuisinier / pâtissier</h3>
          <p><strong>Salaire moyen :</strong> 28 000 à 55 000 €/an</p>
          <p className='mt-2'>La restauration de qualité cherche des talents passionnés. Un CAP cuisine + expérience terrain est la voie royale. À l'international, les chefs français sont très demandés.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>13. Graphiste / designer UI</h3>
          <p><strong>Salaire moyen :</strong> 27 000 à 42 000 €/an</p>
          <p className='mt-2'>Figma, Canva Pro, Adobe Suite — ces outils s'apprennent en autodidacte. Un bon portfolio sur Behance vaut mieux que 3 ans de BTS pour décrocher un premier poste.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>14. Chauffeur poids lourd / livreur</h3>
          <p><strong>Salaire moyen :</strong> 26 000 à 38 000 €/an</p>
          <p className='mt-2'>Le permis C et la FIMO (formation initiale) suffisent. La logistique est sous-tension permanente. Évolution possible vers chef d'équipe logistique.</p>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>15. Cybersécurité (analyst junior)</h3>
          <p><strong>Salaire moyen :</strong> 35 000 à 55 000 €/an</p>
          <p className='mt-2'>Des certifications comme CompTIA Security+ ou CEH permettent d'entrer dans le secteur sans diplôme universitaire. L'un des secteurs les plus en pénurie en France.</p>
        </div>

      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Comment choisir le bon métier pour toi ?
        </h2>
        <span>
          <img className='sm:w-[400px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <p className='mb-6'>
          Connaître la liste ne suffit pas. Le bon métier, c'est l'intersection entre ce que tu aimes faire, ce pour quoi le marché paie, et ce que tu peux apprendre rapidement.
        </p>
        <p className='mb-6'>
          Pour t'aider à trouver cette intersection, <Link href="/test" className='underline font-semibold'>passe le test d'orientation Jobmi</Link>. En 5 minutes, tu obtiens une liste de métiers adaptés à ta personnalité et tes contraintes.
        </p>
        <p>
          Tu peux aussi consulter les <Link href="/stage-et-formation" className='underline font-semibold'>formations sélectionnées par Jobmi</Link> pour te former rapidement dans l'un de ces secteurs.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>FAQ</h2>
        <span>
          <img className='sm:w-[150px] w-[100px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 space-y-6'>
        <div>
          <h3 className='font-bold text-lg'>Peut-on vraiment bien gagner sa vie sans diplôme ?</h3>
          <p>Oui, dans les métiers cités ci-dessus. La clé : choisir un secteur en tension où la demande dépasse l'offre, et développer des compétences prouvables (portfolio, certifications, références).</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Quel métier sans diplôme paye le mieux ?</h3>
          <p>Commercial B2B (avec variable), développeur web senior autodidacte, et technicien de maintenance industrielle sont parmi les mieux rémunérés sans diplôme universitaire en France.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Comment se former sans diplôme rapidement ?</h3>
          <p>Bootcamps intensifs (développeur, UX), titres professionnels RNCP (6-12 mois), alternance, ou auto-formation avec certifications en ligne (Google, Microsoft, Meta). Le CPF finance beaucoup de ces parcours.</p>
        </div>
      </div>

    </div>
  )
}
