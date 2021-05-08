import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { TextFieldMask } from 'src/components/text-field-mask';

const MaskedTemplate: Story<ComponentProps<typeof TextFieldMask>> = ({
  mask,
  ...args
}) => {
  const [value, setValue] = useState(args.value);

  return (
    <TextFieldMask
      {...args}
      mask={mask}
      value={value}
      onChange={(event) => setValue(event.target.value ?? '')}
    />
  );
};
export const Masked = MaskedTemplate.bind({});

Masked.args = {
  width: '50%',
  label: 'Masked input',
  value: '912',
  mask: '+7 (999) 999-99-99',
  maskPlaceholder: '*',
};
Masked.argTypes = {
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
export default {
  title: 'TextFieldMask',
  component: TextFieldMask,
};
