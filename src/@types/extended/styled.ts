// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bp: {
      mobile: '320px';
      tablet: '768px';
      desktop: '1360px';
    };

    color: {
      accent: '#28A745';
      main: '#333333';
      white: '#FFFFFF';
      blue: '#0284D0';
      lightGrey: '#F4F4F4';
    };
  }
}
