/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary__color: "var(--Primary__color)",
        Primary1__color: "var(--Primary1__color)",
        Secondary__color: "var(--Secondary__color)",
        Secondary1__color: "var(--Secondary1__color)",
        Secondary2__color: "var(--Secondary2__color)",
        BG__color: "var(--BG__color)",
        Text__color: "var(--Text__color)",
        Text1__color: "var(--Text1__color)",
        Text2__color: "var(--Text2__color)",
        Button__color: "var(--Button__color)",
        Button1__color: "var(--Button1__color)",
        Button2__color: "var(--Button2__color)",
        HoverButton: "var(--HoverButton)",
        HoverButton1: "var(--HoverButton1)",
      },
      fontFamily: {
        Poppins: "var(--Poppins)",
        Inter: "var(--Inter)",
      },
      container: {
        center: true,
        padding: {
          // DEFAULT: "1rem",
          // sm: "2rem",
          // lg: "4rem",
          // xl: "5rem",
          // "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
