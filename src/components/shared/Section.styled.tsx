import styled from 'styled-components';

export const SectionStyled = styled.section.attrs(
  ({ $isFancy }: { $isFancy: boolean }) => ({
    $isFancy,
  })
)`
  padding: 32px 0;

  border: ${({ $isFancy }) => $isFancy && '1px dashed pink'};

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    padding: 48px 0 40px;
  }
`;
