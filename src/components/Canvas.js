import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import draw from 'src/utils/draw';
import getCanvasMetrics from 'src/utils/getCanvasMetrics';

const Canvas = ({
  luminance = 11.11,
  pureHue = {
    r: 255,
    g: 0,
    b: 0,
  },
  pixelSize = 10,
  chroma = 50.55,
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
    draw(canvasContext, luminance, pureHue, pixelSize, chroma);
  });

  const {canvasWidth} = getCanvasMetrics(pixelSize);

  return (
    <canvas
      data-testid="color-triangle"
      ref={canvas}
      width={canvasWidth}
      height={canvasWidth}
    />
  );
};

Canvas.propTypes = {
  luminance: PropTypes.number,
  pureHue: PropTypes.object,
  pixelSize: PropTypes.number,
  chroma: PropTypes.number,
};

export default Canvas;
