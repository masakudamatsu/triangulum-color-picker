import React from 'react';
import PropTypes from 'prop-types';

import FormHex from 'src/blocks/FormHex';

const TextFieldForHex = ({
  backgroundColor,
  handleChange,
  lightMode = false,
  value = '#000000',
}) => {
  return (
    <FormHex lightMode={lightMode}>
      <FormHex.Label htmlFor="hex">HEX</FormHex.Label>
      <FormHex.Input
        backgroundColor={backgroundColor} // not value, to avoid changes while the user enters a new hex value
        id="hex"
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
