import Link from 'next/link';

const extLink =
  'font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]';

export const ArticleParcoursupCalendrier2027 = () => {
  return (
    <div className="font-sans sm:mx-10">

      {/* Intro / chapô */}
      <div className="mx-auto my-8 max-w-3xl rounded-2xl bg-[#F8F7FF] p-6 text-base leading-8 text-[#465160]">
        <strong>Parcoursup 2027</strong> se déroule en trois grandes phases : la{' '}
        <strong>phase d&apos;information</strong> (novembre – décembre 2026), la{' '}
        <strong>phase de formulation des vœux</strong> (janvier – avril 2027) et la{' '}
        <strong>phase d&apos;admission</strong> (juin – juillet 2027), suivie d&apos;une{' '}
        <strong>phase complémentaire</strong> jusqu&apos;en septembre. Voici toutes les
        dates étape par étape, et surtout ce que tu dois faire à chaque moment.
      </div>

      {/* Note : dates prévisionnelles */}
      <p className="mx-auto mb-10 max-w-3xl border-l-4 border-[#6500FF] bg-white py-3 pl-5 text-base leading-8 text-[#465160]">
        Le calendrier officiel de Parcoursup 2027 est publié par le ministère de
        l&apos;Enseignement supérieur, en général <strong>fin octobre / novembre 2026</strong>.
        En attendant, les dates ci-dessous sont <strong>prévisionnelles</strong>, calées sur
        le rythme de la session 2026. Cette page est mise à jour dès la parution du
        calendrier définitif.
      </p>

      <div className="space-y-14">

        {/* H2 – Récap */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Les 3 phases de Parcoursup 2027 en un coup d&apos;œil
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Parcoursup, c&apos;est une plateforme unique pour candidater dans la plupart
            des formations de l&apos;enseignement supérieur français après le bac. Le
            processus s&apos;étale sur presque un an, du premier trimestre de terminale
            jusqu&apos;à la rentrée. Voici le calendrier prévisionnel 2027 résumé.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm leading-7 text-[#465160]">
              <thead>
                <tr className="border-b-2 border-[#6500FF] text-[#04192F]">
                  <th className="py-3 pr-4 font-bold">Période</th>
                  <th className="py-3 pr-4 font-bold">Étape</th>
                  <th className="py-3 font-bold">Ce que tu dois faire</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4">Nov. – déc. 2026</td>
                  <td className="py-3 pr-4">Ouverture des infos formations</td>
                  <td className="py-3">Explorer les fiches, aller aux journées portes ouvertes</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4"><strong>Mi-janvier 2027</strong></td>
                  <td className="py-3 pr-4">Ouverture des inscriptions</td>
                  <td className="py-3">Créer ton dossier et ton profil</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4"><strong>Mi-mars 2027</strong></td>
                  <td className="py-3 pr-4">Date limite des vœux</td>
                  <td className="py-3">Formuler tes 10 vœux maximum</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4"><strong>Début avril 2027</strong></td>
                  <td className="py-3 pr-4">Date limite de confirmation</td>
                  <td className="py-3">Compléter chaque dossier et confirmer tes vœux</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4"><strong>Début juin 2027</strong></td>
                  <td className="py-3 pr-4">Début des réponses</td>
                  <td className="py-3">Consulter tes réponses, répondre dans les délais</td>
                </tr>
                <tr className="border-b border-[#E9E1FF]">
                  <td className="py-3 pr-4"><strong>Mi-juillet 2027</strong></td>
                  <td className="py-3 pr-4">Point d&apos;étape obligatoire</td>
                  <td className="py-3">Confirmer les vœux en attente que tu veux garder</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Juin – sept. 2027</td>
                  <td className="py-3 pr-4">Phase complémentaire</td>
                  <td className="py-3">Formuler de nouveaux vœux sur les places vacantes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm italic text-[#6b7280]">
            Dates prévisionnelles tant que le calendrier officiel 2027 n&apos;est pas publié.
          </p>
        </section>

        {/* H2 – Phase 1 */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Phase 1 – Information et découverte (novembre – décembre 2026)
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Avant même l&apos;ouverture des inscriptions, le site Parcoursup publie
            l&apos;ensemble des <strong>formations disponibles</strong> avec, pour chacune,
            les attendus, les critères d&apos;analyse des candidatures, les taux
            d&apos;accès des années précédentes et les débouchés. C&apos;est aussi la
            période des conseils de classe du premier trimestre de terminale et des
            <strong> semaines de l&apos;orientation</strong> au lycée. L&apos;objectif :
            construire une liste de formations qui te correspondent, sans attendre le
            dernier moment.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Ce qu&apos;il faut faire dès maintenant</h3>
          <ul className="mt-3 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                <strong>Recenser 8 à 15 formations</strong> qui t&apos;intéressent, en
                mélangeant des choix ambitieux et des choix plus sûrs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Aller aux{' '}
                <Link href="/evenements-orientation" className={extLink}>
                  salons et journées portes ouvertes
                </Link>{' '}
                pour poser des questions à des étudiants et des enseignants.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Si tu hésites encore sur la direction, faire un{' '}
                <Link href="/test" className={extLink}>
                  test d&apos;orientation gratuit
                </Link>{' '}
                pour dégager 2 ou 3 familles de métiers, puis{' '}
                <Link href="/tester-un-metier" className={extLink}>
                  tester un métier
                </Link>{' '}
                sur le terrain avant de fixer tes vœux.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Lire le guide{' '}
                <Link href="/que-faire-apres-le-bac" className={extLink}>
                  que faire après le bac
                </Link>{' '}
                pour poser toutes les options (fac, BTS, BUT, école, alternance) à plat.
              </span>
            </li>
          </ul>
        </section>

        {/* H2 – Phase 2 */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Phase 2 – Inscription et formulation des vœux (janvier – avril 2027)
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            À partir de <strong>mi-janvier 2027</strong>, tu crées ton dossier sur
            Parcoursup : identité, coordonnées, scolarité, bulletins. C&apos;est là que
            tu formules tes vœux. Rien n&apos;est validé tant que tu n&apos;as pas
            <strong> confirmé</strong> chaque vœu avant la date limite.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Dates clés de la phase des vœux</h3>
          <ul className="mt-3 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span><strong>Mi-janvier 2027 :</strong> ouverture des inscriptions et de la saisie des vœux.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span><strong>Mi-mars 2027 :</strong> date limite pour formuler tes vœux. Après cette date, tu ne peux plus en ajouter.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span><strong>Début avril 2027 :</strong> date limite pour compléter ton dossier et <strong>confirmer</strong> chaque vœu. Un vœu non confirmé est perdu.</span>
            </li>
          </ul>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Combien de vœux et de sous-vœux ?</h3>
          <div className="mt-3 space-y-4 text-base leading-8 text-[#465160]">
            <p>
              Tu peux formuler jusqu&apos;à <strong>10 vœux</strong> pour des formations
              sous statut d&apos;étudiant, plus jusqu&apos;à <strong>10 vœux
              supplémentaires</strong> en apprentissage, qui ne sont pas décomptés des 10
              premiers. Certaines formations fonctionnent en <strong>vœux multiples</strong>
              (un même vœu qui regroupe plusieurs établissements, par exemple un BTS
              dans plusieurs lycées) : dans ce cas, tu choisis des <strong>sous-vœux</strong>,
              dans la limite de <strong>20 sous-vœux</strong> au total.
            </p>
            <p>
              Pour les licences très demandées, un <strong>secteur géographique</strong>
              s&apos;applique : un pourcentage de places est réservé aux candidats de
              l&apos;académie. Tu peux quand même candidater hors secteur, mais tes
              chances sont plus faibles.
            </p>
          </div>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Le projet de formation motivé et les pièces du dossier</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Pour la plupart des vœux, tu dois rédiger un <strong>projet de formation
            motivé</strong> : quelques lignes qui expliquent pourquoi cette formation, ce
            que tu sais du domaine, ce que tu as fait pour t&apos;en approcher. S&apos;y
            ajoutent tes <strong>bulletins</strong> de première et terminale, la{' '}
            <strong>fiche Avenir</strong> renseignée par ton lycée, et parfois des
            éléments spécifiques (CV, questionnaire, épreuves). Un projet appuyé sur une
            expérience concrète — un stage, une immersion, un échange avec un
            professionnel — pèse toujours plus qu&apos;un texte générique.
          </p>
        </section>

        {/* H2 – Phase 3 */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Phase 3 – Admission et réponses (juin – juillet 2027)
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            À partir de <strong>début juin 2027</strong>, tu reçois les réponses des
            formations. Elles arrivent <strong>au fil de l&apos;eau</strong> : chaque jour,
            des places se libèrent quand d&apos;autres candidats acceptent ou renoncent,
            donc ta situation peut évoluer pendant plusieurs semaines.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Les 4 types de réponses : Oui, Oui-si, En attente, Non</h3>
          <ul className="mt-3 list-none space-y-4 text-base leading-8 text-[#465160]">
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">Oui</span> — tu es accepté sans
              condition. Tu peux accepter, renoncer, ou accepter en gardant certains
              vœux « en attente ».
            </li>
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">Oui-si</span> — tu es accepté, à
              condition de suivre un <strong>parcours d&apos;accompagnement</strong>
              (remise à niveau, tutorat, année aménagée). C&apos;est un vrai oui.
            </li>
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">En attente</span> — tu es sur
              liste d&apos;attente. Ton <strong>rang</strong> évolue avec les
              désistements. Ni oui sûr, ni non définitif.
            </li>
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">Non</span> — la formation ne te
              propose pas de place (surtout pour les formations sélectives).
            </li>
          </ul>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Les délais pour répondre</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            À chaque proposition, tu as un <strong>délai limité</strong> pour répondre
            (plusieurs jours en début de phase, puis plus court ensuite). Passé le délai,
            <strong> tu perds la proposition</strong> et les vœux en attente associés. Si
            tu pars en vacances ou passe des oraux, active le{' '}
            <strong>répondeur automatique</strong> : tu classes tes vœux en attente par
            ordre de préférence et Parcoursup répond à ta place.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Le point d&apos;étape obligatoire</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Vers <strong>mi-juillet 2027</strong>, un <strong>point d&apos;étape
            obligatoire</strong> te demande de confirmer, dans ton dossier, les vœux en
            attente que tu souhaites conserver. Si tu ne fais rien, ces vœux sont
            <strong> supprimés</strong>. C&apos;est une simple case à cocher, mais elle est
            éliminatoire si tu l&apos;oublies.
          </p>
        </section>

        {/* H2 – Phase complémentaire */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            La phase complémentaire (juin – septembre 2027)
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            La <strong>phase complémentaire</strong> ouvre mi-juin, en parallèle de la
            phase principale, et se poursuit jusqu&apos;à mi-septembre. Elle permet de
            formuler jusqu&apos;à <strong>10 nouveaux vœux</strong> dans des formations
            où il reste des <strong>places vacantes</strong>. Elle s&apos;adresse aux
            candidats sans proposition, mais aussi à ceux qui ont une proposition qui ne
            leur convient pas. Beaucoup de BTS, de licences et d&apos;écoles proposent
            encore des places à ce moment-là — parfois dans des filières auxquelles tu
            n&apos;avais pas pensé.
          </p>
        </section>

        {/* H2 – Aucune proposition */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Que faire si tu n&apos;as aucune proposition ?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            N&apos;avoir que des « En attente » ou que des « Non » n&apos;est pas une
            fin de parcours. Trois voies existent en parallèle :
          </p>
          <div className="mt-4 space-y-5 text-base leading-8 text-[#465160]">
            <div>
              <p className="font-semibold text-[#04192F]">Saisir la CAES</p>
              <p className="mt-1">
                Si tu n&apos;as aucune proposition à l&apos;issue de la phase principale,
                tu peux demander l&apos;accompagnement de la{' '}
                <strong>commission d&apos;accès à l&apos;enseignement supérieur (CAES)</strong>
                de ton académie, via ton dossier Parcoursup. Elle étudie ta situation et
                peut te proposer des formations proches de tes vœux.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#04192F]">Candidater hors Parcoursup</p>
              <p className="mt-1">
                Écoles privées, bachelors, BTS en école, titres RNCP : beaucoup de
                formations recrutent en direct, souvent jusqu&apos;à l&apos;été. Le guide{' '}
                <Link href="/blog/orientation-post-bac-sans-parcoursup" className={extLink}>
                  orientation post-bac sans Parcoursup
                </Link>{' '}
                détaille les options et comment vérifier le sérieux d&apos;une école.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#04192F]">Construire une année terrain</p>
              <p className="mt-1">
                Jobs, service civique, stages, immersions en{' '}
                <Link href="/blog/pmsmp-18-25-tester-metier-immersion" className={extLink}>
                  PMSMP
                </Link>{' '}
                : une année structurée autour du terrain te permet de revenir l&apos;an
                prochain avec un projet plus solide. Si ta première année à la fac ne
                s&apos;est pas passée comme prévu, vois aussi{' '}
                <Link href="/blog/reconversion-apres-une-l1" className={extLink}>
                  se réorienter après une L1
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="mt-7 rounded-xl bg-[#F8F7FF] p-5 text-sm leading-7 text-[#465160]">
            <p>
              Pour gérer la pression et l&apos;attente pendant cette période, lis aussi{' '}
              <Link href="/blog/parcoursup-gerer-stress-resultats" className={extLink}>
                comment gérer le stress des résultats Parcoursup
              </Link>
              .
            </p>
          </div>
        </section>

        {/* H2 – Récap final */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Calendrier Parcoursup 2027 : le récap à retenir
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Trois dates à mettre dans ton agenda : la <strong>date limite des vœux</strong>
            (mi-mars 2027), la <strong>date limite de confirmation</strong> (début avril
            2027) et le <strong>point d&apos;étape obligatoire</strong> (mi-juillet 2027).
            Entre les deux, une règle simple : réponds toujours <strong>dans les
            délais</strong> et garde un plan B ouvert tant que tu n&apos;as pas de
            proposition qui te convient.
          </p>
        </section>

        {/* H2 – Sources */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Sources officielles
          </h2>
          <ul className="mt-4 list-none space-y-2 text-sm leading-7 text-[#465160]">
            <li>
              <a href="https://www.parcoursup.gouv.fr/calendrier" target="_blank" rel="noopener noreferrer" className={extLink}>
                Calendrier interactif — parcoursup.gouv.fr
              </a>
            </li>
            <li>
              <a href="https://www.enseignementsup-recherche.gouv.fr/fr/parcoursup" target="_blank" rel="noopener noreferrer" className={extLink}>
                Ministère de l&apos;Enseignement supérieur et de la Recherche
              </a>
            </li>
            <li>
              <a href="https://www.service-public.fr/particuliers/vosdroits/F21426" target="_blank" rel="noopener noreferrer" className={extLink}>
                service-public.fr — S&apos;inscrire dans l&apos;enseignement supérieur (Parcoursup)
              </a>
            </li>
            <li>
              <a href="https://www.onisep.fr/parcoursup" target="_blank" rel="noopener noreferrer" className={extLink}>
                Onisep — décryptage des étapes et des réponses
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm italic text-[#6b7280]">
            Dernière mise à jour : septembre 2026. Les dates 2027 seront actualisées dès
            la publication du calendrier officiel par le ministère.
          </p>
        </section>

        {/* H2 – FAQ */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            FAQ – Calendrier Parcoursup 2027
          </h2>
          <div className="mt-6 space-y-5">
            {[
              {
                q: 'Quand ouvre Parcoursup 2027 ?',
                a: "Le site d'information sur les formations ouvre vers mi-novembre 2026. Les inscriptions et la formulation des vœux commencent vers mi-janvier 2027 (dates prévisionnelles, à confirmer avec le calendrier officiel).",
              },
              {
                q: 'Combien de vœux peut-on faire sur Parcoursup ?',
                a: "10 vœux maximum pour des formations sous statut étudiant, plus jusqu'à 10 vœux en apprentissage non décomptés. Pour les vœux multiples, la limite est de 20 sous-vœux au total.",
              },
              {
                q: 'Quand tombent les résultats Parcoursup 2027 ?',
                a: "Les premières réponses arrivent vers début juin 2027, puis en continu tout l'été au fil des désistements. La phase principale se termine mi-juillet, la phase complémentaire mi-septembre.",
              },
              {
                q: 'Que se passe-t-il si je ne réponds pas dans les délais ?',
                a: "Sans réponse dans le délai imparti, tu perds la proposition et les vœux en attente qui y sont liés. Utilise le répondeur automatique si tu ne peux pas te connecter régulièrement.",
              },
              {
                q: 'Peut-on s\'inscrire sur Parcoursup après la date limite des vœux ?',
                a: "Non pour la phase principale. Mais la phase complémentaire, ouverte de mi-juin à mi-septembre, permet de formuler de nouveaux vœux sur les places encore disponibles.",
              },
              {
                q: "Je n'ai que des refus, que faire ?",
                a: "Tu peux saisir la CAES de ton académie via Parcoursup, candidater dans des formations hors Parcoursup (écoles, bachelors, BTS en école, titres RNCP) ou construire une année terrain structurée (PMSMP, service civique, stages) pour revenir plus fort.",
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
          Avant de figer tes vœux, assure-toi de viser les bonnes formations. Sur Jobmi,
          tu peux passer un test d&apos;orientation gratuit pour identifier les familles
          de métiers qui te correspondent, puis tester un métier sur le terrain et
          explorer les événements d&apos;orientation près de chez toi.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/test"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
          >
            Faire le test d&apos;orientation
          </Link>
          <Link
            href="/que-faire-apres-le-bac"
            className="inline-flex rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Voir le guide post-bac
          </Link>
        </div>
      </section>

    </div>
  );
};
