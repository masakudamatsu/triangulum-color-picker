import styled from 'styled-components';
import PropTypes from 'prop-types';

import Line from 'src/elements/Line';

const Svg = styled.svg`
  position: absolute;
  width: ${props => (props.large ? `60px` : `30px`)};
  ${props =>
    props.position === 'bottomRight'
      ? `
          bottom: 0;
          right: 0;
      `
      : `
        top: 0;
        left: 0;
      `}
`;

Svg.Line = Line;

Svg.propTypes = {
  large: PropTypes.bool,
  position: PropTypes.string,
};

export default Svg;
