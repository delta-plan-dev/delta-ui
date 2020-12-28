import React, { CSSProperties, useState } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';
import imgSelected from '../assets/images/select.svg';

interface ICheckBox {
  size: 'small' | 'medium' | 'large';
  isDisable: boolean;
}
const CheckBoxComponent = styled.label<ICheckBox>`
  display: inline-flex;
  cursor: pointer;
`;

const CheckBoxComponentValue = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid ${(props) => props.theme.colors.gray.main};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white.main};

  &.active {
    width: 20px;
    height: 20px;
    border: 0 solid ${(props) => props.theme.colors.gray.main};
    background-image: url(${imgSelected});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const CheckBoxComponentLabel = styled.div`
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
  style?: CSSProperties;
}

export const CheckBox: React.FC<IProps> = (props) => {
  const {
    label,
    size = 'medium',
    isDisable = false,
    value = false,
    onClick,
    style,
    ...other
  } = props;

  const [checked, setChecked] = useState<boolean>(value);

  const handleChange = () => {
    setChecked(!checked);
    onClick();
  };

  return (
    <CheckBoxComponent
      size={size}
      isDisable={isDisable}
      onClick={handleChange}
      style={style}
      {...other}
    >
      <CheckBoxComponentValue className={checked ? 'active' : ''} />
      {label && <CheckBoxComponentLabel>{label}</CheckBoxComponentLabel>}
    </CheckBoxComponent>
  );
};
