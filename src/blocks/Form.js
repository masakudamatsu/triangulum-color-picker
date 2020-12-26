import styled from 'styled-components';
import PropTypes from 'prop-types';

import {inputText} from 'src/utils/layout';

import InputText from 'src/elements/InputText';
import Label from 'src/elements/Label';

const Form = styled.form`
  background-color: inherit;
  height: ${80 + 2 * inputText.borderWidth.inactive}px;
  position: relative;
  width: 303px;
`;

const FormLabel = styled(Label)`
  position: absolute;
  top: ${10 + inputText.borderWidth.inactive}px;
  left: ${inputText.paddingLeft + inputText.borderWidth.inactive}px;
`;

Form.Label = FormLabel;
Form.InputText = InputText;

Form.propTypes = {};

export default Form;
