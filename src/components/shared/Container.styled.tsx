import styled from 'styled-components';

export const FullWidth = styled.div`
  width: ${({ theme }) => theme.bp.mobile};

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    width: ${({ theme }) => theme.bp.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    width: ${({ theme }) => theme.bp.desktop};
  }
`;

export const Container = styled(FullWidth)`
  padding: 0 20px;
  margin: 0 auto;
`;
