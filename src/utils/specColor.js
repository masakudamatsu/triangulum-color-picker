const black = 'rgb(10, 10, 10)';
const grayDark = 'rgb(74, 74, 74)'; // luminance 1.5^2 x black
const grayMedium = 'rgb(100, 100, 100)'; // luminance 1.5 x grayDark

const white = 'rgb(255, 255, 255)';
const grayLight = 'rgb(173, 173, 173)'; // luminance 1/(1.5^2) x white;
const linkTextBackground = 'rgb(65, 65, 65)'; // luminance 1/4.5 x grayLight;

const yellow = 'rgb(254, 254, 50)'; // Chroma 80%, Luminance 19.44 (same as pure yellow)
const darkYellow = 'rgb(146, 146, 3)'; // Luminance 6.34 (one third of yellow)

export const color = {
  background: `linear-gradient(95deg, ${grayDark} 0%, ${black} 100%)`,
  backgroundFallback: black,
  cross: white,
  font: white,
  fontLightMode: black,
  input: {
    background: black,
    border: white,
    font: white,
    error: yellow,
    onError: black,
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
  banner: {
    background: yellow,
    font: black,
    linkBackground: darkYellow,
  },
};
