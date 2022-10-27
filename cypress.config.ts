import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false, // disable default support file (because I dont have one)
  },
  chromeWebSecurity: false, // this is needed to allow cypress to access the formsubmit redirect
});