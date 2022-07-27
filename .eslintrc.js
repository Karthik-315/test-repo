module.exports = {
  root: true,
  
  rules: {
    "no-undef": "warn",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": "warn",
  },
  
  parserOptions: {
    ecmaVersion: 2020
  },
  
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
