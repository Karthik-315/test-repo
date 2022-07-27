module.exports = {
  root: true,
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2020
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": "warn",
  }
};
