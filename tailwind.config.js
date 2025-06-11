/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Orbitron", "sans-serif"],
      },
      colors: {
        background: {
          dark: "#0A0A1F",
          light: "#1A1A2E",
        },
        primary: {
          DEFAULT: "#4EEAFF",
          100: "#E6FCFF",
          200: "#C4F7FF",
          300: "#9FF2FF",
          400: "#4EAEFF",
          500: "#3D8BFF",
          600: "#36C2D9",
          700: "#259AB3",
          800: "#17738C",
          900: "#0B4D66",
        },
        secondary: {
          DEFAULT: "#9D4EFF",
          100: "#F1E6FF",
          200: "#DFC4FF",
          300: "#CC9FFF",
          400: "#9D4EDD",
          500: "#7B2CBF",
          600: "#8136D9",
          700: "#6625B3",
          800: "#4C178C",
          900: "#320B66",
        },
        accent: {
          DEFAULT: "#FF4D4D",
          lighter: "#FF78B7",
          darker: "#D6277A",
        },
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideLeft: {
          "0%": { transform: "translateX(20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        gradientFlow: "gradientFlow 5s ease infinite",
        scaleIn: "scaleIn 0.5s ease-out forwards",
        typewriter: "typewriter 2s steps(40) forwards",
        blink: "blink 0.75s step-end infinite",
        fadeIn: "fadeIn 0.5s ease-out forwards",
        slideUp: "slideUp 0.5s ease-out forwards",
        slideDown: "slideDown 0.5s ease-out forwards",
        slideLeft: "slideLeft 0.5s ease-out forwards",
        slideRight: "slideRight 0.5s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1A1A2E 0%, #2D1B69 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(42, 42, 68, 0.8) 0%, rgba(26, 26, 46, 0.8) 100%)",
        "glow-gradient":
          "radial-gradient(circle at center, rgba(78, 234, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
      },
    },
  },
  plugins: [],
};
