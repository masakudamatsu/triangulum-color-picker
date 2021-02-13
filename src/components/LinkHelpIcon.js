import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {capheight, scale} from 'src/utils/designSpecs';
import {color} from 'src/utils/color';
import {mediaQuery} from 'src/utils/breakpoints';
import remify from 'src/utils/remify';
import {typescale} from 'src/utils/typography';

// color scheme
const black = color.input.background;
const white = color.input.border;

const Svg = styled.svg`
  fill: ${black};
  stroke: ${white};
  stroke-width: 1.5;
  transform: translate(0, 0.14em);
  width: ${remify(25)};
  @media only screen and ${mediaQuery.font} {
    width: ${remify(25 * scale)};
  }

  &:focus,
  &:hover {
    fill: ${white};
    stroke: ${black};
  }
  &:active {
    fill: ${black};
    stroke: ${white};
  }
`;

const LinkHelpIcon = ({href, linkTitle}) => {
  return (
    <a href={href} rel="help" title={linkTitle}>
      {/* Adapted from the help icon by Tabler Icon https://tablericons.com/ */}
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <title>{linkTitle}</title>
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="16" x2="12" y2="18" />
        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
      </Svg>
    </a>
  );
};

LinkHelpIcon.propTypes = {
  href: PropTypes.string.isRequired,
  linkTitle: PropTypes.string,
};

export default LinkHelpIcon;
