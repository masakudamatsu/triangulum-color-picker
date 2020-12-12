export default function round(float, decimalPlaces) {
  if (decimalPlaces === 0) {
    return Math.round(float);
  }
  const x = Math.pow(10, decimalPlaces);
  return Math.round(float * x) / x;
}
