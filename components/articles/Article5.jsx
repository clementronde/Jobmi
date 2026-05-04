import Link from 'next/link'

export const Article5 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Métiers sans diplôme :</p>
          <p className='text-justify'>
            Tu n'as pas envie (ou pas la possibilité) de faire un bac+5, mais tu veux quand même bien gagner ta vie. Bonne nouvelle : en 2026, de nombreux métiers recrutent sans exiger de long diplôme, surtout dans les secteurs en tension comme la restauration, la logistique, le BTP, le transport, le numérique ou les services à la personne.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <p>
          Ce guide te donne 15 idées de métiers accessibles sans diplôme universitaire, avec des salaires corrects et de vraies perspectives d'évolution, à condition d'être prêt à te former et à prouver tes compétences.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Le mythe du diplôme comme seule voie vers un bon salaire
        </h2>
      </div>

      <div className='font-sans sm:mx-20'>
        <p className='mb-4'>On entend souvent : "Sans diplôme, tu ne trouveras jamais un bon job". Dans les faits, beaucoup d'entreprises cherchent surtout :</p>
        <ul className='space-y-2 mb-4'>
          <li>des personnes motivées,</li>
          <li>capables d'apprendre vite,</li>
          <li>qui ont déjà montré quelque chose (stage, projet, expérience terrain).</li>
        </ul>
        <p className='mb-4'>
          Les secteurs en tension — commerce, logistique, BTP, hôtellerie‑restauration, transport, services à la personne, industrie, numérique — recrutent massivement sans exiger de diplôme long.
        </p>
        <p>
          Le diplôme peut aider, mais ce qui compte vraiment, c'est de choisir un secteur qui recrute et de démontrer ta valeur : portfolio, certifications, immersion, alternance.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-10 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-3xl font-bold text-center'>Comment lire ce top 15</h2>
        <span>
          <img className='sm:w-[300px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20'>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p>Les salaires indiqués sont des <strong>ordres de grandeur bruts annuels</strong> pour des profils débutants ou juniors (hors primes). Ils varient selon la région, le type de contrat, l'entreprise et ton niveau d'expérience.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p>Beaucoup de métiers cités sont accessibles sans diplôme, mais nécessitent une formation courte (CAP, titre pro, bootcamp, certification) ou une expérience terrain (stage, PMSMP, alternance…).</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p>Idéalement, tu <strong>testes le métier en vrai</strong> (atelier, stage d'observation, PMSMP…) avant de te lancer dans une formation.</p>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Top 15 des métiers sans diplôme qui paient bien en 2026
        </h2>
      </div>

      <div className='font-sans sm:mx-20 space-y-10'>

        <div>
          <h3 className='font-bold text-xl mb-2'>1. Développeur·se web (autodidacte ou bootcamp)</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 32 000 à 50 000 €/an en début de carrière (plus avec l'expérience et en freelance).</p>
          <p className='mb-4'>Les bootcamps de 3 à 6 mois (Le Wagon, OpenClassrooms, Wild Code School…) et les parcours en ligne permettent d'entrer dans le métier sans diplôme universitaire. Les recruteurs regardent surtout ton portfolio, ta capacité à résoudre des problèmes et ta maîtrise des bases (HTML/CSS, JavaScript, un framework).</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer sans diplôme :</p>
            <ul className='space-y-1'>
              <li>suivre une formation courte/bootcamp,</li>
              <li>construire un portfolio (projets perso, petits freelances),</li>
              <li>participer à des hackathons / projets associatifs.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>2. Électricien·ne / plombier·e</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 28 000 à 45 000 €/an salarié, plus en indépendant.</p>
          <p className='mb-4'>Le BTP manque cruellement de main‑d'œuvre. Un CAP en alternance (rémunéré) suffit pour entrer dans le métier : tu te formes et tu es payé en même temps. En indépendant, un plombier expérimenté peut dépasser largement les 60 000 €/an.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer sans diplôme :</p>
            <ul className='space-y-1'>
              <li>viser un CAP en alternance (cuisine, plomberie, électricité, etc.),</li>
              <li>tester le métier via un stage d'observation ou une PMSMP.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>3. Commercial·e terrain (B2B)</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 30 000 à 60 000 €/an (fixe + variable), parfois plus.</p>
          <p className='mb-4'>La vente est l'un des secteurs les plus méritocratiques : on te juge sur tes résultats, pas sur ton bac. Les meilleurs commerciaux B2B combinent sens du contact, capacité à écouter et résistance au refus.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer sans diplôme :</p>
            <ul className='space-y-1'>
              <li>premiers postes en téléprospection / vente magasin,</li>
              <li>auto‑formation (livres, vidéos, formations courtes),</li>
              <li>évoluer vers la vente B2B une fois que tu as des résultats à montrer.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>4. Community manager / social media manager</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 25 000 à 38 000 €/an au départ.</p>
          <p className='mb-4'>Si tu passes déjà du temps sur Instagram, TikTok et YouTube, tu as un avantage. Le marché cherche des profils capables de créer du contenu, comprendre les algorithmes et analyser les stats.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer sans diplôme :</p>
            <ul className='space-y-1'>
              <li>gérer les réseaux d'une asso / d'un petit commerce,</li>
              <li>obtenir une ou deux certifications gratuites (Google, Meta),</li>
              <li>construire un portfolio (posts, campagnes, stats avant/après).</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>5. Monteur·se vidéo / motion designer</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 28 000 à 42 000 €/an.</p>
          <p className='mb-4'>La vidéo explose (YouTube, Twitch, Reels, TikTok). Beaucoup de créateurs et d'entreprises cherchent des monteurs capables de produire des vidéos propres, dynamiques, adaptées aux réseaux.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer sans diplôme :</p>
            <ul className='space-y-1'>
              <li>apprendre un logiciel (Premiere Pro, DaVinci Resolve, After Effects),</li>
              <li>remonter des vidéos pour des YouTubeurs, associations, PME,</li>
              <li>publier tes réalisations sur un portfolio en ligne.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>6. Conducteur·rice de travaux (évolution BTP)</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 35 000 à 55 000 €/an.</p>
          <p className='mb-4'>Ce poste vient généralement après quelques années d'expérience sur le terrain (maçonnerie, gros œuvre, second œuvre). Tu gères des chantiers, des équipes, les délais.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer sans diplôme :</p>
            <ul className='space-y-1'>
              <li>entrer dans le BTP sur un poste d'ouvrier (avec ou sans CAP),</li>
              <li>suivre des formations courtes en gestion de chantier,</li>
              <li>évoluer progressivement vers la conduite de travaux.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>7. Technicien·ne de maintenance industrielle</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 30 000 à 48 000 €/an.</p>
          <p className='mb-4'>L'industrie manque de techniciens capables de maintenir les machines. Les postes sont souvent en horaires décalés, mais bien payés, avec beaucoup d'offres.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer sans long diplôme :</p>
            <ul className='space-y-1'>
              <li>viser un titre pro ou un BTS maintenance (en alternance si possible),</li>
              <li>accepter un premier poste dans une usine / entrepôt pour se faire l'expérience.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>8. Ambulancier·ère / aide‑soignant·e</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 24 000 à 35 000 €/an.</p>
          <p className='mb-4'>Les métiers du soin sont en tension : hôpitaux, cliniques, Ehpad recrutent en continu. Les formations d'ambulancier et d'aide‑soignant sont accessibles avec un niveau bac ou en reconversion, et peuvent être financées (France Travail, régions…).</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer sans diplôme universitaire :</p>
            <ul className='space-y-1'>
              <li>se renseigner sur les concours / sélections et les aides régionales,</li>
              <li>faire une immersion (PMSMP, stage d'observation) pour confirmer que le quotidien te convient.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>9. Gestionnaire de paie</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 28 000 à 40 000 €/an.</p>
          <p className='mb-4'>Très demandé, peu de candidats : la paie est un métier technique, mais accessible via un titre professionnel 6–12 mois. Beaucoup de postes offrent du télétravail.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer :</p>
            <ul className='space-y-1'>
              <li>suivre une formation certifiante (titre RNCP) en paie,</li>
              <li>faire un stage ou une alternance en cabinet comptable / service RH,</li>
              <li>capitaliser sur la pénurie de profils.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>10. Data analyst junior</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 32 000 à 48 000 €/an.</p>
          <p className='mb-4'>La data est à la mode, mais tous les postes ne demandent pas un bac+5. Pour un poste junior, certaines entreprises acceptent une bonne maîtrise d'Excel, du SQL et une certification type Google Data Analytics.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer :</p>
            <ul className='space-y-1'>
              <li>se former en ligne (MOOC, certifications),</li>
              <li>faire des projets concrets (tableaux de bord, analyses pour une asso/PME),</li>
              <li>constituer un portfolio GitHub/Notion.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>11. Agent immobilier</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 25 000 à 80 000 €/an (selon les commissions).</p>
          <p className='mb-4'>Le métier est accessible en agence comme négociateur sans diplôme universitaire. La rémunération dépend fortement de ton secteur, de ta capacité à prospecter et de ton réseau.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer :</p>
            <ul className='space-y-1'>
              <li>rejoindre une agence en tant que commercial,</li>
              <li>se former progressivement (carte T, formations internes),</li>
              <li>utiliser les réseaux sociaux pour se faire connaître.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>12. Cuisinier·e / chef·fe / pâtissier·e</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 28 000 à 55 000 €/an (plus en gastronomie / à l'étranger).</p>
          <p className='mb-4'>La restauration cherche des profils motivés et sérieux. Un CAP cuisine ou pâtisserie suffit à entrer dans des brigades où tu peux évoluer rapidement.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer :</p>
            <ul className='space-y-1'>
              <li>CAP cuisine / pâtisserie, idéalement en alternance,</li>
              <li>stages, saisons, extras pour gagner de l'expérience,</li>
              <li>viser des établissements qui forment (brasserie, bistronomie, etc.).</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>13. Graphiste / UI designer</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 27 000 à 42 000 €/an.</p>
          <p className='mb-4'>Tu peux entrer par la petite porte (graphisme social media, mise en page, webdesign simple) avec un bon portfolio plutôt qu'un diplôme.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer :</p>
            <ul className='space-y-1'>
              <li>apprendre Figma / Canva Pro / Adobe Suite,</li>
              <li>créer un portfolio (Behance, site perso),</li>
              <li>travailler d'abord pour des assos, freelances, petites entreprises.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>14. Chauffeur·se poids lourd / livreur·se</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 26 000 à 38 000 €/an.</p>
          <p className='mb-4'>La logistique est en tension : e‑commerce, transport, livraisons… Les permis poids lourd (C, CE) et la FIMO suffisent pour accéder à de nombreux postes.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer :</p>
            <ul className='space-y-1'>
              <li>passer les permis via des dispositifs financés (France Travail, régions),</li>
              <li>débuter en messagerie, livraison locale, puis évoluer vers d'autres lignes.</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className='font-bold text-xl mb-2'>15. Analyst·e cybersécurité junior</h3>
          <p className='mb-2'><strong>Salaire indicatif :</strong> 35 000 à 55 000 €/an.</p>
          <p className='mb-4'>La cybersécurité manque cruellement de talents. Certaines entreprises acceptent des profils autodidactes avec des certifications (CompTIA Security+, CEH, etc.) et un vrai niveau technique.</p>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <p className='font-bold mb-2'>Pour démarrer :</p>
            <ul className='space-y-1'>
              <li>se former en ligne (labs, plateformes de type TryHackMe, HackTheBox),</li>
              <li>obtenir une ou deux certifications reconnues,</li>
              <li>participer à des CTF, projets open source.</li>
            </ul>
          </div>
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
          Connaître la liste, c'est bien. Choisir le bon métier pour toi, c'est autre chose. L'idée, c'est de trouver l'intersection entre ce que tu aimes faire et le type de quotidien que tu veux, ce pour quoi le marché paie (secteurs en tension), et ce que tu peux apprendre rapidement, sans te mettre en danger.
        </p>
        <div className='bg-gray-100 p-4 rounded-lg mb-6'>
          <p className='font-bold mb-2'>Quelques questions utiles :</p>
          <ul className='space-y-2'>
            <li>Est‑ce que je me vois faire ce métier au moins 2–3 ans ?</li>
            <li>Est‑ce que je suis prêt·e à accepter ses contraintes réelles (horaires, rythme, contact humain, physique…) ?</li>
            <li>Est‑ce que j'ai envie d'en parler quand je rentre chez moi, ou est‑ce que ça me vide totalement ?</li>
          </ul>
        </div>

        <h3 className='font-bold text-xl mb-3'>Étape 1 : clarifier ton profil</h3>
        <p className='mb-6'>
          Pour t'aider à y voir plus clair, tu peux <Link href="/test" className='underline font-semibold'>passer le test d'orientation Jobmi</Link>. En une quinzaine de minutes, tu obtiens des familles de métiers alignées avec ton profil, des exemples concrets, et des pistes pour la suite.
        </p>

        <h3 className='font-bold text-xl mb-3'>Étape 2 : tester en vrai avant de te lancer</h3>
        <p>
          Avant de t'engager dans une formation ou de quitter ton job, fais un atelier découverte, un stage d'observation, une PMSMP, ou une journée en école. C'est souvent une journée d'immersion qui te donne plus d'infos que des heures de recherche en ligne. Découvre toutes les façons de <Link href="/tester-un-metier" className='underline font-semibold'>tester un métier avant de te lancer</Link>.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>FAQ Métiers sans diplôme</h2>
        <span>
          <img className='sm:w-[300px] w-[150px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 space-y-6'>
        <div>
          <h3 className='font-bold text-lg'>Peut‑on vraiment bien gagner sa vie sans diplôme ?</h3>
          <p>Oui, surtout dans des secteurs où la demande est forte (restauration, BTP, logistique, transport, services à la personne, numérique). La clé : choisir un secteur en tension, accepter de démarrer "en bas de l'échelle", et construire progressivement ton expérience et tes compétences.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Quel métier sans diplôme paie le mieux ?</h3>
          <p>Les métiers à fort variable (commercial B2B, immobilier) ou à forte expertise pratique (plombier, développeur web expérimenté, maintenance industrielle, cybersécurité) peuvent dépasser largement les salaires de certains jobs de cadres mais il faut du temps, des résultats, et souvent une part de risque (indépendant, freelance).</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Comment se former rapidement sans diplôme ?</h3>
          <p>Plusieurs options : bootcamps intensifs (développeur, UX, data, cybersécurité), titres professionnels RNCP (gestionnaire de paie, maintenance, métiers du soin…), CAP en alternance (cuisine, pâtisserie, métiers du bâtiment, etc.), auto‑formation + certificats (Google, Microsoft, Meta, CompTIA…). Dans beaucoup de cas, le CPF et des aides régionales peuvent financer tout ou partie de ton projet.</p>
        </div>
        <div>
          <h3 className='font-bold text-lg'>Est‑ce que l'expérience compte plus que le diplôme ?</h3>
          <p>Dans les métiers listés ici, oui. Un recruteur préfèrera souvent quelqu'un qui a déjà fait le job (stage, alternance, CDD, mission locale, PMSMP) ou qui a un portfolio concret, plutôt qu'un CV théorique. D'où l'importance de tester en vrai et de documenter ce que tu sais faire.</p>
        </div>
      </div>

      <div className='font-sans sm:mx-20 my-12 bg-[#F8F7FF] border border-[#E9E1FF] rounded-2xl p-8'>
        <h2 className='font-bold text-xl text-[#04192F] mb-5'>Pour aller plus loin</h2>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href="/test" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Test d'orientation gratuit</p>
            <p className='text-xs text-gray-500 mt-1'>Identifie les métiers qui correspondent à ton profil en 15 min.</p>
          </Link>
          <Link href="/tester-un-metier" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Tester un métier avant de te lancer</p>
            <p className='text-xs text-gray-500 mt-1'>Ateliers, stages, PMSMP : découvre un métier sans t'engager.</p>
          </Link>
          <Link href="/reconversion" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Guide reconversion à 20 ans</p>
            <p className='text-xs text-gray-500 mt-1'>Par où commencer, comment financer, erreurs à éviter.</p>
          </Link>
        </div>
      </div>

    </div>
  )
}
