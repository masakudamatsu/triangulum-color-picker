import styled from 'styled-components';
import PropTypes from 'prop-types';

import {boxSize} from 'src/utils/layout';
import {formHex, scale} from 'src/utils/designSpecs';
import {textcrop, typescale} from 'src/utils/typography';
import {color} from 'src/utils/color';
import {mediaQuery} from 'src/utils/breakpoints';

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
  ${textcrop.smallCenterAligned}
  align-self: center;
  position: absolute;
  top: ${formHex.whitespace.aboveLabel}px;
  @media only screen and ${mediaQuery.font} {
    top: ${formHex.whitespace.aboveLabel * scale}px;
  }
`;

FormHex.propTypes = {
  lightMode: PropTypes.bool,
};
FormHex.Input.propTypes = {
  backgroundColor: PropTypes.string,
};

export default FormHex;
