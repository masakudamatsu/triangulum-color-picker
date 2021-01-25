import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'src/blocks/Footer';

const Footnote = () => {
  return (
    <Footer>
      <Footer.InnerWrapper>
        <Footer.Paragraph rightAligned>
          designed and coded by{' '}
          <Footer.A href="https://twitter.com/masa_kudamatsu">
            Masa Kudamatsu
          </Footer.A>{' '}
          in 2021
        </Footer.Paragraph>
      </Footer.InnerWrapper>
    </Footer>
  );
};

Footnote.propTypes = {};

export default Footnote;
