# Repository Guidelines

## Project Structure & Module Organization

This repository is a React 19, TypeScript, and Vite portfolio site. Application code lives in `src/`:

- `src/components/`: reusable UI components such as `Navbar`, `Footer`, and `BentoCard`.
- `src/pages/`: route-level views; project case studies are under `src/pages/projects/`.
- `src/context/`: shared React context, including bilingual language state.
- `src/assets/`: images imported by application code.
- `src/index.css` and `src/App.css`: Tailwind theme tokens and global styling.

Static browser assets belong in `public/`. `Infor/` contains source material and project media used to maintain portfolio content. Treat `dist/` as generated build output; do not edit it manually.

## Build, Test, and Development Commands

- `npm ci`: install the exact dependency versions from `package-lock.json`.
- `npm run dev`: start the Vite development server with hot reload.
- `npm run lint`: run ESLint across TypeScript and React source files.
- `npm run build`: type-check with `tsc -b` and create the production build in `dist/`.
- `npm run preview`: serve the production build locally for final verification.

## Coding Style & Naming Conventions

Use TypeScript and functional React components. Name components and page files in PascalCase (`TechMarquee.tsx`), hooks and variables in camelCase, and CSS theme utilities in kebab-case. Follow the surrounding file's formatting; source files generally use two-space indentation. ESLint and TypeScript strict checks are the source of truth.

Prefer existing Tailwind theme tokens from `src/index.css` over hard-coded colors. Keep shared UI in `components/` and route-specific content in `pages/`. When changing visible copy, preserve both English and Vietnamese behavior through `LanguageContext`.

## Testing Guidelines

No automated test framework is currently configured. Every change must pass `npm run lint` and `npm run build`. For UI changes, manually verify affected HashRouter routes, mobile and desktop layouts, theme switching, and language switching. If adding tests, colocate them as `*.test.tsx` beside the component and document the new test command.

## Commit & Pull Request Guidelines

Recent commits use short imperative summaries, sometimes with Conventional Commit prefixes such as `docs:`. Prefer focused messages like `feat: add project filter` or `fix: correct mobile navigation`.

Pull requests should explain the user-facing change, list verification performed, and link relevant issues. Include before-and-after screenshots for visual changes, especially responsive layouts or theme updates. Keep unrelated refactors out of the same pull request.
