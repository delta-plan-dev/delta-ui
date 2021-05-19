import React, { useEffect, useState } from 'react';
import { IRadioOption, Radio } from './radio';
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
  options: IRadioOption[];
  direction?: 'vertical' | 'horizontal';
  onClick?: (option: IRadioOption) => void;
}

export const RadioGroup: React.FC<IProps> = (props) => {
  const { options, direction = 'vertical', onClick = () => {} } = props;

  const [radioList, setRadioList] = useState<IRadioOption[]>(options);

  useEffect(() => {
    if (options.filter((value) => value.checked).length >= 2) {
      //throw Error
      console.warn('Cannot use more 2 true checked options in RadioGroup');
    }

    setRadioList(options);
  }, [options]);

  return (
    <Component className={`radio-group ${direction}`}>
      {radioList.map((option, elementIndex) => (
        <Radio
          key={`radio-${elementIndex}-${option.value.toString()}`}
          option={option}
          onClick={(value) => {
            setRadioList(
              options.map((value, optionIndex) => ({
                ...value,
                checked: optionIndex == elementIndex,
              }))
            );
            onClick(value);
          }}
        />
      ))}
    </Component>
  );
};
