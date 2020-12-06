import React from 'react';
import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

const RouterLink = styled(Link)``;

interface IProps extends LinkProps {}

export const DpLink: React.FunctionComponent<IProps> = ({ children, to }) => {
  return <RouterLink to={to}>{children}</RouterLink>;
};
