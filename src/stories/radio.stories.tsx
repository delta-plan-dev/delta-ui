import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { RadioGroup } from '../components/radio-group'

export default {
  title: 'Components/Fields/RadioGroup',
  component: RadioGroup,
  decorators: [(Story) => <div style={{ margin: '10px' }}>{Story()}</div>],
  argTypes: {},
  args: {
    options: [
      {
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      },
      {
        value: 3,
        label: '3',
      },
    ],
  },
} as Meta<ComponentProps<typeof RadioGroup>>

const Template: Story<ComponentProps<typeof RadioGroup>> = (args) => (
  <RadioGroup {...args} />
)

export const Default = Template.bind({})
Default.args = {}
