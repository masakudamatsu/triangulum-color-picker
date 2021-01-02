import styled from 'styled-components';
import PropTypes from 'prop-types';

import Line from 'src/elements/Line';

const Svg = styled.svg`
  position: absolute;
  width: 30px;
  ${props =>
    props.topLeft
      ? `
    top: 0;
    left: 0;
  `
      : null}
  ${props =>
    props.bottomRight
      ? `
    bottom: 0;
    right: 0;
  `
      : null}
`;

Svg.Line = Line;

Svg.propTypes = {
  bottomRight: PropTypes.bool,
  topLeft: PropTypes.bool,
};

export default Svg;
