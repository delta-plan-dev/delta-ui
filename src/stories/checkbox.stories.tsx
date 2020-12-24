import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { CheckBox } from '../components/checkbox';

const Template: Story<ComponentProps<typeof CheckBox>> = (args) => (
    <CheckBox {...args}/>
)

export const Default = Template.bind({});
Default.args = {}

export default {
    title: "Checkbox.",
    component: CheckBox
}