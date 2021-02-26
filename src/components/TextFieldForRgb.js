import React from 'react';
import PropTypes from 'prop-types';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

import FormNumberSmall from 'src/blocks/FormNumberSmall';
import {regex} from 'src/utils/regex';

const TextFieldForRgb = ({setUserColor, userColor}) => {
  const handleChange = event => {
    const fieldLabel = event.target.id;
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    const newUserColor = {};
    // Verify the input value
    const isValid = regex.rgbValues.test(newUserValue);
    if (isValid) {
      // Update RGB values
      const rgbValues = {
        r: userColor.r,
        g: userColor.g,
        b: userColor.b,
      };
      rgbValues[fieldLabel] = newUserValue;
      // Obtain other color codes
      const rgbCode = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`;
      const {hex, hsl} = parseColor(rgbCode);
      // Update the userColor state
      newUserColor.cssCode = rgbCode;
      newUserColor.hex = hex;
      newUserColor.h = hsl[0];
      newUserColor.s = hsl[1];
      newUserColor.l = hsl[2];
      newUserColor.validCode = rgbCode;
      newUserColor[fieldLabel] = newUserValue;
      setUserColor(newUserColor);
    } else {
      newUserColor[fieldLabel] = event.target.value;
      setUserColor(newUserColor);
    }
  };

  return (
    <FormNumberSmall>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label htmlFor="r">R</FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          id="r"
          onChange={handleChange}
          value={userColor.r}
        />
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label htmlFor="g">G</FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          id="g"
          onChange={handleChange}
          value={userColor.g}
        />
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label htmlFor="b">B</FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          id="b"
          onChange={handleChange}
          value={userColor.b}
        />
      </FormNumberSmall.InnerWrapper>
    </FormNumberSmall>
  );
};

TextFieldForRgb.propTypes = {
  setUserColor: PropTypes.func,
  userColor: PropTypes.object,
};

export default TextFieldForRgb;
