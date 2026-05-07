# Roadmap API France Travail & referentiels metiers pour Jobmi

## Objectif produit

Faire en sorte qu'apres le test Jobmi, l'utilisateur ne voie jamais une page vide, mais un plan d'action concret pour tester un metier dans la vraie vie.

Les APIs ne doivent pas etre presentees comme des briques separees. Elles doivent alimenter un parcours lisible :

1. Comprendre le profil de l'utilisateur.
2. Traduire ce profil en competences et metiers reels.
3. Expliquer le quotidien du metier.
4. Proposer des actions concretes : offres, entreprises, formations.
5. Aider a decider avec des donnees de confiance : avis formation et sources officielles.

## Etat actuel du repo

- Le test RIASEC existe deja et recommande des metiers internes via `data/riasecData.ts` et `services/riasecService.ts`.
- Les resultats du test affichent deja des familles de metiers, des metiers recommandes et des liens vers `/tester-un-metier` et `/stage-et-formation`.
- Les pages `tester-metier/[slug]` sont statiques et limitees a quelques fiches editoriales.
- La page `/stage-et-formation` integre deja l'API Apprentissage pour les alternances et formations.
- La carte orientation/evenements reste statique pour le moment et n'entre pas dans le MVP API actif.

## Avancement implementation

- [x] Roadmap creee dans `docs/ROADMAP-APIS.md`.
- [x] Couche serveur `lib/franceTravail/` initialisee avec client OAuth configurable, types, normalisation et fallbacks locaux.
- [x] Routes internes creees pour ROME, offres, evenements, entreprises, marche et avis formation.
- [x] Mapping local initial entre metiers RIASEC visibles et codes ROME.
- [x] Resultats du test enrichis avec code ROME, competences reperees et premier plan d'action.
- [x] Apercu dynamique offres / evenements / entreprises / formations ajoute dans le plan d'action du test.
- [x] Route `/api/france-travail/status` ajoutee pour diagnostiquer la configuration OAuth sans exposer les secrets.
- [x] Fiches `tester-metier` enrichies avec competences et contextes ROME locaux.
- [x] Renseigner `FRANCE_TRAVAIL_SCOPE` avec `OFFRES ANOTEA`.
- [ ] Brancher les vrais chemins France Travail exacts une fois les scopes/habilitations confirmes.

## Principes techniques

- Toutes les APIs externes passent par le serveur Next.js ou des fonctions serveur.
- Aucun jeton France Travail ne doit etre expose au navigateur.
- Les composants UI ne consomment jamais les reponses brutes des APIs externes.
- Chaque API doit etre normalisee dans des types Jobmi stables.
- Les pages SEO doivent rester editoriales. Les offres expirables restent dans des blocs dynamiques.
- En cas d'API indisponible, l'interface doit afficher une alternative utile, pas une erreur brute.

## Variables d'environnement a prevoir

```bash
FRANCE_TRAVAIL_CLIENT_ID=
FRANCE_TRAVAIL_CLIENT_SECRET=
FRANCE_TRAVAIL_SCOPE=OFFRES ANOTEA
FRANCE_TRAVAIL_TOKEN_URL=
FRANCE_TRAVAIL_API_BASE_URL=
```

`OFFRES` est un alias Jobmi pour `api_offresdemploiv2 o2dsoffre`.
`ANOTEA` est un alias Jobmi pour `api_anoteav1`.
Les autres APIs conservees dans le parcours ne necessitent pas de scope dedie dans la
configuration actuelle ; elles utilisent le meme token serveur et leurs chemins exacts peuvent
etre ajustes via les variables `FRANCE_TRAVAIL_*_PATH`.
Sans scope, le token OAuth peut retourner `FRANCE_TRAVAIL_TOKEN_ERROR_400`.

## Architecture cible

### Couche serveur France Travail

Creer `lib/franceTravail/` avec :

- `client.ts` : client HTTP commun, gestion du token OAuth, cache memoire du token, headers, erreurs.
- `types.ts` : types normalises Jobmi.
- `rome.ts` : ROME metiers, fiches metiers, competences, contextes de travail, ROMEO.
- `opportunities.ts` : offres d'emploi.
- `companies.ts` : La Bonne Boite.
- `training.ts` : Anotea et indicateurs de confiance formation.
- `normalizers.ts` : fonctions de transformation depuis les payloads externes.

### Routes internes recommandees

- `/api/france-travail/rome/search`
- `/api/france-travail/rome/job/[code]`
- `/api/france-travail/opportunities`
- `/api/france-travail/companies`
- `/api/france-travail/training-reviews`

Les routes doivent retourner uniquement des objets normalises Jobmi.

### Types normalises minimaux

