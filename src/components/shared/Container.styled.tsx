import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.bp.mobile};
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    width: ${({ theme }) => theme.bp.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    width: ${({ theme }) => theme.bp.desktop};
  }
`;
