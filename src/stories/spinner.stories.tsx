import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Spinner } from '../components/spinner'

export default {
  title: 'Components/Spinner',
  component: Spinner,
  decorators: [(Story) => <div style={{ margin: '10px' }}>{Story()}</div>],
  argTypes: {},
  args: {},
} as Meta<ComponentProps<typeof Spinner>>

const Template: Story<ComponentProps<typeof Spinner>> = (props) => (
  <Spinner {...props} />
)

export const Default = Template.bind({})
Default.args = {}
