import Link from 'next/link';

const extLink =
  'font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]';

export const ArticleAlternanceSansContrat2026 = () => {
  return (
    <div className="font-sans sm:mx-10">

      {/* Intro / chapô */}
      <div className="mx-auto my-8 max-w-3xl rounded-2xl bg-[#F8F7FF] p-6 text-base leading-8 text-[#465160]">
        La rentrée 2026 est particulièrement tendue pour l&apos;alternance : moins
        d&apos;offres, plus de candidats, et beaucoup d&apos;étudiants sans contrat
        signé. Si c&apos;est ton cas, pas de panique : voici combien de temps tu as
        réellement, ce que tu peux faire dès maintenant, et les solutions si le
        contrat ne vient pas.
      </div>

      <div className="space-y-14">

        {/* H2 – Pourquoi c'est plus dur cette année */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Pourquoi la rentrée 2026 est plus dure pour trouver une alternance
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Si tu galères plus que les années précédentes, ce n&apos;est pas dans ta
            tête. Le volume d&apos;offres en alternance ne représente plus que{' '}
            <strong>62 % de son niveau de 2022</strong>, et les contrats signés ont
            reculé d&apos;environ <strong>12 %</strong> par rapport à 2025. Résultat :
            plus de candidats pour moins de places, et un chômage des 15-24 ans qui
            atteint <strong>21,6 %</strong> au deuxième trimestre 2026.
          </p>
          <p className="mt-4 text-base leading-8 text-[#465160]">
            Ça ne veut pas dire que ton profil n&apos;intéresse personne : ça veut
            dire que la recherche prend plus de temps et d&apos;énergie qu&apos;avant,
            et qu&apos;il faut une méthode plus large que « déposer 10 CV et
            attendre ».
          </p>
        </section>

        {/* H2 – Combien de temps tu as réellement */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Pas de contrat à la rentrée : combien de temps tu as réellement
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Ne pas avoir signé de contrat en septembre n&apos;est <strong>pas
            éliminatoire</strong>. En pratique :
          </p>
          <ul className="mt-4 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                La plupart des CFA laissent une marge de <strong>jusqu&apos;à 3
                mois</strong> après la rentrée pour trouver une entreprise, le temps
                que tu suives les cours en parallèle.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                De nouvelles offres continuent d&apos;être publiées <strong>entre
                septembre et novembre</strong> : certaines entreprises recrutent
                encore plusieurs semaines après la rentrée scolaire, au fil de leurs
                besoins.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Renseigne-toi directement auprès de ton CFA sur ses règles précises :
                elles varient d&apos;un établissement à l&apos;autre.
              </span>
            </li>
          </ul>
        </section>

        {/* H2 – Le plan d'action */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Le plan d&apos;action pour les prochaines semaines
          </h2>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">1. Élargir ta recherche</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Si tu cibles uniquement les grandes entreprises ou un seul secteur, tu te
            fermes des portes. Élargis ta zone géographique, regarde les PME et TPE
            (souvent moins visibles en ligne mais tout aussi recruteuses), et
            n&apos;hésite pas à candidater sur des postes proches de ton métier visé
            plutôt qu&apos;exactement identiques.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">2. Te faire accompagner gratuitement</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu n&apos;as pas à gérer ça seul. La{' '}
            <Link href="/blog/mission-locale-orientation-jeune" className={extLink}>
              Mission Locale
            </Link>{' '}
            (si tu as entre 16 et 25 ans), France Travail et les dispositifs
            régionaux peuvent t&apos;aider à structurer ta recherche, relire tes
            candidatures et parfois te mettre en relation directe avec des
            entreprises partenaires.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">3. Vérifier que le métier visé est le bon</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Une recherche qui traîne est parfois le signe que le métier ciblé ne te
            correspond pas complètement — ou que tu candidates sans conviction, ce
            qui se sent en entretien. Si le doute s&apos;installe, prends 6 à 8 minutes
            pour faire un{' '}
            <Link href="/test" className={extLink}>
              test d&apos;orientation gratuit
            </Link>{' '}
            et vérifier que tu vises la bonne famille de métiers avant de continuer à
            candidater.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">4. Utiliser l&apos;attente pour tester le terrain</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            En attendant de trouver ton entreprise, une{' '}
            <Link href="/blog/pmsmp-18-25-tester-metier-immersion" className={extLink}>
              PMSMP ou une immersion courte
            </Link>{' '}
            te permet de continuer à avancer concrètement : tu confirmes que le
            métier te correspond, et tu peux même en tirer un contact ou une
            référence à mentionner dans tes candidatures suivantes.
          </p>
        </section>

        {/* H2 – Commencer sans contrat */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Peut-on commencer sa formation sans avoir de contrat ?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Dans beaucoup de cas, oui. Certains CFA autorisent les candidats admis à{' '}
            <strong>démarrer les cours</strong> tout en continuant leur recherche
            d&apos;entreprise, en général pendant quelques semaines à trois mois. Ce
            n&apos;est pas automatique partout : vérifie les règles exactes de ton
            CFA, les éventuelles conditions (justificatif de recherche active,
            fréquence de suivi) et la date limite au-delà de laquelle un contrat
            devient obligatoire pour continuer.
          </p>
        </section>

        {/* H2 – Alternatives si le contrat ne vient pas */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Si le contrat ne vient toujours pas : les alternatives
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            L&apos;alternance n&apos;est pas la seule voie pour te former ou avancer
            professionnellement. Si ta recherche ne débouche vraiment sur rien
            malgré plusieurs mois d&apos;efforts, plusieurs pistes existent en
            parallèle :
          </p>
          <div className="mt-4 space-y-5 text-base leading-8 text-[#465160]">
            <div>
              <p className="font-semibold text-[#04192F]">Une formation initiale avec stage</p>
              <p className="mt-1">
                Certains parcours proposent un statut étudiant classique avec des
                périodes de stage, sans dépendre d&apos;un contrat d&apos;employeur
                dès le départ. C&apos;est une porte d&apos;entrée possible vers le
                même métier, avec un calendrier moins tendu.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#04192F]">Le CPF ou un contrat de professionnalisation</p>
              <p className="mt-1">
                Si tu as déjà travaillé, regarde tes droits sur{' '}
                <Link href="/blog/utiliser-cpf-compte-personnel-formation" className={extLink}>
                  ton compte personnel de formation (CPF)
                </Link>{' '}
                ou renseigne-toi sur le contrat de professionnalisation, une
                alternative moins connue à l&apos;apprentissage.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#04192F]">Reprendre le sujet depuis le début</p>
              <p className="mt-1">
                Si plusieurs mois de recherche n&apos;ont rien donné malgré une
                méthode sérieuse, c&apos;est parfois le signe qu&apos;il faut
                revisiter le projet lui-même. Le guide{' '}
                <Link href="/reconversion" className={extLink}>
                  reconversion et réorientation professionnelle
                </Link>{' '}
                pose une méthode complète pour repartir sur une piste plus solide,
                sans repartir de zéro.
              </p>
            </div>
          </div>
        </section>

        {/* H2 – Récap */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            À retenir
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Ne pas avoir de contrat en septembre 2026 n&apos;a rien d&apos;anormal
            cette année : le marché est objectivement plus tendu. Tu as en général
            jusqu&apos;à 3 mois pour trouver une entreprise, les offres continuent
            d&apos;arriver jusqu&apos;en novembre, et des relais gratuits (Mission
            Locale, France Travail) existent pour t&apos;épauler. Utilise ce délai
            pour élargir ta recherche, vérifier que le métier visé te correspond
            vraiment, et garder une solution de repli si le contrat ne vient
            finalement pas.
          </p>
        </section>

        {/* H2 – Sources */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Sources
          </h2>
          <ul className="mt-4 list-none space-y-2 text-sm leading-7 text-[#465160]">
            <li>
              <a href="https://dares.travail-emploi.gouv.fr/" target="_blank" rel="noopener noreferrer" className={extLink}>
                DARES — statistiques emploi et chômage des jeunes
              </a>
            </li>
            <li>
              <a href="https://www.francetravail.fr/candidat/en-poste/mes-droits-et-mes-devoirs/pmsmp.html" target="_blank" rel="noopener noreferrer" className={extLink}>
                France Travail — dispositifs d&apos;accompagnement des jeunes
              </a>
            </li>
            <li>
              <a href="https://www.service-public.fr/particuliers/vosdroits/F31228" target="_blank" rel="noopener noreferrer" className={extLink}>
                service-public.fr — Contrat d&apos;apprentissage
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm italic text-[#6b7280]">
            Dernière mise à jour : septembre 2026.
          </p>
        </section>

        {/* H2 – FAQ */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            FAQ – Alternance sans contrat à la rentrée
          </h2>
          <div className="mt-6 space-y-5">
            {[
              {
                q: "Je n'ai pas de contrat d'alternance à la rentrée, est-ce grave ?",
                a: "Non. La rentrée 2026 est particulièrement tendue (offres en baisse, plus de candidats), et beaucoup d'étudiants sont dans ta situation. La plupart des CFA laissent plusieurs semaines, parfois jusqu'à 3 mois, pour trouver une entreprise après le début des cours.",
              },
              {
                q: "Peut-on commencer sa formation en CFA sans avoir signé de contrat ?",
                a: "Dans beaucoup de cas oui, sous certaines conditions qui varient selon l'établissement (durée maximale, justificatifs de recherche active). Renseigne-toi directement auprès de ton CFA sur ses règles précises.",
              },
              {
                q: "Jusqu'à quand peut-on trouver une entreprise d'alternance après la rentrée ?",
                a: "De nouvelles offres continuent d'être publiées entre septembre et novembre selon les besoins des entreprises. Le délai maximum accepté par la plupart des CFA tourne autour de 3 mois après la rentrée, mais vérifie toujours la règle exacte de ton établissement.",
              },
              {
                q: "Qui peut m'aider gratuitement à trouver une alternance ?",
                a: "La Mission Locale (16-25 ans), France Travail et certains dispositifs régionaux proposent un accompagnement gratuit : aide à la candidature, mise en relation avec des entreprises, suivi personnalisé.",
              },
              {
                q: "Que faire si je ne trouve vraiment aucune entreprise ?",
                a: "Regarde les alternatives : une formation initiale avec stage plutôt qu'en alternance, un contrat de professionnalisation, ou l'utilisation de ton CPF si tu as déjà travaillé. Si la recherche traîne depuis plusieurs mois malgré une méthode sérieuse, ça vaut aussi le coup de vérifier que le métier visé est le bon avant de continuer.",
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
          Si l&apos;attente commence à te faire douter du métier visé, prends 15
          minutes pour clarifier ton projet avant de continuer à candidater dans la
          même direction.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/test"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
          >
            Faire le test d&apos;orientation
          </Link>
          <Link
            href="/blog/pmsmp-18-25-tester-metier-immersion"
            className="inline-flex rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Découvrir la PMSMP
          </Link>
        </div>
      </section>

    </div>
  );
};
