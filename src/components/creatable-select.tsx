import React, { ComponentProps } from 'react';
import ReactSelect from 'react-select/creatable';
import { ControlProps, GroupTypeBase } from 'react-select';
import styled from 'styled-components';
import { lightTheme } from 'src/themes/light-theme';

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
  height: 10px;
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
    font: normal calc(14px * 0.75) Montserrat, sans-serif;
  }
`;

const Title = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transition-duration: 100ms;
  transform: translate(10px, -50%);
  transform-origin: 0 0;
  font: normal 14px Montserrat, sans-serif;
  color: ${(props) =>
    props.theme?.colors?.secondary?.main ?? lightTheme?.colors?.secondary.main};
  pointer-events: none;

  &.active,
  ${ContentOfControl}:focus ~ & {
    font: normal calc(14px * 0.75) Montserrat, sans-serif;
    transform: translate(15px, -50%);
    top: 0;
  }
`;

const Control: React.FC<ControlProps<any, any, GroupTypeBase<any>>> = (
  props
) => {
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
      <Title className={controlClasses}>{placeholder}</Title>
    </Wrapper>
  );
};

export interface ISelect extends ComponentProps<typeof ReactSelect> {}

export const CreatableSelect: React.FC<ISelect> = (props) => {
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
