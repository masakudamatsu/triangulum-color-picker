import styled from 'styled-components';
import PropTypes from 'prop-types';

import {inputText} from 'src/utils/layout';
import {color} from 'src/utils/color';

import InputHex from 'src/elements/InputHex';
import Label from 'src/elements/Label';

const FormHex = styled.form`
  color: ${props => (props.lightMode ? color.black : color.white)};
  display: flex;
  flex-direction: column;
  height: 110px;
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
FormHex.InputHex = InputHex;

FormHex.propTypes = {
  lightMode: PropTypes.bool,
};

export default FormHex;
