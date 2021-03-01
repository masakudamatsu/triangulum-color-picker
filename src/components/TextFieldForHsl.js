import {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import parseColor from 'parse-color'; // See https://www.npmjs.com/package/parse-color

import ErrorMessage from './ErrorMessage';
import FormNumberSmall from 'src/blocks/FormNumberSmall';

import {errorText} from 'src/utils/errorText';
import {pattern} from 'src/utils/regex';
import {regex} from 'src/utils/regex';

const TextFieldForHsl = ({setUserColor, userColor}) => {
  const [errorH, setErrorH] = useState(false);
  const [errorS, setErrorS] = useState(false);
  const [errorL, setErrorL] = useState(false);

  function defineErrorState(fieldLabel) {
    const error =
      fieldLabel === 'h' ? errorH : fieldLabel === 's' ? errorS : errorL;
    const setError = bool => {
      fieldLabel === 'h'
        ? setErrorH(bool)
        : fieldLabel === 's'
        ? setErrorS(bool)
        : setErrorL(bool);
    };
    return [error, setError];
  }

  const [showErrorTextH, setShowErrorTextH] = useState(false);
  const [showErrorTextS, setShowErrorTextS] = useState(false);
  const [showErrorTextL, setShowErrorTextL] = useState(false);

  function defineErrorTextState(fieldLabel) {
    const showErrorText =
      fieldLabel === 'h'
        ? showErrorTextH
        : fieldLabel === 's'
        ? showErrorTextS
        : showErrorTextL;
    const setShowErrorText = bool => {
      fieldLabel === 'h'
        ? setShowErrorTextH(bool)
        : fieldLabel === 's'
        ? setShowErrorTextS(bool)
        : setShowErrorTextL(bool);
    };
    return [showErrorText, setShowErrorText];
  }

  const refH = useRef();
  const refS = useRef();
  const refL = useRef();

  function defineRef(fieldLabel) {
    return fieldLabel === 'h' ? refH : fieldLabel === 's' ? refS : refL;
  }

  const handleBlur = event => {
    const fieldLabel = event.target.id;
    const ref = defineRef(fieldLabel);
    const [error, setError] = defineErrorState(fieldLabel);
    const [showErrorText, setShowErrorText] = defineErrorTextState(fieldLabel);

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
    const [showErrorText, setShowErrorText] = defineErrorTextState(fieldLabel);

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
      // update HSL values
      const hslValues = {
        h: userColor.h,
        s: userColor.s,
        l: userColor.l,
      };
      hslValues[fieldLabel] = newUserValue;
      // obtain other color codes
      const hslCode = `hsl(${hslValues.h}, ${hslValues.s}%, ${hslValues.l}%)`;
      const {hex, rgb} = parseColor(hslCode);
      // update the userColor state
      const newUserColor = {
        cssCode: hslCode,
        hex: hex,
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
        validCode: hslCode,
      };
      newUserColor[fieldLabel] = newUserValue;
      setUserColor(newUserColor);
    }
  };

  const handleFocus = event => {
    const fieldLabel = event.target.id;
    const [error, setError] = defineErrorState(event.target.id);
    const [showErrorText, setShowErrorText] = defineErrorTextState(fieldLabel);
    if (error) {
      setShowErrorText(true);
    }
  };

  return (
    <FormNumberSmall>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label error={errorH} htmlFor="h">
          H
        </FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          error={errorH}
          id="h"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          pattern={pattern.hValue}
          ref={refH}
          required
          value={userColor.h}
        />
        {showErrorTextH ? <ErrorMessage errorText={errorText.h} /> : null}
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label error={errorS} htmlFor="s">
          S
        </FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          error={errorS}
          id="s"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          pattern={pattern.slValues}
          ref={refS}
          required
          value={userColor.s}
        />
        {showErrorTextS ? <ErrorMessage errorText={errorText.s} /> : null}
      </FormNumberSmall.InnerWrapper>
      <FormNumberSmall.InnerWrapper>
        <FormNumberSmall.Label error={errorL} htmlFor="l">
          L
        </FormNumberSmall.Label>
        <FormNumberSmall.InputNumber
          error={errorL}
          id="l"
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          pattern={pattern.slValues}
          ref={refL}
          required
          value={userColor.l}
        />
        {showErrorTextL ? <ErrorMessage errorText={errorText.l} /> : null}
      </FormNumberSmall.InnerWrapper>
    </FormNumberSmall>
  );
};

TextFieldForHsl.propTypes = {
  setUserColor: PropTypes.func,
  userColor: PropTypes.object,
};

export default TextFieldForHsl;
