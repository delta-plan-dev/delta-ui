import React from 'react';
import styled from 'styled-components';
import { DeltaPrefixRefForwardingComponent } from '../helpers';
import { lightTheme } from '../themes/light-theme';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  variant?: 'primary' | 'negative' | 'outline-primary' | 'outline-negative';
  size?: 'small' | 'medium' | 'large';
  isDisable?: boolean;
  onClick?: () => void;
  as?: React.ElementType;
}

type ButtonType = DeltaPrefixRefForwardingComponent<'button', ButtonProps>;

export const BaseButton: ButtonType = React.forwardRef(
  (props: ButtonProps, ref) => {
    const { as = 'button', ...other } = props;

    const Component = as;

    return <Component {...other} ref={ref} />;
  },
);

interface IButton {
  variant: 'primary' | 'negative' | 'outline-primary' | 'outline-negative';
  size: 'small' | 'medium' | 'large';
  isDisable: boolean;
}

const ButtonComponent = styled(BaseButton)<IButton>`
  display: inline-block;    
  margin: 0;
  outline: 0;
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '6px 12px';
      case 'large':
        return '12px 24px';
      case 'medium':
      default:
        return '8px 16px';
    }
  }};
  border-radius: 30px;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '10px';
      case 'large':
        return '16px';
      case 'medium':
      default:
        return '12px';
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case 'small':
        return '10px';
      case 'large':
        return '16px';
      case 'medium':
      default:
        return '12px';
    }
  }};
  color: ${(props) => {
    if (!props.isDisable) {
      if (
        props.variant == 'outline-primary' ||
        props.variant == 'outline-negative'
      ) {
        switch (props.variant) {
          case 'outline-negative':
            return (
              props.theme?.colors?.error.main ?? lightTheme.colors.error.main
            );
          case 'outline-primary':
          default:
            return (
              props.theme?.colors?.primary.main ??
              lightTheme.colors.primary.main
            );
        }
      } else {
        return '#FFFFFF';
      }
    }

    return '#FFFFFF';
  }};
  text-decoration: none;
  background: ${(props) => {
    if (!props.isDisable) {
      if (
        props.variant !== 'outline-primary' &&
        props.variant !== 'outline-negative'
      ) {
        switch (props.variant) {
          case 'negative':
            return (
              props.theme?.colors?.error.main ?? lightTheme.colors.error.main
            );
          case 'primary':
          default:
            return (
              props.theme?.colors?.primary.main ??
              lightTheme.colors.primary.main
            );
        }
      } else {
        return 'none';
      }
    } else {
      return props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main;
    }
  }};
  border: ${(props) => {
    if (!props.isDisable) {
      if (
        props.variant == 'outline-primary' ||
        props.variant == 'outline-negative'
      ) {
        switch (props.variant) {
          case 'outline-negative':
            return `2px solid ${
              props.theme?.colors?.error.main ?? lightTheme.colors.error.main
            }`;
          case 'outline-primary':
          default:
            return `2px solid ${
              props.theme?.colors?.primary.main ??
              lightTheme.colors.primary.main
            }`;
        }
      } else {
        switch (props.variant) {
          case 'negative':
            return `2px solid ${
              props.theme?.colors?.error.main ?? lightTheme.colors.error.main
            }`;
          case 'primary':
          default:
            return `2px solid ${
              props.theme?.colors?.primary.main ??
              lightTheme.colors.primary.main
            }`;
        }
      }
    } else {
      return `2px solid ${
        props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main
      }`;
    }
  }};
  cursor: pointer;

  :hover {
    text-decoration: none;
    background: ${(props) => {
      if (!props.isDisable) {
        if (
          props.variant !== 'outline-primary' &&
          props.variant !== 'outline-negative'
        ) {
          switch (props.variant) {
            case 'negative':
              return (
                props.theme?.colors?.error.hover ??
                lightTheme.colors.error.hover
              );
            case 'primary':
            default:
              return (
                props.theme?.colors?.primary.hover ??
                lightTheme.colors.primary.hover
              );
          }
        } else {
          return 'none';
        }
      } else {
        return props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main;
      }
    }};
    border: ${(props) => {
      if (!props.isDisable) {
        if (
          props.variant == 'outline-primary' ||
          props.variant == 'outline-negative'
        ) {
          switch (props.variant) {
            case 'outline-negative':
              return `2px solid ${
                props.theme?.colors?.error.hover ??
                lightTheme.colors.error.hover
              }`;
            case 'outline-primary':
            default:
              return `2px solid ${
                props.theme?.colors?.primary.hover ??
                lightTheme.colors.primary.hover
              }`;
          }
        } else {
          switch (props.variant) {
            case 'negative':
              return `2px solid ${
                props.theme?.colors?.error.hover ??
                lightTheme.colors.error.hover
              }`;
            case 'primary':
            default:
              return `2px solid ${
                props.theme?.colors?.primary.hover ??
                lightTheme.colors.primary.hover
              }`;
          }
        }
      } else {
        return `2px solid ${
          props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main
        }`;
      }
    }};
    color: ${(props) => {
      if (!props.isDisable) {
        if (
          props.variant == 'outline-primary' ||
          props.variant == 'outline-negative'
        ) {
          switch (props.variant) {
            case 'outline-negative':
              return (
                props.theme?.colors?.error.hover ??
                lightTheme.colors.error.hover
              );
            case 'outline-primary':
            default:
              return (
                props.theme?.colors?.primary.hover ??
                lightTheme.colors.primary.hover
              );
          }
        } else {
          return '#FFFFFF';
        }
      }

      return '#FFFFFF';
    }};
  }

  :active {
    text-decoration: none;
    background: ${(props) => {
      if (!props.isDisable) {
        switch (props.variant) {
          case 'outline-primary':
          case 'outline-negative':
            return 'none';
          case 'negative':
            return (
              props.theme?.colors?.error.active ??
              lightTheme.colors.error.active
            );
          case 'primary':
          default:
            return (
              props.theme?.colors?.primary.active ??
              lightTheme.colors.primary.active
            );
        }
      } else {
        return `${
          props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main
        }`;
      }
    }};
    border: ${(props) => {
      if (!props.isDisable) {
        switch (props.variant) {
          case 'outline-negative':
          case 'negative':
            return `2px solid ${
              props.theme?.colors?.error.active ??
              lightTheme.colors.error.active
            }`;
          case 'primary':
          case 'outline-primary':
          default:
            return `2px solid ${
              props.theme?.colors?.primary.active ??
              lightTheme.colors.primary.active
            }`;
        }
      } else {
        return `2px solid ${
          props.theme?.colors?.gray.main ?? lightTheme.colors.gray.main
        }`;
      }
    }};
    color: ${(props) => {
      if (!props.isDisable) {
        if (
          props.variant == 'outline-primary' ||
          props.variant == 'outline-negative'
        ) {
          switch (props.variant) {
            case 'outline-negative':
              return (
                props.theme?.colors?.error.active ??
                lightTheme.colors.error.active
              );
            case 'outline-primary':
            default:
              return (
                props.theme?.colors?.primary.active ??
                lightTheme.colors.primary.active
              );
          }
        } else {
          return '#FFFFFF';
        }
      }

      return '#FFFFFF';
    }};
  }
}
`;

export const Button: ButtonType = React.forwardRef(
  (props: ButtonProps, ref) => {
    const {
      children,
      variant = 'primary',
      label = 'BUTTON',
      size = 'medium',
      isDisable = false,
      ...other
    } = props;

    return (
      <ButtonComponent
        variant={variant}
        size={size}
        isDisable={isDisable}
        {...other}
        ref={ref}
      >
        {children ?? label}
      </ButtonComponent>
    );
  },
);
