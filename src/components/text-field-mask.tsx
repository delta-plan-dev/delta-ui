import React, { InputHTMLAttributes } from 'react';
import InputMask, { Props } from 'react-input-mask';
import { baseTextFieldElement, IBaseProps } from './text-field-base';

type IProps = IBaseProps<Props> & Props & InputHTMLAttributes<HTMLInputElement>;
const TextFiledElement = baseTextFieldElement<HTMLInputElement, IProps>();

export const TextFieldMask: React.FC<IProps> = (props) => {
  return (
    <TextFiledElement
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
