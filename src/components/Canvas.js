import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import draw from 'src/utils/draw';

const Canvas = ({
  luminance = 11,
  pureHue = {
    r: 255,
    g: 0,
    b: 0,
  },
  resolution = 3,
  saturation = 50,
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
    draw(canvasContext, luminance, pureHue, resolution, saturation);
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
  luminance: PropTypes.number,
  pureHue: PropTypes.object,
  resolution: PropTypes.number,
  saturation: PropTypes.number,
};

export default Canvas;
