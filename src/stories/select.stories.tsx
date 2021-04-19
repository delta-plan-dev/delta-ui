import React, { ComponentProps, useState } from 'react';
import { Story } from '@storybook/react';
import { Select } from '../components/select';
import { Option } from 'react-select/src/filters';

const TemplateDefaultSelect: Story<ComponentProps<typeof Select>> = (args) => {
  const [value, setValue] = useState<Option[] | null>([]);

  return (
    <Select
      {...args}
      value={value}
      onChange={(option) => {
        if (Array.isArray(option)) setValue(option);
      }}
    />
  );
};

export const DefaultSelect = TemplateDefaultSelect.bind({});
DefaultSelect.args = {
  isMulti: true,
  isClearable: true,
};

export default {
  title: 'Select',
  component: Select,
  args: {
    options: [
      {
        label: '1',
        value: 1,
      },
      {
        label: '2',
        value: 2,
      },
      {
        label: '3',
        value: 3,
      },
      {
        label: '4',
        value: 4,
      },
      {
        label: '5',
        value: 5,
      },
    ],
    label: 'Label',
    width: 300,
    isDisabled: false,
  },
};
