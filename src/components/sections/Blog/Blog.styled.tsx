import styled from 'styled-components';
import { Container } from 'components/shared';
import { SolutionsContentStyled } from '../Solutions';

export const BlogSection = styled.section``;

export const ContainerPhotoRight = styled(Container)`
  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    display: grid;
    grid-template-columns: 368px 1fr;
    grid-template-rows: 589px;
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: 670px 1fr;
    grid-template-rows: 460px;
  }
`;

export const BlogContentStyled = styled(SolutionsContentStyled)`
  background: ${({ theme }) => theme.color.blue};
`;
