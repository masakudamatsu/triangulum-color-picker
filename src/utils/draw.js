import getContrastRatio from 'src/utils/getContrastRatio';
import mixHueWithGray from 'src/utils/mixHueWithGray';

export default function draw(
  canvasContext,
  luminance,
  pureHue,
  resolution,
  saturation,
) {
  for (var x = 0; x <= 100; x++) {
    const shareOfHue = x;

    const brightestRgb = mixHueWithGray(pureHue, 255, shareOfHue);
    canvasContext.fillStyle = `rgb(${brightestRgb.r}, ${brightestRgb.g}, ${brightestRgb.b})`;

    const brightestContrastRatio = getContrastRatio(
      brightestRgb.r,
      brightestRgb.g,
      brightestRgb.b,
    );
    const minY = Math.round(100 - (brightestContrastRatio - 1) * 5);
    canvasContext.fillRect(
      x * resolution,
      minY * resolution,
      resolution,
      resolution,
    );

    let prevY;
    for (var grayValue = 0; grayValue < 255; grayValue++) {
      const rgb = mixHueWithGray(pureHue, grayValue, shareOfHue);
      const contrastRatio = getContrastRatio(rgb.r, rgb.g, rgb.b);
      const y = Math.round(100 - (contrastRatio - 1) * 5);

      if (y !== prevY && y > minY) {
        canvasContext.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        canvasContext.fillRect(
          x * resolution,
          y * resolution,
          resolution,
          resolution,
        );
        prevY = y;
      }
    }
  }

  canvasContext.strokeStyle = 'rgb(255, 255, 255)';
  canvasContext.lineWidth = 1;

  const luminancePercent = Math.round(100 - (luminance - 1) * 5);
  const saturationRounded = Math.round(saturation);

  canvasContext.beginPath();
  canvasContext.moveTo(0, luminancePercent * resolution + resolution / 2);
  canvasContext.lineTo(
    101 * resolution,
    luminancePercent * resolution + resolution / 2,
  );
  canvasContext.stroke();
  canvasContext.beginPath();
  canvasContext.moveTo(saturationRounded * resolution + resolution / 2, 0);
  canvasContext.lineTo(
    saturationRounded * resolution + resolution / 2,
    101 * resolution,
  );
  canvasContext.stroke();
}
