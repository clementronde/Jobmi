import type { Metadata } from 'next';
import { getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from '../../../services/blogService';
import Link from 'next/link';
import { Article1 } from '../../../components/articles/Article1';
import { Article2 } from '../../../components/articles/Article2';
import { Article3 } from '../../../components/articles/Article3';
import { Article4 } from '../../../components/articles/Article4';
import { Article5 } from '../../../components/articles/Article5';
import { Article6 } from '../../../components/articles/Article6';
import { Article7 } from '../../../components/articles/Article7';
import { Article8 } from '../../../components/articles/Article8';
import { Article9 } from '../../../components/articles/Article9';
import { Article10 } from '../../../components/articles/Article10';
import { Article11 } from '../../../components/articles/Article11';
import { Article12 } from '../../../components/articles/Article12';
import { Article13 } from '../../../components/articles/Article13';
import { Article14 } from '../../../components/articles/Article14';
import { ArticleAIProofJobs } from '../../../components/articles/ArticleAIProofJobs';
import { ArticleAIBoostsJobs } from '../../../components/articles/ArticleAIBoostsJobs';
import { ArticleNewAIJobs } from '../../../components/articles/ArticleNewAIJobs';
import { GenericSupportArticle } from '../../../components/articles/GenericSupportArticle';
import { ArticleParcoursup } from '../../../components/articles/ArticleParcoursup';
import { ArticleMonMaster } from '../../../components/articles/ArticleMonMaster';
import { ArticleParcoursupStress } from '../../../components/articles/ArticleParcoursupStress';
import { ArticleParcoursupCalendrier2027 } from '../../../components/articles/ArticleParcoursupCalendrier2027';
import { ArticleAlternanceSansContrat2026 } from '../../../components/articles/ArticleAlternanceSansContrat2026';
import { ArticleJeNaimePasMonTravail } from '../../../components/articles/ArticleJeNaimePasMonTravail';
import { RelatedArticles } from '../../../components/RelatedArticles';
import ArticleTOC from '../../../components/ArticleTOC';
import { ArticleAuthorBox, ARTICLE_AUTHOR } from '../../../components/ArticleAuthorBox';
import { InternalLinksSection } from '../../../components/InternalLinksSection';
import { getInternalLinksForArticle } from '../../../data/internalLinks';

const BASE_URL = 'https://jobmi.fr';
// SEO <title> per article (before the " | Jobmi" template suffix).
// Kept short (~52 chars max) so the rendered title isn't truncated in SERPs.
// The on-page H1 stays the longer, reader-facing `article.title`.
const articleSeoTitleOverrides: Record<string, string> = {
  'calendrier-parcoursup-2027':
    'Calendrier Parcoursup 2027 : toutes les dates',
  'alternance-sans-contrat-rentree-2026':
    'Alternance sans contrat à la rentrée : que faire',
  'je-naime-pas-mon-travail':
    'Je n’aime pas mon travail : que faire avant de partir ?',
  'comment-commencer-ta-reconversion-professionnelle':
    'Reconversion : 5 questions avant de te lancer',
  'comment-trouver-le-job-de-tes-reves-a-20-ans-guide-ultime-pour-jeunes-en-reconversion':
    'Trouver le job de tes rêves à 20 ans : le guide',
  'top-10-des-metiers-cool-pour-2026-que-tu-dois-connaitre':
    'Top 10 des métiers cool pour 2026',
  'reconversion-professionnelle-20-ans-guide-complet':
    'Reconversion à 20 ans : ton plan en 30 jours',
  'metiers-sans-diplome-qui-paient-bien':
    'Métiers sans diplôme qui paient bien (2026)',
  'bilan-de-competences-gratuit-guide':
    'Bilan de compétences gratuit : le guide 2026',
  'financer-sa-formation-sans-cpf':
    'Financer sa formation sans CPF : 8 solutions',
  'alternance-ou-formation-continue-que-choisir':
    'Alternance ou formation continue : que choisir ?',
  'metiers-avenir-2026-qui-recrutent':
    '15 métiers d’avenir en 2026 qui recrutent',
  'devenir-developpeur-web-sans-diplome':
    'Développeur web sans diplôme : le guide 2026',
  'utiliser-cpf-compte-personnel-formation':
    'Utiliser son CPF en 2026 : le guide complet',
  'trouver-stage-reconversion-methode':
    'Trouver un stage en reconversion : la méthode',
  'pmsmp-18-25-tester-metier-immersion':
    'PMSMP 18–25 ans : tester un métier en immersion',
  'reconversion-apres-une-l1':
    'Réorientation après une L1 : que faire ?',
  'erreurs-reconversion-jeune':
    'Reconversion jeune : les erreurs à éviter',
  'financer-reconversion-jeune':
    'Financer sa reconversion quand on est jeune',
  'comment-preparer-une-immersion-metier':
    'Préparer une immersion métier : le guide',
  'orientation-post-bac-sans-parcoursup':
    'Orientation post-bac sans Parcoursup : 6 options',
  'utiliser-profil-riasec-orientation':
    'Profil RIASEC : comment choisir ta voie',
  'mission-locale-orientation-jeune':
    'Mission Locale et orientation : mode d’emploi',
  'metiers-ia-ne-remplacera-pas-2030':
    'Métiers que l’IA ne remplacera pas d’ici 2030',
  'nouveaux-metiers-crees-par-ia':
    '10 nouveaux métiers créés par l’IA (2026)',
  'comment-ia-booste-ton-futur-metier':
    'Comment l’IA va booster ton futur métier',
  'resultats-parcoursup-2026':
    'Résultats Parcoursup 2026 : en attente ou refusé ?',
  'resultats-mon-master-2026':
    'Résultats Mon Master 2026 : aucune proposition ?',
  'parcoursup-gerer-stress-resultats':
    'Parcoursup : gérer le stress des résultats',
};

const articleFaqSchemaBySlug: Record<string, { '@context': string; '@type': string; mainEntity: Array<{ '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }> }> = {
  'calendrier-parcoursup-2027': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quand ouvre Parcoursup 2027 ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le site d'information sur les formations ouvre vers mi-novembre 2026. Les inscriptions et la formulation des vœux commencent vers mi-janvier 2027 (dates prévisionnelles, à confirmer avec le calendrier officiel publié par le ministère fin 2026).",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de vœux peut-on faire sur Parcoursup ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "10 vœux maximum pour des formations sous statut étudiant, plus jusqu'à 10 vœux en apprentissage qui ne sont pas décomptés. Pour les vœux multiples, la limite est de 20 sous-vœux au total.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quand tombent les résultats Parcoursup 2027 ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les premières réponses arrivent vers début juin 2027, puis en continu tout l'été au fil des désistements. La phase principale se termine mi-juillet, la phase complémentaire mi-septembre.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que se passe-t-il si je ne réponds pas dans les délais ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sans réponse dans le délai imparti, tu perds la proposition et les vœux en attente qui y sont liés. Le répondeur automatique permet de répondre à ta place selon un ordre de préférence que tu as défini.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on s'inscrire sur Parcoursup après la date limite des vœux ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non pour la phase principale. Mais la phase complémentaire, ouverte de mi-juin à mi-septembre, permet de formuler de nouveaux vœux sur les places encore disponibles.",
        },
      },
      {
        '@type': 'Question',
        name: "Je n'ai que des refus, que faire ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tu peux saisir la commission d'accès à l'enseignement supérieur (CAES) de ton académie via Parcoursup, candidater dans des formations hors Parcoursup (écoles, bachelors, BTS en école, titres RNCP) ou construire une année terrain structurée (PMSMP, service civique, stages).",
        },
      },
    ],
  },
  'orientation-post-bac-sans-parcoursup': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Est-ce qu'on peut vraiment faire des études supérieures sans Parcoursup ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. De nombreuses écoles, bachelors, BTS en école et titres professionnels recrutent hors Parcoursup, avec leur propre procédure d'admission (dossier, concours, entretien). Tu peux faire des études supérieures sans jamais avoir un vœu Parcoursup accepté.",
        },
      },
      {
        '@type': 'Question',
        name: "Les formations hors Parcoursup sont-elles moins reconnues ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas automatiquement. Certaines sont très reconnues (visa, grade, titres RNCP), d'autres beaucoup moins. Il faut vérifier la reconnaissance officielle du diplôme, les débouchés réels et le sérieux de l'école avant de s'engager.",
        },
      },
      {
        '@type': 'Question',
        name: "Je n'ai rien eu sur Parcoursup, est-ce que j'ai raté ma vie ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Ça veut dire que tu vas devoir passer par des chemins alternatifs : formations hors Parcoursup, rentrées décalées, alternance, année terrain structurée… Beaucoup d'étudiants se réorientent après une première année, et les recruteurs regardent surtout la cohérence du parcours, pas le fait d'avoir eu son vœu du premier coup.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment éviter de me faire arnaquer par une école hors Parcoursup ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Vérifie la reconnaissance officielle du diplôme (RNCP, visa ou grade), regarde les avis d'anciens élèves et les chiffres d'insertion professionnelle, et compare plusieurs écoles sur le même secteur plutôt que de choisir la première venue.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment expliquer une année hors système dans un futur dossier ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Si tu utilises cette année pour tester des domaines (stages, PMSMP, jobs), avancer sur un projet ou clarifier ton orientation, tu peux raconter une histoire cohérente : je n'ai pas eu ce que je voulais sur Parcoursup, j'ai pris une année pour tester, et voilà ce que j'en ai tiré. C'est beaucoup plus crédible qu'un trou non expliqué dans le parcours.",
        },
      },
    ],
  },
  'resultats-parcoursup-2026': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Est-ce que je peux tout changer après les résultats Parcoursup ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tu peux encore jouer sur la phase complémentaire, candidater hors Parcoursup ou construire une année terrain pour revenir plus fort. Tu ne peux pas réécrire ton dossier Parcoursup de cette année, mais tu peux influencer fortement la suite.",
        },
      },
      {
        '@type': 'Question',
        name: '"En attente" sur Parcoursup, ça veut dire quoi exactement ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tu es sur liste d'attente : la formation te prendra si suffisamment de candidats devant toi renoncent. Ton rang évolue en fonction des réponses des autres. Ce n'est ni un oui sûr, ni un non définitif, mais un peut-être qui peut se débloquer dans les semaines qui suivent.",
        },
      },
      {
        '@type': 'Question',
        name: "Est-ce grave d'accepter une formation par défaut sur Parcoursup ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas forcément, si le domaine t'intéresse un minimum et que tu te laisses la possibilité de te réorienter plus tard. Ce qui est risqué, c'est de signer pour quelque chose que tu sais déjà que tu vas détester, sans réfléchir aux alternatives.",
        },
      },
      {
        '@type': 'Question',
        name: "Que faire si Parcoursup m'a refusé partout ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tu peux formuler de nouveaux voeux via la phase complémentaire Parcoursup, candidater dans des formations hors Parcoursup (écoles privées, bachelors, BTS en école, titres RNCP), ou structurer une année terrain (PMSMP, stages, service civique) pour revenir plus fort l'année suivante.",
        },
      },
      {
        '@type': 'Question',
        name: "Est-ce qu'on peut faire de bonnes études sans Parcoursup ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. De nombreuses écoles, bachelors, BTS en école et titres pro sont de qualité, même s'ils ne passent pas par la plateforme. Ce qui compte, c'est de vérifier la reconnaissance officielle du diplôme, les débouchés réels et la cohérence avec ton projet.",
        },
      },
    ],
  },
  'parcoursup-gerer-stress-resultats': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Pourquoi Parcoursup est-il si stressant pour les lycéens ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Parcoursup concentre beaucoup d'enjeux sur une courte période : peur de faire le mauvais choix, impression qu'il n'existe qu'une seule bonne voie, codes peu clairs (Oui-Si, En attente), et sentiment d'être observé par les parents et les profs. 70 à 90 % des lycéens se disent stressés ou anxieux pendant cette période.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment gérer l'attente des résultats Parcoursup au quotidien ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La technique la plus efficace est de fixer 1 à 3 créneaux fixes par jour pour consulter Parcoursup, puis de fermer la plateforme en dehors de ces moments. Cela évite de rafraîchir en boucle sans perdre d'informations importantes, car les délais de réponse sont de plusieurs jours.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment aborder Parcoursup avec mes parents sans que ça devienne une source de conflit ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Propose un moment dédié (une fois par semaine ou tous les 2–3 jours) pour faire le point ensemble sur tes résultats. En dehors de ce créneau, demande à ce qu'on n'en parle pas en permanence. Tu peux formuler calmement : « Ça me stresse encore plus quand on en parle tout le temps, j'ai besoin qu'on se fixe des moments précis. »",
        },
      },
      {
        '@type': 'Question',
        name: "Que faire émotionnellement si je reçois des refus sur Parcoursup ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Accuse le coup avant d'agir : laisse-toi quelques heures ou une journée, évite de te comparer aux autres sur les réseaux, et parle à quelqu'un de confiance. Ensuite seulement, consulte des contenus pratiques sur les options disponibles (phase complémentaire, formations hors Parcoursup, année terrain).",
        },
      },
      {
        '@type': 'Question',
        name: "Parcoursup est-il la seule porte pour faire des études supérieures ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. De nombreuses formations de qualité recrutent hors Parcoursup : écoles de commerce, bachelors, BTS en école privée, titres professionnels RNCP, écoles spécialisées (digital, design, santé…). Savoir que d'autres portes existent aide à réduire la pression sur les résultats de la plateforme.",
        },
      },
    ],
  },
  'resultats-mon-master-2026': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Est-ce grave de ne pas avoir de master tout de suite ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Beaucoup de diplômés de licence passent par des chemins détournés : autre master, école, année pro, mobilité internationale… Ce qui compte sur le long terme, c'est ce que tu fais de cette année, comment tu expliques ton parcours, et les compétences et expériences que tu accumules.",
        },
      },
      {
        '@type': 'Question',
        name: "Est-ce que je peux faire de bonnes études sans passer par Mon Master ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. De nombreux programmes de niveau Bac+5 (écoles de commerce, écoles du digital, écoles spécialisées) recrutent hors Mon Master, avec des diplômes et titres reconnus. Il faut vérifier le niveau du diplôme (grade de master, RNCP niveau 7), l'insertion pro et la qualité des partenaires entreprises.",
        },
      },
      {
        '@type': 'Question',
        name: "Travailler 1 an va-t-il me pénaliser pour candidater à un master plus tard ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Au contraire, une année pro cohérente peut renforcer ton dossier : tu montres que tu n'as pas attendu, tu arrives avec des exemples concrets en entretien, tu peux te spécialiser dans un secteur. Ce qui peut te pénaliser, c'est plutôt une année totalement vide et non expliquée.",
        },
      },
      {
        '@type': 'Question',
        name: "Puis-je trouver un master à l'étranger si Mon Master m'a refusé ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Dans certains pays, tu peux candidater directement auprès des universités ou via des plateformes locales : masters anglophones en Europe, programmes en échange ou double diplôme via des écoles françaises. Attention au niveau d'anglais requis, au coût, à la reconnaissance et aux démarches administratives.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment expliquer un résultat négatif sur Mon Master dans mon parcours ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tu n'es pas obligé de l'appeler « échec ». Tu peux le formuler ainsi : « Candidature Master non retenue en 2026, année de travail en [secteur], puis admission en [formation]. » L'important est de montrer que tu as rebondi et que tu en as tiré quelque chose : compétences, projet clarifié, maturité.",
        },
      },
    ],
  },
  'pmsmp-18-25-tester-metier-immersion': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quelle est la durée d’une PMSMP quand on a 18–25 ans ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La durée dépend du projet, de la structure d’accueil et de l’organisme qui prescrit l’immersion. L’idée est de prévoir un format assez clair pour observer le métier dans de bonnes conditions, pas de rester longtemps sans objectif précis.",
        },
      },
      {
        '@type': 'Question',
        name: "Est-ce qu’on est payé pendant une PMSMP ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La PMSMP n’est pas un contrat de travail classique. En général, tu n’es donc pas rémunéré comme un salarié, mais selon ta situation tu peux conserver certaines aides ou allocations déjà en place. Il faut toujours vérifier ce point avec la Mission Locale, France Travail ou l’organisme qui t’accompagne.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment demander une PMSMP quand on est suivi par une Mission Locale ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus simple est d’arriver avec une idée de métier ou au moins une famille de métiers à tester. Ton conseiller peut ensuite t’aider à voir si la PMSMP est adaptée, à cadrer l’objectif de l’immersion et à préparer la convention avec la structure d’accueil.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelle différence entre une PMSMP et un stage d’observation ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les deux servent à découvrir un métier, mais ils ne relèvent pas du même cadre. La PMSMP est un dispositif officiel lié à l’insertion et à l’orientation professionnelle, alors que le stage d’observation dépend plus souvent d’un établissement scolaire ou de formation.",
        },
      },
    ],
  },
  'alternance-sans-contrat-rentree-2026': {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Je n'ai pas de contrat d'alternance à la rentrée, est-ce grave ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. La rentrée 2026 est particulièrement tendue (offres en baisse, plus de candidats), et beaucoup d'étudiants sont dans ta situation. La plupart des CFA laissent plusieurs semaines, parfois jusqu'à 3 mois, pour trouver une entreprise après le début des cours.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on commencer sa formation en CFA sans avoir signé de contrat ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Dans beaucoup de cas oui, sous certaines conditions qui varient selon l'établissement (durée maximale, justificatifs de recherche active). Renseigne-toi directement auprès de ton CFA sur ses règles précises.",
        },
      },
      {
        '@type': 'Question',
        name: "Jusqu'à quand peut-on trouver une entreprise d'alternance après la rentrée ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "De nouvelles offres continuent d'être publiées entre septembre et novembre selon les besoins des entreprises. Le délai maximum accepté par la plupart des CFA tourne autour de 3 mois après la rentrée, mais vérifie toujours la règle exacte de ton établissement.",
        },
      },
      {
        '@type': 'Question',
        name: "Qui peut m'aider gratuitement à trouver une alternance ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La Mission Locale (16-25 ans), France Travail et certains dispositifs régionaux proposent un accompagnement gratuit : aide à la candidature, mise en relation avec des entreprises, suivi personnalisé.",
        },
      },
      {
        '@type': 'Question',
        name: "Que faire si je ne trouve vraiment aucune entreprise ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Regarde les alternatives : une formation initiale avec stage plutôt qu'en alternance, un contrat de professionnalisation, ou l'utilisation de ton CPF si tu as déjà travaillé. Si la recherche traîne depuis plusieurs mois malgré une méthode sérieuse, ça vaut aussi le coup de vérifier que le métier visé est le bon avant de continuer.",
        },
      },
    ],
  },
};

