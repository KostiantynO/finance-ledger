import reactLogo from 'assets/react.svg';
import { ContactForm } from 'components/ContactForm';
import { Container, Section } from 'components/shared';

const Attribution = () => (
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

const Hero = () => <div>Hero</div>;

const TeamPhoto = () => <div>Team</div>;

const Gallery = () => <div>Gallery</div>;

const Advantages = () => <div>Advantages</div>;

export const Main = () => (
  <main>
    <Section>
      <Container>
        <Hero />
      </Container>
    </Section>

    <Section>
      <Container>
        <TeamPhoto />
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
