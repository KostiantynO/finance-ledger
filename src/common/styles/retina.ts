import type { FlattenSimpleInterpolation } from 'styled-components';
import { css } from 'styled-components';

// TODO: update
const gradient =
  'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';

export const bg = (
  jpg: string,
  webp: string
): FlattenSimpleInterpolation => css`
  background-image: url(${jpg});
  background-image: url(${webp});
`;

export const bgGradient = (
  jpg: string,
  webp: string
): FlattenSimpleInterpolation => css`
  background-image: ${gradient}, url(${jpg});
  background-image: ${gradient}, url(${webp});
`;

/** 2x screens, retina bg image */
export const retina = (
  jpg2x: string,
  webp2x: string
): FlattenSimpleInterpolation => css`
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (-o-min-device-pixel-ratio: 2/1),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${jpg2x});
    background-image: url(${webp2x});
  }
`;

/** 2x screens, retina bg image */
export const retinaGradient = (
  jpg2x: string,
  webp2x: string
): FlattenSimpleInterpolation => css`
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (-o-min-device-pixel-ratio: 2/1),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${gradient}, url(${jpg2x});
    background-image: ${gradient}, url(${webp2x});
  }
`;
