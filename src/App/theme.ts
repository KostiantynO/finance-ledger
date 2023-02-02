import type { Breakpoint, Color, Font } from '@types';

const bp: Breakpoint = {
  mobile: '320px',
  preTablet: '767px',
  tablet: '768px',
  desktop: '1360px',
};

const color: Color = {
  accent: '#28A745',
  main: '#333333',
  white: '#FFFFFF',
  blue: '#0284D0',
  lightGrey: '#F4F4F4',
  heroBg: '#212121',
  btnHover: '#2EBF4F',
};

const font: Font = {
  openSans: 'Open Sans',
};

export const theme = Object.freeze({
  bp,
  color,
  font,
});

export type ThemeType = typeof theme;
