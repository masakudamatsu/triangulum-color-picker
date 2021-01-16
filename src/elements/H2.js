import styled from 'styled-components';
import PropTypes from 'prop-types';

import {textcrop, typescale} from 'src/utils/typography';

const H2 = styled.h2`
  ${typescale.large}
  ${textcrop.large}
`;

H2.propTypes = {};

export default H2;
