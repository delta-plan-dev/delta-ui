import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Select } from '../components/select';

const Template: Story<ComponentProps<typeof Select>> = (args) => (
  <Select {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Select',
  component: Select,
  args: {
    options: [
      {
        label: '1 уааа',
        value: 1,
      },
      {
        label: '2 авы',
        value: 2,
      },
      {
        label: '3 оооо',
        value: 3,
      },
      {
        label: '4 Тест',
        value: 4,
      },
      {
        label: '5 текст',
        value: 5,
      },
      {
        label: '5 storez',
        value: 6,
      },
    ],
    placeholder: 'Test select',
    width: 300,
    isClearable: true,
    isMulti: true,
    defaultOptions: true,
  },
};
