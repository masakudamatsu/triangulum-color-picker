import {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

import ErrorMessage from './ErrorMessage';
import FormNumberSmall from 'src/blocks/FormNumberSmall';

import {errorText} from 'src/utils/errorText';
import {pattern} from 'src/utils/regex';

const TextFieldForRgb = ({setUserColor, userColor}) => {
  const [errorR, setErrorR] = useState(false);
  const [errorG, setErrorG] = useState(false);
  const [errorB, setErrorB] = useState(false);

  function defineErrorState(fieldLabel) {
    const error =
      fieldLabel === 'r' ? errorR : fieldLabel === 'g' ? errorG : errorB;
    const setError = bool => {
      fieldLabel === 'r'
        ? setErrorR(bool)
        : fieldLabel === 'g'
        ? setErrorG(bool)
        : setErrorB(bool);
    };
    return [error, setError];
  }

  const [showErrorTextR, setShowErrorTextR] = useState(false);
  const [showErrorTextG, setShowErrorTextG] = useState(false);
  const [showErrorTextB, setShowErrorTextB] = useState(false);

  function defineErrorTextState(fieldLabel) {
    const showErrorText =
      fieldLabel === 'r'
        ? showErrorTextR
        : fieldLabel === 'g'
        ? showErrorTextG
        : showErrorTextB;
    const setShowErrorText = bool => {
      fieldLabel === 'r'
        ? setShowErrorTextR(bool)
        : fieldLabel === 'g'
        ? setShowErrorTextG(bool)
        : setShowErrorTextB(bool);
    };
    return [showErrorText, setShowErrorText];
  }

  const refR = useRef();
  const refG = useRef();
  const refB = useRef();

  function defineRef(fieldLabel) {
    return fieldLabel === 'r' ? refR : fieldLabel === 'g' ? refG : refB;
  }

  const handleBlur = event => {
    const fieldLabel = event.target.id;
    const ref = defineRef(fieldLabel);
    const [error, setError] = defineErrorState(fieldLabel);
    const [, setShowErrorText] = defineErrorTextState(fieldLabel);

    // Only forcibly focus when there was no error before
    if (!error) {
      if (
        event.target.validity.patternMismatch ||
        event.target.validity.valueMissing
      ) {
        ref.current.focus();
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
    const fieldLabel = event.target.id;
    const [error, setError] = defineErrorState(fieldLabel);
    const [, setShowErrorText] = defineErrorTextState(fieldLabel);

    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    // Verify the input value
    const isInvalid =
      event.target.validity.patternMismatch ||
      event.target.validity.valueMissing;
    if (isInvalid) {
      const newUserColor = {};
      newUserColor[fieldLabel] = event.target.value;
      setUserColor(newUserColor);
    } else {
      if (error) {
        setError(false);
        setShowErrorText(false);
      }
      // Update RGB values
      const rgbValues = {
        r: userColor.r,
        g: userColor.g,
        b: userColor.b,
      };
      rgbValues[fieldLabel] = newUserValue;
      // Obtain other color codes
      const rgbCode = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`;
      const {hex, hsl} = parseColor(rgbCode);
      // Update the userColor state
      const newUserColor = {
        cssCode: rgbCode,
        hex: hex,
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
        validCode: rgbCode,
      };
      newUserColor[fieldLabel] = newUserValue;
      setUserColor(newUserColor);
    }
  };

  const handleFocus = event => {
    const fieldLabel = event.target.id;
    const [error] = defineErrorState(event.target.id);
    const [, setShowErrorText] = defineErrorTextState(fieldLabel);
    if (error) {
      setShowErrorText(true);
    }
  };

  return (
    <FormNumberSmall>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label error={errorR} htmlFor="r">
          R
        </FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          error={errorR}
          id="r"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          pattern={pattern.rgbValues}
          ref={refR}
          required
          value={userColor.r}
        />
        {showErrorTextR ? (
          <ErrorMessage errorText={errorText.r} r={true} />
        ) : null}
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label error={errorG} htmlFor="g">
          G
        </FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          error={errorG}
          id="g"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          pattern={pattern.rgbValues}
          ref={refG}
          required
          value={userColor.g}
        />
        {showErrorTextG ? (
          <ErrorMessage errorText={errorText.g} g={true} />
        ) : null}
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label error={errorB} htmlFor="b">
          B
        </FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          error={errorB}
          id="b"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          pattern={pattern.rgbValues}
          ref={refB}
          required
          value={userColor.b}
        />
        {showErrorTextB ? (
          <ErrorMessage b={true} errorText={errorText.b} />
        ) : null}
      </FormNumberSmall.InnerWrapper>
    </FormNumberSmall>
  );
};

TextFieldForRgb.propTypes = {
  setUserColor: PropTypes.func,
  userColor: PropTypes.object,
};

export default TextFieldForRgb;
