import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src';
import { darkTheme } from '../src';
import { lightTheme } from '../src';
import '../src/assets/styles/fonts.css';

export const decorators = [
  (Story, context) => (
    <ThemeProvider
      theme={
        context.globals?.backgrounds?.value === '#F8F8F8'
          ? lightTheme
          : darkTheme
      }
    >
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
