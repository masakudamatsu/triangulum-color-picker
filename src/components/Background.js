import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

import Figure from 'src/blocks/Figure';
import drawBackground from 'src/utils/drawBackground';

const Background = ({canvasWidth, pixelSize = 10}) => {
  // set up canvas after the initial rendering
  const canvas = useRef();
  const [canvasContext, setCanvasContext] = useState();
  useEffect(() => {
    const context = canvas.current.getContext('2d');
    setCanvasContext(context);
  }, []);

  // Draw the background
  useEffect(() => {
    if (!canvasContext) {
      return;
    }
    canvasContext.clearRect(0, 0, canvas.current.width, canvas.current.height);
    drawBackground(canvasContext, pixelSize);
  });

  return (
    <Figure.Canvas
      data-testid="background"
      height={canvasWidth}
      ref={canvas}
      width={canvasWidth}
    />
  );
};

Background.propTypes = {
  canvasWidth: PropTypes.number,
  pixelSize: PropTypes.number,
};

export default Background;
