import Link from 'next/link';

export const ArticleParcoursup = () => {
  return (
    <div className="font-sans sm:mx-10">

      {/* Intro */}
      <div className="mx-auto my-8 max-w-3xl rounded-2xl bg-[#F8F7FF] p-6 text-base leading-8 text-[#465160]">
        Quand les résultats Parcoursup tombent, c'est souvent le combo : stress, notifications, discussions familiales qui s'enchaînent.
        Si tu te retrouves avec surtout des "En attente", des "Oui‑Si" qui ne te font pas rêver, ou aucune proposition, tu n'as pas "raté ta vie" : tu es juste dans un moment où il faut comprendre le système et choisir tes prochaines actions intelligemment. Cet article te sert de mode d'emploi.
      </div>

      {/* Note introductive */}
      <p className="mx-auto mb-10 max-w-3xl border-l-4 border-[#6500FF] bg-white py-2 pl-5 text-base leading-8 text-[#465160]">
        Si tu cherches les options hors Parcoursup, commence par lire le guide{' '}
        <Link href="/blog/orientation-post-bac-sans-parcoursup" className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]">
          orientation post‑bac sans Parcoursup
        </Link>
        {' '}pour avoir une vue complète de ce qui existe en dehors de la plateforme.
      </p>

      <div className="space-y-14">

        {/* H2 – Types de réponses */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Les différents types de réponses Parcoursup
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Parcoursup peut te donner quatre types de réponses pour chacun de tes vœux :
          </p>
          <ul className="mt-4 space-y-4 text-base leading-8 text-[#465160]">
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">"Oui"</span> — tu es accepté dans la formation, sans condition particulière. Tu peux accepter, refuser, ou garder la place en attendant d'autres réponses.
            </li>
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">"Oui‑Si"</span> — tu es accepté, mais à condition de suivre un accompagnement spécifique (remise à niveau, soutien…) décidé par la formation. C'est un vrai oui, pas un sous‑oui.
            </li>
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">"En attente"</span> — tu es sur liste d'attente. Ton rang évolue au fil des désistements des autres candidats. Ce n'est ni un oui sûr, ni un non définitif.
            </li>
            <li className="rounded-xl border border-[#E9E1FF] bg-white p-4 shadow-sm">
              <span className="font-bold text-[#6500FF]">"Refus"</span> — la formation ne te propose pas de place. Ces vœux apparaissent comme "non retenu" ou "non proposé".
            </li>
          </ul>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Comprendre ces codes, c'est la base pour ne pas paniquer : "En attente" ne veut pas dire "refusé", et "Oui‑Si" n'est pas un "sous‑oui" mais un vrai oui avec un coup de pouce pédagogique.
          </p>
        </section>

        {/* H2 – Dates */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Les grandes dates des résultats Parcoursup 2026
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Pour 2026, le calendrier Parcoursup se découpe en grandes étapes :
          </p>
          <ul className="mt-4 space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span><strong>Avant juin :</strong> tu as formulé tes vœux et finalisé ton dossier.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span><strong>À partir du 2 juin 2026 :</strong> début de la phase principale d'admission — tu peux consulter les réponses dans ton dossier en ligne.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span><strong>Juin – mi‑juillet :</strong> tes réponses évoluent (surtout les "En attente") et tu dois répondre dans les délais annoncés.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span><strong>Phase complémentaire :</strong> une seconde chance pour formuler de nouveaux vœux dans les formations où il reste des places.</span>
            </li>
          </ul>
          <div className="mt-6 rounded-xl border border-[#E9E1FF] bg-white p-5 text-sm leading-7 text-[#465160]">
            <p className="font-semibold text-[#04192F]">Pour les dates exactes, réfère-toi aux sources officielles :</p>
            <ul className="mt-3 space-y-2">
              <li>
                Calendrier interactif :{' '}
                <a
                  href="https://www.parcoursup.gouv.fr/calendrier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]"
                >
                  parcoursup.gouv.fr/calendrier
                </a>
              </li>
              <li>
                PDF calendrier 2025–2026 :{' '}
                <a
                  href="https://www.parcoursup.gouv.fr/sites/default/files/database/documents/2025-10/calendrier-parcoursup-2026-805.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]"
                >
                  Voir le calendrier officiel complet (PDF)
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* H2 – Scénario 1 */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Scénario 1 : tu n'as que des "En attente"
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Tu ouvres Parcoursup et tu vois : 0 "Oui", 0 "Oui‑Si", juste des "En attente" partout.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Ce que ça veut dire</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            Tu n'es pas refusé : tu es sur liste d'attente, avec un rang qui peut bouger chaque jour en fonction des désistements des autres. Ta situation peut s'améliorer sur plusieurs jours voire plusieurs semaines — surtout dans les premières semaines de la phase principale, où beaucoup de candidats acceptent, renoncent ou se réorientent.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Ce que tu peux faire maintenant</h3>
          <ul className="mt-3 space-y-3 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span><strong>Regarde ton rang et la capacité de la formation :</strong> si tu es bien placé par rapport au nombre de places, tes chances sont réelles. Si tu es très loin, il faut envisager d'autres options en parallèle.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span><strong>Garde plusieurs vœux "En attente" :</strong> tant que c'est possible, ne te ferme pas à une seule option.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span><strong>Prépare un plan B en parallèle :</strong> formations hors Parcoursup, rentrées décalées, alternance. Ne perds pas de temps à attendre passivement.</span>
            </li>
          </ul>

          <div className="mt-7 rounded-xl bg-[#F8F7FF] p-5 text-sm leading-7 text-[#465160]">
            <p className="font-semibold text-[#04192F]">Si tu es dans ce cas →</p>
            <p className="mt-2">
              Lis le guide{' '}
              <Link href="/blog/orientation-post-bac-sans-parcoursup" className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]">
                formations hors Parcoursup
              </Link>
              {' '}pour voir ce qui existe en dehors de la plateforme pendant que tu attends.
            </p>
          </div>
        </section>

        {/* H2 – Scénario 2 */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Scénario 2 : tu n'as que des "Oui‑Si" qui ne te motivent pas
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Tu as reçu des réponses, mais surtout des "Oui‑Si" dans des formations pour lesquelles tu n'es pas vraiment emballé.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Ce que ça veut dire</h3>
          <p className="mt-3 text-base leading-8 text-[#465160]">
            "Oui‑Si" est un vrai oui : la formation te prend, mais te propose un accompagnement pour te remettre à niveau ou te soutenir. Ce n'est pas un "mauvais" oui — c'est une façon de sécuriser ta réussite pour la suite.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Questions à te poser</h3>
          <ul className="mt-3 space-y-2 text-base leading-8 text-[#465160]">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Est-ce que le domaine de la formation t'intéresse vraiment, même si l'établissement ne te fait pas rêver ?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
              <span>Est-ce que tu as un autre projet plus cohérent à court terme (formation hors Parcoursup, alternance, année terrain structurée) ?</span>
            </li>
          </ul>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Ce que tu peux faire</h3>
          <div className="mt-3 space-y-4 text-base leading-8 text-[#465160]">
            <p>
              <strong>Accepter un "Oui‑Si" que tu peux assumer :</strong> si le domaine t'attire et que l'accompagnement ne te dérange pas, c'est souvent une bonne porte d'entrée. Tu pourras toujours te réorienter plus tard avec une année validée.
            </p>
            <p>
              <strong>Garder un "Oui‑Si" comme filet de sécurité</strong> tout en regardant d'autres options — c'est là que les formations hors Parcoursup ou l'alternance deviennent utiles.
            </p>
          </div>

          <div className="mt-7 rounded-xl bg-[#F8F7FF] p-5 text-sm leading-7 text-[#465160]">
            <p className="font-semibold text-[#04192F]">Si tu es dans ce cas →</p>
            <p className="mt-2">
              Croise cet article avec{' '}
              <Link href="/blog/orientation-post-bac-sans-parcoursup" className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]">
                les options si tu veux sortir de Parcoursup
              </Link>
              {' '}et explore les événements et salons via{' '}
              <Link href="/evenements-orientation" className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]">
                l'agenda d'orientation
              </Link>
              .
            </p>
          </div>
        </section>

        {/* H2 – Scénario 3 */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Scénario 3 : tu n'as aucune proposition (que des refus)
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            C'est le scénario qui pique le plus : tu ouvres Parcoursup et tu n'as aucun "Oui", aucun "Oui‑Si", pas même un "En attente". Ça ne veut pas dire qu'il n'y a plus de solutions pour l'année qui arrive.
          </p>

          <h3 className="mt-7 text-xl font-bold text-[#04192F]">Les options concrètes</h3>
          <div className="mt-4 space-y-5 text-base leading-8 text-[#465160]">
            <div>
              <p className="font-semibold text-[#04192F]">Phase complémentaire Parcoursup</p>
              <p className="mt-1">
                Tu peux formuler de nouveaux vœux dans des formations où il reste des places (souvent des BTS, des licences ou des écoles qui n'ont pas rempli). Ce sont parfois des filières auxquelles tu n'avais pas pensé au départ. Vérifie les modalités sur la{' '}
                <a
                  href="https://www.parcoursup.gouv.fr/faq/thematiques/fonctionnement-de-parcoursup/recevoir-les-reponses-et-propositions-d-admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]"
                >
                  FAQ officielle Parcoursup
                </a>
                .
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#04192F]">Formations hors Parcoursup</p>
              <p className="mt-1">
                Écoles privées, bachelors, BTS en école, titres pro, écoles spécialisées en digital, commerce, design, tourisme. Vérifie la reconnaissance officielle (RNCP, visa, grade) et les débouchés avant de t'engager. Tout est détaillé dans le guide{' '}
                <Link href="/blog/orientation-post-bac-sans-parcoursup" className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]">
                  orientation post‑bac sans Parcoursup
                </Link>
                .
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#04192F]">Une année "terrain" structurée</p>
              <p className="mt-1">
                Si tu ne veux pas te précipiter, tu peux structurer une année avec des expériences pro (jobs, stages, missions), des immersions via PMSMP pour tester des métiers, du bénévolat ou un service civique. Cette année peut te servir à construire un projet solide et revenir l'an prochain avec beaucoup plus de matière.
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-xl bg-[#F8F7FF] p-5 text-sm leading-7 text-[#465160]">
            <p className="font-semibold text-[#04192F]">Si tu es dans ce cas →</p>
            <p className="mt-2">
              Appuie-toi sur le guide{' '}
              <Link href="/blog/orientation-post-bac-sans-parcoursup" className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]">
                formations hors Parcoursup : quelles options ?
              </Link>
              {' '}et regarde{' '}
              <Link href="/evenements-orientation" className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]">
                les salons, JPO et événements d'orientation
              </Link>
              {' '}pour trouver des solutions concrètes près de chez toi.
            </p>
          </div>
        </section>

        {/* H2 – Méthode Jobmi */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            Que faire concrètement après les résultats : la méthode Jobmi en 3 étapes
          </h2>
          <p className="mt-5 text-base leading-8 text-[#465160]">
            Peu importe ton scénario, tu peux suivre une trame simple.
          </p>

          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Étape 1</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">Clarifier ta situation et tes options réelles</h3>
              <ul className="mt-3 space-y-2 text-base leading-7 text-[#465160]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>Liste tous tes vœux et leur statut (Oui, Oui‑Si, En attente, Refus).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>Note ce que tu ressens pour chacun : "plutôt ça me tente" / "je ne m'y vois pas du tout".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>Distingue ce qui est encore vivant (En attente, phase complémentaire, candidatures hors Parcoursup) de ce qui est vraiment fermé.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Étape 2</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">Clarifier ce que tu veux tester</h3>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Est-ce que tu veux absolument des études longues tout de suite ? Ou es-tu prêt·e à faire une formation plus courte, de l'alternance, ou une année terrain structurée ?
              </p>
              <p className="mt-3 text-base leading-7 text-[#465160]">
                Un bon réflexe :{' '}
                <Link href="/test" className="font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]">
                  passer un test d'orientation
                </Link>
                {' '}pour faire ressortir 2–3 familles de métiers qui te ressemblent, puis regarder les formations et chemins possibles vers ces familles.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-[#6500FF]">Étape 3</p>
              <h3 className="mt-2 text-xl font-bold text-[#04192F]">Passer à une action concrète dans les 7 jours</h3>
              <ul className="mt-3 space-y-2 text-base leading-7 text-[#465160]">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>Soit confirmer une formation (Oui ou Oui‑Si) où tu te vois vraiment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>Soit lancer 3–5 candidatures hors Parcoursup (écoles, alternance, etc.).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6500FF]" />
                  <span>Soit poser au moins 1 immersion ou 1 événement (salon, JPO, atelier) dans ton agenda à très court terme.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* H2 – FAQ */}
        <section>
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            FAQ – 5 questions fréquentes sur les résultats Parcoursup 2026
          </h2>

          <div className="mt-6 space-y-5">
            {[
              {
                q: "Est-ce que je peux tout changer après les résultats ?",
                a: "Tu peux encore jouer sur la phase complémentaire, candidater hors Parcoursup ou construire une année terrain pour revenir plus fort. Tu ne peux pas réécrire ton dossier Parcoursup de cette année, mais tu peux influencer fortement la suite.",
              },
              {
                q: '"En attente", ça veut dire quoi exactement ?',
                a: "Tu es sur liste d'attente : la formation te prendra si suffisamment de candidats devant toi renoncent. Ton rang évolue en fonction des réponses des autres. Ce n'est ni un \"oui sûr\", ni un \"non définitif\", mais un \"peut‑être\" qui peut se débloquer dans les semaines qui suivent.",
              },
              {
                q: "Est-ce grave d'accepter une formation \"par défaut\" ?",
                a: "Pas forcément, si le domaine t'intéresse un minimum et que tu te laisses la possibilité de te réorienter plus tard (passerelle, autre école). Ce qui est risqué, c'est de signer pour quelque chose que tu sais déjà que tu vas détester, sans réfléchir aux alternatives.",
              },
              {
                q: "Est-ce qu'on peut faire de bonnes études sans Parcoursup ?",
                a: "Oui. De nombreuses écoles, bachelors, BTS en école et titres pro sont de qualité, même s'ils ne passent pas par la plateforme. Ce qui compte, c'est de vérifier : reconnaissance officielle, débouchés, cohérence avec ton projet.",
              },
              {
                q: "Comment expliquer plus tard un \"échec Parcoursup\" dans mon parcours ?",
                a: "Tu peux le raconter comme un point de départ, pas comme une fin : \"Je n'ai pas eu ce que je voulais sur Parcoursup, j'ai utilisé l'année pour tester le terrain, me former, clarifier mon projet, et voilà ce que j'en ai tiré.\" Les recruteurs et écoles regardent la cohérence de ce que tu as fait ensuite, pas le fait que tu aies eu ton vœu du premier coup.",
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
        <p className="text-base leading-7 text-white/80">
          Tu n'es pas obligé·e de tout décider en une nuit. Sur Jobmi, tu peux passer un test d'orientation pour identifier les familles de métiers qui te correspondent, lire le guide sur les options hors Parcoursup et explorer l'agenda des événements d'orientation près de chez toi.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/test"
            className="inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
          >
            Faire le test d'orientation
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
