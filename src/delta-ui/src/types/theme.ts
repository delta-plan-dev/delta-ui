export interface ITheme {
  colors: {
    main: string;
    secondary: string;
    black: string;
    darkGray: string;
    lightGray: string;
    white: string;
    purple: string;
    primary: string;
  };
  fonts?: {
    fontFamily: string;
    fontStyle: string;
    fontWeight: string;
    src: string;
  }[];
}
