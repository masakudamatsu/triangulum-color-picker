import {errorText} from 'src/utils/errorText';

describe('Invalid values in:', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('RGB value fields', () => {
    ['-1', '256', 'text'].forEach(invalidValue => {
      it(`Invalid value: ${invalidValue}`, () => {
        [/^r$/i, /^g$/i, /^b$/i].forEach(fieldLabel => {
          cy.log('*** No alert before blurring ***');
          // Execute
          cy.findByLabelText(fieldLabel).clear().type(invalidValue);
          // Verify
          cy.verifyDefaultState(fieldLabel, errorText.rgb);

          cy.log('*** Alerted and focused after blurring ***');
          // Execute
          cy.findByLabelText(fieldLabel).blur();
          // Verify
          cy.verifyErrorState(fieldLabel, errorText.rgb);
          cy.focused().should('have.attr', 'id', fieldLabel.source[1]);

          cy.log('*** Not forcibly focused after blurring again ***');
          // Execute
          cy.findByLabelText(/css/i).click();
          // Verify
          cy.focused().should('not.have.attr', 'id', fieldLabel.source[1]);

          cy.log('*** Alerted as long as invalid ***');
          // Execute
          cy.findByLabelText(fieldLabel).type('1');
          // Verify
          cy.verifyErrorState(fieldLabel, errorText.rgb);
          // Isolate
          cy.findByLabelText(fieldLabel).type('{backspace}');

          cy.log('*** No alert as soon as corrected ***');
          // Execute
          if (invalidValue !== 'text') {
            cy.findByLabelText(fieldLabel).type('{movetostart}{del}1');
          } else {
            cy.findByLabelText(fieldLabel).clear().type('1');
          }
          // Verify
          cy.verifyDefaultState(fieldLabel, errorText.rgb);
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
      cy.log('*** No alert before blurring ***');
      // Execute
      cy.findByLabelText(fieldLabel).clear();
      // Verify
      cy.verifyDefaultState(fieldLabel, errorText.rgb);
      cy.findByRole('alert').should('not.exist');

      cy.log('*** Alerted and focused after blurring ***');
      // Execute
      cy.findByLabelText(fieldLabel).blur();
      // Verify
      cy.verifyErrorState(fieldLabel, errorText.rgb);
      cy.focused().should('have.attr', 'id', fieldLabel.source[1]);

      cy.log('*** No alert as soon as corrected ***');
      // Execute
      cy.findByLabelText(fieldLabel).type('1');
      // Verify
      cy.verifyDefaultState(fieldLabel, errorText.rgb);
    });
  });
});
