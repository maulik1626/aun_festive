## React E-commerce MVVM – Delivery Plan & Checklist

This document is your single source of truth for building the project in small, trackable steps. Every step contains:

- Purpose and outcomes
- Detailed, checkable tasks and sub-tasks
- Notes and TODO placeholders you can fill in and check off
- Definition of Done (DoD)
- Risks/Blockers and commands/snippets as needed

Use GitHub-style checkboxes: replace [ ] with [x] when done.

---

### How to use this document

- Keep steps in order. Only start the next step after DoD is met for the current one.
- Log decisions in the Notes section of the step where they were made.
- Convert any Notes into actionable TODOs as needed.
- Prefer small PRs that each complete a step or a sub-step.

---

### Project-wide conventions

- Branching: `main` (stable), `dev` (integration), feature branches: `feature/<scope>`
- Commits: Conventional Commits (e.g., `feat: add product filter`, `fix: handle 401 on refresh`)
- Code style: ESLint + Prettier (to be added in Testing & DX step)
- Testing: Vitest + React Testing Library
- Package manager: npm

---

## Step 0 – Prerequisites & Environment

- [ ] Step 0 complete

**Goal**: Ensure local environment meets toolchain requirements.

**Why**: Vite 7 requires Node.js >= 20.19.x or >= 22.12.x. Current error shows Node 20.5.0 is unsupported, causing dev server failure.

**Tasks**

- [X] Install/Update Node using nvm
  - [X] Install nvm (macOS)
  - [X] `nvm install 22 && nvm use 22`
  - [X] Set default: `nvm alias default 22`
- [X] Verify versions
  - [X] `node -v` shows v22.x or >=20.19.x
  - [X] `npm -v` up to date (optional)
- [X] Validate dev server will run
  - [X] `npm run dev` in `react-app` starts Vite without engine errors

**Notes**

- [X] Note: Organization Node policy or constraints
- [X] Note: Team-wide Node version standard (e.g., v22 LTS)

**TODOs**

- [X] Add CI Node version matrix (build against v22)

**Definition of Done**

- [X] Node version upgraded and persisted with nvm default
- [X] Vite starts locally without engine/crypto errors

**Commands**

```bash
brew install nvm
mkdir -p ~/.nvm
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
nvm install 22
nvm use 22
nvm alias default 22
node -v
```

---

## Step 1 – Scaffold base app & core dependencies

- [ ] Step 1 complete

**Goal**: Create base Vite React app with core libraries.

**Tasks**

- [ ] Create app (Vite React)
  - [ ] `npm create vite@latest ecommerce-app -- --template react`
- [ ] Install core libs
  - [ ] `react-router-dom`
  - [ ] `@reduxjs/toolkit`, `react-redux`, `reselect`
  - [ ] `axios`
  - [ ] `i18next`, `react-i18next`
  - [ ] `zod` (or `yup`)
- [ ] Verify dev server
  - [ ] `npm run dev` renders starter page

**Notes**

- [ ] Decide app directory name (`ecommerce-app` vs `react-app`)
- [ ] Choose validator (`zod` vs `yup`)

**TODOs**

- [ ] Add npm scripts for common tasks (lint, test, build)

**Definition of Done**

- [ ] App scaffolding completed and boots in browser
- [ ] Core libraries installed without peer/engine issues

---

## Step 2 – Project skeleton (folders & placeholders)

- [ ] Step 2 complete

**Goal**: Create the full directory structure with placeholder files so imports resolve from day one.

**Tasks**

- [ ] Create `public/` assets and base files (`index.html`, `manifest.json`, `favicon.ico`)
- [ ] Create `src/` sub-structure per architecture (assets, config, localization, data, presentation, store, navigation, utils, services)
- [ ] Add minimal placeholder files in each folder

**Notes**

- [ ] Align folder names and casing with team conventions

**TODOs**

- [ ] Add codeowners for directories if needed

**Definition of Done**

- [ ] All planned folders exist with placeholder files; app compiles

---

