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
  btnType: 'primary',
};

export const Negative = Template.bind({});
Negative.args = {
  btnType: 'negative',
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  btnType: 'outline-primary',
};

export const OutlineNegative = Template.bind({});
OutlineNegative.args = {
  btnType: 'outline-negative',
};

export default {
  title: 'Button',
  component: Button,
  args: {
    disabled: false,
    size: 'medium',
  },
};
