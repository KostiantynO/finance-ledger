import { Container } from 'components/shared';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  padding-top: 22px;

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    padding-top: 16px;
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
