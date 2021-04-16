import React from 'react';
import ReactSelect, { ControlProps, Props } from 'react-select';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';
import { RefForwardingComponent } from '../helpers';

export interface IProps extends Props {
  as?: React.ElementType;
  label?: string;
  width?: number;
  disabled?: boolean;
}

const Wrapper = styled.div`
  width: 100%;

  .disabled & {
    cursor: no-drop;
    pointer-events: auto;
  }
`;
const ContentOfControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px 0;
`;

const Fieldset = styled.fieldset`
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 8px;
  overflow: hidden;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${(props) =>
  props.theme?.colors?.gray?.main ?? lightTheme.colors.gray.main};
  pointer-events: none;
  box-sizing: inherit;
  transition-duration: 100ms;

  &.focused,
  ${ContentOfControl}:focus ~ & {
    border-color: ${(props) =>
  props.theme?.colors?.primary?.main ??
  lightTheme.colors.primary.main} !important;
  }

  .disabled &,
  ${ContentOfControl}:hover ~ & {
    border-color: ${(props) =>
  props.theme?.colors?.gray?.hover ?? lightTheme.colors.gray.hover};
  }
`;

const Legend = styled.legend`
  width: auto;
  max-width: 0.01px;
  height: 11px;
  display: block;
  padding: 0;
  visibility: hidden;
  text-align: left;
  box-sizing: inherit;
  transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  ${ContentOfControl}:focus ~ ${Fieldset} & {
    max-width: 1000px;
    transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
  }

  .active & {
    max-width: 1000px;
  }

  span {
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    font: normal calc(14px * 0.8) Montserrat, sans-serif;
  }
`;

const Title = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transition-duration: 100ms;
  transform: translate(10px, -50%) scale(1);
  transform-origin: 0 0;
  font: normal 14px Montserrat, sans-serif;
  color: ${(props) =>
  props.theme?.colors?.secondary?.main ?? lightTheme?.colors?.secondary.main};
  pointer-events: none;

  &.active,
  ${ContentOfControl}:focus ~ & {
    transform: translate(15px, -50%) scale(0.8);
    top: 0;
  }
`;

const Control: React.FC<ControlProps<any, any>> = ({ ...props }) => {
  const { children, hasValue, innerProps, innerRef, isFocused } = props;
  const { placeholder } = props.selectProps;

  const controlClasses = [
    (hasValue || isFocused) && 'active',
    isFocused && 'focused',
  ]
    .filter((el) => el)
    .join(' ');

  return (
    <Wrapper>
      <ContentOfControl ref={innerRef} {...innerProps}>
        {children}
      </ContentOfControl>
      <Fieldset className={controlClasses}>
        <Legend>{placeholder && <span>{placeholder}</span>}</Legend>
      </Fieldset>
      <Title className={controlClasses} >{placeholder}</Title>
    </Wrapper>
  );
};

type SelectType = RefForwardingComponent<typeof ReactSelect, IProps>;

export const BaseSelect = React.forwardRef<SelectType, IProps>((props, ref) => {
  const { as = ReactSelect, ...other } = props;

  const Component = as;

  return <Component ref={ref} {...other} />;
});

export const Select = React.forwardRef<ReactSelect, IProps>((props) => {
  const {
    width,
    isDisabled,
    disabled = isDisabled,
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
      valueContainer: (base: React.CSSProperties): React.CSSProperties => {
        return {
          ...base,
          padding: '0 15px',
        };
      },
    },
    ...other
  } = props;

  return (
    <BaseSelect
      className={disabled && 'disabled'}
      isDisabled={disabled}
      menuPortalTarget={document.body}
      components={{
        Control,
        Placeholder: () => null,
      }}
      styles={styles}
      {...other}
    />
  );
});
