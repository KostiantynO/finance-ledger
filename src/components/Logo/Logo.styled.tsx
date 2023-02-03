import styled from 'styled-components';
import { transition } from 'common/styles';
import { ReactComponent } from 'assets/svg/book.svg';

export const BookIcon = styled(ReactComponent)`
  width: 40px;
  height: 32px;
`;

const logoTransition = transition('transform');

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  max-width: 297px;
  padding-left: 4px;

  font-size: 35px;
  line-height: 1.37;
  font-family: ${({ theme }) => theme.font.openSans};
  color: ${({ theme }) => theme.color.accent};

  ${logoTransition}

  &:hover {
    transform: scale3d(1.075, 1.075, 1);
  }

  & .accent,
  & .normal {
    font-size: 28px;
    line-height: 38px;
  }

  & .accent {
    color: ${({ theme }) => theme.color.accent};
  }

  & .normal {
    color: ${({ theme }) => theme.color.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    & .accent,
    & .normal {
      font-size: 35px;
      line-height: 48px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
