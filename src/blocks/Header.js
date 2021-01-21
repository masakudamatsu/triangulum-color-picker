import styled from 'styled-components';
import PropTypes from 'prop-types';

import H1 from 'src/elements/H1';
import Img from 'src/elements/Img';

import {color} from 'src/utils/color';
import {mediaQuery} from 'src/utils/breakpoints';
import {header, scale, triangleWidth} from 'src/utils/designSpecs';

const animation = {
  show: `
    transform: translate(0, 0);
    transition: transform ${header.speed.show};
  `,
  hide: `
    transform: translate(0, -${header.height}px);
    transition: transform ${header.speed.hide};
  `,
};

const Header = styled.header`
  background-color: ${color.elevation4};
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  ${props => props.show && animation.show}
  ${props => props.hide && animation.hide}
`;

Header.InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: ${triangleWidth}px;
  @media only screen and ${mediaQuery.font} {
    width: ${triangleWidth * scale}px;
  }
`;
Header.WrapperH1 = styled.div`
  padding-bottom: ${header.whitespace.belowH1}px;
  padding-top: ${header.whitespace.aboveH1}px;
`;

Header.H1 = H1;

Header.WrapperLogo = styled.div`
  align-items: center;
  display: flex;
  height: ${header.height}px;
  padding-right: ${header.whitespace.betweenLogoAndH1}px;
  width: ${header.whitespace.paddingLeft +
  header.logo.width +
  header.whitespace.betweenLogoAndH1}px;
`; // temporary

Header.Img = Img; // temporary

Header.propTypes = {
  hide: PropTypes.bool,
  show: PropTypes.bool,
};

export default Header;
