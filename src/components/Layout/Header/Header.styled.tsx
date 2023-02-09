import styled from 'styled-components';
import { transition } from 'common/styles';
import { Container } from 'components/shared';

const fading = transition('background-color');

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  padding: 22px 0;

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 16px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    padding: 32px 0;
  }

  ${fading}

  &.header-bg-visible {
    background-color: rgba(21, 21, 21, 0.95);
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
