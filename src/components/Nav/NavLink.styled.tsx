import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const LinkStyled = styled.a`
  padding: 2px;

  font-size: 16px;
  line-height: 22px;
  font-family: ${({ theme }) => theme.font.openSans};
  color: ${({ theme }) => theme.color.white};

  text-transform: capitalize;
`;
