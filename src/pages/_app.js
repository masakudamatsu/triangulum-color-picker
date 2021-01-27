import Head from 'next/head';

import GlobalStyle from 'src/utils/GlobalStyle';

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

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
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
      <GlobalStyle />
      <Component {...pageProps} />{' '}
    </>
  );
}
