import { Container } from 'components/shared';
import { CenteredSection } from './Cases.styled';
import { CasesList } from './CasesList';

export const Cases = () => (
  <CenteredSection id="cases">
    <Container>
      <p className="smallText">This is what we do</p>
      <h2 className="title">Business Cases</h2>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>

      <CasesList />
    </Container>
  </CenteredSection>
);
