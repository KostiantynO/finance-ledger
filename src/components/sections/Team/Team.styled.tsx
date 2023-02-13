import styled from 'styled-components';

export const TeamListStyled = styled.ul`
  display: grid;
  gap: 30px;

  @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(223px, 1fr));
    gap: 18px;
  }

  @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 22px;
  }
`;

export const TeamItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .fullName {
    margin-top: 16px;
    margin-bottom: 8px;

    font-size: 20px;
    line-height: 1.35;

    @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
      margin-top: 18px;

      font-size: 32px;
      line-height: 1;
    }

    @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
      margin-top: 15px;
    }
  }

  .position {
    font-size: 16px;
    line-height: 1.375;

    @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
      font-size: 18px;
      line-height: 1.39;
    }
  }
`;
