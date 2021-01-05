import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormColorCode from 'src/blocks/FormColorCode';

const TextInputForm = ({inputId, labelText, handleChange, userColor}) => {
  return (
    <FormColorCode>
      <FormColorCode.Label htmlFor={inputId}>{labelText}</FormColorCode.Label>
      <FormColorCode.Input
        colorCode
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
  handleChange: PropTypes.func,
  userColor: PropTypes.string,
};

export default TextInputForm;

// This code snippet is adapted from https://github.com/kentcdodds/react-hooks/blob/main/src/final/02.extra-3.js
