# Maksym's Digital Hub

Personal portfolio site — React, TypeScript, Vite, and Tailwind CSS. Single-page app with routes for home, experience, projects, education, achievements, and resume.

**Live site:** [maksym-lan-personal-website.vercel.app](https://maksym-lan-personal-website.vercel.app/) · **Repository:** [github.com/MaxLan-dev/Maksym-Lan-Personal-Website](https://github.com/MaxLan-dev/Maksym-Lan-Personal-Website)

## Requirements

- **Node.js** 18+ (recommended LTS)
- **npm** (or **Bun** — lockfiles for both are committed)

## Clone and run locally

```bash
git clone https://github.com/MaxLan-dev/Maksym-Lan-Personal-Website.git
cd Maksym-Lan-Personal-Website
npm install
npm run dev
```

The dev server defaults to port **8080** (see `vite.config.ts`). Open the URL Vite prints in the terminal (typically `http://localhost:8080`).

### Other commands


| Command           | Purpose                            |
| ----------------- | ---------------------------------- |
| `npm run build`   | Production build to `dist/`        |
| `npm run preview` | Serve the production build locally |
| `npm run lint`    | ESLint                             |
| `npm test`        | Vitest (unit tests)                |


End-to-end tests use Playwright (`playwright.config.ts`); run with `npx playwright test` after installing browsers if needed.

## Project structure

```text
Maksym-Lan-Personal-Website/
├── public/                 # Static assets (e.g. resume.pdf, favicon)
├── src/
│   ├── components/         # Layout (Header, Footer), sections, UI (shadcn/Radix)
│   ├── data/               # Content: profile, projects, experience, achievements
│   ├── hooks/
│   ├── lib/                # Utilities (e.g. cn)
│   ├── pages/              # Route screens (Home, Projects, Experience, …)
│   ├── test/               # Vitest setup + tests
│   ├── App.tsx             # Routes (HashRouter)
│   ├── main.tsx
│   └── index.css           # Global styles + Tailwind
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── components.json         # shadcn/ui config
├── vercel.json             # SPA rewrite rules (if deployed on Vercel)
└── package.json
```

Routing uses **HashRouter** so deep links work on static hosts (e.g. GitHub Pages) without extra server configuration.

## Updating content

Most copy lives under `src/data/`:

- `profile.ts` — name, bio, links, skills, education summary
- `projects.ts` — project list
- `experience.ts` — work history
- `achievements.ts` — awards and highlights

Replace `public/resume.pdf` when your CV changes.