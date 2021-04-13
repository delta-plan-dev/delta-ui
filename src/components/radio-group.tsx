import React, { useState } from 'react';
import { Radio } from './radio';
import styled from 'styled-components';

const Component = styled.div`
  display: flex;

  &.vertical {
    flex-direction: column;
  }

  &.vertical .radio-button {
    margin-bottom: 5px;
  }

  &.vertical .radio-button:last-child {
    margin-bottom: 0;
  }

  &.horizontal {
    flex-direction: row;
  }

  &.horizontal .radio-button {
    margin-right: 15px;
    margin-bottom: 0;
  }

  &.horizontal .radio-button:last-child {
    margin-right: 0;
  }
`;

export interface IProps {
  options: { value: any; label: any }[];
  direction?: 'vertical' | 'horizontal';
  onClick?: (option: { value: any; label: any }) => void;
}

export const RadioGroup: React.FC<IProps> = (props) => {
  const { options, direction = 'vertical', onClick = () => {} } = props;

  const [checkList, setCheckList] = useState<boolean[]>(
    options.map(() => false)
  );

  return (
    <Component className={`radio-group ${direction}`}>
      {options.map((option, index) => (
        <Radio
          key={`radio-${index}`}
          option={option}
          checked={checkList[index]}
          onClick={(value) => {
            setCheckList(options.map((_, opIndex) => index === opIndex));
            onClick(value);
          }}
        />
      ))}
    </Component>
  );
};
