import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  cursor: pointer;
`;

const Title = styled.div`
  line-height: 24px;
  margin-left: 5px;
  color: ${(props) => props.theme.colors.color2};
`;

const ButtonWrapper = styled.div<{ active: boolean }>`
  display: inline-block;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.color2};
  transition-duration: 0.2s;
`;

const Button = styled.div<{ active: boolean }>`
  width: 18px;
  height: 18px;
  margin: ${(props) => (props.active ? '3px 3px 3px 26px' : '3px')};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.color1};
  transition-duration: 0.2s;
`;

type Props = {
  title: string;
  handleChange: (value: boolean) => void;
  value: boolean;
  style?: CSSProperties;
};

export const Switch = ({ title, handleChange, value, style = {} }: Props) => {
  return (
    <Label
      style={style}
      onClick={() => {
        handleChange(!value);
      }}
    >
      <ButtonWrapper active={value}>
        <Button active={value} />
      </ButtonWrapper>
      <Title>{title}</Title>
    </Label>
  );
};
