import type { FlattenSimpleInterpolation } from 'styled-components';
import { css } from 'styled-components';

type Transition = 'transform' | 'color' | 'bgcolor' | 'opacity';

export const transition = (
  ...args: Transition[]
): FlattenSimpleInterpolation => css`
  @media screen and (prefers-reduced-motion: no-preference) {
    transition: 210ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: ${args.length > 1 ? args.join(', ') : args};
  }
`;
