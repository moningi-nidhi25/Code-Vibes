/** @type {import('tailwindcss').Config} */
// The Code Vibe — dark "editor" theme derived from the logo
// (cyan → blue → violet on ink). Token names are kept from the original
// system so existing components keep working; the values are what changed.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Ink scale (page → raised panels)
        "surface-dim": "#04070D",
        "surface": "#060A13",
        "surface-bright": "#0B1220",
        "background": "#060A13",
        "surface-container-lowest": "#080D18",
        "surface-container-low": "#0A1120",
        "surface-container": "#0D1526",
        "surface-container-high": "#121C33",
        "surface-container-highest": "#18243F",
        "surface-variant": "#18243F",
        "surface-tint": "#2FD8FF",

        // Text
        "on-surface": "#E8EEFB",
        "on-surface-variant": "#A3B0CC",
        "on-background": "#E8EEFB",
        "outline": "#6B7898",
        "outline-variant": "#1F2D4A",
        "inverse-surface": "#E8EEFB",
        "inverse-on-surface": "#060A13",

        // Logo spectrum, tuned so it reads as text on dark
        "primary": "#2FD8FF",        // cyan  — links, active, primary action
        "on-primary": "#03131B",
        "primary-container": "#19B8E6",
        "on-primary-container": "#03131B",
        "inverse-primary": "#0E7490",
        "primary-fixed": "#0E2C3C",
        "primary-fixed-dim": "#2FD8FF",
        "on-primary-fixed": "#BFF1FF",
        "on-primary-fixed-variant": "#7FE5FF",

        "secondary": "#6FA0FF",      // blue
        "on-secondary": "#06132E",
        "secondary-container": "#2979FF",
        "on-secondary-container": "#EAF1FF",
        "secondary-fixed": "#0F1F45",
        "secondary-fixed-dim": "#6FA0FF",
        "on-secondary-fixed": "#CFE0FF",
        "on-secondary-fixed-variant": "#9DBFFF",

        "tertiary": "#C58BFF",       // violet
        "on-tertiary": "#1D0630",
        "tertiary-container": "#B324E5",
        "on-tertiary-container": "#FFFFFF",
        "tertiary-fixed": "#2A1042",
        "tertiary-fixed-dim": "#C58BFF",
        "on-tertiary-fixed": "#EBD3FF",
        "on-tertiary-fixed-variant": "#D6A9FF",

        "error": "#FF6B7A",
        "on-error": "#2B0509",
        "error-container": "#3A0F16",
        "on-error-container": "#FFB3BB",

        // Legacy glass tokens → flat panel fills
        "glass-subtle": "rgba(13, 21, 38, 0.80)",
        "glass-base": "rgba(13, 21, 38, 0.90)",
        "glass-elevated": "rgba(13, 21, 38, 0.95)",
        "glass-modal": "rgba(10, 17, 32, 0.98)",
        "glass-border-specular": "rgba(255, 255, 255, 0.10)",
        "glass-border-ambient": "rgba(255, 255, 255, 0.05)",
        "glass-border-structural": "#1F2D4A",

        // Brand spectrum (raw)
        "vivid-cobalt": "#2979FF",
        "electric-cyan": "#00E5FF",
        "electric-violet": "#B324E5",
        "ambient-gradient-cyan": "#00E5FF",
        "ambient-gradient-cobalt": "#2979FF",
        "ambient-gradient-violet": "#B324E5",
        "neutral-slate": "#060A13",

        "glow-cyan": "rgba(0, 229, 255, 0.25)",
        "glow-cobalt": "rgba(41, 121, 255, 0.25)",
        "glow-violet": "rgba(179, 36, 229, 0.25)",

        "text-primary": "#E8EEFB",
        "text-secondary": "#A3B0CC",
        "text-muted": "#6B7898",
        "canvas-base": "#060A13",
        "canvas-subtle": "#0A1120",
        "surface-border": "#1F2D4A",

        // Semantic status
        "ok": "#3DDC97",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "4px",
        lg: "6px",
        xl: "6px",
        "2xl": "8px",
        "3xl": "8px",
        full: "9999px",
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-sm": "1rem",
        margin: "2rem",
        "margin-mobile": "1rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
      },
      boxShadow: {
        "card-default": "0 1px 0 rgba(255,255,255,0.03) inset, 0 0 0 1px rgba(31,45,74,0.6)",
        "glow-cobalt": "0 0 0 1px rgba(41,121,255,0.45)",
        "glow-cyan": "0 0 0 1px rgba(47,216,255,0.45)",
        "glow-violet": "0 0 0 1px rgba(197,139,255,0.45)",
        "btn-glow": "0 0 0 1px rgba(47,216,255,0.6)",
      },
      backdropBlur: {
        "tier-1": "8px",
        "tier-2": "8px",
        "tier-3": "12px",
        "tier-4": "16px",
      },
      fontFamily: {
        display: ["Chakra Petch", "ui-sans-serif", "sans-serif"],
        body: ["IBM Plex Sans Variable", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono Variable", "ui-monospace", "monospace"],
        "display-hero": ["Chakra Petch", "sans-serif"],
        "display-hero-mobile": ["Chakra Petch", "sans-serif"],
        "headline-xl": ["Chakra Petch", "sans-serif"],
        "headline-xl-mobile": ["Chakra Petch", "sans-serif"],
        "headline-lg": ["Chakra Petch", "sans-serif"],
        "headline-md": ["Chakra Petch", "sans-serif"],
        "headline-sm": ["Chakra Petch", "sans-serif"],
        "body-lg": ["IBM Plex Sans Variable", "sans-serif"],
        "body-md": ["IBM Plex Sans Variable", "sans-serif"],
        "body-sm": ["IBM Plex Sans Variable", "sans-serif"],
        "mono-lg": ["JetBrains Mono Variable", "monospace"],
        "mono-sm": ["JetBrains Mono Variable", "monospace"],
        "label-ui": ["IBM Plex Sans Variable", "sans-serif"],
      },
      fontSize: {
        "display-hero": ["clamp(2.5rem, 6.2vw, 4.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-hero-mobile": ["2.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-xl": ["clamp(1.875rem, 3.6vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-xl-mobile": ["1.875rem", { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-lg": ["1.875rem", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.005em", fontWeight: "600" }],
        "headline-sm": ["1.125rem", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.65", letterSpacing: "0", fontWeight: "400" }],
        "body-md": ["0.9375rem", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.55", letterSpacing: "0", fontWeight: "400" }],
        "mono-lg": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "500" }],
        "mono-sm": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "500" }],
        "label-ui": ["0.8125rem", { lineHeight: "1rem", letterSpacing: "0.005em", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};
