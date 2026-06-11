# Portfolio Upgrade & Update Proposals

Based on the analysis of `Infor/theanh.txt` and the current codebase, here is a comprehensive plan to elevate the portfolio to a more professional and technically accurate state.

## 1. Data Accuracy & Synchronization (Critical)
There are notable discrepancies between the source truth (`theanh.txt`) and the current UI implementation that need to be aligned to maintain professional credibility.

- **Education Timeline:** 
    - *Current UI:* 2021 — 2025.
    - *Source Truth:* Sep 2024 — Present.
    - **Action:** Update `src/pages/Education.tsx` and `src/pages/Experience.tsx` to reflect the correct freshman/student status.
- **Experience Timeline:**
    - *Current UI:* Jun 2023 — Sep 2023.
    - *Source Truth:* Apr 2026 — Jul 2026 (Note: If this is a future goal/secured internship, mark it as "Upcoming" or adjust to current reality).
- **Project Jargon:**
    - **UdonFi:** Integrate specific terms from `theanh.txt` like "bitmap state packing", "LTV", and "Health Factor" into the project descriptions. These keywords demonstrate deep technical understanding to recruiters.

## 2. Technical Content Deepening
The portfolio currently focuses heavily on UI. Adding "Engineering Depth" will appeal more to backend and blockchain recruiters.

- **Architecture Diagrams:** Add simplified SVG diagrams to project case studies showing the flow of data (e.g., for UdonFi: Smart Contract -> Node.js -> Firebase).
- **Case Study Expansion:** 
    - Update `src/pages/projects/UdonFi.tsx` with a section on "Risk Management Algorithms".
    - Update `src/pages/projects/VioTune.tsx` with details on "SVD vs KNN performance benchmarks".
- **Code Snippets:** Feature high-impact code snippets (e.g., a Soroban smart contract snippet or a FastAPI middleware) directly on the project pages using a themed syntax highlighter.

## 3. Interactive Enhancements
Leverage the "Bento" layout for more dynamic, data-driven components.

- **Competitive Programming Dashboard:** 
    - Create a custom Bento card in `Experience.tsx` that visualizes ICPC status or problem-solving progress (e.g., a heatmap or a "Problems Solved" counter).
- **Skill Proficiency Matrix:** 
    - Instead of just lists, use a radar chart or a categorized grid (Languages, Cloud, Blockchain, AI) with proficiency levels.
- **GitHub Stats Card:** 
    - Integrate a dynamic GitHub stats card or a "Latest Commits" feed to show active development.

## 4. Visual & UX Refinements
- **Material 3 Integration:** Ensure all components strictly follow the Material 3 color tokens defined in `src/index.css`.
- **Micro-Animations:** 
    - Add "Magnetic" effects to buttons.
    - Add "Staggered" entrance animations for the Bento grid cards.
- **Dark Mode Support:** Ensure the `@theme` in `src/index.css` is fully optimized for both light and dark modes with a persistent toggle.

## 5. Proposed Roadmap for Implementation
1.  **Phase 1 (Accuracy):** Fix all dates and technical metrics to match `theanh.txt`.
2.  **Phase 2 (Content):** Expand Case Studies with the "Engineering Highlights" from the source file.
3.  **Phase 3 (Visuals):** Implement the ICPC dashboard and Skills Matrix.
4.  **Phase 4 (Advanced):** Add architecture diagrams and refine Framer Motion interactions.
