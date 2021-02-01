import React from 'react';
import type { ControlProps } from 'react-select';

export const SelectControl: React.FC<ControlProps<any, boolean>> = (props) => {
  const {
    children,
    cx,
    // getStyles,
    className,
    isDisabled,
    isFocused,
    innerRef,
    innerProps,
    menuIsOpen,
  } = props;

  return (
    <div
      ref={innerRef}
      // css={getStyles('control', props)}
      className={cx(
        {
          control: true,
          'control--is-disabled': isDisabled,
          'control--is-focused': isFocused,
          'control--menu-is-open': menuIsOpen,
        },
        className,
      )}
      {...innerProps}
    >
      {children}
    </div>
  );
};
