import styled from 'styled-components';

import A from 'src/elements/A';
import Paragraph from 'src/elements/Paragraph';
import {color} from 'src/utils/color';
import {
  cross,
  footer,
  header,
  page,
  scale,
  triangleWidth,
} from 'src/utils/designSpecs';
import {mediaQuery, threeColumns, twoColumns} from 'src/utils/breakpoints';
import remify from 'src/utils/remify';

const Footer = styled.footer`
  background-color: ${color.footer.background};
  border-top: ${header.borderBottomWidth}px solid ${color.footer.border};
  display: flex;
  justify-content: center;
  width: 100%;
  @media only screen and ${mediaQuery.twoColumnsTall} {
    bottom: 0;
    position: fixed;
  }
  @media only screen and ${mediaQuery.threeColumnsTall} {
    bottom: 0;
    position: fixed;
  }
`;

Footer.A = A;

Footer.InnerWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${remify(footer.belowParagraph)};
  padding-top: ${remify(footer.aboveParagraph)};
  width: ${remify(triangleWidth)};
  @media only screen and ${mediaQuery.font} {
    padding-bottom: ${remify(footer.belowParagraph * scale)};
    padding-top: ${remify(footer.aboveParagraph * scale)};
    width: ${remify(triangleWidth * scale)};
  }
  @media only screen and ${mediaQuery.twoColumns} {
    justify-content: flex-end;
    padding-left: ${remify(
      page.whitespace.sideMargin + (cross.width.large * scale) / 3,
    )};
    padding-right: ${remify(page.whitespace.sideMargin)};
    width: ${remify(twoColumns.minWidth)};
  }
  @media only screen and ${mediaQuery.threeColumns} {
    justify-content: flex-end;
    padding-left: ${remify(page.whitespace.sideMargin)};
    width: ${remify(threeColumns.minWidth)};
  }
`;

Footer.Paragraph = styled(Paragraph)`
  color: ${color.footer.font};
`;

export default Footer;
