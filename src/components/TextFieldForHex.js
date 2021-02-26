import React from 'react';
import PropTypes from 'prop-types';

import FormHex from 'src/blocks/FormHex';
import {regex} from 'src/utils/regex';

const TextFieldForHex = ({
  backgroundColor,
  lightMode = false,
  setUserColor,
  updateUserColor,
  value = '#000000',
}) => {
  const handleChange = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    if (regex.hex.test(newUserValue)) {
      updateUserColor(newUserValue, 'hex');
    } else {
      setUserColor({
        hex: event.target.value,
      });
    }
  };

  return (
    <FormHex lightMode={lightMode}>
      <FormHex.Label htmlFor="hex">HEX</FormHex.Label>
      <FormHex.InputText
        backgroundColor={backgroundColor} // not value, to avoid changes while the user enters a new hex value
        id="hex"
        lightMode={lightMode}
        onChange={handleChange}
        value={value}
      />
    </FormHex>
  );
};

TextFieldForHex.propTypes = {
  backgroundColor: PropTypes.string,
  lightMode: PropTypes.bool,
  setUserColor: PropTypes.func,
  updateUserColor: PropTypes.func,
  value: PropTypes.string,
};

export default TextFieldForHex;
