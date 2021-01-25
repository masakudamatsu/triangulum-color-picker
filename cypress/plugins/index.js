/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

// Cypress Image Snapshot
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  // https://docs.cypress.io/api/plugins/browser-launch-api.html#Set-screen-size-when-running-headless
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'electron' && browser.isHeadless) {
      launchOptions.preferences.width = 1920;
      launchOptions.preferences.height = 1080;
    }
    return launchOptions;
  });

  // Cypress Image Snapshot
  addMatchImageSnapshotPlugin(on, config);

  // Cypress React Unit Test
  // see https://github.com/bahmutov/cypress-react-unit-test/blob/main/docs/recipes.md#nextjs
  require('cypress-react-unit-test/plugins/next')(on, config);

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config;
};
