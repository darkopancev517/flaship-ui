const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      colors: {
        background: "oklch(var(--background)/<alpha-value>)",
        foreground: "oklch(var(--foreground)/<alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary)/<alpha-value>)",
          foreground: "oklch(var(--primary-foreground)/<alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary)/<alpha-value>)",
          foreground: "oklch(var(--secondary-foreground)/<alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted)/<alpha-value>)",
          foreground: "oklch(var(--muted-foreground)/<alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent)/<alpha-value>)",
          foreground: "oklch(var(--accent-foreground)/<alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(var(--card)/<alpha-value>)",
          foreground: "oklch(var(--card-foreground)/<alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover)/<alpha-value>)",
          foreground: "oklch(var(--popover-foreground)/<alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive)/<alpha-value>)",
          foreground: "oklch(var(--destructive-foreground)/<alpha-value>)",
        },
        neutral: {
          DEFAULT: "oklch(var(--neutral)/<alpha-value>)",
          foreground: "oklch(var(--neutral-foreground)/<alpha-value>)",
        },
        "base-100": "oklch(var(--base-100)/<alpha-value>)",
        "base-200": "oklch(var(--base-200)/<alpha-value>)",
        "base-300": "oklch(var(--base-300)/<alpha-value>)",
        border: "oklch(var(--border)/<alpha-value>)",
        input: "oklch(var(--input)/<alpha-value>)",
        ring: "oklch(var(--ring)/<alpha-value>)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        hero: ["var(--font-hero)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
