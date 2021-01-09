import styled from 'styled-components';
import PropTypes from 'prop-types';

import Canvas from 'src/elements/Canvas';

const Figure = styled.figure`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

Figure.Canvas = Canvas;

Figure.propTypes = {};

export default Figure;
