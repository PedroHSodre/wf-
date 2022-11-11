import "styled-components";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      BG_PRIMARY: string;
      DARK: string;
      DARK_PRIMARY_CONTRAST: string;
      GRAY_TERTIARY: string;
      DARK_SECONDARY: string;
      GRAY_PRIMARY: string;
      GRAY_SECONDARY: string;
      YELLOW_PRIMARY: string;
      RED_PRIMARY: string;
      LIGHT_PRIMARY: string;
      LIGHT_PRIMARY_CONTRAST: string;
      LIGHT_TEXT_SECONDARY: string;
      LIGHT_BACKDROP: string;
      LINE_PRIMARY: string;
    };
  }
}
