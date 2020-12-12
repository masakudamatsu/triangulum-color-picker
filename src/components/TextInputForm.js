import React from 'react';
import PropTypes from 'prop-types';

const TextInputForm = ({inputId, labelText, setUserColor, userColor}) => {
  function handleChange(event) {
    setUserColor(event.target.value); // Trigger the updating of the parent component
  }

  return (
    <form>
      <label htmlFor={inputId}>{labelText}</label>
      <input id={inputId} onChange={handleChange} value={userColor} />
    </form>
  );
};

TextInputForm.propTypes = {
  inputId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  setUserColor: PropTypes.func,
  userColor: PropTypes.string,
};

export default TextInputForm;

// This code snippet is adapted from https://github.com/kentcdodds/react-hooks/blob/main/src/final/02.extra-3.js
