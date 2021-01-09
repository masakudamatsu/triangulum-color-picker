import styled from 'styled-components';
import PropTypes from 'prop-types';

import {textcrop, typescale} from 'src/utils/typography';

const Canvas = styled.canvas`
  ${props => props.overlay && 'position: absolute;'}
`;

Canvas.propTypes = {
  overlay: PropTypes.bool,
};

export default Canvas;
