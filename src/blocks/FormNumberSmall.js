import styled from 'styled-components';
import PropTypes from 'prop-types';

import {boxSize} from 'src/utils/layout';
import {textcrop, typescale} from 'src/utils/typography';

import Input from 'src/elements/Input';
import Label from 'src/elements/Label';

const FormNumberSmall = styled.form`
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

FormNumberSmall.InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${boxSize.formNumberSmall}
`;

FormNumberSmall.Input = styled(Input)`
  ${typescale.medium}
  border-radius: 100%;
  height: 100%;
  padding-top: 8px;
  text-align: center;
  width: 100%;
`;

FormNumberSmall.Label = styled(Label)`
  ${textcrop.smallCenterAligned}
  align-self: center;
  position: absolute;
  top: 6px;
`;

FormNumberSmall.propTypes = {};

export default FormNumberSmall;
