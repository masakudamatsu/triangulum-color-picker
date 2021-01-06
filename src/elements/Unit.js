import styled from 'styled-components';
import PropTypes from 'prop-types';

import {textcrop, typescale} from 'src/utils/typography';

const Unit = styled.span`
  ${typescale.percent}
  ${textcrop.percent}
`;

Unit.propTypes = {};

export default Unit;
