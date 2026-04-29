import Link from 'next/link';

const sources = [
  {
    label: 'Commission européenne — Digital Skills and Jobs Platform',
    href: 'https://digital-skills-jobs.europa.eu/en/artificial-intelligence',
  },
  {
    label: 'World Economic Forum — Future of Jobs Report 2025',
    href: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/',
  },
  {
    label: 'Microsoft Research — Working with AI, 2025',
    href: 'https://www.microsoft.com/en-us/research/publication/working-with-ai-measuring-the-occupational-implications-of-generative-ai/',
  },
];

const technicalJobs = [
  {
    title: "Prompt Engineer – l'expert des questions intelligentes",
    text:
      "Son rôle : transformer une demande floue en instruction précise pour ChatGPT, Claude, Midjourney ou des outils internes. Le métier mélange rédaction, logique, connaissance métier et test permanent. Exemple : au lieu de demander “fais-moi un mail qui vend”, il définit le contexte, la cible, l’offre, les objections, le ton, les contraintes et les variantes à tester. En 2026, les salaires annoncés varient énormément selon pays et niveau : vise plutôt 40–70k€ en Europe pour un profil junior/intermédiaire sérieux, plus en freelance expert ou dans une scale-up. Pour entrer : 3 à 6 mois de pratique intensive, un portfolio de prompts avant/après, des cas concrets par secteur et une première mission freelance ou stage startup. Test rapide : crée 5 prompts complexes sur Claude ou ChatGPT et compare les résultats avant/après optimisation.",
  },
  {
    title: "IA Trainer / Data Labeler – l'entraîneur d'intelligence artificielle",
    text:
      "Son rôle : aider les modèles à mieux comprendre le monde en annotant des textes, images, sons, conversations ou intentions. Tu peux classer des demandes en “urgent”, “information”, “insulte”, “émotion anxieuse”, “spam”, ou vérifier si une réponse IA est correcte. C’est souvent une porte d’entrée accessible sans diplôme lourd, parfois en remote. Salaire : plutôt 28–45k€ selon complexité, langue, secteur et responsabilité ; davantage en supervision qualité ou data operations. Pour entrer : apprendre les bases de la qualité de données, tester des plateformes d’annotation, comprendre les biais et construire une rigueur presque obsessionnelle. Test rapide : essaie une plateforme type Clickworker ou un mini-projet d’annotation maison sur 100 exemples.",
  },
  {
    title: 'Synthèse vocale designer – créateur de voix IA',
    text:
      "Son rôle : concevoir des voix synthétiques crédibles pour assistants vocaux, audiobooks, jeux vidéo, formation ou service client. Il faut régler le rythme, l’émotion, l’accent, les pauses et la cohérence avec une marque. Exemple : créer une voix “jeune, motivante, pas trop commerciale” pour une app de coaching sportif. Salaire : souvent 40–70k€ selon profil audio, UX ou production ; plus si tu combines design sonore, IA vocale et direction créative. Pour entrer : 3 à 6 mois de pratique avec ElevenLabs, Respeecher ou outils équivalents, un portfolio de voix, des cas d’usage et une bonne oreille. Test rapide : crée trois variantes d’une même voix et fais-les écouter à 10 personnes.",
  },
  {
    title: "Fine-tuner d'IA – personnalisateur de modèles",
    text:
      "Son rôle : adapter un modèle générique à un secteur précis : santé, juridique, e-commerce, support client, formation interne. C’est le métier le plus technique de cette liste : il faut comprendre données, évaluation, prompts, modèles, parfois Python et Hugging Face. Salaire : 45–80k€ en Europe selon niveau, plus sur profils ML solides. Pour entrer : 6 à 12 mois de formation sérieuse, projets GitHub, notebooks propres, compréhension des jeux de données et métriques. Tu n’as pas besoin d’un doctorat pour commencer, mais tu dois aimer apprendre vite et déboguer. Test rapide : fine-tune ou adapte un petit modèle open source sur un corpus simple, puis documente les résultats.",
  },
];

