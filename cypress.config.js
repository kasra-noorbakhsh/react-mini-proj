const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    viewportWidth: 1000,
    viewportHeight: 660,
    specPattern: "cypress/e2e/**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    specPattern: 'cypress/component/**/*.spec.js',
  },
});
