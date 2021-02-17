import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';

interface IRadio {
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
}
const RadioComponent = styled.label<IRadio>`
  display: flex;
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
  box-sizing: initial;

  &.active {
    background-color: ${(props) => props.theme.colors.primary.main};
  }
`;

const RadioComponentLabel = styled.div`
  margin-left: 5px;
  font: normal normal 13px/20px Montserrat, sans-serif;
  color: ${(props) =>
    props.theme?.colors?.secondary.main ?? lightTheme?.colors?.secondary.main};
`;

export interface IProps {
  option: { value: any; label: any };
  onClick?: (option: { value: any; label: any }) => void;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  checked?: boolean;
  style?: CSSProperties;
}

export const Radio: React.FC<IProps> = (props) => {
  const {
    option,
    checked = false,
    size = 'medium',
    disabled = false,
    onClick = () => {},
    style,
    ...other
  } = props;

  return (
    <RadioComponent
      className={'radio-button'}
      size={size}
      disabled={disabled}
      onClick={() => {
        onClick(option);
      }}
      style={style}
      {...other}
    >
      <RadioComponentValueWrapper className={checked ? 'active' : ''}>
        <RadioComponentValue className={checked ? 'active' : ''} />
      </RadioComponentValueWrapper>
      {option.label && (
        <RadioComponentLabel>{option.label}</RadioComponentLabel>
      )}
    </RadioComponent>
  );
};
