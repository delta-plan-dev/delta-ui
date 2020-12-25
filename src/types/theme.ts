import StatusColorType from './status.color';

export interface ITheme {
  colors: {
    // Main colors
    main: StatusColorType;
    secondary: StatusColorType;

    // Status colors
    primary: StatusColorType;
    success: StatusColorType;
    warning: StatusColorType;
    error: StatusColorType;
    info: StatusColorType;

    // Other colors
    white: StatusColorType;
    black: StatusColorType;
    gray: StatusColorType;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
