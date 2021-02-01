import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { TextField } from '../components/text-field';

const Template: Story<ComponentProps<typeof TextField>> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <TextField
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value ?? '')}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'TextField',
  component: TextField,
  args: {
    width: 300,
    label: 'Label',
    value: '',
  },
};
