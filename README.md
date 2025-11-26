# Portfolio – Modern Developer Showcase

## 🚀 Product Overview

This portfolio is designed to impress modern tech recruiters. It’s not just a static resume—it's an interactive, modular, and highly customizable product that demonstrates both technical skill and thoughtful UX. The onboarding flow guides users (recruiters or candidates) through a dynamic profile creation process, highlighting the ability to adapt and personalize the experience for any context.

> Note: This is a personal project, always evolving as I learn and grow. Building a product is never truly finished, and this portfolio reflects that ongoing journey.

## ✨ Key Features

- **Guided Onboarding Tour:**
  - Step-by-step profile creation using a modular guided modal (react-joyride).
  - Dynamic validation and error handling to ensure data quality.
  - Final feedback step and global success/error modals for clear user communication.
- **Profile Editing & State Management:**
  - Zustand store for global state management, enabling fast, predictable updates and easy scalability.
  - Deep equality checks and an `isProfileEdited` flag to track changes and allow instant restoration to the original portfolio.
- **Dynamic Inputs:**
  - Tech stack, soft skills, and hobbies are fully dynamic, with default rendering and maxLength validation for clean data entry.
- **Modern UI/UX:**
  - Tailwind CSS for rapid, consistent styling across most components.
  - CSS Modules for scoped, maintainable styles in complex or shared UI elements.
  - Responsive design with device detection hooks for optimal experience on desktop and mobile.
- **Component Architecture:**
  - All steps and UI elements are modularized for maintainability and scalability.
  - Adapter pattern for user data ensures clean separation between UI and persistence logic.
- **Recruiter-Focused Features:**
  - "Restore original portfolio" button for instant comparison between candidate-edited and default profiles.
  - Clear, concise English copy throughout, tailored for recruiter clarity.

## 🛠️ Technologies Used & Rationale

- **React:**
  - Chosen for its component-driven architecture and ecosystem maturity.
- **Zustand:**
  - Lightweight, scalable state management. Enables global state slices (user, modal, tour) for clean separation of concerns.
- **Tailwind CSS:**
  - Utility-first CSS for rapid prototyping and consistent design. Used in most components for speed and maintainability.
- **CSS Modules:**
  - Applied in shared and complex components to ensure style encapsulation and avoid conflicts.
- **react-joyride:**
  - Powers the guided onboarding experience, making the product interactive and recruiter-friendly.
- **TypeScript:**
  - Ensures type safety, maintainability, and scalability for future growth.

## ✅ Testing & Quality Assurance

This portfolio is not only interactive and visually polished, but also **fully tested** to ensure reliability, maintainability, and a high-quality user experience. Key highlights include:

- **Unit & Integration Tests:**
  - Built with **Vitest** and **React Testing Library** to verify component behavior and user interactions.
  - Tests cover critical interactions, such as:
    - Rendering of initial content and dynamic lines in the `ConsoleBot`.
    - Button click flows with dynamic output order.
    - Disabling buttons after interaction to prevent repeated actions.

- **Responsive Design Validation:**
  - All components are **fully responsive**, implemented using **Tailwind CSS** and **media queries** where necessary.
  - Device-specific hooks ensure an optimized experience on **mobile, tablet, and desktop**.
  - Components with **animations, gradients, or modular CSS** (CSS Modules) maintain style integrity across screen sizes.

- **CSS Modules & Scoped Styles:**
  - Complex or shared components leverage CSS Modules to avoid style collisions and ensure maintainability.
  - Animations, transitions, and gradients are encapsulated, demonstrating the ability to combine **different styling solutions** in a professional, scalable way.

- **Demonstrated Technical Versatility:**
  - Shows the ability to mix **Tailwind CSS, CSS Modules, and React component logic** in a clean and maintainable structure.
  - Testing, responsive design, and modern styling are all part of the same workflow, reflecting real-world product development skills.

## 📦 Folder Structure Highlights

- `src/components/` – Modular UI components for each onboarding step and profile section.
- `src/store/` – Zustand slices for user, modal, loader, and tour state.
- `src/constants/` – Centralized configuration for steps, styles, and default data.
- `src/shared/` – Shared UI elements (modals, headers, navbar, etc.) with CSS Modules.
- `src/hooks/` – Custom hooks for device detection and other utilities.
- `public/` – Manifest and static assets for PWA support.

## 📝 How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zineR1/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 💡 Why This Portfolio Stands Out

- **Recruiter-centric design:** Every feature is built to make candidate evaluation easy, clear, and interactive.
- **Scalable architecture:** Easily extendable for new sections, integrations, or recruiter-specific flows.
- **Modern best practices:** Uses the latest in React, state management, and styling for maintainability and performance.
- **Instant revert:** Recruiters can instantly compare the candidate’s edits with the original profile, ensuring transparency.

## 📬 Contact

For questions, feedback, or collaboration opportunities, reach out via the contact form in the portfolio or connect on LinkedIn.

---

> This project is a personal showcase of my frontend skills, UX thinking, and understanding of recruiter needs. I built it to demonstrate my passion for clean code, great user experience, and modern web technologies—so you can see how I work, not just what I know.
