import {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from './ErrorMessage';
import FormHex from 'src/blocks/FormHex';

import {errorText} from 'src/utils/errorText';
import {pattern, regex} from 'src/utils/regex';

const TextFieldForHex = ({
  backgroundColor,
  lightMode = false,
  setUserColor,
  updateUserColor,
  userColor = '#000000',
}) => {
  const [error, setError] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);
  const refHex = useRef();

  // If a valid value in other fields corrects the invalid value, we set the error state off
  if (error && regex.hex.test(userColor)) {
    setError(false);
    setShowErrorText(false);
  }

  const handleBlur = event => {
    // Only forcibly focus when there was no error before
    if (!error) {
      if (
        event.target.validity.patternMismatch ||
        event.target.validity.valueMissing
      ) {
        refHex.current.focus();
        setError(true);
        setShowErrorText(true);
      }
    }
    // Hide error message when there's already an error
    if (error) {
      setShowErrorText(false);
    }
  };

  const handleChange = event => {
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    const isInvalid =
      event.target.validity.patternMismatch ||
      event.target.validity.valueMissing;
    if (isInvalid) {
      setUserColor({
        hex: event.target.value,
      });
    } else {
      if (error) {
        setError(false);
        setShowErrorText(false);
      }
      updateUserColor(newUserValue, 'hex');
    }
  };

  const handleFocus = event => {
    if (error) {
      setShowErrorText(true);
    }
  };

  // Prevent Enter key to reload the page
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <FormHex lightMode={lightMode} onSubmit={handleSubmit}>
      <FormHex.Label error={error} htmlFor="hex">
        HEX
      </FormHex.Label>
      <FormHex.InputText
        backgroundColor={backgroundColor} // not value, to avoid changes while the user enters a new hex value
        error={error}
        id="hex"
        lightMode={lightMode}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        pattern={pattern.hex}
        ref={refHex}
        required
        value={userColor}
      />
      {showErrorText ? <ErrorMessage errorText={errorText.hex} /> : null}
    </FormHex>
  );
};

TextFieldForHex.propTypes = {
  backgroundColor: PropTypes.string,
  lightMode: PropTypes.bool,
  setUserColor: PropTypes.func,
  updateUserColor: PropTypes.func,
  userColor: PropTypes.string,
};

export default TextFieldForHex;
