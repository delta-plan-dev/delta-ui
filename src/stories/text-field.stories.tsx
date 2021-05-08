import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { TextField } from '../components/text-field';

const DefaultTemplate: Story<ComponentProps<typeof TextField>> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <TextField
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value ?? '')}
    />
  );
};

export const Default = DefaultTemplate.bind({});
Default.args = {
  width: 300,
  label: 'Label',
  value: 'Test',
  maxLength: 10,
};

export default {
  title: 'TextField',
  component: TextField,
};
