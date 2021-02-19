import styled from 'styled-components';
import PropTypes from 'prop-types';

import Line from 'src/elements/Line';
import {mediaQuery} from 'src/utils/breakpoints';
import {cross} from 'src/utils/specLayout';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';

const Svg = styled.svg`
  position: absolute;
  width: ${props =>
    props.large ? remify(cross.width.large) : remify(cross.width.default)};
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
      props.large
        ? remify(cross.width.large * scale)
        : remify(cross.width.default * scale)};
  }
`;

Svg.Line = Line;

Svg.propTypes = {
  large: PropTypes.bool,
  position: PropTypes.string,
};

export default Svg;
