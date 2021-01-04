import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Form from 'src/blocks/Form';

const TextInputForm = ({inputId, labelText, handleChange, userColor}) => {
  return (
    <Form>
      <Form.Label htmlFor={inputId}>{labelText}</Form.Label>
      <Form.Input
        colorCode
        id={inputId}
        onChange={handleChange}
        value={userColor}
      />
    </Form>
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
