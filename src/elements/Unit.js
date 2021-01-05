import styled from 'styled-components';
import PropTypes from 'prop-types';

import {typescale} from 'src/utils/typography';

const Unit = styled.span`
  ${typescale.percent}
`;

Unit.propTypes = {};

export default Unit;
