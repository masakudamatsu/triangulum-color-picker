import {color} from 'src/utils/color';
import getCanvasMetrics from 'src/utils/getCanvasMetrics';
import getContrastRatio from 'src/utils/getContrastRatio';
import mixHueWithGray from 'src/utils/mixHueWithGray';

// Draw the color triangle encircled
export default function drawTriangle(canvasContext, pixelSize, pureHue) {
  const {canvasWidth, squareTopLeftX, squareTopLeftY} = getCanvasMetrics(
    pixelSize,
  );

  canvasContext.save();
  canvasContext.translate(squareTopLeftX, squareTopLeftY);

  for (let x = 0; x < 101; x++) {
    const shareOfHue = x;

    const brightestRgb = mixHueWithGray(pureHue, 255, shareOfHue);
    const brightestContrastRatio = getContrastRatio(
      brightestRgb.r,
      brightestRgb.g,
      brightestRgb.b,
    );
    const minY = getVerticalPosition(brightestContrastRatio); // see below

    canvasContext.fillStyle = `rgb(${brightestRgb.r}, ${brightestRgb.g}, ${brightestRgb.b})`;
    canvasContext.fillRect(
      x * pixelSize,
      minY * pixelSize,
      pixelSize,
      pixelSize,
    );

    let prevY;
    for (let grayValue = 0; grayValue < 255; grayValue++) {
      const rgb = mixHueWithGray(pureHue, grayValue, shareOfHue);
      const contrastRatio = getContrastRatio(rgb.r, rgb.g, rgb.b);
      const y = getVerticalPosition(contrastRatio);

      if (y !== prevY && y > minY) {
        canvasContext.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        canvasContext.fillRect(
          x * pixelSize,
          y * pixelSize,
          pixelSize,
          pixelSize,
        );
        prevY = y;
      }
    }
  }

  canvasContext.restore();
}

// helper function
function getVerticalPosition(contrastRatio) {
  return Math.round(100 - (contrastRatio - 1) * 5);
}
