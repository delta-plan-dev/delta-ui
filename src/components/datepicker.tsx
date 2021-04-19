import React from 'react';
import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import { TextField } from './text-field';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';
import { DatePickerHeader } from './datepicker-header';

registerLocale('ru', ru);

const Component = styled.div`
  & .react-datepicker {
    background-color: ${() => lightTheme.colors.main.main};
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: unset;
  }

  & .react-datepicker__month-container {
    border-radius: 8px;
  }

  & .react-datepicker__day-names {
    display: none;
  }

  & .react-datepicker__header {
    border: unset;
    background-color: unset;
  }

  & .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
  }

  &
    .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  &
    .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    border-bottom-color: ${() => lightTheme.colors.main.main};
  }

  & .react-datepicker__day-name,
  & .react-datepicker__day,
  & .react-datepicker__time-name {
    color: ${() => lightTheme.colors.primary.main};
  }

  & .react-datepicker__day:hover {
    background-color: ${() => lightTheme.colors.primary.hover};
    color: ${() => lightTheme.colors.white.main};
  }

  & .react-datepicker__day:focus {
    outline: unset;
  }

  & .react-datepicker__day--outside-month {
    color: ${() => lightTheme.colors.gray.main};
  }

  & .react-datepicker__day--selected,
  & .react-datepicker__day--in-selecting-range,
  & .react-datepicker__day--in-range,
  & .react-datepicker__month-text--selected,
  & .react-datepicker__month-text--in-selecting-range,
  & .react-datepicker__month-text--in-range,
  & .react-datepicker__quarter-text--selected,
  & .react-datepicker__quarter-text--in-selecting-range,
  & .react-datepicker__quarter-text--in-range,
  & .react-datepicker__year-text--selected,
  & .react-datepicker__year-text--in-selecting-range,
  & .react-datepicker__year-text--in-range {
    color: ${() => lightTheme.colors.white.main};
  }

  & .react-datepicker__day--keyboard-selected,
  & .react-datepicker__month-text--keyboard-selected,
  & .react-datepicker__quarter-text--keyboard-selected,
  & .react-datepicker__year-text--keyboard-selected {
    color: ${() => lightTheme.colors.white.main};
  }

  & .react-datepicker__day--range-start,
  & .react-datepicker__day--range-end,
  & .react-datepicker__day--in-range,
  & .react-datepicker__day--selected {
    background-color: ${() => lightTheme.colors.primary.main};
    color: ${() => lightTheme.colors.white.main};
  }

  & .react-datepicker__day--in-selecting-range {
    background-color: ${() => lightTheme.colors.primary.hover};
    color: ${() => lightTheme.colors.white.main};
  }
`;

export interface IProps {
  label?: string;
  width?: number;
  isDisabled?: boolean;
}

export const DatePicker = React.forwardRef<
  ReactDatePicker,
  ReactDatePickerProps & IProps
>((props, ref) => {
  const {
    label = 'Label',
    locale = 'ru',
    dateFormat = 'dd.MM.yyyy',
    width = 300,
    isDisabled = false,
    customInput = (
      <TextField disabled={isDisabled} width={width} label={label} />
    ),
    renderCustomHeader = (params) => <DatePickerHeader {...params} />,
    ...other
  } = props;

  return (
    <Component>
      <ReactDatePicker
        ref={ref}
        locale={locale}
        dateFormat={dateFormat}
        customInput={customInput}
        renderCustomHeader={renderCustomHeader}
        disabled={isDisabled}
        {...other}
      />
    </Component>
  );
});
