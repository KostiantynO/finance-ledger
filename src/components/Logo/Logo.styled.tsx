import styled from 'styled-components';
import { transition } from 'common/styles';
import { ReactComponent } from 'assets/svg/book.svg';

export const BookIcon = styled(ReactComponent)`
  width: 40px;
  height: 32px;
`;

const logoTransition = transition('letter-spacing');

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
    letter-spacing: 0.02em;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Accent = styled.span`
  font-size: 28px;
  line-height: 1.36;
  color: ${({ theme }) => theme.color.accent};
`;

export const Normal = styled.span`
  font-size: 28px;
  line-height: 1.36;
  color: ${({ theme }) => theme.color.white};
`;
