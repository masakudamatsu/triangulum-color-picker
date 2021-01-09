import React from 'react';
import {mount} from 'cypress-react-unit-test';
import CanvasWrapper from 'src/components/CanvasWrapper';
import colorAnalyzer from 'src/utils/colorAnalyzer';
import getCanvasMetrics from 'src/utils/getCanvasMetrics';
import parseColor from 'parse-color';

describe('CanvasWrapper component gets rendered as expected', () => {
  [3, 5].forEach(pixelSize => {
    it(`for pixelSize set to be ${pixelSize.toString()}`, () => {
      const {canvasWidth} = getCanvasMetrics(pixelSize);
      cy.viewport(canvasWidth, canvasWidth);

      const userColor = 'rgb(29, 161, 242)';

      const {luminance, chroma, hue, neutralColor} = colorAnalyzer(userColor);
      const pureHue = {
        r: parseColor(hue.rgb).rgb[0],
        g: parseColor(hue.rgb).rgb[1],
        b: parseColor(hue.rgb).rgb[2],
      };
      mount(
        <CanvasWrapper
          chroma={chroma}
          luminance={luminance}
          pixelSize={pixelSize}
          pureHue={pureHue}
        />,
      );
      cy.get('figure')
        .should('be.visible')
        .matchImageSnapshot(`pixelSize${pixelSize}`);
    });
  });
});
