import React, { forwardRef, InputHTMLAttributes } from 'react';
import { baseTextFieldElement, IBaseProps } from './text-field-base';

type IProps = IBaseProps<any> & InputHTMLAttributes<HTMLInputElement>;
const TextFiledElement = baseTextFieldElement<HTMLInputElement, IProps>();

export const TextField = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  return (
    <TextFiledElement
      {...props}
      ref={ref}
      inputElement={({ isDisabled, value, ...other }, ref) => {
        return (
          <input {...other} disabled={isDisabled} value={value} ref={ref} />
        );
      }}
    />
  );
});
