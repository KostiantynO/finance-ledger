import {
  Blog,
  Callback,
  Cases,
  Hero,
  Solutions,
  Team,
} from 'components/sections';

import { MainStyled } from './Main.styled';

export const Main = () => (
  <MainStyled>
    <Hero />
    <Solutions />
    <Cases />
    <Blog />
    <Team />
    <Callback />
  </MainStyled>
);
