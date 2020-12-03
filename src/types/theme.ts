import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      color1: string;
      color2: string;
      color3: string;
    };
  }
}
