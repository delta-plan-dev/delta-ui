import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { CheckBox } from '../components/checkbox';

const Template: Story<ComponentProps<typeof CheckBox>> = (args) => (
  <>
    <CheckBox {...args} value={true} />
    <CheckBox {...args} value={false} />
  </>
);

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'Checkbox',
  component: CheckBox,
};
