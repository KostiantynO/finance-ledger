import { transition } from 'common/styles';
import { Container } from 'components/shared';
import styled from 'styled-components';

const fading = transition('background-color');

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  padding: 22px 0 16px;

  ${fading}

  &.header-bg-visible {
    background-color: rgba(21, 21, 21, 0.92);
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    padding-top: 16px;
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
