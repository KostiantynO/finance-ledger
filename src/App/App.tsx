import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout';
import { AppStyled } from './App.styled';
import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <AppStyled className="App">
      <Layout>
        <Outlet />
      </Layout>
    </AppStyled>
  </ThemeProvider>
);
