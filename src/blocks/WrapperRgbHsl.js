import styled from 'styled-components';
import PropTypes from 'prop-types';

import {mediaQuery, twoColumns} from 'src/utils/breakpoints';
import {boxSize} from 'src/utils/layout';
import {
  canvas,
  flexbox,
  formNumberLarge,
  page,
  rgbHslWrapper,
  scale,
} from 'src/utils/designSpecs';

const WrapperRgbHsl = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${rgbHslWrapper.padding}px;
  ${boxSize.rgbHslWrapper}
  @media only screen and ${mediaQuery.font} {
    padding: ${rgbHslWrapper.padding * scale}px;
  }
`;

WrapperRgbHsl.MarginBetweenForms = styled.div`
  height: ${rgbHslWrapper.whitespace.betweenRgbAndHsl}px;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${rgbHslWrapper.whitespace.betweenRgbAndHsl * scale}px;
  }
`;

WrapperRgbHsl.propTypes = {};

export default WrapperRgbHsl;
