export default function round(float, decimalPlaces) {
  if (decimalPlaces === undefined) {
    throw new Error(
      'The second argument is missing. Provide the number of decimal places you want to keep.',
    );
  }
  if (typeof decimalPlaces !== 'number') {
    throw new Error(
      `The second argument must be a number, but you provided a ${typeof decimalPlaces}`,
    );
  }
  if (decimalPlaces === 0) {
    return Math.round(float);
  }
  const x = Math.pow(10, decimalPlaces);
  return Math.round(float * x) / x;
}
