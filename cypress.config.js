const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://prometeoerptesting.azurewebsites.net/login",
    video : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
