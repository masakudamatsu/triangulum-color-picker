import {errorText} from 'src/utils/errorText';

describe('Invalid values in:', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('RGB value fields', () => {
    ['-1', '256', 'text'].forEach(invalidValue => {
      it(`Invalid value: ${invalidValue}`, () => {
        [/^r$/i, /^g$/i, /^b$/i].forEach(fieldLabel => {
          cy.log('*** Before blurring ***');
          // Execute
          cy.findByLabelText(fieldLabel).clear().type(invalidValue);
          // Verify
          cy.verifyDefaultState(fieldLabel);
          cy.findByRole('alert').should('not.exist');

          cy.log('*** After blurring ***');
          // Execute
          cy.findByLabelText(fieldLabel).blur();
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.focused().should('have.attr', 'id', fieldLabel.source[1]);
          cy.findByRole('alert')
            .should('be.visible')
            .should('have.text', errorText[fieldLabel.source[1]]);

          cy.log('*** After blurring again ***');
          // Execute
          cy.findByLabelText(/css/i).click();
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.focused().should('not.have.attr', 'id', fieldLabel.source[1]);
          cy.findByRole('alert').should('not.exist');

          cy.log('*** After clicking again ***');
          // Execute
          cy.findByLabelText(fieldLabel).click();
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.findByRole('alert')
            .should('be.visible')
            .should('have.text', errorText[fieldLabel.source[1]]);

          cy.log('*** While typing ***');
          // Execute
          cy.findByLabelText(fieldLabel).type('1');
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.findByRole('alert')
            .should('be.visible')
            .should('have.text', errorText[fieldLabel.source[1]]);
          // Isolate
          cy.findByLabelText(fieldLabel).type('{backspace}');

          cy.log('*** As soon as correcting ***');
          // Execute
          if (invalidValue !== 'text') {
            cy.findByLabelText(fieldLabel).type('{movetostart}{del}1');
          } else {
            cy.findByLabelText(fieldLabel).clear().type('1');
          }
          // Verify
          cy.verifyDefaultState(fieldLabel);
          cy.findByRole('alert').should('not.exist');
        });
      });
    });
  });
});

describe('No value in:', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('RGB value fields', () => {
    [/^r$/i, /^g$/i, /^b$/i].forEach(fieldLabel => {
      cy.log('*** Before blurring ***');
      // Execute
      cy.findByLabelText(fieldLabel).clear();
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');

      cy.log('*** After blurring ***');
      // Execute
      cy.findByLabelText(fieldLabel).blur();
      // Verify
      cy.verifyErrorState(fieldLabel);
      cy.focused().should('have.attr', 'id', fieldLabel.source[1]);
      cy.findByRole('alert')
        .should('be.visible')
        .should('have.text', errorText[fieldLabel.source[1]]);

      cy.log('*** As soon as filling in ***');
      // Execute
      cy.findByLabelText(fieldLabel).type('1');
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
    });
  });
});
