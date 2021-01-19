import styled from 'styled-components';
import PropTypes from 'prop-types';

import Line from 'src/elements/Line';
import {mediaQuery} from 'src/utils/breakpoints';
import {cross, scale} from 'src/utils/designSpecs';

const Svg = styled.svg`
  position: absolute;
  width: ${props => (props.large ? cross.width.large : cross.width.default)}px;
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
  @media only screen and ${mediaQuery.font} {
    width: ${props =>
      props.large ? cross.width.large * scale : cross.width.default * scale}px;
  }
`;

Svg.Line = Line;

Svg.propTypes = {
  large: PropTypes.bool,
  position: PropTypes.string,
};

export default Svg;
