import getCanvasMetrics from 'src/utils/getCanvasMetrics';
import getContrastRatio from 'src/utils/getContrastRatio';
import mixHueWithGray from 'src/utils/mixHueWithGray';

// Draw the color triangle encircled
export default function draw(
  canvasContext,
  luminance,
  pureHue,
  pixelSize,
  chroma,
) {
  const {
    canvasWidth,
    circleCenterX,
    circleCenterY,
    circleRadius,
    lineWidth,
    squareTopLeftX,
    squareTopLeftY,
  } = getCanvasMetrics(pixelSize);

  // Encircling
  canvasContext.strokeStyle = 'rgb(255, 255, 255)';

  canvasContext.lineWidth = lineWidth;

  const radius = circleRadius;
  const centerX = circleCenterX;
  const centerY = circleCenterY;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  canvasContext.stroke();
  canvasContext.clip(); // Erase any drawing outside the circle

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

  const lineY = getVerticalPosition(luminance);
  const lineX = Math.round(chroma);

  const horizontalLinePosition =
    lineY * pixelSize + pixelSize / 2 + squareTopLeftY;
  canvasContext.beginPath();
  canvasContext.moveTo(0, horizontalLinePosition);
  canvasContext.lineTo(canvasWidth, horizontalLinePosition);
  canvasContext.stroke();

  const verticalLinePosition =
    lineX * pixelSize + pixelSize / 2 + squareTopLeftX;
  canvasContext.beginPath();
  canvasContext.moveTo(verticalLinePosition, 0);
  canvasContext.lineTo(verticalLinePosition, canvasWidth);
  canvasContext.stroke();
}

// helper function
function getVerticalPosition(contrastRatio) {
  return Math.round(100 - (contrastRatio - 1) * 5);
}
