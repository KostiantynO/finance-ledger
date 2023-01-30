import { Logo } from 'components/Logo';
import { Nav } from 'components/Nav';
import { HeaderContainer, HeaderStyled } from './Header.styled';

export const Header = () => (
  <HeaderStyled>
    <HeaderContainer>
      <Logo />

      <Nav />
    </HeaderContainer>
  </HeaderStyled>
);
