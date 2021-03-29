import React  from 'react';
import styled from 'styled-components';

export interface IProps {
  size?: string | number;
  beam?: string | number;
}

const StyledSpinner = styled('span')<IProps>`
  @keyframes spinner-border {
    to {
      transform: rotate(1turn);
    }
  }

  display: inline-block;
  vertical-align: text-bottom;
  border: ${(props: IProps) => {
    const beam = props.beam;
    const sizeUnit = typeof beam == 'number' ? `${beam}px` : beam;
    return `${sizeUnit} solid;  border-right: ${sizeUnit} solid transparent;`;
  }}
    
  border-radius: 50%;
  animation: spinner-border 0.75s linear infinite;
  ${(props: IProps) => {
    const size = props.size;
    const sizeUnit = typeof size == 'number' ? `${size}px` : size;
    return `width: ${sizeUnit}; height: ${sizeUnit}`;
  }}
`;

const Spinner: React.FC<IProps> = React.memo((props) => {
  const { size = 25, beam = 4 } = props;
  return <StyledSpinner size={size} beam={beam} {...props} />;
});

export default Spinner
