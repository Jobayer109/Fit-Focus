const flowbite = require("flowbite-react/tailwind");
const daisyui = require("daisyui");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      animation: {
        "wave-animation": "wave-animation 10s linear infinite",
      },
      boxShadow: {
        custom: "rgba(255, 165, 0, 0.35) 0px 5px 5px 0px",
      },
      colors: {
        slate: {
          950: "#1a202c",
        },
        violet: {
          600: "#7f5af0",
        },
      },
      fontFamily: {
        Roboto: '"Roboto", sans-serif',
      },
    },
  },

  plugins: [daisyui, flowbite.plugin()],
};
