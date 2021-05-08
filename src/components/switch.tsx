import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';

const SwitchComponent = styled.div`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;

  &.disabled {
    cursor: no-drop;
  }
`;

const Title = styled.div<IButtonProps>`
  color: ${(props) =>
    props.theme?.colors?.secondary.main ?? lightTheme.colors.secondary.main};

  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'medium':
        return '18px';
      case 'large':
        return '24px';
      default:
        return '0';
    }
  }};

  &.switch-title-left {
    margin-right: 5px;
  }

  &.switch-title-right {
    margin-left: 5px;
  }
`;

const ButtonWrapper = styled.div<IButtonProps>`
  display: inline-block;
  width: ${(props) => {
    switch (props.size) {
      case 'small':
        return '30px';
      case 'medium':
        return '40px';
      case 'large':
        return '50px';
      default:
        return '0';
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case 'small':
        return '18px';
      case 'medium':
        return '24px';
      case 'large':
        return '30px';
      default:
        return '0';
    }
  }};
  border-radius: ${(props) => {
    switch (props.size) {
      case 'small':
        return '9px';
      case 'medium':
        return '12px';
      case 'large':
        return '15px';
      default:
        return '0';
    }
  }};
  background-color: ${(props) =>
    props.value && !props.disableActiveColor ? '#3fd200' : '#e0e0e0'};
  transition-duration: 0.2s;
`;

const Button = styled.div<IButtonProps>`
  width: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'medium':
        return '18px';
      case 'large':
        return '24px';
      default:
        return '0';
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px';
      case 'medium':
        return '18px';
      case 'large':
        return '24px';
      default:
        return '0';
    }
  }};
  margin: 3px;
  transform: translateX(
    ${(props) => {
      switch (props.size) {
        case 'small':
          return props.value ? '12px' : '0';
        case 'medium':
          return props.value ? '16px' : '0';
        case 'large':
          return props.value ? '20px' : '0';
        default:
          return '0';
      }
    }}
  );
  border-radius: 50%;
  background-color: ${(props) =>
    props.theme?.colors?.white.main ?? lightTheme.colors.white.main};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  transition-duration: 0.2s;
`;

interface IButtonProps {
  value: boolean;
  size: 'small' | 'medium' | 'large';
  disableActiveColor?: boolean;
}

export interface ISwitchProps extends IButtonProps {
  title?: string;
  titleLeft?: string;
  titleRight?: string;
  titleSide?: 'left' | 'right';
  disabled?: boolean;
  onChange: (value: boolean) => void;
}

export const Switch: React.FC<ISwitchProps> = (props) => {
  const {
    title,
    titleSide = 'right',
    titleLeft,
    titleRight,
    value = false,
    disabled = false,
    disableActiveColor = false,
    onChange,
    size = 'medium',
    ...other
  } = props;

  return (
    <SwitchComponent
      onClick={() => {
        if (disabled) {
          return;
        }
        onChange(!value);
      }}
      className={disabled ? 'disabled' : ''}
      {...other}
    >
      {((title && titleSide === 'left') || titleLeft) && (
        <Title value={value} size={size} className="switch-title-left">
          {titleLeft || title}
        </Title>
      )}
      <ButtonWrapper
        value={value}
        disableActiveColor={disableActiveColor}
        size={size}
      >
        <Button value={value} size={size} />
      </ButtonWrapper>
      {((title && titleSide === 'right') || titleRight) && (
        <Title value={value} size={size} className="switch-title-right">
          {titleRight || title}
        </Title>
      )}
    </SwitchComponent>
  );
};
