import styled from 'styled-components';
import { Container } from 'components/shared';
import { SolutionsContentStyled } from '../Solutions';

export const BlogSection = styled(SolutionsContentStyled)`
  background: ${({ theme }) => theme.color.blue};
`;

export const BlogContainer = styled(Container)`
  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    display: grid;
    grid-template-columns: 1fr 368px;
    grid-template-rows: 589px;
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: 1fr 670px;
    grid-template-rows: 460px;
  }
`;
