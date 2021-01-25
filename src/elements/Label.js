import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/color';
import {textcrop, typescale} from 'src/utils/typography';

const Label = styled.label`
  ${props => (props.numberLarge ? typescale.large : typescale.small)}
  color: ${color.font};
`;

Label.propTypes = {
  numberLarge: PropTypes.bool,
};

export default Label;
