import Link from 'next/link';

const sources = [
  {
    label: 'McKinsey — The economic potential of generative AI',
    href: 'https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier',
  },
  {
    label: 'Bpifrance Le Lab — IA dans les PME et ETI françaises',
    href: 'https://admin.bpifrance.fr/nos-dossiers/intelligence-artificielle-en-entreprise-definition-enjeux-et-perspectives',
  },
  {
    label: 'Gallup — AI use at work',
    href: 'https://www.gallup.com/699797/indicator-artificial-intelligence.aspx',
  },
];

const sectors = [
  {
    title: 'IA + métiers du soin',
    intro:
      "Dans le soin, l’IA sert surtout à surveiller, préparer et repérer des signaux faibles. Elle ne remplace pas le lien patient, l’observation clinique, le toucher ou la décision finale.",
    jobs: [
      ['Infirmier·e', 'Suivi des constantes, alertes, plans de soin standards', 'Rassurer, adapter, gérer l’urgence réelle', 'Temps gagné sur suivi et transmissions'],
      ['Kinésithérapeute', 'Plans d’exercices, vidéos, suivi des progrès', 'Corriger le geste, motiver, écouter la douleur', 'Séances mieux préparées'],
      ['Orthophoniste', 'Exercices adaptés, suivi vocal, relances', 'Créer la confiance, adapter à la personnalité', 'Progression mieux suivie'],
    ],
    example:
      "Exemple infirmier : un outil alerte sur une fréquence cardiaque inhabituelle. Sur place, tu vois que le patient panique, tu le calmes, tu réévalues la situation et tu décides si l’alerte demande une action médicale immédiate. L’IA signale ; toi, tu comprends la personne.",
  },
  {
    title: 'IA + métiers manuels',
    intro:
      "Dans les métiers manuels, l’IA aide à diagnostiquer, planifier et expliquer. Mais le chantier réel reste plein d’imprévus : bâtiments anciens, pièces introuvables, sécurité, client stressé.",
    jobs: [
      ['Plombier·e', 'Pré-diagnostic photo/vidéo, devis, planning', 'Improviser sur place et sécuriser la réparation', 'Moins d’allers-retours inutiles'],
      ['Électricien·ne', 'Plans 3D, détection, checklists', 'Décider sur installation atypique et expliquer au client', 'Interventions mieux préparées'],
      ['Mécanicien·ne', 'Scan OBD, historique panne, hypothèses', 'Réparer, tester, prioriser et rassurer', 'Recherche de panne plus rapide'],
    ],
    example:
      "Exemple plombier : le client envoie une photo d’une fuite. L’outil pense à un joint usé. Sur place, tu découvres que le mur et l’accès changent tout. L’IA t’a aidé à préparer, mais c’est ton expérience qui sauve l’intervention.",
  },
  {
    title: 'IA + métiers créatifs',
    intro:
      "Dans la création, l’IA accélère les brouillons, moodboards, variantes et retouches. Elle ne remplace pas le goût, la direction artistique, la compréhension du client et la cohérence finale.",
    jobs: [
      ['Graphiste', 'Moodboards, variantes logo, pistes visuelles', 'Vision finale, choix, relation client', 'Exploration beaucoup plus rapide'],
      ['Rédacteur·rice', 'Idées, plans, synthèses concurrentes', 'Style, émotion, angle et storytelling', 'Brouillons plus rapides'],
      ['Photographe', 'Tri, retouches, suggestions cadrage', 'Œil artistique, direction et moment juste', 'Post-production allégée'],
    ],
    example:
      "Exemple graphiste : pour un restaurant italien, Midjourney ou Canva génère 30 pistes. Tu en gardes trois, ajustes la typographie, enlèves les clichés et construis une proposition cohérente avec le positionnement du client.",
  },
  {
    title: 'IA + métiers d’enseignement / accompagnement',
    intro:
      "Dans l’enseignement et l’accompagnement, l’IA prépare, personnalise et synthétise. Mais elle ne motive pas une classe, ne sent pas un blocage émotionnel et ne comprend pas un projet de vie.",
    jobs: [
      ['Enseignant·e', 'Exercices, corrections simples, niveaux différenciés', 'Motiver, improviser, tenir le cadre', 'Préparation plus rapide'],
      ['Coach sportif', 'Programmes, suivi calories, rappels', 'Énergie, sécurité, ajustement en live', 'Suivi client plus simple'],
      ['Conseiller·e orientation', 'Analyse de réponses, pistes métiers, synthèse', 'Écoute, nuance, décision personnalisée', 'Rendez-vous mieux cadrés'],
    ],
    example:
      "Exemple prof : l’IA prépare trois niveaux d’exercices. En classe, tu vois que trois élèves bloquent par peur de se tromper. Tu changes l’activité, tu rassures, tu fais repartir le groupe. L’IA prépare ; toi, tu enseignes.",
  },
  {
    title: 'IA + métiers commerciaux / relation client',
    intro:
      "Dans la relation client, l’IA aide à prioriser, résumer et préparer. Le closing, la confiance, les objections difficiles et la fidélisation restent humains.",
    jobs: [
      ['Commercial·e', 'Leads qualifiés, scripts, relances', 'Écoute, objections, confiance, closing', 'Plus de rendez-vous utiles'],
      ['Chargé·e RH', 'Tri initial, questions pré-entretien, synthèse CV', 'Culture fit, décision finale, échange humain', 'Tri administratif réduit'],
      ['Community Manager', 'Idées posts, planning, analytics', 'Voix de marque, interactions, sens du timing', 'Production plus régulière'],
    ],
    example:
      "Exemple commercial : l’IA signale 12 prospects chauds et prépare des angles d’appel. Toi, tu adaptes au ton de la personne, tu traites la vraie objection et tu construis une relation qui ne ressemble pas à un script.",
  },
];

