import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
