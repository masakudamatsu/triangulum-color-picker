import React from 'react';
import PropTypes from 'prop-types';

import FormHex from 'src/blocks/FormHex';

const TextFieldForHex = ({lightMode = false, value = '#000000'}) => {
  return (
    <FormHex lightMode={lightMode}>
      <FormHex.Label htmlFor="hex">HEX</FormHex.Label>
      <FormHex.InputHex id="hex" value={value} />
    </FormHex>
  );
};

TextFieldForHex.propTypes = {
  lightMode: PropTypes.bool,
  value: PropTypes.string,
};

export default TextFieldForHex;
