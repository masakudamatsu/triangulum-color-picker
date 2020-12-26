import styled from 'styled-components';
import PropTypes from 'prop-types';

import {typescale} from 'src/utils/typography';

const Label = styled.label`
  ${typescale.small}
  color: inherit;
`;

Label.propTypes = {};

export default Label;
