# Jobmi-MVP

## Variables d'environnement

### API Apprentissage

```bash
APPRENTISSAGE_API_KEY=
APPRENTISSAGE_API_BASE_URL=https://api.apprentissage.beta.gouv.fr/api
```

### APIs France Travail

Les APIs France Travail doivent rester appelees cote serveur. Les routes internes Jobmi
renvoient des fallbacks utiles si ces variables ne sont pas encore configurees.

```bash
FRANCE_TRAVAIL_CLIENT_ID=
FRANCE_TRAVAIL_CLIENT_SECRET=
FRANCE_TRAVAIL_SCOPE=OFFRES ANOTEA
FRANCE_TRAVAIL_TOKEN_URL=https://entreprise.francetravail.fr/connexion/oauth2/access_token?realm=/partenaire
FRANCE_TRAVAIL_API_BASE_URL=https://api.francetravail.io

# Optionnel : surcharger les chemins exacts selon les habilitations France Travail.
FRANCE_TRAVAIL_ROME_SEARCH_PATH=
FRANCE_TRAVAIL_ROME_JOB_SHEET_PATH=
FRANCE_TRAVAIL_ROMEO_PATH=
FRANCE_TRAVAIL_OFFERS_PATH=
FRANCE_TRAVAIL_EVENTS_PATH=
FRANCE_TRAVAIL_LA_BONNE_BOITE_PATH=
FRANCE_TRAVAIL_LABOR_MARKET_PATH=
FRANCE_TRAVAIL_ANOTEA_PATH=
```

`FRANCE_TRAVAIL_SCOPE` est generalement requis par France Travail. Jobmi accepte l'alias
`OFFRES`, qui correspond a `api_offresdemploiv2 o2dsoffre`, et l'alias `ANOTEA`, qui correspond
a `api_anoteav1`. Les autres APIs conservees dans Jobmi n'ajoutent pas de scope dedie dans
la configuration actuelle ; elles utilisent le meme token serveur et leurs chemins exacts peuvent
etre ajustes avec les variables optionnelles ci-dessus.

Pour verifier la configuration sans exposer les secrets :

```bash
curl http://localhost:3000/api/france-travail/status
```
 
