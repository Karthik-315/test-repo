module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  babelOptions: {
    presets: ["@babel/preset-react"],
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
