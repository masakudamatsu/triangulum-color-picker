import styled from 'styled-components';
import PropTypes from 'prop-types';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {font} from 'src/utils/specFont';

const Paragraph = styled.p`
  ${fontCssGenerator(font.paragraph)}
  text-align: ${props => (props.rightAligned ? `right` : `left`)};
  transform: translateX(-0.08em);
`;

Paragraph.propTypes = {
  rightAligned: PropTypes.bool,
};

export default Paragraph;
