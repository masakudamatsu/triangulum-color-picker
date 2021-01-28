import React from 'react';
import PropTypes from 'prop-types';

import Noscript from 'src/blocks/Noscript';

const BannerForNoJs = () => {
  return (
    <Noscript>
      <Noscript.Paragraph>
        For full functionality of this site, it is necessary to enable
        JavaScript. Here are the{' '}
        <Noscript.Link href="https://www.enable-javascript.com/">
          instructions how to enable JavaScript in your web browser
        </Noscript.Link>
        .
      </Noscript.Paragraph>
    </Noscript>
  );
};

BannerForNoJs.propTypes = {};

export default BannerForNoJs;
