import React from 'react';
import {mount} from 'cypress-react-unit-test';
import Canvas from 'src/components/Canvas';

describe('Canvas component', () => {
  it('gets rendered as before', () => {
    mount(<Canvas />);
    cy.get('canvas').should('be.visible').matchImageSnapshot();
  });
});
