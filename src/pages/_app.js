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

        {/* Preloading font files */}
        <link
          rel="preload"
          href="/fonts/poppins-v15-latin-300.woff2"
          as="font"
          crossOrigin
        />

        <meta
          name="description"
          content="A front-end web app to pick a tint/tone/shade of hues more logically and more intuitively than the standard color pickers"
        />
        {/* SVG-favicon-compatible browsers */}
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        {/* SVG-favicon-incompatible browsers */}
        <link rel="alternate icon" href="/favicon.ico" />
        {/*  iOS Home Screen */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Triangulum" />
        {/*  Android Chrome */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="application-name" content="Triangulum" />
        {/*  MacOS Safari pinned tab / touch bar */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4a4a4a" />
        {/* Android Chrome tab color */}
        <meta name="theme-color" content="#4a4a4a" />

        {/* Structured data: see https://developers.google.com/search/docs/data-types/software-app#softwareapplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
          key="structured-data"
        />

        {/* Social media link appearance */}
        <meta property="og:title" content="Triangulum Color Picker" />
        <meta property="og:url" content="https://triangulum.netlify.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A front-end web app to pick a tint/tone/shade of hues more logically and more intuitively than the standard color pickers"
        />
        <meta
          property="og:image"
          content="https://triangulum.netlify.app/thumbnail.png"
        />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta
          name="twitter:image:alt"
          content="Preview of Triangulum Color Picker's user interface"
        />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@masa_kudamatsu" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />{' '}
    </>
  );
}
