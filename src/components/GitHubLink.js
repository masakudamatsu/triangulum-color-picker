import React from 'react';
import PropTypes from 'prop-types';

import ImageLink from 'src/blocks/ImageLink';
import {header} from 'src/utils/specLayout';

const GitHubLink = ({footer}) => {
  return (
    <ImageLink
      footer={footer}
      href="https://github.com/masakudamatsu/triangulum-color-picker"
    >
      <ImageLink.Img
        src="/GitHub-Mark-Light-64px.png"
        alt="Icon link to GitHub repository for Triangulum Color Picker"
        width={header.logo.width}
        height={header.logo.height}
      />
    </ImageLink>
  );
};

GitHubLink.propTypes = {
  footer: PropTypes.bool,
};

export default GitHubLink;
