import React from 'react';
import styled from 'styled-components';

const Table = styled.table``;

export const DpTable: React.FunctionComponent = ({ children }) => {
  return <Table>{children}</Table>;
};
