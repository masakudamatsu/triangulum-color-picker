import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/color';
import {typescale} from 'src/utils/typography';

const Label = styled.label`
  ${typescale.small}
  color: ${color.font};
`;

Label.propTypes = {};

export default Label;
