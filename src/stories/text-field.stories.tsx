import React, { ComponentProps, useEffect, useState } from 'react';
import { Story } from '@storybook/react';
import { TextField } from '../components/text-field';

const Template: Story<ComponentProps<typeof TextField> & { theme: number }> = (
  args,
) => {
  const [value, setValue] = useState<string>(args.value);

  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  return (
    <TextField {...args} value={value} onChange={(value) => setValue(value)} />
  );
};

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Text field',
  component: TextField,
  args: {
    value: '',
  },
};
