import getContrastRatio from 'src/utils/getContrastRatio';
import mixHueWithGray from 'src/utils/mixHueWithGray';

export default function draw(canvasContext, resolution) {
  const pureHue = {
    r: 255,
    g: 0,
    b: 0,
  };
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
}
