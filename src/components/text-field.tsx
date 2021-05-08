import React, {
  forwardRef,
  InputHTMLAttributes,
  useLayoutEffect,
  useRef,
} from 'react';
import styled from 'styled-components';
import { lightTheme } from 'src/themes/light-theme';

const TextFieldComponent = styled.div<{ width: number | string }>`
  position: relative;
  ${(props) =>
    typeof props.width == 'number'
      ? `width: ${props.width}px`
      : typeof props.width == 'string'
      ? `width: ${props.width}`
      : ``};
  height: 50px;

  & input {
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

  input:focus ~ & {
    border-color: ${(props) =>
      props.theme?.colors?.primary?.main ??
      lightTheme.colors.primary.main} !important;
  }

  .disabled &,
  input:hover ~ & {
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

  input:focus ~ ${Fieldset} & {
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
  input:focus ~ & {
    font: normal calc(14px * 0.75) Montserrat, sans-serif;
    transform: translate(15px, -50%);
    top: 0;
  }
`;

export interface ITextFiledProps<InputElementProps>
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isDisabled?: boolean;
  inputElement?: (
    props: Omit<
      ITextFiledProps<InputElementProps> & InputElementProps,
      'inputElement'
    >,
    ref: { current: any }
  ) => React.ReactNode | null;
}

// TODO: удалить со след версии
/** @deprecated need change to TextFieldMask*/
export interface IMaskedProps {
  /** @deprecated need change to TextFieldMask */
  mask?: string | Array<string | RegExp> | null;
}

export const TextField = forwardRef<HTMLInputElement, ITextFiledProps<any>>(
  (props, ref) => {
    const {
      isDisabled = false,
      label,
      width,
      value,
      children,
      inputElement = ({ isDisabled, value, ...other }, ref) => {
        return (
          <input {...other} disabled={isDisabled} value={value} ref={ref} />
        );
      },
      ...otherProps
    } = props;

    const inputRef = useRef(null);

    // hook for using outer ref of this component
    useLayoutEffect(() => {
      if (!ref || !inputRef) {
        return;
      }

      if (typeof ref === 'function') {
        ref(inputRef.current);
        return;
      }

      ref.current = inputRef.current;
    }, [inputRef]);

    const isUsing = !!value;

    return (
      <TextFieldComponent
        className={isDisabled ? 'disabled' : ''}
        width={width || ''}
      >
        {children}
        {!!inputElement &&
          inputElement(
            {
              ...otherProps,
              width: width,
              label: label,
              children: children,
              value: !!value ? String(value) : '',
              isDisabled: isDisabled,
            },
            inputRef
          )}
        <Fieldset>
          <Legend className={isUsing ? 'active' : ''}>
            {label && <span>{label}</span>}
          </Legend>
        </Fieldset>
        <Title className={isUsing ? 'active' : ''}>{label}</Title>
      </TextFieldComponent>
    );
  }
);
