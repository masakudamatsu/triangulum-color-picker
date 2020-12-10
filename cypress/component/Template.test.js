import React from 'react';
import {mount} from 'cypress-react-unit-test';
import Template from 'src/components/Template';

describe('Template component', () => {
  it('gets rendered as before', () => {
    mount(<Template />);
    cy.matchImageSnapshot();
    // cy.get('body').should('be.visible').matchImageSnapshot();
  });
});
