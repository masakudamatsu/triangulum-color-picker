import {errorText} from 'src/utils/errorText';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

function hexToRgb(hexCode) {
  const {rgb} = parseColor(hexCode);
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

describe('Invalid values in:', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('Hex value field', () => {
    ['#a', '#a3', '#aa33c', '#zzzzzz'].forEach(invalidValue => {
      it(`Invalid value: ${invalidValue}`, () => {
        [/^hex$/i].forEach(fieldLabel => {
          // Change the background color to a dark one so the font color turns into white
          const newColor = '#00f';
          cy.findByLabelText(fieldLabel).clear().type(newColor);

          cy.log('*** Before blurring ***');
          // Execute
          cy.findByLabelText(fieldLabel).clear().type(invalidValue);
          // Verify
          const expectedBackgroundColor =
            invalidValue === '#aa33c' ? '#aa3' : newColor;
          cy.findByLabelText(fieldLabel).should(
            'have.css',
            'background-color',
            hexToRgb(expectedBackgroundColor),
          );
          cy.findByRole('alert').should('not.exist');

          cy.log('*** After blurring ***');
          // Execute
          cy.findByLabelText(fieldLabel).blur();
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.focused().should('have.attr', 'id', 'hex');
          cy.findByRole('alert')
            .should('be.visible')
            .should('have.text', errorText['hex']);

          cy.log('*** After blurring again ***');
          // Execute
          cy.findByLabelText(/css/i).click();
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.focused().should('not.have.attr', 'id', 'hex');
          cy.findByRole('alert').should('not.exist');

          cy.log('*** After clicking again ***');
          // Execute
          cy.findByLabelText(fieldLabel).click();
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.findByRole('alert')
            .should('be.visible')
            .should('have.text', errorText['hex']);

          cy.log('*** While typing ***');
          // Execute
          cy.findByLabelText(fieldLabel).type('{backspace}');
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.findByRole('alert')
            .should('be.visible')
            .should('have.text', errorText['hex']);
          // Isolate
          cy.findByLabelText(fieldLabel).type(invalidValue.slice(-1));

          cy.log('*** As soon as correcting ***');
          // Execute
          if (invalidValue === '#a') {
            cy.findByLabelText(fieldLabel).type('3c');
          } else if (invalidValue === '#a3' || invalidValue === '#aa33c') {
            cy.findByLabelText(fieldLabel).type('c');
          } else {
            cy.findByLabelText(fieldLabel).clear().type('#a3c');
          }
          // Verify
          cy.findByLabelText(fieldLabel).should(
            'have.css',
            'background-color',
            hexToRgb('#a3c'),
          );
          cy.findByRole('alert').should('not.exist');
        });
      });
    });
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
  describe('H value field', () => {
    ['-1', '360', 'text'].forEach(invalidValue => {
      it(`Invalid value: ${invalidValue}`, () => {
        [/^h$/i].forEach(fieldLabel => {
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

  describe('SL value fields', () => {
    ['-1', '200', 'text'].forEach(invalidValue => {
      it(`Invalid value: ${invalidValue}`, () => {
        [/^s$/i, /^l$/i].forEach(fieldLabel => {
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
  it('HEX value field', () => {
    [/^hex$/i].forEach(fieldLabel => {
      cy.log('*** Before blurring ***');
      // Execute
      cy.findByLabelText(fieldLabel).clear();
      // Verify
      cy.findByLabelText(fieldLabel).should(
        'have.css',
        'background-color',
        'rgb(255, 0, 0)',
      );
      cy.findByRole('alert').should('not.exist');

      cy.log('*** After blurring ***');
      // Execute
      cy.findByLabelText(fieldLabel).blur();
      // Verify
      cy.verifyErrorState(fieldLabel);
      cy.focused().should('have.attr', 'id', 'hex');
      cy.findByRole('alert')
        .should('be.visible')
        .should('have.text', errorText['hex']);
    });
  });
  it('RGB/HSL value fields', () => {
    [/^r$/i, /^g$/i, /^b$/i, /^h$/i, /^s$/i, /^l$/i].forEach(fieldLabel => {
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
