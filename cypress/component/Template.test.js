import React from 'react';
import {mount} from 'cypress-react-unit-test';
import Template from 'src/components/Template';

describe('Template component', () => {
  it('gets rendered as before', () => {
    mount(<Template />);
    cy.matchImageSnapshot();
  });
});
