export default function getCanvasMetrics(pixelSize) {
  const lineWidth = 2; // aesthetically desirable
  const squareWidth = 101 * pixelSize;
  // Pythagorean theorem:
  // squareWidth2 = circleRadius2 + circleRadius2
  // (where x2 = x * x)
  const squareWidth2 = squareWidth * squareWidth;
  const circleRadius2 = squareWidth2 / 2;
  const circleRadius = Math.round(Math.sqrt(circleRadius2)) + 0.5;

  // Radius is the length between the circle center and the middle of the circle line
  const circleCenterX = circleRadius + lineWidth / 2; // to include the outer edge of the circle
  const circleCenterY = circleCenterX;

  const squareTopLeftX = circleCenterX - squareWidth / 2;
  const squareTopLeftY = squareTopLeftX;

  const canvasWidth = circleCenterX * 2;

  return {
    canvasWidth,
    circleCenterX,
    circleCenterY,
    circleRadius,
    lineWidth,
    squareTopLeftX,
    squareTopLeftY,
  };
}
