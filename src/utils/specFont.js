export const poppins = {
  light: {
    fontFamily: "'Poppins', Verdana, sans-serif",
    fontWeight: 300,
    unitsPerEm: 1000,
    xHeight: 546,
    capHeight: 700,
  },
  thin: {
    fontFamily: "'Poppins', Verdana, sans-serif",
    fontWeight: 100,
    unitsPerEm: 1000,
    xHeight: 540,
    capHeight: 702,
  },
}; // Measured with https://opentype.js.org/font-inspector.html

// Scale factor to enlarge fonts beyond the tablet screen width of 728px
export const scale = 1.2;
export const breakpointForFont = 728;

export const typescale = {
  small: {
    capHeight: 10,
    xHeightRatio: 2,
    betweenLinesRatio: 3,
    textCropEm: {
      top: -0.3855,
      bottom: -0.406,
    },
    fontMetrics: poppins.light,
  },
  medium: {
    capHeight: 15,
    xHeightRatio: 3,
    betweenLinesRatio: 4,
    textCropEm: {
      top: -0.318,
      bottom: -0.336,
    },
    fontMetrics: poppins.light,
  },
  large: {
    capHeight: 20,
    xHeightRatio: 4,
    betweenLinesRatio: 5,
    textCropEm: {
      top: -0.288,
      bottom: -0.301,
    },
    fontMetrics: poppins.light,
  },
  number: {
    capHeight: 60,
    xHeightRatio: 5,
    betweenLinesRatio: 6,
    textCropEm: {
      top: -0.249,
      bottom: -0.255,
    },
    fontMetrics: poppins.thin,
  },
  percent: {
    capHeight: 20,
    xHeightRatio: 4,
    betweenLinesRatio: 5,
    textCropEm: {
      top: -0.281,
      bottom: -0.295,
    },
    fontMetrics: poppins.thin,
  },
};
