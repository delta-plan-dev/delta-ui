import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { Switch } from '../components/switch';

const Template: Story<ComponentProps<typeof Switch> & { theme: number }> = (
  args,
) => {
  const [value, setValue] = useState<boolean>(args.value);

  return (
    <Switch {...args} value={value} onChange={(value) => setValue(value)} />
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
};
