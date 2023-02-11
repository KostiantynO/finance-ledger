import styled from 'styled-components';
import { SectionStyled } from 'components/shared/Section.styled';

export const CenteredSection = styled(SectionStyled)`
  text-align: center;

  .smallText,
  .desc {
    font-size: 16px;
    line-height: 22px;
  }

  .smallText {
    margin-bottom: 16px;
  }

  .title {
    margin-bottom: 24px;

    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
  }

  .desc {
    margin-bottom: 30px;
  }
`;

export const CasesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(176px, 1fr));
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(223px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(148px, 1fr));
    gap: 18px;
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(421px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(282px, 1fr));
    gap: 24px 21px;
  }
`;
