import { useUpdateTitle } from 'common/hooks/ui';
import { Logo } from 'components/Logo';
import { Nav } from 'components/Nav';
import { HeaderContainer, HeaderStyled } from './Header.styled';

export const Header = () => {
  useUpdateTitle();

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo />

        <Nav />
      </HeaderContainer>
    </HeaderStyled>
  );
};
