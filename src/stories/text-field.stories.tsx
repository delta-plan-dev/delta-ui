import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Switch } from '../components/switch';
import { TextField } from '../components/text-field';

const Template: Story<ComponentProps<typeof Switch> & { theme: number }> = (
  args,
) => {
  return <TextField {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Text field',
  component: TextField,
};
