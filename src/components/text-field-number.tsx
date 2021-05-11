import React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import { ITextFiledProps, TextField } from './text-field';

export const TextFieldNumber: React.FC<
  ITextFiledProps<NumberFormatProps> & NumberFormatProps
> = (props) => {
  const {
    decimalScale = 2,
    thousandSeparator = ' ',
    decimalSeparator = ',',
    onValueChange,
    ...mainProps
  } = props;
  return (
    <TextField
      {...mainProps}
      inputElement={({ isDisabled, value, ...other }, ref) => {
        return (
          <NumberFormat
            {...other}
            isNumericString
            ref={ref}
            disabled={isDisabled}
            value={value}
            decimalScale={decimalScale}
            decimalSeparator={decimalSeparator}
            thousandSeparator={thousandSeparator}
            onValueChange={onValueChange}
          />
        );
      }}
    />
  );
};
