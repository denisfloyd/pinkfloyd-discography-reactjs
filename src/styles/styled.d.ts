import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryTransparent: string;
      secundary: string;
      secundaryTransparent: string;

      background: string;
      text: string;
    };
  }
}
