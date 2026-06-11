# GEMINI.md - TheAnhPortfolio

## Project Overview
**TheAnhPortfolio** is a modern, high-performance personal portfolio website for **Nguyen The Anh**, a Software Engineering student at Vietnam-Korea University (VKU). The project showcases expertise in Fullstack Engineering, Blockchain (Stellar/Soroban), and AI Systems.

The application features a "Bento UI" architecture with rich animations and a Material Design 3-inspired color palette.

### Main Technologies
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4 (using the new `@theme` configuration)
- **Animations:** Framer Motion 12
- **Routing:** React Router 7 (using `HashRouter`)
- **Icons:** Lucide React & Material Symbols

---

## Building and Running
The project follows standard Node.js/Vite workflows.

### Prerequisites
- Node.js (Latest LTS recommended)
- npm

### Commands
- **Install Dependencies:** `npm install`
- **Development Server:** `npm run dev`
- **Production Build:** `npm run build`
- **Linting:** `npm run lint`
- **Preview Build:** `npm run preview`

---

## Architecture and Structure

### Project Layout
- `src/main.tsx`: Application entry point.
- `src/App.tsx`: Main routing configuration using `HashRouter` and layout wrapper.
- `src/pages/`: Contains main view components (Home, Projects, Experience, etc.).
- `src/pages/projects/`: Detailed case studies for major projects (UdonFi, VioTune, LaBouffe).
- `src/components/`: Reusable UI components (BentoCard, Navbar, Footer, TechMarquee).
- `src/index.css`: Global styles and Tailwind 4 design tokens.
- `Infor/`: Contains personal information (`theanh.txt`) used as the source of truth for portfolio content.

### Design System
The project uses a custom design system defined in `src/index.css` under the `@theme` block. It includes:
- **Colors:** A full suite of Material Design 3 tokens (e.g., `--color-primary`, `--color-surface-container`).
- **Typography:** Uses "Geist" for headlines/display, "Inter" for body text, and "JetBrains Mono" for mono labels.
- **Layout:** Custom spacing tokens and grid configurations (12-column grid).
- **Aesthetics:** Glassmorphism navigation, smooth transitions, and bento-style cards.

---

## Development Conventions

### Styling and UI
- **Tailwind 4:** Use the custom design tokens defined in `src/index.css`. Prefer using utility classes derived from these tokens.
- **Bento UI:** New sections should follow the Bento card pattern using the `BentoCard` component for consistency.
- **Animations:** Use `framer-motion` for page transitions and interactive elements. Standard animations like `animate-float` and `animate-marquee` are defined in global CSS.

### Routing
- **HashRouter:** The application uses `HashRouter` for compatibility with various hosting environments (like GitHub Pages). Ensure all internal links use `react-router-dom`'s `Link` or `NavLink`.
- **Scroll Management:** The `ScrollToTop` helper in `App.tsx` ensures the page resets to the top on route changes.

### Content Management
- **Source of Truth:** When updating personal info or project details, refer to `Infor/theanh.txt` to maintain consistency with the owner's professional background and project metrics.

---

## Key Projects Featured
1.  **UdonFi:** Decentralized Lending Protocol on Stellar Soroban (Rust/Smart Contracts).
2.  **VioTune:** AI-Powered Music Recommendation System (FastAPI/Python/ML).
3.  **LaBouffe:** Full-Stack Food Delivery Platform (React Native/Firebase).
