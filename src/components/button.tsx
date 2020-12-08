import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../themes/light-theme';

interface IButton {
  buttonType: types;
  size: sizes;
}

const ButtonComponent = styled.button<IButton>`
  margin: 0;
  border: 0;
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
  color: ${(props) => {
    if (!props.disabled) {
      if (
        props.buttonType == 'outline-primary' ||
        props.buttonType == 'outline-negative'
      ) {
        switch (props.buttonType) {
          case 'outline-negative':
            return props.theme?.colors?.negative ?? lightTheme.colors.negative;
          case 'outline-primary':
          default:
            return props.theme?.colors?.primary ?? lightTheme.colors.primary;
        }
      } else {
        return '#FFFFFF';
      }
    }

    return '#FFFFFF';
  }};
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
  background: ${(props) => {
    if (!props.disabled) {
      if (
        props.buttonType !== 'outline-primary' &&
        props.buttonType !== 'outline-negative'
      ) {
        switch (props.buttonType) {
          case 'negative':
            return props.theme?.colors?.negative ?? lightTheme.colors.negative;
          case 'primary':
          default:
            return props.theme?.colors?.primary ?? lightTheme.colors.primary;
        }
      } else {
        return 'none';
      }
    } else {
      return props.theme?.colors?.disabled ?? lightTheme.colors.disabled;
    }
  }};
  border: ${(props) => {
    if (!props.disabled) {
      if (
        props.buttonType == 'outline-primary' ||
        props.buttonType == 'outline-negative'
      ) {
        switch (props.buttonType) {
          case 'outline-negative':
            return `2px solid ${
              props.theme?.colors?.negative ?? lightTheme.colors.negative
            }`;
          case 'outline-primary':
          default:
            return `2px solid ${
              props.theme?.colors?.primary ?? lightTheme.colors.primary
            }`;
        }
      } else {
        switch (props.buttonType) {
          case 'negative':
            return `2px solid ${
              props.theme?.colors?.negative ?? lightTheme.colors.negative
            }`;
          case 'primary':
          default:
            return `2px solid ${
              props.theme?.colors?.primary ?? lightTheme.colors.primary
            }`;
        }
      }
    } else {
      return `2px solid ${
        props.theme?.colors?.disabled ?? lightTheme.colors.disabled
      }`;
    }
  }};
  cursor: pointer;

  :hover {
    background: ${(props) => {
      if (!props.disabled) {
        if (
          props.buttonType !== 'outline-primary' &&
          props.buttonType !== 'outline-negative'
        ) {
          switch (props.buttonType) {
            case 'negative':
              return (
                props.theme?.colors?.hoverNegative ??
                lightTheme.colors.hoverNegative
              );
            case 'primary':
            default:
              return (
                props.theme?.colors?.hoverPrimary ??
                lightTheme.colors.hoverPrimary
              );
          }
        } else {
          return 'none';
        }
      } else {
        return props.theme?.colors?.disabled ?? lightTheme.colors.disabled;
      }
    }};
    border: ${(props) => {
      if (!props.disabled) {
        if (
          props.buttonType == 'outline-primary' ||
          props.buttonType == 'outline-negative'
        ) {
          switch (props.buttonType) {
            case 'outline-negative':
              return `2px solid ${
                props.theme?.colors?.hoverNegative ??
                lightTheme.colors.hoverNegative
              }`;
            case 'outline-primary':
            default:
              return `2px solid ${
                props.theme?.colors?.hoverPrimary ??
                lightTheme.colors.hoverPrimary
              }`;
          }
        } else {
          switch (props.buttonType) {
            case 'negative':
              return `2px solid ${
                props.theme?.colors?.hoverNegative ??
                lightTheme.colors.hoverNegative
              }`;
            case 'primary':
            default:
              return `2px solid ${
                props.theme?.colors?.hoverPrimary ??
                lightTheme.colors.hoverPrimary
              }`;
          }
        }
      } else {
        return `2px solid ${
          props.theme?.colors?.disabled ?? lightTheme.colors.disabled
        }`;
      }
    }};
    color: ${(props) => {
      if (!props.disabled) {
        if (
          props.buttonType == 'outline-primary' ||
          props.buttonType == 'outline-negative'
        ) {
          switch (props.buttonType) {
            case 'outline-negative':
              return (
                props.theme?.colors?.hoverNegative ??
                lightTheme.colors.hoverNegative
              );
            case 'outline-primary':
            default:
              return (
                props.theme?.colors?.hoverPrimary ??
                lightTheme.colors.hoverPrimary
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
    background: ${(props) => {
      switch (props.buttonType) {
        case 'outline-primary':
        case 'outline-negative':
          return 'none';
        case 'negative':
          return (
            props.theme?.colors?.activeNegative ??
            lightTheme.colors.activeNegative
          );
        case 'primary':
        default:
          return (
            props.theme?.colors?.activePrimary ??
            lightTheme.colors.activePrimary
          );
      }
    }};
    border: ${(props) => {
      if (!props.disabled) {
        switch (props.buttonType) {
          case 'outline-negative':
          case 'negative':
            return `2px solid ${
              props.theme?.colors?.activeNegative ??
              lightTheme.colors.activeNegative
            }`;
          case 'primary':
          case 'outline-primary':
          default:
            return `2px solid ${
              props.theme?.colors?.activePrimary ??
              lightTheme.colors.activePrimary
            }`;
        }
      } else {
        return `2px solid ${
          props.theme?.colors?.disabled ?? lightTheme.colors.disabled
        }`;
      }
    }};
    color: ${(props) => {
      if (!props.disabled) {
        if (
          props.buttonType == 'outline-primary' ||
          props.buttonType == 'outline-negative'
        ) {
          switch (props.buttonType) {
            case 'outline-negative':
              return (
                props.theme?.colors?.activeNegative ??
                lightTheme.colors.activeNegative
              );
            case 'outline-primary':
            default:
              return (
                props.theme?.colors?.activePrimary ??
                lightTheme.colors.activePrimary
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

export interface IProps {
  buttonType?: types;
  label?: string;
  size?: sizes;
}

export const Button: React.FC<IProps> = (props) => {
  const { children, buttonType = 'primary', label = 'BUTTON', size = 'medium' } = props;

  return (
    <ButtonComponent {...props} buttonType={buttonType} size={size}>
      {children ?? label}
    </ButtonComponent>
  );
};

type types = 'primary' | 'negative' | 'outline-primary' | 'outline-negative';
type sizes = 'small' | 'medium' | 'large';
