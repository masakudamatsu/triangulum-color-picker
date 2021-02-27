import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command';
import {color} from 'src/utils/specColor';

// Cypress Image Snapshot
// Disable the image snapshot tests in the interactive mode: see https://glebbahmutov.com/blog/open-source-visual-testing-of-components/#local-workflow
if (Cypress.config('isInteractive')) {
  Cypress.Commands.add('matchImageSnapshot', () => {
    cy.log('Skipping snapshot 👀');
  });
} else {
  // Enable .matchImageSnapshot()
  addMatchImageSnapshotCommand({
    capture: 'viewport', // this option is ignored for DOM-element snapshots

    // Allow tiny differences between snapshots
    customDiffConfig: {threshold: 0.1}, // threshold for each pixel (0.1 is the recommended value by Cypress: https://github.com/jaredpalmer/cypress-image-snapshot#options)
    failureThreshold: 0.0005, // threshold for entire image (the recommended 0.03 is way too generous)
    failureThresholdType: 'percent', // percent of image or number of pixels

    // see https://github.com/jaredpalmer/cypress-image-snapshot#options
  });
}

Cypress.Commands.add('verifyDefaultState', (fieldLabel, errorText) => {
  cy.findByLabelText(fieldLabel)
    .should('have.css', 'background-color', color.input.background)
    .should('have.css', 'border-color', color.input.border)
    .should('have.css', 'color', color.input.font);
  cy.findByText(fieldLabel).should('have.css', 'color', color.input.font);
  cy.findByRole('alert').should('not.exist');
});

Cypress.Commands.add('verifyErrorState', (fieldLabel, errorText) => {
  cy.findByLabelText(fieldLabel)
    .should('have.css', 'background-color', color.input.error)
    .should('have.css', 'border-color', color.input.error)
    .should('have.css', 'color', color.input.onError);
  cy.findByText(fieldLabel).should('have.css', 'color', color.input.onError);
  cy.findByRole('alert').should('be.visible').should('have.text', errorText);
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
