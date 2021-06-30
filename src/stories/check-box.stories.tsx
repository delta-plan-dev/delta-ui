import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { CheckBox } from '../components/check-box';

const Template: Story<ComponentProps<typeof CheckBox>> = (args) => (
  <CheckBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isDisabled: false,
};

export default {
  title: 'Checkbox',
  component: CheckBox,
};
