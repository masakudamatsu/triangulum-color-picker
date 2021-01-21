import getCanvasMetrics from 'src/utils/getCanvasMetrics';

// Draw the color triangle encircled
export default function drawReticle(
  canvasContext,
  chroma,
  luminance,
  pixelSize,
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
  canvasContext.clip(); // Erase any drawing outside the circle
  canvasContext.stroke();

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