## Step 3 – Configuration (aliases, env, constants)

- [ ] Step 3 complete

**Goal**: Establish path aliases, environment variables, and base constants.

**Tasks**

- [ ] Add `jsconfig.json` path aliases (`@assets`, `@config`, `@data`, `@presentation`, `@store`, `@utils`, `@services`, `@navigation`)
- [ ] Add `.env`, `.env.development`, `.env.production`
- [ ] Implement `config/constants/*`, `config/api.js`, `config/routes.js`, `config/environment.js`

**Notes**

- [ ] Document required env keys with defaults and examples

**TODOs**

- [ ] Add sample `.env.example`

**Definition of Done**

- [ ] Imports resolve via aliases
- [ ] App reads env vars correctly

---

## Step 4 – Styling & assets

- [ ] Step 4 complete

**Goal**: Global styles, custom fonts, variables.

**Tasks**

- [ ] Place OTF fonts under `assets/fonts/`
- [ ] Define `@font-face` in `assets/styles/fonts.css`
- [ ] Create `globals.css` and `variables.css`, import in `src/index.js`

**Notes**

- [ ] Decide typography scale and spacing system

**TODOs**

- [ ] Document color palette tokens and dark mode strategy

**Definition of Done**

- [ ] Base typography and variables applied app-wide without FOUT

---

## Step 5 – Routing

- [ ] Step 5 complete

**Goal**: AppRouter, route groups, layouts, and guards.

**Tasks**

- [ ] Implement `navigation/AppRouter.js`
- [ ] Create layouts: `MainLayout`, `AuthLayout`, `GuestLayout`
- [ ] Define route groups: `AuthRoutes`, `ProductRoutes`, `CartRoutes`, `OrderRoutes`
- [ ] Add `ProtectedRoute` and basic guards

**Notes**

- [ ] Define 404 handling strategy

**TODOs**

- [ ] Add lazy loading per top-level route

**Definition of Done**

- [ ] All base pages reachable; unauthorized flows blocked by guards

---

## Step 6 – State management (Redux Toolkit)

- [ ] Step 6 complete

**Goal**: Configure store, middleware, and slices.

**Tasks**

- [ ] `store/store.js` and `rootReducer.js`
- [ ] Middleware: `logger`, `errorHandler`, `apiMiddleware`
- [ ] Slices: `auth`, `products`, `cart`, `orders`, `user`, `location`, `ui`
- [ ] Memoized selectors with `reselect`

**Notes**

- [ ] Clarify server vs client cache responsibilities

**TODOs**

- [ ] Add Redux DevTools config and production safeguards

**Definition of Done**

- [ ] Store integrated with Provider; slices compile; selectors unit-tested minimally

---

## Step 7 – API layer (Axios client + interceptors)

- [ ] Step 7 complete

**Goal**: Standardized HTTP client with interceptors and endpoints.

**Tasks**

- [ ] `datasources/remote/api/ApiClient.js` (axios wrapper)
- [ ] `ApiInterceptor.js` for auth headers, refresh, error normalization
- [ ] `endpoints.js` central definitions
- [ ] Common models: `ApiResponse`, `ApiError`, `PaginationModel`

**Notes**

- [ ] Decide retry policy and backoff strategy

**TODOs**

- [ ] Add request/response logging toggle via env

**Definition of Done**

- [ ] Client used by repositories; 401/403 handled; errors normalized

---

## Step 8 – Models

- [ ] Step 8 complete

**Goal**: Data models for auth, products, cart, orders, location, common.

**Tasks**

- [ ] Implement base and feature models
- [ ] Add validators/parsers (e.g., zod schemas)

**Notes**

- [ ] Document nullability and optional properties

**TODOs**

- [ ] Add model-to-DTO mappers where needed

**Definition of Done**

- [ ] Models typed, validated, and used in repos/viewmodels

---

## Step 9 – Repositories & data sources

- [ ] Step 9 complete

**Goal**: Repository interfaces and implementations delegating to remote/local data sources.

**Tasks**

