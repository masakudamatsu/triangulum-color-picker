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

const WrapperColorData = styled.div``;

WrapperColorData.WrapperSection = styled.div`
  position: relative;
  padding: ${formNumberLarge.whitespace.padding}px;
  ${boxSize.formNumberLargeWrapper}
  @media only screen and ${mediaQuery.font} {
    padding: ${formNumberLarge.whitespace.padding * scale}px;
  }
`;

WrapperColorData.propTypes = {};

export default WrapperColorData;
