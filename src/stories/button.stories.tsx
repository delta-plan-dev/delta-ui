import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Button } from '../components/button';

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
};

export const Negative = Template.bind({});
Negative.args = {
  buttonType: 'negative',
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  buttonType: 'outline-primary',
};

export const OutlineNegative = Template.bind({});
OutlineNegative.args = {
  buttonType: 'outline-negative',
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      defaultValue: 'BUTTON',
      control: {
        type: 'text',
      },
    },
    buttonType: {
      control: {
        type: 'select',
        options: ['primary', 'negative', 'outline-primary', 'outline-negative'],
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
