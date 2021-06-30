import React, { ComponentProps, useState } from 'react';
import { DatePicker } from '../components/datepicker';
import { Story } from '@storybook/react';

const Template: Story<ComponentProps<typeof DatePicker>> = (args) => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <DatePicker
      {...args}
      portalId={'root'}
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
Default.args = { width: 300 };

const RangeTemplate: Story<ComponentProps<typeof DatePicker>> = (args) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <DatePicker
      {...args}
      value={`${startDate ? startDate.toLocaleDateString('ru') : '...'} - ${
        endDate ? endDate.toLocaleDateString('ru') : '...'
      }`}
      onChange={(dates) => {
        if (Array.isArray(dates)) {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        }
      }}
      startDate={startDate}
      endDate={endDate}
      maxDate={endDate}
      selectsRange
      // inline
    />
  );
};

export const Range = RangeTemplate.bind({});
Range.args = { disabled: false, width: 300 };

export default {
  title: 'DatePicker',
  component: DatePicker,
};
