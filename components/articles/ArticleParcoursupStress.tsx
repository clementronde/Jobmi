import Link from 'next/link';
import { InlineTestCTA } from './InlineTestCTA';

export const ArticleParcoursupStress = () => {
  return (
    <div className="font-sans sm:mx-10">

      {/* Intro */}
      <div className="mx-auto my-8 max-w-3xl rounded-2xl bg-[#F8F7FF] p-6 text-base leading-8 text-[#465160]">
        Parcoursup, ce n&apos;est pas juste un site : c&apos;est des semaines de questions, des notifs à
        répétition, des listes d&apos;attente qui bougent, et parfois des discussions tendues avec les
        parents. Les études récentes montrent que la grande majorité des lycéens vivent cette étape
        comme stressante ou anxiogène. Dans cet article, on ne va pas te redire &quot;détends-toi, ça va
        aller&quot; sans rien t&apos;expliquer.
      </div>

      <div className="space-y-14">

        {/* H2 – Pourquoi autant de stress */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Pourquoi Parcoursup génère autant de stress ?
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Plusieurs enquêtes montrent que 70–90 % des terminales se disent stressés, inquiets ou
            désorientés par Parcoursup. Ce stress vient surtout de :
          </p>
          <ul className="mt-4 list-none space-y-4 text-base leading-8 text-[#465160]">
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              La peur de faire les &quot;mauvais choix&quot; d&apos;orientation, bien plus que des notes en
              elles-mêmes.
            </li>
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              L&apos;impression qu&apos;il existe une &quot;bonne voie unique&quot; et que tu peux la rater pour
              toujours.
            </li>
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              Le côté flou : listes d&apos;attente qui bougent, délais, codes (&quot;Oui-Si&quot;, &quot;En attente&quot;)
              pas toujours clairs.
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Beaucoup de jeunes ont aussi l&apos;impression d&apos;être observés en permanence (par leurs
            parents, leurs profs, leurs amis) sur leurs vœux et leurs résultats. Si tu stresses, ce
            n&apos;est donc pas parce que tu serais &quot;fragile&quot; : c&apos;est que le système met une grosse
            pression sur une seule période de ta vie.
          </p>
        </section>

        {/* H2 – Pendant l'attente */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Pendant la phase d&apos;attente : ce que tu peux contrôler (et ce que tu ne peux pas)
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Il y a une partie que tu ne contrôles pas : les décisions des formations, le rythme des
            réponses, les mouvements des listes d&apos;attente. Mais tu as aussi une zone de contrôle :
            la façon dont tu t&apos;informes, la façon dont tu organises tes options, la façon dont tu
            gères ta journée.
          </p>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">
            1. Comprendre les règles de base
          </h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Plus tu comprends le fonctionnement, moins ton cerveau invente des scénarios
            catastrophes. Tu peux lire une fois pour toutes une page claire sur les réponses
            Parcoursup (Oui, Oui-Si, En attente, Refus) et les délais, repérer les dates clés de
            la phase d&apos;admission et de la phase complémentaire, et éviter de checker dix sources
            différentes contradictoires.
          </p>
          <div className="mt-5 rounded-xl border border-[#E9E1FF] bg-white p-5 text-sm leading-7 text-[#465160]">
            <p className="font-semibold text-[#04192F]">Pour les dates et règles officielles :</p>
            <ul className="mt-3 list-none space-y-2">
              <li>
                <a
                  href="https://www.parcoursup.gouv.fr/calendrier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]"
                >
                  Calendrier Parcoursup — parcoursup.gouv.fr
                </a>
              </li>
              <li>
                <a
                  href="https://www.parcoursup.gouv.fr/faq/thematiques/fonctionnement-de-parcoursup/recevoir-les-reponses-et-propositions-d-admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]"
                >
                  FAQ &quot;Réponses et propositions d&apos;admission&quot;
                </a>
              </li>
            </ul>
          </div>

          <h3 className="mt-8 text-xl font-bold text-[#04192F]">
            2. Fixer des &quot;moments Parcoursup&quot; dans ta journée
          </h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            L&apos;attente devient anxiogène quand tu passes ta journée à rafraîchir ton dossier
            20 fois, comparer ton rang avec celui de tout le monde, ou regarder des contenus
            alarmistes sur TikTok. Une technique qui marche bien :
          </p>
          <ul className="mt-4 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Décider de 1 à 3 créneaux par jour où tu regardes Parcoursup (par exemple matin et
                soir).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                En dehors de ces moments, fermer la plateforme et couper les notifs mails/app si
                possible.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Te concentrer sur d&apos;autres choses (bac, activités, amis).</span>
            </li>
          </ul>
          <p className="mt-4 text-base leading-8 text-[#465160]">
            Tu ne rates pas d&apos;info importante (les délais sont de plusieurs jours), mais tu te
            protèges du rouleau compresseur mental.
          </p>
        </section>

        <InlineTestCTA />

        {/* H2 – 3 réflexes */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            3 réflexes simples pour faire baisser la pression
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Tu n&apos;as pas besoin de devenir expert en méditation. Quelques réflexes suffisent.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Réflexe 1</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">Remettre les choses en perspective</h3>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Les études et les pros de l&apos;orientation répètent la même chose : il n&apos;y a pas une
                seule bonne voie à 18 ans, et la plupart des parcours passent par des bifurcations,
                des réorientations, des détours. Un refus Parcoursup ou un choix &quot;par défaut&quot; ne
                ferme pas toutes les portes. Tu auras d&apos;autres occasions d&apos;ajuster.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Réflexe 2</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">Parler à quelqu&apos;un qui ne juge pas</h3>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Les ressources officielles insistent sur l&apos;importance de ne pas rester seul face à
                tes questions : profs, PSY-EN, Missions Locales, associations, proches. L&apos;objectif
                n&apos;est pas qu&apos;ils décident pour toi, mais qu&apos;ils t&apos;aident à voir plus clair.
              </p>
              <ul className="mt-3 list-none space-y-2 text-base leading-7 text-[#465160]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>En parler à un prof avec qui tu te sens bien.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>Demander un rendez-vous orientation (lycée, CIO, Mission Locale).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>En parler à un proche qui écoute plus qu&apos;il ne juge.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Réflexe 3</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">S&apos;occuper vraiment (pas juste scroller Parcoursup)</h3>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Continue de vivre : voir tes amis, faire du sport, garder des activités qui te font
                du bien (musique, dessin, jeux…), réviser ton bac sans que tout tourne autour de
                Parcoursup. Ce n&apos;est pas fuir la réalité, c&apos;est éviter que l&apos;orientation prenne
                100 % de la place dans ta tête.
              </p>
            </div>
          </div>
        </section>

        {/* H2 – Pression des parents */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Comment gérer la pression des parents (sans exploser)
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Beaucoup de stress vient aussi du regard des parents : peur de les décevoir, réflexions
            du type &quot;tu as intérêt à avoir quelque chose&quot;, ou au contraire silence mais tension dans
            l&apos;air. Des psychologues spécialisés expliquent qu&apos;un parent trop stressé peut
            transmettre son angoisse à son enfant, même sans le vouloir.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">1. Dire ce dont tu as besoin</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu peux essayer de poser le cadre calmement :
          </p>
          <blockquote className="mt-4 rounded-xl border-l-4 border-[#6500FF] bg-[#F8F7FF] py-3 pl-5 pr-4 text-base italic leading-8 text-[#465160]">
            &quot;Je sais que c&apos;est important pour toi aussi, mais ça me stresse encore plus quand on en
            parle tout le temps. J&apos;ai besoin qu&apos;on se fixe des moments précis pour faire le point,
            et qu&apos;entre-temps on parle d&apos;autre chose.&quot;
          </blockquote>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">2. Proposer un moment dédié pour faire le point</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Plutôt que de subir des questions au hasard, tu proposes 1 moment dans la semaine (ou
            tous les 2–3 jours) pour regarder ensemble Parcoursup. Tu arrives avec tes questions,
            tes idées, tes craintes. Le reste du temps, tu demandes à ce qu&apos;on n&apos;en parle pas
            toutes les 5 minutes. Ça peut rassurer tes parents tout en te laissant respirer.
          </p>
        </section>

        {/* H2 – Si les résultats sont mauvais */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Si les résultats sont mauvais : gérer le choc émotionnel
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Quand tu reçois des refus, ou que tu vois que les listes d&apos;attente ne bougent pas,
            c&apos;est normal d&apos;être déçu, en colère, triste. Les psy parlent d&apos;un vrai impact
            psychologique de Parcoursup sur certains jeunes (sentiment d&apos;injustice, peur de
            l&apos;avenir).
          </p>
          <p className="mt-4 text-base leading-8 text-[#465160]">
            Avant de repartir dans les &quot;plans B&quot;, tu peux :
          </p>
          <ul className="mt-4 list-none space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Te laisser quelques heures / un jour pour accuser le coup.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>
                Éviter de te comparer en boucle aux autres (stories &quot;J&apos;ai eu mon vœu 1&quot;).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Écrire ce que tu ressens, ou en parler à quelqu&apos;un.</span>
            </li>
          </ul>

          <div className="mt-7 rounded-xl bg-[#F8F7FF] p-5 text-sm leading-7 text-[#465160]">
            <p className="font-semibold text-[#04192F]">Ensuite seulement →</p>
            <p className="mt-2">
              Tu peux te remettre dans des contenus plus &quot;solutions&quot; : lire{' '}
              <Link
                href="/blog/resultats-parcoursup-2026"
                className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]"
              >
                Résultats Parcoursup 2026 : que faire si tu es en attente, refusé ou sans réponse ?
              </Link>
              {' '}pour construire un plan concret.
            </p>
          </div>
        </section>

        {/* H2 – Orientation pour reprendre la main */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Utiliser l&apos;orientation pour reprendre la main (au lieu de subir)
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Une manière de calmer le stress, c&apos;est de transformer Parcoursup en étape d&apos;un
            projet plus large, et pas en juge final.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Piste 1</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">Clarifier ton profil</h3>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Plus tu sais dans quels types de métiers ou environnements tu te vois, moins
                Parcoursup ressemble à une loterie totale. Tu peux lister ce que tu aimes ou
                détestes dans tes matières et activités, puis passer un test d&apos;orientation pour
                faire ressortir 2–3 familles de métiers cohérentes avec ta personnalité.
              </p>
              <Link
                href="/test-orientation"
                className="mt-4 inline-flex rounded-xl border border-[#6500FF] px-4 py-2 text-sm font-semibold text-[#6500FF] transition hover:bg-[#6500FF] hover:text-white"
              >
                Passer le test d&apos;orientation
              </Link>
            </div>

            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Piste 2</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">Explorer des options en dehors de Parcoursup</h3>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Savoir que Parcoursup n&apos;est pas la seule porte fait baisser la pression : écoles
                hors Parcoursup, BTS en école, bachelors, titres pro, alternance, formations
                courtes, année terrain…
              </p>
              <Link
                href="/blog/orientation-post-bac-sans-parcoursup"
                className="mt-4 inline-flex rounded-xl border border-[#6500FF] px-4 py-2 text-sm font-semibold text-[#6500FF] transition hover:bg-[#6500FF] hover:text-white"
              >
                Voir les options hors Parcoursup
              </Link>
            </div>

            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Piste 3</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">Aller voir le terrain en vrai</h3>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Les pros de l&apos;orientation recommandent d&apos;explorer activement au lieu de rester
                bloqué sur l&apos;écran : salons, JPO, ateliers, rencontres de pros, immersions.
              </p>
              <Link
                href="/evenements-orientation"
                className="mt-4 inline-flex rounded-xl border border-[#6500FF] px-4 py-2 text-sm font-semibold text-[#6500FF] transition hover:bg-[#6500FF] hover:text-white"
              >
                Voir l&apos;agenda des événements
              </Link>
            </div>
          </div>
        </section>

        {/* H2 – En résumé */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            En résumé : tu ne contrôles pas tout, mais tu as plus de marge que tu ne le crois
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Parcoursup crée du stress parce qu&apos;il condense beaucoup d&apos;enjeux en peu de temps, avec
            un système pas toujours clair et un entourage parfois très tendu.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#E9E1FF] bg-white p-5 shadow-sm">
              <p className="font-semibold text-[#04192F]">Tu ne peux pas :</p>
              <ul className="mt-3 list-none space-y-2 text-base leading-7 text-[#465160]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-300" />
                  <span>Forcer les formations à t&apos;accepter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-300" />
                  <span>Contrôler les listes d&apos;attente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-300" />
                  <span>Empêcher toutes les remarques des adultes autour.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-[#E9E1FF] bg-white p-5 shadow-sm">
              <p className="font-semibold text-[#04192F]">Mais tu peux :</p>
              <ul className="mt-3 list-none space-y-2 text-base leading-7 text-[#465160]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>Mieux comprendre les règles du jeu.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>Organiser ta façon de consulter et d&apos;en parler.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>
                    T&apos;appuyer sur des tests, des événements, des expériences terrain pour ne pas
                    réduire ton avenir à une seule plateforme.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* CTA final */}
      <section className="my-12 rounded-2xl bg-[#04192F] p-7 text-white">
        <p className="text-base leading-7 text-white">
          Tu ne peux pas tout régler aujourd&apos;hui. Mais tu peux faire un premier pas qui te fera
          déjà respirer un peu plus.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/test-orientation"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
          >
            Faire le test d&apos;orientation
          </Link>
          <Link
            href="/blog/resultats-parcoursup-2026"
            className="inline-flex rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Que faire après les résultats ?
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
