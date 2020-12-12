import round from './round';

export default function getContrastRatio(r, g, b) {
  // Calculate contrast ratio against pure black (whose relative luminance is 0)
  // see https://www.w3.org/TR/WCAG20-TECHS/G17.html
  const contrastRatio = (relativeLuminance(r, g, b) + 0.05) / 0.05;

  return round(contrastRatio, 2);

  function relativeLuminance(r, g, b) {
    return (
      0.2126 * normalize(r) + 0.7152 * normalize(g) + 0.0722 * normalize(b)
    );
  }

  function normalize(eightBitNumber) {
    const percentizedValue = percentize(eightBitNumber);
    if (percentizedValue <= 0.03928) {
      return percentizedValue / 12.92;
    } else {
      return Math.pow((percentizedValue + 0.055) / 1.055, 2.4);
    }
  }

  function percentize(eightBitNumber) {
    return eightBitNumber / 255;
  }
}
