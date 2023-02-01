import {
  HeroSection,
  HeroTitle,
  HeroDescription,
  HeroButton,
  ArrowRight,
} from './Hero.styled';

export const Hero = () => (
  <HeroSection id="home">
    <HeroTitle>The sky is the limit</HeroTitle>

    <HeroDescription>
      We provide world class financial assistance
    </HeroDescription>

    <HeroButton type="button">
      <ArrowRight />
      Read More
    </HeroButton>
  </HeroSection>
);
