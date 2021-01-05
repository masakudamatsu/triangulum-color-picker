import styled from 'styled-components';
import PropTypes from 'prop-types';

import {typescale} from 'src/utils/typography';

const Spacer = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
`;

Spacer.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
};

export default Spacer;
