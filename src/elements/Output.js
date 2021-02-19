import styled from 'styled-components';

import {fontCssGenerator} from 'src/utils/getFontCss';
import {typescale} from 'src/utils/specFont';

const Output = styled.output`
  ${fontCssGenerator(typescale.number)}
`;

export default Output;
