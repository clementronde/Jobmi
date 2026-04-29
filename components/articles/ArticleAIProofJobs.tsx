import Link from 'next/link';

const sources = [
  {
    label: 'World Economic Forum — Future of Jobs Report 2025',
    href: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
  },
  {
    label: 'Microsoft Research — Working with AI, 2025',
    href: 'https://www.microsoft.com/en-us/research/publication/working-with-ai-measuring-the-occupational-implications-of-generative-ai/',
  },
  {
    label: 'Upwork — Most In-Demand Skills 2025',
    href: 'https://www.upwork.com/press/releases/upwork-unveils-2025s-most-in-demand-skills',
  },
];

const jobs = [
  {
    title: '1. Infirmier·e / aide-soignant·e',
    why:
      "L’IA peut suivre des constantes, alerter sur certains risques ou générer des plans de soin standards. Mais elle ne peut pas remplacer la présence au chevet, le calme face à la peur, la coordination avec une équipe et le jugement rapide quand la situation change.",
    example:
      "Dans un service hospitalier, un outil peut signaler une anomalie cardiaque ou une chute possible. Mais c’est l’infirmier ou l’aide-soignant qui arrive, parle au patient, évalue l’urgence, rassure la famille et décide s’il faut appeler un médecin tout de suite.",
    salary: 'Début : 1 800–2 200 € net. Après expérience : 2 500–3 000 €. Spécialisations urgences, bloc ou coordination : souvent davantage.',
    training:
      'Aide-soignant : diplôme d’État en environ 10 à 12 mois. Infirmier : diplôme d’État en IFSI, niveau bac+3, avec stages longs.',
    test:
      'PMSMP, stage d’observation, journée portes ouvertes en IFSI ou échange avec un professionnel. Le point clé : vérifier ton rapport au soin, au rythme et à la charge émotionnelle.',
  },
  {
    title: '2. Éducateur·rice spécialisé·e',
    why:
      "L’IA peut proposer des exercices, suivre des absences ou aider à rédiger un compte rendu. Mais reconstruire la confiance avec un jeune, désamorcer une crise, comprendre une histoire familiale ou tenir un cadre juste demande une présence humaine.",
    example:
      "Dans un foyer, un tableau de suivi peut montrer qu’un jeune décroche. Mais c’est l’éducateur qui repère le non-dit, prend le temps de parler, comprend la peur derrière le refus et adapte la réponse sans humilier.",
    salary: 'Début : 1 700–2 000 € net. Avec expérience, coordination ou responsabilité d’équipe : autour de 2 500–2 800 € net selon structures.',
    training:
      'Diplôme d’État d’éducateur spécialisé, niveau bac+3, souvent accessible en alternance selon les écoles et les régions.',
    test:
      'Immersion en foyer, IME, association ou structure médico-sociale via Mission Locale, France Travail ou réseau local.',
  },
  {
    title: '3. Plombier·e / électricien·ne',
    why:
      "L’IA aide au diagnostic, à la planification ou au devis. Mais une fuite dans un immeuble ancien, une installation bricolée, un client stressé ou un chantier qui change en direct demandent de la débrouille terrain.",
    example:
      "Une app peut dire “fuite salle de bain”. Sur place, le plombier découvre une cloison impossible à ouvrir, une canalisation ancienne et un propriétaire pressé. La solution vient de l’œil, de l’expérience et de l’improvisation.",
    salary: 'Début salarié : souvent 1 800–2 300 € net. Artisan indépendant expérimenté : 3 000–4 000 € net possibles selon clientèle et région.',
    training:
      'CAP plomberie, installateur sanitaire, électricien ou équivalent, souvent en apprentissage. Possibilité de poursuivre en BP ou titre pro.',
    test:
      'Stage d’observation dans une entreprise locale, mini-stage, PMSMP ou échange avec un artisan pour voir le rythme réel.',
  },
  {
    title: '4. Enseignant·e / formateur·rice',
    why:
      "L’IA sait générer des exercices, corriger certains quiz, résumer un cours ou proposer un plan pédagogique. Mais enseigner, ce n’est pas seulement transmettre une information. C’est lire une classe, sentir quand un élève décroche, reformuler au bon moment, maintenir l’attention et créer un cadre où les jeunes osent essayer.",
    example:
      "Un outil peut préparer une fiche sur les fractions. Mais face à une classe agitée un vendredi après-midi, c’est l’enseignant qui change d’exemple, relance le groupe, rassure l’élève qui a honte de ne pas comprendre et arbitre les tensions sans casser la dynamique.",
    salary:
      'Début enseignant public : autour de 1 900–2 200 € net selon statut et primes. Formateur en organisme ou indépendant : très variable, souvent 1 800–3 000 € net avec expérience.',
    training:
      'Professorat : parcours licence puis master MEEF et concours. Formation professionnelle : titres de formateur, expérience métier ou certifications selon public.',
    test:
      'Observation en classe, tutorat, aide aux devoirs, animation d’atelier, bénévolat éducatif. Si tu veux tester vite, commence par accompagner un petit groupe.',
  },
  {
    title: '5. Psychologue',
    why:
      "L’IA peut aider à préparer des questionnaires, vulgariser des notions ou proposer des pistes de suivi. Mais l’alliance thérapeutique, le silence juste, la lecture du non-verbal et la responsabilité éthique ne se délèguent pas à un chatbot.",
    example:
      "Une personne peut écrire “je vais mal” à une IA. Mais en cabinet, le psychologue entend la façon dont elle le dit, repère les évitements, ajuste son cadre, évalue le risque et construit une relation de confiance dans la durée.",
    salary:
      'Début salarié : souvent 1 800–2 300 € net. Libéral : revenus très variables selon ville, spécialité, réseau et rythme, avec une montée progressive.',
    training:
      'Titre de psychologue : licence + master de psychologie, donc bac+5. C’est l’un des métiers de cette liste qui demande le parcours le plus long.',
    test:
      'Impossible de “tester” la pratique clinique directement sans formation, mais tu peux rencontrer des psychologues, faire du bénévolat d’écoute encadré, explorer les métiers du social ou assister à des conférences.',
  },
  {
    title: '6. Cuisinier·ère / chef·fe de cuisine',
    why:
      "L’IA peut inventer une recette, calculer des coûts ou optimiser un planning. Mais elle ne sent pas une cuisson, ne gère pas un coup de feu, ne motive pas une brigade et ne rattrape pas une sauce ou un service qui dérape.",
    example:
      "Un logiciel peut proposer un menu rentable. En cuisine, le chef doit sentir si le poisson est prêt, adapter l’assiette à un produit moins beau que prévu, gérer le stress de l’équipe et tenir la qualité malgré la pression.",
    salary:
      'Début : souvent 1 600–2 000 € net. Chef de partie : 2 000–2 500 €. Chef ou indépendant : très variable, parfois bien plus selon établissement.',
    training:
      'CAP cuisine, bac pro cuisine, apprentissage, titres professionnels ou école spécialisée. L’expérience terrain compte énormément.',
    test:
      'Stage d’observation, extra, immersion en restaurant, atelier cuisine ou apprentissage court. À vérifier : horaires, rythme physique, stress et plaisir du geste.',
  },
  {
    title: '7. Agriculteur·rice / maraîcher·ère',
    why:
      "L’IA aide déjà avec la météo, l’irrigation, les capteurs, les rendements ou la gestion. Mais le vivant reste imprévisible : sol, saison, maladies, machines, animaux, fatigue, décisions économiques et météo réelle.",
    example:
      "Un tableau peut recommander une irrigation. Sur le terrain, l’agriculteur regarde la terre, connaît sa parcelle, anticipe un orage, choisit de décaler une récolte et assume la décision.",
    salary:
      'Très variable : démarrage parfois modeste, revenus dépendants de la filière, du foncier, des aides, du modèle économique et de la vente. Salariat agricole : souvent proche du SMIC au départ, puis progression avec responsabilités.',
    training:
      'CAP agricole, bac pro, BPREA, BTS agricole, apprentissage ou reconversion via organismes spécialisés.',
    test:
      'Immersion dans une ferme, chantier participatif encadré, stage saisonnier, PMSMP ou salariat court. Teste avant de romantiser : le métier est beau, mais exigeant.',
  },
  {
    title: '8. Coach sportif / éducateur·rice sportif·ve',
    why:
      "L’IA peut générer un programme d’entraînement, compter des calories ou analyser des mouvements. Mais elle ne remplace pas l’énergie humaine, la correction en direct, la motivation, la sécurité et l’adaptation à une personne réelle.",
    example:
      "Une app peut dire “fais 3 séries”. Un coach voit que tu compenses avec le dos, que tu as peur de charger, que tu mens un peu sur ta fatigue, et adapte la séance sans te blesser ni te décourager.",
    salary:
      'Début salarié : souvent 1 600–2 000 € net. Indépendant : très variable, de revenus modestes au départ à 3 000 € net et plus avec clientèle fidèle et spécialisation.',
    training:
      'BPJEPS activités de la forme, STAPS selon projets, CQP ou certifications selon disciplines. Carte professionnelle obligatoire pour encadrer contre rémunération.',
    test:
      'Observer un coach, aider dans une association sportive, animer un échauffement encadré, faire une PMSMP en salle ou club.',
  },
  {
    title: '9. Art-thérapeute / médiateur·rice artistique',
    why:
      "L’IA peut générer des images, proposer des exercices créatifs ou aider à documenter une séance. Mais l’art-thérapie et la médiation artistique reposent sur la relation, la sécurité du cadre, l’écoute et l’adaptation à la personne ou au groupe.",
    example:
      "Un outil peut proposer un collage sur les émotions. Mais face à une personne qui se ferme, l’intervenant choisit de ralentir, change de support, respecte le silence et transforme l’activité en espace de confiance.",
    salary:
      'Très variable selon statut : salarié associatif ou médico-social souvent proche de 1 700–2 300 € net ; indépendant plus irrégulier, dépendant du réseau et des institutions partenaires.',
    training:
      'Formations spécialisées en art-thérapie ou médiation artistique, souvent après une base en psychologie, social, soin, animation ou pratique artistique solide.',
    test:
      'Bénévolat culturel ou social, observation d’ateliers, animation encadrée, immersion en association, EHPAD, structure handicap ou jeunesse.',
  },
  {
    title: "10. Artisan·e d’art",
    why:
      "L’IA peut inspirer des motifs, générer des visuels ou aider à vendre en ligne. Mais elle ne remplace pas la main, la matière, le défaut à corriger, la patience, le regard esthétique et la relation avec un client qui veut une pièce unique.",
    example:
      "Un générateur d’images peut proposer un motif de bijou. L’artisan choisit le métal, sent la résistance, ajuste au millimètre, explique le choix au client et assume la qualité finale.",
    salary:
      'Début souvent modeste, surtout en indépendant. Salariat atelier : autour de 1 600–2 200 € net selon métier. Revenus plus élevés possibles avec spécialisation, réputation et vente directe.',
    training:
      'CAP métiers d’art, BMA, DN MADE, apprentissage en atelier, compagnonnage ou formations spécialisées selon matière : bois, métal, textile, cuir, céramique, bijou.',
    test:
      'Atelier découverte, stage chez un artisan, portes ouvertes d’écoles, mini-stage ou immersion. À vérifier : patience, précision, posture physique, rapport à la vente.',
  },
];

