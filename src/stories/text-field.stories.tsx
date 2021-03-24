import { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { TextField } from '../components/text-field';
import React from 'react';

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
Default.argTypes = {
  mask: {
    control: false,
  },
  maskPlaceholder: {
    control: false,
  },
  alwaysShowMask: {
    control: false,
  },
};
Default.args = {
  width: '50%',
  label: 'Label',
  value: '',
};

export const Masked = DefaultTemplate.bind({});
Masked.args = {
  width: '50%',
  label: 'Masked input',
  value: '912',
  mask: '+7 (999) 999-99-99',
  maskPlaceholder: '*',
};

export default {
  title: 'TextField',
  component: TextField,
};
