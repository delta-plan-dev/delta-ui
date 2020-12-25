import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Radio } from '../components/radio';

const Template: Story<ComponentProps<typeof Radio>> = (args) => (
    <Radio {...args}/>
)

export const Default = Template.bind({});
Default.args = {}

export default {
    title: "Radio.",
    component: Radio
}