const businessJobs = [
  {
    title: "Consultant·e IA pour PME – l'intégrateur pratique",
    text:
      "Son rôle : aider une TPE, PME, association ou indépendant à gagner du temps avec l’IA. Pas besoin de construire un modèle : il faut comprendre un métier, repérer les tâches répétitives et installer des solutions simples. Exemple : un restaurant automatise ses réponses aux avis, ses posts Instagram et une partie des réservations ; un artisan transforme ses demandes clients en devis structurés ; une agence produit des briefs 5 fois plus vite. Salaire : 35–65k€ salarié ou 500–1 000€ par mission courte en freelance selon valeur créée. Pour entrer : choisis un secteur, maîtrise ChatGPT, Notion AI, Zapier/Make, templates et mesure du ROI. Test rapide : automatise un vrai process pour quelqu’un de ton entourage.",
  },
  {
    title: 'Product Manager IA – le chef de projet IA',
    text:
      "Son rôle : coordonner la création d’un produit qui utilise l’IA : chatbot RH, outil d’aide au diagnostic, moteur de recommandation, assistant pédagogique. Il parle avec les utilisateurs, les développeurs, le business, la data et le juridique. Il ne code pas forcément, mais doit comprendre ce que l’IA peut ou ne peut pas faire. Salaire : 45–75k€ selon startup, scale-up ou grand groupe. Pour entrer : base product management, UX, analytics, culture IA et projets concrets. Formation possible en école produit, bootcamp ou alternance avec spécialisation IA. Test rapide : prends une app existante et écris une fiche produit d’une fonctionnalité IA utile, avec risques et métriques.",
  },
  {
    title: 'Formateur·rice IA par secteur – prof IA spécialisé',
    text:
      "Son rôle : former des comptables, avocats, restaurateurs, RH, commerciaux ou enseignants à utiliser l’IA dans leur métier. Le plus important n’est pas de connaître tous les modèles, mais de traduire l’IA en gestes utiles pour un public précis. Salaire : 35–60k€ salarié ; indépendant : 500–900€ par jour quand l’expertise secteur est claire. Pour entrer : maîtrise un secteur, crée des ateliers, exemples, exercices et supports simples. La demande monte car beaucoup d’entreprises veulent former leurs équipes sans recruter des ingénieurs IA. Test rapide : anime un atelier gratuit d’une heure pour 5 personnes et récupère leurs questions.",
  },
];

const humanJobs = [
  {
    title: 'Data Ethicist – éthicien·ne des données IA',
    text:
      "Son rôle : vérifier qu’un système IA ne discrimine pas, ne manipule pas et ne prend pas de décisions injustes. Exemple : un outil de recrutement écarte trop souvent certains profils ; un modèle de prêt bancaire défavorise des zones géographiques ; un chatbot santé donne des conseils trop confiants. Salaire : 45–80k€ selon droit, data, conformité et secteur. Pour entrer : base droit, sciences sociales, éthique, data literacy et certification IA. C’est un bon métier si tu aimes la justice, les règles et les dilemmes concrets.",
  },
  {
    title: 'UX Designer IA – interfaces conversationnelles',
    text:
      "Son rôle : créer des expériences IA compréhensibles : chatbots, assistants, copilotes métier, outils de recherche. L’enjeu est d’éviter la frustration : mauvaises réponses, ton froid, hallucinations, manque de contrôle. Salaire : 40–70k€ selon expérience UX, produit et IA. Pour entrer : UX/UI, recherche utilisateur, prototypage conversationnel, tests utilisateurs et compréhension des limites des modèles. Test rapide : refais l’expérience d’un chatbot qui t’énerve et propose une version plus claire.",
  },
  {
    title: 'Responsable conformité IA / RGPD',
    text:
      "Son rôle : aider une entreprise à utiliser l’IA sans violer le RGPD, les règles internes ou l’AI Act européen. Il cartographie les outils, les données sensibles, les risques, les consentements, les fournisseurs et les procédures de contrôle. Salaire : 45–85k€ selon droit, conformité, cybersécurité et taille d’entreprise. Pour entrer : base droit numérique, protection des données, gouvernance IA et bonnes pratiques sécurité. C’est un métier parfait si tu aimes rendre l’innovation solide plutôt que la freiner.",
  },
];

const faqs = [
  {
    question: 'Faut-il être bon en maths ?',
    answer:
      "Seulement pour une partie des métiers, surtout fine-tuning, machine learning ou recherche. Pour prompt engineering, consulting PME, formation IA, UX IA ou conformité, tu as surtout besoin de logique, curiosité, rigueur, culture métier et capacité à tester. Les maths deviennent utiles quand tu manipules les modèles, pas quand tu aides une entreprise à mieux utiliser les outils existants.",
  },
  {
    question: 'Où trouver ces jobs en France ?',
    answer:
      "Commence par les startups et scale-ups à Paris, Lyon, Toulouse, Montpellier, Nantes et Lille, puis regarde les ESN, cabinets de conseil, agences marketing, éditeurs SaaS, organismes de formation et freelances sur Malt. Beaucoup de premières missions ne s’appellent pas encore “job IA” : elles apparaissent comme automatisation, ops, product, contenu, data quality ou transformation digitale.",
  },
  {
    question: 'Existe-t-il des formations gratuites ?',
    answer:
      "Oui, pour démarrer : documentation OpenAI/Anthropic, cours gratuits Google/Microsoft, fast.ai, Hugging Face, YouTube sérieux, MOOC et ateliers d’écoles. Mais pour être recruté, le portfolio compte plus qu’une collection de certificats. Montre des cas concrets : prompts, automatisations, prototypes, audits, supports de formation ou mini-produits.",
  },
  {
    question: 'Quel salaire réaliste la première année ?',
    answer:
      "En France, vise large : 28–45k€ pour annotation/data ops junior, 35–55k€ pour consultant, formateur ou UX IA junior, 40–70k€ pour prompt engineer ou product IA avec portfolio solide, et davantage pour profils techniques rares. Les chiffres très élevés existent, mais souvent aux États-Unis, en senior, ou dans des entreprises très financées.",
  },
  {
    question: 'Peut-on travailler à distance ?',
    answer:
      "Oui, surtout pour prompt engineering, data labeling, formation en ligne, UX, conformité documentaire ou automatisation. Mais au début, l’hybride peut aider : tu apprends plus vite au contact d’une équipe, de clients et de vrais problèmes métier. Le remote devient plus facile quand ton portfolio prouve déjà ta valeur.",
  },
  {
    question: 'Quelle évolution en 5 ans ?',
    answer:
      "Les métiers vont changer de nom et se spécialiser. Un prompt engineer peut devenir AI workflow designer, un consultant PME peut devenir responsable transformation IA, un data labeler peut évoluer vers data quality manager, un UX IA vers product designer IA. La clé : rester en apprentissage continu et choisir un secteur réel, pas seulement un outil.",
  },
];

