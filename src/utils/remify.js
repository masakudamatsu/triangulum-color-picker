function remify(px) {
  const oneRemInPx = 16;
  function stringify(number) {
    return `${number.toFixed(4)}rem`;
  }
  return stringify(px / oneRemInPx);
}

export default remify;
