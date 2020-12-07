import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Button } from './button';

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {};

export const Success = Template.bind({});
Success.args = {};

export const Danger = Template.bind({});
Danger.args = {};

export const Link = Template.bind({});
Link.args = {};

export default {
  title: 'Button',
  component: Button,
};
