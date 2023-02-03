import styled from 'styled-components';

export const TeamSection = styled.section`
  ul {
    @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 12px;
    }
  }
`;
