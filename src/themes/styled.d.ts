import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      BLUE_500: string;
      GRAY_100: string;
      GRAY_200: string;
      GRAY_800: string;
      GRAY_900: string;
    };
    fonts: {
      PRIMARY: string;
      SECONDARY: string;
      CODE: string;
    };
  }
}
