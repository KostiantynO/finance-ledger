import styled from 'styled-components';
import { Container } from 'components/shared';

export const SolutionsSection = styled.section``;

export const ContainerPhotoLeft = styled(Container)`
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

export const SolutionsContentStyled = styled.div`
  padding: 52px 20px;

  min-height: 466px;

  color: ${({ theme }) => theme.color.white};

  background: ${({ theme }) => theme.color.accent};

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    min-height: 589px;
    padding: 62px 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    min-height: 460px;
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

  .desc {
    margin-bottom: 24px;
  }

  .smallText,
  .desc {
    font-size: 16px;
    line-height: 22px;

    @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;

export const StyledPhoto = styled.picture`
  display: flex;
  background-color: #eee;

  img {
    object-fit: cover;
  }
`;
