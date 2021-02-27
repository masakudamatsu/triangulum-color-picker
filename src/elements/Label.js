import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/specColor';
import {font} from 'src/utils/specFont';

import {fontCssGenerator} from 'src/utils/getFontCss';

const Label = styled.label`
  ${fontCssGenerator(font.label)}
  color: ${props => (props.error ? color.input.onError : color.font)};
`;

Label.propTypes = {
  error: PropTypes.bool,
};

export default Label;
