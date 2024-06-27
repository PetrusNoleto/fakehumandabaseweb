import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'fakeOrange':'#FF5C00',
        'fakeDark':'#141414',
        'fakeBlackTranparent':'#000000/25'
      }
    },
  },
  plugins: [],
};
export default config;
