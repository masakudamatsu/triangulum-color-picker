import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import draw from 'src/utils/draw';

const Canvas = ({resolution = 3}) => {
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
    draw(canvasContext, resolution);
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
  resolution: PropTypes.number,
  setSelectedColor: PropTypes.func,
};

export default Canvas;
