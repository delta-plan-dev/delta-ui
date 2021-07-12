import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { TextField } from '../components/text-field'

export default {
  title: 'Components/Fields/TextField',
  component: TextField,
  decorators: [(Story) => <div style={{ margin: '10px' }}>{Story()}</div>],
  argTypes: {},
  args: {},
} as Meta<ComponentProps<typeof TextField>>

const DefaultTemplate: Story<ComponentProps<typeof TextField>> = (args) => (
  <TextField {...args} />
)

export const Default = DefaultTemplate.bind({})
Default.args = {}
