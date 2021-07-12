import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Checkbox } from '../components/checkbox'

export default {
  title: 'Components/Fields/Checkbox',
  component: Checkbox,
  decorators: [(Story) => <div style={{ margin: '10px' }}>{Story()}</div>],
  argTypes: {},
  args: {},
} as Meta

const Template: Story<ComponentProps<typeof Checkbox>> = (args) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})
Default.args = {}
