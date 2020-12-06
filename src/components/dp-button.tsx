import React from 'react';
import styled from 'styled-components';

const Btn = styled('span')``;

interface IProps {
  as?: React.FunctionComponent;
}

export const DpButton: React.FunctionComponent<IProps> = ({ children }) => {
  return <Btn>{children}</Btn>;
};
