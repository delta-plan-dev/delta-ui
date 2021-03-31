import { Select } from './select';
import React from 'react';
import Async, { Props } from 'react-select/async';

export interface IProps extends Props<any, any> {
  label?: string;
  width?: number;
}

export const AsyncSelect = React.forwardRef<Async<Props<any, any>>, IProps>(
  (props) => {
    return <Select as={Async} {...props} />;
  },
);