const faqs = [
  {
    question: 'L’IA va quand même changer ces métiers ?',
    answer:
      "Oui. Elle va déjà les transformer : suivi patient, aide au diagnostic, préparation de cours, programmes sportifs, devis, gestion de planning, inspiration créative. Mais transformer ne veut pas dire remplacer. Dans ces métiers, l’IA prend surtout les tâches de préparation, d’organisation ou d’aide à la décision. Le cœur reste humain : rassurer, improviser, toucher la matière, sentir une situation, tenir un cadre, adapter une réponse à une personne réelle.",
  },
  {
    question: 'Faut-il un bac+5 pour viser ces métiers ?',
    answer:
      "Non, pas pour la majorité. Plombier, électricien, cuisinier, artisan d’art, aide-soignant, coach sportif ou métiers agricoles peuvent passer par CAP, apprentissage, BPJEPS, titres professionnels ou formations courtes. Psychologue demande bien un bac+5, et infirmier ou éducateur spécialisé demandent un diplôme d’État niveau bac+3.",
  },
  {
    question: 'Quel salaire réaliste au début ?',
    answer:
      "Au départ, beaucoup de ces métiers tournent entre 1 600 et 2 300 € net selon statut, région, horaires et secteur. Les écarts deviennent importants avec l’expérience : spécialisation santé, artisanat indépendant, clientèle sportive, responsabilité d’équipe ou installation à son compte. Le bon réflexe est de comparer salaire, rythme, pénibilité et stabilité, pas seulement le chiffre affiché.",
  },
  {
    question: 'Où trouver des immersions pour tester ?',
    answer:
      "Commence par la Mission Locale si tu as moins de 26 ans, France Travail si tu es inscrit, ton établissement si tu es étudiant, ou les entreprises locales. Tu peux demander une PMSMP, un stage d’observation, une journée découverte ou un échange métier. Prépare une demande courte : qui tu es, ce que tu veux vérifier, la durée souhaitée, et pourquoi ce métier t’intéresse.",
  },
  {
    question: 'Quelles régions recrutent le plus ?',
    answer:
      "Les besoins existent partout, mais ils varient par métier. Île-de-France et grandes métropoles recrutent beaucoup dans le soin, social, éducation, restauration et services. Les métiers agricoles, artisanaux ou du bâtiment peuvent être très demandés hors métropoles. Le mieux est de croiser tes envies avec les offres locales, les CFA, les Missions Locales et les événements d’orientation de ta région.",
  },
  {
    question: 'Comment combiner ces métiers avec l’IA ?',
    answer:
      "Utilise l’IA comme assistant : préparer un cours, générer une liste de questions patient, structurer un devis, créer une fiche d’entraînement, imaginer un atelier ou organiser ta semaine. Mais garde la main sur le jugement final. La compétence forte d’ici 2030 sera souvent : savoir utiliser l’IA sans perdre la relation humaine, le geste et le sens du terrain.",
  },
];

