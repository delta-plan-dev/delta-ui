import React, { CSSProperties, useState } from 'react'
import styled from 'styled-components'
import { lightTheme } from '../themes/light-theme'
import uncheckedCheckbox from '../assets/images/unchecked-checkbox.svg'
import checkedCheckbox from '../assets/images/checked-checkbox.svg'

interface ICheckBox {
  size: 'small' | 'medium' | 'large'
}

const CheckBoxComponent = styled.label<ICheckBox>`
  display: inline-flex;
  cursor: pointer;
  &.disabled {
    cursor: no-drop;
  }
`

const CheckBoxComponentValue = styled.div`
  box-sizing: border-box !important;
  width: 20px;
  height: 20px;
  border: 1px solid
    ${(props) =>
      props.theme.colors.secondary.main ?? lightTheme?.colors?.secondary.main};
  border-radius: 6px;
  background-image: url(${uncheckedCheckbox});
  background-color: #cdd8dd;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  &.active {
    background-image: url(${checkedCheckbox});
    background-color: #006fc7;
  }
`

const CheckBoxComponentLabel = styled.div`
  margin-left: 5px;
  font: normal normal 13px/20px 'Roboto', sans-serif;
  color: ${(props) =>
    props.theme?.colors?.secondary.main ?? lightTheme?.colors?.secondary.main};
`

export interface IProps {
  label?: string
  size?: 'small' | 'medium' | 'large'
  isDisabled?: boolean
  value: boolean
  onClick: () => void
  style?: CSSProperties
}

export const Checkbox: React.FC<IProps> = (props) => {
  const {
    label,
    size = 'medium',
    isDisabled = false,
    value = false,
    onClick,
    ...other
  } = props

  const [checked, setChecked] = useState<boolean>(value)

  const handleChange = () => {
    if (isDisabled) {
      return
    }

    setChecked(!checked)
    onClick()
  }

  return (
    <CheckBoxComponent
      className={isDisabled ? 'disabled' : ''}
      size={size}
      onClick={handleChange}
      {...other}
    >
      <CheckBoxComponentValue className={checked ? 'active' : ''} />
      {label && <CheckBoxComponentLabel>{label}</CheckBoxComponentLabel>}
    </CheckBoxComponent>
  )
}
