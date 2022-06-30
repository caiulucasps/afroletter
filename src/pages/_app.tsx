import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';

import { linkResolver, repositoryName } from '../../prismicio';

import GlobalStyles from '../styles/global';
import { theme } from '../themes/theme';

import { Header } from '../styles/AppStyle';
import Link from 'next/link';

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
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </ThemeProvider>
  );
}

export default MyApp;
