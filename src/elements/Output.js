import styled from 'styled-components';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {font} from 'src/utils/specFont';

const Output = styled.output`
  ${fontCssGenerator(font.output)}
`;

export default Output;
