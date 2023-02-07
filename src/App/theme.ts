import type { Breakpoint, Color, Font } from '@types';

export const bp: Breakpoint = {
  mobile: '320px',
  preTablet: '767px',
  tablet: '768px',
  preDesktop: '1359px',
  desktop: '1360px',
};

const { mobile, tablet, desktop } = bp;

const tabletAndDesktop =
  `(min-width: ${desktop}) 421px, 100vw, (min-width: ${tablet}) 223px` as const;

export const sizesCard = `${tabletAndDesktop}, 280px` as const;

export const sizesCadFullScreen = `${tabletAndDesktop}, ${mobile}` as const;

const color: Color = {
  accent: '#28A745',
  main: '#333333',
  white: '#FFFFFF',
  blue: '#0284D0',
  lightGrey: '#F4F4F4',
  heroBg: '#212121',
  btnHoverMain: '#2EBF4F',
  btnHoverSecond: '#F4F4F4',
  btnHoverMainVideo: '#219037',
  btnHoverThird: '#0284D0',
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
