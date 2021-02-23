import styled from 'styled-components';
import PropTypes from 'prop-types';

import H1 from 'src/elements/H1';
import Img from 'src/elements/Img';

import {color} from 'src/utils/specColor';
import {mediaQuery} from 'src/utils/breakpoints';
import {
  cross,
  header,
  page,
  triangleWidth,
  threeColumns,
  twoColumns,
} from 'src/utils/specLayout';
import remify from 'src/utils/remify';
import {scale} from 'src/utils/specFont';
const animation = {
  show: `
    transform: translate(0, 0);
    transition: transform ${header.speed.show} cubic-bezier(0.0, 0.0, 0.2, 1);
  `,
  hide: `
    transform: translate(0, -${remify(header.height)});
    transition: transform ${header.speed.hide} cubic-bezier(0.0, 0.0, 0.2, 1);
    @media only screen and ${mediaQuery.font} {
      transform: translate(0, -${remify(header.height * scale)});
    }
  `,
};

const Header = styled.header`
  background-color: ${color.topAppBar.background};
  border-bottom: ${header.borderBottomWidth}px solid
    ${color.topAppBar.borderBottom};
  display: flex;
  height: ${remify(header.height + header.borderBottomWidth)};
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  ${props => props.show && animation.show}
  ${props => props.hide && animation.hide}
  @media only screen and ${mediaQuery.font} {
    height: ${remify(header.height * scale + header.borderBottomWidth)};
  }
`;

Header.OuterWrapper = styled.div`
  @media only screen and ${mediaQuery.twoColumns} {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-left: ${remify(
      page.whitespace.sideMargin + (cross.width.large * scale) / 3,
    )};
    padding-right: ${remify(page.whitespace.sideMargin)};
    width: ${remify(twoColumns.minWidth)};
  }
  @media only screen and ${mediaQuery.threeColumns} {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-left: ${remify(page.whitespace.sideMargin)};
    padding-right: ${remify(page.whitespace.sideMargin)};
    width: ${remify(threeColumns.minWidth)};
  }
`;

Header.InnerWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: ${remify(triangleWidth)};
  @media only screen and ${mediaQuery.font} {
    width: ${remify(triangleWidth * scale)};
  }
`;

Header.WrapperLogo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  padding-right: ${remify(header.whitespace.betweenLogoAndH1)};
  width: ${remify(header.logo.width + header.whitespace.betweenLogoAndH1)};
`; // temporary

Header.Img = Img; // temporary

Header.WrapperH1 = styled.div`
  padding-bottom: ${remify(header.whitespace.belowH1)};
  padding-top: ${remify(header.whitespace.aboveH1)};
  @media only screen and ${mediaQuery.font} {
    padding-bottom: ${remify(header.whitespace.belowH1 * scale)};
    padding-top: ${remify(header.whitespace.aboveH1 * scale)};
  }
`;

Header.H1 = H1;

Header.propTypes = {
  hide: PropTypes.bool,
  show: PropTypes.bool,
};

export default Header;
