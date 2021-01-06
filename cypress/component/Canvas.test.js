import React from 'react';
import {mount} from 'cypress-react-unit-test';
import Canvas from 'src/components/Canvas';
import colorAnalyzer from 'src/utils/colorAnalyzer';
import parseColor from 'parse-color';

describe('Canvas component', () => {
  it('gets rendered as before', () => {
    const userColor = 'rgb(29, 161, 242)';
    const {luminance, chroma, hue, neutralColor} = colorAnalyzer(userColor);
    const pureHue = {
      r: parseColor(hue.rgb).rgb[0],
      g: parseColor(hue.rgb).rgb[1],
      b: parseColor(hue.rgb).rgb[2],
    };
    mount(<Canvas luminance={luminance} pureHue={pureHue} chroma={chroma} />);
    cy.get('canvas').should('be.visible').matchImageSnapshot();
  });
});
