import styled from 'styled-components';
import { transition } from 'common/styles';
import { ReactComponent } from 'assets/svg/book.svg';

export const BookIcon = styled(ReactComponent)`
  width: 39px;
  height: 31px;

  @media screen and (max-width: ${({ theme }) => theme.bp.preTablet}) {
    margin-top: 3px;
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    width: 40px;
    height: 35px;
  }
`;

const logoTransition = transition('transform');

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  max-width: 297px;
  padding-left: 4px;

  font-size: 28px;
  line-height: 38px;
  font-family: ${({ theme }) => theme.font.openSans};
  color: ${({ theme }) => theme.color.accent};

  ${logoTransition}

  &:hover {
    transform: scale3d(1.075, 1.075, 1);
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    font-size: 35px;
    line-height: 48px;
  }
`;

export const White = styled.span`
  color: ${({ theme }) => theme.color.white};
`;
