import styled from 'styled-components';

import {textcrop, typescale} from 'src/utils/typography';

const H1 = styled.h1`
  ${typescale.medium}
  ${textcrop.medium}
`;

export default H1;
