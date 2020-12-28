import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Button } from '../components/button';
import { Link, Switch, BrowserRouter, Route } from 'react-router-dom';

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <BrowserRouter>
    <Switch>
      <Route path="/"></Route>
    </Switch>
    <Button {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Negative = Template.bind({});
Negative.args = {
  variant: 'negative',
};

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  variant: 'outline-primary',
};

export const OutlineNegative = Template.bind({});
OutlineNegative.args = {
  variant: 'outline-negative',
};

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      defaultValue: 'BUTTON',
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'negative', 'outline-primary', 'outline-negative'],
      },
    },
    size: {
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    isDisable: {
      defaultValue: false,
      type: 'boolean',
    },
  },
};
