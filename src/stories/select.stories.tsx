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
    ],
  },
};
