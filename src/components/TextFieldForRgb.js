import {useState} from 'react';
import PropTypes from 'prop-types';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

import FormNumberSmall from 'src/blocks/FormNumberSmall';
import {regex} from 'src/utils/regex';

import {errorText} from 'src/utils/errorText';
import {pattern} from 'src/utils/regex';

const TextFieldForRgb = ({setUserColor, userColor}) => {
  const [error, setError] = useState({
    r: null,
    g: null,
    b: null,
  });

  const handleBlur = event => {
    const fieldLabel = event.target.id;
    if (event.target.validity.patternMismatch) {
      const newErrorObject = {};
      newErrorObject[fieldLabel] = errorText.rgb;
      setError(newErrorObject);
    }
  };

  const handleChange = event => {
    const fieldLabel = event.target.id;
    const newUserValue = event.target.value.trim().replace(/\s/g, '');
    // Verify the input value
    const isInvalid = event.target.validity.patternMismatch;
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
        {/* <input> comes before <label> to use the sibling combinator in CSS (input ~ label {}) to style the error state together with the :invalid selector. See InputText.js */}
        <FormNumberSmall.InputNumber
          error={error.r}
          id="r"
          onBlur={handleBlur}
          onChange={handleChange}
          pattern={pattern.rgbValues}
          value={userColor.r}
        />
        <FormNumberSmall.Label htmlFor="r">R</FormNumberSmall.Label>
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.InputNumber
          error={error.g}
          id="g"
          onBlur={handleBlur}
          onChange={handleChange}
          pattern={pattern.rgbValues}
          value={userColor.g}
        />
        <FormNumberSmall.Label htmlFor="g">G</FormNumberSmall.Label>
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.InputNumber
          error={error.b}
          id="b"
          onBlur={handleBlur}
          onChange={handleChange}
          pattern={pattern.rgbValues}
          value={userColor.b}
        />
        <FormNumberSmall.Label htmlFor="b">B</FormNumberSmall.Label>
      </FormNumberSmall.InnerWrapper>
    </FormNumberSmall>
  );
};

TextFieldForRgb.propTypes = {
  setUserColor: PropTypes.func,
  userColor: PropTypes.object,
};

export default TextFieldForRgb;
