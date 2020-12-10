describe('Smoke Test', () => {
  it('Makes sure the welcome message comes up', () => {
    cy.visit('/').contains('Welcome to Next.js!');
  });
});
