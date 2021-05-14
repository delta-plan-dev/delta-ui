import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { TextAreaField } from '../components/text-area-field';

const DefaultTemplate: Story<ComponentProps<typeof TextAreaField>> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <TextAreaField
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
};

export default {
  title: 'TextAreaField',
  component: TextAreaField,
};
