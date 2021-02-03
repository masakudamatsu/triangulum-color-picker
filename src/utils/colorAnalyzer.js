import parseColor from 'parse-color';
import getContrastRatio from './getContrastRatio';
import round from './round';

const colorAnalyzer = colorCode => {
  // https://github.com/substack/parse-color
  const {rgb, hsl} = parseColor(colorCode);
  const [red, green, blue] = rgb;

  const luminance = getContrastRatio(red, green, blue);

  let chroma, hue, neutralColor;

  // If the input is neutral color
  if (red === green && red === blue) {
    const rgbValue = red;

    chroma = 0;
    hue = null;
    neutralColor = rgbValue;

    // If the input is pure hue
  } else if (
    (red === 0 || green === 0 || blue === 0) &&
    (red === 255 || green === 255 || blue === 255)
  ) {
    chroma = 100;
    hue = {
      hsl: `hsl(${hsl[0]}, ${hsl[1]}, ${hsl[2]})`,
      rgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
    };
    neutralColor = null;

    // If the input is desaturated color
  } else {
    const inputMax = Math.max(...rgb);
    const inputMin = Math.min(...rgb);

    // Formula
    // inputMax = pureHueShare * 255 + (1 - purHueShare) * grayValue
    // inputMin = pureHueShare * 0 + (1 - purHueShare) * grayValue

    const pureHueShare = (inputMax - inputMin) / 255;
    chroma = round(pureHueShare * 100, 2); // in percentage, up to 2 decimal places

    const grayValue = inputMin / (1 - pureHueShare);
    neutralColor = round(grayValue, 0);

    const pureHueHSL = `hsl(${hsl[0]}, 100, 50)`;
    const pureHueRgbArray = parseColor(pureHueHSL).rgb;
    hue = {
      hsl: pureHueHSL,
      rgb: `rgb(${pureHueRgbArray[0]}, ${pureHueRgbArray[1]}, ${pureHueRgbArray[2]})`,
    };
  }

  return {
    luminance: luminance,
    chroma: chroma,
    hue: hue,
    neutralColor: neutralColor,
  };
};

export default colorAnalyzer;
