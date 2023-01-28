import {
  Hero,
  Solutions,
  Cases,
  Gallery,
  Team,
  Callback,
} from 'components/sections';

import { MainStyled } from './Main.styled';

export const Main = () => (
  <MainStyled>
    <Hero />
    <Solutions />
    <Cases />
    <Gallery />
    <Team />
    <Callback />
  </MainStyled>
);
