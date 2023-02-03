import { Container } from 'components/shared';
import styled from 'styled-components';

export const SolutionsSection = styled.section``;

export const SolutionsContainer = styled(Container)`
  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    display: grid;
    grid-template-columns: 368px 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    display: grid;
    grid-template-columns: 670px 1fr;
  }
`;

export const SolutionsContentStyled = styled.div`
  padding: 79px 20px;

  color: ${({ theme }) => theme.color.white};

  background: ${({ theme }) => theme.color.accent};

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    min-width: 400px;
    min-height: 589px;
    padding: 62px 32px;
  }

  .smallText {
    margin-bottom: 16px;

    color: #ffffff;
  }

  .title {
    margin-bottom: 24px;

    font-weight: 400;
    font-size: 32px;
    line-height: 44px;

    @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
      font-size: 40px;
      line-height: 48px;
    }
  }

  .description {
    margin-bottom: 24px;
  }

  .smallText,
  .description {
    font-size: 16px;
    line-height: 22px;

    @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;
