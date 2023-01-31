import { HeroSection, HeroTitle, HeroDescription } from './Hero.styled';

export const Hero = () => (
  <HeroSection>
    <HeroTitle id="home">The Sky Is The Limit</HeroTitle>
    <HeroDescription>
      We provide world class financial assistance
    </HeroDescription>
    <button type="button">Read More</button>
  </HeroSection>
);
