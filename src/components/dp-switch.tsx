import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  cursor: pointer;
`;

const Title = styled.div`
  line-height: 24px;
  margin-left: 5px;
  color: ${(props) => props.theme.colors.secondary};
`;

const ButtonWrapper = styled.div<{ active: boolean }>`
  display: inline-block;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  background-color: #3fd200;
  transition-duration: 0.2s;
`;

const Button = styled.div<{ active: boolean }>`
  width: 18px;
  height: 18px;
  margin: ${(props) => (props.active ? '3px 3px 3px 26px' : '3px')};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.main};
  transition-duration: 0.2s;
`;

interface IProps {
  title?: string;
  titleSide?: 'left' | 'right';
  value: boolean;
  handleChange: (value: boolean) => void;
  style?: CSSProperties;
}

export const DpSwitch: React.FunctionComponent<IProps> = ({
  title,
  titleSide = 'right',
  value = false,
  handleChange,
  style = {},
}) => {
  return (
    <Label
      style={style}
      onClick={() => {
        handleChange(!value);
      }}
    >
      {title && titleSide === 'left' && <Title>{title} </Title>}
      <ButtonWrapper active={value}>
        <Button active={value} />
      </ButtonWrapper>
      {title && titleSide === 'right' && <Title> {title}</Title>}
    </Label>
  );
};
