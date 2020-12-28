import styled from 'styled-components';
import PropTypes from 'prop-types';

import {inputText} from 'src/utils/layout';

import InputNumber from 'src/elements/InputNumber';
import Label from 'src/elements/Label';

const FormValues = styled.form`
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  width: ${50 * 3 + 5 * 2}px;
`;

const FormValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  position: relative;
  width: 50px;
`;

const FormValuesLabel = styled(Label)`
  align-self: center;
  position: absolute;
  top: 6px;
  transform: translateX(0) translateY(-0.1375em);
`;

FormValues.Label = FormValuesLabel;
FormValues.InputNumber = InputNumber;
FormValues.Wrapper = FormValuesWrapper;

FormValues.propTypes = {};

export default FormValues;