- [ ] Define `I*Repository.js` interfaces per feature
- [ ] Implement repositories calling remote/local data sources
- [ ] Local: `LocalStorageManager`, `CacheManager`, `SecureStorage`

**Notes**

- [ ] Define cache invalidation and TTL strategy

**TODOs**

- [ ] Add offline-first considerations for cart

**Definition of Done**

- [ ] All core repos wired and unit-tested with mocked data sources

---

## Step 10 – Utilities & hooks

- [ ] Step 10 complete

**Goal**: Shared helpers and reusable React hooks.

**Tasks**

- [ ] Helpers: `formatters`, `validators`, `converters`, `calculations`, `storage`
- [ ] Hooks: `useApi`, `useLocalStorage`, `useResponsive`, `useDebounce`, `useErrorHandler`, `useAuth`, `useCart`

**Notes**

- [ ] Establish error boundary contract for `useErrorHandler`

**TODOs**

- [ ] Add docs for hook usage patterns

**Definition of Done**

- [ ] Hooks tested and used by ViewModels/Views

---

## Step 11 – Services (analytics, payment, logging, location base)

- [ ] Step 11 complete

**Goal**: External integrations with stable service APIs.

**Tasks**

- [ ] `AnalyticsService`, `PaymentService`, `StripeService`, `NotificationService`, `LoggingService`
- [ ] Location base services: `GeolocationService`, `IpLocationService`, `LocationPermissions`, `LocationManager`

**Notes**

- [ ] Confirm service initialization order and env keys

**TODOs**

- [ ] Add no-op mocks for tests and local dev

**Definition of Done**

- [ ] Services initialized via DI boundaries; mocks available for tests

---

## Step 12 – Location features (end-to-end)

- [ ] Step 12 complete

**Goal**: Robust detection flow and UX.

**Tasks**

- [ ] Detection priority: Geolocation → IP → Manual → Cached
- [ ] Cache with TTL, timeouts, error handling
- [ ] ViewModels: `LocationViewModel`, `AddressViewModel`
- [ ] Views: Permission request, address selection, settings
- [ ] Selectors and reducers for location state

**Notes**

- [ ] GDPR/consent handling and copy review

**TODOs**

- [ ] Add delivery area validation and regional pricing hooks

**Definition of Done**

- [ ] Users can grant/deny and still proceed with sensible defaults

---

## Step 13 – Base UI components

- [ ] Step 13 complete

**Goal**: Foundational components with consistent theming and responsiveness.

**Tasks**

- [ ] `Button`, `Input`, `Text`, `Image`, `Card`, `Modal`, `Loader`, `Icon`
- [ ] Style modules and usage docs

**Notes**

- [ ] Accessibility requirements and focus states

**TODOs**

- [ ] Add visual regression tests for base components

**Definition of Done**

- [ ] Components documented and used in at least one view

---

## Step 14 – Feature UI components

- [ ] Step 14 complete

**Goal**: Product, cart, navigation, feedback components.

**Tasks**

- [ ] Product: `ProductCard`, `ProductGrid`, `ProductCarousel`, `ProductFilter`, `ProductReviews`
- [ ] Cart: `CartItem`, `CartSummary`, `MiniCart`
- [ ] Navigation: `Header`, `Footer`, `Sidebar`, `Breadcrumb`, `TabBar`
- [ ] Feedback: `Toast`, `ErrorBoundary`, `EmptyState`, `LoadingSpinner`

**Notes**

- [ ] Define skeleton loading patterns

**TODOs**

- [ ] Add responsive tests for key components

**Definition of Done**

- [ ] Composables are integrated in routes and meet performance budgets

---

## Step 15 – Views + ViewModels (MVVM)

- [ ] Step 15 complete

**Goal**: Implement screens with ViewModels controlling state and logic.

**Tasks**

- [ ] Auth: Login, Register, Forgot Password, Profile
- [ ] Products: List, Detail, Category, Search
- [ ] Cart: Cart, Checkout
- [ ] Orders: List, Detail, Tracking
- [ ] Common: Home, Splash, NotFound

