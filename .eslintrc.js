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
    quotes: ["error", "double"],
    semi: ["error", "always"],
  }
};
