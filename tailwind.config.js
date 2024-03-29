/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#ff7506",
        error: "#FF4747",
        second: "#ffac69",
        third: "#bbbbc0 ",
      },
      backgroundColor: {
        primary: "#ff7506",
        sidebar: "#020220",
        menu: "#30303f",
        "hover-menu": "#3e3e5b",
        input: "#2b2b3f",
        "input-readonly": "#3e3e50",
        modal: "#3e3e5b",
        toast: "#727288",
        main: "#1e1e2e",
        table: "#2a2a3b",
      },
      borderColor: {
        primary: "#ff7506",
        second: "#727288",
      },
      margin: {
        header: "80px",
      },
      fontSize: {
        "size-primary": "16px",
        "size-header": "36px",
      },
    },
  },
  plugins: [],
};
