import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      "neon-yellow": {
        50: "#FCFFED",
        100: "#F5FFBB",
        200: "#E4F582",
        300: "#D2E85B",
        400: "#B9D03C",
        500: "#9EB429",
        600: "#8A9C29",
        700: "#6A7628",
        800: "#40461F",
        850: "#272917",
        900: "#121407",
      },
      green: {
        200: "#AAE9B0",
        500: "#74CA7D",
        700: "#438149",
      },
      red: {
        200: "#FFA6A0",
        500: "#EC5046",
      },
      gray: {
        50: "#FAFAFA",
        100: "#F4F4F4",
        200: "#EBEBEA",
        300: "#DBDBD9",
        400: "#BBBCB7",
        500: "#959690",
        600: "#4F504B"
      },
      white: "#FFFFFF",
      black: "#0B0D03"
    }

  }
}

export default config
