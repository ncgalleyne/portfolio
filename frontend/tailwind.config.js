/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1200px",
      },
    },

    extend: {
      colors: {
        background: "#0b1326",
        foreground: "#dae2fd",

        surface: {
          DEFAULT: "#0b1326",
          dim: "#0b1326",
          bright: "#31394d",
          tint: "#4edea3",

          lowest: "#060e20",
          low: "#131b2e",
          DEFAULT: "#171f33",
          high: "#222a3d",
          highest: "#2d3449",

          variant: "#2d3449",
        },

        primary: {
          DEFAULT: "#4edea3",
          foreground: "#003824",
          container: "#10b981",
          "container-foreground": "#00422b",

          fixed: "#6ffbbe",
          "fixed-dim": "#4edea3",
          "fixed-foreground": "#002113",
          "fixed-variant": "#005236",

          inverse: "#006c49",
        },

        secondary: {
          DEFAULT: "#adc6ff",
          foreground: "#002e6a",
          container: "#0566d9",
          "container-foreground": "#e6ecff",

          fixed: "#d8e2ff",
          "fixed-dim": "#adc6ff",
          "fixed-foreground": "#001a42",
          "fixed-variant": "#004395",
        },

        tertiary: {
          DEFAULT: "#ffb3af",
          foreground: "#650911",
          container: "#fc7c78",
          "container-foreground": "#711419",

          fixed: "#ffdad7",
          "fixed-dim": "#ffb3af",
          "fixed-foreground": "#410005",
          "fixed-variant": "#842225",
        },

        error: {
          DEFAULT: "#ffb4ab",
          foreground: "#690005",
          container: "#93000a",
          "container-foreground": "#ffdad6",
        },

        outline: {
          DEFAULT: "#86948a",
          variant: "#3c4a42",
        },

        muted: {
          DEFAULT: "#bbcabf",
        },

        inverse: {
          surface: "#dae2fd",
          foreground: "#283044",
          primary: "#006c49",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      fontSize: {
        display: [
          "64px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.04em",
            fontWeight: "700",
          },
        ],

        "headline-lg": [
          "40px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],

        "headline-md": [
          "24px",
          {
            lineHeight: "1.4",
            fontWeight: "600",
          },
        ],

        "body-lg": [
          "18px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],

        "body-md": [
          "16px",
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],

        "label-code": [
          "14px",
          {
            lineHeight: "1.5",
            letterSpacing: "0.02em",
            fontWeight: "500",
          },
        ],

        "label-caps": [
          "12px",
          {
            lineHeight: "1",
            letterSpacing: "0.1em",
            fontWeight: "700",
          },
        ],
      },

      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },

      spacing: {
        unit: "4px",

        gutter: "32px",
        "section-gap": "128px",
        "bento-gap": "16px",

        card: "48px",
        container: "1200px",
      },

      maxWidth: {
        container: "1200px",
      },

      borderWidth: {
        DEFAULT: "1px",
        inner: "0.5px",
      },

      transitionTimingFunction: {
        emphasis: "cubic-bezier(0.2, 0, 0, 1)",
      },

      boxShadow: {
        none: "none",

        // Tonal depth instead of shadows
        card:
          "inset 0 1px 0 rgba(255,255,255,.04), 0 0 0 1px rgb(60 74 66 / 0.9)",

        hover:
          "inset 0 1px 0 rgba(255,255,255,.05), 0 0 0 1px rgb(173 198 255 / 0.3)",
      },

      gridTemplateColumns: {
        bento: "repeat(12, minmax(0, 1fr))",
      },

      transitionProperty: {
        elevation: "transform, border-color, background-color",
      },
    },
  },

  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        ".bento-grid": {
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0,1fr))",
          gap: theme("spacing.bento-gap"),
        },

        ".surface-card": {
          backgroundColor: theme("colors.surface.DEFAULT"),
          border: `1px solid ${theme("colors.outline.variant")}`,
          borderRadius: theme("borderRadius.xl"),
          padding: "48px",
          transition:
            "transform 200ms, border-color 200ms, background-color 200ms",
        },

        ".surface-card:hover": {
          borderColor: theme("colors.secondary.DEFAULT"),
          transform: "translateY(-2px)",
          backgroundColor: theme("colors.surface.high"),
        },

        ".proof-chip": {
          backgroundColor: "rgb(78 222 163 / 0.10)",
          color: theme("colors.primary.DEFAULT"),
          border: `1px solid rgb(78 222 163 / 0.20)`,
        },

        ".tech-chip": {
          backgroundColor: "rgb(173 198 255 / 0.10)",
          color: theme("colors.secondary.DEFAULT"),
          border: `1px solid rgb(173 198 255 / 0.20)`,
        },

        ".btn-primary": {
          backgroundColor: theme("colors.primary.DEFAULT"),
          color: theme("colors.background"),
          borderRadius: "2px",
        },

        ".btn-ghost": {
          backgroundColor: "transparent",
          color: theme("colors.primary.DEFAULT"),
          border: `1px solid ${theme("colors.outline.variant")}`,
          borderRadius: "2px",
        },

        ".btn-ghost:hover": {
          backgroundColor: theme("colors.surface.high"),
        },
      });
    },
  ],
};