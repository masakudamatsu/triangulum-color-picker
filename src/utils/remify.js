import round from './round';

function remify(px) {
  const oneRemInPx = 16;
  function stringify(number) {
    return `${number.toString()}rem`;
  }
  return stringify(round(px / oneRemInPx, 4));
}

export default remify;
