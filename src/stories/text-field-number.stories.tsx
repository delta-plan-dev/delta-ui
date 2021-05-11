import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { TextFieldNumber } from '../components/text-field-number';

const NumberTemplate: Story<ComponentProps<typeof TextFieldNumber>> = (
  args
) => {
  const [value, setValue] = useState(args.value);

  return (
    <TextFieldNumber
      {...args}
      value={value}
      onValueChange={({ value }) => {
        console.log('Test value case:', value);
        setValue(value);
      }}
    />
  );
};
export const TextFieldForNumber = NumberTemplate.bind({});

TextFieldForNumber.args = {
  width: '50%',
  label: 'Number format input',
  value: '1024',
  decimalScale: 2,
  thousandSeparator: ' ',
  decimalSeparator: ',',
  suffix: ' ₽',
};
// TextFieldForNumber.argTypes = {
//   mask: {
//     control: false,
//   },
// };
export default {
  title: 'TextFieldNumber',
  component: TextFieldNumber,
};
