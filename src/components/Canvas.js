import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {canvasWidth, draw} from 'src/utils/draw';

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

  return (
    <canvas
      data-testid="color-triangle"
      ref={canvas}
      width={canvasWidth}
      height={canvasWidth}
      style={{
        maxWidth: `1010 px`,
        width: `95%`,
      }}
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
