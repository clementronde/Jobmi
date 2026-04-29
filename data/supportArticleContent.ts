export type SupportArticleContent = {
  slug: string;
  intro: string;
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  checklist?: string[];
  cta: {
    href: string;
    label: string;
    text: string;
  };
};

export const supportArticleContent: SupportArticleContent[] = [
  {
    slug: 'reconversion-apres-une-l1',
    intro:
      "Rater ou détester une L1 ne veut pas dire que tu as raté ton orientation. C'est souvent un signal utile : la voie choisie après le bac ne colle pas à ton rythme, tes intérêts ou ton besoin de concret.",
    sections: [
      {
        title: "Comprendre ce qui ne va pas vraiment",
        paragraphs: [
          "Avant de changer de filière, distingue trois choses : la matière, la méthode de travail et l'environnement. Tu peux aimer le droit mais détester l'amphi, ou aimer l'économie mais avoir besoin d'un format plus encadré.",
          "Cette nuance évite de tout jeter trop vite. Une réorientation réussie commence souvent par une analyse honnête de ce qui bloque.",
        ],
      },
      {
        title: 'Comparer les sorties possibles',
        paragraphs: [
          "Après une L1, tu peux regarder les passerelles internes, BTS, BUT, écoles, alternance, formations courtes ou année structurée d'exploration.",
          "Le bon choix dépend de ton besoin : plus de concret, plus d'encadrement, un métier plus clair, ou simplement un domaine mieux aligné avec ton profil.",
        ],
      },
      {
        title: 'Tester avant de recommencer',
        paragraphs: [
          "Si tu ne fais que remplacer une formation floue par une autre formation floue, tu risques de répéter le même scénario. Avant de t'inscrire, essaie de parler à des étudiants, visiter une école ou tester un métier.",
          "Une immersion courte peut suffire à vérifier si tu te projettes vraiment dans le quotidien visé.",
        ],
      },
    ],
    checklist: [
      "J'ai identifié si le problème vient de la matière, du format ou du métier visé.",
      "J'ai listé 2 ou 3 options réalistes après ma L1.",
      "J'ai vérifié les dates, passerelles, coûts et prérequis.",
      "J'ai prévu au moins une action terrain avant de choisir.",
    ],
    cta: {
      href: '/que-faire-apres-le-bac',
      label: 'Lire le guide post-bac',
      text: "Si ton doute vient surtout de l'après-bac, reprends le parcours dans le bon ordre.",
    },
  },
  {
    slug: 'erreurs-reconversion-jeune',
    intro:
      "À 18–25 ans, changer de voie peut être une très bonne décision. Mais certaines erreurs reviennent souvent : choisir trop vite, suivre une mode, payer une formation sans tester, ou rester seul avec le doute.",
    sections: [
      {
        title: 'Erreur 1 : confondre envie de partir et projet clair',
        paragraphs: [
          "Vouloir quitter une formation ou un job ne suffit pas à définir une nouvelle voie. C'est un signal de départ, pas une destination.",
          "Commence par comprendre ce que tu veux éviter, puis ce que tu veux retrouver : rythme, environnement, type de missions, rapport aux autres.",
        ],
      },
      {
        title: 'Erreur 2 : choisir une formation avant le métier',
        paragraphs: [
          "Une formation rassure parce qu'elle donne un cadre. Mais si le métier visé ne te correspond pas, même la meilleure formation ne règle rien.",
          "L'ordre le plus solide : profil, métiers possibles, terrain, puis formation.",
        ],
      },
      {
        title: 'Erreur 3 : ne pas demander d’aide',
        paragraphs: [
          "Mission Locale, France Travail, écoles, anciens étudiants, professionnels : tu n'es pas censé tout comprendre seul.",
          "Un échange de 20 minutes avec quelqu'un du métier peut parfois t'éviter des mois d'hésitation.",
        ],
      },
    ],
    checklist: [
      "Je sais pourquoi ma voie actuelle ne me convient pas.",
      "J'ai comparé plusieurs métiers, pas seulement plusieurs formations.",
      "J'ai testé ou prévu de tester une piste concrète.",
      "Je sais expliquer mon changement de voie simplement.",
    ],
    cta: {
      href: '/reconversion',
      label: 'Revenir à la page pilier reconversion',
      text: 'Pour structurer toute ta démarche, utilise le guide principal Jobmi.',
    },
  },
  {
    slug: 'financer-reconversion-jeune',
    intro:
      "Financer une reconversion quand on est jeune demande surtout de choisir le bon format : alternance, CPF si tu as travaillé, aides locales, Mission Locale, France Travail ou formation courte.",
    sections: [
      {
        title: "L'alternance : souvent le meilleur levier jeune",
        paragraphs: [
          "Si tu as besoin d'apprendre un métier tout en étant rémunéré, l'alternance est souvent plus réaliste qu'une formation payante à plein temps.",
          "Elle demande un projet un minimum clair, car tu dois convaincre une entreprise.",
        ],
      },
      {
        title: 'CPF, aides régionales et France Travail',
        paragraphs: [
          "Le CPF peut aider si tu as déjà travaillé, mais il ne doit pas décider à ta place. Une formation finançable n'est pas forcément une bonne formation pour toi.",
          "Selon ta situation, France Travail, ta région ou une Mission Locale peuvent aussi t'aider à cadrer et financer une étape.",
        ],
      },
      {
        title: 'Commencer par un format peu risqué',
        paragraphs: [
          "Avant de payer cher, regarde les ateliers, cours d'essai, MOOC, PMSMP, stages d'observation ou immersions courtes.",
          "Le financement vient après la validation du projet, pas avant.",
        ],
      },
    ],
    cta: {
      href: '/blog/utiliser-cpf-compte-personnel-formation',
      label: 'Lire le guide CPF',
      text: 'Si tu veux utiliser ton CPF, commence par comprendre ses limites et ses bons usages.',
    },
  },
  {
    slug: 'comment-preparer-une-immersion-metier',
    intro:
      "Une immersion métier est utile seulement si tu sais ce que tu veux observer. Sans préparation, tu risques de passer une journée intéressante mais impossible à transformer en décision.",
    sections: [
      {
        title: 'Définir ton hypothèse',
        paragraphs: [
          "Avant l'immersion, écris une phrase simple : “Je veux vérifier si ce métier me convient parce que…”",
          "Cette hypothèse t'aide à observer les bons détails : rythme, tâches, relation aux autres, autonomie, pression, environnement.",
        ],
      },
      {
        title: 'Préparer 5 questions',
        paragraphs: [
          "Demande ce qui est difficile, ce qui surprend les débutants, quelles compétences comptent et quel parcours la personne referait aujourd'hui.",
          "Évite les questions trop générales comme “est-ce que c'est bien ?”. Cherche du concret.",
        ],
      },
      {
        title: "Faire un bilan juste après",
        paragraphs: [
          "Note ce qui t'a donné de l'énergie, ce qui t'a refroidi, et ce que tu dois encore vérifier.",
          "Une bonne immersion ne donne pas toujours un oui. Parfois, son meilleur résultat est un non clair.",
        ],
      },
    ],
    checklist: [
      "J'ai une hypothèse à vérifier.",
      "J'ai préparé mes questions.",
      "Je sais quels signaux observer.",
      "Je prévois un bilan dans les 24h.",
    ],
    cta: {
      href: '/tester-un-metier',
      label: 'Voir le hub immersion',
      text: 'Pour comparer PMSMP, stage, atelier et jobshadowing, pars du guide principal.',
    },
  },
  {
    slug: 'jobshadowing-decouvrir-metier',
    intro:
      "Le jobshadowing consiste à suivre un professionnel pendant quelques heures ou une journée pour comprendre son quotidien. C'est un format simple, très utile quand tu hésites encore.",
    sections: [
      {
        title: "À quoi sert le jobshadowing ?",
        paragraphs: [
          "Il sert à observer le réel : réunions, outils, interactions, contraintes, interruptions, tâches répétitives.",
          "Tu ne viens pas produire un travail, mais comprendre si l'environnement te parle.",
        ],
      },
      {
        title: 'Comment trouver une opportunité',
        paragraphs: [
          "Commence par ton réseau proche, LinkedIn, les anciens de ton école, les entreprises locales ou les structures accompagnantes.",
          "Ton message doit être court : qui tu es, le métier visé, la durée souhaitée et pourquoi cette observation t'aiderait.",
        ],
      },
      {
        title: 'Quand choisir plutôt une PMSMP',
        paragraphs: [
          "Si tu veux un cadre officiel, plus long ou lié à une reconversion suivie, la PMSMP est souvent plus adaptée.",
          "Le jobshadowing est plus léger, donc parfait pour une première exploration.",
        ],
      },
    ],
    cta: {
      href: '/blog/pmsmp-18-25-tester-metier-immersion',
      label: 'Comparer avec la PMSMP',
      text: 'Si tu veux un cadre plus officiel, lis le guide PMSMP 18–25 ans.',
    },
  },
  {
    slug: 'que-faire-apres-le-bac-sans-idee',
    intro:
      "Ne pas avoir d'idée après le bac est beaucoup plus courant qu'on ne le dit. Le problème n'est pas le flou en lui-même, mais le fait de choisir une voie par défaut sans exploration.",
    sections: [
      {
        title: 'Commencer par éliminer',
        paragraphs: [
          "Quand tu n'as aucune idée, chercher une passion peut bloquer. Commence plutôt par éliminer les environnements qui ne te conviennent pas.",
          "Bureau, terrain, relation humaine, autonomie, cadre scolaire, rythme intense : ces critères donnent déjà des indices.",
        ],
      },
      {
        title: 'Explorer par familles de métiers',
        paragraphs: [
          "Tu n'as pas besoin de trouver un métier précis tout de suite. Cherche d'abord des familles : soin, création, technique, commerce, analyse, accompagnement.",
          "Un test d'orientation peut aider à faire émerger ces familles sans te réduire à une réponse unique.",
        ],
      },
      {
        title: 'Choisir une prochaine étape, pas toute ta vie',
        paragraphs: [
          "Après le bac, l'objectif est de choisir une étape cohérente : formation, alternance, césure structurée, immersion ou réorientation.",
          "Tu pourras ajuster, mais tu avanceras mieux avec un plan court qu'avec une grande décision abstraite.",
        ],
      },
    ],
    cta: {
      href: '/que-faire-apres-le-bac',
      label: 'Lire le guide complet',
      text: 'Le hub post-bac détaille les options et le plan en 30 jours.',
    },
  },
  {
    slug: 'orientation-post-bac-sans-parcoursup',
    intro:
      "Parcoursup est important, mais ce n'est pas toute l'orientation. Si tu n'as pas eu ce que tu voulais, si tu es hors calendrier ou si tu veux changer de voie, il existe d'autres chemins.",
    sections: [
      {
        title: 'Regarder les rentrées décalées et passerelles',
        paragraphs: [
          "Certaines écoles, BTS, formations privées ou organismes proposent des rentrées décalées. À vérifier sérieusement : coût, reconnaissance, alternance, débouchés.",
          "Les passerelles universitaires existent aussi selon les filières et les établissements.",
        ],
      },
      {
        title: 'Explorer alternance, formations courtes et césure structurée',
        paragraphs: [
          "Hors Parcoursup, l'alternance, les titres professionnels, CAP, formations courtes ou projets encadrés peuvent être plus concrets.",
          "Le piège est de choisir vite par panique. Même hors calendrier, prends le temps de vérifier le métier visé.",
        ],
      },
      {
        title: 'Utiliser le terrain pour reprendre la main',
        paragraphs: [
          "JPO, stages, PMSMP, bénévolat, missions courtes : ces expériences donnent de la matière à ton prochain dossier ou entretien.",
          "Elles t'aident aussi à expliquer ton parcours sans le présenter comme un accident.",
        ],
      },
    ],
    cta: {
      href: '/evenements-orientation',
      label: "Voir l'agenda orientation",
      text: 'Les événements peuvent t’aider à trouver des options hors calendrier classique.',
    },
  },
  {
    slug: 'utiliser-profil-riasec-orientation',
    intro:
      "Un profil RIASEC n'est pas une étiquette. C'est une grille pour comprendre les environnements de travail qui risquent de te donner ou de te prendre de l'énergie.",
    sections: [
      {
        title: 'Lire ton profil comme une tendance',
        paragraphs: [
          "RIASEC distingue plusieurs intérêts professionnels : réaliste, investigateur, artistique, social, entreprenant et conventionnel.",
          "Ton résultat sert à ouvrir des pistes, pas à te dire que tu dois faire un métier unique.",
        ],
      },
      {
        title: 'Transformer le résultat en actions',
        paragraphs: [
          "Choisis 2 familles de métiers liées à ton profil, puis vérifie-les avec des contenus, échanges, événements ou immersions.",
          "Si ton profil est social et artistique, par exemple, compare plusieurs environnements au lieu de chercher un intitulé parfait.",
        ],
      },
      {
        title: 'Éviter le piège du test magique',
        paragraphs: [
          "Un test ne remplace pas le terrain. Il t'aide à choisir quoi explorer ensuite.",
          "La bonne séquence : résultat, hypothèses, exploration, immersion, décision.",
        ],
      },
    ],
    cta: {
      href: '/test-orientation',
      label: "Comprendre le test d'orientation",
      text: 'La page test explique comment Jobmi utilise RIASEC pour les 18–25 ans.',
    },
  },
  {
    slug: 'mission-locale-orientation-jeune',
    intro:
      "La Mission Locale accompagne les jeunes de 16 à 25 ans sur l'emploi, la formation, l'orientation, la mobilité et parfois les freins du quotidien. C'est souvent un très bon relais quand tu veux avancer concrètement.",
    sections: [
      {
        title: 'Ce que la Mission Locale peut t’apporter',
        paragraphs: [
          "Un conseiller peut t'aider à clarifier ton projet, trouver une immersion, comprendre les aides possibles ou reprendre confiance dans une période floue.",
          "Ce n'est pas réservé aux jeunes qui ont déjà un projet parfait. Justement, tu peux y aller avec des questions.",
        ],
      },
      {
        title: 'Préparer ton premier rendez-vous',
        paragraphs: [
          "Arrive avec ton parcours, tes contraintes, ce que tu ne veux plus et 2 ou 3 pistes même imparfaites.",
          "Plus tu es concret, plus l'accompagnement peut devenir utile rapidement.",
        ],
      },
      {
        title: 'Faire le lien avec Jobmi',
        paragraphs: [
          "Tu peux utiliser Jobmi avant ton rendez-vous pour clarifier ton profil, puis utiliser la Mission Locale pour trouver les dispositifs et contacts réels.",
          "Les deux approches se complètent : exploration en ligne, puis action accompagnée.",
        ],
      },
    ],
    cta: {
      href: '/stage-et-formation',
      label: 'Voir les stages et immersions',
      text: 'Pour préparer une demande concrète, regarde les formats possibles avant ton rendez-vous.',
    },
  },
];

export const getSupportArticleContent = (slug: string) =>
  supportArticleContent.find((article) => article.slug === slug);