const tools = [
  'ChatGPT ou Claude : recherches, idées, résumés, brouillons',
  'Canva Magic Studio : visuels rapides et déclinaisons',
  'Otter.ai : notes automatiques de rendez-vous',
  'Notion AI : organisation de projets et synthèses',
  'Gamma.app : présentations automatiques',
];

const faqs = [
  {
    question: 'L’IA va me rendre obsolète quand même ?',
    answer:
      "Non, si tu apprends à l’utiliser. Elle prend surtout les tâches moyennes, répétitives ou préparatoires. Ton rôle est de monter sur les tâches à plus forte valeur : relation humaine, décision, créativité, adaptation au contexte, responsabilité. Le risque n’est pas “l’IA seule”, c’est de rester sur des tâches que l’IA fait déjà correctement.",
  },
  {
    question: 'J’ai 18 ans, par où commencer ?',
    answer:
      "Commence simple : 15 minutes par jour avec ChatGPT ou Claude. Demande-lui d’expliquer un métier, de préparer une liste de questions pour une immersion, de résumer une vidéo ou de comparer deux formations. Au bout d’un mois, tu auras déjà plus de réflexes que beaucoup de personnes en poste.",
  },
  {
    question: 'Ça marche dans ma région, même hors Paris ?',
    answer:
      "Oui. Les outils sont accessibles partout, souvent gratuitement ou avec des versions d’essai. Les usages varient selon les secteurs, mais tu peux apprendre depuis n’importe où. En région, ton avantage peut même être fort : aider une PME, un artisan, une association ou une structure locale à adopter l’IA concrètement.",
  },
  {
    question: 'Quels outils gratuits tester ?',
    answer:
      "Commence avec ChatGPT ou Claude pour écrire et réfléchir, Canva pour créer, Notion pour organiser, Gamma pour présenter, et un outil de transcription comme Otter ou équivalent. N’en teste pas dix en même temps : choisis un problème réel, puis l’outil qui t’aide à le résoudre.",
  },
  {
    question: 'Mon patron ou mon école va payer ?',
    answer:
      "Pas forcément au début. Beaucoup d’outils ont une version gratuite suffisante pour apprendre. Si tu montres un gain concret, comme une heure économisée chaque semaine ou un support plus propre, il devient plus facile de demander un accès payant ou une formation.",
  },
  {
    question: 'Combien de temps pour apprendre ?',
    answer:
      "Pour devenir à l’aise : 3 mois de pratique régulière suffisent. Pour devenir vraiment bon dans un métier précis, il faut ajouter des cas réels, des retours et un portfolio. L’objectif n’est pas de tout connaître, mais de savoir résoudre de vrais problèmes avec l’IA.",
  },
  {
    question: 'Tu as des exemples PME françaises ?',
    answer:
      "Bpifrance montre que les PME et ETI françaises explorent déjà l’IA, même si beaucoup n’ont pas encore de stratégie claire. Les usages les plus accessibles : rédaction de devis, réponses clients, comptes rendus, analyse de ventes, contenus marketing, préparation RH et automatisation administrative.",
  },
];

