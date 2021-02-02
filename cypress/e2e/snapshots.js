import getCanvasMetrics from 'src/utils/getCanvasMetrics';
import {threeColumns, twoColumns} from 'src/utils/breakpoints';

const twitterBlue = 'rgb(29, 161, 242)';
const grey = 'rgb(129, 129, 129)';

describe('Entire UI is correctly shown', () => {
  it('for narrowest screen size', () => {
    cy.viewport('iphone-5'); // 320 x 568 (see https://docs.cypress.io/api/commands/viewport.html#Arguments)
    cy.visit('/');
    cy.findByLabelText(/color code/i)
      .clear()
      .type(twitterBlue);
    cy.matchImageSnapshot('entire-ui-narrowest', {capture: 'fullPage'});
  });
  it('for tablet screen size', () => {
    cy.viewport('ipad-2'); // 768 x 1024 (see https://docs.cypress.io/api/commands/viewport.html#Arguments)
    cy.visit('/');
    cy.findByLabelText(/color code/i)
      .clear()
      .type(twitterBlue);
    cy.matchImageSnapshot('entire-ui-tablet', {capture: 'fullPage'});
  });
  it('for laptop screen size', () => {
    cy.viewport(twoColumns.minWidth, twoColumns.minHeight);
    cy.visit('/');
    cy.findByLabelText(/color code/i)
      .clear()
      .type(twitterBlue);
    cy.matchImageSnapshot('entire-ui-laptop', {capture: 'fullPage'});
  });
  it('for desktop screen size', () => {
    cy.viewport(threeColumns.minWidth, threeColumns.minHeight);
    cy.visit('/');
    cy.findByLabelText(/color code/i)
      .clear()
      .type(twitterBlue);
    cy.matchImageSnapshot('entire-ui-desktop', {capture: 'fullPage'});
  });
});

describe('Choosing the neutral color does not change the hue of the color triangle', () => {
  it('When clicking on the color triangle', () => {
    const {canvasWidth, squareTopLeftX, squareTopLeftY} = getCanvasMetrics(3);
    cy.viewport(canvasWidth, canvasWidth);

    cy.visit('/');
    cy.findByLabelText(/color code/i)
      .clear()
      .type(twitterBlue);

    cy.findByTestId('reticle').click(squareTopLeftX, squareTopLeftY + 100);
    cy.findByTestId('color-triangle')
      .should('be.visible')
      .matchImageSnapshot('clicking-neutral-color');
  });
  it('When entering CSS code', () => {
    const {canvasWidth} = getCanvasMetrics(3);
    cy.viewport(canvasWidth, canvasWidth);
    cy.visit('/');
    cy.findByLabelText(/color code/i)
      .clear()
      .type(twitterBlue);

    cy.findByLabelText(/color code/i)
      .clear()
      .type(grey);
    cy.findByTestId('color-triangle')
      .should('be.visible')
      .matchImageSnapshot('typing-neutral-color');
  });
});
