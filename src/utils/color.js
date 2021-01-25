const black = 'rgb(10, 10, 10)';
const grayDark = 'rgb(74, 74, 74)'; // luminance 1.5^2 x black
const grayMedium = 'rgb(100, 100, 100)'; // luminance 1.5 x grayDark

const white = 'rgb(255, 255, 255)';
const grayLight = 'rgb(173, 173, 173)'; // luminance 1/(1.5^2) x white;
const linkTextBackground = 'rgb(65, 65, 65)'; // luminance 1/4.5 x grayLight;

export const color = {
  background: `linear-gradient(95deg, ${grayDark} 0%, ${black} 100%)`,
  backgroundFallback: black,
  cross: white,
  font: white,
  fontLightMode: black,
  input: {
    background: black,
    border: white,
  },
  topAppBar: {
    background: black,
    borderBottom: grayMedium,
  },
  footer: {
    background: black,
    border: grayMedium,
    font: grayLight,
    linkBackground: linkTextBackground,
  },
};
