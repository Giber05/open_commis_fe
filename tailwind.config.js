module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D94C8",
        disable: "#9C9C9C",
        submit: "#00782C",
        reject: "#E41F2D",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
