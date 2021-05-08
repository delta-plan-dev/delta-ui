import React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import { ITextFiledProps, TextField } from './text-field';

export const TextFieldNumber: React.FC<
  ITextFiledProps<NumberFormatProps> & NumberFormatProps
> = (props) => {
  return (
    <TextField
      {...props}
      inputElement={({ isDisabled, value, ...other }, ref) => {
        return (
          <NumberFormat
            {...other}
            disabled={isDisabled}
            value={value?.toString()}
            ref={ref}
          />
        );
      }}
    />
  );
};
