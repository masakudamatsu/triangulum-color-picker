import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

import Figure from 'src/blocks/Figure';
import drawReticle from 'src/utils/drawReticle';

function getMousePosition(domElement, event) {
  const rect = domElement.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

const Reticle = ({
  canvasWidth,
  chroma = 50.55,
  luminance = 11.11,
  pixelSize = 10,
  eyedropper,
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
    drawReticle(canvasContext, chroma, luminance, pixelSize);
  });

  const handleClick = event => {
    const clickedPosition = getMousePosition(canvas.current, event);
    eyedropper(clickedPosition);
  };

  return (
    <Figure.Canvas
      overlay
      data-testid="reticle"
      height={canvasWidth}
      onClick={handleClick}
      ref={canvas}
      width={canvasWidth}
    />
  );
};

Reticle.propTypes = {
  canvasWidth: PropTypes.number,
  chroma: PropTypes.number,
  eyedropper: PropTypes.func,
  luminance: PropTypes.number,
  pixelSize: PropTypes.number,
};

export default Reticle;
