export const regex = {
  hex: /^\s*#(?:[0-9a-f]{3}){1,2}\s*$/i,
  hsl: /^\s*hsl\((?:360|3[0-5]\d|[1-2]?\d?\d)(?:,\s*(?:100|[1-9]?\d)%){2}\)\s*$/i,
  rgb: /^\s*rgb\((?:1?\d?\d|2[0-4]\d|25[0-5])(?:,\s*(?:1?\d?\d|2[0-4]\d|25[0-5])){2}\)\s*$/i,
  rgbValues: /^\s*(?:1?\d?\d|2[0-4]\d|25[0-5])\s*$/i,
  hValue: /^\s*(?:3[0-5]\d|[1-2]?\d?\d)\s*$/i,
  slValues: /^\s*(?:100|[1-9]?\d)\s*$/i,
  get cssCode() {
    return new RegExp(
      this.hex.source + '|' + this.rgb.source + '|' + this.hsl.source,
      'i',
    );
  },
};

export const pattern = {
  hex: regex.hex.source,
  hsl: regex.hsl.source,
  rgb: regex.rgb.source,
  rgbValues: regex.rgbValues.source,
  hValue: regex.hValue.source,
  slValues: regex.slValues.source,
  cssCode: regex.cssCode.source,
};
