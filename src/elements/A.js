import styled from 'styled-components';
import PropTypes from 'prop-types';

import {color} from 'src/utils/color';
import {poppins} from 'src/utils/fontMetrics';

const A = styled.a`
  background: ${color.footer.linkBackground}; /* Fallback */
  background: linear-gradient(
    to bottom,
    transparent 50%,
    ${color.footer.font} 50%,
    ${color.footer.font}
  );
  background-position: 0
    calc(0.4em + ${poppins.light.capHeight / poppins.light.unitsPerEm}em);
  background-repeat: no-repeat;
  background-size: 100% 2px;
  color: ${color.footer.font};
  cursor: pointer;
  text-decoration: none;
  text-shadow: 0.03em 0 ${color.footer.background},
    -0.03em 0 ${color.footer.background}, 0 0.03em ${color.footer.background},
    0 -0.03em ${color.footer.background}; /* following https://eager.io/blog/smarter-link-underlines/ */

  &:visited {
    background: ${color.footer.linkBackground}; /* fallback */
    background: linear-gradient(
      to bottom,
      transparent 50%,
      ${color.footer.font} 50%,
      ${color.footer.font}
    );
    color: ${color.footer.font};
  }

  &:focus,
  &:hover {
    background: ${color.footer.linkBackground};
    outline: none;
    text-shadow: none;
  }

  &:active {
    background: none; /* To make it blink */
  }

  &:visited:focus,
  &:visited:hover {
    background: ${color.footer.linkBackground};
    outline: none;
    text-shadow: none;
  }

  &:visited:active {
    background: none;
  }
`;

A.propTypes = {};

export default A;
