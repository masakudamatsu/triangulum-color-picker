import styled from 'styled-components';

import {mediaQuery} from 'src/utils/breakpoints';
import {boxSize} from 'src/utils/layout';
import {formNumberLarge, scale} from 'src/utils/designSpecs';

const WrapperColorData = styled.div``;

WrapperColorData.WrapperSection = styled.div`
  position: relative;
  padding: ${formNumberLarge.whitespace.padding}px;
  ${boxSize.formNumberLargeWrapper}
  @media only screen and ${mediaQuery.font} {
    padding: ${formNumberLarge.whitespace.padding * scale}px;
  }
`;

export default WrapperColorData;
