import StatusColorType from './status-color';

export interface ITheme {
  colors: {
    // Main colors
    main: StatusColorType;
    secondary: StatusColorType;

    // Status colors
    primary: StatusColorType;
    success: StatusColorType;
    danger: StatusColorType;
    warning: StatusColorType;
    info: StatusColorType;

    // Other colors
    dark: StatusColorType;
    light: StatusColorType;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
