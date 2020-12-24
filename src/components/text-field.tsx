import React, { useState } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';

const TextFieldComponent = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
`;

const Label = styled.label``;

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
    props.theme?.colors?.secondary ?? lightTheme?.colors?.secondary};
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
  border-width: 2px;
  border-radius: 8px;
  pointer-events: none;
  box-sizing: inherit;
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

  ${Input}:focus ~ ${Fieldset} & {
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
  }
`;

const Title = styled.div`
  position: absolute;
  left: 5px;
  top: 50%;
  transition-duration: 0.3s;
  transform: translate(12px, -50%) scale(1);
  font: normal 600 14px Montserrat, sans-serif;
  color: ${(props) =>
    props.theme?.colors?.secondary ?? lightTheme?.colors?.secondary};
  cursor: text;

  &.active {
    transform: translate(12px, -33px) scale(0.75);
  }

  ${Input}:focus ~ & {
    transform: translate(12px, -33px) scale(0.75);
  }
`;

export interface IProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  isDisable: boolean;
}

export const TextField: React.FC<IProps> = (props) => {
  const { value = '', onChange, label = 'Label', isDisable = false } = props;

  const [textValue, setTextValue] = useState<string>(value);

  const handleChange = (event: React.BaseSyntheticEvent) => {
    setTextValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <TextFieldComponent>
      <Label>
        <Input
          type={'text'}
          value={textValue}
          onChange={handleChange}
          disabled={isDisable}
        />
        <Fieldset>
          <Legend className={textValue != '' ? 'active' : ''}>
            <span>{label}</span>
          </Legend>
        </Fieldset>
        <Title className={textValue != '' ? 'active' : ''}>{label}</Title>
      </Label>
    </TextFieldComponent>
  );
};
