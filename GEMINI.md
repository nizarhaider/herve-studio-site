# Hervé Studio - AI-Humans for Fashion

## Project Overview

This project is the website for **Hervé Studio**, a company specializing in **AI-Humans for Fashion**. The website serves as a marketing platform to showcase their innovative solutions, services, AI models, pricing, and to encourage potential clients to engage. Although the `package.json` lists the project name as `finwise`, the directory structure and configuration clearly indicate it's the `herve-studio-site`.

The project is built using **Next.js**, a popular React framework, with **TypeScript** for type safety and **Tailwind CSS** for efficient styling. It follows a component-based architecture, organizing UI elements in the `src/components` directory and page-specific logic in `src/app`. Central configuration details, such as site name, URLs, metadata, and data for various sections, are managed in the `src/data/` directory.

**Key Technologies:**
*   **Framework:** Next.js
*   **Language:** TypeScript
*   **UI Library:** React
*   **Styling:** Tailwind CSS
*   **Other Libraries:** `@headlessui/react`, `framer-motion`, `react-floating-whatsapp`, `react-icons`.

**Key Features:**
*   **Hero Section:** Introduces the brand and value proposition.
*   **Services/Features:** Detailed explanation of what Hervé Studio offers.
*   **AI Humans Showcase:** A dedicated section to display their AI-generated fashion models.
*   **Pricing:** Transparent pricing plans for their services.
*   **FAQ:** Answers to common questions.
*   **Statistics:** Displaying key metrics or achievements.
*   **Call to Action (CTA):** Encouraging user engagement.
*   **WhatsApp Integration:** Facilitating direct customer communication.
*   **SEO Optimized:** Includes metadata for titles, descriptions, and social sharing.

## Building and Running

To work with this project, you will need Node.js and a package manager (npm, yarn, or pnpm) installed.

1.  **Install Dependencies:**
    ```bash
    # Using npm
    npm install
    # Or using pnpm (based on pnpm-lock.yaml)
    pnpm install
    ```

2.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    This will start the development server, typically at `http://localhost:3000`.

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    This command generates an optimized production build of the application.

4.  **Start the Production Server:**
    ```bash
    npm run start
    ```
    This command starts the production server after the build has been completed.

5.  **Linting:**
    ```bash
    npm run lint
    ```
    This command runs the linter to check for code quality and style issues.

## Development Conventions

*   **Framework:** The project utilizes Next.js, leveraging its features for routing, server-side rendering, and API routes (though API routes are not explicitly visible in the provided file structure).
*   **Language:** TypeScript is used throughout the project, ensuring type safety and improving code maintainability.
*   **Styling:** Tailwind CSS is the primary styling solution. Custom themes and color palettes are defined in `tailwind.config.ts` and likely applied via CSS variables in `src/app/globals.css`.
*   **Component Structure:** Reusable UI components are located in `src/components/`. Pages are structured within `src/app/`. Directories like `src/components/Benefits/` and `src/components/Pricing/` suggest further organization within `components`.
*   **Data Management:** Static data and site-wide configurations (like site name, metadata, links) are managed in files within the `src/data/` directory (e.g., `siteDetails.ts`, `aiModels.ts`).
*   **SEO and Metadata:** Critical for a marketing website, SEO configurations, including titles, descriptions, and social media previews, are managed in `src/app/layout.tsx` and sourced from `src/data/siteDetails.ts`.
*   **Third-Party Integrations:** Google Analytics is included in the layout (though currently inactive due to an empty `googleAnalyticsId`) and a WhatsApp button is present on the homepage for direct customer contact.
*   **Code Quality:** ESLint is configured for linting.
