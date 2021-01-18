import styled from 'styled-components';
import PropTypes from 'prop-types';

const Canvas = styled.canvas`
  ${props => props.overlay && 'position: absolute;'}
`;

Canvas.propTypes = {
  overlay: PropTypes.bool,
};

export default Canvas;
