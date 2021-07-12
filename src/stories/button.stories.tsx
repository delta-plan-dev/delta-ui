import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import { Button } from '../components/button'

export default {
  title: 'Components/Buttons',
  component: Button,
  decorators: [(Story) => <div style={{ margin: '10px' }}>{Story()}</div>],
  argTypes: {
    as: {
      control: {
        type: 'select',
        labels: {
          button: 'Кнопка',
          a: 'Ссылка',
        },
      },
      options: ['button', 'a'],
    },
    isDisabled: {
      type: 'boolean',
    },
  },
  args: {
    children: 'BUTTON',
    as: 'button',
    isDisabled: false,
  },
} as Meta<ComponentProps<typeof Button>>

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
)

export const Default = Template.bind({})
Default.args = {}

export const Primary = Template.bind({})
Primary.args = {
  ...Default.args,
  variant: 'primary',
}

export const Negative = Template.bind({})
Negative.args = {
  ...Default.args,
  variant: 'danger',
}
