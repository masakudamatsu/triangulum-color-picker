import {color} from 'src/utils/specColor';

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
          cy.verifyDefaultState(fieldLabel);

          cy.log('*** Alerted and focused after blurring ***');
          // Execute
          cy.findByLabelText(fieldLabel).blur();
          // Verify
          cy.verifyErrorState(fieldLabel);
          // cy.focused().should('have.attr', 'id', fieldLabel.source[1]);

          cy.log('*** Alerted as long as invalid ***');
          // Execute
          cy.findByLabelText(fieldLabel).type('1');
          // Verify
          cy.verifyErrorState(fieldLabel);
          // cy.focused().should('have.attr', 'id', fieldLabel.source[1]);
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
          cy.verifyDefaultState(fieldLabel);
        });
      });
    });
  });
});
