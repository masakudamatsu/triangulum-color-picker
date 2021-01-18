import styled from 'styled-components';
import PropTypes from 'prop-types';

import {boxSize} from 'src/utils/layout';
import {formColorCode, input, scale} from 'src/utils/designSpecs';
import {textcrop, typescale} from 'src/utils/typography';
import {mediaQuery} from 'src/utils/breakpoints';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormColorCode = styled.form`
  background-color: inherit;
  position: relative;
  ${boxSize.formColorCode}
`;

// Text crop and other adjustments
const padding = {
  bottom: formColorCode.whitespace.belowInputValue - 12,
  left: formColorCode.whitespace.left - 2.25,
  top:
    formColorCode.whitespace.aboveLabel +
    formColorCode.capheight.label +
    formColorCode.whitespace.aboveInputValue -
    10,
};

FormColorCode.Input = styled(Input)`
  ${typescale.large}

  border-radius: 4px;
  padding-bottom: ${padding.bottom}px;
  padding-left: ${padding.left}px;
  padding-top: ${padding.top}px;
  text-align: left;
  width: 100%;

  &:active,
  &:hover,
  &:focus {
    padding-bottom: ${padding.bottom - 1}px;
    padding-left: ${padding.left - 1}px;
    padding-top: ${padding.top - 1}px;
  }

  @media only screen and ${mediaQuery.font} {
    padding-bottom: ${padding.bottom * scale}px;
    padding-left: ${padding.left * scale}px;
    padding-top: ${padding.top * scale}px;
    &:active,
    &:hover,
    &:focus {
      padding-bottom: ${padding.bottom * scale - 1}px;
      padding-left: ${padding.left * scale - 1}px;
      padding-top: ${padding.top * scale - 1}px;
    }
  }
`;

FormColorCode.Label = styled(Label)`
  ${textcrop.small}
  position: absolute;
  top: ${formColorCode.whitespace.aboveLabel + input.borderWidth.inactive}px;
  left: ${formColorCode.whitespace.left + input.borderWidth.inactive}px;
  @media only screen and ${mediaQuery.font} {
    top: ${formColorCode.whitespace.aboveLabel * scale +
    input.borderWidth.inactive}px;
    left: ${formColorCode.whitespace.left * scale +
    input.borderWidth.inactive}px;
  }
`;

FormColorCode.propTypes = {};

export default FormColorCode;
