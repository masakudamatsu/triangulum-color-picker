import parseColor from 'parse-color';
import getContrastRatio from './getContrastRatio';

const colorAnalyzer = colorCode => {
  // https://github.com/substack/parse-color
  const {rgb, hsl} = parseColor(colorCode);
  const [red, green, blue] = rgb;

  const luminance = getContrastRatio(red, green, blue);

  let saturation, hue, neutralColor;

  // If the input is neutral color
  if (red === green && red === blue) {
    const rgbValue = red;

    saturation = 0;
    hue = null;
    neutralColor = rgbValue;

    // If the input is pure hue
  } else if (red === 0 || green === 0 || blue === 0) {
    saturation = 100;
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
    saturation = Math.round(pureHueShare * 10000) / 100; // Keep two decimal places

    const grayValue = inputMin / (1 - pureHueShare);
    neutralColor = Math.round(grayValue);

    const pureHueHSL = `hsl(${hsl[0]}, 100, 50)`;
    const pureHueRgbArray = parseColor(pureHueHSL).rgb;
    hue = {
      hsl: pureHueHSL,
      rgb: `rgb(${pureHueRgbArray[0]}, ${pureHueRgbArray[1]}, ${pureHueRgbArray[2]})`,
    };
  }

  return {
    luminance: luminance,
    saturation: saturation,
    hue: hue,
    neutralColor: neutralColor,
  };
};

export default colorAnalyzer;
