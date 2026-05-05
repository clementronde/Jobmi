import Link from 'next/link';
import RiasecTestComponent from '@/components/RiasecTestComponent';

const allFaqItems = [
  {
    question: 'Combien de questions y a-t-il dans le test ?',
    answer: 'Le test comporte 30 questions réparties en 5 pages de 6 questions. Chaque question te demande de réagir à une situation ou une activité concrète sur une échelle de 1 à 5.',
  },
  {
    question: 'Comment répondre aux questions ?',
    answer: "Réponds selon ce que tu ressens vraiment, pas ce que tu crois qu'il faudrait répondre. Il n'y a aucune bonne ou mauvaise réponse. Plus tu es honnête, plus les résultats seront utiles.",
  },
  {
    question: 'Que contiennent les résultats ?',
    answer: 'Tu obtiens ton profil RIASEC sous forme de score sur chaque dimension, une description de ta combinaison dominante, puis une liste de familles de métiers et d\'exemples de métiers concrets correspondant à ton profil.',
  },
  {
    question: 'Le test remplace-t-il un bilan de compétences ?',
    answer: "Non. Le test est un outil de réflexion et d'exploration, pas un diagnostic professionnel complet. Il te donne un point de départ fiable pour mieux te comprendre et explorer des pistes, mais un bilan de compétences avec un professionnel est complémentaire si tu veux aller plus loin.",
  },
  {
    question: 'Est-ce que je peux sauvegarder mes résultats ?',
    answer: "Oui. À la fin du test, tu pourras te connecter avec Google ou ton email pour sauvegarder ton profil et le retrouver plus tard. Si tu ne veux pas te connecter, tu peux quand même voir tes résultats dans le moment.",
  },
  {
    question: "Qu'est-ce que le modèle RIASEC ?",
    answer: "Le modèle RIASEC (ou théorie de Holland) identifie 6 grands types de personnalités professionnelles : Réaliste, Investigateur, Artistique, Social, Entreprenant et Conventionnel. Chaque personne combine plusieurs de ces dimensions dans des proportions différentes, ce qui permet d'orienter vers des familles de métiers cohérentes.",
  },
  {
    question: 'Le type Réaliste (R), c\'est quoi ?',
    answer: "Tu aimes construire, manipuler, travailler de tes mains ou avec des machines. Tu préfères les résultats concrets aux discussions abstraites.",
  },
  {
    question: 'Le type Investigateur (I), c\'est quoi ?',
    answer: "Tu analyses, observes, résous des problèmes. Tu es attiré par la science, la recherche et la compréhension en profondeur.",
  },
  {
    question: 'Le type Artistique (A), c\'est quoi ?',
    answer: "Tu crées, exprimes, imagines. Les métiers où tu peux apporter ta touche originale et sortir des sentiers battus t'attirent.",
  },
  {
    question: 'Le type Social (S), c\'est quoi ?',
    answer: "Tu aides, enseignes, accompagnes. Le contact humain est un moteur pour toi, pas juste un aspect de ton travail.",
  },
  {
    question: 'Le type Entreprenant (E), c\'est quoi ?',
    answer: "Tu convaincs, diriges, prends des initiatives. Tu es à l'aise pour lancer des projets et entraîner les autres.",
  },
  {
    question: 'Le type Conventionnel (C), c\'est quoi ?',
    answer: "Tu organises, structures, appliques des méthodes. Tu apprécies les rôles clairs et les environnements ordonnés.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function TestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-[90px]">
        <RiasecTestComponent />
      </div>

      <section className="px-6 sm:px-10 bg-[#F7F7F8] border-t border-gray-100 pb-20">
        <div className="max-w-3xl mx-auto pt-14">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] leading-tight mb-10">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {allFaqItems.map((item) => (
              <div key={item.question} className="border-b border-gray-200 pb-6">
                <h3 className="font-sans font-semibold text-[#04192F] text-lg mb-2">
                  {item.question}
                </h3>
                <p className="font-sans text-gray-500 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="font-sans text-gray-400 text-sm mb-4">
              Tu veux comprendre l&apos;orientation avant de passer le test ?
            </p>
            <Link
              href="/test-orientation"
              className="font-sans inline-flex items-center gap-2 px-6 py-3 bg-[#04192F] text-white rounded-2xl font-semibold text-sm hover:bg-[#0a2a47] transition"
            >
              En savoir plus sur le test d&apos;orientation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
