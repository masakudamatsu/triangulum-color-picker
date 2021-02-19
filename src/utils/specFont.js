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
      top: -0.3165, // from -0.282 to -0.351
      bottom: -0.4195, // from -0.385 to -0.454
    },
    fontMetrics: poppins.light,
  },
  medium: {
    capHeight: 15,
    xHeightRatio: 3,
    betweenLinesRatio: 4,
    textCropEm: {
      top: -0.304, // from -0.281 to -0.327
      bottom: -0.3325, // from -0.305 to -0.350
    },
    fontMetrics: poppins.light,
  },
  large: {
    capHeight: 20,
    xHeightRatio: 4,
    betweenLinesRatio: 5,
    textCropEm: {
      top: -0.263, // -0.246 to -0.280
      bottom: -0.316, // -0.299 to -0.333
    },
    fontMetrics: poppins.light,
  },
  number: {
    capHeight: 60,
    xHeightRatio: 5,
    betweenLinesRatio: 6,
    textCropEm: {
      top: -0.24, // -0.235 to - 0.245
      bottom: -0.2575, // -0.252 to -0.263
    },
    fontMetrics: poppins.thin,
  },
  percent: {
    capHeight: 20,
    xHeightRatio: 4,
    betweenLinesRatio: 5,
    textCropEm: {
      top: -0.264, // -0.247 to -0.281
      bottom: -0.281, // -0.264 to -0.298
    },
    fontMetrics: poppins.thin,
  },
};
