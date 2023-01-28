import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';
import { AppStyled } from './App.styled';

import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <AppStyled className="App">
      <GlobalStyle />

      <Layout />
    </AppStyled>
  </ThemeProvider>
);
