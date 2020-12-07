import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { Switch } from './switch';

const Template: Story<ComponentProps<typeof Switch>> = (args) => {
  const [value, setValue] = useState<boolean>(args.value);

  return (
    <Switch {...args} value={value} handleChange={(value) => setValue(value)} />
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '',
  titleSide: 'right',
  value: true,
  size: 'medium',
};

export default {
  title: 'Switch',
  component: Switch,
};
