module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  rules: {
    quotes: ["error", "single"],
    semi: ["error", "always"],
  }
};
