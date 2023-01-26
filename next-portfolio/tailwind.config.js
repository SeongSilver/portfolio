module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MICEGothic: ["Bold"],
      },
      backgroundImage: (theme) => ({
        uyuni: "url('/img/uyuni.JPEG')",
      }),
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "class",
};
