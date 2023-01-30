import type { FlattenSimpleInterpolation } from 'styled-components';
import { css } from 'styled-components';

// TODO: update
const gradient =
  'linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4))';

interface Images {
  jpg: string;
  webp: string;
}

interface Images2x {
  jpg2x: string;
  webp2x: string;
}

export const bgGradient = ({
  jpg,
  webp,
}: Images): FlattenSimpleInterpolation => css`
  background-image: ${gradient}, url(${jpg});
  background-image: ${gradient}, url(${webp});
`;

/** 2x screens, retina bg image */
export const retinaGradient = ({
  jpg2x,
  webp2x,
}: Images2x): FlattenSimpleInterpolation => css`
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (-o-min-device-pixel-ratio: 2/1),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${gradient}, url(${jpg2x});
    background-image: ${gradient}, url(${webp2x});
  }
`;
