import getContrastRatio from 'src/utils/getContrastRatio';
import mixHueWithGray from 'src/utils/mixHueWithGray';

export default function draw(
  canvasContext,
  luminance,
  pureHue,
  pixelSize,
  saturation,
) {
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

  canvasContext.strokeStyle = 'rgb(255, 255, 255)';
  canvasContext.lineWidth = 1;

  const lineY = getVerticalPosition(luminance);
  const lineX = Math.round(saturation);

  const horizontalLinePosition = lineY * pixelSize + pixelSize / 2;
  canvasContext.beginPath();
  canvasContext.moveTo(0, horizontalLinePosition);
  canvasContext.lineTo(101 * pixelSize, horizontalLinePosition);
  canvasContext.stroke();

  const verticalLinePosition = lineX * pixelSize + pixelSize / 2;
  canvasContext.beginPath();
  canvasContext.moveTo(verticalLinePosition, 0);
  canvasContext.lineTo(verticalLinePosition, 101 * pixelSize);
  canvasContext.stroke();
}

// helper function
function getVerticalPosition(contrastRatio) {
  return Math.round(100 - (contrastRatio - 1) * 5);
}
