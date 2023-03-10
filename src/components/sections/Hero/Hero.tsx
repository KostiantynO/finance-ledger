import { HeroButton } from 'components/Button';
import { Container } from 'components/shared';
import {
  ArrowRight,
  HeroDescription,
  HeroSection,
  HeroTitle,
} from './Hero.styled';

export const Hero = () => (
  <HeroSection id="home">
    <Container>
      <HeroTitle>The sky is the limit</HeroTitle>

      <HeroDescription>
        We provide world class financial assistance
      </HeroDescription>

      <HeroButton type="button">
        <ArrowRight />
        Read More
      </HeroButton>
    </Container>
  </HeroSection>
);
