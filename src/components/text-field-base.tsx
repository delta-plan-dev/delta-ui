import React, { CSSProperties, forwardRef, RefObject } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';

const TextFieldComponent = styled.div<{ width: number | string }>`
  position: relative;
  ${(props) =>
    typeof props.width == 'number'
      ? `width: ${props.width}px`
      : typeof props.width == 'string'
      ? `width: ${props.width}`
      : ``};
  height: 50px;

  & input,
  & textarea {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 15px;
    border: 0;
    outline: 0;
    background: none;
    box-sizing: border-box;
    font: normal 400 14px Montserrat, sans-serif;
    color: ${(props) =>
      props.theme?.colors?.secondary?.main ??
      lightTheme?.colors?.secondary.main};
  }
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

  input:focus ~ &,
  textarea:focus ~ & {
    border-color: ${(props) =>
      props.theme?.colors?.primary?.main ??
      lightTheme.colors.primary.main} !important;
  }

  .disabled &,
  input:hover ~ &. textarea:hover ~ & {
    border-color: ${(props) =>
      props.theme?.colors?.gray?.hover ?? lightTheme.colors.gray.hover};
  }
`;

const Legend = styled.legend`
  float: initial;
  width: auto;
  max-width: 0.01px;
  height: 10px;
  display: block;
  padding: 0;
  visibility: hidden;
  text-align: left;
  box-sizing: inherit;
  transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  input:focus ~ ${Fieldset} &,
  textarea:focus ~ ${Fieldset} & {
    max-width: 1000px;
    transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
  }

  &.active {
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
  input:focus ~ &,
  textarea:focus ~ & {
    font: normal calc(14px * 0.75) Montserrat, sans-serif;
    transform: translate(15px, -50%);
    top: 0;
  }
`;

export interface IBaseProps<P> {
  label?: string;
  isDisabled?: boolean;
  width?: number | string;
  value?: number | string;
  style?: CSSProperties;
  inputElement?: (
    props: IBaseProps<P> & P,
    ref?: RefObject<any>
  ) => React.ReactNode | null;
}

export const baseTextFieldElement = <T, P extends IBaseProps<P>>() => {
  return forwardRef<T, P>((props, ref) => {
    const {
      isDisabled = false,
      label,
      width,
      value,
      children,
      style,
      inputElement,
      ...otherProps
    } = props;

    const isUsing = !!value;

    return (
      <TextFieldComponent
        className={isDisabled ? 'disabled' : ''}
        width={width || ''}
        style={style}
      >
        {children}
        {!!inputElement &&
          inputElement(
            {
              ...(otherProps as IBaseProps<P> & P),
              width: width,
              label: label,
              children: children,
              value: !!value ? String(value) : '',
              isDisabled: isDisabled,
              style: null,
            },
            ref as RefObject<T>
          )}
        <Fieldset>
          <Legend className={isUsing ? 'active' : ''}>
            {label && <span>{label}</span>}
          </Legend>
        </Fieldset>
        <Title className={isUsing ? 'active' : ''}>{label}</Title>
      </TextFieldComponent>
    );
  });
};
