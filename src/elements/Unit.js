import styled from 'styled-components';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {typescale} from 'src/utils/specFont';

const Unit = styled.span`
  ${fontCssGenerator(typescale.percent)}
`;

export default Unit;
