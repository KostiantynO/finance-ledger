import { Container, Section } from 'components/shared';
import react from 'assets/svg/react.svg';

const AttributionPage = () => (
  <Section>
    <Container>
      <h1>Made with:</h1>

      <div>
        <p>
          <img src="/vite.svg" alt="vite" title="vite" />
          vite
        </p>

        <p>
          <img src={react} alt="react" title="react" />
          react
        </p>
      </div>
    </Container>
  </Section>
);

export default AttributionPage;