```ts
type JobmiRomeJob = {
  code: string;
  label: string;
  slug: string;
  description: string;
  mappingStatus: 'mapped' | 'mapping_missing';
};

type JobmiRomeSkill = {
  id: string;
  label: string;
  category: 'savoir' | 'savoir-faire' | 'savoir-etre' | 'other';
};

type JobmiRomeWorkContext = {
  id: string;
  label: string;
  kind: 'environment' | 'constraint' | 'rhythm' | 'relation' | 'mobility' | 'other';
};

type JobmiRomeJobSheet = {
  job: JobmiRomeJob;
  summary: string;
  activities: string[];
  skills: JobmiRomeSkill[];
  workContexts: JobmiRomeWorkContext[];
  relatedJobs: JobmiRomeJob[];
};
```

## MVP 1 - Base metier intelligente

### Objectif

Relier Jobmi a un referentiel metier officiel pour rendre le test plus credible et les fiches metiers plus riches.

### APIs prioritaires

- ROME Metiers
- ROME Fiches metiers
- ROME Competences
- ROME Contextes de travail
- ROMEO

### Taches produit

- Mapper progressivement les metiers internes RIASEC vers des codes ROME.
- Ajouter un statut visible cote donnees : `mapped` ou `mapping_missing`.
- Afficher dans les resultats du test les competences dominantes associees au profil.
- Ajouter une zone d'affinage texte libre : "Decris ce que tu aimes faire".
- Utiliser ROMEO pour rapprocher ce texte de metiers et competences ROME.
- Enrichir les fiches metiers avec :
  - resume simple ;
  - missions principales ;
  - competences ;
  - quotidien ;
  - contraintes ;
  - metiers proches ;
  - pistes pour tester.

### Taches techniques

- Creer le client France Travail serveur.
- Ajouter la gestion OAuth avec cache du token.
- Ajouter les types normalises ROME.
- Ajouter les normalizers ROME.
- Ajouter une table de mapping interne `jobmiJobId -> codeROME`.
- Ajouter des fonctions serveur :
  - rechercher metier ROME ;
  - recuperer fiche metier ;
  - recuperer competences ;
  - recuperer contextes ;
  - appeler ROMEO.
- Adapter le pipeline RIASEC pour joindre les metiers internes a leurs codes ROME.

### Criteres d'acceptation

- Chaque metier recommande a un code ROME ou un statut `mapping_missing`.
- Les resultats du test affichent au moins 3 competences lisibles quand le mapping existe.
- Les fiches metiers ne copient pas la fiche ROME brute : elles restent reformulees avec le ton Jobmi.
- En cas d'API indisponible, les resultats actuels RIASEC restent utilisables.

## MVP 2 - Actions concretes

### Objectif

Donner a l'utilisateur quelque chose a faire apres un resultat : postuler, contacter, explorer une formation.

### APIs prioritaires

- Offres d'emploi v2
- La Bonne Boite v2

### Taches produit

- Ajouter un bloc "Passer a l'action" dans les resultats du test.
- Ajouter le meme bloc sur les fiches metiers.
- Pour un metier et une localisation, afficher :
  - offres disponibles ;
  - offres debutant ou junior quand possible ;
  - alternances et stages quand disponibles ;
  - entreprises a contacter via La Bonne Boite.
- Ajouter des CTA actionnables :
  - "Voir les offres pres de moi" ;
  - "Contacter des entreprises" ;
  - "Explorer les formations".

### Taches techniques

- Normaliser les offres France Travail en un type `JobmiOpportunity`.
- Normaliser La Bonne Boite en un type `JobmiCompanyLead`.
- Ajouter les routes internes serveur :
  - `/api/france-travail/opportunities`
  - `/api/france-travail/companies`
- Ajouter des filtres communs :
  - code ROME ;
  - localisation ;
  - rayon ;
  - type de contrat quand disponible ;
  - niveau debutant quand disponible.
- Dedoublonner les donnees entre API Apprentissage et France Travail quand une meme offre apparait dans plusieurs sources.

### Criteres d'acceptation

- Depuis un metier recommande, l'utilisateur peut acceder a au moins une action concrete.
- Si aucune offre n'est disponible, Jobmi propose des entreprises ou formations a comparer.
- Si aucune action locale n'est disponible, Jobmi propose d'elargir la zone ou de regarder les metiers proches.
- Les offres expirables ne generent pas de pages SEO indexables.

## MVP 3 - Formation et fiabilite

### Objectif

Aider l'utilisateur a choisir une formation avec des signaux de confiance lisibles.

### APIs prioritaires

- Anotea v1

### Taches produit

- Enrichir les cartes formation avec :
  - note Anotea ;
  - nombre d'avis ;
  - satisfaction globale ;
  - localisation ;
  - duree ;
  - format ;
  - lien officiel.
- Ajouter un comparateur simple : "ca me correspond" et "formation fiable".

### Taches techniques

- Normaliser Anotea en `JobmiTrainingReview`.
- Relier les donnees formation au code ROME, RNCP, organisme ou zone geographique selon les possibilites des APIs.
- Ajouter les routes internes :
  - `/api/france-travail/training-reviews`.

### Criteres d'acceptation

