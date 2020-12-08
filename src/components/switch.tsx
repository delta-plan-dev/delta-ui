import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-flex;
  cursor: pointer;
`;

const Title = styled.div`
  line-height: 24px;
  margin-left: 5px;
  color: ${(props) =>
    !!props.theme?.colors?.secondary
      ? props.theme.colors.secondary
      : '#212121'};
`;

const ButtonWrapper = styled.div<{ active: boolean, size: 'small' | 'medium' | 'large' }>`
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
  background-color: ${(props) => (props.active ? '#3fd200' : '#e0e0e0')};
  transition-duration: 0.2s;
`;

const Button = styled.div<{ active: boolean, size: 'small' | 'medium' | 'large' }>`
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
    !!props.theme?.colors?.main ? props.theme.colors.main : '#fcfcfc'};
  box-shadow: 0 0 3px rgba(0, 0, 0, .25);
  transition-duration: 0.2s;
`;

export interface IProps {
  title?: string;
  titleSide?: 'left' | 'right';
  value: boolean;
  handleChange: (value: boolean) => void;
  size?: 'small' | 'medium' | 'large';
}

export const Switch: React.FC<IProps> = (props) => {
  const {
    title,
    titleSide = 'right',
    value = false,
    handleChange,
    size = 'medium',
  } = props;

  return (
    <Label
      onClick={() => {
        handleChange(!value);
      }}
    >
      {title && titleSide === 'left' && <Title>{title} </Title>}
      <ButtonWrapper active={value} size={size}>
        <Button active={value} size={size} />
      </ButtonWrapper>
      {title && titleSide === 'right' && <Title> {title}</Title>}
    </Label>
  );
};
