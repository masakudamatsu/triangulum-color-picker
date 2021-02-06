import styled from 'styled-components';

import {textcrop, typescale} from 'src/utils/typography';

const Output = styled.output`
  ${typescale.number}
  ${textcrop.number}
`;

export default Output;
