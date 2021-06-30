import React from 'react';
import { Story } from '@storybook/react';
import { Button } from '../components/button';

const Template: Story = (args) => <Button {...args}>{args?.text}</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Negative = Template.bind({});
Negative.args = {
  variant: 'negative',
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  variant: 'outline-primary',
};

export const OutlineNegative = Template.bind({});
OutlineNegative.args = {
  variant: 'outline-negative',
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      defaultValue: 'BUTTON',
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'negative',
          'outline-primary',
          'outline-negative',
          'link',
        ],
      },
    },
    size: {
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    isDisabled: {
      defaultValue: false,
      type: 'boolean',
    },
  },
};
