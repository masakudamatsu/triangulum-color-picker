import styled from 'styled-components';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {typescale} from 'src/utils/specFont';

const H1 = styled.h1`
  ${fontCssGenerator(typescale.medium)}
  transform: translateX(-0.065em);
`;

export default H1;