- Une formation peut etre comparee sur confiance, pas seulement sur son intitule.
- Les donnees incertaines sont presentees comme des indicateurs, jamais comme des garanties.

## Parcours utilisateur cible

### Apres le test

L'utilisateur voit :

1. Son profil RIASEC.
2. Ses competences dominantes.
3. Les metiers recommandes lies a des codes ROME.
4. Pour chaque metier :
   - compatibilite profil ;
   - competences ;
   - quotidien ;
   - contraintes ;
   - actions disponibles.

### Sur une fiche metier

Structure cible :

1. Presentation Jobmi du metier.
2. Missions principales.
3. Competences ROME.
4. Contextes de travail.
5. "Est-ce fait pour toi ?"
6. Tester ce metier : entreprises, offres.
7. Se former : formations et avis.

### Sur `/stage-et-formation`

Evolution cible :

- Garder l'integration API Apprentissage existante.
- Ajouter les avis formation quand disponibles.
- Ajouter un mode "formations fiables pour ce metier".
- Ajouter un lien depuis chaque formation vers les actions possibles : offres et entreprises.

## Backlog detaille

### P0 - Preparation

- [ ] Documenter les variables d'environnement France Travail dans `.env.example` si le fichier existe, sinon dans le README.
- [ ] Verifier les scopes France Travail disponibles dans le compte developpeur.
- [ ] Lister les endpoints exacts et leurs contraintes de quotas.
- [ ] Definir les types normalises dans `lib/franceTravail/types.ts`.
- [ ] Creer le client serveur France Travail.

### P1 - ROME et mapping metiers

- [ ] Ajouter une table de mapping pour les metiers internes Jobmi.
- [ ] Mapper en priorite les metiers deja visibles dans les resultats RIASEC.
- [ ] Ajouter un rapport simple des metiers non mappes.
- [ ] Creer une fonction `getRomeJobForJobmiJob(jobId)`.
- [ ] Ajouter les competences ROME dans les resultats du test.
- [ ] Ajouter les contextes de travail sur les fiches metiers.

### P1 - ROMEO

- [ ] Ajouter un champ texte libre dans les resultats du test.
- [ ] Envoyer le texte au serveur.
- [ ] Normaliser les suggestions ROMEO.
- [ ] Afficher les metiers/competences suggeres comme "pistes a explorer", pas comme resultat definitif.

### P2 - Opportunites

- [ ] Ajouter les offres France Travail sur les fiches metiers.
- [ ] Ajouter les entreprises La Bonne Boite dans un bloc "Entreprises a contacter".
- [ ] Ajouter les fallbacks si aucune opportunite n'est disponible.
- [ ] Dedoublonner avec les offres d'alternance deja issues de l'API Apprentissage.

### P2 - Formation et confiance

- [ ] Ajouter Anotea aux cartes formation.
- [ ] Ajouter un indicateur "a verifier" quand la donnee est absente.
- [ ] Eviter tout score global trompeur si les donnees sont incompletes.

## Tests et validation

### Tests unitaires

- [ ] Mapping metier interne vers code ROME.
- [ ] Normalisation ROME metiers.
- [ ] Normalisation ROME competences.
- [ ] Normalisation contextes de travail.
- [ ] Normalisation offres emploi.
- [ ] Normalisation La Bonne Boite.
- [ ] Normalisation Anotea.
- [ ] Fallback si API indisponible.

### Tests integration serveur

- [ ] Token France Travail absent.
- [ ] Token France Travail invalide.
- [ ] Cache token expire.
- [ ] Erreur 401.
- [ ] Erreur 403.
- [ ] Erreur 429.
- [ ] Erreur 500.
- [ ] Reponse vide.

### Tests UX manuels

- [ ] Resultat test avec metier mappe.
- [ ] Resultat test avec metier non mappe.
- [ ] Fiche metier avec competences et contextes.
- [ ] Fiche metier avec offres.
- [ ] Fiche metier sans offres mais avec entreprises.
- [ ] Fiche metier sans donnees locales.
- [ ] Formation avec avis Anotea ou fallback prudent.
- [ ] Mobile sur resultats test.
- [ ] Mobile sur fiche metier.
- [ ] Mobile sur `/stage-et-formation`.

### Validation technique

```bash
npx tsc --noEmit
npm run build
```

## Risques et precautions

- Les offres expirent vite : ne pas les transformer en pages SEO permanentes.
- Les fiches ROME ne doivent pas etre copiees telles quelles : garder une reformulation Jobmi.
- Les APIs peuvent avoir des quotas : prevoir cache et pagination limitee.
- Les jeunes ne doivent pas etre enfermes dans un resultat : toujours presenter les metiers comme des pistes.

## Definition of done globale

- Le parcours test -> metier -> action concrete fonctionne sans page vide.
- Les donnees externes sont normalisees et servies uniquement cote serveur.
- Les fallbacks sont utiles et comprehensibles.
- Le build Next passe.
- Les contenus restent alignes avec le ton Jobmi : concret, rassurant, sans promesse d'emploi garanti.
