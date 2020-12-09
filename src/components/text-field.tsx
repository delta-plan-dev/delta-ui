import React from 'react';
import styled from 'styled-components';

const TextFieldComponent = styled.div`
  position: relative;
  width: 200px;
  height: 30px;

  :focus-within .text-field-title {
    transform: translate(10px, -24px) scale(0.9, 0.9);
  }

  :focus-within legend {
    max-width: 1000px;
  }
`;

const Label = styled.label``;

const Input = styled.input<{ value: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 8px;
  border: 0;
  outline: 0;
  border-radius: 5px;
  background: none;
  box-sizing: border-box;
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
  border-radius: 5px;
  pointer-events: none;
  box-sizing: inherit;
`;

const Legend = styled.legend<{ value: string }>`
  width: auto;
  max-width: ${(props) => {
    if (props.value !== '') {
      return '1000px';
    }

    return '0.01px';
  }};
  height: 11px;
  display: block;
  padding: 0;
  visibility: hidden;
  text-align: left;
  box-sizing: inherit;

  span {
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const Title = styled.div<{ value: string }>`
  position: absolute;
  left: 5px;
  top: 50%;
  transition-duration: 0.2s;
  transform: ${(props) => {
    if (props.value !== '') {
      return 'translate(10px, -24px) scale(0.9, 0.9)';
    }

    return 'translate(10px, -50%)';
  }};
  cursor: text;
`;

export interface IProps {
  value: string;
  onChange: (value: string) => void;
}

export const TextField: React.FC<IProps> = (props) => {
  const { value = '', onChange } = props;

  return (
    <TextFieldComponent>
      <Label>
        <Input
          type={'text'}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
        <Fieldset aria-hidden="true">
          <Legend value={value}>
            <span>Label</span>
          </Legend>
        </Fieldset>
        <Title className="text-field-title" value={value}>
          Label
        </Title>
      </Label>
    </TextFieldComponent>
  );
};
