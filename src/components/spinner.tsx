import React from 'react';
import styled from 'styled-components';

type sizes = 'small' | 'medium' | 'large';

export interface ISpinnerComponent {
  size?: sizes | string | number;
  beam?: string | number;
}

const sizeMap: any = {
  small: '10px',
  medium: '12px',
  large: '16px',
};

const StyledSpinner = styled('span')<ISpinnerComponent>`
  @keyframes spinner-border {
    to {
      transform: rotate(1turn);
    }
  }

  display: inline-block;

  border: ${(props: ISpinnerComponent) => {
    const beam = props.beam;
    const sizeUnit = typeof beam == 'number' ? `${beam}px` : beam;
    return `${sizeUnit} solid;  border-right: ${sizeUnit} solid transparent;`;
  }}
    
  border-radius: 50%;
  animation: spinner-border 0.75s linear infinite;
  ${(props: ISpinnerComponent) => {
    const size = props.size;
    const _sizeMap = sizeMap[size || ''];
    const sizeUnit =
      typeof size == 'number' ? `${size}px` : _sizeMap ? _sizeMap : size;
    return `width: ${sizeUnit}; height: ${sizeUnit}`;
  }}
`;

export const Spinner: React.FC<ISpinnerComponent> = (props) => {
  let { size = 'large', beam = 4 } = props;

  return <StyledSpinner size={size} beam={beam} {...props} />;
};
