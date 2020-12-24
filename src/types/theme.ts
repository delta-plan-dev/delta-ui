export interface ITheme {
  colors: {
    main: string;
    secondary: string;
    primary: string;
    hoverPrimary: string;
    activePrimary: string;
    negative: string;
    hoverNegative: string;
    activeNegative: string;
    disabled: string;
    size: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
