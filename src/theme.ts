import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  colors: {
    color1: "#e3ebf6",
    color2: "#ffbc00",
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