export function ArticleNewAIJobs() {
  return (
    <div className="font-sans sm:mx-10">
      <section className="mx-auto max-w-3xl text-base leading-8 text-[#465160]">
        <p>
          Pendant qu’on parle des jobs “remplacés par l’IA”, elle en crée déjà
          des centaines de nouveaux. Certains demandent un niveau très avancé en
          maths ou en recherche, mais d’autres reposent surtout sur 3 à 12 mois de
          pratique, un bon portfolio et ta curiosité naturelle.
        </p>
        <p className="mt-4">
          Les chiffres sont à lire avec prudence : la Commission européenne parle
          d’un potentiel de plusieurs milliers de milliards d’euros pour l’économie
          européenne d’ici 2030, et le World Economic Forum prévoit une forte
          transformation des compétences. En clair : l’IA ne crée pas seulement
          des postes “ingénieur IA”. Elle crée aussi des métiers de traduction,
          d’intégration, de formation, d’éthique, d’UX et de conformité.
        </p>
        <p className="mt-4">
          Ces métiers tournent autour de trois besoins : faire marcher l’IA,
          l’intégrer dans les entreprises, et la rendre sûre, utile et humaine.
          Bonne nouvelle si tu as 18–25 ans : tu peux commencer maintenant par un
          mini-projet, une formation courte, une alternance, un stage ou une
          mission freelance ciblée.
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
          Les métiers techniques IA (pour les curieux de tech)
        </h2>
        <div className="mt-6 space-y-6">
          {technicalJobs.map((job) => (
            <article
              key={job.title}
              className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
            >
              <h3 className="text-2xl font-bold text-[#04192F]">{job.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#465160]">{job.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-14">
        <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
          Les métiers “pont” IA + business (sans coder)
        </h2>
        <div className="mt-6 space-y-6">
          {businessJobs.map((job) => (
            <article
              key={job.title}
              className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
            >
              <h3 className="text-2xl font-bold text-[#04192F]">{job.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#465160]">{job.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-14">
        <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
          Les métiers éthiques et humains de l’IA
        </h2>
        <div className="mt-6 space-y-6">
          {humanJobs.map((job) => (
            <article
              key={job.title}
              className="rounded-2xl border border-[#E9E1FF] bg-white p-6 shadow-[0_14px_35px_rgba(4,25,47,0.05)]"
            >
              <h3 className="text-2xl font-bold text-[#04192F]">{job.title}</h3>
              <p className="mt-4 text-base leading-8 text-[#465160]">{job.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-14 rounded-2xl bg-[#F8F7FF] p-7">
        <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
          Comment choisir ton métier IA à 18–25 ans ?
        </h2>
        <div className="mt-5 space-y-3 text-base leading-8 text-[#465160]">
          <p>Si tu aimes écrire, tester et comparer : regarde le prompt engineering.</p>
          <p>Si tu aimes classer, observer et être rigoureux : regarde l’IA training.</p>
          <p>Si tu aimes business, réseau et solutions concrètes : regarde consultant IA PME.</p>
          <p>Si tu aimes justice, règles et impact humain : regarde data ethicist ou conformité IA.</p>
          <p>
            Le bon choix ne se fait pas seulement avec un salaire. Il se teste
            avec un projet, un portfolio et un premier contact terrain.
          </p>
        </div>
      </section>

      <section className="my-14">
        <h2 className="text-3xl font-bold leading-tight text-[#04192F]">
          FAQ : tout sur les métiers IA
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
          Découvre ton profil pour les métiers de l’IA
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
          Passe le test d’orientation gratuit : 5 minutes pour voir si une piste
          IA colle vraiment à ta personnalité, ou si un autre métier te correspond
          mieux.
        </p>
        <Link
          href="/test"
          className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-[#04192F] transition hover:bg-[#AFA1FF]"
        >
          Passer le test d’orientation gratuit
        </Link>
        <p className="mt-3 text-sm text-white/55">
          5 min pour trouver ta piste IA, ou pas.
        </p>
      </section>
    </div>
  );
}
