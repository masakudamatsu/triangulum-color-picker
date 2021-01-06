import styled from 'styled-components';
import PropTypes from 'prop-types';

import {textcrop, typescale} from 'src/utils/typography';

const Label = styled.label`
  ${props =>
    props.numberLarge
      ? `${typescale.large} ${textcrop.large}`
      : `${typescale.small} ${textcrop.small}`}
  color: inherit;
`;

Label.propTypes = {
  numberLarge: PropTypes.bool,
};

export default Label;
