import styled from 'styled-components';

import {textcrop, typescale} from 'src/utils/typography';

const Unit = styled.span`
  ${typescale.percent}
  ${textcrop.percent}
`;

export default Unit;
