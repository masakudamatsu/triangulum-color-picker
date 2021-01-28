import styled from 'styled-components';
import PropTypes from 'prop-types';

import {mediaQuery} from 'src/utils/breakpoints';

const SectionColorPalette = styled.section`
  @media only screen and ${mediaQuery.twoColumns} {
    order: 1;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    order: 0;
  }
`;

SectionColorPalette.propTypes = {};

export default SectionColorPalette;
