import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Select } from '../components/select';
import { AsyncSelect } from '../components/async-select';

const TemplateSelect: Story<ComponentProps<typeof Select>> = (args) => (
  <Select {...args} />
);

export const DefaultSelect = TemplateSelect.bind({});
DefaultSelect.args = {};

const TemplateAsyncSelect: Story<ComponentProps<typeof AsyncSelect>> = (
  args
) => (
  <AsyncSelect
    defaultOptions
    isMulti={false}
    loadOptions={(inputValue) =>
      Promise.resolve(
        [
          {
            label: '1 уааа',
            value: 1,
          },
          {
            label: '2 авы',
            value: 2,
          },
          {
            label: '3 оооо',
            value: 3,
          },
          {
            label: '4 Тест',
            value: 4,
          },
          {
            label: '5 текст',
            value: 5,
          },
          {
            label: '5 storez',
            value: 6,
          },
        ].filter((value) => value.label.includes(inputValue))
      )
    }
    {...args}
  />
);
export const DefaultAsyncSelect = TemplateAsyncSelect.bind({});
DefaultAsyncSelect.args = {};

export default {
  title: 'Select',
  component: Select,
  args: {
    options: [
      {
        label: '1 уааа',
        value: 1,
      },
      {
        label: '2 авы',
        value: 2,
      },
      {
        label: '3 оооо',
        value: 3,
      },
      {
        label: '4 Тест',
        value: 4,
      },
      {
        label: '5 текст',
        value: 5,
      },
      {
        label: '5 storez',
        value: 6,
      },
    ],
    placeholder: 'Test select',
    width: 300,
    isClearable: true,
    isMulti: true,
    defaultOptions: true,
    disabled: false,
  },
};
