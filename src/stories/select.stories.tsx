import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Select } from '../components/select'

export default {
  title: 'Components/Fields/Select',
  component: Select,
  decorators: [(Story) => <div style={{ margin: '10px' }}>{Story()}</div>],
  argTypes: {},
  args: {
    options: [
      {
        label: '1',
        value: 1,
      },
      {
        label: '2',
        value: 2,
      },
      {
        label: '3',
        value: 3,
      },
      {
        label: '4',
        value: 4,
      },
      {
        label: '5',
        value: 5,
      },
    ],
    label: 'Label',
    width: 300,
    isDisabled: false,
  },
} as Meta<ComponentProps<typeof Select>>

const TemplateDefaultSelect: Story<ComponentProps<typeof Select>> = (args) => (
  <Select {...args} />
)

export const DefaultSelect = TemplateDefaultSelect.bind({})
DefaultSelect.args = {}
