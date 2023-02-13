import styled from 'styled-components';
import { SectionStyled } from 'components/shared';
import { SolutionsContentStyled } from '../Solutions';

export const CallbackContentStyled = styled(SolutionsContentStyled)`
  background: ${({ theme }) => theme.color.white};
`;

export const SectionNoBottomPadding = styled(SectionStyled)`
  padding-bottom: 0;
`;
