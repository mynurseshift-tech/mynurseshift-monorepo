# MyNurseShift - Plateforme de Gestion des Shifts pour Infirmiers

## Vue d'ensemble

MyNurseShift est une plateforme complète de gestion des shifts pour les infirmiers, composée de trois applications principales :

1. **Webapp** (`apps/mynurseshift-webapp`) - Interface principale pour les infirmiers et superviseurs
2. **Back-office** (`apps/mynurseshift-backoffice`) - Interface d'administration
3. **API** (`../mynurseshift-api`) - Backend GraphQL/REST

## Structure du Projet

```
mynurseshift-tech/
├── mynurseshift-monorepo/      # Monorepo Frontend
│   ├── apps/
│   │   ├── mynurseshift-webapp/     # Application principale
│   │   └── mynurseshift-backoffice/ # Interface d'administration
│   └── libs/
│       ├── core/                    # Logique métier partagée
│       └── shared/
│           └── ui/                  # Composants UI partagés
│
└── mynurseshift-api/          # Backend API
    ├── src/
    │   ├── controllers/       # Contrôleurs REST
    │   ├── schema/           # Schémas GraphQL
    │   ├── services/         # Services métier
    │   └── routes/           # Routes REST
    └── prisma/               # Schémas et migrations Prisma
```

## Bibliothèques Partagées

- **@mynurseshift/core** : Logique métier, hooks, et utilitaires partagés
- **@mynurseshift/ui** : Composants UI réutilisables basés sur shadcn/ui

## Démarrage Rapide

1. Installation des dépendances Frontend :
```bash
cd mynurseshift-monorepo
npm install
```

2. Installation des dépendances Backend :
```bash
cd ../mynurseshift-api
npm install
```

3. Démarrer l'API :
```bash
cd ../mynurseshift-api
npm run dev
```

4. Démarrer l'application web :
```bash
cd ../mynurseshift-monorepo
nx serve mynurseshift-webapp
```

5. Démarrer le back-office :
```bash
nx serve mynurseshift-backoffice
```

## Ports par Défaut

- Webapp : http://localhost:4200
- Back-office : http://localhost:4201
- API : http://localhost:3000
  - REST : `/api/*`
  - GraphQL : `/graphql`

## Variables d'Environnement

### Webapp & Back-office
```env
VITE_API_URL=http://localhost:3000
VITE_ENV=development
VITE_ENABLE_LOGS=true
VITE_AUTH_COOKIE_NAME=mynurseshift_auth
VITE_AUTH_COOKIE_DOMAIN=localhost
```

### API
```env
PORT=3000
JWT_SECRET=your_jwt_secret
DATABASE_URL=postgresql://user:password@localhost:5432/mynurseshift
```

## Architecture

### Frontend
- **Framework** : React avec Vite
- **State Management** : Zustand
- **UI** : Tailwind CSS + shadcn/ui
- **Icons** : Lucide React

### Backend
- **Framework** : Express
- **API** : REST + GraphQL (Apollo Server)
- **Base de données** : PostgreSQL
- **ORM** : Prisma
- **Authentication** : JWT

## Fonctionnalités Principales

- Authentification unifiée (JWT)
- Gestion des rôles (infirmier, superviseur, admin)
- Interface responsive
- Thème clair/sombre
- API GraphQL pour les requêtes complexes
- API REST pour les opérations simples
- Validation des données côté serveur et client

## Scripts Disponibles

### Frontend
- `nx serve [app]` : Démarre l'application en mode développement
- `nx build [app]` : Construit l'application pour la production
- `nx test [app]` : Lance les tests
- `nx lint [app]` : Vérifie le code avec ESLint

### Backend
- `npm run dev` : Démarre l'API en mode développement
- `npm run build` : Compile l'API
- `npm run start` : Démarre l'API en production
- `npm run prisma:migrate` : Exécute les migrations de base de données

## Développement

### Convention de Nommage
- Components : PascalCase
- Fichiers : kebab-case
- Variables/Fonctions : camelCase
- Routes API : kebab-case

### Structure des Composants
```tsx
/component
  ├── index.ts
  ├── component.tsx
  ├── component.spec.tsx
  └── component.css
```

### Structure API
```
/feature
  ├── feature.controller.ts
  ├── feature.service.ts
  ├── feature.resolver.ts (GraphQL)
  └── feature.test.ts
```

## Sécurité

- CORS configuré pour les domaines autorisés
- Protection JWT pour les routes authentifiées
- Validation des entrées avec class-validator
- Rate limiting sur les routes sensibles
- Logs sécurisés en production

## Contribution

1. Créer une branche pour votre fonctionnalité
2. Commiter vos changements
3. Créer une Pull Request

## Licence

Propriétaire - Tous droits réservés
