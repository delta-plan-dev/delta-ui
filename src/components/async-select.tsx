import React from 'react';
import ReactSelect, { Props } from 'react-select/async';

export interface IProps extends Props<any, any> {
  label: string;
  width: number;
}

export const AsyncSelect = React.forwardRef<
  ReactSelect<Props<any, any>>,
  IProps
>((props, ref) => {
  const {
    width,
    styles = {
      container: (provided) => {
        if (!!width) {
          return {
            ...provided,
            width: `${width}px`,
          };
        }

        return { ...provided };
      },
    },
    ...other
  } = props;

  return <ReactSelect ref={ref} styles={styles} {...other} />;
});
