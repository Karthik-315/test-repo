module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["eslint:recommended"],
  parser: "babel-eslint",
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
