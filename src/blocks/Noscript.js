import styled from 'styled-components';
import PropTypes from 'prop-types';

import A from 'src/elements/A';
import Paragraph from 'src/elements/Paragraph';
import {boxSize} from 'src/utils/layout';
import {textcrop, typescale} from 'src/utils/typography';

const Noscript = styled.noscript`
  ${typescale.small}
  ${textcrop.small}
  ${boxSize.noscript}
`;

Noscript.Link = A;

Noscript.Paragraph = Paragraph;

Noscript.propTypes = {};

export default Noscript;
