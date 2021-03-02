import {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from './ErrorMessage';
import FormColorCode from 'src/blocks/FormColorCode';
import {errorText} from 'src/utils/errorText';
import {pattern, regex} from 'src/utils/regex';

const TextInputForm = ({setUserColor, updateUserColor, userColor}) => {
  const [error, setError] = useState(false);
  const [showErrorText, setShowErrorText] = useState(false);
  const refColorCode = useRef();

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
        refColorCode.current.focus();
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
    const newCssCode = event.target.value.trim().replace(/\s/g, '');
    const isInvalid =
      event.target.validity.patternMismatch ||
      event.target.validity.valueMissing;
    if (isInvalid) {
      setUserColor({
        cssCode: event.target.value,
      });
    } else {
      if (error) {
        setError(false);
        setShowErrorText(false);
      }
      if (regex.hex.test(newCssCode)) {
        updateUserColor(newCssCode, 'hex');
      } else if (regex.hsl.test(newCssCode)) {
        updateUserColor(newCssCode, 'hsl');
      } else if (regex.rgb.test(newCssCode)) {
        updateUserColor(newCssCode, 'rgb');
      }
    }
  };

  const handleFocus = event => {
    if (error) {
      setShowErrorText(true);
    }
  };

  return (
    <FormColorCode>
      <FormColorCode.Label error={error} htmlFor="colorCode">
        CSS color code
      </FormColorCode.Label>
      <FormColorCode.InputText
        error={error}
        id="colorCode"
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        pattern={pattern.cssCode}
        ref={refColorCode}
        required
        value={userColor}
      />
      {showErrorText ? <ErrorMessage errorText={errorText.colorCode} /> : null}
    </FormColorCode>
  );
};

TextInputForm.propTypes = {
  setUserColor: PropTypes.func,
  updateUserColor: PropTypes.func,
  userColor: PropTypes.string,
};

export default TextInputForm;

// This code snippet is adapted from https://github.com/kentcdodds/react-hooks/blob/main/src/final/02.extra-3.js