export function ArticleAIProofJobs() {
  return (
    <div className="font-sans sm:mx-10">
      <section className="mx-auto max-w-3xl text-base leading-8 text-[#465160]">
        <p>
          Tu as 18–25 ans et tu te demandes si l’IA va te piquer ton futur job ?
          Bonne nouvelle : certains métiers resteront très humains encore 10 ans
          minimum.
        </p>
        <p className="mt-4">
          Le World Economic Forum explique dans son rapport 2025 que les métiers
          du soin, de l’éducation, de l’agriculture et plusieurs rôles de terrain
          restent portés par des besoins solides à horizon 2030. Microsoft
          Research montre aussi que l’IA générative s’applique surtout aux tâches
          d’information, de rédaction, de conseil ou de communication, pas à
          l’ensemble d’un métier réel.
        </p>
        <p className="mt-4">
          L’IA transforme donc le travail, mais elle ne remplace pas facilement ce
          qui fait la force humaine : empathie, débrouille terrain, créativité
          personnelle et jugement complexe. Ces métiers sont accessibles sans
          bac+5 pour beaucoup d’entre eux, souvent via apprentissage, diplôme
          d’État, CAP, BPJEPS ou formations courtes. Et surtout : tu peux les
          tester avec une PMSMP, un stage d’observation, une journée découverte
          ou un échange métier avant de t’engager.
        </p>
        <div className="mt-6 rounded-2xl bg-[#F8F7FF] p-5">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#6500FF]">
            Sources utilisées
          </p>
          <div className="mt-3 flex flex-col gap-2">
            {sources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#6500FF] underline underline-offset-4"
              >
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="my-14">
        <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
          Pourquoi ces métiers résistent vraiment à l’IA ?
        </h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-[#465160]">
          <p>
            L’intelligence artificielle excelle sur les tâches répétitives,
            l’analyse de données massives et la génération de contenu moyen :
            textes génériques, images basiques, synthèses, réponses standards.
          </p>
          <p>
            Elle galère davantage quand la situation dépend d’un corps, d’un lieu,
            d’une relation ou d’un contexte émotionnel. Un patient qui panique, un
            adolescent en crise, une fuite d’eau dans un immeuble ancien, une
            classe qui décroche ou une équipe en plein rush : ces situations
            demandent de sentir, décider, ajuster et assumer.
          </p>
          <p>
            Ces métiers ne sont donc pas “anti-IA”. ChatGPT ou d’autres outils
            peuvent aider à préparer un cours, structurer un devis, imaginer une
            activité, organiser un suivi ou gagner du temps administratif. Mais
            la différence se joue encore dans la présence humaine.
          </p>
        </div>
      </section>

      <section className="space-y-10">
        {jobs.map((job) => (
          <article
            key={job.title}
            className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
          >
            <h3 className="text-2xl font-bold leading-tight text-[#04192F]">
              {job.title}
            </h3>
            <div className="mt-5 space-y-4 text-base leading-8 text-[#465160]">
              <p>
                <strong>Pourquoi l’IA ne remplace pas :</strong> {job.why}
              </p>
              <p>
                <strong>Exemple concret :</strong> {job.example}
              </p>
              <p>
                <strong>Salaire & évolution :</strong> {job.salary}
              </p>
              <p>
                <strong>Formations :</strong> {job.training}
              </p>
              <p>
                <strong>Comment tester :</strong> {job.test}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="my-14 rounded-2xl bg-[#F8F7FF] p-7">
        <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
          Ce que ça change pour ton orientation à 18–25 ans
        </h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-[#465160]">
          <p>
            Tu n’as pas besoin de viser uniquement les métiers “tech” pour avoir
            un avenir solide. Beaucoup de métiers résistants à l’IA passent par
            l’apprentissage, les diplômes d’État, les formations courtes ou les
            immersions terrain.
          </p>
          <p>
            L’IA n’est pas ton ennemie : elle peut enlever une partie des tâches
            répétitives et t’aider à mieux t’organiser. Mais ton avantage, à 18–
            25 ans, c’est d’apprendre un métier où la relation, le geste, la
            créativité ou le terrain comptent vraiment.
          </p>
          <p>
            Prochaine étape : choisis 2 ou 3 métiers dans cette liste, puis teste
            si l’un d’eux te correspond avec une immersion, une PMSMP ou un
            échange professionnel.
          </p>
        </div>
      </section>

      <section className="my-14">
        <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
          FAQ : tout ce que tu te demandes sur ces métiers “IA-proof”
        </h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group overflow-hidden rounded-2xl border border-[#E9E1FF] bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-[#04192F] transition hover:bg-[#F8F7FF]">
                <span>{faq.question}</span>
                <span className="text-xl font-bold text-[#6500FF] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-[#E9E1FF] px-6 py-5 text-base leading-8 text-[#465160]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="my-14 rounded-2xl bg-[#04192F] p-8 text-white">
        <h2 className="text-3xl font-bold">
          Prêt à tester ton futur métier IA-proof ?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
          Passe notre test d’orientation gratuit : découvre les métiers qui
          matchent ta personnalité et résistent le mieux à l’automatisation.
        </p>
        <Link
          href="/test"
          className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
        >
          Passer le test gratuit
        </Link>
        <p className="mt-3 text-sm text-white/55">
          5 minutes pour clarifier tes 3 meilleures pistes.
        </p>
      </section>
    </div>
  );
}
