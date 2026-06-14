import Link from 'next/link';

export const ArticleMonMaster = () => {
  return (
    <div className="font-sans sm:mx-10">

      {/* Intro */}
      <div className="mx-auto my-8 max-w-3xl rounded-2xl bg-[#F8F7FF] p-6 text-base leading-8 text-[#465160]">
        Tu as fait tes candidatures sur Mon Master, tu as attendu des semaines… et maintenant les
        résultats tombent. Si tu te retrouves avec aucune proposition, seulement des refus, ou des
        listes d&apos;attente qui ne bougent pas, c&apos;est violent. Tu n&apos;as pas raté ta vie,
        mais tu es dans un moment où il faut vite reprendre la main, comprendre comment fonctionne
        la procédure, et explorer d&apos;autres options. Cet article est là pour ça.
      </div>

      <div className="space-y-14">

        {/* H2 – Fonctionnement */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Comment fonctionnent les résultats Mon Master (en vrai)
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Sur Mon Master, ce n&apos;est pas &quot;un algorithme magique&quot; qui décide de ton
            avenir. Tes candidatures sont examinées par les équipes pédagogiques de chaque
            formation (universités, écoles), selon leurs propres critères : notes, cohérence du
            projet, dossier, parfois lettre de motivation ou entretien.
          </p>
          <p className="mt-4 text-base leading-8 text-[#465160]">
            À la fin de l&apos;examen des dossiers, chaque formation classe les candidatures, les
            premières places sont proposées aux candidats en haut de liste, les autres restent en
            liste d&apos;attente, ou sont refusées.
          </p>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Les résultats que tu vois sur Mon Master peuvent donc être :
          </p>
          <ul className="mt-4 list-none space-y-4 text-base leading-8 text-[#465160]">
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">Proposition d&apos;admission</span> — tu as une
              place en master dans cette formation (sous réserve de répondre dans les délais).
            </li>
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">Liste d&apos;attente</span> — tu es classé, mais
              pas encore dans la zone des admis. Tu peux monter au fur et à mesure que d&apos;autres
              candidats refusent.
            </li>
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">Refus</span> — la formation ne te propose pas
              de place.
            </li>
          </ul>
        </section>

        {/* H2 – Dates */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Les grandes dates des résultats Mon Master 2026 (en bref)
          </h2>
          <ul className="mt-5 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                <strong>Mars – mai :</strong> les masters analysent les dossiers déposés sur la
                plateforme Mon Master.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                <strong>Début juin :</strong> ouverture de la phase principale d&apos;admission. Les
                premières propositions tombent, tu peux consulter tes résultats et répondre.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                <strong>Juin – été :</strong> les listes d&apos;attente bougent, de nouvelles
                propositions peuvent arriver quand d&apos;autres candidats se désistent.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                <strong>Fin août :</strong> fin de la procédure Mon Master pour l&apos;année 2026–2027.
              </span>
            </li>
          </ul>
          <div className="mt-6 rounded-xl border border-[#E9E1FF] bg-white p-5 text-sm leading-7 text-[#465160]">
            <p className="font-semibold text-[#04192F]">
              Pour les dates exactes, réfère-toi aux sources officielles :
            </p>
            <ul className="mt-3 list-none space-y-2">
              <li>
                <a
                  href="https://www.enseignementsup-recherche.gouv.fr/fr/mon-master-le-calendrier-de-la-procedure-pour-l-annee-universitaire-2025-2026-98292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]"
                >
                  Calendrier officiel Mon Master — enseignementsup-recherche.gouv.fr
                </a>
              </li>
              <li>
                <a
                  href="https://www.enseignementsup-recherche.gouv.fr/fr/mon-master-2025-les-propositions-d-admission-en-master-100496"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]"
                >
                  Explications sur les propositions d&apos;admission en master
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* H2 – Scénario 1 */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Scénario 1 : tu as des propositions, mais aucun master ne te motive vraiment
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Tu as reçu des propositions, mais ce n&apos;est pas le master que tu visais, ce
            n&apos;est pas la ville que tu voulais, ou c&apos;est un domaine qui ne
            t&apos;enthousiasme pas.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Ce que ça veut dire</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu n&apos;es <strong>pas bloqué·e</strong> : tu as des options sur la table, ce qui te
            donne une marge de sécurité. La vraie question devient : est-ce que tu préfères
            prendre ce master et éventuellement te réorienter plus tard, ou est-ce que tu préfères
            refuser et construire un autre plan (école, année pro, autre master) ?
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Questions à te poser</h3>
          <ul className="mt-3 list-none space-y-2 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Est-ce que le domaine du master est cohérent avec ce que tu veux faire plus tard ?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Est-ce que tu te vois suivre au moins 1 an dans cette formation ?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Est-ce que tu as déjà des pistes réalistes en dehors de Mon Master (écoles,
                alternance, projet pro) ?
              </span>
            </li>
          </ul>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Ce que tu peux faire</h3>
          <div className="mt-4 space-y-4 text-base leading-8 text-[#465160]">
            <p>
              <strong>Accepter un master &quot;ok&quot; mais pas parfait, comme filet de sécurité :</strong>{' '}
              tu peux accepter une proposition et continuer à regarder ce qui existe ailleurs
              (écoles, formations hors Mon Master, opportunités pro), tant que les délais le
              permettent.
            </p>
            <p>
              <strong>Te donner un délai de réflexion court et structuré :</strong> par exemple,
              prendre 7–10 jours pour te renseigner sur les alternatives et décider ensuite.
            </p>
          </div>

          <div className="mt-7 rounded-xl bg-[#F8F7FF] p-5 text-sm leading-7 text-[#465160]">
            <p className="font-semibold text-[#04192F]">Si tu es dans ce cas →</p>
            <p className="mt-2">
              Tu peux utiliser le{' '}
              <Link
                href="/test-orientation"
                className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]"
              >
                test d&apos;orientation
              </Link>
              {' '}pour vérifier si le domaine du master proposé colle vraiment à ton profil.
            </p>
          </div>
        </section>

        {/* H2 – Scénario 2 */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Scénario 2 : tu es en liste d&apos;attente partout
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Tu te connectes à Mon Master et tu vois : 0 proposition ferme, mais des listes
            d&apos;attente dans plusieurs masters.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Ce que ça veut dire</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu n&apos;es pas refusé·e partout : tes dossiers ont été examinés et classés, mais tu
            n&apos;es pas (encore) dans la zone des admis. Tes chances dépendent de ton rang sur
            la liste, du nombre de places dans le master, et du comportement des autres candidats
            (ceux qui acceptent ou refusent).
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Ce que tu peux faire maintenant</h3>

          <div className="mt-4 space-y-6">
            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="font-semibold text-[#04192F]">1. Analyser ton rang de façon réaliste</p>
              <ul className="mt-3 list-none space-y-2 text-base leading-7 text-[#465160]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>
                    Si tu es à 15e sur liste d&apos;attente pour un master qui offre 40 places, tu as
                    des chances.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>
                    Si tu es à 230e pour un master très demandé qui propose 30 places, ça va être
                    compliqué.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="font-semibold text-[#04192F]">2. Ne pas tout miser sur une seule formation</p>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Tant que c&apos;est possible, garde plusieurs listes d&apos;attente ouvertes. N&apos;attends pas
                qu&apos;un seul master se débloque si tes rangs sont très éloignés.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="font-semibold text-[#04192F]">3. Construire un plan B en parallèle</p>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Pendant que tu surveilles les listes d&apos;attente, tu peux repérer des masters hors
                Mon Master (écoles de commerce, écoles du digital, écoles spécialisées), regarder les
                formations bac+5 qui recrutent encore à cette période, ou envisager une année pro
                (CDD, VIE, alternance, stage long) dans ton secteur pour revenir plus fort
                l&apos;année prochaine.
              </p>
            </div>
          </div>
        </section>

        {/* H2 – Scénario 3 */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Scénario 3 : tu n&apos;as aucune proposition de master (ou que des refus)
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            C&apos;est le scénario le plus stressant : tu te retrouves sans aucune proposition sur Mon
            Master. Mais ça ne veut pas dire que tu ne feras jamais de master, ou que tu ne feras
            rien l&apos;année prochaine.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Tes options concrètes</h3>

          <div className="mt-4 space-y-5">
            <div>
              <p className="font-semibold text-[#04192F]">1. Chercher un master hors Mon Master</p>
              <p className="mt-2 text-base leading-8 text-[#465160]">
                Toutes les formations bac+5 ne passent pas par la plateforme. Tu peux encore viser des
                écoles de commerce avec des programmes de type MSc/Master, des écoles du digital / du
                web (product, UX, data, IA, développement, design, communication) ou, dans certains
                cas, candidater à des masters universitaires qui recrutent encore hors plateforme.
              </p>
              <p className="mt-2 text-base leading-8 text-[#465160]">
                À vérifier en priorité : prérequis (licence compatible, niveau attendu), coût (frais
                d&apos;inscription, possibilité d&apos;alternance), reconnaissance (grade de master,
                accréditations), débouchés (insertion pro, types de postes).
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#04192F]">2. Regarder les titres professionnels niveau Bac+5</p>
              <p className="mt-2 text-base leading-8 text-[#465160]">
                Selon ton domaine, des titres RNCP niveau 7 (équivalent Bac+5) existent en RH,
                management, commerce, marketing digital, UX, data, etc. Ces formations sont souvent
                proposées par des écoles privées, parfois en alternance.
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#04192F]">3. Construire une année pro structurée</p>
              <p className="mt-2 text-base leading-8 text-[#465160]">
                Tu peux décider de travailler 1 an sans abandonner ton projet d&apos;études : CDD/CDI
                junior dans ton secteur, VIE à l&apos;étranger, stage long (si possible), service
                civique ou volontariat. Tu gagnes en expérience, tu enrichis ton CV, et tu peux
                revenir l&apos;année suivante avec un dossier plus crédible : lettres de
                recommandation, missions concrètes, compétences.
              </p>
            </div>
          </div>
        </section>

        {/* H2 – Méthode plan B */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Comment construire un plan B sans tout envoyer valser
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Pour sortir de la panique, tu peux appliquer cette mini-méthode.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Étape 1</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">
                Clarifier ce que tu ne veux vraiment plus
              </h3>
              <ul className="mt-3 list-none space-y-2 text-base leading-7 text-[#465160]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>Domaine où tu sais que tu ne veux plus aller (ex. recherche pure, droit…)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>
                    Type d&apos;environnement qui ne te convient pas (université très théorique, école
                    très chère…)
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Étape 2</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">
                Identifier ce que tu as envie de tester
              </h3>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Secteur (santé, social, tech, business, culture, environnement…), type de missions
                (analyse, relation client, gestion de projet, création…). Un bon point de départ :
                passer un{' '}
                <Link
                  href="/test-orientation"
                  className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]"
                >
                  test d&apos;orientation
                </Link>
                {' '}pour faire ressortir quelques profils métiers, puis regarder quels types de
                masters ou écoles y mènent.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Étape 3</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">
                Choisir une combinaison réaliste
              </h3>
              <ul className="mt-3 list-none space-y-2 text-base leading-7 text-[#465160]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span><strong>Option A :</strong> école / master hors Mon Master + alternance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span><strong>Option B :</strong> 1 an d&apos;expérience pro + candidature masters l&apos;an prochain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span><strong>Option C :</strong> formation spécialisée (titre RNCP) + projet pro</span>
                </li>
              </ul>
              <p className="mt-4 text-base leading-7 text-[#465160]">
                L&apos;important, c&apos;est d&apos;éviter le combo &quot;rien + culpabilité&quot;. Un plan imparfait
                mais concret vaut mieux qu&apos;un blocage total.
              </p>
            </div>
          </div>
        </section>

        {/* H2 – FAQ */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            FAQ – 5 questions fréquentes sur les résultats Mon Master
          </h2>

          <div className="mt-6 space-y-5">
            {[
              {
                q: "Est-ce grave de ne pas avoir de master tout de suite ?",
                a: "Non. Beaucoup de diplômés de licence passent par des chemins détournés : autre master, école, année pro, mobilité internationale… Ce qui compte sur le long terme, c'est ce que tu fais de cette année, comment tu expliques ton parcours, et les compétences et expériences que tu accumules.",
              },
              {
                q: "Est-ce que je peux faire de bonnes études sans passer par Mon Master ?",
                a: "Oui. De nombreux programmes de niveau Bac+5 (écoles de commerce, écoles du digital, écoles spécialisées) recrutent hors Mon Master, avec des diplômes et titres reconnus. Vérifie le niveau du diplôme (grade de master, RNCP niveau 7), l'insertion pro, et la qualité des partenaires entreprises.",
              },
              {
                q: "Travailler 1 an va-t-il me pénaliser pour candidater plus tard ?",
                a: "Au contraire, une année pro cohérente peut renforcer ton dossier : tu montres que tu n'as pas « attendu », tu arrives avec des exemples concrets en entretien, tu peux te spécialiser dans un secteur. Ce qui peut te pénaliser, c'est plutôt une année totalement vide et non expliquée.",
              },
              {
                q: "Puis-je trouver un master à l'étranger ?",
                a: "Dans certains pays, tu peux candidater directement auprès des universités ou via des plateformes locales : masters anglophones en Europe, programmes en échange ou double diplôme via des écoles françaises. Attention au niveau d'anglais requis, au coût, à la reconnaissance et aux démarches administratives.",
              },
              {
                q: "Comment expliquer plus tard un résultat Mon Master négatif sur mon CV ?",
                a: "Tu n'es pas obligé de l'appeler « échec ». Tu peux l'intégrer ainsi : « Candidature Master non retenue en 2026 → année de travail en [secteur], puis admission en [formation]. » L'important est de montrer que tu as rebondi et que tu en as tiré quelque chose (compétences, projet clarifié, maturité).",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-[#E9E1FF] bg-white p-5 shadow-sm">
                <p className="font-bold text-[#04192F]">{q}</p>
                <p className="mt-2 text-base leading-7 text-[#465160]">{a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CTA final */}
      <section className="my-12 rounded-2xl bg-[#04192F] p-7 text-white">
        <p className="text-base leading-7 text-white">
          Tu ne peux plus changer ce que tu as envoyé, ni les décisions des commissions, mais tu
          peux encore agir sur la suite : clarifier ton profil, identifier 2–3 options réalistes
          (école, master hors plateforme, année pro), et poser des actions concrètes dans les
          2 prochaines semaines.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/test-orientation"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
          >
            Faire le test d&apos;orientation
          </Link>
          <Link
            href="/evenements-orientation"
            className="inline-flex rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Voir les événements
          </Link>
        </div>
      </section>

    </div>
  );
};
