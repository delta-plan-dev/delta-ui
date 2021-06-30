import React from 'react';
import styled from 'styled-components';
import { RefForwardingComponent } from '../helpers';
import { lightTheme } from '../themes/light-theme';

type variants =
  | 'primary'
  | 'outline-primary'
  | 'negative'
  | 'outline-negative'
  | 'success'
  | 'outline-success'
  | 'link';
type sizes = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  variant?: variants;
  size?: sizes;
  isDisabled?: boolean;
}

type ButtonType = RefForwardingComponent<'button', ButtonProps>;

export const BaseButton = React.forwardRef<ButtonType, ButtonProps>(
  (props, ref) => {
    const { as = 'button', ...other } = props;

    const Component = as;

    return <Component ref={ref} {...other} />;
  }
);

export const Component = styled(BaseButton)`
  box-sizing: border-box;

  display: inline-block;

  margin: 0;
  outline: 0;
  padding: 0 12px;

  border: 2px solid;
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-family: OpenSans;
  font-variant-caps: normal;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-spacing: normal;

  cursor: pointer;

  // Sizes
  &.small-button {
    font-size: 12px;
    height: 30px;
  }
  &.medium-button {
    font-size: 14px;
    height: 36px;
  }
  &.large-button {
    font-size: 16px;
    height: 42px;
  }

  // Variants
  &.primary-button {
    color: ${({ theme }) =>
      theme.colors.light.main ?? lightTheme.colors.light.main};
    background-color: ${({ theme }) =>
      theme.colors.primary.main ?? lightTheme.colors.primary.main};
    border-color: ${({ theme }) =>
      theme.colors.primary.main ?? lightTheme.colors.primary.main};
  }
  &.primary-button:hover {
    background-color: ${({ theme }) =>
      theme.colors.primary.hover ?? lightTheme.colors.primary.hover};
    border-color: ${({ theme }) =>
      theme.colors.primary.hover ?? lightTheme.colors.primary.hover};
  }
  &.primary-button:active {
    background-color: ${({ theme }) =>
      theme.colors.primary.active ?? lightTheme.colors.primary.active};
    border-color: ${({ theme }) =>
      theme.colors.primary.active ?? lightTheme.colors.primary.active};
  }
`;

export const Button: ButtonType = React.forwardRef<ButtonType, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'medium',
      isDisabled = false,
      className = '',
      children,
      ...other
    } = props;

    const classes = [
      className,
      `${variant}-button`,
      `${size}-button`,
      isDisabled ? 'disabled' : '',
    ]
      .filter((el) => !!el)
      .join(' ');

    console.log(classes);

    return (
      <Component ref={ref} className={classes} {...other}>
        {children}
      </Component>
    );
  }
);
