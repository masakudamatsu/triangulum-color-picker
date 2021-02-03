import styled from 'styled-components';
import PropTypes from 'prop-types';

import A from 'src/elements/A';
import Paragraph from 'src/elements/Paragraph';
import {boxSize} from 'src/utils/layout';
import {color} from 'src/utils/color';
import {footer, page, scale} from 'src/utils/designSpecs';
import {mediaQuery} from 'src/utils/breakpoints';
import {textcrop, typescale} from 'src/utils/typography';

const SectionNoscript = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${color.banner.background};
  color: ${color.banner.font};
  padding: ${footer.aboveParagraph}px;
  @media only screen and ${mediaQuery.font} {
    padding: ${footer.aboveParagraph * scale}px;
  }
`;

SectionNoscript.Link = styled(A)`
  text-shadow: 0.03em 0 ${color.banner.background},
    -0.03em 0 ${color.banner.background}, 0 0.03em ${color.banner.background},
    0 -0.03em ${color.banner.background}; /* following https://eager.io/blog/smarter-link-underlines/ */
  &:focus,
  &:hover,
  &:visited:focus,
  &:visited:hover {
    background: ${color.banner.linkBackground};
  }
`;

SectionNoscript.Paragraph = styled(Paragraph)`
  ${boxSize.noscript}
  ${typescale.footer}
  ${textcrop.footer}
`;

SectionNoscript.Spacer = styled.div`
  height: ${footer.aboveParagraph}px;
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${footer.aboveParagraph * scale}px;
  }
`;

SectionNoscript.propTypes = {};

export default SectionNoscript;
