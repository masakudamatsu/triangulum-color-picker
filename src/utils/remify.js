import round from './round';

function remify(px) {
  if (px === undefined) {
    throw new Error(
      'The argument is missing. Provide a number of the pixel value to be converted into rem.',
    );
  }
  if (typeof px !== 'number') {
    throw new Error(
      `The argument must be a number, but you provided a ${typeof px}`,
    );
  }
  const oneRemInPx = 16;
  function stringify(number) {
    return `${number.toString()}rem`;
  }
  return stringify(round(px / oneRemInPx, 4));
}

export default remify;
