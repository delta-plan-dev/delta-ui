import React, { ComponentProps } from 'react';
import ReactSelect from 'react-select/async-creatable';
import { Control } from './select';

export interface ISelect extends ComponentProps<typeof ReactSelect> {}

export const AsyncCreatableSelect: React.FC<ISelect> = (props) => {
  const { label, width, isDisabled, styles, components, ...other } = props;

  return (
    <ReactSelect
      className={isDisabled ? 'disabled' : ''}
      isDisabled={isDisabled}
      styles={{
        ...styles,
        container: (base) => {
          if (!!width) {
            return {
              ...base,
              width: `${width}px`,
            };
          }

          return { ...base };
        },
        valueContainer: (base) => ({
          ...base,
          padding: '0 15px',
        }),
      }}
      components={{
        ...components,
        Control,
        Placeholder: () => null,
      }}
      placeholder={label ?? null}
      {...other}
    />
  );
};
