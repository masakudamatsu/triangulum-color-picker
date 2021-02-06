import React from 'react';

import SectionNoscript from 'src/blocks/SectionNoscript';

const BannerForNoJs = () => {
  return (
    <SectionNoscript>
      <SectionNoscript.Paragraph>
        For full functionality of this site, it is necessary to enable
        JavaScript.
      </SectionNoscript.Paragraph>
      <SectionNoscript.Spacer />
      <SectionNoscript.Paragraph>
        Here are the{' '}
        <SectionNoscript.Link href="https://www.enable-javascript.com/">
          instructions how to enable JavaScript in your web browser
        </SectionNoscript.Link>
        .{' '}
      </SectionNoscript.Paragraph>
    </SectionNoscript>
  );
};

export default BannerForNoJs;
