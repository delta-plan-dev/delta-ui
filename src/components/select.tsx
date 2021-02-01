import React from 'react';
import ReactSelect, { Props } from 'react-select';
import { SelectControl } from './select-control';

export interface IProps extends Props {}

export const Select = React.forwardRef<ReactSelect, IProps>((props, ref) => {
  const { components = { Control: SelectControl }, ...other } = props;

  return <ReactSelect ref={ref} components={{}} {...other} />;
});
