import React, { ComponentProps, useEffect, useState } from 'react';
import { Story } from '@storybook/react';
import { TextField } from '../components/text-field';

const Template: Story<ComponentProps<typeof TextField>> = (args) => {
  return <TextField {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Text field',
  component: TextField,
  argTypes: {
    onChange: { action: 'changed' },
  },
};
