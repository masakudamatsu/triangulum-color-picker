import styled from 'styled-components';

import {mediaQuery} from 'src/utils/breakpoints';
import {responsiveBoxSize} from 'src/utils/getLayoutCss';
import {formNumberLarge} from 'src/utils/specLayout';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';

const WrapperColorData = styled.div``;

WrapperColorData.WrapperSection = styled.div`
  position: relative;
  padding: ${remify(formNumberLarge.whitespace.padding)};
  ${responsiveBoxSize(formNumberLarge.width)}
  @media only screen and ${mediaQuery.font} {
    padding: ${remify(formNumberLarge.whitespace.padding * scale)};
  }
`;

export default WrapperColorData;
