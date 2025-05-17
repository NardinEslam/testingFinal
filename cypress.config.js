const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js", // or .spec.js if you prefer
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // You can add custom plugins here if needed
      return config;
    },
  },
});
