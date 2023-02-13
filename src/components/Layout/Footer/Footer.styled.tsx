import styled from 'styled-components';
import { Container } from 'components/shared';

export const FooterStyled = styled.footer`
  height: 110px;
  padding: 20px 0;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
`;

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  height: 100%;
`;

export const Social = styled.ul`
  display: flex;
  gap: 20px;

  & .a {
    padding: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.white};
  }
`;
