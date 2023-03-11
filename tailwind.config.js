module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_50_00: "#fff9fc00",
        gray_51: "#fbfbfb",
        pink_500_71: "#ff2c6c71",
        bluegray_400_33: "#7090b033",
        amber_300_59: "#ffd76059",
        red_500: "#f44444",
        green_700: "#219653",
        gray_50: "#f6f7fa",
        teal_200: "#77d3d6",
        red_100: "#ffd2dd",
        teal_100: "#a9c9dd",
        green_A700: "#11bb69",
        black_900: "#000000",
        black_900_07: "#00000007",
        deep_purple_A100_3f: "#a162ff3f",
        pink_500: "#ff2c6c",
        deep_purple_A100: "#ab72fe",
        red_100_6b: "#fac5cf6b",
        gray_700: "#606060",
        gray_400: "#c2c2c2",
        gray_901: "#1b1b1b",
        amber_400: "#ffcb2e",
        gray_902: "#212121",
        blue_800: "#155eae",
        blue_500: "#298ffe",
        gray_900: "#262626",
        bluegray_100: "#d4d8e2",
        green_A400_3f: "#0cff953f",
        gray_200: "#efefef",
        yellow_A700: "#ffd201",
        amber_300_67: "#f3cd5867",
        blue_50: "#e1f2ff",
        teal_A400: "#3ae5b2",
        blue_51: "#d1e7ff",
        pink_500_6c: "#ff2c6c6c",
        bluegray_900: "#222852",
        white_A700_00: "#fcfdff00",
        bluegray_400: "#8a8a8a",
        gray_300_9b: "#e5e5e59b",
        bluegray_101: "#c8daea",
        white_A701: "#fffbfc",
        white_A700: "#ffffff",
        indigo_600_26: "#4e569d26",
      },
      fontFamily: {
        iransansxfanum: "IRANSans(FaNum)",
        iransansx: "IRANSans(FaNum)",
        hkgrotesk: "HK Grotesk",
        segoeui: "Segoe UI",
        inter: "Inter",
      },
      backgroundImage: {
        gradient: "linear-gradient(182deg ,#fcfdff00,#e1f2ff,#fff9fc00)",
      },
      boxShadow: {
        // bs: "0px 1px  0px 0px #4e569d26",
        // bs2: "0px 16px  165px 0px #7090b033",
        bs1: "0px 25px  35px 0px #00000007",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
