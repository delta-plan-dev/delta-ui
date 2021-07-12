import Color from './color'

export interface ITheme {
  colors: {
    primary: Color
    secondary: Color
    success: Color
    warning: Color
    danger: Color
    info: Color
    light: Color
    dark: Color
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
