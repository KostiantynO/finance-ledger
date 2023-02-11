import styled from 'styled-components';

export const TeamListStyled = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 12px;
  }
`;

export const TeamItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .fullName {
    font-weight: 600;
  }

  .position {
  }
`;
