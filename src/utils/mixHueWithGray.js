const mixHueWithGray = (pureHue, grayValue, hueShare) => {
  if (typeof pureHue !== 'object') {
    throw Error(
      `mixHueWithGray(): First argument is expected to be an object, but ${typeof pureHue} was given`,
    );
  }
  if (typeof pureHue.r !== 'number') {
    throw Error(
      `mixHueWithGray(): First argument's property r is expected to be a number, but ${typeof pureHue.r} was given`,
    );
  }
  if (typeof pureHue.g !== 'number') {
    throw Error(
      `mixHueWithGray(): First argument's property g is expected to be a number, but ${typeof pureHue.g} was given`,
    );
  }
  if (typeof pureHue.b !== 'number') {
    throw Error(
      `mixHueWithGray(): First argument's property b is expected to be a number, but ${typeof pureHue.b} was given`,
    );
  }
  if (typeof grayValue !== 'number') {
    throw Error(
      `mixHueWithGray(): Second argument is expected to be a number, but ${typeof grayValue} was given`,
    );
  }
  if (typeof hueShare !== 'number') {
    throw Error(
      `mixHueWithGray(): Third argument is expected to be a number, but ${typeof hueShare} was given`,
    );
  }
  const red = Math.floor(
    (1 / 100) * (pureHue.r * hueShare + grayValue * (100 - hueShare)),
  );
  const green = Math.floor(
    (1 / 100) * (pureHue.g * hueShare + grayValue * (100 - hueShare)),
  );
  const blue = Math.floor(
    (1 / 100) * (pureHue.b * hueShare + grayValue * (100 - hueShare)),
  );
  return {
    r: red,
    g: green,
    b: blue,
  };
};

export default mixHueWithGray;
