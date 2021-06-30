import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { Toggle } from '../components/toggle';

const Template: Story<ComponentProps<typeof Toggle> & { theme: number }> = (
  args
) => {
  const [value, setValue] = useState<boolean>(args.value);

  return (
    <Toggle {...args} value={value} onChange={(value) => setValue(value)} />
  );
};

export const Default = Template.bind({});
Default.args = {
  title: '',
  titleSide: 'right',
  value: false,
  size: 'medium',
  disableActiveColor: false,
};

export default {
  title: 'Toggle',
  component: Toggle,
};
