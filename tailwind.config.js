/** @type {import('tailwindcss').Config} */
export const content = ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      white: "#fff",
      silver: "#b7b7b7",
      gainsboro: "#d9d9d9",
      black: "#000",
      mediumblue: "#0543f5",
      mediumslateblue: "#2b69ff",
      whitesmoke: "#eaeaea",
      gray: "#7f7f7f",
      darkorange: "#ff8f28",
      seagreen: {
        100: "#299b66",
        200: "#226e48",
      },
      mediumseagreen: "#42b580",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      "red-hat-display": ["'Red Hat Display'", "sans-serif"],
    },
    borderRadius: {
      "53xl": "72px",
      "13xl": "32px",
    },
  },
  fontSize: {
    "13xl": "32px",
    "7xl": "26px",
    lgi: "19px",
    "17xl": "36px",
    "10xl": "29px",
    "3xl": "22px",
    "5xl": "24px",
    inherit: "inherit",
  },
  screens: {
    mq1275: {
      raw: "screen and (max-width: 1275px)",
    },
    lg: {
      max: "1200px",
    },
    mq1050: {
      raw: "screen and (max-width: 1050px)",
    },
    mq1000: {
      raw: "screen and (max-width: 1000px)",
    },
    mq975: {
      raw: "screen and (max-width: 975px)",
    },
    mq750: {
      raw: "screen and (max-width: 750px)",
    },
    mq725: {
      raw: "screen and (max-width: 725px)",
    },
    mq450: {
      raw: "screen and (max-width: 450px)",
    },
  },
};
export const corePlugins = {
  preflight: false,
};
