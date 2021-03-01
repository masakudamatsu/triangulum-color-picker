export const regex = {
  hex: /^#(?:[0-9a-f]{3}){1,2}$/i,
  hsl: /^hsl\((?:360|3[0-5]\d|[1-2]?\d?\d)(?:,\s*(?:100|[1-9]?\d)%){2}\)$/i,
  rgb: /^rgb\((?:1?\d?\d|2[0-4]\d|25[0-5])(?:,\s*(?:1?\d?\d|2[0-4]\d|25[0-5])){2}\)$/i,
  rgbValues: /^(?:1?\d?\d|2[0-4]\d|25[0-5])$/i,
  hValue: /^(?:3[0-5]\d|[1-2]?\d?\d)$/i,
  slValues: /^(?:100|[1-9]?\d)$/i,
};

export const pattern = {
  hex: regex.hex.source,
  hsl: regex.hsl.source,
  rgb: regex.rgb.source,
  rgbValues: regex.rgbValues.source,
  hValue: regex.hValue.source,
  slValues: regex.slValues.source,
};
