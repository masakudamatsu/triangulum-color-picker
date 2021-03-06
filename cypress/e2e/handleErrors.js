import {color} from 'src/utils/specColor';
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
  describe('CSS color code field', () => {
    ['r'].forEach(invalidValue => {
      it(`Invalid value: ${invalidValue}`, () => {
        [/color code/i].forEach(fieldLabel => {
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
          cy.focused().should('have.attr', 'id', 'colorCode');
          cy.findByRole('alert')
            .should('be.visible')
            .should('have.text', errorText['colorCode']);

          cy.log('*** After blurring again ***');
          // Execute
          cy.findByLabelText(/hex/i).click();
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.focused().should('not.have.attr', 'id', 'colorCode');
          cy.findByRole('alert').should('not.exist');

          cy.log('*** After clicking again ***');
          // Execute
          cy.findByLabelText(fieldLabel).click();
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.findByRole('alert')
            .should('be.visible')
            .should('have.text', errorText['colorCode']);

          cy.log('*** While typing ***');
          // Execute
          cy.findByLabelText(fieldLabel).type('gb(');
          // Verify
          cy.verifyErrorState(fieldLabel);
          cy.findByRole('alert')
            .should('be.visible')
            .should('have.text', errorText['colorCode']);

          cy.log('*** As soon as correcting ***');
          // Execute
          cy.findByLabelText(fieldLabel).type('20, 40, 60)');
          // Verify
          cy.findByLabelText(fieldLabel).should(
            'have.css',
            'background-color',
            color.input.background,
          );
          cy.findByRole('alert').should('not.exist');
        });
      });
    });
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
    ['-1', '361', 'text'].forEach(invalidValue => {
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
  it('CSS color code field', () => {
    [/color code/i].forEach(fieldLabel => {
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
      cy.focused().should('have.attr', 'id', 'colorCode');
      cy.findByRole('alert')
        .should('be.visible')
        .should('have.text', errorText['colorCode']);

      cy.log('*** As soon as filling in ***');
      // Execute
      cy.findByLabelText(fieldLabel).type('#123');
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
    });
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

describe('No alert with whitespaces at the beginning or at the end:', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('CSS color code field', () => {
    const fieldLabel = /color code/i;
    ['#ff0304', 'rgb(255, 3, 4)', 'hsl(0, 100%, 51%)'].forEach(colorCode => {
      cy.log('***** Whitespace at the beginning *****');
      // Execute
      cy.findByLabelText(fieldLabel)
        .clear()
        .type(' ' + colorCode);

      cy.log('*** Before blurring ***');
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
      // cy.findByLabelText(fieldLabel).should('have.value', ' ' + colorCode);

      cy.log('*** After blurring ***');
      // Execute
      cy.findByLabelText(fieldLabel).blur();
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
      cy.findByLabelText(fieldLabel).should('have.value', colorCode);

      cy.log('***** Whitespace at the end *****');
      // Execute
      cy.findByLabelText(fieldLabel)
        .clear()
        .type(colorCode + ' ');

      cy.log('*** Before blurring ***');
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
      // cy.findByLabelText(fieldLabel).should('have.value', colorCode + ' ');

      cy.log('*** After blurring ***');
      // Execute
      cy.findByLabelText(fieldLabel).blur();
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
      cy.findByLabelText(fieldLabel).should('have.value', colorCode);
    });
  });
  it('Hex value field', () => {
    const fieldLabel = /hex/i;
    const validColorCode = '#ff0304';
    cy.log('***** Whitespace at the beginning *****');
    // Execute
    cy.findByLabelText(fieldLabel)
      .clear()
      .type(' ' + validColorCode);

    cy.log('*** Before blurring ***');
    // Verify
    cy.findByLabelText(fieldLabel).should(
      'have.css',
      'background-color',
      hexToRgb(validColorCode),
    );
    cy.findByRole('alert').should('not.exist');
    // cy.findByLabelText(fieldLabel).should('have.value', ' ' + validColorCode);

    cy.log('*** After blurring ***');
    // Execute
    cy.findByLabelText(fieldLabel).blur();
    // Verify
    cy.findByLabelText(fieldLabel).should(
      'have.css',
      'background-color',
      hexToRgb(validColorCode),
    );
    cy.findByRole('alert').should('not.exist');
    cy.findByLabelText(fieldLabel).should('have.value', validColorCode);

    cy.log('***** Whitespace at the end *****');
    // Execute
    cy.findByLabelText(fieldLabel)
      .clear()
      .type(validColorCode + ' ');

    cy.log('*** Before blurring ***');
    // Verify
    cy.findByLabelText(fieldLabel).should(
      'have.css',
      'background-color',
      hexToRgb(validColorCode),
    );
    cy.findByRole('alert').should('not.exist');
    // cy.findByLabelText(fieldLabel).should('have.value', validColorCode + ' ');

    cy.log('*** After blurring ***');
    // Execute
    cy.findByLabelText(fieldLabel).blur();
    // Verify
    cy.findByLabelText(fieldLabel).should(
      'have.css',
      'background-color',
      hexToRgb(validColorCode),
    );
    cy.findByRole('alert').should('not.exist');
    cy.findByLabelText(fieldLabel).should('have.value', validColorCode);
  });
  it('RGB/HSL value fields', () => {
    [/^r$/i, /^g$/i, /^b$/i, /^h$/i, /^s$/i, /^l$/i].forEach(fieldLabel => {
      const validValue = '100';
      cy.log('***** Whitespace at the beginning *****');
      // Execute
      cy.findByLabelText(fieldLabel)
        .clear()
        .type(' ' + validValue);

      cy.log('*** Before blurring ***');
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
      // cy.findByLabelText(fieldLabel).should('have.value', ' ' + validValue);

      cy.log('*** After blurring ***');
      // Execute
      cy.findByLabelText(fieldLabel).blur();
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
      cy.findByLabelText(fieldLabel).should('have.value', validValue);

      cy.log('***** Whitespace at the end *****');
      // Execute
      cy.findByLabelText(fieldLabel)
        .clear()
        .type(validValue + ' ');

      cy.log('*** Before blurring ***');
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
      // cy.findByLabelText(fieldLabel).should('have.value', validValue + ' ');

      cy.log('*** After blurring ***');
      // Execute
      cy.findByLabelText(fieldLabel).blur();
      // Verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
      cy.findByLabelText(fieldLabel).should('have.value', validValue);
    });
  });
});

describe('Alert disappears when updating other fields', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Color code field', () => {
    // set up
    cy.findByLabelText(/color code/i)
      .clear()
      .type('invalid text')
      .blur();

    // correction by color code field
    cy.findByLabelText(/hex/i).clear().type('#172c38').blur();

    // verify
    cy.verifyDefaultState(/color code/i);
    cy.findByRole('alert').should('not.exist');
  });
  it('Hex value field', () => {
    // set up
    const fieldLabel = /hex/i;
    cy.findByLabelText(fieldLabel).clear().type('invalid text').blur();

    // correction by color code field
    const validColorCode = 'rgb(23, 44, 56)';
    cy.findByLabelText(/color code/i)
      .clear()
      .type(validColorCode)
      .blur();

    // verify
    cy.findByLabelText(fieldLabel).should(
      'have.css',
      'background-color',
      validColorCode,
    );
    cy.findByRole('alert').should('not.exist');
  });
  it('RGB/HSL value fields', () => {
    [/^r$/i, /^g$/i, /^b$/i, /^h$/i, /^s$/i, /^l$/i].forEach(fieldLabel => {
      // set up
      cy.findByLabelText(fieldLabel).clear().type('invalid text').blur();

      // correction by color code field
      cy.findByLabelText(/color code/i)
        .clear()
        .type('rgb(23, 44, 56)')
        .blur();

      // verify
      cy.verifyDefaultState(fieldLabel);
      cy.findByRole('alert').should('not.exist');
    });
  });
});
