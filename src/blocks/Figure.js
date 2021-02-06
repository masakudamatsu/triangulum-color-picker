import styled from 'styled-components';

import Canvas from 'src/elements/Canvas';

import {canvas} from 'src/utils/designSpecs';

const Figure = styled.figure`
  display: flex;
  height: ${canvas.width.small}px;
  justify-content: center;
  position: relative;
  width: ${canvas.width.small}px;
`;

Figure.Canvas = Canvas;

export default Figure;
