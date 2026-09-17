import Link from 'next/link';

const extLink =
  'font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]';

export const ArticleJeNaimePasMonTravail = () => {
  return (
    <div className="font-sans sm:mx-10">

      {/* Intro / chapô */}
      <div className="mx-auto my-8 max-w-3xl rounded-2xl bg-[#F8F7FF] p-6 text-base leading-8 text-[#465160]">
        <p>
          Tu n&apos;aimes plus ton travail, mais tu ne sais pas encore si le problème vient
          de ton métier, de ton entreprise ou simplement d&apos;une mauvaise période&nbsp;?
          Ne commence pas par chercher une nouvelle formation ou par préparer ta démission.
          Commence par identifier précisément ce qui te pèse.
        </p>
        <p className="mt-4">
          Si tu apprécies encore tes missions mais plus ton environnement, changer
          d&apos;entreprise peut suffire. Si ce sont les tâches elles-mêmes qui ne te
          correspondent plus, il est peut-être temps d&apos;explorer une autre voie. Et si
          ton travail affecte ta santé, la priorité est d&apos;en parler à un professionnel.
        </p>
        <p className="mt-4">
          Dans ce guide, tu vas comprendre ce qui bloque et choisir une première action
          sans bouleverser immédiatement toute ta vie professionnelle.
        </p>
      </div>

      <p className="mx-auto mb-10 max-w-3xl text-center text-base font-bold text-[#04192F]">
        Commence par le diagnostic ci-dessous ↓
      </p>

      <div className="space-y-14">

        {/* H2 – Diagnostic prioritaire */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Je n&apos;aime plus mon travail : que faire en priorité ?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Avant de prendre une décision, distingue quatre éléments :{' '}
            <strong>le métier, le poste, l&apos;entreprise et les conditions de travail</strong>.
          </p>
          <p className="mt-4 text-base leading-8 text-[#465160]">
            Pose-toi cette question simple&nbsp;:
          </p>
          <blockquote className="mt-4 rounded-xl border-l-4 border-[#6500FF] bg-[#F8F7FF] py-3 pl-5 pr-4 text-base italic leading-8 text-[#465160]">
            Si je pouvais exercer les mêmes missions dans une autre équipe, avec un
            meilleur manager et des horaires plus adaptés, est-ce que ce travail me
            plairait encore&nbsp;?
          </blockquote>
          <ul className="mt-5 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Si la réponse est oui, le métier n&apos;est probablement pas le principal problème.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Si la réponse est non, une évolution ou une reconversion mérite d&apos;être explorée.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Si tu n&apos;arrives pas à répondre, observe ton quotidien pendant quelques jours avant de décider.</span>
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Tu n&apos;as pas besoin de trouver immédiatement le métier idéal. Ton premier
            objectif est seulement de comprendre ce que tu ne veux plus et ce que tu
            aimerais retrouver.
          </p>
        </section>

        {/* H2 – Pourquoi tu n'aimes plus ton travail */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Pourquoi tu n&apos;aimes plus ton travail ?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Dire « je n&apos;aime pas mon travail » peut recouvrir des situations très
            différentes. Les confondre peut te pousser à tout quitter alors qu&apos;un
            changement plus ciblé aurait suffi.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">Les missions ne te correspondent plus</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu n&apos;éprouves plus d&apos;intérêt pour les tâches principales de ton métier,
            même lorsque les conditions sont bonnes. Tu as l&apos;impression de travailler en
            pilote automatique et tu ne te projettes plus dans cette fonction.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Dans ce cas, le problème peut venir du métier lui-même ou du rôle que tu occupes.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">L&apos;entreprise ou le management te pèse</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu apprécies certaines missions, mais l&apos;ambiance, le manque de reconnaissance,
            les valeurs de l&apos;entreprise ou la relation avec ton manager te démotivent.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Le même métier peut être vécu très différemment dans une autre structure. Avant
            de repartir de zéro, compare d&apos;autres environnements de travail.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">Tes conditions de travail ne te conviennent plus</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Les horaires, la charge, les trajets, le salaire, le manque d&apos;autonomie ou
            l&apos;impossibilité de déconnecter peuvent rendre un poste difficile à supporter,
            même lorsque le métier reste intéressant.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Ici, la première piste n&apos;est pas forcément une reconversion. Un aménagement,
            une mobilité interne ou un changement d&apos;employeur peut être plus adapté.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">Tes priorités ont changé</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Le travail qui te convenait il y a deux ans ne correspond peut-être plus à la
            vie que tu veux aujourd&apos;hui. Tu recherches davantage de sens, de stabilité,
            de créativité, de contact humain ou de temps libre.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Ce changement n&apos;est pas un échec. Il indique simplement que tes critères ont évolué.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">Tu traverses une période d&apos;épuisement</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Quand tu es très fatigué, anxieux ou sous pression, il devient difficile de
            distinguer une mauvaise orientation d&apos;un épuisement lié au contexte actuel.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Si ton travail affecte fortement ton sommeil, ton humeur, ta santé ou ta
            capacité à fonctionner au quotidien, ne reste pas seul. Parle-en à un médecin,
            à un psychologue ou au médecin du travail avant de prendre une décision
            importante. Le burn-out est lié à un stress professionnel chronique qui n&apos;a
            pas pu être géré, selon{' '}
            <a
              href="https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases"
              target="_blank"
              rel="noopener noreferrer"
              className={extLink}
            >
              l&apos;Organisation mondiale de la Santé
            </a>
            .
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Jobmi peut t&apos;aider à explorer la suite, mais ne remplace pas un accompagnement médical.
          </p>
        </section>

        {/* H2 – Les 7 signes */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Les 7 signes à prendre au sérieux
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Tu n&apos;as pas besoin de cocher toutes les cases. En revanche, si plusieurs
            signes reviennent pendant plusieurs semaines, il est utile de faire le point.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">1. Tu appréhendes chaque début de journée</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Un manque d&apos;envie ponctuel est normal. Une appréhension forte et répétée
            avant d&apos;aller travailler mérite davantage d&apos;attention, surtout si elle
            apparaît dès le dimanche soir ou au réveil.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">2. Tu travailles en pilote automatique</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu accomplis tes missions sans curiosité, sans satisfaction et sans réelle
            implication. Tu fais ce qu&apos;on attend de toi, mais tu ne comprends plus
            pourquoi tu le fais.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">3. Tu t&apos;ennuies profondément</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu n&apos;apprends plus rien, tu attends la fin de la journée et tu as la
            sensation de perdre ton temps. Cet ennui peut venir d&apos;un poste trop limité,
            d&apos;un manque de responsabilités ou d&apos;un métier qui ne te stimule plus.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">4. Tu ne te reconnais plus dans l&apos;entreprise</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu peux aimer ton métier tout en rejetant la manière dont il est exercé :
            pression commerciale, méthodes de management, manque d&apos;éthique ou priorités
            incompatibles avec les tiennes.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">5. Tu imagines souvent une autre vie professionnelle</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu regardes régulièrement des offres, tu recherches des idées de reconversion
            ou tu envies certains métiers. Cela ne signifie pas que tu dois tout quitter,
            mais que ton envie d&apos;explorer mérite d&apos;être prise au sérieux.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">6. Tu ne vois plus aucune perspective</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu ne veux ni le poste de ton manager, ni les évolutions proposées, ni rester
            au même endroit. Lorsque aucune suite ne te paraît souhaitable, il faut
            probablement redéfinir ce que tu veux construire.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">7. Ton travail affecte ta santé</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Fatigue persistante, troubles du sommeil, anxiété, irritabilité, douleurs ou
            isolement ne doivent pas être traités comme un simple manque de motivation.
            Dans ce cas, demande de l&apos;aide avant de réfléchir à la suite de ta carrière.
          </p>
        </section>

        {/* H2 – Poste, entreprise ou métier */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Changer de poste, d&apos;entreprise ou de métier ?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Utilise cette grille pour identifier la première piste à tester.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-[#465160]">
              <thead>
                <tr className="border-b-2 border-[#6500FF] text-[#04192F]">
                  <th className="py-3 pr-4 font-bold">Ce qui te pèse le plus</th>
                  <th className="py-3 pr-4 font-bold">Ce que cela peut indiquer</th>
                  <th className="py-3 font-bold">Première action utile</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">Les missions quotidiennes</td>
                  <td className="py-3 pr-4">Le poste ou le métier ne correspond plus à tes intérêts</td>
                  <td className="py-3">Comparer deux métiers voisins et une piste différente</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">Le manager ou l&apos;équipe</td>
                  <td className="py-3 pr-4">Le contexte de travail est probablement en cause</td>
                  <td className="py-3">Envisager une mobilité ou une autre entreprise</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">Les horaires ou la charge</td>
                  <td className="py-3 pr-4">Tes conditions ne sont plus compatibles avec ta vie</td>
                  <td className="py-3">Demander un aménagement et comparer d&apos;autres postes</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">Le manque d&apos;évolution</td>
                  <td className="py-3 pr-4">Tu as peut-être besoin d&apos;un nouveau rôle</td>
                  <td className="py-3">Identifier les évolutions accessibles avec tes compétences</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">Le manque de sens</td>
                  <td className="py-3 pr-4">Tes valeurs ou tes priorités ont changé</td>
                  <td className="py-3">Définir tes critères non négociables</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Tout te semble insupportable</td>
                  <td className="py-3 pr-4">Une fatigue importante peut fausser ton jugement</td>
                  <td className="py-3">Consulter un professionnel de santé et prendre du recul</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-base leading-8 text-[#465160]">
            Pendant une semaine, note après chaque journée&nbsp;:
          </p>
          <ul className="mt-4 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>les tâches qui t&apos;ont donné de l&apos;énergie&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>celles que tu as repoussées ou subies&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>les moments où tu t&apos;es senti utile ou compétent&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>les situations qui t&apos;ont stressé ou ennuyé&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>la seule chose que tu changerais en priorité.</span>
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            À la fin de la semaine, cherche les répétitions. Elles seront souvent plus
            révélatrices qu&apos;une impression générale de ras-le-bol.
          </p>
        </section>

        {/* H2 – Premier emploi ou alternance */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Et si c&apos;est ton premier emploi ou ton alternance ?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Quand tu découvres le monde du travail, il peut être difficile de savoir si
            tu as choisi la mauvaise voie ou si tu traverses simplement une période
            d&apos;adaptation.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">Tu découvres la réalité du travail</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Ton premier poste ne ressemble pas toujours à tes études. Les débuts
            comportent souvent des tâches répétitives, moins d&apos;autonomie et une
            période pendant laquelle tu dois apprendre les codes de l&apos;entreprise.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Demande-toi si la situation s&apos;améliore progressivement et si tu continues à apprendre.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">L&apos;entreprise ne te correspond pas</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Une mauvaise première expérience ne résume pas tout un secteur. Avant
            d&apos;abandonner ton métier, échange avec des personnes qui l&apos;exercent dans
            d&apos;autres entreprises, d&apos;autres équipes ou avec un autre statut.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">Le quotidien du métier te déçoit vraiment</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu peux avoir apprécié tes études mais ne pas aimer le travail auquel elles
            mènent. Ton diplôme ne t&apos;oblige pas à rester dans la même voie toute ta
            vie. Il t&apos;a aussi permis d&apos;acquérir des compétences transférables vers
            d&apos;autres fonctions.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Le plus utile est alors d&apos;explorer plusieurs pistes sans choisir
            immédiatement une nouvelle formation.
          </p>
        </section>

        {/* H2 – Que faire selon ce qui bloque */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Que faire selon ce qui bloque ?
          </h2>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">Si tu aimes encore ton métier</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Commence par chercher une amélioration ciblée : nouvelles missions, mobilité
            interne, changement d&apos;équipe, télétravail, formation ou autre entreprise.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Pour vérifier cette piste, consulte des offres équivalentes et échange avec
            deux professionnels exerçant ton métier ailleurs. Compare les missions, le
            niveau d&apos;autonomie, le management et les conditions de travail.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">Si tu n&apos;aimes plus les missions</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Ne cherche pas immédiatement « le métier parfait ». Pars plutôt des tâches
            que tu apprécies encore et de celles que tu ne veux plus retrouver.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Par exemple, si tu aimes analyser mais pas vendre, tu peux explorer des
            fonctions plus orientées data, recherche, opérations ou gestion de projet. Si
            tu aimes aider les clients mais pas prospecter, le customer success ou
            l&apos;accompagnement peuvent être plus adaptés que la vente pure.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">Si tu ne sais pas vers quoi aller</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Un test d&apos;orientation peut t&apos;aider à transformer une impression floue en
            quelques familles de métiers à comparer. Il ne décidera pas à ta place, mais
            il peut ouvrir des pistes auxquelles tu n&apos;avais pas pensé.
          </p>
          <div className="my-6 flex flex-col items-start gap-4 rounded-2xl border border-[#E9E1FF] bg-[#F8F7FF] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link
                href="/test"
                className="inline-flex rounded-xl bg-[#6500FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#5200CC]"
              >
                Découvrir les métiers qui correspondent à mon profil
              </Link>
              <p className="mt-3 text-sm font-semibold text-[#465160]">
                Gratuit · 30 questions · 6 à 8 minutes · Résultats immédiats
              </p>
            </div>
          </div>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">Si une nouvelle voie t&apos;attire déjà</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Ne t&apos;inscris pas tout de suite dans une formation longue. Vérifie d&apos;abord
            le quotidien réel du métier : missions, rythme, contraintes, salaire de
            départ, débouchés et environnement de travail.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">Tu peux&nbsp;:</p>
          <ul className="mt-4 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>parler à un professionnel&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>observer une journée de travail&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>participer à un atelier découverte&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>réaliser un mini-projet&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>faire du bénévolat ou une mission courte&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>demander une immersion professionnelle lorsque ta situation le permet.</span>
            </li>
          </ul>
          <div className="my-6">
            <Link
              href="/tester-un-metier"
              className="inline-flex rounded-xl bg-[#04192F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#6500FF]"
            >
              Voir comment tester un métier avant de choisir
            </Link>
          </div>
        </section>

        {/* H2 – Ne démissionne pas */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Ne démissionne pas avant d&apos;avoir vérifié trois points
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Quitter un emploi peut être une bonne décision, mais cette décision sera plus
            solide si tu as vérifié trois éléments.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">1. Ce que tu veux quitter</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Écris précisément ce que tu ne veux plus : certaines tâches, un type de
            management, des horaires, un secteur, un manque de sens ou le métier
            lui-même.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">2. Ce que tu veux retrouver</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Définis cinq critères maximum. Par exemple : salaire minimum, rythme,
            autonomie, stabilité, créativité, contact humain, utilité, télétravail ou
            mobilité.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tous tes critères ne seront pas compatibles entre eux. Classe-les entre
            indispensables, souhaitables et secondaires.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">3. Ce que tu as testé dans la réalité</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Un métier peut sembler idéal de loin et ne pas te convenir au quotidien.
            Avant de financer une formation ou de démissionner, confronte ta piste à une
            expérience réelle, même courte.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Si tu souhaites construire une transition plus complète, consulte le{' '}
            <Link href="/reconversion" className={extLink}>
              guide de la reconversion professionnelle à 20 ans
            </Link>
            .
          </p>
        </section>

        {/* H2 – Comment trouver un métier qui te correspond */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Comment trouver un métier qui te correspond davantage ?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Un bon choix ne repose pas seulement sur ce que tu aimes. Il faut croiser
            plusieurs dimensions&nbsp;:
          </p>
          <ul className="mt-4 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>tes intérêts&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>tes compétences actuelles&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>les tâches que tu veux accomplir au quotidien&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>ton besoin de stabilité ou d&apos;autonomie&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>les conditions de travail acceptables&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>le niveau de revenu recherché&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>les formations réellement nécessaires&nbsp;;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>les possibilités d&apos;emploi dans le secteur.</span>
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Le modèle RIASEC peut constituer un premier point de départ. Il distingue six
            grandes familles d&apos;intérêts professionnels : réaliste, investigateur,
            artistique, social, entreprenant et conventionnel.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Le résultat ne doit pas être traité comme une vérité définitive. Il sert à
            générer des hypothèses, puis à comparer et tester les métiers proposés.
          </p>
          <div className="my-6">
            <Link
              href="/test"
              className="inline-flex rounded-xl bg-[#6500FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#5200CC]"
            >
              Faire le test d&apos;orientation Jobmi
            </Link>
          </div>
        </section>

        {/* H2 – Plan d'action 7 jours */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Ton plan d&apos;action pour les 7 prochains jours
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-[#465160]">
              <thead>
                <tr className="border-b-2 border-[#6500FF] text-[#04192F]">
                  <th className="py-3 pr-4 font-bold">Jour</th>
                  <th className="py-3 font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">1</td>
                  <td className="py-3">Note trois choses que tu ne supportes plus et trois que tu apprécies encore</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">2</td>
                  <td className="py-3">Classe le problème : métier, poste, entreprise ou conditions de travail</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">3</td>
                  <td className="py-3">Définis cinq critères importants pour ton prochain poste</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">4</td>
                  <td className="py-3">Explore trois métiers ou environnements professionnels sans te censurer</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">5</td>
                  <td className="py-3">Consulte des offres pour comprendre la réalité des missions demandées</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">6</td>
                  <td className="py-3">Contacte un professionnel ou recherche une expérience courte</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">7</td>
                  <td className="py-3">Choisis une seule prochaine étape concrète</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-base leading-8 text-[#465160]">
            Cette prochaine étape peut être petite : approfondir un métier, demander une
            mobilité, prendre rendez-vous avec un conseiller ou chercher une immersion.
            Tu n&apos;as pas besoin de décider de toute ta carrière cette semaine.
          </p>
        </section>

        {/* H2 – Quand demander de l'aide */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Quand demander de l&apos;aide ?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Tu n&apos;es pas obligé de construire ton projet seul.
          </p>
          <ul className="mt-4 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Si ta santé est affectée, adresse-toi à un médecin, à un psychologue ou au médecin du travail.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Si tu veux faire le point sur ton parcours, le{' '}
                <a
                  href="https://mon-cep.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={extLink}
                >
                  Conseil en évolution professionnelle
                </a>{' '}
                propose un accompagnement personnalisé.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Si tu as entre 16 et 25 ans et que tu as besoin d&apos;aide pour l&apos;emploi,
                la formation ou une immersion, tu peux contacter une Mission Locale.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Si tu envisages une formation, vérifie d&apos;abord les conditions, les
                débouchés et les financements sur les plateformes officielles.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Si ton expérience correspond déjà à une certification, renseigne-toi sur
                la{' '}
                <a
                  href="https://vae.gouv.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={extLink}
                >
                  Validation des acquis de l&apos;expérience
                </a>
                .
              </span>
            </li>
          </ul>
        </section>

        {/* H2 – Questions fréquentes (contenu, sans balisage FAQPage) */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Questions fréquentes
          </h2>
          <div className="mt-6 space-y-3">
            <details className="group overflow-hidden rounded-2xl border border-[#E9E1FF] bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-[#04192F] transition hover:bg-[#F8F7FF]">
                <h3 className="text-base font-semibold text-[#04192F]">
                  Est-ce que je dois démissionner si je n&apos;aime plus mon travail ?
                </h3>
                <span className="text-xl font-bold text-[#6500FF] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="border-t border-[#E9E1FF] px-6 py-5 text-base leading-8 text-[#465160]">
                Pas nécessairement. Commence par identifier si le problème vient des
                missions, de l&apos;entreprise, du management, des conditions de travail ou
                du métier. Vérifie au moins une alternative avant de prendre une décision
                difficile à annuler.
              </p>
            </details>
            <details className="group overflow-hidden rounded-2xl border border-[#E9E1FF] bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-[#04192F] transition hover:bg-[#F8F7FF]">
                <h3 className="text-base font-semibold text-[#04192F]">
                  Comment savoir si je dois changer de métier ou seulement d&apos;entreprise ?
                </h3>
                <span className="text-xl font-bold text-[#6500FF] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="border-t border-[#E9E1FF] px-6 py-5 text-base leading-8 text-[#465160]">
                Imagine que tu exerces les mêmes missions dans une entreprise dont tu
                apprécies l&apos;équipe, les valeurs et les horaires. Si cette situation te
                conviendrait, un changement d&apos;employeur peut suffire. Si les missions
                elles-mêmes ne t&apos;intéressent plus, explore une évolution ou une
                reconversion.
              </p>
            </details>
            <details className="group overflow-hidden rounded-2xl border border-[#E9E1FF] bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-[#04192F] transition hover:bg-[#F8F7FF]">
                <h3 className="text-base font-semibold text-[#04192F]">
                  Je viens de commencer mon premier emploi : faut-il attendre ?
                </h3>
                <span className="text-xl font-bold text-[#6500FF] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="border-t border-[#E9E1FF] px-6 py-5 text-base leading-8 text-[#465160]">
                Accorde-toi un temps d&apos;adaptation si la situation reste supportable et
                que tu continues à apprendre. En revanche, n&apos;ignore pas une souffrance
                importante, des conditions dangereuses ou une dégradation de ta santé sous
                prétexte que tu débutes.
              </p>
            </details>
            <details className="group overflow-hidden rounded-2xl border border-[#E9E1FF] bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-[#04192F] transition hover:bg-[#F8F7FF]">
                <h3 className="text-base font-semibold text-[#04192F]">
                  Je suis en burn-out : dois-je commencer une reconversion ?
                </h3>
                <span className="text-xl font-bold text-[#6500FF] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="border-t border-[#E9E1FF] px-6 py-5 text-base leading-8 text-[#465160]">
                La priorité est ta santé. Demande l&apos;aide d&apos;un professionnel afin de
                retrouver suffisamment de recul et d&apos;énergie. Une reconversion pourra
                être explorée ensuite, sans transformer une période d&apos;épuisement en
                décision précipitée.
              </p>
            </details>
            <details className="group overflow-hidden rounded-2xl border border-[#E9E1FF] bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-[#04192F] transition hover:bg-[#F8F7FF]">
                <h3 className="text-base font-semibold text-[#04192F]">
                  Un test d&apos;orientation suffit-il pour choisir un nouveau métier ?
                </h3>
                <span className="text-xl font-bold text-[#6500FF] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="border-t border-[#E9E1FF] px-6 py-5 text-base leading-8 text-[#465160]">
                Non. Il peut t&apos;aider à identifier des familles de métiers, mais il doit
                être complété par des recherches, des échanges avec des professionnels et,
                si possible, une expérience sur le terrain.
              </p>
            </details>
          </div>
        </section>

        {/* H2 – Conclusion */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Tu n&apos;as pas besoin de tout décider aujourd&apos;hui
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Ne plus aimer son travail ne signifie pas que tu dois démissionner demain.
            Cela signifie qu&apos;un élément de ta vie professionnelle mérite d&apos;être
            compris et probablement modifié.
          </p>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Commence par identifier ce qui bloque. Explore ensuite deux ou trois pistes,
            puis teste la plus crédible avant de t&apos;engager dans une nouvelle formation
            ou un changement radical.
          </p>
        </section>

      </div>

      {/* CTA final */}
      <section className="my-12 rounded-2xl bg-[#04192F] p-7 text-white">
        <p className="text-base leading-7 text-white">
          Découvre les métiers qui pourraient te correspondre.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <Link
            href="/test"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
          >
            Découvrir les métiers qui pourraient me correspondre
          </Link>
          <p className="text-sm text-white/70">
            Gratuit · 30 questions · 6 à 8 minutes · Résultats immédiats
          </p>
        </div>
      </section>

    </div>
  );
};

export default ArticleJeNaimePasMonTravail;
