describe('Entering css color code shows its luminance and saturation', () => {
  it('for Twitter blue and then for McDonalds red', () => {
    const twitterBlue = 'rgb(29, 161, 242)';
    const mcdonaldsRed = 'rgb(191, 12, 12)';
    cy.visit('/');

    cy.findByLabelText(/color code/i).type(twitterBlue);
    cy.get('canvas').should('be.visible').matchImageSnapshot('twitterBlue');

    cy.findByLabelText(/color code/i)
      .clear()
      .type(mcdonaldsRed);
    cy.get('canvas').should('be.visible').matchImageSnapshot('mcdonaldsRed');
  });
});