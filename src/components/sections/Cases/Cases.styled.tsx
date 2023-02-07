import { Section } from 'components/shared';
import styled from 'styled-components';

export const CasesSection = styled(Section)`
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
    margin-bottom: 31px;
  }
`;

export const CasesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 8px;

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
`;
