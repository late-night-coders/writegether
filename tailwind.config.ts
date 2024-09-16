import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "neon-yellow-50": "#FCFFED",
        "neon-yellow-100": "#F5FFBB",
        "neon-yellow-200": "#E4F582",
        "neon-yellow-300": "#D2E85B",
        "neon-yellow-400": "#B9D03C",
        "neon-yellow-500": "#9EB429",
        "neon-yellow-600": "#8A9C29",
        "neon-yellow-700": "#6A7628",
        "neon-yellow-800": "#40461F",
        "neon-yellow-850": "#272917",
        "neon-yellow-900": "#121407",
        "green-200": "#AAE9B0",
        "green-500": "#74CA7D",
        "green-700": "#438149",
        "red-200": "#FFA6A0",
        "red-500": "#EC5046",
        "gray-50": "#FAFAFA",
        "gray-100": "#F4F4F4",
        "gray-200": "#EBEBEA",
        "gray-300": "#DBDBD9",
        "gray-400": "#BBBCB7",
        "gray-500": "#959690",
        "gray-600": "#4F504B"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: []
}
export default config
