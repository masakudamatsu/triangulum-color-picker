import styled from 'styled-components';
import PropTypes from 'prop-types';

import {inputText} from 'src/utils/layout';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormColorCode = styled.form`
  background-color: inherit;
  height: ${80 + 2 * inputText.borderWidth.inactive}px;
  position: relative;
  width: 303px;
`;

const FormColorCodeLabel = styled(Label)`
  position: absolute;
  top: ${10 + inputText.borderWidth.inactive}px;
  left: ${inputText.paddingLeft + inputText.borderWidth.inactive}px;
`;

FormColorCode.Label = FormColorCodeLabel;
FormColorCode.Input = Input;

FormColorCode.propTypes = {};

export default FormColorCode;
