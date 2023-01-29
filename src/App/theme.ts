import type { Breakpoint, Color } from '@types';
import type { DefaultTheme } from 'styled-components';

const bp: Breakpoint = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1360px',
};

const color: Color = {
  accent: '#28A745',
  main: '#333333',
  white: '#FFFFFF',
  blue: '#0284D0',
  lightGrey: '#F4F4F4',
  heroBg: '#888888',
};

export const theme: DefaultTheme = Object.freeze({
  bp,
  color,
});
