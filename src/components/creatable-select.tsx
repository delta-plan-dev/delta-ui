import { Select } from './select';
import React from 'react';
import ReactSelect, { Props } from 'react-select/creatable';

export interface IProps extends Props<any, any> {
  label?: string;
  width?: number;
}

export const CreatableSelect = React.forwardRef<
  ReactSelect<Props<any, any>>,
  IProps
>((props) => {
  return <Select as={ReactSelect} {...props} />;
});
