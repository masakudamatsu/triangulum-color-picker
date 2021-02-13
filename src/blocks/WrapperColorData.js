import styled from 'styled-components';

import {mediaQuery} from 'src/utils/breakpoints';
import {boxSize} from 'src/utils/layout';
import {formNumberLarge, scale} from 'src/utils/designSpecs';
import remify from 'src/utils/remify';

const WrapperColorData = styled.div``;

WrapperColorData.WrapperSection = styled.div`
  position: relative;
  padding: ${remify(formNumberLarge.whitespace.padding)};
  ${boxSize.formNumberLargeWrapper}
  @media only screen and ${mediaQuery.font} {
    padding: ${remify(formNumberLarge.whitespace.padding * scale)};
  }
`;

export default WrapperColorData;
