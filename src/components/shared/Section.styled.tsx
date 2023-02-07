import styled from 'styled-components';

export const Section = styled.section`
  padding: 56px 0;

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 48px 0 40px;
  }
`;
