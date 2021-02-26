import React from 'react';
import PropTypes from 'prop-types';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

import FormHex from 'src/blocks/FormHex';
import {regex} from 'src/utils/regex';

const TextFieldForHex = ({
  backgroundColor,
  handleChange,
  lightMode = false,
  value = '#000000',
}) => {
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
  handleChange: PropTypes.func,
  lightMode: PropTypes.bool,
  value: PropTypes.string,
};

export default TextFieldForHex;
