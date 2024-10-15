/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-untitled-white": "#fff",
        "light-secondary": "rgba(255, 255, 255, 0.7)",
        gray: {
          "100": "#0d1b2a",
          "200": "rgba(0, 0, 0, 0.12)",
          "300": "rgba(0, 0, 0, 0.7)",
          "400": "rgba(0, 0, 0, 0.1)",
          "500": "rgba(255, 255, 255, 0.08)",
        },
        mediumaquamarine: "#45bea6",
      },
      spacing: {},
      fontFamily: {
        "head-h-20": "Inter",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "81xl": "100px",
        "53xl": "72px",
        "21xl": "40px",
        "6xl": "25px",
      },
    },
    fontSize: {
      xl: "20px",
      sm: "14px",
      base: "16px",
      xs: "12px",
      "23xl": "42px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
