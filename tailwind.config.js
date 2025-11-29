/* eslint-disable @typescript-eslint/no-require-imports */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        background: "#F9FAFB",
        surface: "#FFFFFF",
        primary: "#4F46E5",
        primaryDark: "#3730A3",
        accent: "#14B8A6",
        text: "#0F172A",
        muted: "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: defaultTheme.fontFamily.sans,
      },
      boxShadow: {
        soft: "0 15px 45px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        xl: "1.5rem",
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
};

