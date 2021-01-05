import styled from 'styled-components';
import PropTypes from 'prop-types';

import {typescale} from 'src/utils/typography';

const Paragraph = styled.p`
  ${typescale.small}
  text-align: ${props => (props.rightAligned ? `right` : `left`)};
`;

Paragraph.propTypes = {
  rightAligned: PropTypes.bool,
};

export default Paragraph;
