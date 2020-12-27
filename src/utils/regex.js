export const regex = {
  hex: /^#[0-9a-f]{6}$/i,
  hsl: /^hsl\((?:360|3[0-5]\d|[1-2]?\d?\d)(?:,\s*(?:100|[1-9]?\d)%){2}\)$/i,
  rgb: /^rgb\((?:1?\d?\d|2[0-4]\d|25[0-5])(?:,\s*(?:1?\d?\d|2[0-4]\d|25[0-5])){2}\)$/i,
};