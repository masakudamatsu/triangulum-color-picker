import styled from 'styled-components';
import PropTypes from 'prop-types';

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
import {textcrop, typescale} from 'src/utils/typography';

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
  padding-bottom: ${footer.belowParagraph}px;
  padding-top: ${footer.aboveParagraph}px;
  width: ${triangleWidth}px;
  @media only screen and ${mediaQuery.font} {
    padding-bottom: ${footer.belowParagraph * scale}px;
    padding-top: ${footer.aboveParagraph * scale}px;
    width: ${triangleWidth * scale}px;
  }
  @media only screen and ${mediaQuery.twoColumns} {
    padding-left: ${page.whitespace.sideMargin +
    (cross.width.large * scale) / 3}px;
    width: ${twoColumns.minWidth}px;
    padding-right: ${page.whitespace.sideMargin}px;
  }
  @media only screen and ${mediaQuery.threeColumns} {
    padding-left: ${page.whitespace.sideMargin}px;
    width: ${threeColumns.minWidth}px;
  }
`;

Footer.Paragraph = styled(Paragraph)`
  color: ${color.footer.font};
  ${typescale.footer}
  ${typescale.textcrop}
`;

Footer.propTypes = {};

export default Footer;
