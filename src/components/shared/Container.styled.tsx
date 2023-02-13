import styled from 'styled-components';

export const Container = styled.div.attrs(
  ({ $padding }: { $padding?: string }) => ({ $padding })
)`
  max-width: ${({ theme }) => theme.bp.mobile};
  margin: 0 auto;
  padding: ${({ $padding }) => $padding ?? '0 20px'};

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    max-width: ${({ theme }) => theme.bp.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    max-width: ${({ theme }) => theme.bp.desktop};
  }
`;
