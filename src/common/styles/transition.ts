import type { FlattenSimpleInterpolation } from 'styled-components';
import { css } from 'styled-components';

export const transition = (
  ...args: string[]
): FlattenSimpleInterpolation => css`
  @media screen and (prefers-reduced-motion: no-preference) {
    transition: 300ms ease-in-out;
    transition-property: ${args.length > 1 ? args.join(', ') : args};
  }
`;
