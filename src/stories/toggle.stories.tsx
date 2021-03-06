import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Toggle } from '../components/toggle'

export default {
  title: 'Components/Fields/Toggle',
  component: Toggle,
  decorators: [(Story) => <div style={{ margin: '10px' }}>{Story()}</div>],
  argTypes: {},
  args: {},
} as Meta<ComponentProps<typeof Toggle>>

const Template: Story<ComponentProps<typeof Toggle>> = (args) => {
  return <Toggle {...args} />
}

export const Default = Template.bind({})
Default.args = {}
