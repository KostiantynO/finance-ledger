import styled from 'styled-components';

export const HeadingStyled = styled.h1`
  margin-bottom: 24px;

  font-weight: 400;
  font-size: 32px;
  line-height: 44px;

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    font-size: 40px;
    line-height: 48px;
  }
`;
