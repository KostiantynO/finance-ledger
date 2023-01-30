import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';
import { theme } from './theme';
import { AppStyled } from './App.styled';

export const App = () => (
  <ThemeProvider theme={theme}>
    <AppStyled className="App">
      <GlobalStyle />

      <Layout>
        <Outlet />
      </Layout>
    </AppStyled>
  </ThemeProvider>
);
