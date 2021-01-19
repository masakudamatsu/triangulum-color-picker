import styled from 'styled-components';
import PropTypes from 'prop-types';

import Canvas from 'src/elements/Canvas';

import {mediaQuery} from 'src/utils/breakpoints';
import {canvas} from 'src/utils/designSpecs';

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  position: relative;
  width: ${canvas.width.small}px;
  @media only screen and ${mediaQuery.twoColumns} {
    order: 1;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    order: 0;
  }
`;

Figure.Canvas = Canvas;

Figure.propTypes = {};

export default Figure;
