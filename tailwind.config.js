// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
  // more options here
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code": {
              "@apply bg-green-50 text-green-700": "",
              "@apply px-2 py-0.5 -m-0.5 rounded": "",
            },
            "code::before": {
              content: '""'
            },
            "code::after": {
              content: '""'
            },
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
