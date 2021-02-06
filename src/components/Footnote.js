import React from 'react';

import Footer from 'src/blocks/Footer';
import GitHubLink from 'src/components/GitHubLink';

const Footnote = () => {
  return (
    <Footer>
      <Footer.InnerWrapper>
        <Footer.Paragraph rightAligned>
          Made by{' '}
          <Footer.A href="https://twitter.com/masa_kudamatsu">
            Masa Kudamatsu
          </Footer.A>{' '}
          in 2021
        </Footer.Paragraph>
        <GitHubLink footer />
      </Footer.InnerWrapper>
    </Footer>
  );
};

export default Footnote;
