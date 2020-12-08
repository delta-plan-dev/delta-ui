import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { Switch } from '../components/switch';
import { lightTheme } from '../themes/light-theme';
import { darkTheme } from '../themes/datk-theme';
import { ThemeProvider } from 'styled-components';

const Template: Story<ComponentProps<typeof Switch> & { theme: number }> = (
  args,
) => {
  const [value, setValue] = useState<boolean>(args.value);
  const themes = { 1: lightTheme, 2: darkTheme };

  return (
    <ThemeProvider theme={themes[args.theme]}>
      <Switch
        {...args}
        value={value}
        handleChange={(value) => setValue(value)}
      />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '',
  titleSide: 'right',
  value: false,
  size: 'medium',
};

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: { 'Light theme': 1, 'Dark theme': 2 },
      },
    },
  },
  args: {
    theme: 1,
  },
};
