import styled from 'styled-components';
import PropTypes from 'prop-types';

import {inputText} from 'src/utils/layout';
import {color} from 'src/utils/color';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormHex = styled.form`
  color: ${props => (props.lightMode ? color.black : color.white)};
  display: flex;
  flex-direction: column;
  height: 110px;
  min-height: 110px;
  min-width: 110px; /* Otherwise, the input element will become an ellipse as the hex code occupies 110px width */
  position: relative;
  width: 110px;
`;

const FormHexLabel = styled(Label)`
  align-self: center;
  position: absolute;
  top: 15px; /* to have 23px between label and input value, half of 46px space below input value */
  transform: translateX(0) translateY(-0.1375em);
`;

FormHex.Label = FormHexLabel;
FormHex.Input = Input;

FormHex.propTypes = {
  lightMode: PropTypes.bool,
};

export default FormHex;
