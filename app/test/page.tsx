import Link from 'next/link';
import RiasecTestComponent from '@/components/RiasecTestComponent';

const riasecDimensions = [
  { letter: 'R', label: 'Réaliste', description: 'Tu aimes construire, manipuler, travailler de tes mains ou avec des machines. Tu préfères les résultats concrets aux discussions abstraites.' },
  { letter: 'I', label: 'Investigateur', description: 'Tu analyses, observes, résous des problèmes. Tu es attiré par la science, la recherche et la compréhension en profondeur.' },
  { letter: 'A', label: 'Artistique', description: 'Tu crées, exprimes, imagines. Les métiers où tu peux apporter ta touche originale et sortir des sentiers battus t\'attirent.' },
  { letter: 'S', label: 'Social', description: 'Tu aides, enseignes, accompagnes. Le contact humain est un moteur pour toi, pas juste un aspect de ton travail.' },
  { letter: 'E', label: 'Entreprenant', description: 'Tu convaincs, diriges, prends des initiatives. Tu es à l\'aise pour lancer des projets et entraîner les autres.' },
  { letter: 'C', label: 'Conventionnel', description: 'Tu organises, structures, appliques des méthodes. Tu apprécies les rôles clairs et les environnements ordonnés.' },
];

const faqItems = [
  {
    question: 'Combien de questions y a-t-il dans le test ?',
    answer: 'Le test comporte 30 questions réparties en 5 pages de 6 questions. Chaque question te demande de réagir à une situation ou une activité concrète sur une échelle de 1 à 5.',
  },
  {
    question: 'Comment répondre aux questions ?',
    answer: 'Réponds selon ce que tu ressens vraiment, pas ce que tu crois qu\'il faudrait répondre. Il n\'y a aucune bonne ou mauvaise réponse. Plus tu es honnête, plus les résultats seront utiles.',
  },
  {
    question: 'Qu\'est-ce que le modèle RIASEC ?',
    answer: 'Le modèle RIASEC (ou théorie de Holland) identifie 6 grands types de personnalités professionnelles : Réaliste, Investigateur, Artistique, Social, Entreprenant et Conventionnel. Chaque personne combine plusieurs de ces dimensions dans des proportions différentes, ce qui permet d\'orienter vers des familles de métiers cohérentes.',
  },
  {
    question: 'Que contiennent les résultats ?',
    answer: 'Tu obtiens ton profil RIASEC sous forme de score sur chaque dimension, une description de ta combinaison dominante, puis une liste de familles de métiers et d\'exemples de métiers concrets correspondant à ton profil.',
  },
  {
    question: 'Le test remplace-t-il un bilan de compétences ?',
    answer: 'Non. Le test est un outil de réflexion et d\'exploration, pas un diagnostic professionnel complet. Il te donne un point de départ fiable pour mieux te comprendre et explorer des pistes, mais un bilan de compétences avec un professionnel est complémentaire si tu veux aller plus loin.',
  },
  {
    question: 'Est-ce que je peux sauvegarder mes résultats ?',
    answer: 'Oui. À la fin du test, tu pourras te connecter avec Google ou ton email pour sauvegarder ton profil et le retrouver plus tard. Si tu ne veux pas te connecter, tu peux quand même voir tes résultats dans le moment.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
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

      {/* RIASEC model explanation — always server-rendered */}
      <section className="py-20 px-6 sm:px-10 bg-[#F7F7F8] border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#6500FF] mb-4 block">
            Le modèle
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] leading-tight mb-4">
            Qu&apos;est-ce que le modèle RIASEC ?
          </h2>
          <p className="font-sans text-gray-500 text-lg leading-relaxed mb-12 max-w-2xl">
            Développé par le psychologue John Holland, le modèle RIASEC classe les personnalités professionnelles en 6 types. Ton profil est une combinaison unique de ces dimensions — c&apos;est ce qui permet de te recommander des métiers cohérents avec toi.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {riasecDimensions.map((dim) => (
              <div key={dim.letter} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans font-bold text-2xl text-[#6500FF]">{dim.letter}</span>
                  <span className="font-sans font-semibold text-[#04192F]">{dim.label}</span>
                </div>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">{dim.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — always server-rendered */}
      <section className="py-20 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#04192F] leading-tight mb-10">
            Questions fréquentes sur le test
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-gray-100 pb-6">
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
