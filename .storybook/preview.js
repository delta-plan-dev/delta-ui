import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/components/global-style';
import { darkTheme } from '../src/themes/dark-theme';
import { lightTheme } from '../src/themes/light-theme';

export const decorators = [
  (Story, context) => (
    <>
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
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
