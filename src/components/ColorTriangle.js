import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

import Figure from 'src/blocks/Figure';
import drawTriangle from 'src/utils/drawTriangle';

const ColorTriangle = ({
  canvasContext,
  canvasWidth,
  pixelSize = 10,
  pureHue = {
    r: 255,
    g: 0,
    b: 0,
  },
  setCanvasContext,
}) => {
  // set up canvas after the initial rendering
  const canvas = useRef();
  useEffect(() => {
    const context = canvas.current.getContext('2d');
    setCanvasContext(context);
  }, []);

  // Draw the color triangle
  useEffect(() => {
    if (!canvasContext) {
      return;
    }
    canvasContext.clearRect(0, 0, canvas.current.width, canvas.current.height);
    drawTriangle(canvasContext, pixelSize, pureHue);
  });

  return (
    <Figure.Canvas
      data-testid="color-triangle"
      height={canvasWidth}
      ref={canvas}
      width={canvasWidth}
    />
  );
};

ColorTriangle.propTypes = {
  canvasContext: PropTypes.object,
  canvasWidth: PropTypes.number,
  pixelSize: PropTypes.number,
  pureHue: PropTypes.object,
  setCanvasContext: PropTypes.func,
};

export default ColorTriangle;
