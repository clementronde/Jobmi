import React from 'react'
import Link from 'next/link';

export const Article3 = () => {
  return (
    <div className='sm:mx-5 mx-1'>
      <div className='sm:mx-20'>
        <img src="/media/intro-article-3.svg" alt="Bannière pour l'article 3" className='w-full h-auto' />
      </div>

      <div className='mx-auto my-8 max-w-3xl rounded-2xl bg-[#F8F7FF] p-6 font-sans text-base leading-8 text-[#465160]'>
        <p>
          Ces 10 métiers ont un point commun : une forte demande et un quotidien concret, pas juste un nom qui sonne bien sur LinkedIn. Pour chacun, tu trouveras une fourchette de salaire junior à titre indicatif, la voie d&apos;accès la plus réaliste, et le revers de la médaille — parce qu&apos;un métier sans contrainte n&apos;existe pas.
        </p>
      </div>

      {/* 1. Développeur VR */}
      <div className='font-sans my-10 sm:mx-20 p-5 flex flex-col gap-5'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          1. Développeur en réalité virtuelle
        </h2>
        <img className='h-auto w-full max-w-[500px] object-cover' src="/media/developpeur-realite-virtuel.svg" alt="Illustration d'un développeur en réalité virtuelle" />
        <p className='leading-8 text-[#465160]'>
          Il conçoit des environnements 3D interactifs sur Unity ou Unreal Engine, pour des jeux, de la formation ou de la visualisation industrielle. Le quotidien mêle code, optimisation de performances et allers-retours avec les designers.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Salaire junior (indicatif)</h3>
            <p>Environ 32 000 à 38 000&nbsp;€ brut/an, très variable selon la région et le secteur (jeu vidéo vs industrie).</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Comment y accéder</h3>
            <p>École d&apos;ingénieur ou de jeu vidéo (bac+3 à bac+5), ou autodidaxie solide avec un portfolio de projets Unity/Unreal — le portfolio compte souvent plus que le diplôme.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Le revers de la médaille</h3>
            <p>Marché encore petit en France hors grandes villes, et fortement dépendant des cycles de financement des studios de jeu.</p>
          </div>
        </div>
      </div>

      {/* 2. Spécialiste en cybersécurité */}
      <div className='font-sans my-10 sm:mx-20 p-5 flex flex-col gap-5'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          2. Spécialiste en cybersécurité
        </h2>
        <img src="/media/specialiste-en-cybersecurite.svg" alt="Illustration d'un spécialiste en cybersécurité" className='h-auto w-full max-w-[500px] object-cover' />
        <p className='leading-8 text-[#465160]'>
          Analyste SOC, pentester ou consultant sécurité : le métier protège les systèmes contre les intrusions, audite les vulnérabilités et intervient en urgence en cas d&apos;incident. Une veille technique quasi quotidienne est indispensable.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Salaire junior (indicatif)</h3>
            <p>Environ 35 000 à 42 000&nbsp;€ brut/an, l&apos;un des secteurs tech où la pénurie de profils tire les salaires vers le haut.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Comment y accéder</h3>
            <p>BTS ou BUT informatique/réseaux, école d&apos;ingénieur spécialisée, ou certifications reconnues (CEH, CompTIA Security+) après une première expérience en administration réseau.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Le revers de la médaille</h3>
            <p>Astreintes fréquentes et gestion d&apos;incidents sous pression, parfois en dehors des horaires classiques.</p>
          </div>
        </div>
      </div>

      {/* 3. Ingénieur en énergie renouvelable */}
      <div className='font-sans my-10 sm:mx-20 p-5 flex flex-col gap-5'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          3. Ingénieur en énergie renouvelable
        </h2>
        <img src="/media/ingenieur-en-energie-renouvable.svg" alt="Illustration d'un ingénieur en énergie renouvelable" className='h-auto w-full max-w-[500px] object-cover' />
        <p className='leading-8 text-[#465160]'>
          Il conçoit, dimensionne et suit des installations solaires, éoliennes ou biomasse, en évaluant leur impact technique, économique et environnemental. Le poste implique souvent des déplacements sur site.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Salaire junior (indicatif)</h3>
            <p>Environ 34 000 à 40 000&nbsp;€ brut/an, secteur en croissance porté par la transition énergétique.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Comment y accéder</h3>
            <p>École d&apos;ingénieur généraliste ou spécialisée énergie (bac+5), ou BUT génie thermique/électrique complété par une spécialisation.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Le revers de la médaille</h3>
            <p>Beaucoup de déplacements terrain et des délais de projet longs, dépendants des autorisations administratives.</p>
          </div>
        </div>
      </div>

      {/* 4. UX/UI Designer */}
      <div className='font-sans my-10 sm:mx-20 p-5 flex flex-col gap-5'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          4. UX/UI Designer
        </h2>
        <img className='h-auto w-full max-w-[500px] object-cover' src="/media/ux-ui-designer.svg" alt="Illustration d'un UI/UX designer" />
        <p className='leading-8 text-[#465160]'>
          Il conçoit l&apos;interface et l&apos;expérience d&apos;une application ou d&apos;un site : recherche utilisateur, maquettes, prototypes, puis tests pour ajuster ce qui ne fonctionne pas. Un métier à la croisée du graphisme et de la psychologie.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Salaire junior (indicatif)</h3>
            <p>Environ 30 000 à 36 000&nbsp;€ brut/an, avec de fortes disparités entre agence, start-up et grand groupe.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Comment y accéder</h3>
            <p>École de design, formation courte spécialisée (souvent 6 à 12 mois) ou reconversion via un bootcamp — un portfolio de projets réels reste déterminant à l&apos;embauche.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Le revers de la médaille</h3>
            <p>Le design final est souvent contraint par des choix produit ou techniques déjà décidés en amont, ce qui limite parfois la créativité réelle.</p>
          </div>
        </div>
      </div>

      {/* 5. Data Scientist */}
      <div className='font-sans my-10 sm:mx-20 p-5 flex flex-col gap-5'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          5. Data Scientist
        </h2>
        <img className='h-auto w-full max-w-[500px] object-cover' src="/media/data-scientist.svg" alt="Illustration d'un data scientist" />
        <p className='leading-8 text-[#465160]'>
          Il analyse de gros volumes de données pour repérer des tendances utiles à la décision, avec du machine learning, des statistiques et beaucoup de nettoyage de données en amont — souvent la partie la moins visible mais la plus chronophage du métier.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Salaire junior (indicatif)</h3>
            <p>Environ 38 000 à 45 000&nbsp;€ brut/an, l&apos;un des métiers tech les mieux rémunérés dès la sortie d&apos;école.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Comment y accéder</h3>
            <p>Master en data science, école d&apos;ingénieur ou double cursus maths/informatique (bac+5) — un niveau de maths solide reste un prérequis quasi systématique.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Le revers de la médaille</h3>
            <p>Le travail réel est souvent 70 % de préparation et nettoyage de données pour 30 % de modélisation, à l&apos;inverse de l&apos;image « algorithmes en continu ».</p>
          </div>
        </div>
      </div>

      {/* 6. Spécialiste en IA */}
      <div className='font-sans my-10 sm:mx-20 p-5 flex flex-col gap-5'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          6. Ingénieur en intelligence artificielle
        </h2>
        <p className='leading-8 text-[#465160]'>
          Il conçoit et entraîne des modèles de machine learning ou de traitement du langage, pour automatiser des tâches ou générer des prédictions. Le poste demande de solides bases en mathématiques et une veille constante, tant le domaine évolue vite.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Salaire junior (indicatif)</h3>
            <p>Environ 40 000 à 48 000&nbsp;€ brut/an, tiré vers le haut par une pénurie de profils qualifiés sur ce créneau précis.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Comment y accéder</h3>
            <p>École d&apos;ingénieur ou master spécialisé en IA/ML (bac+5), avec souvent un stage de fin d&apos;études déterminant pour la première embauche.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Le revers de la médaille</h3>
            <p>Domaine qui évolue si vite que les compétences acquises en formation sont parfois déjà partiellement dépassées à la sortie.</p>
          </div>
        </div>
      </div>

      {/* 7. Chef de Projet Développement Durable */}
      <div className='font-sans my-10 sm:mx-20 p-5 flex flex-col gap-5'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          7. Chef de Projet en Développement Durable
        </h2>
        <img className='h-auto w-full max-w-[500px] object-cover' src="/media/chef-de-projet-developpement-durable.svg" alt="Illustration d'un chef de projet en développement durable" />
        <p className='leading-8 text-[#465160]'>
          Il pilote des initiatives RSE ou environnementales au sein d&apos;une entreprise : réduction de l&apos;empreinte carbone, reporting extra-financier, sensibilisation des équipes. Un rôle transversal, souvent au carrefour de plusieurs services.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Salaire junior (indicatif)</h3>
            <p>Environ 32 000 à 38 000&nbsp;€ brut/an, en forte progression avec les nouvelles obligations réglementaires de reporting RSE.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Comment y accéder</h3>
            <p>Master RSE/développement durable, école de commerce ou d&apos;ingénieur avec spécialisation environnementale (bac+5).</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Le revers de la médaille</h3>
            <p>Le poste manque parfois de pouvoir de décision réel : proposer des solutions est une chose, les faire adopter par une direction en est une autre.</p>
          </div>
        </div>
      </div>

      {/* 8. Ingénieur en Robotique */}
      <div className='font-sans my-10 sm:mx-20 p-5 flex flex-col gap-5'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          8. Ingénieur en Robotique
        </h2>
        <img src="/media/ingenieur-en-robotique.svg" alt="Illustration d'un ingénieur en robotique" className='h-auto w-full max-w-[500px] object-cover' />
        <p className='leading-8 text-[#465160]'>
          Il conçoit et teste des robots pour l&apos;industrie, la santé ou le grand public, en intégrant mécanique, électronique et logiciel. Un métier qui demande de la polyvalence technique et beaucoup de tests physiques en amont de la mise en production.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Salaire junior (indicatif)</h3>
            <p>Environ 35 000 à 42 000&nbsp;€ brut/an, plus élevé dans l&apos;automobile et l&apos;aéronautique que dans les petites structures.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Comment y accéder</h3>
            <p>École d&apos;ingénieur en mécatronique ou robotique (bac+5), parfois précédée d&apos;un BUT génie mécanique ou électrique.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Le revers de la médaille</h3>
            <p>Les cycles de développement sont longs (souvent plusieurs années entre le prototype et la mise en production), ce qui demande de la patience.</p>
          </div>
        </div>
      </div>

      {/* 9. Consultant en Transformation Numérique */}
      <div className='font-sans my-10 sm:mx-20 p-5 flex flex-col gap-5'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          9. Consultant en Transformation Numérique
        </h2>
        <p className='leading-8 text-[#465160]'>
          Il accompagne une entreprise dans l&apos;adoption de nouveaux outils ou processus digitaux : diagnostic de l&apos;existant, recommandations, puis suivi du déploiement avec les équipes concernées.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Salaire junior (indicatif)</h3>
            <p>Environ 35 000 à 42 000&nbsp;€ brut/an, avec une progression rapide en cabinet de conseil pour les profils performants.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Comment y accéder</h3>
            <p>École de commerce ou d&apos;ingénieur (bac+5), la plupart des cabinets recrutent en sortie d&apos;école plutôt que par reconversion directe.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Le revers de la médaille</h3>
            <p>Déplacements fréquents chez les clients et rythme de travail soutenu, en particulier dans les grands cabinets de conseil.</p>
          </div>
        </div>
      </div>

      {/* 10. Coach en Développement Personnel */}
      <div className='font-sans my-10 sm:mx-20 p-5 flex flex-col gap-5'>
        <h2 className='text-3xl sm:text-left text-center font-bold uppercase'>
          10. Coach en Développement Personnel
        </h2>
        <p className='leading-8 text-[#465160]'>
          Il accompagne des particuliers ou des salariés vers des objectifs personnels ou professionnels, avec des techniques de coaching et d&apos;écoute active. Le métier s&apos;exerce très souvent en indépendant.
        </p>
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Revenus (indicatif)</h3>
            <p>Très variables : peu de coachs vivent uniquement de cette activité au démarrage, la plupart la cumulent avec un autre poste pendant 1 à 3 ans.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Comment y accéder</h3>
            <p>Certification reconnue (RNCP) via un organisme de formation, mais aucun diplôme n&apos;est légalement obligatoire — ce qui rend la crédibilité personnelle d&apos;autant plus importante.</p>
          </div>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h3 className='font-bold'>Le revers de la médaille</h3>
            <p>Marché peu régulé et concurrentiel : trouver ses premiers clients prend généralement plus de temps que prévu.</p>
          </div>
        </div>
      </div>

      <div className='font-sans sm:mx-20 my-12 bg-[#F8F7FF] border border-[#E9E1FF] rounded-2xl p-8'>
        <h2 className='font-bold text-xl text-[#04192F] mb-5'>Pour aller plus loin</h2>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href="/tester-un-metier" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Tester un de ces métiers en vrai</p>
            <p className='text-xs text-gray-500 mt-1'>Ateliers, stages, immersions : découvre un métier avant de t&apos;y engager.</p>
          </Link>
          <Link href="/stage-et-formation" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Stages et formations disponibles</p>
            <p className='text-xs text-gray-500 mt-1'>Toutes les offres par secteur pour te lancer concrètement.</p>
          </Link>
          <Link href="/test" className='flex-1 bg-white border border-gray-100 rounded-xl p-5 hover:border-[#6500FF] transition group'>
            <p className='font-bold text-[#04192F] group-hover:text-[#6500FF] transition text-sm'>Test d&apos;orientation gratuit</p>
            <p className='text-xs text-gray-500 mt-1'>Tu ne sais pas lequel de ces métiers te correspond ? Le test t&apos;aide à y voir clair.</p>
          </Link>
        </div>
      </div>

    </div>
  )
}
