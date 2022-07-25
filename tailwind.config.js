module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/pages/*.{ts,tsx}",
      "./src/ui/**/*.{ts,tsx}",
    ],
    options: {
      // Purge CSS removes these classes somehow
      safelist: [
        "order-first",
        "order-last",
        /tablet(.)*/,
        /laptop(.)*/,
        /desktop(.)*/,
        /highRes(.)*/,
        "tablet:order-first",
        "tablet:order-last",
      ],
    },
  },
  darkMode: "class",
  theme: {
    borderWidth: {
      1: "1px",
      2: "2px",
      3: "3px",
    },
    borderRadius: {
      4: "4px",
      8: "8px",
      12: "12px",
      full: "50%",
    },
    fontWeight: {
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
    },
    spacing: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      13: "13px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      36: "36px",
      40: "40px",
      42: "42px",
      44: "44px",
      48: "48px",
      50: "50px",
      62: "62px",
      64: "64px",
      80: "80px",
    },
    extend: {
      boxShadow: {
        button: "0px 4px 12px rgba(39, 197, 131, 0.4);",
      },
      lineHeight: {
        0: "0px",
        18: "18px",
        20: "20px",
        24: "24px",
        27: "27px",
        30: "30px",
        32: "32px",
        34: "34px",
        36: "36px",
      },
      gridTemplateColumns: {
        "58/108": "108px 58px",
        "3/2": "2fr 3fr",
        "100/1/1/50": "100px 1fr 1fr 50px",
        "1/5": "200px auto",
        "7/1": "auto 40px",
        "5/2/2": "5fr 2fr 2fr",
        "320/1fr/100": "300px 1fr 52px",
        auto: "100px 250px 180px 100px 1fr 120px",
      },
      screens: {
        small: "576px",
        tablet: "767px",
        laptop: "1060px",
        desktop: "1280px",
        largeDesktop: "1536px",
        hr: "1920px",
      },

      listStyleType: {
        square: "square",
        circle: "circle",
      },
      colors: {
        green: "#27C583",
        highGreen: "#135b3d",
        lightGreen: "#93e2c1",
        gray: "#EDF0F3",
        gray300: "#656565",
        gray700: "#2C313B",
      },
      fontSize: {
        "3xs": ["8px"],
        "2xs": ["11px"],
        xs: ["12px"],
        sm: ["13px"],
        md: ["14px"],
        base: ["16px"],
        lg: ["18px"],
        xl: ["20px"],
        xxl: ["24px"],
      },
    },
    fontFamily: {
      sans: ["Open Sans", "ui-sans-serif", "system-ui"],
      secondary: ["Ubuntu"],
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme("colors.gray700"),
          fontSize: theme("fontSize.base")[0],
          // p: {
          //   lineHeight: 1.625,
          //   marginBottom: '16px',
          // },
          "h1,h2,h3,h4,h5,h6": {
            fontFamily: theme("fontFamily.secondary"),
            color: theme("colors.gray700"),
          },

          h2: {
            fontSize: theme("fontSize.lg")[0],
            // marginBottom: '20px',
            fontWeight: "700",
          },

          h3: {
            fontSize: theme("fontSize.lg")[0],
            marginBottom: "16px",
            fontWeight: "600",
          },
          "ul,ol,li": {
            marginLeft: "16px",
            listStyleType: "disc",
            marginBottom: "16px",
          },
          a: {
            color: theme("colors.purple"),
          },
        },
      },
      dark: {
        css: {
          "h1,h2,h3,h4,h5,h6": {
            color: theme("colors.dark-gray1"),
          },
        },
      },
      tablet: {
        css: {
          fontSize: theme("fontSize.base")[0],
        },
      },
      laptop: {
        css: {
          fontSize: theme("fontSize.base")[0],
          h2: {
            fontSize: theme("fontSize.xl")[0],
          },
        },
      },
    }),
  },
  variants: {
    scrollbar: ["dark"],
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};
