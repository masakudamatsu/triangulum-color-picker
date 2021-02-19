import styled from 'styled-components';

import A from 'src/elements/A';
import Paragraph from 'src/elements/Paragraph';
import {responsiveBoxSize} from 'src/utils/getLayoutCss';
import {color} from 'src/utils/specColor';
import {footer, formColorCode} from 'src/utils/specLayout';
import {mediaQuery} from 'src/utils/breakpoints';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';

const SectionNoscript = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${color.banner.background};
  color: ${color.banner.font};
  padding: ${remify(footer.aboveParagraph)};
  @media only screen and ${mediaQuery.font} {
    padding: ${remify(footer.aboveParagraph * scale)};
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
  ${responsiveBoxSize(formColorCode.width)}
`;

SectionNoscript.Spacer = styled.div`
  height: ${remify(footer.aboveParagraph)};
  width: 100%;
  @media only screen and ${mediaQuery.font} {
    height: ${remify(footer.aboveParagraph * scale)};
  }
`;

SectionNoscript.propTypes = {};

export default SectionNoscript;
