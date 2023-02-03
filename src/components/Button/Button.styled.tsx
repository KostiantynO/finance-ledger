import styled, { css } from 'styled-components';
import { transition } from 'common/styles';

const transitionMain = transition('background-color');
const transitionOutlined = transition(
  'color',
  'border-color',
  'background-color'
);

export const ButtonDefault = styled.button.attrs(({ type = 'button' }) => ({
  type,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 155px;
  min-height: 57px;

  padding: 16px 32px;

  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.font.openSans};

  border: none;
  border-radius: 5px;
`;

const mainButton = css`
  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.accent};

  ${transitionMain}

  &:hover {
    background-color: ${({ theme }) => theme.color.btnHoverMain};
  }
`;

export const Button = styled(ButtonDefault)`
  ${mainButton}
`;

export const HeroButton = styled(Button)`
  margin: 0 auto;
`;

const outlinedButton = css`
  font-size: 18px;
  line-height: 25px;

  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.white};

  ${transitionOutlined}
`;

export const ButtonOutlinedAccent = styled(ButtonDefault)`
  ${outlinedButton}

  &:hover {
    color: ${({ theme }) => theme.color.accent};
    border-color: ${({ theme }) => theme.color.accent};
    background-color: ${({ theme }) => theme.color.white};
  }
`;

export const ButtonOutlined = styled(Button)`
  ${outlinedButton}

  &:hover {
    color: ${({ theme }) => theme.color.btnHoverThird};
    border-color: ${({ theme }) => theme.color.btnHoverThird};
    background-color: ${({ theme }) => theme.color.white};
  }
`;
