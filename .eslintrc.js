module.exports = {
  root: true,
  env: {
    es2021: true
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
