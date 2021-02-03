import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { RadioGroup } from '../components/radio-group';

const Template: Story<ComponentProps<typeof RadioGroup>> = (args) => (
  <RadioGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  args: {
    options: [
      {
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
    ],
  },
};
