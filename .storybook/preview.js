import { themes } from '@storybook/theming';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src';
import { lightTheme } from '../src';
import '../src/assets/styles/fonts.css';

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  ),
];

export const parameters = {
  // actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: themes.dark,
  },
};
