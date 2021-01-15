import styled from 'styled-components';
import PropTypes from 'prop-types';

import {boxSize, input, formColorCode} from 'src/utils/layout';
import {breakpoint, scale, typescale} from 'src/utils/typography';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormColorCode = styled.form`
  background-color: inherit;
  height: ${formColorCode.height}px;
  position: relative;
  ${boxSize.formColorCode}
`;

// Text crop and other adjustments
const padding = {
  bottom: formColorCode.whitespace.belowInputValue - 12,
  left: {
    inactive: formColorCode.whitespace.left - 2.25,
    active:
      formColorCode.whitespace.left -
      3.25 /* taking into account the thicker border */,
  },
  top:
    formColorCode.whitespace.aboveLabel +
    formColorCode.capheight.label +
    formColorCode.whitespace.aboveInputValue -
    10,
};

FormColorCode.Input = styled(Input)`
  ${typescale.large}
  border-radius: 4px;
  height: 100%; /* Without this, text moves as the border thickens with focus */
  padding-bottom: ${padding.bottom}px;
  padding-left: ${padding.left.inactive}px;
  padding-top: ${padding.top}px;
  text-align: left;
  width: 100%;
  &:active,
  &:hover,
  &:focus {
    padding-left: ${padding.left
      .active}px; /* taking into account the thicker border */
  }
`;

FormColorCode.Label = styled(Label)`
  position: absolute;
  top: ${formColorCode.whitespace.aboveLabel + input.borderWidth.inactive}px;
  left: ${formColorCode.whitespace.left + input.borderWidth.inactive}px;
`;

FormColorCode.propTypes = {};

export default FormColorCode;
