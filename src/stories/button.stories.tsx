import React from 'react';
import { Story } from '@storybook/react';
import { Button } from '../components/button';

const Template: Story = (args) => <Button {...args}>BUTTON</Button>;

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

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
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
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
  },
};
