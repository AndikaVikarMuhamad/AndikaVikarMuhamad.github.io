/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#facc15",
        violet7: "#8b5cf6", //400
        violet6: "#c4b5fd", //300
        violet5: "#ede9fe", //100
        violet4: "#ddd6fe", //200
        violet2: "#6b21a8", //p800
        violet3: "#7c3aed", //600
        violet: "#7c3aed",
        kuning: "#FFCB00",
        biru: "#14b8a6",
        sky: "#7dd3fc",
        ungu: "#8b5cf6",
        danger: "#facc15",
        Yellow: "#eab308",
        // dark: "#1e293b",
        dark: "#000000",
        // hitam: "#0f172a",
        hitam: "#1e293b",
        abu: "#64748b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
