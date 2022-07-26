module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  parser: "babel-eslint",
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
  // ignorePatterns: ["/node_modules"],
};
