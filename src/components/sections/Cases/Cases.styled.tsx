import { Section } from 'components/shared';
import styled from 'styled-components';

export const CasesSection = styled(Section)`
  text-align: center;

  .smallText {
    margin-bottom: 16px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    text-align: center;

    color: #333333;
  }

  .title {
    margin-bottom: 24px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    text-align: center;

    color: #333333;
  }

  .desc {
    margin-bottom: 31px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;

    color: #333333;
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
