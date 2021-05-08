import React from 'react';
import InputMask, { Props } from 'react-input-mask';
import { ITextFiledProps, TextField } from './text-field';

export const TextFieldMask: React.FC<ITextFiledProps<Props> & Props> = (
  props
) => {
  return (
    <TextField
      {...props}
      inputElement={({ isDisabled, value, mask, ...other }, ref) => {
        return (
          <InputMask
            {...other}
            mask={mask}
            disabled={isDisabled}
            value={value}
            ref={ref}
          />
        );
      }}
    />
  );
};
