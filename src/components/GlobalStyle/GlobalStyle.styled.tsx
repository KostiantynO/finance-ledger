import 'modern-normalize/modern-normalize.css';
import openSans400 from 'assets/fonts/open-sans-l-c-400.woff2';
import openSans600 from 'assets/fonts/open-sans-l-c-600.woff2';
import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  /** https://gwfh.mranftl.com/fonts/open-sans?subsets=cyrillic,latin */
  /* open-sans-regular - latin_cyrillic */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${openSans400}) format('woff2');
    /* Chrome 36+, Opera 23+, Firefox 39+ */
  }
  /* open-sans-600 - latin_cyrillic */
  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src: url(${openSans600}) format('woff2');
  }

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

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  html {
    scrollbar-gutter: stable;
    scroll-padding-top: 120px; // header height

    @media screen and (min-width: ${({ theme }) => theme.bp.tablet}) {
      scroll-padding-top: 80px;
    }

    @media screen and (min-width: ${({ theme }) => theme.bp.desktop}) {
      scroll-padding-top: 112px;
    }

    @media screen and (prefers-reduced-motion: no-preference) {
      scroll-behavior: smooth;
    }
  }

  body {
    font-family: ${({ theme }) => theme.font.openSans};
    color: ${({ theme }) => theme.color.main};
  }
`;
