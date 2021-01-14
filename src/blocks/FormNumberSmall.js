import styled from 'styled-components';
import PropTypes from 'prop-types';

import {boxSize, inputText} from 'src/utils/layout';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormNumberSmall = styled.form`
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FormNumberSmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${boxSize.formNumberSmall}
`;

const FormNumberSmallLabel = styled(Label)`
  align-self: center;
  position: absolute;
  top: 6px;
  transform: translateX(0) translateY(-0.1375em);
`;

FormNumberSmall.Label = FormNumberSmallLabel;
FormNumberSmall.Input = Input;
FormNumberSmall.Wrapper = FormNumberSmallWrapper;

FormNumberSmall.propTypes = {};

export default FormNumberSmall;
