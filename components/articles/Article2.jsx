import React from 'react'
import Link from 'next/link';

export const Article2 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='mx-auto my-8 max-w-3xl rounded-2xl bg-[#F8F7FF] p-6 font-sans text-base leading-8 text-[#465160]'>
        <p>
          « Trouver le job de tes rêves » n&apos;est pas un objectif très utile — il est trop flou pour agir dessus. Ce qui fonctionne, c&apos;est une méthode en 4 étapes : clarifier ce que tu veux vraiment, vérifier que tu as les compétences (ou sais où les chercher), tester avant de t&apos;engager, puis candidater avec un dossier qui correspond réellement au poste.
        </p>
      </div>

      <div className='font-sans mx-auto sm:mx-20 space-y-14'>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>Étape 1 — Comprendre pourquoi tu veux changer</h2>
          <p className='mt-4 leading-8 text-[#465160]'>
            Avant de chercher un métier, cherche la vraie raison de ton insatisfaction actuelle. Ce n&apos;est pas la même chose de fuir un poste (mauvais manager, ennui, horaires) et de viser un métier précis par attirance réelle. Les deux sont légitimes, mais ils mènent à des recherches différentes : la première a besoin d&apos;un changement de contexte, la seconde d&apos;un vrai projet.
          </p>
          <p className='mt-3 leading-8 text-[#465160]'>
            Si tu veux en discuter avec quelqu&apos;un plutôt que de trancher seul, tu peux prendre rendez-vous via notre{' '}
            <Link href="/contact" className='font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]'>
              formulaire de contact
            </Link>.
          </p>
        </section>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>Étape 2 — Faire le point sur tes compétences</h2>
          <img className='mt-5 h-auto w-full max-w-[500px] object-cover' src="/media/blo-art-2-etape1.svg" alt="Personnes travaillant sur un chantier" />
          <p className='mt-5 leading-8 text-[#465160]'>
            Liste ce que tu sais déjà faire, y compris les compétences qui ne viennent pas d&apos;un poste précédent : gestion de projets personnels, bénévolat, compétences techniques auto-apprises. Un bilan de compétences (digital ou en cabinet) t&apos;aide à structurer cette liste, mais il n&apos;est pas obligatoire pour avancer — un test d&apos;orientation gratuit donne déjà une première direction.
          </p>
          <Link href="/test" className="mt-4 inline-flex rounded-xl bg-[#6500FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#5200CC]">
            Faire le test d&apos;orientation Jobmi
          </Link>
        </section>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>Étape 3 — Vérifier le métier avant de t&apos;y engager</h2>
          <p className='mt-4 leading-8 text-[#465160]'>
            C&apos;est l&apos;étape la plus souvent sautée, et celle qui évite le plus de mauvaises surprises. Avant de financer une formation, confronte le métier visé à la réalité : un stage d&apos;observation, une PMSMP, un mini-projet ou un échange direct avec deux personnes qui l&apos;exercent déjà.
          </p>
          <Link href="/tester-un-metier" className="mt-4 inline-flex rounded-xl bg-[#04192F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#6500FF]">
            Voir comment tester un métier
          </Link>
        </section>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>Étape 4 — Candidater avec un dossier ciblé</h2>
          <p className='mt-4 leading-8 text-[#465160]'>
            Un CV générique envoyé à 50 offres convertit moins bien qu&apos;un CV adapté envoyé à 10 offres qui correspondent vraiment à ton profil. Pour chaque candidature, reprends 2 ou 3 mots-clés de l&apos;offre et montre en une phrase concrète comment ton expérience y répond — un projet réalisé, un résultat chiffré, une compétence directement transférable.
          </p>
          <p className='mt-3 leading-8 text-[#465160]'>
            Pour trouver des offres de stage ou d&apos;alternance, tu peux utiliser{' '}
            <span className='font-bold'>Jobmi</span>,{' '}
            <Link href="https://www.stage4u.fr/" className='font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]'>Stage4U</Link> ou{' '}
            <Link href="https://fr.indeed.com/" className='font-semibold text-[#6500FF] underline decoration-[#C9B6FF] underline-offset-4 transition hover:text-[#04192F]'>Indeed</Link>. Pour un premier entretien, prépare 2 ou 3 exemples concrets tirés de ton parcours réel plutôt que des réponses toutes faites.
          </p>
        </section>

        <section>
          <h2 className='text-3xl font-bold text-[#04192F]'>Si ça prend plus de temps que prévu</h2>
          <p className='mt-4 leading-8 text-[#465160]'>
            La recherche d&apos;un métier qui correspond vraiment prend rarement quelques semaines. Ce n&apos;est pas un signal que tu t&apos;y prends mal : c&apos;est le rythme normal d&apos;un changement de voie. Continue à tester des pistes plutôt que d&apos;attendre la certitude avant d&apos;agir — elle vient souvent après l&apos;action, pas avant.
          </p>
        </section>

      </div>

      <div className='font-sans sm:mx-20 my-12 bg-[#F8F7FF] border border-[#E9E1FF] rounded-2xl p-8'>
        <h2 className='font-bold text-xl text-[#04192F] mb-5'>Pour aller plus loin</h2>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href="/test" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Test d&apos;orientation gratuit</p>
            <p className='text-xs text-gray-500 mt-1'>Identifie les métiers qui correspondent à ton profil en 6 à 8 min.</p>
          </Link>
          <Link href="/tester-un-metier" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Tester un métier avant de se lancer</p>
            <p className='text-xs text-gray-500 mt-1'>Ateliers, stages, PMSMP : découvre un métier sans t&apos;engager.</p>
          </Link>
          <Link href="/stage-et-formation" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Stages et formations</p>
            <p className='text-xs text-gray-500 mt-1'>Toutes les offres de stages par secteur pour gagner de l&apos;expérience.</p>
          </Link>
        </div>
      </div>

    </div>
  )
}
