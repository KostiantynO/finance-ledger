import styled from 'styled-components';

export const CasesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
`;
