import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/color';
import {typescale} from 'src/utils/specFont';

import {fontCssGenerator} from 'src/utils/getFontCss';

const Label = styled.label`
  ${fontCssGenerator(typescale.small)}
  color: ${color.font};
`;

Label.propTypes = {};

export default Label;
