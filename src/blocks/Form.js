import styled from 'styled-components';
import PropTypes from 'prop-types';

import InputText from 'src/elements/InputText';
import Label from 'src/elements/Label';

const Form = styled.form`
  background-color: inherit;
  height: 81px;
  position: relative;
  width: 303px;
`;

const FormLabel = styled(Label)`
  position: absolute;
  top: 15.5342px;
  left: 12.5342px;
`;

Form.Label = FormLabel;
Form.InputText = InputText;

Form.propTypes = {};

export default Form;
