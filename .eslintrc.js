module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "semi-style": ["error", "last"],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
