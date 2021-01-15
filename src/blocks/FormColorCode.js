import styled from 'styled-components';
import PropTypes from 'prop-types';

import {boxSize, inputText} from 'src/utils/layout';
import {typescale} from 'src/utils/typography';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormColorCode = styled.form`
  background-color: inherit;
  height: ${80 + 2 * inputText.borderWidth.inactive}px;
  position: relative;
  ${boxSize.formColorCode}
`;

FormColorCode.Input = styled(Input)`
  ${typescale.large}
  border-radius: 4px;
  height: 100%; /* Without this, text moves as the border thickens with focus */
  padding-bottom: ${inputText.paddingBottom - 12}px;
  padding-left: ${inputText.paddingLeft - 2.25}px;
  padding-top: ${inputText.paddingTop + 10}px;
  text-align: left;
  width: 100%;
  &:active,
  &:hover,
  &:focus {
    padding-left: ${inputText.paddingLeft -
    3.25}px; /* taking into account the thicker border */
  }
`;

FormColorCode.Label = styled(Label)`
  position: absolute;
  top: ${10 + inputText.borderWidth.inactive}px;
  left: ${inputText.paddingLeft + inputText.borderWidth.inactive}px;
`;

FormColorCode.propTypes = {};

export default FormColorCode;
