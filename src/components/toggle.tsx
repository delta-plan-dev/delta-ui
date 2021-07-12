import React from 'react'
import styled from 'styled-components'
import { lightTheme } from '../themes/light-theme'

const ToggleComponent = styled.div`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;

  &.disabled {
    cursor: no-drop;
  }
`

const Title = styled.div<IToggleProps>`
  color: ${(props) =>
    props.theme?.colors?.secondary.main ?? lightTheme.colors.secondary.main};

  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px'
      case 'medium':
        return '18px'
      case 'large':
        return '24px'
      default:
        return '0'
    }
  }};

  &.toggle-title-left {
    margin-right: 5px;
  }

  &.toggle-title-right {
    margin-left: 5px;
  }
`

const ButtonWrapper = styled.div<IToggleProps>`
  display: inline-block;
  width: ${(props) => {
    switch (props.size) {
      case 'small':
        return '30px'
      case 'medium':
        return '40px'
      case 'large':
        return '50px'
      default:
        return '0'
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case 'small':
        return '18px'
      case 'medium':
        return '24px'
      case 'large':
        return '30px'
      default:
        return '0'
    }
  }};
  border-radius: ${(props) => {
    switch (props.size) {
      case 'small':
        return '9px'
      case 'medium':
        return '12px'
      case 'large':
        return '15px'
      default:
        return '0'
    }
  }};
  background-color: ${(props) =>
    props.value && !props.disableActiveColor ? '#3fd200' : '#e0e0e0'};
  transition-duration: 0.2s;
`

const Button = styled.div<IToggleProps>`
  width: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px'
      case 'medium':
        return '18px'
      case 'large':
        return '24px'
      default:
        return '0'
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case 'small':
        return '12px'
      case 'medium':
        return '18px'
      case 'large':
        return '24px'
      default:
        return '0'
    }
  }};
  margin: 3px;
  transform: translateX(
    ${(props) => {
      switch (props.size) {
        case 'small':
          return props.value ? '12px' : '0'
        case 'medium':
          return props.value ? '16px' : '0'
        case 'large':
          return props.value ? '20px' : '0'
        default:
          return '0'
      }
    }}
  );
  border-radius: 50%;
  background-color: ${(props) =>
    props.theme?.colors?.light.main ?? lightTheme.colors.light.main};
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  transition-duration: 0.2s;
`

export interface IToggleProps {
  value?: boolean
  size?: 'small' | 'medium' | 'large'
  disableActiveColor?: boolean

  /** @deprecated */
  title?: string

  titleLeft?: string
  titleRight?: string

  /** @deprecated */
  titleSide?: 'left' | 'right'

  /** @deprecated */
  disabled?: boolean

  isDisabled?: boolean
  onChange?: (value: boolean) => void
}

export const Toggle: React.FC<IToggleProps> = (props) => {
  const {
    title,
    titleSide = 'right',
    titleLeft,
    titleRight,
    value = false,
    disabled = false,
    isDisabled = disabled,
    disableActiveColor = false,
    onChange,
    size = 'medium',
    ...other
  } = props

  return (
    <ToggleComponent
      onClick={() => {
        if (isDisabled) {
          return
        }
        if (!onChange) {
          return
        }
        onChange(!value)
      }}
      className={isDisabled ? 'disabled' : ''}
      {...other}
    >
      {((title && titleSide === 'left') || titleLeft) && (
        <Title value={value} size={size} className="toggle-title-left">
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
        <Title value={value} size={size} className="toggle-title-right">
          {titleRight || title}
        </Title>
      )}
    </ToggleComponent>
  )
}