export function ArticleAIBoostsJobs() {
  return (
    <div className="font-sans sm:mx-10">
      <section className="mx-auto max-w-3xl text-base leading-8 text-[#465160]">
        <p>
          Bonne nouvelle : l’IA ne va pas forcément te voler ton futur job. Dans
          beaucoup de métiers, elle va surtout t’aider à gagner du temps sur les
          tâches répétitives pour te concentrer sur ce qui compte vraiment : les
          clients, les patients, la créativité, les décisions importantes.
        </p>
        <p className="mt-4">
          McKinsey estime que l’IA générative peut contribuer à la croissance de
          productivité mondiale si les organisations réinvestissent bien le temps
          gagné. Bpifrance indique que 32% des PME et ETI françaises utilisent
          déjà l’IA, même si beaucoup restent en phase exploratoire. Gallup
          observe aussi qu’environ un quart des salariés américains utilisent
          l’IA fréquemment au travail.
        </p>
        <p className="mt-4">
          Dans chaque métier, l’IA prend surtout trois catégories : tâches
          répétitives, préparation et analyse simple. Toi, tu gardes le contact
          humain, les décisions finales, le geste, la créativité et le contexte.
          Voici 15 exemples concrets dans 5 secteurs.
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

      {sectors.map((sector) => (
        <section key={sector.title} className="my-14">
          <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
            {sector.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#465160]">
            {sector.intro}
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#E9E1FF]">
            <div className="grid bg-[#04192F] px-4 py-3 text-sm font-bold text-white md:grid-cols-4">
              <span>Métier</span>
              <span>Ce que fait l’IA</span>
              <span>Ce que tu fais</span>
              <span>Gain concret</span>
            </div>
            {sector.jobs.map(([job, ai, human, gain]) => (
              <div
                key={job}
                className="grid gap-2 border-t border-[#E9E1FF] bg-white px-4 py-4 text-sm leading-6 text-[#465160] md:grid-cols-4"
              >
                <strong className="text-[#04192F]">{job}</strong>
                <span>{ai}</span>
                <span>{human}</span>
                <span>{gain}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-2xl bg-[#F8F7FF] p-5 text-base leading-8 text-[#465160]">
            {sector.example}
          </p>
        </section>
      ))}

      <section className="my-14 rounded-2xl bg-[#F8F7FF] p-7">
        <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
          Comment apprendre l’IA en 3 mois
        </h2>
        <div className="mt-5 space-y-5 text-base leading-8 text-[#465160]">
          <p>
            <strong>Mois 1 : les bases.</strong> 15 minutes par jour avec
            ChatGPT ou Claude : résumés, recherches, idées, comparaisons. Exercice
            simple : “explique-moi mon futur métier en 3 phrases, puis donne-moi
            5 tâches que l’IA peut aider à faire”.
          </p>
          <p>
            <strong>Mois 2 : ton métier.</strong> Choisis un secteur : soin,
            graphisme, commerce, enseignement, bâtiment. Teste des prompts
            spécialisés et regarde les outils déjà utilisés dans ce métier.
          </p>
          <p>
            <strong>Mois 3 : mode pro.</strong> Ajoute prise de notes automatique,
            automatisation simple, présentations et portfolio. Ton objectif :
            montrer “voici ce que j’ai gagné avec l’IA” sur un cas réel.
          </p>
        </div>
      </section>

      <section className="my-14">
        <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
          Les 5 outils IA gratuits à tester cette semaine
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-2xl border border-[#E9E1FF] bg-white p-5 text-base leading-7 text-[#465160]"
            >
              {tool}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-base leading-8 text-[#465160]">
          Test : choisis 1 outil, passe 15 minutes dessus aujourd’hui, et cherche
          un résultat concret demain. Pas besoin de devenir expert tout de suite.
        </p>
      </section>

      <section className="my-14">
        <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
          FAQ : tout sur l’IA dans ton futur métier
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
          Prêt à booster ton futur métier avec l’IA ?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
          Passe notre test : découvre les métiers où l’IA peut te rendre plus
          efficace sans remplacer ce qui fait ta valeur humaine.
        </p>
        <Link
          href="/test"
          className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
        >
          Passer le test d’orientation gratuit
        </Link>
        <p className="mt-3 text-sm text-white/55">
          5 min pour matcher personnalité + métiers IA-powered.
        </p>
      </section>
    </div>
  );
}
