// Based on (1) https://nextjs.org/docs/advanced-features/custom-document (15 Sep, 2020) (for using Google Fonts) and (2) https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js (1 Sep, 2020) (for using styled-components)

import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

const structuredData = {
  '@context': 'http://schema.org',
  '@type': 'WebApplication',
  name: 'Triangulum Color Picker',
  url: 'triangulum-color-picker.app',
  applicationCategory: 'DesignApplication',
  genre: 'color',
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  softwareVersion: '1.0.0-beta.1',
  operatingSystem: 'All',
  offers: {
    '@type': 'Offer',
    price: '0',
  },
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Triangulum Color Picker</title>
          <meta
            name="description"
            content="A front-end web app to pick a tint/tone/shade of hues more logically and more intuitively than the standard color pickers"
          />
          {/* SVG-favicon-compatible browsers */}
          <link rel="icon" type="image/svg+xml" href="/logo.svg" />

          {/*  iOS Home Screen */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <meta name="apple-mobile-web-app-title" content="Triangulum" />

          {/*  Old browsers that do not recognize SVG as favicon */}
          <link
            rel="alternate icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="alternate icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          {/*  Android Chrome */}
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="application-name" content="Triangulum" />

          {/*  MacOS Safari pinned tab / touch bar */}
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4a4a4a" />

          {/* Windows Start Menu Tile */}
          <meta name="msapplication-TileColor" content="#4a4a4a" />

          {/* Fallback? */}
          <meta name="theme-color" content="#4a4a4a" />

          {/* Structured data: see https://developers.google.com/search/docs/data-types/software-app#softwareapplication */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
            key="structured-data"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
