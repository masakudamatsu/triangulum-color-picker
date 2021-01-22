import styled from 'styled-components';
import PropTypes from 'prop-types';

import {textcrop, typescale} from 'src/utils/typography';

const H1 = styled.h1`
  ${typescale.medium}
  ${textcrop.medium}
`;

H1.propTypes = {};

export default H1;
