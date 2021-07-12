import React, { ComponentProps } from 'react'
import { DatePicker } from '../components/datepicker'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Components/Fields/DatePicker',
  component: DatePicker,
  decorators: [(Story) => <div style={{ margin: '10px' }}>{Story()}</div>],
  argTypes: {},
  args: {
    width: 300,
  },
} as Meta<ComponentProps<typeof DatePicker>>

const Template: Story<ComponentProps<typeof DatePicker>> = (args) => (
  <DatePicker {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const Range = Template.bind({})
Range.args = {}
