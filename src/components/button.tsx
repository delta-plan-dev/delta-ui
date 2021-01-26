import React from 'react';
import styled from 'styled-components';
import { RefForwardingComponent } from '../helpers';
import { lightTheme } from '../themes/light-theme';

type variants =
  | 'primary'
  | 'negative'
  | 'outline-primary'
  | 'outline-negative'
  | 'link';
type sizes = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: variants;
  size?: sizes;
  as?: React.ElementType;
}

type ButtonType = RefForwardingComponent<'button', ButtonProps>;

export const BaseButton: ButtonType = React.forwardRef((props, ref) => {
  const { as = 'button', ...other } = props;

  const Component = as;

  return <Component ref={ref} {...other} />;
});

export const Component = styled(BaseButton)`
  display: inline-block;
  box-sizing: border-box;

  margin: 0;
  outline: 0;
  padding: 8px 16px;

  border-radius: 30px;

  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;

  cursor: pointer;

  &.small-button {
    font-size: 10px;
    line-height: 12px;
  }
  &.medium-button {
    font-size: 12px;
    line-height: 14px;
  }
  &.large-button {
    font-size: 16px;
    line-height: 18px;
  }

  &.primary-button {
    background-color: ${(props) =>
      props.theme.colors.primary.main ?? lightTheme.colors.primary.main};
    border: 2px solid
      ${(props) =>
        props.theme.colors.primary.main ?? lightTheme.colors.primary.main};
    color: ${(props) =>
      props.theme.colors.white.main ?? lightTheme.colors.white.main};
    text-decoration: none !important;
  }
  &.primary-button:hover {
    background-color: ${(props) =>
      props.theme.colors.primary.hover ?? lightTheme.colors.primary.hover};
    border: 2px solid
      ${(props) =>
        props.theme.colors.primary.hover ?? lightTheme.colors.primary.hover};
    text-decoration: none !important;
  }
  &.primary-button:active {
    background-color: ${(props) =>
      props.theme.colors.primary.active ?? lightTheme.colors.primary.active};
    border: 2px solid
      ${(props) =>
        props.theme.colors.primary.active ?? lightTheme.colors.primary.active};
    text-decoration: none !important;
  }

  &.negative-button {
    background-color: ${(props) =>
      props.theme.colors.error.main ?? lightTheme.colors.error.main};
    border: 2px solid
      ${(props) =>
        props.theme.colors.error.main ?? lightTheme.colors.error.main};
    color: ${(props) =>
      props.theme.colors.white.main ?? lightTheme.colors.white.main};
    text-decoration: none !important;
  }
  &.negative-button:hover {
    background-color: ${(props) =>
      props.theme.colors.error.hover ?? lightTheme.colors.error.hover};
    border: 2px solid
      ${(props) =>
        props.theme.colors.error.hover ?? lightTheme.colors.error.hover};
    text-decoration: none !important;
  }
  &.negative-button:active {
    background-color: ${(props) =>
      props.theme.colors.error.active ?? lightTheme.colors.error.active};
    border: 2px solid
      ${(props) =>
        props.theme.colors.error.active ?? lightTheme.colors.error.active};
    text-decoration: none !important;
  }

  &.outline-primary-button {
    background: none;
    border: 2px solid
      ${(props) =>
        props.theme.colors.primary.main ?? lightTheme.colors.primary.main};
    color: ${(props) =>
      props.theme.colors.primary.main ?? lightTheme.colors.primary.main};
    text-decoration: none !important;
  }
  &.outline-primary-button:hover {
    border: 2px solid
      ${(props) =>
        props.theme.colors.primary.hover ?? lightTheme.colors.primary.hover};
    color: ${(props) =>
      props.theme.colors.primary.hover ?? lightTheme.colors.primary.hover};
    text-decoration: none !important;
  }
  &.outline-primary-button:active {
    border: 2px solid
      ${(props) =>
        props.theme.colors.primary.active ?? lightTheme.colors.primary.active};
    color: ${(props) =>
      props.theme.colors.primary.active ?? lightTheme.colors.primary.active};
    text-decoration: none !important;
  }

  &.outline-negative-button {
    background: none;
    border: 2px solid
      ${(props) =>
        props.theme.colors.error.main ?? lightTheme.colors.error.main};
    color: ${(props) =>
      props.theme.colors.error.main ?? lightTheme.colors.error.main};
    text-decoration: none !important;
  }
  &.outline-negative-button:hover {
    border: 2px solid
      ${(props) =>
        props.theme.colors.error.hover ?? lightTheme.colors.error.hover};
    color: ${(props) =>
      props.theme.colors.error.hover ?? lightTheme.colors.error.hover};
    text-decoration: none !important;
  }
  &.outline-negative-button:active {
    border: 2px solid
      ${(props) =>
        props.theme.colors.error.active ?? lightTheme.colors.error.active};
    color: ${(props) =>
      props.theme.colors.error.active ?? lightTheme.colors.error.active};
    text-decoration: none !important;
  }

  &.link-button {
    background: none;
    padding: 10px 18px;
    border: none;
    color: ${(props) =>
      props.theme.colors.primary.main ?? lightTheme.colors.primary.main};
    text-decoration: underline !important;
  }
  &.link-button:hover {
    color: ${(props) =>
      props.theme.colors.primary.hover ?? lightTheme.colors.primary.hover};
    text-decoration: none !important;
  }
  &.link-button:active {
    color: ${(props) =>
      props.theme.colors.primary.active ?? lightTheme.colors.primary.active};
    text-decoration: none !important;
  }
`;

export const Button: ButtonType = React.forwardRef(
  (props: ButtonProps, ref) => {
    const { variant = 'primary', size = 'medium', className, ...other } = props;

    return (
      <Component
        ref={ref}
        className={`${
          className ? `${className} ` : ''
        }${variant}-button ${size}-button`}
        {...other}
      />
    );
  },
);
