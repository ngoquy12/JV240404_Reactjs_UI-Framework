/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        quyPink: "pink",
        vien: "green",
      },
    },
  },
  plugins: [],
  // Reset tất cả các style mặc định của tailwind CSS
  corePlugins: {
    preflight: false,
  },
};
