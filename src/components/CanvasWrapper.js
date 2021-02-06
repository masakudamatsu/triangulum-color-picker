import {useState} from 'react';
import PropTypes from 'prop-types';

import Background from 'src/components/Background';
import ColorTriangle from 'src/components/ColorTriangle';
import Figure from 'src/blocks/Figure';
import Reticle from 'src/components/Reticle';

import getCanvasMetrics from 'src/utils/getCanvasMetrics';

const CanvasWrapper = ({
  chroma,
  luminance,
  pixelSize,
  pureHue,
  updateUserColor,
}) => {
  const [canvasContext, setCanvasContext] = useState();

  const eyedropper = clickedPosition => {
    const data = canvasContext.getImageData(
      clickedPosition.x,
      clickedPosition.y,
      1,
      1,
    ).data;
    const rgb = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    if (rgb === 'rgb(0, 0, 0)') {
      return; // to prevent clicking outside the triangle from returning black
    }
    console.log(`Clicked color is ${rgb}`);
    updateUserColor(rgb, 'rgb');
  };

  const {canvasWidth} = getCanvasMetrics(pixelSize);

  return (
    <Figure>
      <Background canvasWidth={canvasWidth} pixelSize={pixelSize} />
      <ColorTriangle
        canvasContext={canvasContext}
        canvasWidth={canvasWidth}
        pixelSize={pixelSize}
        pureHue={pureHue}
        setCanvasContext={setCanvasContext}
      />
      <Reticle
        canvasWidth={canvasWidth}
        chroma={chroma}
        eyedropper={eyedropper}
        luminance={luminance}
        pixelSize={pixelSize}
      />
    </Figure>
  );
};

CanvasWrapper.propTypes = {
  chroma: PropTypes.number,
  luminance: PropTypes.number,
  pixelSize: PropTypes.number,
  pureHue: PropTypes.object,
  updateUserColor: PropTypes.func,
};

export default CanvasWrapper;
