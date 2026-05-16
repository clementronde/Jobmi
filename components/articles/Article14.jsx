import Link from 'next/link';

export const Article14 = () => {
  return (
    <div className="sm:mx-5 mx-1">
      <div className="mx-auto my-10 flex max-w-[900px] flex-col items-center font-sans">
        <div className="flex flex-col items-start gap-4 md:flex-row">
          <p className="font-bold whitespace-nowrap">PMSMP 18-25 ans :</p>
          <p className="text-justify">
            La PMSMP, ou période de mise en situation en milieu professionnel,
            est un dispositif d’immersion professionnelle parmi les plus
            concrets pour tester un métier sans te lancer tout de suite dans
            une formation ou une reconversion complète. Si tu veux voir le
            quotidien réel d’un secteur avant de t’engager, c’est souvent un
            très bon point de départ.
          </p>
        </div>
      </div>

      <div className="font-sans mx-auto sm:mx-20">
        <h2 className="font-bold text-2xl">La PMSMP, c’est quoi exactement ?</h2>
        <p className="mt-4">
          La PMSMP est un dispositif officiel qui permet de découvrir un métier,
          un environnement de travail ou un secteur directement dans une
          structure d’accueil. En clair : tu vas sur le terrain pendant une
          courte période pour observer, comprendre les missions réelles et voir
          si tu peux t’y projeter.
        </p>
        <p className="mt-4">
          Ce n’est ni un emploi, ni une formation au sens classique. L’objectif
          n’est pas de te faire produire comme un salarié, mais de t’aider à
          valider une piste. Si tu es en plein doute sur ton avenir ou en pleine
          <Link href="/reconversion" className="underline font-semibold">
            {' '}reconversion à 20 ans
          </Link>
          , c’est exactement le genre de format qui peut éviter de te tromper de
          direction.
        </p>
      </div>

      <div className="font-sans my-10 sm:py-20 py-2 mx-auto max-w-[760px] relative">
        <img
          className="absolute top-0 right-0 w-14 translate-x-4 sm:translate-x-0 pointer-events-none"
          src="/media/arrow-blog-h2.svg"
          alt="Flèche"
        />
        <h2 className="text-4xl font-bold text-center">
          Un dispositif officiel pour tester un métier
        </h2>
      </div>

      <div className="font-sans sm:mx-20 space-y-4">
        <p>
          La PMSMP est encadrée par des acteurs comme France Travail, les
          Missions Locales ou d’autres organismes d’accompagnement. Tu peux
          consulter la présentation officielle de{' '}
          <a
            href="https://www.francetravail.fr/candidat/votre-projet-professionnel/definir-votre-projet-professionn/realiser-une-immersion-professionnelle-en-entreprise.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            la présentation officielle de l’immersion professionnelle (PMSMP)
            sur le site de France Travail
          </a>
          .
        </p>
        <p>
          En pratique, la PMSMP est très utile si tu veux confirmer une idée de
          métier, vérifier si l’ambiance d’un secteur te convient, ou voir si tu
          supportes vraiment le rythme d’un poste. Tu peux par exemple
          l’utiliser avant une inscription en formation, avant une alternance ou
          avant une réorientation plus lourde.
        </p>
        <p>
          Si tu pars encore avec trop d’hypothèses, le plus intelligent est de
          <Link href="/test" className="underline font-semibold">
            {' '}passer un test d’orientation
          </Link>
          {' '}pour clarifier 1 ou 2 familles de métiers avant de chercher une
          immersion.
        </p>
      </div>

      <div className="font-sans my-10 sm:py-20 py-2 mx-auto max-w-[760px]">
        <h2 className="text-4xl font-bold text-center">
          Qui peut en bénéficier ?
        </h2>
        <span>
          <img
            className="sm:w-[320px] w-[220px] mx-auto"
            src="/media/trait-article-titre-h2.svg"
            alt="Trait"
          />
        </span>
      </div>

      <div className="font-sans sm:mx-20 space-y-4">
        <p>
          La PMSMP s’adresse surtout aux personnes accompagnées dans leur
          orientation, leur insertion ou leur retour à l’emploi. Pour les 18–25
          ans, le point d’entrée le plus fréquent est la Mission Locale. Tu peux
          d’ailleurs repérer la structure la plus proche via le réseau national
          <a
            href="https://www.missionslocales.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {' '}missionslocales.org
          </a>
          .
        </p>
        <p>
          Concrètement, ça veut dire que peu importe ta ville, il existe presque
          toujours une Mission Locale de secteur qui peut t’aider à trouver une
          immersion : en métropole, en petite ville ou en zone rurale.
          Commence par repérer celle qui couvre ton territoire, puis prends
          rendez-vous pour leur parler du métier que tu veux tester.
        </p>
        <p>
          Si tu es inscrit à France Travail, ton conseiller peut aussi t’aider à
          vérifier si une PMSMP est adaptée à ta situation. Tout dépend de ton
          statut, de ton projet et de l’organisme qui t’accompagne.
        </p>
        <p>
          Ce qu’il faut retenir : même si tu es jeune et encore en train de
          chercher ta voie, tu n’es pas obligé d’attendre d’être “sûr” de ton
          projet pour demander un rendez-vous. Au contraire, ce type de
          dispositif sert justement à passer du flou à quelque chose de plus
          concret.
        </p>
      </div>

      <div className="font-sans my-10 sm:py-20 py-2 mx-auto max-w-[760px]">
        <h2 className="text-4xl font-bold text-center">
          Comment demander une PMSMP quand tu as 18–25 ans ?
        </h2>
        <span>
          <img
            className="sm:w-[420px] w-[240px] mx-auto"
            src="/media/trait-article-titre-h2.svg"
            alt="Trait"
          />
        </span>
      </div>

      <div className="font-sans sm:mx-20 my-10">
        <div className="article-step-list sm:mx-10 mx-5">
          <div className="article-step-item">
            <div className="article-step-index">
              <p className="text-5xl font-thin text-gray-400">01</p>
            </div>
            <div className="article-step-body">
              <p className="font-bold mb-2">Par ta Mission Locale</p>
              <p>
                Si tu as entre 16 et 25 ans, la Mission Locale est souvent le
                meilleur point d’entrée. Tu peux expliquer que tu veux tester un
                métier avant de choisir une formation, une alternance ou une
                nouvelle direction. Plus ton idée est claire, plus on pourra
                t’aider vite.
              </p>
            </div>
          </div>
          <div className="article-step-item">
            <div className="article-step-index">
              <p className="text-5xl font-thin text-gray-400">02</p>
            </div>
            <div className="article-step-body">
              <p className="font-bold mb-2">Par France Travail</p>
              <p>
                Si tu es déjà inscrit comme demandeur d’emploi, ton conseiller
                peut t’orienter vers une PMSMP. Le plus simple est d’arriver en
                expliquant le métier que tu veux observer, pourquoi cette piste
                t’intéresse et ce que tu cherches à vérifier pendant
                l’immersion.
              </p>
            </div>
          </div>
          <div className="article-step-item">
            <div className="article-step-index">
              <p className="text-5xl font-thin text-gray-400">03</p>
            </div>
            <div className="article-step-body">
              <p className="font-bold mb-2">
                Les étapes concrètes : idée de métier → entreprise → convention
              </p>
              <p>
                En général, tu clarifies d’abord le métier visé, puis tu
                identifies une entreprise prête à t’accueillir. Ensuite,
                l’organisme prescripteur gère avec toi la partie administrative
                et la convention. Si tu veux comparer ce format à d’autres
                options terrain, tu peux aussi consulter{' '}
                <Link href="/tester-un-metier" className="underline font-semibold">
                  les autres façons de tester un métier
                </Link>
                {' '}sur Jobmi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="font-sans my-10 sm:py-20 py-2 mx-auto max-w-[760px]">
        <h2 className="text-4xl font-bold text-center">
          Comment trouver une entreprise prête à t’accueillir ?
        </h2>
        <span>
          <img
            className="sm:w-[420px] w-[240px] mx-auto"
            src="/media/trait-article-titre-h2.svg"
            alt="Trait"
          />
        </span>
      </div>

      <div className="font-sans sm:mx-20 space-y-4">
        <p>
          Beaucoup de jeunes pensent qu’il faut absolument avoir du réseau pour
          décrocher une immersion. En réalité, une entreprise peut dire oui si
          ta demande est simple, sérieuse et bien ciblée. Vise d’abord les PME,
          commerces, cabinets, ateliers, associations ou structures locales qui
          correspondent vraiment au métier que tu veux découvrir.
        </p>
        <p>
          Ton message doit tenir en quelques lignes : qui tu es, le métier que
          tu veux découvrir, la durée approximative, et pourquoi tu les
          contactes eux. Évite les formulations trop vagues du type “je cherche
          n’importe quoi”. Une demande précise rassure toujours plus.
        </p>
        <div className="rounded-2xl bg-gray-100 p-5">
          <h3 className="font-bold">Exemple de message simple</h3>
          <p className="mt-3">
            Bonjour, je suis en réflexion sur mon orientation professionnelle et
            je cherche à découvrir concrètement le métier de [métier]. Je suis
            accompagné dans mes démarches et je voulais savoir si votre
            structure pourrait envisager une courte immersion pour me permettre
            d’observer le quotidien du poste. Mon objectif est de confirmer mon
            projet avant de m’engager dans une formation. Merci pour votre
            retour.
          </p>
        </div>
        <p>
          Si tu n’as pas encore trouvé de structure, regarde aussi les pistes
          proposées sur{' '}
          <Link href="/stage-et-formation" className="underline font-semibold">
            la page stages et immersions pour jeunes
          </Link>
          {' '}de Jobmi pour mieux comprendre les formats et les secteurs à
          cibler.
        </p>
      </div>

      <div className="font-sans my-10 sm:py-20 py-2 mx-auto max-w-[760px]">
        <h2 className="text-4xl font-bold text-center">
          Tes droits et devoirs pendant la PMSMP
        </h2>
        <span>
          <img
            className="sm:w-[340px] w-[220px] mx-auto"
            src="/media/trait-article-titre-h2.svg"
            alt="Trait"
          />
        </span>
      </div>

      <div className="font-sans sm:mx-20 space-y-4">
        <p>
          La PMSMP est encadrée : tu ne viens pas remplacer un salarié ni faire
          tourner une équipe à moindre coût. Tu es là pour découvrir un métier,
          observer, poser des questions et parfois réaliser quelques gestes
          simples dans le cadre prévu.
        </p>
        <p>
          La durée peut varier selon le projet et l’accord posé avec l’organisme
          qui prescrit la PMSMP. L’indemnisation dépend de ta situation : en
          général, tu n’es pas “payé” comme dans un emploi classique, mais tu
          peux conserver certaines aides ou allocations si tu en bénéficies
          déjà. Les questions d’assurance, d’horaires et de cadre sont prévues
          dans la convention : ne commence jamais sans cet encadrement.
        </p>
        <p>
          Ton rôle, de ton côté, c’est d’être ponctuel, respectueux, curieux et
          pro. Une immersion courte peut déjà t’apprendre énormément si tu
          arrives préparé.
        </p>
      </div>

      <div className="font-sans my-10 sm:py-20 py-2 mx-auto max-w-[760px]">
        <h2 className="text-4xl font-bold text-center">
          Après la PMSMP : quoi faire de ce que tu as appris ?
        </h2>
        <span>
          <img
            className="sm:w-[420px] w-[240px] mx-auto"
            src="/media/trait-article-titre-h2.svg"
            alt="Trait"
          />
        </span>
      </div>

      <div className="font-sans sm:mx-20 space-y-4">
        <p>
          Le plus important, ce n’est pas seulement de “faire” une immersion,
          c’est d’en tirer un vrai bilan. Demande-toi ce qui t’a plu, ce qui t’a
          freiné, si tu t’imagines progresser dans cet environnement, et si tu
          es prêt à accepter les contraintes concrètes du métier.
        </p>
        <p>
          Si la piste se confirme, tu peux ensuite chercher une formation, une
          alternance ou une autre expérience terrain. Si au contraire tu sors
          avec plus de doutes, ce n’est pas un échec : c’est justement tout
          l’intérêt de la PMSMP. Tu auras évité une mauvaise décision plus loin.
        </p>
        <p>
          Et si tu veux continuer à explorer, tu peux revenir vers{' '}
          <Link href="/test" className="underline font-semibold">
            le test d’orientation
          </Link>
          , regarder{' '}
          <Link href="/tester-un-metier" className="underline font-semibold">
            les autres façons de tester un métier
          </Link>
          {' '}ou approfondir ton projet via notre page sur la{' '}
          <Link href="/reconversion" className="underline font-semibold">
            reconversion quand on est jeune
          </Link>
          .
        </p>
      </div>

      <div className="font-sans my-10 sm:py-20 py-2 mx-auto max-w-[760px]">
        <h2 className="text-4xl font-bold text-center">
          FAQ — PMSMP 18-25 ans
        </h2>
        <span>
          <img
            className="sm:w-[260px] w-[180px] mx-auto"
            src="/media/trait-article-titre-h2.svg"
            alt="Trait"
          />
        </span>
      </div>

      <div className="font-sans sm:mx-20 space-y-6">
        <div>
          <h3 className="font-bold text-lg">
            Quelle est la durée d’une PMSMP quand on a 18–25 ans ?
          </h3>
          <p>
            La durée dépend du projet, de la structure d’accueil et de
            l’organisme qui prescrit l’immersion. L’idée n’est pas de rester
            longtemps “au cas où”, mais de prévoir un format assez clair pour
            observer le métier dans de bonnes conditions. Le plus important est
            que la durée soit cohérente avec ce que tu veux vérifier sur le
            terrain.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">
            Est-ce qu’on est payé pendant une PMSMP ?
          </h3>
          <p>
            La PMSMP n’est pas un contrat de travail classique. En général, tu
            n’es donc pas rémunéré comme un salarié pour cette période. En
            revanche, selon ta situation, tu peux conserver certaines aides ou
            allocations déjà en place. Vérifie toujours ce point avec la Mission
            Locale, France Travail ou l’organisme qui t’accompagne.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">
            Comment demander une PMSMP quand on est suivi par une Mission Locale ?
          </h3>
          <p>
            Le plus simple est d’arriver avec une idée de métier ou au moins une
            famille de métiers à tester. Ton conseiller pourra ensuite t’aider à
            voir si la PMSMP est adaptée, à cadrer l’objectif de l’immersion et
            à préparer la convention avec la structure d’accueil. Plus ton
            projet est clair, plus la demande avance vite.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg">
            Quelle différence entre une PMSMP et un stage d’observation ?
          </h3>
          <p>
            Les deux servent à découvrir un métier, mais ils ne relèvent pas du
            même cadre. La PMSMP est un dispositif officiel lié à l’insertion et
            à l’orientation professionnelle, alors que le stage d’observation
            dépend plus souvent d’un établissement scolaire ou de formation.
            Dans les deux cas, l’objectif reste le même : vérifier une piste
            avant de t’engager plus loin.
          </p>
        </div>
      </div>

      <div className="font-sans my-10 sm:py-20 py-2 mx-auto max-w-[760px]">
        <h2 className="text-4xl font-bold text-center">
          En résumé
        </h2>
        <span>
          <img
            className="sm:w-[220px] w-[180px] mx-auto"
            src="/media/trait-article-titre-h2.svg"
            alt="Trait"
          />
        </span>
      </div>

      <div className="font-sans sm:mx-20 space-y-4">
        <p>
          La PMSMP est l’un des meilleurs outils pour tester une idée de métier
          avant de t’engager plus loin. Elle ne te donne pas toutes les réponses
          à elle seule, mais elle t’évite souvent de choisir dans le vide.
        </p>
        <p>
          Si tu veux aller plus loin maintenant, commence par{' '}
          <Link href="/tester-un-metier" className="article-cta-link">
            voir les autres façons de tester un métier
          </Link>
          .
        </p>
        <p>
          Tu peux aussi reprendre les bases avec{' '}
          <Link href="/test" className="underline font-semibold">
            le test Jobmi
          </Link>
          , explorer{' '}
          <Link href="/stage-et-formation" className="underline font-semibold">
            les formats d’immersion et de formation
          </Link>
          , ou remettre ton projet à plat sur la page{' '}
          <Link href="/reconversion" className="underline font-semibold">
            reconversion
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
