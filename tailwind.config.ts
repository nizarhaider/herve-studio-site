import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",

        // Botika-inspired accent colors
        "primary-accent": "var(--color-primary-accent)", // Vibrant purple/magenta for CTAs
        "foreground-accent": "var(--color-foreground-accent)", // Lighter shade for secondary accents
        "hero-background": "var(--color-hero-background)", // Subtle gradient for hero section

      },
    },
  },
  plugins: [],
};
export default config;
