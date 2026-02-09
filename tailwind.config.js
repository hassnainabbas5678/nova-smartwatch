/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji"
        ]
      },
      colors: {
        // NEW: carbon / graphite base
        carbon: {
          950: "#050608",
          900: "#0A0C10",
          850: "#0D1117",
          800: "#111827"
        },
        // NEW: premium “laser” accent
        neon: {
          300: "#6EFACC",
          400: "#30E7B0",
          500: "#18C997"
        },
        // NEW: warm metal touch (subtle)
        metal: {
          200: "#E7D3C8",
          300: "#C9A79A",
          400: "#B8887E"
        },
        fog: {
          100: "#EAF0FF",
          200: "#C9D6FF"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0,0,0,0.35)",
        glow:
          "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.55)",
        neon:
          "0 0 0 1px rgba(48,231,176,0.15), 0 0 40px rgba(48,231,176,0.18)"
      }
    }
  },
  plugins: []
};
