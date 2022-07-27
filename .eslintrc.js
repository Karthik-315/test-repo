module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
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
