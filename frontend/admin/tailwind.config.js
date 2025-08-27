export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px,1fr))",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};