**Notes**

- [ ] Define navigation flows (guest → auth → checkout)

**TODOs**

- [ ] Add analytics events for key funnels

**Definition of Done**

- [ ] Screens function end-to-end using repositories and services

---

## Step 16 – Internationalization

- [ ] Step 16 complete

**Goal**: i18n setup with resource bundles and translation hook.

**Tasks**

- [ ] `localization/i18n.js`, `useTranslation.js`
- [ ] `strings/en.js` (and `es.js` if needed)
- [ ] Language switcher and persisted preference

**Notes**

- [ ] RTL support considerations

**TODOs**

- [ ] Add ICU message formatting if needed

**Definition of Done**

- [ ] App supports at least English fully; strings externalized

---

## Step 17 – Quality & resilience

- [ ] Step 17 complete

**Goal**: Error handling patterns and guard coverage.

**Tasks**

- [ ] Global `ErrorBoundary` and route error elements
- [ ] Guard unit tests (auth/guest/admin)
- [ ] API error normalization tests

**Notes**

- [ ] Incident reporting strategy (Sentry/Logs)

**TODOs**

- [ ] Add retry UI for transient failures

**Definition of Done**

- [ ] Key failure modes covered by tests and UX fallbacks

---

## Step 18 – Performance

- [ ] Step 18 complete

**Goal**: Code-splitting, memoization, selector optimization, asset budgets.

**Tasks**

- [ ] Route-level `React.lazy` and suspense boundaries
- [ ] Memoization for heavy components and selectors
- [ ] Image optimization and responsive images

**Notes**

- [ ] Establish performance budgets (TTI, LCP)

**TODOs**

- [ ] Add bundle analyzer and CI budget checks

**Definition of Done**

- [ ] Core pages meet performance budgets in dev and prod builds

---

## Step 19 – Testing & Developer Experience

- [ ] Step 19 complete

**Goal**: Testing setup and developer tooling.

**Tasks**

- [ ] Vitest + React Testing Library configuration
- [ ] ESLint + Prettier with scripts and CI checks
- [ ] Husky pre-commit hooks for lint/test

**Notes**

- [ ] Agree on test pyramid and coverage targets

**TODOs**

- [ ] Add sample tests per slice/component

**Definition of Done**

- [ ] CI runs tests and lint; pre-commit gates enabled

---

## Step 20 – Build & deploy

- [ ] Step 20 complete

**Goal**: Production build and deployment pipeline.

**Tasks**

- [ ] `npm run build` produces optimized bundle
- [ ] Env replacements verified for production
- [ ] Deploy script/pipeline (e.g., Vercel/Netlify/GitHub Pages/custom)

**Notes**

- [ ] Document deployment environments and URLs

**TODOs**

- [ ] Add smoke tests and uptime monitoring

**Definition of Done**

- [ ] Production deployment successful; rollback plan documented

---

### Tracking summary (optional)

- [ ] Step 0 – Prerequisites & Environment
- [ ] Step 1 – Scaffold base app & core dependencies
- [ ] Step 2 – Project skeleton (folders & placeholders)
- [ ] Step 3 – Configuration (aliases, env, constants)
- [ ] Step 4 – Styling & assets
- [ ] Step 5 – Routing
- [ ] Step 6 – State management (Redux Toolkit)
- [ ] Step 7 – API layer (Axios + interceptors)
- [ ] Step 8 – Models
- [ ] Step 9 – Repositories & data sources
- [ ] Step 10 – Utilities & hooks
- [ ] Step 11 – Services
- [ ] Step 12 – Location features
- [ ] Step 13 – Base UI components
- [ ] Step 14 – Feature UI components
- [ ] Step 15 – Views + ViewModels
- [ ] Step 16 – Internationalization
- [ ] Step 17 – Quality & resilience
- [ ] Step 18 – Performance
- [ ] Step 19 – Testing & DX
- [ ] Step 20 – Build & deploy
