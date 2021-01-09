import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import draw from 'src/utils/draw';
import getCanvasMetrics from 'src/utils/getCanvasMetrics';

function getMousePosition(domElement, event) {
  const rect = domElement.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

const Canvas = ({
  luminance = 11.11,
  pureHue = {
    r: 255,
    g: 0,
    b: 0,
  },
  pixelSize = 10,
  chroma = 50.55,
  updateUserColor,
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

  const handleClick = event => {
    const clickedPosition = getMousePosition(canvas.current, event);
    const data = canvasContext.getImageData(
      clickedPosition.x,
      clickedPosition.y,
      1,
      1,
    ).data;
    const rgb = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    console.log(`Clicked color is ${rgb}`);
    updateUserColor(rgb, 'rgb');
  };
  return (
    <canvas
      data-testid="color-triangle"
      onClick={handleClick}
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
  updateUserColor: PropTypes.func,
};

export default Canvas;
