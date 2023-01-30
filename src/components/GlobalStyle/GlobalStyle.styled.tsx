import { createGlobalStyle, css } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

const styled = { createGlobalStyle };

const reset = css`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }
`;

const sensibleDefaults = css`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }
`;

export const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  ${sensibleDefaults}
`;
