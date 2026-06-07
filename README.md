# Portfolio — Malo Caparros

Application web portfolio développée dans le cadre du challenge Front-End EFREI 2026.

## Stack technique

| Outil | Version | Rôle |
|---|---|---|
| React | 19 | UI |
| TypeScript | 6 | Typage strict |
| Tailwind CSS | 4 | Design system |
| React Router | 7 | Routing & code splitting |
| Zod | 4 | Validation des schémas |
| React Hook Form | 7 | Gestion des formulaires |
| Google OAuth | — | Authentification |
| Vite | 8 | Build tool |

## Architecture

```
src/
├── components/     # Composants UI réutilisables
├── context/        # États globaux (useReducer + useContext)
├── hooks/          # Custom hooks (useAuth, useProjectContext…)
├── layouts/        # Structures de page (PublicLayout, AdminLayout)
├── pages/          # Vues routées (lazy-loaded)
├── services/       # Configuration Google OAuth
├── types/          # Interfaces & schémas Zod
└── data/           # Données initiales
```

## Routes

### Publiques
| Route | Page |
|---|---|
| `/` | Accueil |
| `/about` | À propos |
| `/contact` | Formulaire de contact |
| `/project/:id` | Détail d'un projet |
| `/login` | Connexion Google |
| `*` | 404 |

### Protégées (Google OAuth requis)
| Route | Page |
|---|---|
| `/admin/projects` | CRUD projets |
| `/admin/contacts` | Messages reçus |
| `/admin/testimonials` | Gestion des témoignages |

## Fonctionnalités

- **Authentification** — Google OAuth 2.0, routes protégées, persistance localStorage
- **Projets** — CRUD complet, upload d'images (base64), recherche
- **Contact** — Formulaire validé Zod, messages consultables en admin
- **Témoignages** — CRUD + toggle visibilité depuis l'admin
- **UX** — Skeleton loaders, transitions de page, modales de confirmation, états vides illustrés
- **Responsive** — Mobile first, sidebar admin adaptée

## Lancer le projet

```bash
npm install
```

Créer un fichier `.env.local` à la racine :

```env
VITE_GOOGLE_CLIENT_ID=ton_client_id_google
```

```bash
npm start
```

## Build

```bash
npm run build
```
