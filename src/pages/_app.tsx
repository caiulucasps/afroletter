import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import { theme } from '../themes/theme';

import { Header } from './AppStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header>
        <div>
          <h1>
            <span>@</span> AfroLetter
          </h1>
        </div>
      </Header>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
