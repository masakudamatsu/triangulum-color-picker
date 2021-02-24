import styled from 'styled-components';

import {mediaQuery} from 'src/utils/breakpoints';

const SectionColorPalette = styled.section`
  /* Fix #178: https://github.com/masakudamatsu/triangulum-color-picker/issues/178 */
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  @media only screen and ${mediaQuery.twoColumns} {
    order: 1;
    width: auto;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    order: 0;
    width: auto;
  }
`;

export default SectionColorPalette;
