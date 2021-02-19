import styled from 'styled-components';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {font} from 'src/utils/specFont';

const Unit = styled.span`
  ${fontCssGenerator(font.unit)}
`;

export default Unit;
