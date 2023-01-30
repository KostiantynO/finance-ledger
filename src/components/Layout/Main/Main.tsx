import {
  Hero,
  Solutions,
  Cases,
  Blog,
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
    <Blog />
    <Gallery />
    <Team />
    <Callback />
  </MainStyled>
);
