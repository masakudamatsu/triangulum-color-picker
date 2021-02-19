import styled from 'styled-components';
import PropTypes from 'prop-types';

import Img from 'src/elements/Img';
import {header} from 'src/utils/specLayout';
import {mediaQuery} from 'src/utils/breakpoints';
import remify from 'src/utils/remify';

const ImageLink = styled.a`
  height: ${remify(header.logo.height)};
  width: ${remify(header.logo.width)};
  ${props => (props.footer ? `display: inline-block;` : `display: none;`)}
  @media only screen and ${mediaQuery.twoColumns} {
    ${props => (props.footer ? `display: none;` : `display: inline-block;`)}
  }
  @media only screen and ${mediaQuery.threeColumns} {
    ${props => (props.footer ? `display: none;` : `display: inline-block;`)}
  }
`;

ImageLink.Img = Img;

ImageLink.propTypes = {
  footer: PropTypes.bool,
};

export default ImageLink;
