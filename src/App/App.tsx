import reactLogo from 'assets/react.svg';
import { GlobalStyle } from 'components/GlobalStyle';
import { ContactForm } from 'components/ContactForm';
import { AppStyled } from './App.styled';
import styled, { ThemeProvider } from 'styled-components';

const Attribution = () => {
  return (
    <section>
      <h3>Made with:</h3>
      <div>
        <a
          className="logo-link"
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/vite.svg" className="logo" alt="Vite logo" title="Vite" />
          Vite
        </a>

        <a
          className="logo-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            title="React"
          />
          React
        </a>
      </div>
    </section>
  );
};

const Container = styled.div`
  width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    width: ${({ theme }) => theme.bp.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    width: ${({ theme }) => theme.bp.desktop};
  }
`;

const Header = () => (
  <header>
    <Container></Container>
  </header>
);

const Section = styled.section`
  padding: 20px 0;
`;

const Hero = () => {
  return <div>Hero</div>;
};

const Team = () => {
  return <div>Team</div>;
};

const Gallery = () => {
  return <div>Gallery</div>;
};

const Advantages = () => {
  return <div>Advantages</div>;
};

const Main = () => (
  <main>
    <Section>
      <Container>
        <Hero />
      </Container>
    </Section>

    <Section>
      <Container>
        <Team />
      </Container>
    </Section>

    <Section>
      <Container>
        <Advantages />
      </Container>
    </Section>

    <Section>
      <Container>
        <Gallery />
      </Container>
    </Section>

    <Section>
      <Container>
        <ContactForm />
      </Container>
    </Section>

    <Section>
      <Container>
        <Attribution />
      </Container>
    </Section>
  </main>
);

const Footer = () => (
  <footer>
    <Container></Container>
  </footer>
);

const Layout = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

const theme = {
  bp: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1360px',
  },

  color: {
    accent: '#28A745',
    main: '#333333',
    white: '#FFFFFF',
    blue: '#0284D0',
    lightGrey: '#F4F4F4',
  },
} as const;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled className="App">
        <GlobalStyle />

        <Layout />
      </AppStyled>
    </ThemeProvider>
  );
};
