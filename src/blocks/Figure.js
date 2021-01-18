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
  @media only screen and ${mediaQuery.canvas} {
    width: ${canvas.width.large}px;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    width: ${canvas.width.large}px;
  }
`;

Figure.Canvas = Canvas;

Figure.propTypes = {};

export default Figure;
