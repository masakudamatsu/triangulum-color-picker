import styled from 'styled-components';
import PropTypes from 'prop-types';

import {inputText} from 'src/utils/layout';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';
import Paragraph from 'src/elements/Paragraph';
import Unit from 'src/elements/Unit';

const FormNumberLarge = styled.form`
  background-color: inherit;
  width: auto;
`;

const FormNumberLargeLabel = styled(Label)`
  display: block;
`;

const FormNumberLargeInnerWrapper = styled.div`
  position: relative;
`;

const FormNumberLargeUnit = styled(Unit)`
  position: absolute;
  right: 0;
  top: 60px;
`;

FormNumberLarge.InnerWrapper = FormNumberLargeInnerWrapper;
FormNumberLarge.Input = Input;
FormNumberLarge.Label = FormNumberLargeLabel;
FormNumberLarge.Paragraph = Paragraph;
FormNumberLarge.Unit = FormNumberLargeUnit;

FormNumberLarge.propTypes = {};

export default FormNumberLarge;
