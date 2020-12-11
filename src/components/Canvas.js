import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import draw from 'src/utils/draw';

const Canvas = ({
  pureHue = {
    r: 255,
    g: 0,
    b: 0,
  },
  resolution = 3,
}) => {
  // set up canvas after the initial rendering
  const canvas = useRef();
  const [canvasContext, setCanvasContext] = useState();
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
    draw(canvasContext, pureHue, resolution);
  });

  const canvasWidthPx = `${101 * resolution}px`;

  return (
    <canvas
      data-testid="color-triangle"
      ref={canvas}
      width={canvasWidthPx}
      height={canvasWidthPx}
    />
  );
};

Canvas.propTypes = {
  pureHue: PropTypes.object,
  resolution: PropTypes.number,
};

export default Canvas;
