import {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

import ErrorMessage from './ErrorMessage';
import FormNumberSmall from 'src/blocks/FormNumberSmall';

import {errorText} from 'src/utils/errorText';
import {pattern} from 'src/utils/regex';

const TextFieldForRgb = ({setUserColor, userColor}) => {
  const [error, setError] = useState({
    r: null,
    g: null,
    b: null,
  });

  const refR = useRef();
  const refG = useRef();
  const refB = useRef();

  const handleBlur = event => {
    const fieldLabel = event.target.id;
    // Only forcibly focus when there was no error before
    if (!error[fieldLabel]) {
      if (
        event.target.validity.patternMismatch ||
        event.target.validity.valueMissing
      ) {
        const newErrorObject = {};
        newErrorObject[fieldLabel] = errorText.rgb;
        setError(newErrorObject);
        if (fieldLabel === 'r') {
          refR.current.focus();
        } else if (fieldLabel === 'g') {
          refG.current.focus();
        } else if (fieldLabel === 'b') {
          refB.current.focus();
        }
      }
    }
  };

  const handleChange = event => {
    const fieldLabel = event.target.id;
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
      if (error[fieldLabel]) {
        const newError = error;
        newError[fieldLabel] = null;
        setError(newError);
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

  return (
    <FormNumberSmall>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label error={error.r} htmlFor="r">
          R
        </FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          aria-describedby="alert-on-r"
          error={error.r}
          id="r"
          onBlur={handleBlur}
          onChange={handleChange}
          pattern={pattern.rgbValues}
          ref={refR}
          required
          value={userColor.r}
        />
        <ErrorMessage error={error.r} id="alert-on-r" />
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label error={error.g} htmlFor="g">
          G
        </FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          aria-describedby="alert-on-g"
          error={error.g}
          id="g"
          onBlur={handleBlur}
          onChange={handleChange}
          pattern={pattern.rgbValues}
          ref={refG}
          required
          value={userColor.g}
        />
        <ErrorMessage error={error.g} id="alert-on-g" />
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label error={error.b} htmlFor="b">
          B
        </FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          aria-describedby="alert-on-b"
          error={error.b}
          id="b"
          onBlur={handleBlur}
          onChange={handleChange}
          pattern={pattern.rgbValues}
          ref={refB}
          required
          value={userColor.b}
        />
        <ErrorMessage error={error.b} id="alert-on-b" />
      </FormNumberSmall.InnerWrapper>
    </FormNumberSmall>
  );
};

TextFieldForRgb.propTypes = {
  setUserColor: PropTypes.func,
  userColor: PropTypes.object,
};

export default TextFieldForRgb;