const genericSupportArticleSlugs = new Set([
  'reconversion-apres-une-l1',
  'erreurs-reconversion-jeune',
  'financer-reconversion-jeune',
  'comment-preparer-une-immersion-metier',
  'jobshadowing-decouvrir-metier',
  'que-faire-apres-le-bac-sans-idee',
  'orientation-post-bac-sans-parcoursup',
  'utiliser-profil-riasec-orientation',
  'mission-locale-orientation-jeune',
]);

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const slugs = await getAllArticleSlugs();
    return slugs.map((slug: string) => ({ slug }));
  } catch (error) {
    console.error('Erreur lors de la génération des paramètres statiques:', error);
    return [];
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticleBySlug(slug);
    const url = `${BASE_URL}/blog/${slug}`;
    const seoTitle = articleSeoTitleOverrides[slug] || article.title;
    return {
      title: seoTitle,
      description: article.metaDescription,
      alternates: { canonical: url },
      openGraph: {
        type: 'article',
        url,
        title: seoTitle,
        description: article.metaDescription,
        publishedTime: article.datePublished,
        modifiedTime: article.updatedAt,
        authors: [ARTICLE_AUTHOR.name],
        tags: article.tags,
        images: [
          {
            url: article.imageCover,
            alt: article.imageAlt,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: seoTitle,
        description: article.metaDescription,
        images: [article.imageCover],
      },
    };
  } catch {
    return { title: 'Article' };
  }
}

const ArticlePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const data = await getArticleBySlug(slug);
  const related = await getRelatedArticles(data._id, data.category);
  const internalLinks = getInternalLinksForArticle(data);
  const faqJsonLd = articleFaqSchemaBySlug[slug];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.title,
    description: data.metaDescription,
    image: `${BASE_URL}${data.imageCover}`,
    datePublished: data.datePublished,
    dateModified: data.updatedAt,
    author: {
      '@type': 'Person',
      name: ARTICLE_AUTHOR.name,
      jobTitle: ARTICLE_AUTHOR.role,
      description: ARTICLE_AUTHOR.bio,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jobmi',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/media/logo-jobmi.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
    keywords: data.tags.join(', '),
    articleSection: data.category,
    timeRequired: `PT${data.readingTime}M`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: data.title, item: `${BASE_URL}/blog/${slug}` },
    ],
  };

  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(data.datePublished));

  return (
    <div className="article-page mt-[90px] bg-[linear-gradient(180deg,#F7F6FF_0%,#FFFFFF_420px)] px-5 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <header className="mx-auto max-w-[980px] pb-8 pt-12 text-center font-sans">
        <Link
          href="/blog"
          className="motion-underline mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#6500FF]"
        >
          <img className="w-5" src="/media/CTA-blog-retour.svg" alt="" />
          Retour au blog
        </Link>
        <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-[#6500FF] shadow-[0_10px_24px_rgba(101,0,255,0.08)]">
            {data.category}
          </span>
          <span className="text-sm font-semibold text-gray-500">
            {formattedDate}
          </span>
          <span className="text-sm font-semibold text-gray-500">
            {data.readingTime} min de lecture
          </span>
        </div>
        <h1 className="mx-auto max-w-[880px] text-4xl font-bold leading-tight text-[#04192F] sm:text-5xl lg:text-6xl">
          {data.title}
        </h1>
        <img
          src="/media/trait-article-titre.svg"
          alt=""
          className="mx-auto mt-4 max-w-[360px]"
        />
        <p className="mx-auto mt-7 max-w-[760px] text-lg leading-relaxed text-gray-600">
          {data.excerpt}
        </p>
      </header>

      <div className="mx-auto flex max-w-screen-xl gap-8">
        <div className="hidden w-[220px] shrink-0 xl:block" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <ArticleAuthorBox />
        </div>
      </div>

      <div className="mx-auto flex max-w-screen-xl gap-8 items-start">
        <ArticleTOC />
        <article
          id="article-content"
          className="article-content flex-1 min-w-0 rounded-2xl bg-white px-4 py-8 shadow-[0_18px_55px_rgba(4,25,47,0.06)] sm:px-8 lg:px-10"
        >
          {slug === "comment-commencer-ta-reconversion-professionnelle" && <Article1 />}
          {slug === "comment-trouver-le-job-de-tes-reves-a-20-ans-guide-ultime-pour-jeunes-en-reconversion" && <Article2 />}
          {slug === "top-10-des-metiers-cool-pour-2026-que-tu-dois-connaitre" && <Article3 />}
          {slug === "reconversion-professionnelle-20-ans-guide-complet" && <Article4 />}
          {slug === "metiers-sans-diplome-qui-paient-bien" && <Article5 />}
          {slug === "bilan-de-competences-gratuit-guide" && <Article6 />}
          {slug === "financer-sa-formation-sans-cpf" && <Article7 />}
          {slug === "se-reconvertir-apres-bac-plus-2" && <Article8 />}
          {slug === "alternance-ou-formation-continue-que-choisir" && <Article9 />}
          {slug === "metiers-avenir-2026-qui-recrutent" && <Article10 />}
          {slug === "devenir-developpeur-web-sans-diplome" && <Article11 />}
          {slug === "utiliser-cpf-compte-personnel-formation" && <Article12 />}
          {slug === "trouver-stage-reconversion-methode" && <Article13 />}
          {slug === "pmsmp-18-25-tester-metier-immersion" && <Article14 />}
          {slug === "resultats-parcoursup-2026" && <ArticleParcoursup />}
          {slug === "calendrier-parcoursup-2027" && <ArticleParcoursupCalendrier2027 />}
          {slug === "alternance-sans-contrat-rentree-2026" && <ArticleAlternanceSansContrat2026 />}
          {slug === "je-naime-pas-mon-travail" && <ArticleJeNaimePasMonTravail />}
          {slug === "resultats-mon-master-2026" && <ArticleMonMaster />}
          {slug === "parcoursup-gerer-stress-resultats" && <ArticleParcoursupStress />}
          {slug === "metiers-ia-ne-remplacera-pas-2030" && <ArticleAIProofJobs />}
          {slug === "comment-ia-booste-ton-futur-metier" && <ArticleAIBoostsJobs />}
          {slug === "nouveaux-metiers-crees-par-ia" && <ArticleNewAIJobs />}
          {genericSupportArticleSlugs.has(slug) && (
            <GenericSupportArticle slug={slug} />
          )}
        </article>
      </div>

      <div className="mx-auto max-w-[980px]">
        <InternalLinksSection
          className="px-0"
          eyebrow="Pour avancer"
          title="Les ressources utiles après cet article"
          description="Une sélection de guides et pages piliers pour continuer dans le bon ordre, selon ton projet."
          links={internalLinks}
        />
        <RelatedArticles articles={related} />
      </div>
    </div>
  );
};

export default ArticlePage;
