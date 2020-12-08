import React from 'react';
import styled from 'styled-components';

const TextFieldComponent = styled.div`
  position: relative;
  width: 200px;
  height: 30px;

  :focus-within .text-field-title {
    transform: translate(10px, -24px) scale(.9,.9);
  }
  
  :focus-within input {
    outline: 0;
  }

  :focus-within legend {
    max-width: 1000px;
  }
`;

const Label = styled.label``;

const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: none;
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

const Legend = styled.legend`
  width: auto;
  max-width: 0.01px;
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

const Title = styled.div`
  position: absolute;
  left: 5px;
  top: 50%;
  transition-duration: 0.2s;
  transform: translate(10px, -50%);
  cursor: text;
`;

export interface IProps {}

export const TextField: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <TextFieldComponent>
      <Label>
        <Input type="text" />
        <Fieldset aria-hidden="true">
          <Legend>
            <span>Label</span>
          </Legend>
        </Fieldset>
        <Title className="text-field-title">Label</Title>
      </Label>
    </TextFieldComponent>
  );
};
