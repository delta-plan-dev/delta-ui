import React, { ComponentProps, useState } from 'react';
import { DeltaDatePicker } from '../components/datepicker';
import { Story } from '@storybook/react';

const Template: Story<ComponentProps<typeof DeltaDatePicker>> = (args) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <DeltaDatePicker
      {...args}
      selected={startDate}
      onChange={(date) => {
        if (date && !Array.isArray(date)) {
          setStartDate(date);
        }
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'DatePicker',
  component: DeltaDatePicker,
};
