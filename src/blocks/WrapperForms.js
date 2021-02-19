import styled from 'styled-components';

import {mediaQuery} from 'src/utils/breakpoints';
import {boxSize} from 'src/utils/layout';
import {page, rgbHslWrapper} from 'src/utils/specLayout';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';
const WrapperForms = styled.section``;

WrapperForms.MarginBetweenColorCodeAndHexRgbHsl = styled.div`
  height: ${remify(page.whitespace.betweenColorCodeAndRgb)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${remify(page.whitespace.betweenColorCodeAndRgb * scale)};
  }
`;

WrapperForms.WrapperHexRgbHsl = styled.div`
  align-items: center;
  display: flex;
  ${boxSize.formWrapper}
`;

WrapperForms.WrapperRgbHsl = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${remify(rgbHslWrapper.padding)};
  ${boxSize.rgbHslWrapper}
  @media only screen and ${mediaQuery.font} {
    padding: ${remify(rgbHslWrapper.padding * scale)};
  }
`;

WrapperForms.MarginBetweenRgbAndHsl = styled.div`
  height: ${remify(rgbHslWrapper.whitespace.betweenRgbAndHsl)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${remify(rgbHslWrapper.whitespace.betweenRgbAndHsl * scale)};
  }
`;

export default WrapperForms;
