import "styled-components";
declare module "styled-components" {
    interface DefaultTheme {
        colors: {
            color1: string;
            color2: string;
            color3: string;
        };
    }
}
export declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
