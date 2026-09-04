export type SupportArticleContent = {
  slug: string;
  intro: string;
  introNote?: string;
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
      "À 18–25 ans, changer de voie peut être une excellente décision : tu perds moins de temps qu'à 40 ans et tu as le droit de te tromper. Mais quelques erreurs reviennent presque à chaque fois et coûtent cher, en argent comme en motivation : choisir trop vite, suivre une mode, payer une formation sans avoir testé le métier, ou rester seul avec le doute pendant des mois. Cet article passe en revue les pièges les plus fréquents et, surtout, comment les éviter.",
    introNote:
      "Avant de te lancer, tu peux clarifier 2 ou 3 familles de métiers avec le [test d'orientation Jobmi](/test) : ça évite de choisir une reconversion \"contre\" ton parcours actuel plutôt que \"vers\" quelque chose de précis.",
    sections: [
      {
        title: 'Erreur 1 : confondre envie de partir et projet clair',
        paragraphs: [
          "Vouloir quitter une formation ou un job ne suffit pas à définir une nouvelle voie. C'est un signal de départ, pas une destination. Beaucoup de reconversions ratées commencent par un \"je ne supporte plus\" qui n'a jamais été transformé en \"je veux aller vers\".",
          "Commence par nommer précisément ce que tu veux éviter : le rythme, l'ambiance, l'absence de sens, le manque de contact humain, la pression, la répétition… Puis liste ce que tu veux retrouver dans la suite : type de missions, environnement, autonomie, utilité concrète.",
          "Tant que tu ne sais formuler que ce que tu fuis, tu risques de reproduire le même schéma ailleurs. Un projet clair se teste ; une simple envie de partir, non.",
        ],
      },
      {
        title: 'Erreur 2 : choisir une formation avant le métier',
        paragraphs: [
          "Une formation rassure parce qu'elle donne un cadre, un planning et une date de fin. Mais si le métier visé ne te correspond pas, même la meilleure formation ne règle rien : tu te retrouves diplômé d'un domaine qui ne t'attire pas.",
          "L'ordre le plus solide reste : profil, métiers possibles, terrain, puis formation. La formation est la dernière étape, pas la première.",
          "Avant de payer ou de t'inscrire, essaie d'échanger avec 2 personnes qui exercent déjà le métier, ou de faire une [immersion courte](/tester-un-metier). Une journée d'observation coûte moins cher qu'une année de formation dans la mauvaise direction.",
        ],
      },
      {
        title: 'Erreur 3 : suivre une mode ou un métier "à la hype"',
        paragraphs: [
          "Développeur, data analyst, UX designer, métiers de l'IA : ces intitulés reviennent partout et donnent l'impression d'être des choix évidents. Le problème n'est pas le métier, c'est de le choisir pour son image plutôt que pour son quotidien réel.",
          "Regarde ce que fait vraiment la personne au quotidien : les tâches répétitives, le niveau de solitude, la pression des délais, le rapport aux autres. Un métier \"cool\" vu de l'extérieur peut être pénible pour toi, et un métier discret peut te convenir parfaitement.",
        ],
      },
      {
        title: 'Erreur 4 : payer une formation sans rien avoir testé',
        paragraphs: [
          "Certaines écoles privées et organismes vendent surtout du rêve et de l'urgence (\"places limitées\", \"secteur qui recrute\"). Avant de signer, vérifie la reconnaissance du diplôme ou du titre (RNCP, visa, grade), le taux d'insertion réel, et parle à d'anciens élèves.",
          "Commence toujours par un format peu risqué : cours d'essai, MOOC gratuit, atelier, [PMSMP ou stage d'observation](/blog/pmsmp-18-25-tester-metier-immersion). Le financement et l'engagement viennent après la validation du projet, jamais avant.",
        ],
      },
      {
        title: "Erreur 5 : ne pas demander d'aide",
        paragraphs: [
          "Mission Locale, France Travail, conseillers d'orientation, anciens étudiants, professionnels en poste : tu n'es pas censé tout comprendre seul. Rester isolé avec le doute, c'est le meilleur moyen de tourner en rond pendant des mois.",
          "Un échange de 20 minutes avec quelqu'un qui exerce le métier peut t'éviter une erreur d'orientation entière. Si tu ne sais pas par où commencer, la [Mission Locale](/blog/mission-locale-orientation-jeune) est un bon premier relais.",
        ],
      },
      {
        title: "Erreur 6 : vouloir tout changer d'un coup",
        paragraphs: [
          "Changer de métier, de ville, de statut et de rythme en même temps, c'est multiplier les risques. Une reconversion tient mieux si tu gardes un point d'appui : un job alimentaire le temps de te former, une formation en alternance, ou une transition progressive.",
          "Découpe ton projet en étapes de 30 jours : clarifier, tester, choisir un format, financer, démarrer. Tu ajusteras en cours de route.",
        ],
      },
    ],
    checklist: [
      "Je sais dire vers quoi je vais, pas seulement ce que je fuis.",
      "J'ai comparé plusieurs métiers, pas seulement plusieurs formations.",
      "J'ai testé ou prévu de tester une piste concrète (immersion, échange, atelier).",
      "J'ai vérifié la reconnaissance et l'insertion de la formation visée.",
      "J'ai parlé à au moins une personne qui exerce le métier.",
      "Je sais expliquer mon changement de voie en 3 phrases simples.",
    ],
    cta: {
      href: '/reconversion',
      label: 'Revenir à la page pilier reconversion',
      text: 'Pour structurer toute ta démarche étape par étape, utilise le guide principal Jobmi.',
    },
  },
  {
    slug: 'financer-reconversion-jeune',
    intro:
      "Financer une reconversion quand on est jeune fait peur, mais c'est rarement le vrai blocage. Le plus souvent, le problème n'est pas l'argent : c'est de vouloir financer une formation avant d'avoir validé le projet. Une fois que tu sais quel métier tu vises, il existe plusieurs leviers selon ta situation : alternance, CPF si tu as déjà travaillé, aides régionales, Mission Locale, France Travail, ou formations courtes peu coûteuses.",
    introNote:
      "Avant de chercher un financement, assure-toi de viser le bon métier : le [test d'orientation Jobmi](/test) t'aide à faire ressortir 2 ou 3 familles de métiers à explorer sur le terrain.",
    sections: [
      {
        title: "L'alternance : souvent le meilleur levier quand on est jeune",
        paragraphs: [
          "Si tu as besoin d'apprendre un métier tout en étant payé, l'alternance (apprentissage ou contrat de professionnalisation) est souvent plus réaliste qu'une formation payante à plein temps. Les frais de scolarité sont pris en charge dans le cadre du contrat, et tu touches un salaire.",
          "En échange, il faut un projet un minimum clair, car tu dois convaincre une entreprise de te recruter. Prépare un discours simple : d'où tu viens, pourquoi ce métier, ce que tu peux apporter tout de suite. Pour comparer ce format avec la formation continue classique, garde sous la main le guide [alternance ou formation continue](/blog/alternance-ou-formation-continue-que-choisir).",
        ],
      },
      {
        title: 'Le CPF : utile, mais il ne doit pas décider à ta place',
        paragraphs: [
          "Le compte personnel de formation (CPF) se remplit dès que tu as travaillé, même en job étudiant ou en CDD. Il peut financer tout ou partie d'une formation certifiante.",
          "Attention au piège : une formation \"finançable avec le CPF\" n'est pas forcément une bonne formation pour toi. Beaucoup d'organismes conçoivent leur catalogue autour du CPF, pas autour de ton projet. Vérifie d'abord la reconnaissance et l'insertion, puis regarde le financement. Le détail est dans le guide [utiliser son CPF](/blog/utiliser-cpf-compte-personnel-formation).",
        ],
      },
      {
        title: 'France Travail, région et Mission Locale',
        paragraphs: [
          "Si tu es inscrit à France Travail, tu peux avoir accès à des aides individuelles à la formation, à des formations conventionnées (déjà financées) et à un accompagnement pour cadrer ton projet.",
          "Les conseils régionaux financent de nombreuses formations vers des métiers qui recrutent localement, parfois avec une rémunération pendant la formation. La [Mission Locale](/blog/mission-locale-orientation-jeune), elle, s'adresse aux 16–25 ans et peut mobiliser des aides à la mobilité, à l'hébergement ou au quotidien en plus de l'orientation.",
        ],
      },
      {
        title: 'Commencer par un format peu risqué et peu cher',
        paragraphs: [
          "Avant de payer quoi que ce soit, il existe une couche gratuite ou quasi gratuite : MOOC, cours d'essai, ateliers découverte, [PMSMP et stages d'observation](/blog/pmsmp-18-25-tester-metier-immersion), [jobshadowing](/blog/jobshadowing-decouvrir-metier), bénévolat ciblé.",
          "Ces formats servent à valider (ou invalider) le métier pour un coût proche de zéro. Le financement d'une vraie formation vient après cette étape de validation, pas avant.",
        ],
      },
      {
        title: 'Un ordre de priorité simple',
        paragraphs: [
          "1. Teste le métier gratuitement (immersion, échanges). 2. Si le projet tient, cherche d'abord l'alternance. 3. Sinon, regarde les formations déjà financées (France Travail, région). 4. En dernier, mobilise ton CPF ou un financement personnel, pour une formation dont tu as vérifié l'insertion.",
          "Cet ordre évite l'erreur la plus courante : s'endetter pour une formation choisie dans l'urgence.",
        ],
      },
      {
        title: 'Questions fréquentes',
        paragraphs: [
          "Je n'ai jamais travaillé, est-ce que j'ai un CPF ? Très peu ou pas. Dans ce cas, oriente-toi vers l'alternance ou les formations conventionnées France Travail / région, qui ne dépendent pas du CPF.",
          "Peut-on se former sans rien payer ? Oui, c'est fréquent quand on passe par l'alternance ou par une formation conventionnée. Le \"reste à charge\" zéro existe, mais il demande souvent de viser un métier qui recrute.",
          "Faut-il un projet parfait pour être financé ? Non, mais il faut un projet crédible : un métier visé, une raison, et idéalement une première expérience terrain à raconter.",
        ],
      },
    ],
    checklist: [
      "J'ai validé le métier visé avec au moins une expérience terrain.",
      "J'ai regardé si l'alternance est possible pour ce métier.",
      "J'ai vérifié les formations déjà financées par France Travail ou ma région.",
      "Je connais le montant réel de mon CPF (et je ne compte pas dessus aveuglément).",
      "Je connais le reste à charge total avant de m'engager.",
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
      "Une immersion métier (PMSMP, stage d'observation, jobshadowing, journée découverte) n'est utile que si tu sais ce que tu veux observer. Sans préparation, tu passes une journée intéressante mais impossible à transformer en décision : tu ressors avec \"c'était sympa\" et rien de plus. Avec 30 minutes de préparation, la même journée peut confirmer ou éliminer une piste d'orientation.",
    introNote:
      "Tu ne sais pas encore quel métier observer ? Commence par le [test d'orientation](/test) pour dégager 2 ou 3 familles de métiers, puis choisis une immersion dans l'une d'elles.",
    sections: [
      {
        title: 'Étape 1 : écrire ton hypothèse',
        paragraphs: [
          "Avant l'immersion, écris une phrase simple : \"Je veux vérifier si ce métier me convient parce que…\". Par exemple : \"parce que j'aime aider les gens mais je ne sais pas si je supporterais le rythme de l'hôpital\".",
          "Cette hypothèse dirige ton attention pendant la journée. Sans elle, tu regardes tout et tu ne retiens rien. Avec elle, tu sais quoi observer en priorité : le rythme, les tâches concrètes, la relation aux autres, le niveau d'autonomie, la pression, l'environnement physique.",
        ],
      },
      {
        title: 'Étape 2 : préparer 5 questions concrètes',
        paragraphs: [
          "Évite les questions trop générales comme \"est-ce que c'est bien ?\" ou \"est-ce que ça recrute ?\". Cherche du vécu : qu'est-ce qui est difficile dans ce métier ? Qu'est-ce qui surprend les débutants ? Quelles compétences comptent vraiment, au-delà du diplôme ? Qu'est-ce que la personne referait différemment aujourd'hui ? À quoi ressemble une mauvaise journée ?",
          "Note tes questions sur ton téléphone. Le jour J, tu seras concentré sur l'observation et tu risques de les oublier.",
        ],
      },
      {
        title: 'Étape 3 : savoir quoi observer',
        paragraphs: [
          "Pendant l'immersion, observe surtout ce qui ne se voit pas dans une fiche métier : le nombre d'interruptions, le temps passé seul vs. en équipe, la part de tâches administratives, le niveau de bruit et de fatigue en fin de journée, la façon dont les gens se parlent.",
          "Repère aussi tes propres réactions : à quel moment tu t'ennuies, à quel moment tu es absorbé, ce qui te met mal à l'aise. Ces signaux internes valent autant que les infos objectives.",
        ],
      },
      {
        title: 'Étape 4 : faire un bilan dans les 24 heures',
        paragraphs: [
          "Le soir même ou le lendemain, écris 3 listes : ce qui t'a donné de l'énergie, ce qui t'a refroidi, ce que tu dois encore vérifier (dans une autre immersion, un autre lieu, un autre échange).",
          "Une bonne immersion ne donne pas toujours un \"oui\". Parfois son meilleur résultat est un \"non\" clair, qui t'évite une formation entière dans la mauvaise direction. Un \"peut-être\" signifie souvent qu'il faut tester un deuxième contexte.",
        ],
      },
      {
        title: 'Les points pratiques à ne pas oublier',
        paragraphs: [
          "Côté logistique : confirme l'horaire et le lieu la veille, prévois une tenue adaptée, arrive 10 minutes en avance, et remercie par message après coup (utile si tu veux y retourner ou demander un contact).",
          "Côté cadre : si l'immersion passe par une [PMSMP](/blog/pmsmp-18-25-tester-metier-immersion), une convention est signée entre toi, la structure d'accueil et l'organisme qui t'accompagne (Mission Locale, France Travail…). Pour un [jobshadowing](/blog/jobshadowing-decouvrir-metier), c'est plus informel : un simple accord avec la personne suffit souvent.",
        ],
      },
      {
        title: 'Comment enchaîner après une immersion',
        paragraphs: [
          "Si le métier te convainc, passe à l'étape suivante : identifier la formation ou l'alternance qui y mène, et regarder les [stages et formations](/stage-et-formation) possibles. Si le doute persiste, planifie une deuxième immersion dans un contexte différent (autre taille de structure, autre ville).",
          "L'objectif n'est pas de multiplier les immersions à l'infini, mais d'en faire assez pour décider sereinement : en général 1 à 3 suffisent par piste sérieuse.",
        ],
      },
    ],
    checklist: [
      "J'ai écrit une hypothèse claire à vérifier.",
      "J'ai préparé 5 questions concrètes.",
      "Je sais quels signaux observer (rythme, tâches, relations, mes réactions).",
      "J'ai réglé la logistique (horaire, lieu, tenue) la veille.",
      "Je prévois un bilan écrit dans les 24h.",
      "Je sais quelle est la prochaine étape selon le résultat.",
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
      "Le jobshadowing consiste à suivre un professionnel pendant quelques heures ou une journée pour observer son quotidien réel, sans rien produire toi-même. C'est le format le plus léger pour tester un métier : pas de convention lourde, pas d'engagement, juste une observation. Idéal quand tu hésites encore entre plusieurs pistes.",
    introNote:
      "Pour choisir quel métier observer en premier, le [test d'orientation Jobmi](/test) t'aide à dégager 2 ou 3 familles de métiers cohérentes avec ton profil.",
    sections: [
      {
        title: 'À quoi sert vraiment le jobshadowing',
        paragraphs: [
          "Il sert à voir le réel derrière l'intitulé : les réunions, les outils, les interruptions, les tâches répétitives, les temps morts, la façon dont l'équipe communique. Autant de choses qu'aucune fiche métier ne raconte.",
          "Tu ne viens pas travailler ni faire tes preuves : tu viens comprendre si l'environnement te parle. C'est aussi l'occasion de te projeter : est-ce que je me vois là dans 2 ans ?",
        ],
      },
      {
        title: 'Comment trouver une opportunité',
        paragraphs: [
          "Commence par ton réseau proche : famille, amis, parents d'amis, anciens profs. Puis élargis : anciens élèves de ton école sur LinkedIn, entreprises locales, associations professionnelles, structures d'accompagnement.",
          "Ton message doit être court et clair : qui tu es, le métier qui t'intéresse, la durée souhaitée (une demi-journée ou une journée), et pourquoi cette observation t'aiderait à décider. Précise que tu ne demandes ni stage ni rémunération, juste d'observer.",
        ],
      },
      {
        title: 'Un exemple de message',
        paragraphs: [
          "\"Bonjour, je m'appelle [prénom], j'ai 19 ans et je réfléchis à m'orienter vers [métier]. Avant de choisir une formation, j'aimerais observer ce métier une journée pour mieux comprendre le quotidien. Seriez-vous d'accord pour que je vous accompagne une demi-journée, sans que ça vous demande de préparation particulière ? Merci beaucoup.\"",
          "Ce type de demande aboutit plus souvent qu'on ne le pense : beaucoup de professionnels acceptent volontiers, surtout si la demande est simple et cadrée dans le temps.",
        ],
      },
      {
        title: 'Bien utiliser la journée',
        paragraphs: [
          "Prépare 4 ou 5 questions concrètes, observe tes propres réactions (ennui, curiosité, malaise), et prends quelques notes discrètes. Le soir, écris ce qui t'a donné de l'énergie et ce qui t'a refroidi. La méthode complète est dans le guide [préparer une immersion métier](/blog/comment-preparer-une-immersion-metier).",
          "Reste discret et respectueux : tu es invité. Coupe ton téléphone, demande avant de poser une question si le moment est ok, et remercie par message le lendemain.",
        ],
      },
      {
        title: 'Jobshadowing ou PMSMP : lequel choisir',
        paragraphs: [
          "Le jobshadowing est idéal pour une première exploration rapide, quand tu veux juste \"voir\". Si tu as besoin d'un cadre officiel, d'une durée plus longue ou d'un dispositif lié à un accompagnement (Mission Locale, France Travail), la [PMSMP](/blog/pmsmp-18-25-tester-metier-immersion) est plus adaptée.",
          "Beaucoup de personnes commencent par un ou deux jobshadowings pour trier leurs pistes, puis passent à une PMSMP sur la piste la plus sérieuse.",
        ],
      },
      {
        title: 'Après le jobshadowing',
        paragraphs: [
          "Si le métier te confirme, regarde les formations et l'alternance qui y mènent, ainsi que la page [stages et formations](/stage-et-formation). Si tu hésites encore, tente un second jobshadowing dans un contexte différent, ou un échange avec une personne au parcours proche du tien.",
          "Garde une trace écrite de chaque observation : dans un futur dossier ou entretien, pouvoir dire \"j'ai observé ce métier sur le terrain avant de choisir\" est un vrai point fort.",
        ],
      },
    ],
    checklist: [
      "J'ai identifié 3 personnes ou structures à contacter.",
      "J'ai écrit un message court et clair.",
      "J'ai préparé 4 ou 5 questions concrètes.",
      "Je sais quoi observer et je prévois un bilan le soir.",
      "Je sais si j'enchaîne sur une PMSMP ou une formation.",
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
      "Ne pas avoir d'idée après le bac est beaucoup plus courant qu'on ne le dit : une grande partie des lycéens choisissent leurs vœux sans réelle certitude. Le problème n'est pas le flou en lui-même, c'est de choisir une voie par défaut, sans exploration, juste pour \"faire comme les autres\" ou parce qu'il reste de la place. Voici une méthode pour avancer même sans projet clair.",
    introNote:
      "Un [test d'orientation](/test) ne va pas te donner \"le\" métier, mais il fait ressortir 2 ou 3 familles de métiers à explorer en priorité, ce qui suffit pour démarrer.",
    sections: [
      {
        title: 'Étape 1 : commencer par éliminer',
        paragraphs: [
          "Quand tu n'as aucune idée, chercher \"ta passion\" peut te bloquer complètement. Commence à l'envers : élimine les environnements qui ne te conviennent clairement pas.",
          "Passe en revue quelques critères simples : plutôt bureau ou plutôt terrain ? Beaucoup de contact humain ou plutôt seul ? Besoin d'un cadre scolaire ou envie de concret rapidement ? Rythme intense ou régulier ? Ces réponses réduisent déjà le champ de moitié.",
          "Note aussi ce que tu as détesté au lycée (une matière, un format, une ambiance) : c'est une info utile pour éviter de reproduire la même chose.",
        ],
      },
      {
        title: 'Étape 2 : explorer par familles de métiers',
        paragraphs: [
          "Tu n'as pas besoin de trouver un métier précis tout de suite. Cherche d'abord des familles : le soin et l'accompagnement, la création et le design, la technique et l'artisanat, le commerce et la relation client, l'analyse et les chiffres, l'organisation et la logistique.",
          "Pour chaque famille qui t'attire un peu, note 2 ou 3 métiers réels et regarde des vidéos de terrain, des témoignages, ou mieux : parle à quelqu'un qui l'exerce. Le [profil RIASEC](/blog/utiliser-profil-riasec-orientation) peut aider à faire émerger ces familles sans te réduire à une seule réponse.",
        ],
      },
      {
        title: "Étape 3 : tester avant de t'engager",
        paragraphs: [
          "Une famille de métiers qui te parle sur le papier ne te conviendra pas forcément dans le quotidien. Avant de choisir une formation, essaie une [immersion courte](/tester-un-metier), un [jobshadowing](/blog/jobshadowing-decouvrir-metier) ou une [PMSMP](/blog/pmsmp-18-25-tester-metier-immersion).",
          "Tu peux aussi utiliser les [événements d'orientation](/evenements-orientation) (salons, journées portes ouvertes, forums, ateliers) pour découvrir des pistes et poser des questions à des gens du métier.",
        ],
      },
      {
        title: 'Étape 4 : choisir une prochaine étape, pas toute ta vie',
        paragraphs: [
          "L'objectif après le bac n'est pas de décider de ta carrière, mais de choisir une étape cohérente : une formation, une alternance, une césure structurée, une immersion longue ou une première année quitte à te réorienter ensuite.",
          "Beaucoup d'étudiants se réorientent après une première année et ça ne pénalise pas leur parcours, à condition d'en tirer quelque chose. Tu avanceras mieux avec un plan court et révisable qu'avec une grande décision abstraite.",
        ],
      },
      {
        title: "Et si tu n'as vraiment rien trouvé avant la rentrée ?",
        paragraphs: [
          "Plusieurs options existent hors du calendrier classique : rentrées décalées en janvier/février, formations hors Parcoursup, alternance qui recrute toute l'année, ou année terrain structurée (PMSMP, service civique, jobs, bénévolat ciblé). Le guide [orientation post-bac sans Parcoursup](/blog/orientation-post-bac-sans-parcoursup) détaille ces chemins.",
          "L'important est de ne pas rester immobile : même une année \"sans formation\" peut être utile si elle est remplie d'expériences qui t'aident à choisir.",
        ],
      },
      {
        title: 'Questions fréquentes',
        paragraphs: [
          "Est-ce grave de ne pas savoir quoi faire après le bac ? Non, c'est la situation de beaucoup de bacheliers. Ce qui compte, c'est d'explorer plutôt que de subir un choix par défaut.",
          "Faut-il absolument s'inscrire quelque part en septembre ? Non. Une rentrée décalée, une alternance ou une année terrain structurée sont des options valables si elles sont préparées.",
          "Un test d'orientation suffit-il à décider ? Non. Il sert à ouvrir des pistes ; c'est le terrain (immersions, échanges) qui permet de trancher.",
        ],
      },
    ],
    checklist: [
      "J'ai éliminé les environnements qui ne me conviennent pas.",
      "J'ai identifié 2 ou 3 familles de métiers à explorer.",
      "J'ai prévu au moins une action terrain (immersion, échange, événement).",
      "J'ai choisi une prochaine étape réaliste, pas une décision définitive.",
      "Je connais les options hors calendrier si besoin (rentrée décalée, alternance, année terrain).",
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
      "Parcoursup est important, mais ce n'est pas toute l'orientation. Si tu n'as pas eu ce que tu voulais, si tu es hors calendrier ou si tu veux changer de voie, tu n'es pas coincé. Il existe d'autres chemins : écoles hors Parcoursup, rentrées décalées, alternance, formations courtes, année terrain bien utilisée… L'objectif de cet article : te donner une vue claire de ce qui existe vraiment hors Parcoursup, avec des exemples concrets et une méthode pour choisir sans paniquer. Si tu veux reprendre le sujet depuis le début, commence aussi par le guide [que faire après le bac](/que-faire-apres-le-bac).",
    introNote:
      "Avant de comparer les écoles, les rentrées décalées ou l'alternance, commence par clarifier le domaine qui te correspond le mieux. Le [test d'orientation Jobmi](/test) peut t'aider à faire ressortir 2 ou 3 familles de métiers à explorer, pour éviter de choisir une formation uniquement parce qu'il reste de la place.",
    sections: [
      {
        title: 'Ce que Parcoursup ne couvre pas (et ce que ça change pour toi)',
        paragraphs: [
          "Parcoursup regroupe une grande partie des formations publiques et reconnues après le bac : licences à l'université, BUT, BTS en lycée, classes prépa, certaines écoles d'ingénieurs, etc. Mais beaucoup d'autres formations ne passent pas par Parcoursup : écoles privées, bachelors, BTS en école, titres professionnels, écoles spécialisées…",
          "Concrètement, ça veut dire que tu peux faire des études supérieures sans jamais avoir un vœu Parcoursup accepté, que tu peux candidater en dehors du calendrier Parcoursup (jusqu'en été, voire à la rentrée), et que tu peux te réorienter après un 1er semestre raté en profitant de rentrées décalées ou de passerelles. Par contre, hors Parcoursup, il faut être plus vigilant : vérifier la reconnaissance de la formation, le sérieux de l'école, le coût, les débouchés, etc. Si ton doute vient d'une première année déjà mal engagée, lis aussi le guide [reconversion après une L1](/blog/reconversion-apres-une-l1).",
        ],
      },
      {
        title: 'Option 1 – Les formations hors Parcoursup (écoles, bachelors, BTS privés, titres RNCP)',
        paragraphs: [
          "Beaucoup de formations recrutent directement, via leur propre procédure d'admission (dossier, concours, entretien) : écoles privées spécialisées en commerce, marketing, digital, communication, audiovisuel, web, jeux vidéo, tourisme ou luxe ; bachelors hors Parcoursup Bac+3 en management, marketing, RH, informatique ou design proposés par des écoles de commerce ou du digital ; BTS en école avec admission sur dossier et entretien, sans passer par Parcoursup ; titres RNCP (certifications reconnues par l'État) très présents dans les écoles de digital, de management, de RH et de vente.",
          "Avant d'accepter une formation hors Parcoursup, prends le temps de vérifier la reconnaissance officielle du diplôme ou titre (RNCP, visé ou gradé par l'État), le coût réel incluant frais de scolarité annuels, frais d'inscription et matériel (y a-t-il des bourses, de l'alternance ou des facilités de paiement ?), les débouchés réels (taux d'insertion, types de postes, exemples de parcours d'anciens élèves) et les possibilités de poursuite d'études en Bac+4 ou Bac+5.",
        ],
      },
      {
        title: 'Option 2 – Les rentrées décalées et les passerelles',
        paragraphs: [
          "Si tu as commencé un cursus qui ne te convient pas ou si tu as raté le train en septembre, tu n'es pas obligé d'attendre 1 an. Beaucoup d'écoles (commerce, digital, management, informatique…), de bachelors et parfois de BTS proposent des rentrées décalées en janvier, février ou mars. Le principe : tu rejoins la promotion plus tard, avec parfois un semestre intensif pour rattraper ce qui a été fait au premier semestre.",
          "En parallèle, il existe des passerelles entre certaines licences et écoles, entre un BUT ou BTS et une école, et entre deux filières proches. Ces passerelles permettent de ne pas repartir de zéro si tu as déjà validé des ECTS ou acquis des compétences. Concrètement : repère les écoles qui parlent de réorientation en cours d'année ou d'intégration en février, puis contacte-les directement avec un message simple expliquant ton parcours, pourquoi tu veux changer et ce que tu vises.",
        ],
      },
      {
        title: "Option 3 – L'alternance hors Parcoursup",
        paragraphs: [
          "On imagine souvent l'alternance uniquement via Parcoursup, mais beaucoup de formations en alternance (du CAP au Bac+5) recrutent en direct, via des CFA (centres de formation d'apprentis), des écoles spécialisées ou des écoles de commerce et du digital qui ont leur propre plateforme. L'alternance hors Parcoursup peut couvrir un BTS en école, un titre professionnel (commerce, RH, vente, support informatique…) ou un bachelor en management, marketing ou tech.",
          "Les avantages sont concrets : tu es rémunéré pendant ta formation, les frais de scolarité sont souvent pris en charge dans le cadre du contrat, et tu accumules de l'expérience professionnelle dès 18 ou 20 ans. Pour trouver : cherche les mentions alternance hors Parcoursup sur les sites de CFA et d'écoles, ou regarde les offres d'alternance sur les jobboards puis remonte à l'école ou au CFA partenaire. Pour comparer ce format avec d'autres options, garde sous la main le guide [alternance ou formation continue](/blog/alternance-ou-formation-continue-que-choisir).",
        ],
      },
      {
        title: "Option 4 – Formations courtes, CAP, titres pro pour aller vers l'emploi",
        paragraphs: [
          "Si tu as envie de concret et de terrain, sans forcément partir sur 5 ans d'études, tu peux viser des CAP (cuisine, boulangerie, mécanique, coiffure, esthétique, bâtiment…), des titres professionnels (vendeur·se, assistant·e de vie, technicien·ne…) ou des formations courtes comme les remises à niveau, prépas apprentissage ou bootcamps digital. Ces formations sont proposées par des CFA, des organismes de formation pro, des écoles spécialisées ou des réseaux associatifs.",
          "L'intérêt principal : obtenir une première qualification en 6 à 24 mois, commencer à travailler rapidement et éventuellement revenir vers un autre niveau d'études après 2 à 3 ans d'expérience professionnelle. Pour poser les options côté terrain, tu peux aussi regarder la page [stages et formations](/stage-et-formation).",
        ],
      },
      {
        title: 'Option 5 – Une année terrain structurée pour reprendre la main',
        paragraphs: [
          "Si tu ne sais plus du tout où tu en es, ce n'est pas forcément une bonne idée de te jeter dans la première formation qui reste. Une alternative : une année structurée autour du terrain, par exemple avec des PMSMP (périodes d'immersion en milieu professionnel) pour tester des métiers, des stages courts dans différents domaines, du bénévolat dans une association (social, sport, culture…), un service civique, ou des petits jobs étudiants et missions courtes. Le hub [tester un métier](/tester-un-metier) peut t'aider à comparer ces formats.",
          "Ces expériences te donnent des exemples concrets à mentionner dans ton prochain dossier ou entretien, t'aident à voir ce que tu aimes vraiment (ambiance, rythme, type de tâches) et montrent que tu n'as pas rien fait mais que tu as utilisé le temps pour te construire. Tu peux aussi t'appuyer sur des [événements d'orientation](/evenements-orientation) (salons, JPO, forums, ateliers) pour découvrir des pistes hors calendrier Parcoursup.",
        ],
      },
      {
        title: 'Comment choisir sans paniquer : une mini méthode',
        paragraphs: [
          "Quand tu es sous pression (parents, lycée, calendrier), tu peux avoir envie de remplir le trou avec n'importe quelle formation. Ce n'est pas l'objectif. Pose-toi d'abord trois questions simples. Première question : qu'est-ce que tu veux éviter absolument ? Une fac très théorique ? Une école trop chère ? Un métier où tu ne te vois pas du tout ? Deuxième question : qu'est-ce que tu as envie de tester en priorité ? Plutôt du terrain (manuel, soin, social, logistique) ? Plutôt du digital (web, data, communication) ? Plutôt de la relation client ? Troisième question : combien de temps tu es prêt·e à investir maintenant ? 1 an ? 2 ans ? Tu te sens prêt·e pour une alternance ou plutôt pour une formation coussin avant ?",
          "Ensuite, tu peux utiliser un [test d'orientation](/test) pour faire ressortir 2 à 3 familles de métiers, regarder les formations hors Parcoursup qui mènent vers ces familles, et combiner une expérience terrain (immersion, bénévolat) avec une candidature formation.",
        ],
      },
      {
        title: "Questions fréquentes sur l'orientation sans Parcoursup",
        paragraphs: [
          "Est-ce qu'on peut vraiment faire des études supérieures sans Parcoursup ? Oui. De nombreuses écoles, bachelors, BTS en école et titres professionnels recrutent hors Parcoursup, avec leur propre procédure d'admission.",
          "Les formations hors Parcoursup sont-elles moins reconnues ? Pas automatiquement. Certaines sont très reconnues (visa, grade, titres RNCP), d'autres beaucoup moins. C'est à toi de vérifier : reconnaissance officielle, débouchés, sérieux de l'école.",
          "Je n'ai rien eu sur Parcoursup, est-ce que j'ai raté ma vie ? Non. Ça veut dire que tu vas devoir passer par des chemins alternatifs. Beaucoup d'étudiants se réorientent après une première année, et les recruteurs regardent surtout la cohérence de ton parcours, pas le fait que tu aies eu ton vœu du premier coup.",
          "Comment éviter de me faire arnaquer par une école hors Parcoursup ? Vérifie la reconnaissance officielle du diplôme (RNCP, visa, grade), regarde les avis d'anciens élèves et les chiffres d'insertion, et compare plusieurs écoles sur le même secteur, pas seulement la première que tu trouves.",
          "Comment expliquer une année hors système dans un futur dossier ? Si tu utilises cette année pour tester des domaines (stages, PMSMP, jobs) ou clarifier ton orientation, tu pourras raconter une histoire cohérente : je n'ai pas eu ce que je voulais sur Parcoursup, j'ai pris une année pour tester, et voilà ce que j'en ai tiré. C'est beaucoup plus crédible qu'un trou non expliqué.",
        ],
      },
    ],
    checklist: [
      "J'ai vérifié que la formation visée est reconnue par l'État (RNCP, visée ou gradée).",
      "J'ai comparé le coût réel (frais de scolarité + inscription + matériel) avec les aides disponibles.",
      "J'ai regardé les débouchés réels et des témoignages d'anciens élèves.",
      "J'ai vérifié si des rentrées décalées ou des passerelles existent pour ma situation.",
      "J'ai listé au moins une expérience terrain à faire avant de m'engager.",
    ],
    cta: {
      href: '/test',
      label: "Faire le test d'orientation",
      text: "Avant de choisir une formation hors Parcoursup, clarifie d'abord 2 à 3 familles de métiers qui correspondent à ton profil.",
    },
  },
  {
    slug: 'utiliser-profil-riasec-orientation',
    intro:
      "Un profil RIASEC n'est pas une étiquette qui décide de ton métier. C'est une grille de lecture : elle t'aide à repérer les types d'environnements de travail qui risquent de te donner de l'énergie, et ceux qui risquent de te la prendre. Bien utilisé, c'est un point de départ ; mal utilisé, ça devient une case dans laquelle on s'enferme.",
    introNote:
      "Tu n'as pas encore ton profil ? Tu peux passer le [test d'orientation Jobmi](/test), basé sur la logique RIASEC, en quelques minutes et sans inscription.",
    sections: [
      {
        title: 'Ce que veulent dire les 6 lettres',
        paragraphs: [
          "RIASEC distingue six grands types d'intérêts professionnels : Réaliste (concret, manuel, technique, extérieur), Investigateur (analyse, recherche, résolution de problèmes), Artistique (création, expression, originalité), Social (aide, transmission, contact humain), Entreprenant (persuasion, direction, initiative, vente) et Conventionnel (organisation, rigueur, données, procédures).",
          "Personne n'est \"une seule lettre\". Ton résultat est un dosage : le plus souvent, 2 ou 3 dimensions ressortent plus fort. C'est la combinaison qui est parlante, pas la lettre dominante seule.",
        ],
      },
      {
        title: 'Lire ton profil comme une tendance, pas un verdict',
        paragraphs: [
          "Ton résultat sert à ouvrir des pistes, pas à te dire \"tu dois faire ce métier\". Deux personnes avec le même profil peuvent s'épanouir dans des métiers très différents.",
          "Regarde surtout les écarts : une dimension très basse t'indique un type d'environnement à éviter (par exemple un score Conventionnel très bas = tu supporteras mal un poste très procédurier). C'est souvent l'info la plus utile.",
        ],
      },
      {
        title: 'Transformer le résultat en actions',
        paragraphs: [
          "Choisis 2 familles de métiers liées à ton profil. Pour chacune, note 2 ou 3 métiers réels, puis vérifie-les avec des contenus de terrain, des échanges avec des professionnels, des [événements d'orientation](/evenements-orientation) ou une [immersion courte](/tester-un-metier).",
          "Exemple : un profil Social + Artistique peut mener vers l'animation, l'enseignement, l'ergothérapie, le design d'expérience, la médiation culturelle… Compare les environnements concrets plutôt que de chercher l'intitulé parfait.",
        ],
      },
      {
        title: 'Croiser RIASEC avec tes contraintes réelles',
        paragraphs: [
          "Un profil d'intérêts ne dit rien de ton niveau d'études, de ton budget, de ta mobilité ou du temps que tu peux investir. Une fois tes 2-3 familles identifiées, filtre avec ces contraintes : durée de formation acceptable, alternance possible ou non, secteur qui recrute près de chez toi.",
          "C'est le croisement \"ce qui m'intéresse\" × \"ce qui est réaliste pour moi maintenant\" qui donne un plan actionnable.",
        ],
      },
      {
        title: 'Éviter le piège du test magique',
        paragraphs: [
          "Un test ne remplace pas le terrain. Il te dit quoi explorer en priorité, pas quoi choisir. La bonne séquence : résultat → hypothèses (2-3 familles) → exploration (contenus, échanges) → immersion → décision.",
          "Si tu refais le test à quelques mois d'intervalle et que le résultat bouge un peu, c'est normal : tes intérêts évoluent avec tes expériences. Ce qui compte, c'est la tendance générale.",
        ],
      },
      {
        title: 'Questions fréquentes',
        paragraphs: [
          "Mon profil peut-il changer ? Oui, légèrement, au fil de tes expériences. Les grandes tendances restent en général stables.",
          "Que faire si toutes mes dimensions sont proches ? Ça arrive. Dans ce cas, appuie-toi davantage sur le terrain : teste plusieurs environnements pour voir lequel te parle vraiment.",
          "Le RIASEC donne-t-il une liste de métiers fiable ? Il donne des familles cohérentes, pas une liste fermée. Sers-t'en pour explorer, pas pour te limiter.",
        ],
      },
    ],
    checklist: [
      "J'ai repéré mes 2 ou 3 dimensions dominantes et mes dimensions basses.",
      "J'ai choisi 2 familles de métiers à explorer.",
      "J'ai listé 2-3 métiers réels par famille.",
      "J'ai filtré avec mes contraintes (durée, budget, mobilité).",
      "J'ai prévu une action terrain avant de décider.",
    ],
    cta: {
      href: '/test',
      label: "Comprendre le test d'orientation",
      text: 'La page test explique comment Jobmi utilise la logique RIASEC pour les 18–25 ans.',
    },
  },
  {
    slug: 'mission-locale-orientation-jeune',
    intro:
      "La Mission Locale accompagne gratuitement les jeunes de 16 à 25 ans sortis du système scolaire, sur l'emploi, la formation, l'orientation, la mobilité, le logement et parfois les difficultés du quotidien. C'est souvent le meilleur relais quand tu veux passer de la réflexion à l'action concrète, surtout si tu n'es plus étudiant.",
    introNote:
      "Tu peux préparer ton rendez-vous en clarifiant d'abord ton profil avec le [test d'orientation Jobmi](/test) : tu arriveras avec des pistes, ce qui rend l'accompagnement beaucoup plus efficace.",
    sections: [
      {
        title: "Ce que la Mission Locale peut t'apporter",
        paragraphs: [
          "Un conseiller référent peut t'aider à clarifier ton projet, à trouver une immersion ou une [PMSMP](/blog/pmsmp-18-25-tester-metier-immersion), à identifier des formations financées, à comprendre les aides auxquelles tu as droit, ou simplement à reprendre confiance dans une période floue.",
          "Ce n'est pas réservé aux jeunes qui ont déjà un projet clair : au contraire, tu peux y aller avec des questions et sans savoir ce que tu veux faire. C'est même à ça que ça sert.",
        ],
      },
      {
        title: "Qui peut s'inscrire et comment",
        paragraphs: [
          "Il faut avoir entre 16 et 25 ans et être sorti de formation initiale (même sans diplôme). L'inscription est gratuite. Tu trouves la Mission Locale dont tu dépends selon ta commune ; le premier rendez-vous se prend par téléphone, en ligne ou en te présentant à l'accueil.",
          "Après l'inscription, tu as un conseiller référent que tu revois régulièrement. L'accompagnement peut durer plusieurs mois et s'adapte à ta situation.",
        ],
      },
      {
        title: 'Les dispositifs possibles',
        paragraphs: [
          "Selon ton profil, un conseiller peut te proposer des ateliers (CV, entretien, projet), des immersions en entreprise, des formations financées, un accompagnement intensif type contrat d'engagement jeune, ou des aides ponctuelles (mobilité, permis, équipement, aide alimentaire).",
          "Tout n'est pas automatique : ces dispositifs dépendent de ta situation, de ton implication et des places disponibles. Plus ton projet est précis, plus il est facile de t'orienter vers le bon dispositif.",
        ],
      },
      {
        title: 'Préparer ton premier rendez-vous',
        paragraphs: [
          "Arrive avec : ton parcours (études, jobs, stages), tes contraintes (mobilité, budget, santé, logement), ce que tu ne veux plus faire, et 2 ou 3 pistes même imparfaites. Apporte une pièce d'identité et, si tu les as, tes diplômes ou attestations.",
          "Formule tes questions à l'avance : \"Comment tester tel métier ?\", \"Quelles formations sont financées près de chez moi ?\", \"Ai-je droit à une aide pour le permis ?\". Plus tu es concret, plus l'accompagnement devient utile vite.",
        ],
      },
      {
        title: 'Combiner Mission Locale et exploration en ligne',
        paragraphs: [
          "Les deux approches se complètent bien : utilise Jobmi en amont pour clarifier ton profil et repérer des familles de métiers, puis la Mission Locale pour trouver les dispositifs, les contacts et les financements réels.",
          "Tu peux aussi préparer une demande précise en regardant d'abord les [stages et formations](/stage-et-formation) et les [événements d'orientation](/evenements-orientation) près de chez toi, puis en arrivant au rendez-vous avec \"voilà ce que je veux tester, comment on fait ?\".",
        ],
      },
      {
        title: 'Questions fréquentes',
        paragraphs: [
          "Faut-il être au chômage pour aller à la Mission Locale ? Non. Il suffit d'avoir 16–25 ans et d'être sorti de formation initiale. Tu peux y aller juste pour t'orienter.",
          "Est-ce payant ? Non, l'accompagnement est entièrement gratuit.",
          "Et si je ne sais pas du tout quoi faire ? C'est une raison valable d'y aller. Le conseiller est là pour t'aider à défricher, pas seulement pour valider un projet déjà ficelé.",
        ],
      },
    ],
    checklist: [
      "J'ai trouvé la Mission Locale dont je dépends et pris un premier rendez-vous.",
      "J'ai préparé mon parcours, mes contraintes et 2-3 pistes.",
      "J'ai clarifié mon profil en amont (test, familles de métiers).",
      "J'ai listé mes questions concrètes pour le conseiller.",
      "Je sais quelle première action je veux enclencher (immersion, formation, aide).",
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
