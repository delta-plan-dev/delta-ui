import React, { CSSProperties } from 'react';
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

const Title = styled.div<IButton>`
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

const ButtonWrapper = styled.div<IButton>`
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
    props.active && !props.disableActiveColor ? '#3fd200' : '#e0e0e0'};
  transition-duration: 0.2s;
`;

const Button = styled.div<IButton>`
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
          return props.active ? '12px' : '0';
        case 'medium':
          return props.active ? '16px' : '0';
        case 'large':
          return props.active ? '20px' : '0';
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

interface IButton {
  // do not use it
  active?: boolean;
  size: 'small' | 'medium' | 'large';
  disableActiveColor?: boolean;
}

export interface IProps extends IButton {
  title?: string;
  titleLeft?: string;
  titleRight?: string;
  titleSide?: 'left' | 'right';
  value: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  style?: CSSProperties;
}

export const Switch: React.FC<IProps> = (props) => {
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
        <Title size={size} className="switch-title-left">
          {titleLeft || title}
        </Title>
      )}
      <ButtonWrapper
        active={value}
        disableActiveColor={disableActiveColor}
        size={size}
      >
        <Button active={value} size={size} />
      </ButtonWrapper>
      {((title && titleSide === 'right') || titleRight) && (
        <Title size={size} className="switch-title-right">
          {titleRight || title}
        </Title>
      )}
    </SwitchComponent>
  );
};
