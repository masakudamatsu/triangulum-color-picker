import styled from 'styled-components';
import PropTypes from 'prop-types';

import {boxSize} from 'src/utils/layout';
import {color} from 'src/utils/color';
import {typescale} from 'src/utils/typography';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormHex = styled.form`
  color: ${props => (props.lightMode ? color.black : color.white)};
  display: flex;
  flex-direction: column;
  position: relative;
  ${boxSize.formHex}
`;

FormHex.Input = styled(Input)`
  ${typescale.medium}
  background-color: ${props => props.backgroundColor};
  border-radius: 100%;
  height: 100%;
  text-align: center;
  width: 100%;
`;

FormHex.Label = styled(Label)`
  align-self: center;
  position: absolute;
  top: 15px; /* to have 23px between label and input value, half of 46px space below input value */
  transform: translateX(0) translateY(-0.1375em);
`;

FormHex.propTypes = {
  lightMode: PropTypes.bool,
};

export default FormHex;
