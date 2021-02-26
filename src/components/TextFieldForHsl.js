import React from 'react';
import PropTypes from 'prop-types';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

import FormNumberSmall from 'src/blocks/FormNumberSmall';
import {regex} from 'src/utils/regex';

const TextFieldForHsl = ({setUserColor, userColor}) => {
  const handleChangeHSL = event => {
    const fieldLabel = event.target.id;
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    const isValid =
      fieldLabel === 'h'
        ? regex.hValue.test(newUserValue)
        : regex.slValues.test(newUserValue);
    if (isValid) {
      // update HSL values
      const hslValues = {
        h: userColor.h,
        s: userColor.s,
        l: userColor.l,
      };
      hslValues[fieldLabel] = newUserValue;
      // obtain other color codes
      const hslCode = `hsl(${hslValues.h}, ${hslValues.s}%, ${hslValues.l}%)`;
      const {hex, rgb} = parseColor(hslCode);
      // update the userColor state
      const newUserColor = {
        cssCode: hslCode,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        validCode: hslCode,
      };
      newUserColor[fieldLabel] = newUserValue;
      setUserColor(newUserColor);
    } else {
      const newUserColor = {};
      newUserColor[fieldLabel] = event.target.value;
      setUserColor(newUserColor);
    }
  };
  return (
    <FormNumberSmall>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label htmlFor="h">H</FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          id="h"
          onChange={handleChangeHSL}
          value={userColor.h}
        />
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label htmlFor="s">S</FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          id="s"
          onChange={handleChangeHSL}
          value={userColor.s}
        />
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label htmlFor="l">L</FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          id="l"
          onChange={handleChangeHSL}
          value={userColor.l}
        />
      </FormNumberSmall.InnerWrapper>
    </FormNumberSmall>
  );
};

TextFieldForHsl.propTypes = {
  setUserColor: PropTypes.func,
  userColor: PropTypes.object,
};

export default TextFieldForHsl;
