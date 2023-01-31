import styled from 'styled-components';
import { transition } from 'common/styles';
import { ReactComponent } from 'assets/svg/book.svg';
import { Link } from 'react-router-dom';

export const BookIcon = styled(ReactComponent)`
  width: 40px;
  height: 32px;
`;

const transitionTransform = transition('transform');

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  max-width: 297px;

  font-size: 35px;
  line-height: 1.37;
  font-family: ${({ theme }) => theme.font.openSans};
  color: ${({ theme }) => theme.color.accent};

  ${transitionTransform}

  &:hover {
    transform: scale(1.075);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.color.accent};
`;

export const Normal = styled.span`
  color: ${({ theme }) => theme.color.white};
`;
