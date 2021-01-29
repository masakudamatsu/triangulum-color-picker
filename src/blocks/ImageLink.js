import styled from 'styled-components';
import PropTypes from 'prop-types';

import Img from 'src/elements/Img';
import {header} from 'src/utils/designSpecs';
import {mediaQuery} from 'src/utils/breakpoints';

const ImageLink = styled.a`
  height: ${header.logo.height}px;
  width: ${header.logo.width}px;
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
