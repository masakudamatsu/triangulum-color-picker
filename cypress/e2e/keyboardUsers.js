describe('Pressing Enter key does not trigger the page reload', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  [
    /color code/i,
    /^hex$/i,
    /^r$/i,
    /^g$/i,
    /^b$/i,
    /^h$/i,
    /^s$/i,
    /^l$/i,
  ].forEach(fieldLabel => {
    it(`${fieldLabel}`, () => {
      // See https://glebbahmutov.com/blog/detect-page-reload/ for whey the following code detects whether the webpage gets reloaded or not.

      // mark our window object to "know" when it gets reloaded
      cy.window().then(w => (w.beforeReload = true));
      // initially the new property is there
      cy.window().should('have.prop', 'beforeReload', true);

      cy.findByLabelText(fieldLabel).click().type('{enter}');

      // without reload, the property should not be gone.
      cy.window().should('have.prop', 'beforeReload');
    });
  });
});
