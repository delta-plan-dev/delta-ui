import React, {
  forwardRef,
  InputHTMLAttributes,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';
import InputMask, {
  BeforeMaskedStateChangeStates,
  InputState,
} from 'react-input-mask';

const TextFieldComponent = styled.div<{ width: number | string | null }>`
  position: relative;
  ${(props) =>
    typeof props.width == 'number'
      ? `width: ${props.width}px`
      : typeof props.width == 'string'
      ? `width: ${props.width}`
      : ``};
  height: 50px;
`;

const Input = styled.input<{ value: string }>`
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
    props.theme?.colors?.secondary?.main ?? lightTheme?.colors?.secondary.main};
`;

const MaskedInput = styled(InputMask)`
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
    props.theme?.colors?.secondary?.main ?? lightTheme?.colors?.secondary.main};
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

  ${Input}:focus ~ &, ${MaskedInput}:focus ~ & {
    border-color: ${(props) =>
      props.theme?.colors?.primary?.main ??
      lightTheme.colors.primary.main} !important;
  }

  .disabled &,
  ${Input}:hover ~ &,
  ${MaskedInput}:hover ~ & {
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

  ${Input}:focus ~ ${Fieldset} &, 
  ${MaskedInput}:focus ~ ${Fieldset} & {
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
  cursor: text;

  &.active,
  ${Input}:focus ~ &,
  ${MaskedInput}:focus ~ & {
    transform: translate(15px, -50%) scale(0.8);
    top: 0;
  }
`;

const tryParse = (value: any): string | number | null => {
  if (value == null) {
    return null;
  }

  const number = Number(value);

  if (!isNaN(number)) {
    return number;
  }

  return value?.toString();
};

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
}

export interface IMaskedProps {
  mask?: string | Array<string | RegExp> | null;
  maskPlaceholder?: string | null;
  // maskChar?: string | null; // на версии 3 - maskPlaceholder
  alwaysShowMask?: boolean;
  beforeMaskedStateChange?: (
    states: BeforeMaskedStateChangeStates
  ) => InputState;
}

export interface TextFieldProps extends IProps, IMaskedProps {}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      disabled = false,
      label,
      width,
      value,
      mask,
      children,
      ...other
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

    const validValue = !!value ? String(value) : '';
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const isUsing = !!value || isFocused;

    return (
      <TextFieldComponent
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={disabled ? 'disabled' : ''}
        width={tryParse(width)}
      >
        {!!mask ? (
          <MaskedInput
            disabled={disabled}
            value={validValue}
            mask={mask}
            ref={inputRef}
            {...other}
          />
        ) : (
          <Input
            disabled={disabled}
            value={validValue}
            ref={inputRef}
            {...other}
          />
        )}
        {children}
        <Fieldset>
          <Legend className={isUsing ? 'active' : ''}>
            {label && <span>{label}</span>}
          </Legend>
        </Fieldset>
        <Title
          className={isUsing ? 'active' : ''}
          onClick={() => {
            if (disabled) {
              return;
            }
            setIsFocused(true);

            const currentInput: any = inputRef?.current;
            currentInput?.focus();
          }}
        >
          {label}
        </Title>
      </TextFieldComponent>
    );
  }
);
