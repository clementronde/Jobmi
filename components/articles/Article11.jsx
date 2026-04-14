import Link from 'next/link'

export const Article11 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Développeur web sans diplôme :</p>
          <p className='text-justify'>
            Devenir développeur web sans diplôme en 2025, c'est non seulement possible — c'est l'une des reconversions les plus réussies en France. Des milliers de personnes le font chaque année. Voici le chemin exact, les coûts réels et les erreurs à éviter.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Peut-on vraiment devenir développeur web sans diplôme ?</h2>
        <p className='mt-4'>
          Oui. Le développement web est l'un des rares secteurs en France où <strong>le portfolio compte plus que le diplôme</strong>. Les recruteurs techniques regardent ton code, tes projets GitHub, ta capacité à résoudre des problèmes — pas ton titre universitaire.
        </p>
        <p className='mt-4'>
          Preuve : une étude Stack Overflow 2024 montre que <strong>62 % des développeurs professionnels sont autodidactes</strong> ou ont suivi une formation courte non-universitaire.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          Les 3 chemins pour devenir dev web en 2025
        </h2>
      </div>

      <div className='font-sans sm:mx-20 space-y-8'>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>Chemin 1 — Le bootcamp intensif (3-6 mois)</h3>
          <p><strong>Coût :</strong> 5 000 à 12 000 € (souvent finançable CPF ou France Travail)</p>
          <p className='mt-2'>Les bootcamps comme Le Wagon, OpenClassrooms, Wild Code School ou Ada Tech School sont des formations intensives full-time. Tu apprends HTML, CSS, JavaScript, et un framework (React, Vue) en 3-6 mois.</p>
          <p className='mt-3'><strong>Taux d'emploi :</strong> 80-90 % à 6 mois selon les organismes (données 2024).</p>
          <p className='mt-3'><strong>Point fort :</strong> Communauté forte, accélération maximale, suivi carrière inclus.</p>
        </div>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>Chemin 2 — L'autodidaxie structurée (6-18 mois)</h3>
          <p><strong>Coût :</strong> 0 à 500 € (certifications + quelques cours Udemy)</p>
          <p className='mt-2'>Apprendre seul est possible si tu es discipliné. Le parcours recommandé en 2025 : freeCodeCamp (HTML/CSS/JS gratuit) → The Odin Project (full-stack gratuit) → projets personnels → GitHub actif → portfolio.</p>
          <p className='mt-3'><strong>Point fort :</strong> Zéro coût, tu avances à ton rythme, tu prouveras une vraie motivation aux recruteurs.</p>
          <p className='mt-3'><strong>Risque :</strong> Sans structure, beaucoup abandonnent à mi-chemin. Il faut une discipline en béton.</p>
        </div>

        <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl'>
          <h3 className='font-bold text-xl mb-2'>Chemin 3 — L'alternance en école (1-2 ans)</h3>
          <p><strong>Coût :</strong> 0 € (tu es payé)</p>
          <p className='mt-2'>Des écoles comme RNCP Développeur Web en alternance permettent de se former tout en étant employé et rémunéré. Tu sors avec un diplôme reconnu ET de l'expérience professionnelle.</p>
          <p className='mt-3'><strong>Condition :</strong> Trouver une entreprise prête à t'embaucher en alternance. Nécessite souvent des bases déjà acquises.</p>
        </div>

      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Ce que tu dois apprendre (roadmap 2025)
        </h2>
        <span>
          <img className='sm:w-[400px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 my-10'>
        <div className='space-y-10 sm:mx-10 mx-5'>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>01</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Les fondamentaux (2-3 mois)</p>
              <p>HTML, CSS, JavaScript vanilla. Sans ça, rien ne tient. Ces bases sont indispensables et s'apprennent gratuitement sur MDN, freeCodeCamp ou The Odin Project.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>02</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Un framework frontend (2-3 mois)</p>
              <p>React est le plus demandé en 2025. Vue.js ou Angular sont des alternatives valables. Apprends-en un seul à fond plutôt que trois en surface.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>03</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Le backend et les bases de données (2-3 mois)</p>
              <p>Node.js (JavaScript) ou Python (Django/Flask). SQL pour les bases de données. Ce niveau te rend "fullstack" — le profil le plus recherché.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='lg:w-4/12'>
              <p className='text-5xl font-thin text-gray-400'>04</p>
            </div>
            <div className='lg:w-8/12'>
              <p className='font-bold mb-2'>Git et le déploiement (1 mois)</p>
              <p>GitHub, Vercel, Netlify, hébergement. Les recruteurs regardent ton GitHub. Un profil actif avec des projets réels vaut 10 lignes de CV.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Les erreurs qui font échouer les reconversions dev
        </h2>
        <span>
          <img className='sm:w-[500px] w-[250px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 space-y-4'>
        <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
          <h3 className='font-bold'>Apprendre trop de langages en même temps</h3>
          <p>Python + JavaScript + PHP + Go = zéro maîtrise de rien. Choisis une stack et creuse-la à fond.</p>
        </div>
        <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
          <h3 className='font-bold'>Ne pas construire de projets concrets</h3>
          <p>Regarder des tutoriels sans coder = illusion de progression. Après chaque leçon, construis quelque chose — même petit.</p>
        </div>
        <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
          <h3 className='font-bold'>Attendre d'être "prêt" pour postuler</h3>
          <p>Un dev junior n'est jamais "prêt à 100 %". Commence à postuler dès que tu as 3-4 projets solides sur GitHub. L'apprentissage continue en emploi.</p>
        </div>
        <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
          <h3 className='font-bold'>Ignorer le réseau</h3>
          <p>LinkedIn, meetups tech, communautés Discord : beaucoup de postes juniors ne sont pas publiés. Faire partie d'une communauté accélère considérablement la recherche d'emploi.</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between sm:mx-10 sm:my-16 font-sans gap-10'>
        <div className='lg:w-2/3'>
          <p>
            Tu envisages une reconversion vers le dev web mais tu n'es pas sûr que c'est fait pour toi ? <Link href="/test" className='underline font-semibold'>Passe le test d'orientation Jobmi</Link> — il t'aidera à confirmer si le profil "tech" te correspond avant d'investir des mois de formation.
          </p>
        </div>
        <div className='lg:w-1/3 flex items-center'>
          <Link href="/test" className='flex gap-2 font-semibold underline'>
            Tester mon profil tech
            <img className='sm:ml-2 w-5' src="/media/blog-CTA-fleche.svg" alt="Flèche" />
          </Link>
        </div>
      </div>

    </div>
  )
}
