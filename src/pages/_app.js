import GlobalStyle from 'src/utils/GlobalStyle';

export default function App({Component, pageProps}) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />{' '}
    </>
  );
}
