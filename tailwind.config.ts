import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",

        card: "#ffffff",
        "card-foreground": "#0f172a",

        popover: "#ffffff",
        "popover-foreground": "#0f172a",

        primary: {
          DEFAULT: "#1e293b",
          foreground: "#f1f5f9",
        },
        secondary: {
          DEFAULT: "#f1f5f9",
          foreground: "#1e293b",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        accent: {
          DEFAULT: "#f1f5f9",
          foreground: "#1e293b",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#f1f5f9",
        },
        border: "#e2e8f0",
        input: "#e2e8f0",
        ring: "#0f172a",

        sidebar: {
          DEFAULT: "#fafafa",
          foreground: "#334155",
          primary: "#18181b",
          "primary-foreground": "#fafafa",
          accent: "#f3f4f6",
          "accent-foreground": "#334155",
          border: "#e2e8f0",
          ring: "#3b82f6",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
