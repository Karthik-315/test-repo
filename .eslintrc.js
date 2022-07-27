module.exports = {
  root: true,
  extends: ["custom"],
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
