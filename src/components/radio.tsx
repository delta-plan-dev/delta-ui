import React, { useState } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';

interface IRadio {
  size: 'small' | 'medium' | 'large';
  isDisable: boolean;
}
const RadioComponent = styled.label<IRadio>`
  display: inline-flex;
  cursor: pointer;
`;

const RadioComponentValueWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.gray.main};
`;

const RadioComponentValue = styled.div`
  width: 11px;
  height: 11px;
  background-color: ${(props) => props.theme.colors.white.main};
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.colors.white.main};

  &.active {
    background-color: ${(props) => props.theme.colors.primary.main};
  }
`;

const RadioComponentLabel = styled.div`
  margin-left: 5px;
  font: normal bold 14px/20px Montserrat, sans-serif;
  color: ${(props) =>
    props.theme?.colors?.secondary.main ?? lightTheme?.colors?.secondary.main};
`;

export interface IProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  isDisable?: boolean;
  value: boolean;
  onClick: () => void;
}

export const Radio: React.FC<IProps> = (props) => {
  const {
    label,
    size = 'medium',
    isDisable = false,
    value = false,
    onClick,
  } = props;

  const [checked, setChecked] = useState<boolean>(value);

  const handleChange = () => {
    setChecked(!checked);
    onClick();
  };

  return (
    <RadioComponent size={size} isDisable={isDisable} onClick={handleChange}>
      <RadioComponentValueWrapper className={checked ? 'active' : ''}>
        <RadioComponentValue className={checked ? 'active' : ''} />
      </RadioComponentValueWrapper>
      {label && <RadioComponentLabel>{label}</RadioComponentLabel>}
    </RadioComponent>
  );
};
