import React from 'react';
import ReactSelect, { Props } from 'react-select';

export interface IProps extends Props {
  label: string;
  width: number;
}

export const Select = React.forwardRef<ReactSelect, IProps>((props, ref) => {
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
