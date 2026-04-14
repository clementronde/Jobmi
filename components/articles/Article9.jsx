import Link from 'next/link'

export const Article9 = () => {
  return (
    <div className='sm:mx-5 mx-1'>

      <div className='flex flex-col items-center mx-auto my-10 font-sans max-w-[900px]'>
        <div className='flex flex-col md:flex-row items-start gap-4'>
          <p className='font-bold whitespace-nowrap'>Alternance ou formation continue :</p>
          <p className='text-justify'>
            À 22 ans, face à une reconversion, beaucoup hésitent entre l'alternance (se former en travaillant) et la formation continue (se former à plein temps). Les deux ont des avantages réels — et le bon choix dépend de ta situation personnelle. Voici comment décider.
          </p>
        </div>
      </div>

      <div className='font-sans mx-auto sm:mx-20'>
        <h2 className='font-bold text-2xl'>Deux chemins, deux logiques différentes</h2>
        <p className='mt-4'>
          L'alternance et la formation continue ne s'opposent pas — elles répondent à des besoins différents. L'alternance te permet de rester dans le monde du travail tout en apprenant. La formation continue te donne le temps de te former intensément. Aucune n'est universellement meilleure.
        </p>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px] relative'>
        <img className='absolute top-0 -right-10 w-16' src="/media/arrow-blog-h2.svg" alt="Flèche" />
        <h2 className='text-4xl font-bold text-center'>
          L'alternance — avantages et limites
        </h2>
      </div>

      <div className='font-sans sm:mx-20 space-y-4'>
        <h3 className='font-bold text-xl'>Les avantages</h3>
        <div className='space-y-3'>
          <div className='bg-green-50 border border-green-200 p-4 rounded-lg'>
            <p><strong>Tu es payé pendant ta formation.</strong> Entre 27 % et 100 % du SMIC selon ton âge et niveau. À 22 ans, tu peux toucher jusqu'à 1 700 €/mois brut en apprentissage.</p>
          </div>
          <div className='bg-green-50 border border-green-200 p-4 rounded-lg'>
            <p><strong>Expérience terrain immédiate.</strong> Tu apprends la théorie en cours et tu la pratiques en entreprise. Les employeurs valorisent énormément ce profil à la fin de la formation.</p>
          </div>
          <div className='bg-green-50 border border-green-200 p-4 rounded-lg'>
            <p><strong>Réseau professionnel.</strong> 2 ans en entreprise = des contacts, une réputation, et souvent une embauche directe à la fin du contrat.</p>
          </div>
          <div className='bg-green-50 border border-green-200 p-4 rounded-lg'>
            <p><strong>Zéro frais de scolarité.</strong> L'entreprise et l'OPCO financent ta formation intégralement.</p>
          </div>
        </div>

        <h3 className='font-bold text-xl mt-8'>Les limites</h3>
        <div className='space-y-3'>
          <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
            <p><strong>Trouver une entreprise est nécessaire.</strong> Sans employeur, pas d'alternance. Ça prend du temps et peut être décourageant.</p>
          </div>
          <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
            <p><strong>Rythme soutenu.</strong> Cours + travail = peu de temps libre. L'alternance demande une bonne organisation.</p>
          </div>
          <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
            <p><strong>Formation souvent longue.</strong> Minimum 1 an, souvent 2 ans. Si tu veux aller vite, ce n'est pas l'option la plus rapide.</p>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          La formation continue — avantages et limites
        </h2>
        <span>
          <img className='sm:w-[450px] w-[250px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 space-y-4'>
        <h3 className='font-bold text-xl'>Les avantages</h3>
        <div className='space-y-3'>
          <div className='bg-green-50 border border-green-200 p-4 rounded-lg'>
            <p><strong>Formation intensifiée.</strong> À plein temps, tu vas plus vite. Un bootcamp dev web de 3 mois full-time vaut souvent un BTS informatique en qualité d'employabilité.</p>
          </div>
          <div className='bg-green-50 border border-green-200 p-4 rounded-lg'>
            <p><strong>Choix large.</strong> N'importe quelle formation est accessible, y compris celles qui n'existent pas en alternance.</p>
          </div>
          <div className='bg-green-50 border border-green-200 p-4 rounded-lg'>
            <p><strong>Concentration totale.</strong> Tu n'es pas divisé entre cours et entreprise. Certaines personnes apprennent bien mieux en mode immersif.</p>
          </div>
        </div>

        <h3 className='font-bold text-xl mt-8'>Les limites</h3>
        <div className='space-y-3'>
          <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
            <p><strong>Souvent à financer.</strong> Même avec le CPF ou France Travail, il peut y avoir un reste à charge. Et sans revenus pendant la formation, les contraintes financières sont réelles.</p>
          </div>
          <div className='bg-red-50 border border-red-200 p-4 rounded-lg'>
            <p><strong>Moins d'expérience terrain.</strong> Tu sors avec un diplôme mais sans réseau ni pratique en entreprise. Le marché le voit.</p>
          </div>
        </div>
      </div>

      <div className='font-sans my-10 sm:py-20 py-2 mx-auto max-w-[700px]'>
        <h2 className='text-4xl font-bold text-center'>
          Comment choisir selon ta situation ?
        </h2>
        <span>
          <img className='sm:w-[400px] w-[200px] mx-auto' src="/media/trait-article-titre-h2.svg" alt="Trait" />
        </span>
      </div>

      <div className='font-sans sm:mx-20 space-y-4'>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Tu as besoin d'argent dès maintenant ?</h3>
          <p>→ <strong>Alternance.</strong> Tu es payé dès le premier mois.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Tu veux changer de secteur le plus vite possible ?</h3>
          <p>→ <strong>Formation continue intensive</strong> (bootcamp 3-6 mois) financée par France Travail ou CPF.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Tu veux un diplôme reconnu et du réseau ?</h3>
          <p>→ <strong>Alternance</strong> dans une école ou un CFA. Tu sors avec diplôme + expérience + contacts.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Tu ne sais pas encore exactement quel métier viser ?</h3>
          <p>→ Commence par <Link href="/test" className='underline font-semibold'>le test d'orientation Jobmi</Link>, puis décide du format de formation en fonction du secteur choisi.</p>
        </div>
        <div className='bg-gray-100 p-4 rounded-lg'>
          <h3 className='font-bold'>Tu es demandeur d'emploi ?</h3>
          <p>→ <strong>Formation continue financée par France Travail</strong>. Les dossiers sont prioritaires et la prise en charge souvent totale.</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-between sm:mx-10 sm:my-16 font-sans gap-10'>
        <div className='lg:w-2/3'>
          <p>
            Quel que soit ton choix, la première étape est de savoir vers quel métier tu te diriges. <Link href="/test" className='underline font-semibold'>Passe le test d'orientation Jobmi</Link> et identifie les métiers qui correspondent à ton profil — ensuite, le format de formation (alternance ou continue) s'imposera naturellement.
          </p>
        </div>
        <div className='lg:w-1/3 flex items-center'>
          <Link href="/stage-et-formation" className='flex gap-2 font-semibold underline'>
            Voir les formations dispo
            <img className='sm:ml-2 w-5' src="/media/blog-CTA-fleche.svg" alt="Flèche" />
          </Link>
        </div>
      </div>

    </div>
  )
}
