import React from 'react';
import PropTypes from 'prop-types';

import FormColorCode from 'src/blocks/FormColorCode';
import {regex} from 'src/utils/regex';

const TextInputForm = ({
  inputId,
  labelText,
  setUserColor,
  updateUserColor,
  userColor,
}) => {
  const handleChange = event => {
    const newCssCode = event.target.value.trim().replace(/\s/g, '');
    if (regex.hex.test(newCssCode)) {
      updateUserColor(newCssCode, 'hex');
    } else if (regex.hsl.test(newCssCode)) {
      updateUserColor(newCssCode, 'hsl');
    } else if (regex.rgb.test(newCssCode)) {
      updateUserColor(newCssCode, 'rgb');
    } else {
      setUserColor({
        cssCode: event.target.value,
      });
    }
  };
  return (
    <FormColorCode>
      <FormColorCode.Label htmlFor={inputId}>{labelText}</FormColorCode.Label>
      <FormColorCode.InputText
        id={inputId}
        onChange={handleChange}
        value={userColor}
      />
    </FormColorCode>
  );
};

TextInputForm.propTypes = {
  inputId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  setUserColor: PropTypes.func,
  updateUserColor: PropTypes.func,
  userColor: PropTypes.string,
};

export default TextInputForm;

// This code snippet is adapted from https://github.com/kentcdodds/react-hooks/blob/main/src/final/02.extra-3.js
