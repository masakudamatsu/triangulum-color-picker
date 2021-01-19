import styled from 'styled-components';
import PropTypes from 'prop-types';

import {textcrop, typescale} from 'src/utils/typography';

const Output = styled.output`
  ${typescale.number}
  ${textcrop.number}
`;

Output.propTypes = {};

export default Output;
