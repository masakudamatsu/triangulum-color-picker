import styled from 'styled-components';
import PropTypes from 'prop-types';

import {typescale} from 'src/utils/typography';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';
import Paragraph from 'src/elements/Paragraph';
import Unit from 'src/elements/Unit';

const FormNumberLarge = styled.form`
  background-color: inherit;
  width: auto;
`;

FormNumberLarge.InnerWrapper = styled.div`
  position: relative;
`;

FormNumberLarge.Input = styled(Input)`
  ${typescale.number}
  border: none;
  height: 100px;
  padding-right: 20px;
  text-align: right;
  width: 100%;
`;

FormNumberLarge.Label = styled(Label)`
  display: block;
`;

FormNumberLarge.Paragraph = Paragraph;

FormNumberLarge.Unit = styled(Unit)`
  position: absolute;
  right: 0;
  top: 60px;
`;

FormNumberLarge.propTypes = {};

export default FormNumberLarge;
