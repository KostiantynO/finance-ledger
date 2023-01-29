import type { Breakpoint, Color } from '../theme';

// import original module declarations
import 'styled-components';

/**
 * This is an extended styled interface
 */
declare module 'styled-components' {
  export interface DefaultTheme {
    bp: Breakpoint;
    color: Color;
  }
}
