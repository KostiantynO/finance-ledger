import {
  Blog,
  Callback,
  Cases,
  Hero,
  Solutions,
  Team,
} from 'components/sections';
import { LevelContextProvider } from 'features/chat';

import { MainStyled } from './Main.styled';

export const Main = () => (
  <MainStyled>
    <LevelContextProvider>
      <Hero />
      <Solutions />
      <Cases />
      <Blog />
      <Team />
      <Callback />
    </LevelContextProvider>
  </MainStyled>
);
