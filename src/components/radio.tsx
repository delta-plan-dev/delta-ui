import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';

interface IRadioComponent {
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
}

export interface IRadioOption extends IRadioComponent {
  value: any;
  label: string | React.ReactElement;
  checked?: boolean;
  isDisabled?: boolean;
}

const RadioComponent = styled.label<IRadioComponent>`
  display: flex;
  cursor: pointer;
`;

const RadioComponentValueWrapper = styled.div`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.gray.main};
  height: fit-content;
  width: fit-content;
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

export interface IProps extends IRadioComponent {
  option: IRadioOption;
  onClick?: (option: IRadioOption) => void;
  checked?: boolean;
  style?: CSSProperties;
}

export const Radio: React.FC<IProps> = (props) => {
  const {
    option,
    checked = option.checked || false,
    isDisabled = option.isDisabled || false,
    size = 'medium',
    onClick = () => {},
    style,
    ...other
  } = props;

  return (
    <RadioComponent
      className={'radio-button'}
      size={size}
      isDisabled={isDisabled}
      onClick={() => {
        if (isDisabled) {
          return;
        }
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
